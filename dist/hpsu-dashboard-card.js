//import { LitElement, html, css } from "lit";
import { LitElement, html, css } from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";


const entities_configuration = [
    { id: "ta",                  label: "TA - Außentemperatur",             type: "sensor",        rectId: "ta_val",                offset: 6, category: "Reihe 1", unit: "°C" },
    { id: "ta2",                 label: "TA2 - Im Außengerät",              type: "sensor",        rectId: "ta2_val",               offset: 6, unit: "°C", optional: true, parent: "TA2" },
    { id: "expansions_ventil",   label: "Elektonisches Expansionsventil",   type: "sensor",        rectId: "eev_val",               offset: 6, unit: "%" },
    { id: "kondensat",           label: "Kondensat",                        type: "sensor",        rectId: "kondensat_value",       offset: 6, unit: "°C" },
    { id: "umwaelzpumpe",        label: "Umwälzpumpe",                      type: "sensor",        rectId: "umwaelzpumpe_value",    offset: 6, unit: "%" },
    { id: "umwaelzpumpe_an_aus", label: "Status Umwälzpumpe",               type: "binary_sensor", rectId: "circ_pump_rect",        offset: 2, fontSize: "30px" },
    { id: "durchfluss",          label: "Durchfluss",                       type: "sensor",        rectId: "durchfluss_value",      offset: 6 },
    { id: "ruecklauf_1",         label: "Rücklauf CAN",                     type: "sensor",        rectId: "ruecklauf_can_value",   offset: 6, unit: "°C" },
    { id: "ruecklauf_2",         label: "Rücklauf UART",                    type: "sensor",        rectId: "ruecklauf_uart_value",  offset: 6, unit: "°C" },
    { id: "verdampfer",          label: "Verdampfer",                       type: "sensor",        rectId: "verdampfer_value",      offset: 6, category: "Reihe 2", unit: "°C" },
    { id: "ta2",                 label: "TA2",                              type: "sensor",        rectId: "ta2_value",             offset: 6, unit: "°C" },
    { id: "heissgas",            label: "Heißgas",                          type: "sensor",        rectId: "heissgas_value",        offset: 6},
    { id: "vorlauf_1",           label: "Vorlauf CAN",                      type: "sensor",        rectId: "vorlauf_can_value",     offset: 6, unit: "°C" },
    { id: "vorlauf_2",           label: "Vorlauf UART",                     type: "sensor",        rectId: "vorlauf_uart_value",    offset: 6, unit: "°C" },
    { id: "vorlauf_soll",        label: "Vorlauf Soll",                     type: "sensor",        rectId: "vorlauf_soll_value",    offset: 6, unit: "°C" },
    { id: "wasserdruck",         label: "Wasserdruck",                      type: "sensor",        rectId: "druck_value",           offset: 6 },
    { id: "vorlauf_bh_1",        label: "VorlaufBH CAN",                    type: "sensor",        rectId: "vorlauf_bh_can_value",  offset: 6, unit: "°C" },
    { id: "vorlauf_bh_2",        label: "VorlaufBH UART",                   type: "sensor",        rectId: "vorlauf_bh_uart_value", offset: 6, unit: "°C" },
    { id: "kompressor_an_aus",   label: "Status Kompressor",                type: "binary_sensor", rectId: "comp_rect",             offset: 2, fontSize: "40px" },
    { id: "luefter",             label: "Lüfter",                           type: "sensor",        rectId: "luefter_value",         offset: 6, category: "Reihe 3", unit: "RPM" },
    { id: "verdichter",          label: "Verdichter",                       type: "sensor",        rectId: "verdichter_value",      offset: 6, unit: "RPM" },
    { id: "speicher",            label: "Speicher Ist",                     type: "sensor",        rectId: "speicher_value",        offset: 6, unit: "°C" },
    { id: "speicher_soll",       label: "Speicher Soll",                    type: "select",        rectId: "speicher_soll_value",   offset: 6, unit: "°C" },
    { id: "mischer",             label: "Mischer",                          type: "sensor",        rectId: "dhw_mixer_value",       offset: 6, unit: "%", fontSize: "40px" },
    { id: "bypass",              label: "Bypass",                           type: "sensor",        rectId: "bypass_value",          offset: 6, unit: "%", fontSize: "40px" },
    { id: "fehlercode",          label: "Fehlercode",                       type: "text_sensor",   rectId: "fehlercode_value",      offset: 6, fontSize: "40px", align: "left", "suffix": "Fehlercode: ", category: "Info" },
    { id: "betriebsmodus",       label: "Betriebsmodus",                    type: "select",        rectId: "betriebsmodus_value",   offset: 6, fontSize: "40px", align: "left", "suffix": "Modus: " },
    { id: "betriebsart",         label: "Betriebsart",                      type: "text_sensor",   rectId: "betriebsart_value",     offset: 6, fontSize: "40px", align: "left", "suffix": "Betriebsart: " },
    { id: "thermische_leistung", label: "Thermische Leistung",              type: "sensor",        rectId: "therm_leistung_value",  offset: 6, fontSize: "40px", align: "left", "suffix": "Therm. Leistung: " },
    { id: "cop",                 label: "COP",                              type: "sensor",        rectId: "cop_value",             offset: 6, fontSize: "40px", align: "left", "suffix": "COP: ", optional: true },
    { id: "t_room_is",           label: "Raum-Ist",                         type: "sensor",        rectId: "t_room_is_value",       offset: 6, fontSize: "40px", align: "left", "suffix": "Raum-Ist: ", optional: true }
];

