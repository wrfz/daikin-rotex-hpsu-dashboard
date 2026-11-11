import {
    svg_item_config,
    SVGItem,
    SVGValue,
    languages,
    validateConfig,
    layouts,
    DEFAULT_LAYOUT,
} from "./svg_item_config";

import type { LovelaceCardConfig } from "@ha/data/lovelace/config/card";
import type { HomeAssistant } from "@ha/types";

import { property, state } from "lit/decorators.js";
import { html, LitElement, css, nothing } from "lit";

declare global {
  interface Window {
    loadCardHelpers(): Promise<any>;
  }
}

const ensureArray = <T>(value: T | T[]): T[] => {
  return Array.isArray(value) ? value : [value];
};

type TabId = "appearance" | "devices" | "sensors";
type GroupBy = "function" | "bus";

// Sensors grouped by function. Ids that are not listed end up in "other".
const FUNCTION_GROUPS: { key: string; ids: string[] }[] = [
    { key: "refrigerant", ids: ["kompressor_an_aus", "verdichter", "expansion_valve", "pressure_equalization", "hot_gas", "hot_gas_condenser", "kondensat", "verdampfer", "luefter", "ta", "ta2"] },
    { key: "heating", ids: ["umwaelzpumpe", "umwaelzpumpe_an_aus", "durchfluss", "vorlauf_1", "vorlauf_2", "vorlauf_bh_1", "vorlauf_bh_2", "ruecklauf", "ruecklauf_2", "vorlauf_soll", "spread", "wasserdruck", "bypass"] },
    { key: "hotwater", ids: ["speicher", "speicher_soll", "mischer", "buh_power"] },
    { key: "info", ids: ["fehlercode", "betriebsmodus", "betriebsart", "thermische_leistung", "el_power", "cop", "t_room_is", "system_date", "system_time"] },
];

// Values that exist for both buses are shown side by side (CAN left, UART right)
const PAIRS: [string, string][] = [["ruecklauf", "ruecklauf_2"], ["vorlauf_1", "vorlauf_2"], ["vorlauf_bh_1", "vorlauf_bh_2"]];

const CLOSE_PATH = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";

const TEXTS: Record<string, Record<string, string>> = {
    de: {
        appearance: "Darstellung", devices: "Geräte", sensors: "Sensoren",
        layout: "Layout", animations: "Animationen",
        background: "Hintergrund", box: "Textfelder", text: "Text",
        show: "Hintergrund anzeigen", custom: "Eigene Farben verwenden",
        color: "Farbe", opacity: "Deckkraft",
        fill: "Füllung", fill_opacity: "Deckkraft der Füllung", border: "Rahmen", border_opacity: "Deckkraft des Rahmens",
        value_color: "Textfarbe", label_color: "Farbe der Beschriftung",
        custom_help: "Aus: es gilt der Stil des Layouts.",
        canDevice: "CAN-Gerät", uartDevice: "UART-Gerät",
        devices_help: "Die Geräte schränken die Auswahl der Sensoren ein.",
        assigned: "zugeordnet",
        group_by: "Gruppieren nach", by_function: "Funktion", by_bus: "Bus (CAN / UART)",
        search: "Suchen", clear: "Leeren", no_match: "Keine Treffer",
        refrigerant: "Kältekreis", heating: "Heizwasser", hotwater: "Warmwasser und Speicher", info: "Info und Betrieb", other: "Weitere",
        bus_can: "CAN", bus_uart: "UART", bus_other: "Extern / ohne Gerät",
        unit_warning: "Einheit {actual}, erwartet {expected}",
    },
    en: {
        appearance: "Appearance", devices: "Devices", sensors: "Sensors",
        layout: "Layout", animations: "Animations",
        background: "Background", box: "Text boxes", text: "Text",
        show: "Show background", custom: "Use custom colours",
        color: "Colour", opacity: "Opacity",
        fill: "Fill", fill_opacity: "Fill opacity", border: "Border", border_opacity: "Border opacity",
        value_color: "Text colour", label_color: "Label colour",
        custom_help: "Off: the style of the layout applies.",
        canDevice: "CAN device", uartDevice: "UART device",
        devices_help: "The devices narrow down the sensor choices.",
        assigned: "assigned",
        group_by: "Group by", by_function: "Function", by_bus: "Bus (CAN / UART)",
        search: "Search", clear: "Clear", no_match: "No matches",
        refrigerant: "Refrigerant circuit", heating: "Heating water", hotwater: "Hot water and tank", info: "Info and operation", other: "Other",
        bus_can: "CAN", bus_uart: "UART", bus_other: "External / no device",
        unit_warning: "Unit {actual}, expected {expected}",
    },
};

