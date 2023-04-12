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
    @property() content: string | HTMLElement = "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) placement: TooltipPlacement = "bottom";
    @property() text: string | HTMLElement = "";
    private _content:
      | HTMLElement
      | DirectiveResult<typeof UnsafeHTMLDirective> = "";
    private _text: HTMLElement | DirectiveResult<typeof UnsafeHTMLDirective> =
      "";

    private _GUID: string;
    private _globalEscapeBound: KeyBoardFunction;
    private _globalPointerDownBound: PointerFunction;

    @query(".kuc-tooltip__container")
    private _container!: HTMLDivElement;

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
      if (changedProperties.has("content")) {
        this._content = unsafeHTMLConverter(this.content);
      }
      if (changedProperties.has("text")) {
        this._text = unsafeHTMLConverter(this.text);
      }
      super.update(changedProperties);
    }

    render() {
      return html`
        <div class="kuc-tooltip__container ${this._getPlacement()}">
          <div
            id="${this._GUID}-body"
            class="kuc-tooltip__trigger"
            aria-labelledby="${this._GUID}-control"
          >
            ${this._content}
          </div>
          <div class="kuc-tooltip__tooltip tooltip-hidden" role="tooltip">
            <div class="kuc-tooltip__tooltip--wrapper">
              <div class="kuc-tooltip__tooltip--arrow"></div>
              <div class="kuc-tooltip__tooltip--text">${this._text}</div>
            </div>
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
      this._container.classList.add("tooltip-visible");
      this._tooltip.classList.remove("tooltip-hidden");
    }

    private _hideTooltip() {
      this._container.classList.remove("tooltip-visible");
      this._tooltip.classList.add("tooltip-hidden");
    }

    private _bindEvents() {
      const _contentElement = this._trigger.childNodes[2];

      this._container.addEventListener(
        "mouseenter",
        this._openTooltip.bind(this)
      );
      this._container.addEventListener(
        "touchstart",
        this._openTooltip.bind(this)
      );
      this._container.addEventListener(
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
      const isOfTypePlacement = ["top", "bottom", "left", "right"].includes(
        this.placement
      );
      return isOfTypePlacement ? this.placement : "bottom";
    }
  }
  window.customElements.define("kuc-tooltip", KucTooltip);
  createStyleOnHeader(TOOLTIP_CSS);
  exportTooltip = KucTooltip;
})();
const Tooltip = exportTooltip as any;
export { Tooltip };
