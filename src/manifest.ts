// Assigning the card's sensors from the manifests of the ESPHome components (CAN and UART).
//
// Each component offers a native API action with a response, in Home Assistant the service
// esphome.<node>_rotex_can_manifest or esphome.<node>_rotex_uart_manifest (argument "page"). The
// manifest lists every entity of the component with its stable key, its ESPHome domain and the name
// the user gave it in the YAML. An ESPHome entity's unique_id ends with "/<domain>/<name>", so the
// entity registry gives the entity_id, whatever the user renamed it to in Home Assistant.

export type Bus = "CAN" | "UART";

export const MANIFESTS: Record<Bus, { id: string; suffix: string }> = {
    CAN: { id: "rotex_hpsu_can", suffix: "_rotex_can_manifest" },
    UART: { id: "rotex_hpsu_uart", suffix: "_rotex_uart_manifest" },
};

export interface ManifestEntity {
    key: string;
    domain: string;
    name: string;
    internal?: boolean;
}

export interface Manifest {
    id: string;
    pages: number;
    entities: ManifestEntity[];
}

export interface RegistryEntry {
    entity_id: string;
    device_id?: string | null;
    platform?: string;
    unique_id?: string;
    original_name?: string | null;
}

export interface DeviceEntry {
    name?: string | null;
    name_by_user?: string | null;
}

export interface HassLike {
    services: Record<string, Record<string, unknown>>;
    devices?: Record<string, DeviceEntry>;
    callWS<T>(msg: Record<string, unknown>): Promise<T>;
}

export type BusError = "no_service" | "no_device" | "ambiguous" | "failed";

export interface BusResult {
    bus: Bus;
    service?: string;
    deviceId?: string;
    entities: Record<string, string>; // manifest key -> entity_id
    error?: BusError;
    message?: string;
}

// Services of the bus, e.g. ["hpsu_can_rotex_can_manifest"]
export function manifestServices(hass: HassLike, bus: Bus): string[] {
    return Object.keys(hass.services?.esphome ?? {}).filter(s => s.endsWith(MANIFESTS[bus].suffix)).sort();
}

// Reads all pages; every page repeats the header and states "pages".
export async function loadManifest(hass: HassLike, service: string): Promise<Manifest> {
    const call = async (page: number): Promise<any> => {
        const result = await hass.callWS<any>({
            type: "call_service", domain: "esphome", service, service_data: { page }, return_response: true,
        });
        return result?.response ?? {};
    };
    const first = await call(0);
    const pages = Math.max(1, Number(first.pages) || 1);
    const entities: ManifestEntity[] = [...(first.entities ?? [])];
    for (let page = 1; page < pages; page++) {
        entities.push(...((await call(page)).entities ?? []));
    }
    return { id: String(first.id ?? ""), pages, entities };
}

// The registry entry of a manifest entity on the device: unique_id "/<domain>/<name>" at the end,
// otherwise the original name in the same domain.
export function findEntry(entity: ManifestEntity, entries: RegistryEntry[], deviceId: string): RegistryEntry | undefined {
    const own = entries.filter(e => e.device_id === deviceId && e.platform === "esphome");
    const suffix = `/${entity.domain}/${entity.name}`;
    const byId = own.find(e => e.unique_id?.endsWith(suffix));
    if (byId) return byId;
    const haDomain = entity.domain === "text_sensor" ? "sensor" : entity.domain;
    return own.find(e => e.original_name === entity.name && e.entity_id.startsWith(`${haDomain}.`));
}

const visible = (manifest: Manifest) => manifest.entities.filter(e => !e.internal);

// Number of manifest entities found per device
function counts(manifest: Manifest, entries: RegistryEntry[]): Map<string, number> {
    const devices = new Set(entries.filter(e => e.platform === "esphome" && e.device_id).map(e => e.device_id as string));
    const result = new Map<string, number>();
    for (const deviceId of devices) {
        const n = visible(manifest).filter(entity => findEntry(entity, entries, deviceId)).length;
        if (n > 0) result.set(deviceId, n);
    }
    return result;
}

