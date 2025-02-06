//import { LitElement, html, css } from "lit";
import { LitElement, html, css } from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";


const entities_configuration = [
    {
        id: "ta",
        label_rect: "ta_label",
        type: "sensor",
        rectId: "ta_val",
        offset: 6,
        category: "Reihe 1",
        unit: "°C",
        texts: {
            de: {
                label: "TA",
                desc: "TA - Außentemperatur"
            },
            en: {
                label: "TA",
                desc: "TA - Outside Temperature"
            }
        }
    },
    {
        id: "ta2",
        label_rect: "ta2_label",
        type: "sensor",
        rectId: "ta2_val",
        offset: 6,
        unit: "°C",
        optional: true,
        parent: "TA2",
        texts: {
            de: {
                label: "TA2",
                desc: "TA2 - Im Außengerät"
            },
            en: {
                label: "TA2",
                desc: "TA2 - In the outdoor unit"
            }
        }
    },
    {
        id: "expansion_valve",
        label_rect: "eev_label",
        type: "sensor",
        rectId: "eev_val",
        offset: 6,
        unit: "%",
        texts: {
            de: {
                label: "EEV",
                desc: "Elektonisches Expansionsventil"
            },
            en: {
                label: "EEV",
                desc: "Electronic Expansion Valve"
            }
        }
    },
    {
        id: "kondensat",
        label_rect: "kondensat_label",
        type: "sensor",
        rectId: "kondensat_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                label: "Kondensat",
                desc: "Kondensat"
            },
            en: {
                label: "Condensate",
                desc: "Condensate"
            }
        }
	},
    {
        id: "umwaelzpumpe",
        label_rect: "uwp_label",
        type: "sensor",
        rectId: "uwp_value",
        offset: 6,
        unit: "%",
        texts: {
            de: {
                label: "Umwälzpumpe",
                desc: "Umwälzpumpe"
            },
            en: {
                label: "Circulation pump",
                desc: "Circulation pump"
            }
        }
    },
    {
        id: "umwaelzpumpe_an_aus",
        type: "binary_sensor",
        rectId: "circ_pump_rect",
        offset: 2,
        fontSize: "30px",
        texts: {
            de: {
                desc: "Status Umwälzpumpe"
            },
            en: {
                desc: "Circulation pump status"
            }
        }
    },
    {
        id: "durchfluss",
        type: "sensor",
        label_rect: "flow_rate_label",
        rectId: "flow_rate_value",
        offset: 6,
        texts: {
            de: {
                label: "Durchfluss",
                desc: "Durchfluss"
            },
            en: {
                label: "Flow rate",
                desc: "Flow rate"
            }
        }
    },
    {
        id: "ruecklauf_1",
        type: "sensor",
        label_rect: "return_flow_label",
        rectId: "return_flow_can_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                label: "Rücklauf",
                desc: "Rücklauf CAN"
            },
            en: {
                label: "Return flow",
                desc: "Return flow"
            }
        }
    },
    {
        id: "ruecklauf_2",
        type: "sensor",
        rectId: "return_flow_uart_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                desc: "Rücklauf UART"
            },
            en: {
                desc: "Return flow UART"
            }
        }
    },
    {
        id: "verdampfer",
        type: "sensor",
        label_rect: "evaporator_label",
        rectId: "evaporator_value",
        offset: 6,
        category: "Reihe 2",
        unit: "°C",
        texts: {
            de: {
                label: "Verdampfer",
                desc: "Verdampfer"
            },
            en: {
                label: "Evaporator",
                desc: "Evaporator"
            }
        }
    },
    {
        id: "hot_gas",
        type: "sensor",
        label_rect: "hot_gas_label",
        rectId: "hot_gas_value",
        offset: 6,
        texts: {
            de: {
                label: "Heißgas",
                desc: "Heißgas"
            },
            en: {
                label: "Hot gas",
                desc: "Hot gas"
            }
        }
    },
    {
        id: "hot_gas_condenser",
        type: "sensor",
        label_rect: "hot_gas_condenser_label",
        rectId: "hot_gas_condenser_value",
        offset: 6,
        optional: true,
        parent: "hot_gas_condenser",
        texts: {
            de: {
                label: "Heißgas",
                desc: "Heißgas am Kondensator"
            },
            en: {
                label: "Hot gas",
                desc: "Hot gas at the condenser"
            }
        }
    },
    {
        id: "vorlauf_1",
        type: "sensor",
        label_rect: "flow_label",
        rectId: "flow_can_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                label: "Vorlauf",
                desc: "Vorlauf CAN"
            },
            en: {
                label: "Flow",
                desc: "Flow CAN"
            }
        }
    },
    {
        id: "vorlauf_2",
        type: "sensor",
        rectId: "flow_uart_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                desc: "Vorlauf UART"
            },
            en: {
                desc: "Flow UART"
            }
        }
    },
    {
        id: "vorlauf_soll",
        type: "sensor",
        label_rect: "flow_setpoint_label",
        rectId: "flow_setpoint_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                label: "Soll",
                desc: "Vorlauf Soll"
            },
            en: {
                label: "Setpoint",
                desc: "Flow setpoint"
            }
        }
    },
    {
        id: "wasserdruck",
        type: "sensor",
        label_rect: "pressure_label",
        rectId: "pressure_value",
        offset: 6,
        texts: {
            de: {
                label: "Druck",
                desc: "Wasserdruck"
            },
            en: {
                label: "Pressure",
                desc: "Water Pressure"
            }
        }
    },
    {
        id: "vorlauf_bh_1",
        type: "sensor",
        label_rect: "flow_bh_label",
        rectId: "flow_bh_can_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                label: "Vorlauf BH",
                desc: "VorlaufBH CAN"
            },
            en: {
                label: "Flow BH",
                desc: "Flow BH CAN"
            }
        }
    },
    {
        id: "vorlauf_bh_2",
        type: "sensor",
        rectId: "flow_bh_uart_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                desc: "VorlaufBH UART"
            },
            en: {
                desc: "Flow BH UART"
            }
        }
    },
    {
        id: "kompressor_an_aus",
        type: "binary_sensor",
        rectId: "comp_rect",
        offset: 2,
        fontSize: "40px",
        texts: {
            de: {
                desc: "Status Kompressor"
            },
            en: {
                desc: "Compressor status"
            }
        }
    },
    {
        id: "luefter",
        type: "sensor",
        label_rect: "fan_label",
        rectId: "fan_value",
        offset: 6,
        category: "Reihe 3",
        unit: "RPM",
        texts: {
            de: {
                label: "Lüfter",
                desc: "Lüfter Drehzahl"
            },
            en: {
                label: "Fan",
                desc: "Fan speed"
            }
        }
    },
    {
        id: "verdichter",
        type: "sensor",
        label_rect: "compressor_label",
        rectId: "compressor_value",
        offset: 6,
        unit: "RPM",
        texts: {
            de: {
                label: "Verdichter",
                desc: "Verdichter Drehzahl"
            },
            en: {
                label: "Compressor",
                desc: "Compressor speed"
            }
        }
    },
    {
        id: "speicher",
        type: "sensor",
        label_rect: "storage_label",
        rectId: "storage_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                label: "Speicher",
                desc: "Speicher Ist"
            },
            en: {
                label: "Storage",
                desc: "Current storage value"
            }
        }
    },
    {
        id: "speicher_soll",
        type: "select",
        label_rect: "storage_setpoint_label",
        rectId: "storage_setpoint_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                label: "Soll",
                desc: "Speicher Soll"
            },
            en: {
                label: "Setpoint",
                desc: "Storage setpoint"
            }
        }
    },
    {
        id: "mischer",
        type: "sensor",
        rectId: "dhw_mixer_value",
        offset: 6,
        unit: "%",
        fontSize: "40px",
        texts: {
            de: {
                desc: "Mischer"
            },
            en: {
                desc: "Mixer"
            }
        }
    },
    {
        id: "bypass",
        type: "sensor",
        rectId: "bypass_value",
        offset: 6,
        unit: "%",
        fontSize: "40px",
        texts: {
            de: {
                desc: "Bypass"
            },
            en: {
                desc: "Bypass"
            }
        }
    },
    {
        id: "fehlercode",
        type: "text_sensor",
        rectId: "fehlercode_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        category: "Info",
        texts: {
            de: {
                suffix: "Fehlercode: ",
                desc: "Fehlercode"
            },
            en: {
                suffix: "Error code: ",
                desc: "Error code"
            }
        }
    },
    {
        id: "betriebsmodus",
        type: "select",
        rectId: "betriebsmodus_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        texts: {
            de: {
                suffix: "Modus: ",
                desc: "Betriebsmodus"
            },
            en: {
                suffix: "Mode: ",
                desc: "Operating mode"
            }
        }
    },
    {
        id: "betriebsart",
        type: "text_sensor",
        rectId: "betriebsart_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        texts: {
            de: {
                suffix: "Betriebsart: ",
                desc: "Betriebsart"
            },
            en: {
                suffix: "Mode of oper.: ",
                desc: "Mode of operating"
            }
        }
    },
    {
        id: "thermische_leistung",
        type: "sensor",
        rectId: "therm_leistung_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        "suffix": "Therm. Leistung: ",
        texts: {
            de: {
                suffix: "Therm. Leistung: ",
                desc: "Thermische Leistung"
            },
            en: {
                suffix: "Thermal power: ",
                desc: "Thermal power"
            }
        }
    },
    {
        id: "cop",
        type: "sensor",
        rectId: "cop_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        optional: true,
        texts: {
            de: {
                suffix: "COP: ",
                desc: "COP"
            },
            en: {
                suffix: "COP: ",
                desc: "COP"
            }
        }
    },
    {
        id: "t_room_is",
        type: "sensor",
        rectId: "t_room_is_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        optional: true,
        texts: {
            de: {
                suffix: "Raum-Ist: ",
                desc: "Raum-Ist"
            },
            en: {
                suffix: "Room setpoint: ",
                desc: "Room setpoint"
            }
        }
    }
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//////////////////////////////////////////////////////////////////
/////////////////////// HPSUDashboardCard ////////////////////////
//////////////////////////////////////////////////////////////////

