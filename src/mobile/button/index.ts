import { html, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { DirectiveResult } from "lit/directive.js";
import { UnsafeHTMLDirective } from "lit/directives/unsafe-html.js";

import {
  unsafeHTMLConverter,
  visiblePropConverter,
} from "../../base/converter";
import {
  createStyleOnHeader,
  dispatchCustomEvent,
  KucBase,
} from "../../base/kuc-base";
import { isHTMLElement, validateProps } from "../../base/validator";

import { MOBILE_BUTTON_CSS } from "./style";
import { MobileButtonProps } from "./type";

let exportMobileButton;
(() => {
  exportMobileButton = window.customElements.get("kuc-mobile-button");
  if (exportMobileButton) {
    return;
  }

  class KucMobileButton extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" })
    className = "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) text = "";
    @property({ type: String }) type = "normal";
    @property() content: string | HTMLElement = "";
    @property({ type: Boolean }) disabled = false;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;

    private _content:
      | HTMLElement
      | DirectiveResult<typeof UnsafeHTMLDirective> = "";

    constructor(props?: MobileButtonProps) {
      super();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    private _handleClickButton(event: MouseEvent) {
      event.stopPropagation();
      dispatchCustomEvent(this, "click");
    }

    private _getButtonColorType() {
      if (this.type === "normal" || this.type === "submit") {
        return this.type;
      }
      return "normal";
    }

    willUpdate(changedProperties: PropertyValues) {
      if (changedProperties.has("content") || changedProperties.has("text")) {
        if (this.content) {
          if (isHTMLElement(this.content)) {
            this._content = unsafeHTMLConverter(this.content);
          } else {
            this._content = this.content;
          }
        } else {
          this._content = this.text;
        }
      }
    }

    render() {
      return html`
        <button
          type="button"
          class="kuc-mobile-button__button kuc-mobile-button__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this._content}
        </button>
      `;
    }
  }
  window.customElements.define("kuc-mobile-button", KucMobileButton);
  createStyleOnHeader(MOBILE_BUTTON_CSS);
  exportMobileButton = KucMobileButton;
})();
const MobileButton = exportMobileButton as any;
export { MobileButton };