export class HpsuDashboardCardEditor extends LitElement {
    @property({ attribute: false }) public hass!: HomeAssistant;
    @property({ type: Object }) public config!: LovelaceCardConfig;

    @state() private language: string = "en";
    @state() private svgItemConfig: SVGItem[] = [];
    @state() private tab: TabId = "appearance";
    @state() private groupBy: GroupBy = "function";
    @state() private search: string = "";
    // UI-only switches ("use own colours"); they are not stored, the colours themselves are the setting
    @state() private ui = { background: false, box: false, text: false };
    private lastFired = "";

    async setConfig(config: LovelaceCardConfig) {

        // HACK: This call is necessary to load the ha-entity-picker components.
        const cardHelpers = await (window as any).loadCardHelpers();
        const entitiesCard = await cardHelpers.createCardElement({ type: "entities", entities: [] });
        await entitiesCard.constructor.getConfigElement();
        // HACK end

        // switch states are kept while the config is the one this editor just wrote; an external change (YAML) recomputes them
        if (JSON.stringify(config) !== this.lastFired) {
            const has = (g: any) => !!g && Object.keys(g).some(k => k !== "show" && g[k] !== undefined);
            this.ui = { background: has(config.background), box: has(config.box), text: has(config.text) };
        }
        this.config = validateConfig(config);
        this.svgItemConfig = svg_item_config.map(svg_item => ({
            ...svg_item,
            values: svg_item.values.map(value => ({
                ...value,
                entityId: this.config.entities?.[value.id] || null
            }))
        }));
    }

    protected willUpdate(changedProperties: Map<string, any>): void {
        if (changedProperties.has("hass") && this.hass?.language) {
            const lang = this.hass.language.split("-")[0];
            this.language = languages.includes(lang) ? lang : "en";
        }
    }

    private tr(key: string): string {
        return TEXTS[this.language]?.[key] ?? TEXTS.en[key] ?? key;
    }

    private allValues(): { item: SVGItem; value: SVGValue }[] {
        return this.svgItemConfig.flatMap(item => item.values.map(value => ({ item, value })));
    }

    private description(value: SVGValue): string {
        return value.texts[this.language as keyof typeof value.texts]?.desc || value.texts.en?.desc || value.id;
    }

    protected render() {
        if (!this.config) {
            return html``;
        }

        const tabs: TabId[] = ["appearance", "devices", "sensors"];
        return html`
            <div class="card-config">
                <div class="tabs" role="tablist">
                    ${tabs.map(id => html`
                        <button class="tab ${this.tab === id ? "active" : ""}" role="tab"
                            aria-selected=${this.tab === id}
                            @click=${() => { this.tab = id; }}>
                            ${this.tr(id)}
                        </button>
                    `)}
                </div>
                ${this.tab === "appearance" ? this.renderAppearance() : nothing}
                ${this.tab === "devices" ? this.renderDevices() : nothing}
                ${this.tab === "sensors" ? this.renderSensors() : nothing}
            </div>
        `;
    }

    // ---- tab: appearance ---------------------------------------------------------------------------------