class HPSUDashboardCard extends HTMLElement {
    inititialized = false;

    async setConfig(config) {
        //console.log(">> setConfig");

        this.config = HPSUDashboardCard.validateConfig(config);
        this.language = this.config.language ? this.config.language : "en";

        try {
            entities_configuration.forEach(entity_configuration => {
                entity_configuration.entityId = config.entities?.[entity_configuration.id] ?? null;
            });
            this.entities_configuration = entities_configuration;

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

    static validateConfig(config) {
        const validEntities = Object.fromEntries(
            Object.entries(config.entities ?? {}).filter(([key]) =>
                entities_configuration.some(entity_conf => entity_conf.id === key)
            )
        );

        return {
            ...config,
            entities: validEntities
        };
    }

    static getConfigElement() {
        const editor = document.createElement('hpsu-dashboard-card-editor');
        return editor;
    }

    async render() {
        //console.log(">> render");

        while (this.parentNode == null) {
            await sleep(50);
        }

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
        this.entities_configuration.forEach(entity_conf => {
            const valueBox = svgDoc.getElementById(entity_conf.rectId);
            if (valueBox) {
                const group = valueBox.parentNode;
                if (group) {
                    entity_conf.entityId = this.config.entities?.[entity_conf.id] ?? null;

                    entity_conf.labelElement = this.createText(entity_conf.entityId, valueBox);
                    entity_conf.valueBox = valueBox;
                    entity_conf.parentBox = entity_conf.parent ? svgDoc.getElementById(entity_conf.parent) : null;
                    entity_conf.labelBox = entity_conf.label_rect ? svgDoc.getElementById(entity_conf.label_rect) : null;

                    if (entity_conf.labelBox) {
                        entity_conf.labelText = this.createText(null, entity_conf.labelBox);
                        entity_conf.labelText.setAttribute("font-size", 35);
                        entity_conf.labelText.setAttribute("fill", "rgb(191, 191, 191)");

                        entity_conf.labelText.textContent = entity_conf.texts[this.language] ? entity_conf.texts[this.language].label : entity_conf.id + "<missing>";
                        this.layoutText("label-" + entity_conf.entityId, entity_conf.labelText, entity_conf.labelBox, "middle", 3);
                    }

                    if (entity_conf.labelText) {
                        group.appendChild(entity_conf.labelText);
                    }
                    group.appendChild(entity_conf.labelElement);
                } else {
                    console.warn(`Rect with ID ${entity_conf.rectId} parent not found.`);
                }
            } else {
                console.warn(`Rect with ID ${entity_conf.rectId} not found.`);
            }
        });
    }

    createText(entityId, textBox) {
        const labelElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
        if (entityId) {
            labelElement.id = entityId.replace(".", "_");
            labelElement.addEventListener("click", () => {
                this.handleStateClick(entityId);
            });
        }

        labelElement.setAttribute("cursor", "pointer");
        labelElement.setAttribute("dominant-baseline", "middle");
        labelElement.setAttribute("stroke-width", "1");

        const transform = textBox.getAttribute('transform');
        if (transform) {
            labelElement.setAttribute("transform", transform);
        }
        return labelElement;
    }

    updateLabels() {
        //console.log(">> updateLabels: " + this.config + ":" + this.inititialized);
        if (this.config && this.inititialized) {
            if (this.entities_configuration) {
                this.entities_configuration.forEach(entity_conf => {
                    const newState = entity_conf.entityId ? this._hass.states[entity_conf.entityId] : null;
                    if (entity_conf.valueBox) {
                        if (entity_conf.labelElement) {
                            const fontSize = entity_conf.fontSize || 56;

                            if (entity_conf.parentBox) {
                                entity_conf.parentBox.style.display = newState ? "block" : "none";
                            }

                            if (!newState) {
                                entity_conf.labelElement.textContent = "N/D";
                                entity_conf.labelElement.setAttribute("fill", "orange");
                                entity_conf.labelElement.setAttribute("font-size", "30px");
                                entity_conf.labelElement.setAttribute("display", entity_conf.optional === true ? "none" : "block");
                            } else if (newState.state == "unknown" || newState.state == "unavailable") {
                                entity_conf.labelElement.textContent = "N/A";
                                entity_conf.labelElement.setAttribute("fill", "orange");
                                entity_conf.labelElement.setAttribute("font-size", "30px");
                            } else {
                                let entityState = newState.state || "--";
                                const unit = newState.attributes.unit_of_measurement || "";
                                entity_conf.labelElement.setAttribute("font-size", fontSize);

                                if (this.isBooleanSensor(entity_conf.entityId)) {
                                    entity_conf.labelElement.textContent = entityState === "on" ? "An" : "Aus";
                                    entity_conf.labelElement.setAttribute("fill", entityState === "on" ? "yellow" : "white");
                                } else {
                                    entityState = this.formatNumber(entityState);
                                    if (entityState == "Warmwasserbereitung") {
                                        entityState = "Warmwasser";
                                    }
                                    if (entity_conf.texts[this.language].suffix) {
                                        entityState = entity_conf.texts[this.language].suffix + entityState;
                                    }

                                    entity_conf.labelElement.textContent = `${entityState} ${unit}`;
                                    if (entity_conf.id != "fehlercode" ||
                                        entity_conf.texts[this.language].suffix == "Fehlercode: " && "Kein Fehler" ||
                                        entity_conf.texts[this.language].suffix == "Error code: " && "No Error") {

                                        entity_conf.labelElement.setAttribute("fill", "silver");
                                    } else {
                                        entity_conf.labelElement.setAttribute("fill", "red");
                                    }
                                }
                            }

                            this.layoutText(entity_conf.entityId, entity_conf.labelElement, entity_conf.valueBox, entity_conf.align, entity_conf.offset);
                        } else {
                            console.warn("Label not found: " + entity_conf.entityId);
                        }
                    } else {
                        console.warn("ValueBox not found: " + entity_conf.entityId);
                    }
                });
            }
        }
        //console.log("<< updateLabels");
    }

    layoutText(id, text, textBox, align, yOffset) {
        const xPos = parseFloat(textBox.getAttribute('x'));
        const yPos = parseFloat(textBox.getAttribute('y'));
        const width = parseFloat(textBox.getAttribute('width'));
        const height = parseFloat(textBox.getAttribute('height'));

        if (align == "left") {
            text.setAttribute("x", xPos);
            text.setAttribute("text-anchor", "start");
        } else {
            text.setAttribute("x", xPos + width / 2);
            text.setAttribute("text-anchor", "middle");
        }
        text.setAttribute("y", yPos + height / 2 + yOffset);
    }

    updateOpacity() {
        //console.log(">> updateOpacity: " + this.config + ", " + this.inititialized);
        if (this.config && this.inititialized) {
            const dhwOpenArrows = this.shadowRoot.querySelector(`#dhw-open-arrows`);
            const dhwClosedArrows = this.shadowRoot.querySelector(`#dhw-closed-arrows`);
            const bpvOpenArrows = this.shadowRoot.querySelector(`#bpv-open-arrows`);
            const bpvClosedArrows = this.shadowRoot.querySelector(`#bpv-closed-arrows`);

            if (!dhwOpenArrows || !dhwClosedArrows || !bpvOpenArrows || !bpvClosedArrows) return;

            const flow_rate_id = this.config.entities?.['durchfluss'] ?? null;
            const mixer_id = this.config.entities?.['mischer'] ?? null;
            const bypass_id = this.config.entities?.['bypass'] ?? null;

            const flowRate = flow_rate_id && this._hass.states[flow_rate_id] ? parseFloat(this._hass.states[flow_rate_id].state) : 0;
            const mischerState = mixer_id && this._hass.states[mixer_id] ? parseFloat(this._hass.states[mixer_id].state) : 0;
            const bpvState = bypass_id && this._hass.states[bypass_id] ? parseFloat(this._hass.states[bypass_id].state) : 0;

            dhwOpenArrows.style.opacity = flowRate > 0 ? (mischerState / 100.0) : 0;
            dhwClosedArrows.style.opacity = flowRate > 0 ? ((100.0 - mischerState) / 100.0) : 0;
            bpvOpenArrows.style.opacity = flowRate > 0 ? (bpvState / 100.0) : 0;
            bpvClosedArrows.style.opacity = flowRate > 0 ? ((100.0 - bpvState) / 100.0) : 0;

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

        entities_configuration.forEach(entity_configuration => {
            entity_configuration.entityId = config.entities?.[entity_configuration.id] ?? null;
        });
        this.entities_configuration = entities_configuration;

        this.config = HPSUDashboardCard.validateConfig(config);
        this.language = this.config.language ? this.config.language : "en";

        // Füge den Editor dem DOM hinzu
        //this.shadowRoot.appendChild(editorElement);
    }

    render() {
        if (!this.config) return html``;

        const languages = {de: "Deutsch", en: "English"};

        return html`
            <div>
                <ha-select label="Sprache" @change=${this._onLanguageChange} @closed=${this._stopPropagation} .value=${this.language}>
                ${Object.entries(languages).map(([langCode, langLabel]) => html`
                    <mwc-list-item value=${langCode}>
                        ${langLabel}
                    </mwc-list-item>
                `)}
            </ha-select>
            </div>
            ${this.entities_configuration.map(
                (entity) => {
                    return html`
                    ${(entity.category) ? html`<h2>${entity.category}</h2>` : ""}
                    <ha-entity-picker
                        allow-custom-entity
                        data-id=${entity.id}
                        label=${entity.texts[this.language]?.desc || "<missing>"}
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

    _stopPropagation(event) {
        event.stopPropagation();
    }

    _onLanguageChange(event) {
        this.language = event.target.value;

        this.config = {
            ...this.config,
            language: this.language
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
