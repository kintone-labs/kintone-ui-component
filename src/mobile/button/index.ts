import { html } from "lit";
import { property } from "lit/decorators.js";
import {
  KucBase,
  dispatchCustomEvent,
  createStyleOnHeader,
} from "../../base/kuc-base";
import { visiblePropConverter } from "../../base/converter";
import { validateProps } from "../../base/validator";
import { MobileButtonProps } from "./type";
import { MOBILE_BUTTON_CSS } from "./style";

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
    @property({ type: Boolean }) disabled = false;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;

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

    render() {
      return html`
        <button
          type="button"
          class="kuc-mobile-button__button kuc-mobile-button__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this.text}
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