    private renderAppearance() {
        const opacity = { number: { min: 0, max: 100, step: 1, mode: "slider", unit_of_measurement: "%" } };
        const showBg = this.config.background?.show !== false;
        const bgOn = showBg && this.ui.background;
        const schema = [
            {
                name: "layout",
                selector: { select: { mode: "dropdown", options: layouts.map(l => ({ value: l.id, label: l.labels[this.language as keyof typeof l.labels] ?? l.labels.en })) } },
            },
            { name: "animations", selector: { boolean: {} } },
            {
                type: "expandable", name: "background", title: this.tr("background"), schema: [
                    { name: "show", selector: { boolean: {} } },
                    { name: "custom", selector: { boolean: {} }, disabled: !showBg },
                    { name: "color", selector: { color_rgb: {} }, disabled: !bgOn },
                    { name: "opacity", selector: opacity, disabled: !bgOn },
                ],
            },
            {
                type: "expandable", name: "box", title: this.tr("box"), schema: [
                    { name: "custom", selector: { boolean: {} } },
                    { name: "fill", selector: { color_rgb: {} }, disabled: !this.ui.box },
                    { name: "fill_opacity", selector: opacity, disabled: !this.ui.box },
                    { name: "border", selector: { color_rgb: {} }, disabled: !this.ui.box },
                    { name: "border_opacity", selector: opacity, disabled: !this.ui.box },
                ],
            },
            {
                type: "expandable", name: "text", title: this.tr("text"), schema: [
                    { name: "custom", selector: { boolean: {} } },
                    { name: "value_color", selector: { color_rgb: {} }, disabled: !this.ui.text },
                    { name: "label_color", selector: { color_rgb: {} }, disabled: !this.ui.text },
                ],
            },
        ];

        const data = {
            layout: this.config.layout ?? DEFAULT_LAYOUT,
            animations: this.config.animations !== false,
            background: { show: showBg, custom: this.ui.background, opacity: 100, ...(this.config.background ?? {}) },
            box: { custom: this.ui.box, fill_opacity: 100, border_opacity: 100, ...(this.config.box ?? {}) },
            text: { custom: this.ui.text, ...(this.config.text ?? {}) },
        };

        return html`
            <ha-form
                .hass=${this.hass}
                .data=${data}
                .schema=${schema}
                .computeLabel=${(s: any) => this.labelFor(s)}
                .computeHelper=${(s: any) => (s.name === "custom" ? this.tr("custom_help") : "")}
                @value-changed=${this._appearanceChanged}>
            </ha-form>
        `;
    }

    private labelFor(schema: any): string {
        return this.tr(schema.name);
    }

    // Only values that differ from the defaults are written to the card config.
    private static compact(group: Record<string, any> | undefined, defaults: Record<string, any>): Record<string, any> | undefined {
        const result: Record<string, any> = {};
        for (const [key, value] of Object.entries(group ?? {})) {
            if (key === "custom" || value === undefined || value === null || value === "") continue;
            if (JSON.stringify(value) === JSON.stringify(defaults[key])) continue;
            result[key] = value;
        }
        return Object.keys(result).length ? result : undefined;
    }

    private _appearanceChanged(event: CustomEvent): void {
        event.stopPropagation();
        const data = (event.detail as any).value;
        const compact = HpsuDashboardCardEditor.compact;

        // switching off resets everything below it
        const bg = { ...data.background };
        const ui = { ...this.ui };
        if (bg.show === false) {
            ui.background = false;
            delete bg.color;
            delete bg.opacity;
        } else {
            ui.background = !!bg.custom;
            if (!ui.background) {
                delete bg.color;
                delete bg.opacity;
            }
        }
        const box = { ...data.box };
        ui.box = !!box.custom;
        if (!ui.box) {
            for (const key of ["fill", "fill_opacity", "border", "border_opacity"]) delete box[key];
        }
        const text = { ...data.text };
        ui.text = !!text.custom;
        if (!ui.text) {
            delete text.value_color;
            delete text.label_color;
        }
        this.ui = ui;

        this._fire({
            ...this.config,
            layout: data.layout === DEFAULT_LAYOUT ? undefined : data.layout,
            animations: data.animations === false ? false : undefined,
            background: compact(bg, { show: true, opacity: 100 }),
            box: compact(box, { fill_opacity: 100, border_opacity: 100 }),
            text: compact(text, {}),
        });
    }

