import {
    svg_item_config,
    SVGItem,
    languages,
    text_map,
    validateConfig,
} from "./svg_item_config";
import { HpsuDashboardCardEditor } from "./editor";

import type { LovelaceCardConfig } from "@ha/data/lovelace/config/card";
import type { HomeAssistant } from "@ha/types";

import { html, LitElement, css, CSSResultGroup, nothing, TemplateResult } from "lit";
import { property, state } from "lit/decorators.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { HassEntity } from "home-assistant-js-websocket";

declare global {
    interface HTMLElementTagNameMap {
        "hpsu-dashboard-card-editor": HpsuDashboardCardEditor;
    }
}

export enum DashboardState {
    Loading = 'loading',
    Ready = 'ready',
    Error = 'error',
}

export class HPSUDashboardCard extends LitElement {
    @property({ attribute: false }) public hass!: HomeAssistant;
    private config!: LovelaceCardConfig;

    @state() private _state: DashboardState = DashboardState.Loading;
    @state() private language: string = "de";
    @state() private svgContent: string | null = null;

    private svg_item_config: SVGItem[] = [];
    private clickHandlersAdded = false;

    public setConfig(config: LovelaceCardConfig) {
        this.config = validateConfig(config);
        this.svg_item_config = svg_item_config.map(svg_item => ({
            ...svg_item,
            entityId: this.config.entities?.[svg_item.id] || null
        }));
    }

    protected willUpdate(changed: Map<PropertyKey, unknown>): void {
        if (changed.has("hass") && this.hass?.language) {
            // Use config language if set, otherwise use Home Assistant language
            const configLang = this.config?.language;
            const lang = configLang || this.hass.language.split("-")[0];
            this.language = languages.includes(lang) ? lang : "de";
        }
    }

    protected async firstUpdated(): Promise<void> {
        await this.createDashboard();
    }

    private async createDashboard(): Promise<void> {
        const url = this.makeURL("hpsu.svg");
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch '${url}' (${response.status})`);
            }
            const rawSvgString = await response.text();
            this.svgContent = this.createSvgWithLabels(rawSvgString);
            this._state = DashboardState.Ready;
        } catch (e) {
            console.error(e);
            this.svgContent = null;
        }
    }

    private addClickHandlers(): void {
        const setClickHandler = (elementId: string, entityId: string | undefined) => {
            const element = this.shadowRoot!.getElementById(elementId);
            if (element && entityId) {
                element.addEventListener("click", () => {
                    this.handleStateClick(entityId);
                });
                element.setAttribute("cursor", "pointer");
            }
        };

        this.svg_item_config.forEach(svg_item => {
            if (svg_item.valueBox && svg_item.entityId) {
                const id = `${svg_item.valueBox.id}_text`;
                setClickHandler(id, svg_item.entityId);
            }
        });

        const pressureEqualizationEntityId = this.findEntityIdById(this.svg_item_config, "pressure_equalization");
        setClickHandler("eev_arrow_left", pressureEqualizationEntityId);
        setClickHandler("eev_arrow_right", pressureEqualizationEntityId);
    }

    protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
        if (this.isPanelView()) {
            this.setAttribute('panel-view', '');
        } else {
            this.removeAttribute('panel-view');
        }

        if (this._state == DashboardState.Ready) {
            this.updateLabels();
            this.updateOpacity();

            if (!this.clickHandlersAdded) {
                this.addClickHandlers();
                this.clickHandlersAdded = true;
            }
        }
    }

    protected static getConfigElement(): HpsuDashboardCardEditor {
        return document.createElement("hpsu-dashboard-card-editor");
    }


    static styles: CSSResultGroup = css`
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
            margin-bottom: 16px;
        }

        svg {
            display: block;
            width: 100%;
            height: 100%;
        }

        :host([panel-view]) {
            display: block;
            max-height: 100vh;
            overflow: auto;
        }

