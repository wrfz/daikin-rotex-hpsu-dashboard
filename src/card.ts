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
import { property, query, state } from "lit/decorators.js";
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

type NodeProcessor = (child: Element, parent: SVGGElement | SVGSVGElement) => boolean;

export class HPSUDashboardCard extends LitElement {
    @property({ attribute: false }) public hass!: HomeAssistant;
    private config!: LovelaceCardConfig;

    @state() private _state: DashboardState = DashboardState.Loading;
    @state() private language: string = "de";
    @state() private svgContent: string | null = null;

    private svg_item_config: SVGItem[] = [];
    private clickHandlersAdded = false;

    @query('ha-card')
    private haCardElement!: HTMLElement;

    public setConfig(config: LovelaceCardConfig) {
        this.config = validateConfig(config);
        this.svg_item_config = svg_item_config.map(svg_item => ({
            ...svg_item,
            values: svg_item.values.map(value => ({
                ...value,
                entityId: this.config.entities?.[value.id] || null
            }))
        }));
    }

    protected willUpdate(changed: Map<PropertyKey, unknown>): void {
        if (changed.has("hass") && this.hass?.language) {
            const lang = this.hass.language.split("-")[0];
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
            svg_item.values.forEach(value_item => {
                if (value_item.valueBox && value_item.entityId) {
                    const id = `${value_item.valueBox.id}_text`;
                    setClickHandler(id, value_item.entityId);
                }
            });
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
        return this.renderContent();
    }

    private renderContent(): TemplateResult {
        switch (this._state) {
            case DashboardState.Error:
                return html`Fehler beim Laden des HPSU Dashboards.`;
            case DashboardState.Ready:
                return html`<ha-card>${this.svgContent ? unsafeSVG(this.svgContent) : nothing}</ha-card>`;
            default:
                return html`<ha-card></ha-card>`;
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

    private strToFloat(str: string): number {
        if (str === "" || str === undefined || str === null || str.trim() === "") {
            return 0;
        }
        return parseFloat(str);
    }

    private createStateLabels(svgDoc: Document): void {
        const haCard = this.haCardElement;
        if (!haCard) {
            return;
        }

        let style = getComputedStyle(haCard);
        let rootStyle = getComputedStyle(document.body); // Oder document.documentElement

        let backgroundColor = style.getPropertyValue('--ha-card-background').trim();

        let borderColor = style.getPropertyValue('--ha-card-border-color').trim();
        if (borderColor === "") {
            borderColor = style.getPropertyValue('--divider-color').trim();
        }
        if (borderColor === "") {
            borderColor = '#000000ff';
        }

        let borderWidth = style.getPropertyValue('--ha-card-border-width').trim();
        let globalWidth = rootStyle.getPropertyValue('--ha-card-border-width').trim();
        console.log("global-width: " + globalWidth + ", " + this.strToFloat(borderWidth) + "|" + borderWidth);
        if (this.strToFloat(borderWidth) === 0) {
            if (backgroundColor === "") {
                borderWidth = "5px";
            } else {
                borderWidth = "0px";
            }
        }
        if (backgroundColor === "") {
            backgroundColor = "none";
        }

        //const borderWidth = "5px";
        let borderRadius = style.getPropertyValue('--ha-card-border-radius').trim();
        /*if (parseFloat(borderRadius) === 0) {
            let rootStyle = getComputedStyle(document.body); // Oder document.documentElement
            let globalRadius = rootStyle.getPropertyValue('--ha-card-border-radius').trim();
            borderRadius = "10px"; //globalRadius;
        }*/

        const secondaryTextColor = style.getPropertyValue('--secondary-text-color').trim() || '#808080';

        console.log("bg-color:" + backgroundColor + "|radius: " + borderRadius + "|border-color: " + borderColor + "|border-width:" + borderWidth);

        let currentBackgroundColor = backgroundColor;

        this.svg_item_config.forEach(svg_item => {
            const group = svgDoc.getElementById(svg_item.group_id ?? "") as SVGGElement | null;

            svg_item.labelBox = svg_item.label_rect_id ? svgDoc.getElementById(svg_item.label_rect_id) : null;

            // Create label text

            if (group && svg_item.labelBox) {
                svg_item.labelBox.setAttribute("fill", backgroundColor);
                svg_item.labelBox.setAttribute("stroke", borderColor);
                svg_item.labelBox.setAttribute("stroke-width", borderWidth);
                svg_item.labelBox.setAttribute("rx", borderRadius);
                svg_item.labelBox.setAttribute("ry", borderRadius);

                const labelText = this.createText(svg_item.labelBox);
                group.appendChild(labelText);

                labelText.setAttribute("font-size", "35");
                labelText.setAttribute("fill", secondaryTextColor);

                labelText.textContent = svg_item.texts?.[this.language] ? svg_item.texts[this.language].label : svg_item.group_id + "<missing>";
                this.layoutText(labelText, svg_item.labelBox, "middle", 3);
            }

            // Create parent rect with round corners

            var roundCorners = this.strToFloat(borderRadius) > 0;

            if (svg_item.visual_container && group && roundCorners) {
                const bbox = this.getBBox(group);

                const parent_box = this.createRect(svg_item.group_id);
                parent_box.setAttribute("x", bbox.x.toString());
                parent_box.setAttribute("y", bbox.y.toString());
                parent_box.setAttribute("width", bbox.width.toString());
                parent_box.setAttribute("height", bbox.height.toString());
                parent_box.setAttribute("fill", backgroundColor);
                parent_box.setAttribute("stroke", borderColor);
                parent_box.setAttribute("stroke-width", borderWidth);
                parent_box.setAttribute("rx", borderRadius);
                parent_box.setAttribute("ry", borderRadius);
                group.insertBefore(parent_box, parent_box.firstChild);

                currentBackgroundColor = "none";
            }

            if (roundCorners && svg_item.labelBox) {
                this.removeSVGElement(svg_item.labelBox);
            }

            // Create value texts

            svg_item.values.forEach(value_item => {
                value_item.valueBox = svgDoc.getElementById(value_item.value_rect_id ?? "");
                if (value_item.valueBox) {
                    let currentBorderColor = borderColor;
                    value_item.valueBox.setAttribute("fill", currentBackgroundColor);
                    value_item.valueBox.setAttribute("stroke", currentBorderColor);
                    value_item.valueBox.setAttribute("stroke-width", borderWidth);
                    //svg_item.valueBox.setAttribute("rx", borderRadius);
                    //svg_item.valueBox.setAttribute("ry", borderRadius);

                    if (group) {
                        value_item.entityId = this.config.entities?.[value_item.id] ?? null;
                        const valueText = this.createText(value_item.valueBox);
                        group.appendChild(valueText);
                    } else {
                        console.warn(`Rect with ID ${value_item.value_rect_id} parent not found.`);
                    }
                }
            });
        });
    }

    private removeSVGElement(childElement: SVGElement): void {
        const parentElement: Element = childElement.parentElement!;

        if (parentElement) {
            parentElement.removeChild(childElement);
        }
    }

    private getBBox(group: SVGGElement): DOMRect {
        const clonedGroup = group.cloneNode(true) as SVGGElement;

        const cleanupCallback: NodeProcessor = (child, parent) => {
            const tagName = child.tagName.toLowerCase();
            if (tagName === 'path') {
                parent.removeChild(child);
                return true;
            }

            if (tagName === 'rect') {
                child.setAttribute('fill', 'rgba(0, 0, 0, 0.01)');
            }

            return false;
        };

        this.processNode(clonedGroup, cleanupCallback);

        const tempSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        tempSvg.style.cssText = `
            position: absolute;
            opacity: 0;
            pointer-events: none;
            width: 0;
            height: 0;
            overflow: hidden;
        `;

        tempSvg.appendChild(clonedGroup);
        this.shadowRoot!.appendChild(tempSvg);

        try {
            return clonedGroup.getBBox();
        } finally {
            this.shadowRoot!.removeChild(tempSvg);
        }
    }

    private processNode(node: SVGGElement | SVGSVGElement, callback: NodeProcessor): void {
        for (let i = node.children.length - 1; i >= 0; i--) {
            const child = node.children[i];
            if (child.tagName.toLowerCase() === 'g') {
                this.processNode(child as SVGGElement, callback);
            } else {
                const wasRemoved = callback(child, node);
                if (wasRemoved) {
                    continue;
                }
            }
        }
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

    private createRect(group_id: string): SVGRectElement {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.id = `${group_id}_rect`;
        return rect;
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
        const haCard = this.haCardElement;
        if (!haCard) {
            return;
        }

        if (this.config) {
            if (this.svg_item_config) {
                let style = getComputedStyle(haCard);

                const primaryTextColor = style.getPropertyValue('--primary-text-color').trim() || 'black';

                this.svg_item_config.forEach(svg_item => {
                    svg_item.values.forEach(value_item => {
                        svg_item.values.forEach(value_item => {
                            const newState = value_item.entityId ? this.hass.states[value_item.entityId] : null;

                            const parentBox = svg_item.parent ? this.shadowRoot!.getElementById(svg_item.parent) : null;
                            if (parentBox) {
                                parentBox.style.display = newState ? "block" : "none";
                            }

                            const id = `${value_item.value_rect_id}_text`;
                            const valueText = this.shadowRoot!.querySelector(`#${id}`) as HTMLElement;

                            if (valueText) {
                                const fontSize: string = svg_item.fontSize || "56";

                                if (!newState) {
                                    valueText.textContent = "N/D";
                                    valueText.setAttribute("fill", "orange");
                                    valueText.setAttribute("font-size", "30px");
                                    valueText.setAttribute("display", value_item.optional === true ? "none" : "block");
                                } else if (newState.state == "unknown" || newState.state == "unavailable") {
                                    valueText.textContent = "N/A";
                                    valueText.setAttribute("fill", "orange");
                                    valueText.setAttribute("font-size", "30px");
                                } else {
                                    let entityState = newState.state || "--";
                                    valueText.setAttribute("font-size", fontSize);

                                    if (this.isBooleanSensor(value_item.entityId)) {
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
                                        if (value_item.texts[this.language].suffix) {
                                            entityState = value_item.texts[this.language].suffix + entityState;
                                        }

                                        valueText.textContent = entityState;
                                        if (value_item.id != "fehlercode" ||
                                            value_item.texts[this.language].suffix == "Fehlercode: " && "Kein Fehler" ||
                                            value_item.texts[this.language].suffix == "Error code: " && "No Error" ||
                                            value_item.texts[this.language].suffix == "Codice errore: " && "Nessun errore") {

                                            valueText.setAttribute("fill", primaryTextColor);
                                        } else {
                                            valueText.setAttribute("fill", "red");
                                        }
                                    }
                                }

                                this.layoutText(valueText, value_item.valueBox, svg_item.align, svg_item.offset);
                            } else {
                                console.warn("Value text not found: " + value_item.entityId);
                            }

                            if (value_item.id == "pressure_equalization") {
                                const color = newState && newState.state == "on" ? '#00ff0080' : '#7f7f7f';

                                this.shadowRoot!.getElementById("eev_arrow_left")!.setAttribute('fill', color);
                                this.shadowRoot!.getElementById("eev_arrow_right")!.setAttribute('fill', color);
                            } else if (value_item.id == "buh_power") {
                                const color = newState && this.isPositiveNumber(newState.state) ? '#d4aa00ff' : '#7f7f7f';
                                this.shadowRoot!.getElementById("buh-control")!.setAttribute('fill', color);
                            }
                        });
                    });
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
