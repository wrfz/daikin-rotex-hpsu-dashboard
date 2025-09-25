import { html, LitElement, css } from "lit";
import { svg_item_config, SVGItem, languages, validateConfig } from "./svg_item_config";

declare global {
  interface Window {
    loadCardHelpers(): Promise<any>;
  }
}
export class HpsuDashboardCardEditor extends LitElement {
    private entities: any[];
    private svg_item_config: SVGItem[];
    private config: any;
    private _hass: any;
    private language: any;

    static get properties() {
        return {
            config: { type: Object },
            entities: { type: Array }
        };
    }

    constructor() {
        console.log("editor.ctor");
        super();
        this.entities = []; // Initialisiere das Array für die Entities
    }

    async setConfig(config) {
        console.log("editor.setConfig");
        const cardHelpers = await window.loadCardHelpers();
        const entitiesCard = await cardHelpers.createCardElement({ type: "entities", entities: [] });

        // Lade den Editor über die statische Methode getConfigElement
        const editorElement = entitiesCard.constructor.getConfigElement();

        svg_item_config.forEach(svg_item => {
            svg_item.entityId = config.entities?.[svg_item.id] ?? null;
        });
        this.svg_item_config = svg_item_config;

        this.config = validateConfig(config);

        // Füge den Editor dem DOM hinzu
        //this.shadowRoot.appendChild(editorElement);
    }

    set hass(hass) {
        console.log(">> edit.hass");

        const lang = hass.language.split("-")[0];
        this._hass = hass;
        this.language = languages.includes(lang) ? lang : "de";
    }

    get hass() {
        return this._hass;
    }

    render() {
        console.log("editor.render");
        if (!this.config) return html``;

        return html`
            ${this.svg_item_config.map(
                (svg_item) => {
                    return html`
                    ${(svg_item.category) ? html`<h2>${svg_item.category}</h2>` : ""}
                    <ha-entity-picker
                        allow-custom-entity
                        data-id=${svg_item.id}
                        label=${svg_item.texts[this.language]?.desc || "<missing>"}
                        .value=${svg_item.entityId}
                        .curValue=${svg_item.entityId}
                        .hass=${this.hass}
                        .includeDomains=${svg_item.type}
                        .includeUnitOfMeasurement=${svg_item.unit}
                        .disabled=false
                        .createDomains=false
                        @value-changed=${this._entityChanged}
                    ></ha-entity-picker>`;
                }
            )}
        `;
    }

    _entityChanged(event) {
        event.stopPropagation();

        const entityId = event.target.getAttribute("data-id");

        // make a copy => avoid entity is read-only error
        const updatedEntities = { ...this.config.entities };
        updatedEntities[entityId] = event.detail.value;

        this.config = {
            ...this.config,
            entities: updatedEntities
        };

        this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this.config } }));
    }

    _stopPropagation(event) {
        event.stopPropagation();
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
            }
            paper-input {
                margin-bottom: 16px; /* Abstand zwischen den Eingabefeldern */
            }
        `;
    }

    getKyeByValue(map, searchValue) {
        for (let [key, value] of map.entries()) {
            if (value === searchValue) {
                return key;
            }
        }
        return null;
    }
}