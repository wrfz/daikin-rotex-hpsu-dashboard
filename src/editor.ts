import {
    svg_item_config,
    SVGItem,
    SVGValue,
    Category,
    languages,
    validateConfig,
    layouts,
    DEFAULT_LAYOUT,
} from "./svg_item_config";

import type { LovelaceCardConfig } from "@ha/data/lovelace/config/card";
import type { HomeAssistant } from "@ha/types";

import type { HassEntity } from "home-assistant-js-websocket";
import { property, state } from "lit/decorators.js";
import { html, LitElement, css } from "lit";

declare global {
  interface Window {
    loadCardHelpers(): Promise<any>;
  }
}

const ensureArray = <T>(value: T | T[]): T[] => {
  return Array.isArray(value) ? value : [value];
};

export class HpsuDashboardCardEditor extends LitElement {
    @property({ attribute: false }) public hass!: HomeAssistant;
    @property({ type: Object }) public config!: LovelaceCardConfig;

    @state() private language: string = "en";
    @state() private svgItemConfig: SVGItem[] = [];

    async setConfig(config: LovelaceCardConfig) {

        // HACK: This call is necessary to load the ha-entity-picker components.
        const cardHelpers = await (window as any).loadCardHelpers();
        const entitiesCard = await cardHelpers.createCardElement({ type: "entities", entities: [] });
        await entitiesCard.constructor.getConfigElement();
        // HACK end

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

    protected render() {
        if (!this.config) {
            return html``;
        }

        const categories: Record<string, SVGItem[]> = {};

        if (this.svgItemConfig[0].category) {
            let lastCategory: Category = this.svgItemConfig[0].category;

            this.svgItemConfig.forEach(item => {
                let currentCategory: Category | undefined = item.category;

                if (currentCategory) {
                    lastCategory = currentCategory;
                } else {
                    currentCategory = lastCategory;
                }

                const category = currentCategory[this.language as keyof typeof currentCategory];

                if (!categories[category]) {
                    categories[category] = [];
                }
                categories[category].push(item);
            });

        }

        const deviceLabel = "HPSU Devices";
        const layoutLabel = ({ de: "Layout", en: "Layout", it: "Layout" } as Record<string, string>)[this.language] ?? "Layout";
        const animationsLabel = ({ de: "Animationen", en: "Animations", it: "Animazioni" } as Record<string, string>)[this.language] ?? "Animations";
        return html`
            <div class="card-config">
                <ha-selector
                    .hass=${this.hass}
                    .selector=${{
                        select: {
                            mode: "dropdown",
                            options: layouts.map(l => ({ value: l.id, label: l.labels[this.language as keyof typeof l.labels] ?? l.labels.en }))
                        }
                    }}
                    .label=${layoutLabel}
                    .value=${this.config.layout ?? DEFAULT_LAYOUT}
                    @value-changed=${this._layoutChanged}
                    id="layout-selector">
                </ha-selector>
                <ha-selector
                    .hass=${this.hass}
                    .selector=${{ boolean: {} }}
                    .label=${animationsLabel}
                    .value=${this.config.animations !== false}
                    @value-changed=${this._animationsChanged}
                    id="animations-selector">
                </ha-selector>
                <ha-expansion-panel
                    .header=${deviceLabel}
                >
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{ device: {} }}
                        .value=${this.config.canDevice}
                        @value-changed=${this._entityChanged}
                        id="can-device-selector"
                        .placeholder=${"CAN Gerät auswählen"}
                        can-device-id=${this.config.canDevice}>
                    </ha-selector>
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{ device: {} }}
                        .value=${this.config.uartDevice}
                        @value-changed=${this._entityChanged}
                        id="uart-device-selector"
                        .placeholder=${"UART Gerät auswählen"}
                        can-device-id=${this.config.uartDevice}
                        >
                    </ha-selector>
                </ha-expansion-panel>
                ${Object.keys(categories).map(category => html`
                    <ha-expansion-panel
                        .header=${category}
                    >
                        ${categories[category].map(svg_item => html`
                            ${svg_item.values.map((value_item, index) => html`
                                <ha-selector
                                    .hass=${this.hass}
                                    .selector=${{
                                        entity: {
                                            include_entities: this.getRelevantEntityIds(svg_item, value_item)
                                        }
                                    }}
                                    .placeholder=${value_item.texts[this.language as keyof typeof value_item.texts]?.desc || "<missing>"}
                                    .value=${value_item.entityId}
                                    @value-changed=${this._entityChanged}
                                    data-id=${value_item.id}
                                    data-index=${index}
                                >
                                </ha-selector>
                            `)}
                        `)}
                    </ha-expansion-panel>
                `)}
            </div>
        `;
    }

    private getRelevantEntityIds(svg_item: SVGItem, value_item: SVGValue): string[] {
        const relevantEntityIds: string[] = [];

        const isRuecklauf = value_item.id === "ruecklauf" || value_item.id === "ruecklauf_2";
        if (isRuecklauf) {
            console.log("value_item.id", value_item.id);
            console.log("device", value_item.device);
            console.log("domain", value_item.domain);
            console.log("unit", value_item.unit);
        }

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

    private _animationsChanged(event: CustomEvent): void {
        event.stopPropagation();
        this.config = { ...this.config, animations: (event.detail as any).value };

        this.dispatchEvent(
            new CustomEvent('config-changed', {
                detail: { config: this.config },
                bubbles: true,
                composed: true,
            })
        );
    }

    private _layoutChanged(event: CustomEvent): void {
        event.stopPropagation();
        this.config = { ...this.config, layout: (event.detail as any).value };

        this.dispatchEvent(
            new CustomEvent('config-changed', {
                detail: { config: this.config },
                bubbles: true,
                composed: true,
            })
        );
    }

    private _entityChanged(event: CustomEvent): void {
        event.stopPropagation();
        const picker = event.target as HTMLElement;
        const updatedEntities = { ...this.config.entities } as Record<string, string>;

        let canDevice = this.config.canDevice;
        if (picker.getAttribute("id") == "can-device-selector") {
            canDevice = (event.detail as any).value;
        }

        let uartDevice = this.config.uartDevice;
        if (picker.getAttribute("id") == "uart-device-selector") {
            uartDevice = (event.detail as any).value;
        }

        const entityId = picker.getAttribute("data-id");
        if (entityId) {
            updatedEntities[entityId] = (event.detail as any).value;
        }

        this.config = {
            ...this.config,
            canDevice: canDevice,
            uartDevice: uartDevice,
            entities: HpsuDashboardCardEditor.sortRecordBySvgOrder(updatedEntities, this.svgItemConfig)
        };

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
            }
            h2 {
                font-size: 20px;
                margin-bottom: 16px;
                margin-top: 24px;
            }
            ha-selector, ha-device-picker, ha-entity-picker {
                margin: 5px;
                display: block;
            }
        `;
    }
}
