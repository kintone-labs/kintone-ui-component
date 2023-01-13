import { html, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";
import { DirectiveResult } from "lit/directive";
import { UnsafeHTMLDirective } from "lit/directives/unsafe-html";
import {
  KucBase,
  generateGUID,
  createStyleOnHeader,
  dispatchCustomEvent,
} from "../base/kuc-base";
import { unsafeHTMLConverter, visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";
import { TooltipProps } from "./type";
import { TOOLTIP_CSS } from "./style";

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
    @property({ type: String }) placement = "right";
    @property() text: string | HTMLElement = "";
    private _content:
      | HTMLElement
      | DirectiveResult<typeof UnsafeHTMLDirective> = "";
    private _text: HTMLElement | DirectiveResult<typeof UnsafeHTMLDirective> =
      "";
    private _GUID: string;
    @query(".kuc-tooltip__text")
    private _tooltipTextEl!: HTMLDivElement;

    constructor(props?: TooltipProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
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
        <div class="kuc-tooltip__group">
          <div class="kuc-tooltip__text ${this._getPlacement()}">
            ${this._text}
          </div>
          <div
            id="${this._GUID}-body"
            class="kuc-tooltip__body"
            aria-labelledby="${this._GUID}-control"
          >
            ${this._content}
          </div>
        </div>
      `;
    }

    private _getPlacement() {
      if (
        this.placement === "left" ||
        this.placement === "top" ||
        this.placement === "right" ||
        this.placement === "bottom"
      ) {
        return this.placement;
      }
      return "right";
    }
  }
  window.customElements.define("kuc-tooltip", KucTooltip);
  createStyleOnHeader(TOOLTIP_CSS);
  exportTooltip = KucTooltip;
})();
const Tooltip = exportTooltip as any;
export { Tooltip };