    // ---- tab: devices --------------------------------------------------------------------------------------

    private renderDevices() {
        const assigned = Object.values(this.config.entities ?? {}).filter(Boolean).length;
        const total = this.allValues().length;
        const schema = [
            { name: "canDevice", selector: { device: {} } },
            { name: "uartDevice", selector: { device: {} } },
        ];
        return html`
            <ha-form
                .hass=${this.hass}
                .data=${{ canDevice: this.config.canDevice, uartDevice: this.config.uartDevice }}
                .schema=${schema}
                .computeLabel=${(s: any) => this.tr(s.name)}
                @value-changed=${this._devicesChanged}>
            </ha-form>
            <p class="hint">${this.tr("devices_help")}</p>
            <p class="hint">${assigned} / ${total} ${this.tr("assigned")}</p>
        `;
    }

    private _devicesChanged(event: CustomEvent): void {
        event.stopPropagation();
        const data = (event.detail as any).value;
        this._fire({ ...this.config, canDevice: data.canDevice, uartDevice: data.uartDevice });
    }

    // ---- tab: sensors / info ---------------------------------------------------------------------------------

    private renderSensors() {
        const all = this.allValues();

        let groups: { title: string; entries: { item: SVGItem; value: SVGValue }[] }[];
        if (this.groupBy === "function") {
            const used = new Set<string>();
            groups = FUNCTION_GROUPS.map(g => {
                const entries = g.ids.map(id => all.find(e => e.value.id === id)).filter((e): e is { item: SVGItem; value: SVGValue } => !!e);
                entries.forEach(e => used.add(e.value.id));
                return { title: this.tr(g.key), entries };
            });
            const rest = all.filter(e => !used.has(e.value.id));
            if (rest.length) groups.push({ title: this.tr("other"), entries: rest });
        } else {
            groups = [
                { title: this.tr("bus_can"), entries: all.filter(e => e.value.device === "CAN") },
                { title: this.tr("bus_uart"), entries: all.filter(e => e.value.device === "UART") },
                { title: this.tr("bus_other"), entries: all.filter(e => !e.value.device) },
            ].filter(g => g.entries.length);
        }

        const query = this.search.trim().toLowerCase();
        const matches = (e: { item: SVGItem; value: SVGValue }) => {
            if (!query) return true;
            const entityName = e.value.entityId ? (this.hass.states[e.value.entityId]?.attributes?.friendly_name ?? "") : "";
            return [this.description(e.value), e.value.id, e.value.entityId ?? "", entityName, e.value.device ?? ""].join(" ").toLowerCase().includes(query);
        };
        const rendered = groups.map(group => this.renderGroup(group.title, group.entries, matches, query));
        const anyMatch = groups.some(g => g.entries.some(matches));

        return html`
            <div class="toolbar">
                <ha-selector
                    .hass=${this.hass}
                    .selector=${{ select: { mode: "dropdown", options: [{ value: "function", label: this.tr("by_function") }, { value: "bus", label: this.tr("by_bus") }] } }}
                    .label=${this.tr("group_by")}
                    .value=${this.groupBy}
                    @value-changed=${(e: CustomEvent) => { e.stopPropagation(); this.groupBy = (e.detail as any).value; }}>
                </ha-selector>
                <div class="search">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{ text: {} }}
                        .label=${this.tr("search")}
                        .required=${false}
                        .value=${this.search}
                        @value-changed=${(e: CustomEvent) => { e.stopPropagation(); this.search = String((e.detail as any).value ?? ""); }}>
                    </ha-selector>
                    ${this.search ? html`
                        <ha-icon-button class="clear" .label=${this.tr("clear")} .path=${CLOSE_PATH}
                            @click=${() => { this.search = ""; }}></ha-icon-button>` : nothing}
                </div>
            </div>
            ${rendered}
            ${query && !anyMatch ? html`<p class="hint">${this.tr("no_match")}</p>` : nothing}
        `;
    }

