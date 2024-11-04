//import { LitElement, html, css } from "lit";
import { LitElement, html, css } from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class HpsuDashboardCardEditor extends LitElement {

    static get properties() {
        return {
            config: { type: Object },
            entities: { type: Array }
        };
    }

    constructor() {
        super();
        this.entities = []; // Initialisiere das Array für die Entities
    }

    async setConfig(config) {
        const cardHelpers = await window.loadCardHelpers();
        const entitiesCard = await cardHelpers.createCardElement({ type: "entities", entities: [] });

        // Lade den Editor über die statische Methode getConfigElement
        const editorElement = entitiesCard.constructor.getConfigElement();

        this.entities_configuration = await this.loadModule();
        this.entities_configuration = this.entities_configuration.map(
            (entity) => {
                entity.entityId = config.entities[entity.confEntityId] || "default";
                return entity;
            }
        );
        this.config = config;

        // Füge den Editor dem DOM hinzu
        //this.shadowRoot.appendChild(editorElement);
    }

    render() {
        if (!this.config) return html``;

        return html`
            ${this.entities_configuration.map(
                (entity) => {
                    return html`
                    <div>
                    ${(entity.category) ? html`<h2>${entity.category}</h2>` : ""}
                    <ha-entity-picker
                        allow-custom-entity
                        .value=${entity.entityId}
                        .hass=${this.hass}
                        .includeDomains=${entity.type}
                        .includeUnitOfMeasurement=${entity.unit}
                        .label=${entity.label}
                        .disabled=false
                        .createDomains=false
                        @value-changed=${this._entityChanged}
                    ></ha-entity-picker>
                    </div>`;
                }
            )}
        `;
    }

    _entityChanged(event) {
        event.stopPropagation();

        //const curValue = (event.currentTarget as any).curValue;
        const curValue = event.currentTarget.curValue;
        const newValue = event.detail.value;

        const entity_conf = this.entities_configuration.find((entity) => entity.label == event.target.label);
        if (entity_conf) {
            this.config.entities[entity_conf.confEntityId] = newValue;
            this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this.config } }));
        } else {
            console.error(`Entity configuration with label <${event.target.label}> not found!`);
        }
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

    async loadModule() {
        try {
            const module = await import('/local/daikin-rotex-hpsu-dashboard/modules.js');
            return module.entities_configuration;
        } catch (error) {
            console.error("Modul konnte nicht geladen werden:", error);
        }
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

customElements.define('hpsu-dashboard-card-editor', HpsuDashboardCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
    type: 'hpsu-dashboard-card',
    name: 'HPSU Dashboard Card',
    description: 'Eine Karte für das HPSU Dashboard.',
    editor: 'hpsu-dashboard-card-editor'
});
