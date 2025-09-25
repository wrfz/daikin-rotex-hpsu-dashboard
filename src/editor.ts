import { html, LitElement, css } from "lit";
import { property, state } from "lit/decorators.js";
import { LovelaceCardConfig, HomeAssistant } from "custom-card-helpers";
import {
    svg_item_config,
    SVGItem,
    Category,
    languages,
    validateConfig,
} from "./svg_item_config";

declare global {
  interface Window {
    loadCardHelpers(): Promise<any>;
  }
}

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
            entityId: this.config.entities?.[svg_item.id] ?? null
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

                const category = currentCategory[this.language];

                if (!categories[category]) {
                    categories[category] = [];
                }
                categories[category].push(item);
            });

        }

        return html`
            <div class="card-config">
                ${Object.keys(categories).map(category => html`
                    <ha-expansion-panel
                        .header=${category}
                    >
                        ${categories[category].map(svg_item => html`
                            <ha-entity-picker
                                allow-custom-entity
                                data-id=${svg_item.id}
                                label=${svg_item.texts[this.language]?.desc || "<missing>"}
                                .value=${svg_item.entityId}
                                .hass=${this.hass}
                                .includeDomains=${svg_item.type}
                                @value-changed=${this._entityChanged}
                            ></ha-entity-picker>
                        `)}
                    </ha-expansion-panel>
                `)}
            </div>
        `;
    }

    private _entityChanged(event: CustomEvent): void {
        event.stopPropagation();
        const picker = event.target as HTMLElement;
        const entityId = picker.getAttribute("data-id");

        if (!entityId) return;

        const updatedEntities = { ...this.config.entities };
        updatedEntities[entityId] = (event.detail as any).value;

        this.config = {
            ...this.config,
            entities: updatedEntities
        };

        this.dispatchEvent(
            new CustomEvent('config-changed', {
                detail: { config: this.config },
                bubbles: true,
                composed: true,
            })
        );
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
            ha-entity-picker {
                margin-bottom: 16px;
            }
        `;
    }
}