        :host([panel-view]) svg {
            display: block;
            width: calc(100vw - var(--mdc-drawer-width, 256px));
            max-height: 100vh;
            overflow: auto;
        }

        @media (min-width: 768px) {
            :host([panel-view]) svg {
                max-height: calc(100vh - var(--header-height, 64px));
            }
        }

        @media (max-width: 767px) {
            :host([panel-view]) svg {
                width: auto;
                height: calc(100vh - var(--header-height, 56px));
            }
        }
        `;

    protected render(): TemplateResult {
        switch (this._state) {
            case DashboardState.Error:
                return html`<ha-card>Fehler beim Laden des HPSU Dashboards.</ha-card>`;
            case DashboardState.Ready:
                return html`
                    <hpsu-dashboard-card-container>
                        ${this.svgContent ? unsafeSVG(this.svgContent) : nothing}
                    </hpsu-dashboard-card-container>
                `;
            default:
                return html``;
        }
    }

    private createSvgWithLabels(svgString: string): string | null {
        if (!svgString) {
            return null;
        }

        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
        const svgElement = svgDoc.documentElement;

        if (!svgElement || svgElement.tagName.toLowerCase() !== "svg") {
            console.error("The SVG was not parsed correctly.");
            return null;
        }

        svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svgElement.style.display = "block";

        this.createStateLabels(svgDoc);
        return new XMLSerializer().serializeToString(svgElement);
    }

    private createStateLabels(svgDoc: Document): void {
        this.svg_item_config.forEach(svg_item => {
            svg_item.valueBox = svgDoc.getElementById(svg_item.value_rect_id ?? "");
            if (svg_item.valueBox) {
                const group = svg_item.valueBox.parentNode;
                if (group) {
                    svg_item.entityId = this.config.entities?.[svg_item.id] ?? null;

                    const valueText = this.createText(svg_item.valueBox);
                    svg_item.labelBox = svg_item.label_rect_id ? svgDoc.getElementById(svg_item.label_rect_id) : null;

                    if (svg_item.labelBox) {
                        const labelText = this.createText(svg_item.labelBox);
                        group.appendChild(labelText);

                        labelText.setAttribute("font-size", "35");
                        labelText.setAttribute("fill", "rgb(191, 191, 191)");

                        labelText.textContent = svg_item.texts[this.language] ? svg_item.texts[this.language].label : svg_item.id + "<missing>";
                        this.layoutText(labelText, svg_item.labelBox, "middle", 3);
                    }
                    group.appendChild(valueText);
                } else {
                    console.warn(`Rect with ID ${svg_item.value_rect_id} parent not found.`);
                }
            }
        });
    }

    private createText(box: SVGTextElement): SVGTextElement {
        const textText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textText.id = `${box.id}_text`;

        textText.setAttribute("dominant-baseline", "middle");
        textText.setAttribute("stroke-width", "1");

        const transform = box.getAttribute('transform');
        if (transform) {
            textText.setAttribute("transform", transform);
        }
        return textText;
    }

    private layoutText(text: HTMLElement | SVGTextElement, box: HTMLElement, align, yOffset: number | undefined): void {
        const xPos = parseFloat(box.getAttribute('x') ?? "");
        const yPos = parseFloat(box.getAttribute('y') ?? "");
        const width = parseFloat(box.getAttribute('width') ?? "");
        const height = parseFloat(box.getAttribute('height') ?? "");

        if (align == "left") {
            text.setAttribute("x", xPos.toString());
            text.setAttribute("text-anchor", "start");
        } else {
            text.setAttribute("x", (xPos + width / 2).toString());
            text.setAttribute("text-anchor", "middle");
        }
        if (yOffset != undefined) {
            text.setAttribute("y", (yPos + height / 2 + yOffset).toString());
        }
    }

    private updateLabels(): void {
        if (this.config) {
            if (this.svg_item_config) {
                this.svg_item_config.forEach(svg_item => {
                    const newState = svg_item.entityId ? this.hass.states[svg_item.entityId] : null;

                    const parentBox = svg_item.parent ? this.shadowRoot!.getElementById(svg_item.parent) : null;
                    if (parentBox) {
                        parentBox.style.display = newState ? "block" : "none";
                    }

                    if (svg_item.valueBox) {
                        const id = `${svg_item.valueBox.id}_text`;
                        const valueText = this.shadowRoot!.getElementById(id);
                        if (valueText) {
                            const fontSize: string = svg_item.fontSize || "56";

                            if (!newState) {
                                valueText.textContent = "N/D";
                                valueText.setAttribute("fill", "orange");
                                valueText.setAttribute("font-size", "30px");
                                valueText.setAttribute("display", svg_item.optional === true ? "none" : "block");
                            } else if (newState.state == "unknown" || newState.state == "unavailable") {
                                valueText.textContent = "N/A";
                                valueText.setAttribute("fill", "orange");
                                valueText.setAttribute("font-size", "30px");
                            } else {
                                let entityState = newState.state || "--";
                                valueText.setAttribute("font-size", fontSize);

                                if (this.isBooleanSensor(svg_item.entityId)) {
                                    const lang_map = text_map[this.language];
                                    valueText.textContent = entityState === "on" ? lang_map.on : (
                                        entityState === "off" ? lang_map.off : "<invalid>"
                                    );
                                    valueText.setAttribute("fill", entityState === "on" ? "yellow" : "silver");
                                } else {
                                    entityState = this.formatNumber(newState, svg_item.digits ?? 1);
                                    if (entityState == "Warmwasserbereitung") {
                                        entityState = "Warmwasser";
                                    }
                                    if (svg_item.texts[this.language].suffix) {
                                        entityState = svg_item.texts[this.language].suffix + entityState;
                                    }

                                    valueText.textContent = entityState;
                                    if (svg_item.id != "fehlercode" ||
                                        svg_item.texts[this.language].suffix == "Fehlercode: " && "Kein Fehler" ||
                                        svg_item.texts[this.language].suffix == "Error code: " && "No Error" ||
                                        svg_item.texts[this.language].suffix == "Codice errore: " && "Nessun errore") {

                                        valueText.setAttribute("fill", "silver");
                                    } else {
                                        valueText.setAttribute("fill", "red");
                                    }
                                }
                            }

                            this.layoutText(valueText, svg_item.valueBox, svg_item.align, svg_item.offset);
                        } else {
                            console.warn("Label not found: " + svg_item.entityId);
                        }
                    }

                    if (svg_item.id == "pressure_equalization") {
                        const color = newState && newState.state == "on" ? '#00ff0080' : '#7f7f7f';

                        this.shadowRoot!.getElementById("eev_arrow_left")!.setAttribute('fill', color);
                        this.shadowRoot!.getElementById("eev_arrow_right")!.setAttribute('fill', color);
                    } else if (svg_item.id == "buh_power") {
                        const color = newState && this.isPositiveNumber(newState.state) ? '#d4aa00ff' : '#7f7f7f';
                        this.shadowRoot!.getElementById("buh-control")!.setAttribute('fill', color);
                    }
                });

            }
        }
    }

    private updateOpacity(): void {
        if (this.config) {
            const dhwOpenArrows = this.shadowRoot!.querySelector(`#dhw-open-arrows`) as HTMLElement;
            const dhwClosedArrows = this.shadowRoot!.querySelector(`#dhw-closed-arrows`) as HTMLElement;
            const bpvOpenArrows = this.shadowRoot!.querySelector(`#bpv-open-arrows`) as HTMLElement;
            const bpvClosedArrows = this.shadowRoot!.querySelector(`#bpv-closed-arrows`) as HTMLElement;

