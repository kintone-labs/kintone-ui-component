import { html, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";
import { DirectiveResult } from "lit/directive";
import { UnsafeHTMLDirective } from "lit/directives/unsafe-html";

import { unsafeHTMLConverter } from "../base/converter";
import { createStyleOnHeader, generateGUID, KucBase } from "../base/kuc-base";
import { validateProps } from "../base/validator";

import { TOOLTIP_CSS } from "./style";
import {
  KeyBoardFunction,
  PointerFunction,
  TooltipPlacement,
  TooltipProps,
} from "./type";

let exportTooltip;
(() => {
  exportTooltip = window.customElements.get("kuc-tooltip");
  if (exportTooltip) {
    return;
  }

  class KucTooltip extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property() container: string | HTMLElement = "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) placement: TooltipPlacement = "top";
    @property({ type: String }) title = "";
    private _container:
      | HTMLElement
      | DirectiveResult<typeof UnsafeHTMLDirective> = "";

    private _GUID: string;
    private _globalEscapeBound: KeyBoardFunction;
    private _globalPointerDownBound: PointerFunction;

    @query(".kuc-tooltip__container")
    private _containerEl!: HTMLDivElement;

    @query(".kuc-tooltip__tooltip")
    private _tooltip!: HTMLDivElement;

    @query(".kuc-tooltip__trigger")
    private _trigger!: HTMLDivElement;

    constructor(props?: TooltipProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
      this._globalEscapeBound = this._globalEscape.bind(this);
      this._globalPointerDownBound = this._globalPointerDown.bind(this);
    }

    update(changedProperties: PropertyValues) {
      if (changedProperties.has("container")) {
        this._container = unsafeHTMLConverter(this.container);
      }
      super.update(changedProperties);
    }

    render() {
      return html`
        <div
          class="kuc-tooltip__container kuc-tooltip__container--${this._getPlacement()}"
        >
          <div
            id="${this._GUID}-body"
            class="kuc-tooltip__trigger"
            aria-labelledby="${this._GUID}-control"
          >
            ${this._container}
          </div>
          ${this._getTitleTemplate()}
        </div>
      `;
    }

    private _getTitleTemplate() {
      if (!this.title) return html``;

      return html`
        <div
          class="kuc-tooltip__tooltip kuc-tooltip__tooltip--hidden"
          role="tooltip"
        >
          <div class="kuc-tooltip__tooltip__wrapper">
            <div class="kuc-tooltip__tooltip__arrow"></div>
            <div class="kuc-tooltip__tooltip__text">${this.title}</div>
          </div>
        </div>
      `;
    }

    protected firstUpdated(): void {
      this._bindEvents();
    }

    private _openTooltip() {
      this._showTooltip();
      // this.checkBoundingBox();
      this._attachGlobalListener();
    }

    private _closeTooltip() {
      this._hideTooltip();
      // this.resetBoundingBox();
      this._removeGlobalListener();
    }

    private _showTooltip() {
      this._tooltip.classList.remove("kuc-tooltip__tooltip--hidden");
    }

    private _hideTooltip() {
      this._tooltip.classList.add("kuc-tooltip__tooltip--hidden");
    }

    private _bindEvents() {
      if (!this.title) return;

      const _contentElement = this._trigger.childNodes[2];

      this._containerEl.addEventListener(
        "mouseenter",
        this._openTooltip.bind(this)
      );
      this._containerEl.addEventListener(
        "touchstart",
        this._openTooltip.bind(this)
      );
      this._containerEl.addEventListener(
        "mouseleave",
        this._closeTooltip.bind(this)
      );

      _contentElement.addEventListener("focus", this._openTooltip.bind(this));
      _contentElement.addEventListener("blur", this._closeTooltip.bind(this));
    }

    private _attachGlobalListener() {
      document.addEventListener("keydown", this._globalEscapeBound);
      document.addEventListener("pointerdown", this._globalPointerDownBound);
    }

    private _removeGlobalListener() {
      document.removeEventListener("keydown", this._globalEscapeBound);
      document.removeEventListener("pointerdown", this._globalPointerDownBound);
    }

    private _globalEscape(event: KeyboardEvent) {
      if (event.key === "Escape" || event.key === "Esc") {
        this._closeTooltip();
      }
    }

    private _globalPointerDown(event: PointerEvent) {
      const target = event.target as HTMLElement;
      const tooltipEl = target.closest(".kuc-tooltip__tooltip");
      if (tooltipEl) return;

      switch (event.target) {
        case this._container:
        case this._trigger:
        case this._tooltip:
          event.preventDefault();
          break;
        default:
          this._closeTooltip();
          this._trigger.blur();
      }
    }

    private _getPlacement() {
      const placement: TooltipPlacement[] = ["top", "bottom", "left", "right"];
      const isOfTypePlacement = placement.includes(this.placement);
      return isOfTypePlacement ? this.placement : "top";
    }
  }
  window.customElements.define("kuc-tooltip", KucTooltip);
  createStyleOnHeader(TOOLTIP_CSS);
  exportTooltip = KucTooltip;
})();
const Tooltip = exportTooltip as any;
export { Tooltip };