//////////////////////////////////////////////////////////////////
/////////////////////// HPSUDashboardCard ////////////////////////
//////////////////////////////////////////////////////////////////

class HPSUDashboardCard extends HTMLElement {
    inititialized = false;

    async setConfig(config) {
        //console.log(">> setConfig");

        this.config = config;

        try {
            this.entities_configuration = entities_configuration.map(
                (entity) => {
                    entity.entityId = config.entities?.[entity.id] ?? null;
                    return entity;
                }
            );

            Object.entries(config.entities ?? {}).forEach(([key, value]) => {
                const isExists = entities_configuration.some(entity_conf => entity_conf.id === key);
                if (!isExists) {
                    throw new Error(`Unknown entity: '${key}'`);
                }
            });

            this.attachShadow({ mode: "open" });
            this.render();
            //console.log("<< setConfig");
        } catch (error) {
            this.innerHTML = `
            <ha-alert alert-type="error">
                <strong>Fehler:</strong> ${error.message}
            </ha-alert>`;
            console.error("Config-Fehler:", error);
            throw error;
        }
    }

    static getConfigElement() {
        const editor = document.createElement('hpsu-dashboard-card-editor');
        return editor;
    }

    async render() {
        //console.log(">> render");

        const url = this.makeURL("hpsu.svg");

        //console.log(url);

        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to call url: '${url}' Status: ${response.status}.`);
        }
        const svgContent = await response.text();
        
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");

        if (svgDoc.getElementsByTagName('parsererror').length > 0) {
            console.error("Fehler beim Parsen des SVG-Dokuments.");
            return;
        }

        const svgElement = svgDoc.documentElement;

        svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svgElement.style.display = "block";

        this.shadowRoot.innerHTML = "";
        this.createStateLabels(svgDoc);

        this.shadowRoot.appendChild(svgElement);
        this.createCSS();

        this.inititialized = true;

        this.updateLabels();
        this.updateOpacity();

        //console.log("<< render");
    }

    createCSS() {
        //console.log(">> createCSS");
        const style = document.createElement('style');
        if (this.isPanelView()) {
            style.textContent = `
            svg {
                display: block;
                width: calc(100vw - var(--mdc-drawer-width));
                height: auto;
            }
            @media (min-width: 768px) {
                svg {
                    max-height: calc(100vh - var(--header-height));
                }
            }

            /* Mobile Stile (Breite < 768px) */
            @media (max-width: 767px) {
                svg {
                    width: auto; /* Breite proportional */
                    height: calc(100vh -  var(--header-height));
                }
            }
            `;
        } else {
            style.textContent = `
            svg {
                display: block;
                width: 100%;
                height: 100%;
            }
            `;
        }
        this.shadowRoot.appendChild(style);

        const ha = document.querySelector("home-assistant");
        if (ha) {
            const homeAssistantStyle = document.createElement("style"); // Removes additional empty scroll area on smmobile phones
            homeAssistantStyle.textContent = `
                :host {
                    display: block;
                    overflow:auto;
                }
            `;
            ha.shadowRoot.appendChild(homeAssistantStyle);

            const huiCard = this.shadowRoot.host.parentNode;
            const huiPanelViewShadowRoot = huiCard.getRootNode();

            if (this.config.style) {
                const huiPanelViewStyle = document.createElement("style");
                huiPanelViewStyle.textContent = `
                :host {
                    display:block;
                    ${this.config.style};
                }
                `;
                huiPanelViewShadowRoot.appendChild(huiPanelViewStyle);
            }
        }

        //console.log("<< createCSS");
    }

    isPanelView() {
        let node = this;
        while (node) {
            if (node.tagName?.toLowerCase() === "hui-panel-view") return true;
            node = node.getRootNode()?.host;
        }
        return false;
    }

    connectedCallback() {
    }

    set hass(hass) {
        //console.log(">> hass");

        this._hass = hass;

        this.updateLabels();
        this.updateOpacity();

        //console.log("<< hass");
    }
  
    get hass() {
        return this._hass;
    }

    createStateLabels(svgDoc) {
        //console.log(">> createStateLabels");
        this.entities_configuration.forEach(state => {
            const valueBox = svgDoc.getElementById(state.rectId);
            if (valueBox) {
                const group = valueBox.parentNode;
                if (group) {
                    const transform = valueBox.getAttribute('transform');

                    state.entityId = this.config.entities?.[state.id] ?? null;

                    const labelElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
                    if (state.entityId) {
                        labelElement.id = state.entityId.replace(".", "_");
                    }

                    labelElement.setAttribute("cursor", "pointer");
                    labelElement.setAttribute("dominant-baseline", "middle");
                    labelElement.setAttribute("stroke-width", "1");
                    labelElement.addEventListener("click", () => {
                        this.handleStateClick(state.entityId);
                    });

                    if (transform) {
                        labelElement.setAttribute("transform", transform);
                    }

                    state.labelElement = labelElement;
                    state.valueBox = valueBox;
                    state.parentBox = state.parent ? svgDoc.getElementById(state.parent) : null;
                    group.appendChild(labelElement);
                } else {
                    console.warn(`Rect with ID ${state.rectId} parent not found.`);
                }
            } else {
                console.warn(`Rect with ID ${state.rectId} not found.`);
            }
        });
    }

    updateLabels() {
        //console.log(">> updateLabels: " + this.config + ":" + this.inititialized);
        if (this.config && this.inititialized) {
            if (this.entities_configuration) {
                this.entities_configuration.forEach(state => {
                    const newState = state.entityId ? this._hass.states[state.entityId] : null;
                    if (state.valueBox) {
                        if (state.labelElement) {
                            const xPos = parseFloat(state.valueBox.getAttribute('x'));
                            const yPos = parseFloat(state.valueBox.getAttribute('y'));
                            const width = parseFloat(state.valueBox.getAttribute('width'));
                            const height = parseFloat(state.valueBox.getAttribute('height'));

                            const fontSize = state.fontSize || 56;

                            if (state.parentBox) {
                                state.parentBox.setAttribute("display", newState ? "block" : "none");
                            }

                            if (!newState) {
                                state.labelElement.textContent = "N/D";
                                state.labelElement.setAttribute("fill", "orange");
                                state.labelElement.setAttribute("font-size", "30px");
                                state.labelElement.setAttribute("display", state.optional === true ? "none" : "block");
                            } else if (newState.state == "unknown" || newState.state == "unavailable") {
                                state.labelElement.textContent = "N/A";
                                state.labelElement.setAttribute("fill", "orange");
                                state.labelElement.setAttribute("font-size", "30px");
                            } else {
                                let entityState = newState.state || "--";
                                const unit = newState.attributes.unit_of_measurement || "";
                                state.labelElement.setAttribute("font-size", fontSize);

                                if (this.isBooleanSensor(state.entityId)) {
                                    state.labelElement.textContent = entityState === "on" ? "An" : "Aus";
                                    state.labelElement.setAttribute("fill", entityState === "on" ? "yellow" : "white");
                                } else {
                                    entityState = this.formatNumber(entityState);
                                    if (entityState == "Warmwasserbereitung") {
                                        entityState = "Warmwasser";
                                    }
                                    if (state.suffix) {
                                        entityState = state.suffix + entityState;
                                    }

                                    state.labelElement.textContent = `${entityState} ${unit}`;
                                    if (state.id == "fehlercode" && entityState != "Fehlercode: Kein Fehler") {
                                        state.labelElement.setAttribute("fill", "red");
                                    } else {
                                        state.labelElement.setAttribute("fill", "silver");
                                    }
                                }
                            }

                            if (state.align == "left") {
                                state.labelElement.setAttribute("x", xPos);
                                state.labelElement.setAttribute("text-anchor", "start");
                            } else {
                                state.labelElement.setAttribute("x", xPos + width / 2);
                                state.labelElement.setAttribute("text-anchor", "middle");
                            }
                            state.labelElement.setAttribute("y", yPos + height / 2 + state.offset);
                        } else {
                            console.warn("Label not found: " + state.entityId);
                        }
                    } else {
                        console.warn("ValueBox not found: " + state.entityId);
                    }
                });
            }
        }
        //console.log("<< updateLabels");
    }

    updateOpacity() {
        //console.log(">> updateOpacity");
        if (this.config && this.inititialized) {
            const flowArrows = this.shadowRoot.querySelector(`#DHW-Flow-Arrows`);
            const flowReturnArrows = this.shadowRoot.querySelector(`#DHW-Flow-Return-Arrows`);
            const heatingArrows = this.shadowRoot.querySelector(`#Heating-Flow-Arrows`);

            if (!flowArrows || !flowReturnArrows || !heatingArrows) return;

            const flow_rate_id = this.config.entities?.['durchfluss'] ?? null;
            const mixer_id = this.config.entities?.['mischer'] ?? null;
            const bypass_id = this.config.entities?.['bypass'] ?? null;

            const flowRate = flow_rate_id && this._hass.states[flow_rate_id] ? parseFloat(this._hass.states[flow_rate_id].state) : 0;
            const mischerState = mixer_id && this._hass.states[mixer_id] ? parseFloat(this._hass.states[mixer_id].state) : 0;
            const bpvState = bypass_id && this._hass.states[bypass_id] ? parseFloat(this._hass.states[bypass_id].state) : 0;

            flowArrows.style.opacity = flowRate > 0 ? (mischerState / 100.0) : 0;
            flowReturnArrows.style.opacity = flowRate > 0 ? (bpvState / 100.0) : 0;
            heatingArrows.style.opacity = flowRate > 0 ? ((100 - bpvState) / 100.0) : 0;

            for (let index = 1; index <= 8; ++index) {
                const arrow = this.shadowRoot.querySelector(`#Flow-Arrow-${index}`);
                arrow.style.opacity = (flowRate > 0) * 1;
            }
        }
    }

    formatNumber(value) {
        let formatted = value.toString().replace('.', ',');
        return formatted.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    isBooleanSensor(entityId) {
        const entity = this._hass.states[entityId];

        if (entity) {
            if (entity.entity_id.startsWith('binary_sensor.')) {
                return true;
            }
        } else {
            console.warn(`Entität ${state.entityId} nicht gefunden`);
        }
        return false;
    }

    handleStateClick(entityId) {
        const event = new CustomEvent('hass-more-info', {
            detail: {
                entityId: entityId
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }

    isNumeric(value) {
        return /^-?\d+$/.test(value);
    }

    makeURL(filename) {
        const scriptUrl = import.meta.url;
        const urlParams = new URLSearchParams(scriptUrl.split('?')[1]);
        const hacsTag = urlParams.get('hacstag');

        //console.log("hacsTag: " + hacsTag);
        //console.log("isNumeric: " + this.isNumeric(hacsTag));

        const url =  this.isNumeric(hacsTag) ? `/hacsfiles/daikin-rotex-hpsu-dashboard/${filename}?${hacsTag}`:
                        `/local/daikin-rotex-hpsu-dashboard/dist/${filename}?${new Date().getTime()}`;
        //console.log(url);
        return url;
    }
}

//////////////////////////////////////////////////////////////////
//////////////////// HpsuDashboardCardEditor /////////////////////
//////////////////////////////////////////////////////////////////

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

        this.entities_configuration = entities_configuration;
        this.entities_configuration = this.entities_configuration.map(
            (entity) => {
                entity.entityId = config.entities?.[entity.id] ?? null;
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
                    ${(entity.category) ? html`<h2>${entity.category}</h2>` : ""}
                    <ha-entity-picker
                        allow-custom-entity
                        data-id=${entity.id}
                        label=${entity.label}
                        .value=${entity.entityId}
                        .curValue=${entity.entityId}
                        .hass=${this.hass}
                        .includeDomains=${entity.type}
                        .includeUnitOfMeasurement=${entity.unit}
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


customElements.define("hpsu-dashboard-card", HPSUDashboardCard);
customElements.define('hpsu-dashboard-card-editor', HpsuDashboardCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
    type: 'hpsu-dashboard-card',
    name: 'HPSU Dashboard Card',
    description: 'Eine Karte für das HPSU Dashboard.',
    editor: 'hpsu-dashboard-card-editor'
});