            if (!dhwOpenArrows || !dhwClosedArrows || !bpvOpenArrows || !bpvClosedArrows) return;

            const flow_rate_id = this.config.entities?.['durchfluss'] ?? null;
            const mixer_id = this.config.entities?.['mischer'] ?? null;
            const bypass_id = this.config.entities?.['bypass'] ?? null;

            const flowRate: number = flow_rate_id && this.hass.states[flow_rate_id] ? parseFloat(this.hass.states[flow_rate_id].state) : 0;
            const mischerState = mixer_id && this.hass.states[mixer_id] ? parseFloat(this.hass.states[mixer_id].state) : 0;
            const bpvState = bypass_id && this.hass.states[bypass_id] ? parseFloat(this.hass.states[bypass_id].state) : 0;

            dhwOpenArrows.style.opacity = (flowRate > 0 ? (mischerState / 100.0) : 0).toString();
            dhwClosedArrows.style.opacity = (flowRate > 0 ? ((100.0 - mischerState) / 100.0) : 0).toString();
            bpvOpenArrows.style.opacity = (flowRate > 0 ? (bpvState / 100.0) : 0).toString();
            bpvClosedArrows.style.opacity = (flowRate > 0 ? ((100.0 - bpvState) / 100.0) : 0).toString();

            for (let index = 1; index <= 8; ++index) {
                const arrow = this.shadowRoot!.querySelector(`#Flow-Arrow-${index}`) as HTMLElement;
                arrow.style.opacity = (flowRate > 0 ? 1 : 0).toString();
            }
        }
    }

    private handleStateClick(entityId: string): void {
        this.dispatchEvent(
            new CustomEvent("hass-more-info", {
                detail: { entityId },
                bubbles: true,
                composed: true,
            })
        );
    }

    private makeURL(filename: string): string {
        const repoName = "daikin-rotex-hpsu-dashboard";
        const scriptElement = document.querySelector(`script[src*="/hacsfiles/${repoName}/"]`) as HTMLScriptElement;

        const scriptUrl = scriptElement && scriptElement.src ? scriptElement.src : "";
        const hacsTag = new URLSearchParams(scriptUrl.split("?")[1]).get("hacstag");

        console.log(`Script url: ${scriptUrl}, tag: ${hacsTag}`);

        if (hacsTag) {
            return `/hacsfiles/${repoName}/${filename}?hacstag=${hacsTag}`;
        } else {
            return `/local/${repoName}/dist/${filename}?v=${Date.now()}`;
        }
    }

    private isPanelView(): boolean {
        let node: Element | null | undefined = this;
        while (node) {
            if (node.tagName?.toLowerCase() === "hui-panel-view") {
                return true;
            }
            node = (node.getRootNode() as ShadowRoot)?.host;
        }
        return false;
    }

    private formatNumber(entity: HassEntity, digits: number): string {
        if (!entity || !entity.state) return "--";
        const number = Number(entity.state);
        if (isNaN(number)) return entity.state;
        const formatted = new Intl.NumberFormat(this.hass.language, {
            minimumFractionDigits: digits,
            maximumFractionDigits: digits,
        }).format(number);
        const suffix = entity.attributes?.unit_of_measurement
        return suffix ? `${formatted} ${suffix}` : formatted;
    }

    private isBooleanSensor(entityId: string | undefined): boolean {
        return this.hass?.states[entityId!]?.entity_id?.startsWith("binary_sensor.") ?? false;
    }

    private isPositiveNumber(value: string | undefined): boolean {
        return !!value && !isNaN(Number(value)) && Number(value) > 0;
    }

    private findEntityIdById(entities, id): string | undefined {
        const entity = entities.find(entity => entity.id === id);
        return entity ? entity.entityId : undefined;
    }
}

customElements.define("hpsu-dashboard-card", HPSUDashboardCard);
customElements.define("hpsu-dashboard-card-editor", HpsuDashboardCardEditor);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
    type: "hpsu-dashboard-card",
    name: "HPSU Dashboard",
    description: "A Lovelace card for visualizing the Daikin HPSU status.",
    preview: true,
});