    private renderGroup(title: string, entries: { item: SVGItem; value: SVGValue }[], matches: (e: { item: SVGItem; value: SVGValue }) => boolean, query: string) {
        const visible = entries.filter(matches);
        if (!visible.length) return nothing;
        const assigned = entries.filter(e => e.value.entityId).length;

        // CAN / UART pairs side by side (only in the grouping by function)
        const rows: unknown[] = [];
        const done = new Set<string>();
        for (const e of visible) {
            if (done.has(e.value.id)) continue;
            const pair = this.groupBy === "function" ? PAIRS.find(p => p.includes(e.value.id)) : undefined;
            const partner = pair ? visible.find(v => v.value.id === (pair[0] === e.value.id ? pair[1] : pair[0])) : undefined;
            if (pair && partner) {
                const [first, second] = pair[0] === e.value.id ? [e, partner] : [partner, e];
                done.add(first.value.id);
                done.add(second.value.id);
                rows.push(html`<div class="pair">${this.renderRow(first.item, first.value)}${this.renderRow(second.item, second.value)}</div>`);
            } else {
                done.add(e.value.id);
                rows.push(this.renderRow(e.item, e.value));
            }
        }

        return html`
            <ha-expansion-panel outlined .header=${`${title} (${assigned}/${entries.length})`} ?expanded=${query !== ""}>
                <div class="rows">${rows}</div>
            </ha-expansion-panel>
        `;
    }

    private renderRow(svg_item: SVGItem, value_item: SVGValue) {
        const bus = value_item.device ? ` · ${value_item.device}` : "";
        const warning = this.unitWarning(value_item);
        return html`
            <div class="row">
                <ha-selector
                    .hass=${this.hass}
                    .selector=${{ entity: { include_entities: this.getRelevantEntityIds(svg_item, value_item) } }}
                    .label=${this.description(value_item) + bus}
                    .required=${false}
                    .value=${value_item.entityId}
                    @value-changed=${this._entityChanged}
                    data-id=${value_item.id}>
                </ha-selector>
                ${warning ? html`<div class="warning">${warning}</div>` : nothing}
            </div>
        `;
    }

    // Warns when the chosen entity reports another unit than the card expects (e.g. °F instead of °C).
    private unitWarning(value_item: SVGValue): string {
        if (!value_item.entityId || value_item.unit === undefined) return "";
        const state = this.hass.states[value_item.entityId];
        const actual = state?.attributes?.unit_of_measurement;
        const expected = ensureArray(value_item.unit);
        if (!state || !actual || expected.includes(actual)) return "";
        return this.tr("unit_warning").replace("{actual}", String(actual)).replace("{expected}", expected.join(", "));
    }

    private getRelevantEntityIds(svg_item: SVGItem, value_item: SVGValue): string[] {
        const relevantEntityIds: string[] = [];

        const targetDeviceId = value_item.device === "UART" ? this.config.uartDevice : this.config.canDevice;
        const targetUnit = ensureArray(value_item.unit);

        for (const entityId in this.hass.states) {
            if (!Object.prototype.hasOwnProperty.call(this.hass.states, entityId)) {
                continue;
            }

            const entity = this.hass.states[entityId];
            const domain = entityId.substring(0, entityId.indexOf('.'));

            if (value_item.device && targetDeviceId) {
                const entityRegistryEntry = this.hass.entities[entityId];

                if (!entityRegistryEntry || entityRegistryEntry.device_id !== targetDeviceId) {
                    continue;
                }
            }

            if (value_item.domain !== undefined && value_item.domain !== domain) {
                continue;
            }

            if (domain !== "select") {
                const unitOfMeasurement = entity.attributes.unit_of_measurement;

                if (!targetUnit.includes(unitOfMeasurement)) {
                    continue;
                }
            }
            relevantEntityIds.push(entityId);
        }

        // never drop the entity that is already selected, otherwise the picker reports "unknown entity"
        if (value_item.entityId && this.hass.states[value_item.entityId] && !relevantEntityIds.includes(value_item.entityId)) {
            relevantEntityIds.push(value_item.entityId);
        }

        return relevantEntityIds;
    }

