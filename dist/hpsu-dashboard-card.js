class HPSUDashboardCard extends HTMLElement {
    setConfig(config) {
        if (!config.entities) {
            throw new Error("Required entities field is missing");
        }

        this.entities_configuration = [
            { confEntityId: "t_aussen_1", rectId: "T-Aussen-1-Value", offset: 6 },
            { confEntityId: "t_aussen_2", rectId: "T-Aussen-2-Value", offset: 6 },
            { confEntityId: "expansions_ventil", rectId: "EEV-Value", offset: 6 },
            { confEntityId: "kondensator", rectId: "Kondensator-Value", offset: 6 },
            { confEntityId: "umwaelzpumpe", rectId: "Umwaelzpumpe-Value", offset: 6 },
            { confEntityId: "umwaelzpumpe_an_aus", rectId: "circulation_pump_on_off_rect", fontSize: "30px", offset: 2 },
            { confEntityId: "durchfluss", rectId: "Durchfluss-Value", offset: 6 },
            { confEntityId: "ruecklauf_1", rectId: "Ruecklauf-1-Value", offset: 6 },
            { confEntityId: "ruecklauf_2", rectId: "Ruecklauf-2-Value", offset: 6 },
            { confEntityId: "verdampfer", rectId: "Verdampfer-Value", offset: 6 },
            { confEntityId: "vorlauf_1", rectId: "Vorlauf-1-Value", offset: 6 },
            { confEntityId: "vorlauf_2", rectId: "Vorlauf-2-Value", offset: 6 },
            { confEntityId: "vorlauf_soll", rectId: "Vorlauf-Soll-Value", offset: 6 },
            { confEntityId: "wasserdruck", rectId: "Druck-Value", offset: 6 },
            { confEntityId: "vorlauf_bh_1", rectId: "Vorlauf-BH-1-Value", offset: 6 },
            { confEntityId: "vorlauf_bh_2", rectId: "Vorlauf-BH-2-Value", offset: 6 },
            { confEntityId: "kompressor_an_aus", rectId: "compressor_on_off_rect", fontSize: "40px", offset: 2 },
            { confEntityId: "luefter", rectId: "Luefter-Value", offset: 6 },
            { confEntityId: "verdichter", rectId: "Verdichter-Value", offset: 6 },
            { confEntityId: "speicher", rectId: "Speicher-Value", offset: 6 },
            { confEntityId: "speicher_soll", rectId: "Speicher-Soll-Value", offset: 6 },
            { confEntityId: "mischer", rectId: "DHW-Mixer-Value", fontSize: "40px", offset: 6 },
            { confEntityId: "bypass", rectId: "Bypass-Value", fontSize: "40px", offset: 6 }
        ];

        this.config = config;
        this.attachShadow({ mode: "open" });
        this.render();
    }

    async render() {
        const url1 = "/hacsfiles/daikin-rotex-hpsu-dashboard/hpsu.svg"
        const url2 = "/local/daikin-rotex-hpsu-dashboard/hpsu.svg?" + new Date().getTime();
        let response = await fetch(url1);
        if (!response.ok) {
            const response1 = response;
            response = await fetch(url2);
            if (!response.ok) {
                throw new Error(`Failed to call url: '${url1}' Status: ${response1.status}.`);
            }
        }
        const svgContent = await response.text();
        
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");

        if (svgDoc.getElementsByTagName('parsererror').length > 0) {
            console.error("Fehler beim Parsen des SVG-Dokuments.");
            return;
        }

        const svgElement = svgDoc.documentElement;

        if (!svgElement.hasAttribute('viewBox')) {
            console.warn("Das SVG hat kein viewBox-Attribut gesetzt. Bitte setze es manuell.");
            svgElement.setAttribute("viewBox", "0 0 2897 1855");
        }

        svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svgElement.style.display = "block";

        this.shadowRoot.innerHTML = "";

        this.createStateLabels(svgDoc);

        this.shadowRoot.appendChild(svgElement);

        this.createCSS();

        this.updateOpacity();
    }

    createCSS() {
        const style = document.createElement('style');
        style.textContent = `
        hui-panel-view {
            display: block;
            background: linear-gradient(90deg, #220000, #000022);
            width:auto;
        }
        svg {
            display: block;
        }
        @media (min-width: 768px) {
            svg {
                width: 100%;
                height: auto;
            }
        }

        /* Mobile Stile (Breite < 768px) */
        @media (max-width: 767px) {
            svg {
                width: auto; /* Breite proportional */
                height: calc(100vh -  var(--header-height));
                transform: scale(1);
            }
        }
        `;
        this.shadowRoot.appendChild(style);
    }

    connectedCallback() {
        const ha = document.querySelector("home-assistant");
        if (ha) {
            const style = document.createElement("style"); // Removes additional empty scroll area on smmobile phones
            style.textContent = `
                :host {
                    display: block;
                    overflow:auto;
                }
            `;
            ha.shadowRoot.appendChild(style);

            const ha_main = ha.shadowRoot.querySelector("home-assistant-main");
            if (ha_main) {
                const lovelace_panel = ha_main.shadowRoot.querySelector("ha-panel-lovelace");
                if (lovelace_panel) {
                    const hui_root = lovelace_panel.shadowRoot.querySelector("hui-root");
                    if (hui_root) {
                        const hui_panel_view = hui_root.shadowRoot.querySelector("hui-panel-view");
                        if (hui_panel_view) {
                            const style = document.createElement("style");
                            style.textContent = `
                                :host {
                                    background: linear-gradient(90deg, #220000, #000022) !important;
                                }
                            `;
                            hui_panel_view.shadowRoot.appendChild(style);
                        }
                    }
                }
           }
        }
    }

    updateOpacity() {
        const flowArrows = this.shadowRoot.querySelector(`#DHW-Flow-Arrows`);
        const flowReturnArrows = this.shadowRoot.querySelector(`#DHW-Flow-Return-Arrows`);
        const heatingArrows = this.shadowRoot.querySelector(`#Heating-Flow-Arrows`);

        if (!flowArrows || !flowReturnArrows || !heatingArrows) return;

        const flow_rate_id = this.config.entities['durchfluss'];
        const mixer_id = this.config.entities['mischer'];
        const bypass_id = this.config.entities['bypass'];

        const flowRate = flow_rate_id ? parseFloat(this._hass.states[flow_rate_id].state) : 0;
        const mischerState = mixer_id ? parseFloat(this._hass.states[mixer_id].state) : 0;
        const bpvState = bypass_id ? parseFloat(this._hass.states[bypass_id].state) : 0;

        flowArrows.style.opacity = flowRate > 0 ? (mischerState / 100.0) : 0;
        flowReturnArrows.style.opacity = flowRate > 0 ? (bpvState / 100.0) : 0;
        heatingArrows.style.opacity = flowRate > 0 ? ((100 - bpvState) / 100.0) : 0;

        for (let index = 1; index <= 8; ++index) {
            const arrow = this.shadowRoot.querySelector(`#Flow-Arrow-${index}`);
            arrow.style.opacity = (flowRate > 0) * 1;
        }
    }
  
    set hass(hass) {
      this._hass = hass;
      this.updateLabels();
      this.updateOpacity();
    }
  
    get hass() {
      return this._hass;
    }

    createStateLabels(svgDoc) {
        this.entities_configuration.forEach(state => {
            const valueBox = svgDoc.getElementById(state.rectId);
            if (valueBox) {
                const group = valueBox.parentNode;
                if (group && valueBox) {
                    const transform = valueBox.getAttribute('transform');
                    const fontSize = state.fontSize || "60px";

                    state.entityId = this.config.entities[state.confEntityId];

                    //console.log("create: " + state.entityId);

                    if (state.entityId) {
                        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
                        label.id = state.entityId.replace(".", "_");
                        label.setAttribute("text-anchor", "middle");
                        label.setAttribute("dominant-baseline", "middle");
                        label.setAttribute("cursor", "pointer");
                        label.setAttribute("fill", "blue");
                        label.setAttribute("font-size", fontSize);
                        label.setAttribute("stroke-width", "1");
                        if (transform) {
                            label.setAttribute("transform", transform);
                        }

                        state.label = label;
                        state.valueBox = valueBox;

                        if (this._hass.states[state.entityId] !== undefined) {
                            label.textContent = this._hass.states[state.entityId].state;

                            label.addEventListener("click", () => {
                                this.handleStateClick(state.entityId);
                            });
                        } else {
                            console.warn(`Entity with ID ${state.entityId} not found`);
                        }
                        group.appendChild(label);
                    }
                } else {
                    console.warn(`Rect with ID ${state.rectId} not found.`);
                }
            } else {
                console.warn(`Rect with ID ${state.rectId} not found.`);
            }
        });

        this.updateLabels();
    }

    updateLabels() {
        if (this.entities_configuration) {
            this.entities_configuration.forEach(state => {
                if (state.entityId) {
                    const newState = this._hass.states[state.entityId];
                    if (state.valueBox) {
                        if (state.label) {
                            const xPos = parseFloat(state.valueBox.getAttribute('x'));
                            const yPos = parseFloat(state.valueBox.getAttribute('y'));
                            const width = parseFloat(state.valueBox.getAttribute('width'));
                            const height = parseFloat(state.valueBox.getAttribute('height'));

                            const fontSize = parseFloat(state.label.getAttribute("font-size")) || 46;

                            if (newState) {
                                //console.log(state.entityId + ": " + newState);
                                const entityState = newState.state || "--";
                                const unit = newState.attributes.unit_of_measurement || "";

                                if (this.isBooleanSensor(state.entityId)) {
                                    state.label.textContent = entityState === "on" ? "An" : "Aus";
                                    state.label.setAttribute("fill", entityState === "on" ? "yellow" : "white");
                                } else {
                                    state.label.textContent = `${this.formatNumber(entityState)} ${unit}`;
                                    state.label.setAttribute("fill", "silver");
                                }
                            } else {
                                //console.log(state.entityId + "= " + newState);
                                state.label.textContent = "INVALID";
                                state.label.setAttribute("fill", "orange");
                                state.label.setAttribute("font-size", "30px");
                            }

                            state.label.setAttribute("x", xPos + width / 2);
                            state.label.setAttribute("y", yPos + height / 2 + state.offset);
                        } else {
                            console.warn("Label not found: " + state.entityId);
                        }
                    } else {
                        console.warn("ValueBox not found: " + state.entityId);
                    }
                }
            });
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
  }

  customElements.define("hpsu-dashboard-card", HPSUDashboardCard);