export function slug(text: string): string {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

// The node name in the service name: "hpsu_can_rotex_can_manifest" -> "hpsu_can"
const nodeOf = (service: string, bus: Bus) => service.slice(0, -MANIFESTS[bus].suffix.length);

// Devices with all entities of the manifest. With several, the one whose name matches the node name
// of the service, as long as that is exactly one.
export function devicesWithManifest(manifest: Manifest, entries: RegistryEntry[], node: string, devices?: Record<string, DeviceEntry>): string[] {
    const total = visible(manifest).length;
    const full = [...counts(manifest, entries)].filter(([, n]) => n === total).map(([id]) => id);
    if (full.length <= 1) return full;
    const named = full.filter(id => {
        const device = devices?.[id];
        const name = device?.name || device?.name_by_user || "";
        return slug(name) === node;
    });
    return named.length === 1 ? named : full;
}

// Finds the service and device of the bus and the entity of every manifest key on that device.
// deviceId: the device chosen in the card; without one the device is determined from the manifests.
export async function resolveBus(hass: HassLike, bus: Bus, deviceId: string | undefined, entries: RegistryEntry[]): Promise<BusResult> {
    const result: BusResult = { bus, entities: {} };
    const services = manifestServices(hass, bus);
    if (!services.length) return { ...result, error: "no_service" };

    const loaded: { service: string; manifest: Manifest }[] = [];
    for (const service of services) {
        try {
            const manifest = await loadManifest(hass, service);
            if (manifest.id === MANIFESTS[bus].id) loaded.push({ service, manifest });
        } catch (err: any) {
            return { ...result, service, error: "failed", message: String(err?.message ?? err) };
        }
    }
    if (!loaded.length) return { ...result, error: "no_service" };

    let chosen: { service: string; manifest: Manifest; deviceId: string } | undefined;
    if (deviceId) {
        // the manifest with the most entities on the chosen device
        let best = 0;
        for (const entry of loaded) {
            const n = counts(entry.manifest, entries).get(deviceId) ?? 0;
            if (n > best) {
                best = n;
                chosen = { ...entry, deviceId };
            }
        }
        if (!chosen) return { ...result, deviceId, error: "no_device" };
    } else {
        const found = loaded.flatMap(entry =>
            devicesWithManifest(entry.manifest, entries, nodeOf(entry.service, bus), hass.devices).map(id => ({ ...entry, deviceId: id })));
        if (found.length === 0) return { ...result, error: "no_device" };
        if (found.length > 1) return { ...result, error: "ambiguous" };
        chosen = found[0];
    }

    for (const entity of visible(chosen.manifest)) {
        const entry = findEntry(entity, entries, chosen.deviceId);
        if (entry) result.entities[entity.key] = entry.entity_id;
    }
    return { ...result, service: chosen.service, deviceId: chosen.deviceId };
}

export interface CardValue {
    id: string;
    device?: Bus;
    key?: string;
}

export interface Change {
    id: string;
    from?: string;
    to: string;
}

export interface Plan {
    changes: Change[];       // values that get another entity
    unchanged: string[];     // values that already have the entity of the manifest
    missing: string[];       // values whose key the manifest of the device does not have: kept as they are
    devices: Partial<Record<Bus, string>>;   // devices found that the card had not set yet
    results: BusResult[];
}

// What the button changes: every value with a key gets the entity of its bus's device; a value
// without a result keeps its entity. Values without a key (helpers, other integrations) are left alone.
export function plan(values: CardValue[], current: Record<string, string | undefined>, devices: Partial<Record<Bus, string>>, results: BusResult[]): Plan {
    const out: Plan = { changes: [], unchanged: [], missing: [], devices: {}, results };
    for (const result of results) {
        if (result.deviceId && !result.error && devices[result.bus] !== result.deviceId) out.devices[result.bus] = result.deviceId;
    }
    for (const value of values) {
        if (!value.key || !value.device) continue;
        const result = results.find(r => r.bus === value.device);
        if (!result || result.error) continue;
        const entityId = result.entities[value.key];
        if (!entityId) {
            out.missing.push(value.id);
        } else if (current[value.id] === entityId) {
            out.unchanged.push(value.id);
        } else {
            out.changes.push({ id: value.id, from: current[value.id], to: entityId });
        }
    }
    return out;
}

// Applies a plan to the flat entities of the card.
export function apply(current: Record<string, string>, p: Plan): Record<string, string> {
    const next = { ...current };
    for (const change of p.changes) next[change.id] = change.to;
    return next;
}