    private _entityChanged(event: CustomEvent): void {
        event.stopPropagation();
        const picker = event.target as HTMLElement;
        const updatedEntities = { ...this.config.entities } as Record<string, string>;

        const entityId = picker.getAttribute("data-id");
        if (entityId) {
            const value = (event.detail as any).value;
            if (value) {
                updatedEntities[entityId] = value;
            } else {
                delete updatedEntities[entityId]; // cleared with the cross
            }
        }

        this.svgItemConfig = this.svgItemConfig.map(item => ({
            ...item,
            values: item.values.map(v => ({ ...v, entityId: updatedEntities[v.id] || null })),
        }));
        this._fire({
            ...this.config,
            entities: HpsuDashboardCardEditor.sortRecordBySvgOrder(updatedEntities, this.svgItemConfig),
        });
    }

    private _fire(config: LovelaceCardConfig): void {
        const clean: Record<string, any> = {};
        for (const [key, value] of Object.entries(config)) {
            if (value !== undefined && value !== null && value !== "") clean[key] = value;
        }
        config = clean as LovelaceCardConfig;
        this.lastFired = JSON.stringify(config);
        this.config = config;
        this.dispatchEvent(
            new CustomEvent('config-changed', {
                detail: { config: this.config },
                bubbles: true,
                composed: true,
            })
        );
    }

    private static sortRecordBySvgOrder(data: Record<string, string>, svgItems: SVGItem[]): Record<string, string> {
        const dataKeys = Object.keys(data);
        const sortedEntries: [string, string][] = svgItems
            .flatMap(item => item.values)
            .filter(value => dataKeys.includes(value.id))
            .map(value => [value.id, data[value.id]]);
        return Object.fromEntries(sortedEntries) as Record<string, string>;
    }

    static get styles() {
        return css`
            .card-config {
                display: flex;
                flex-direction: column;
                padding: 16px;
                gap: 8px;
            }
            .tabs {
                display: flex;
                gap: 4px;
                border-bottom: 1px solid var(--divider-color);
                margin-bottom: 8px;
                overflow-x: auto;
            }
            .tab {
                background: none;
                border: none;
                border-bottom: 2px solid transparent;
                color: var(--secondary-text-color);
                cursor: pointer;
                font: inherit;
                font-weight: 500;
                padding: 10px 14px;
            }
            .tab.active {
                color: var(--primary-color);
                border-bottom-color: var(--primary-color);
            }
            .toolbar {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
            }
            .rows {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
                gap: 8px 12px;
                padding: 8px 0;
            }
            .pair {
                grid-column: 1 / -1;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
                gap: 8px 12px;
            }
            .search {
                position: relative;
            }
            .search ha-selector {
                display: block;
            }
            .search .clear {
                position: absolute;
                right: 4px;
                top: 50%;
                transform: translateY(-50%);
                --mdc-icon-button-size: 36px;
                z-index: 1;
            }
            .row ha-selector, ha-selector, ha-form {
                display: block;
            }
            ha-expansion-panel {
                margin-top: 8px;
            }
            .warning {
                color: var(--warning-color, orange);
                font-size: 12px;
                padding: 2px 4px;
            }
            .hint {
                color: var(--secondary-text-color);
                font-size: 13px;
                margin: 4px 2px;
            }
        `;
    }
}
