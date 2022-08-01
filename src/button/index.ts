import { html } from "lit";
import { property } from "lit/decorators.js";
import {
  KucBase,
  dispatchCustomEvent,
  createStyleOnHeader,
} from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";
import { ButtonProps } from "./type";
import { BUTTON_CSS } from "./style";

let exportButton;
(() => {
  exportButton = window.customElements.get("kuc-button");
  if (exportButton) {
    return;
  }

  class KucButton extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
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

    constructor(props?: ButtonProps) {
      super();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    private _handleClickButton(event: MouseEvent) {
      event.stopPropagation();
      dispatchCustomEvent(this, "click");
    }

    private _getButtonColorType() {
      if (
        this.type === "normal" ||
        this.type === "submit" ||
        this.type === "alert"
      ) {
        return this.type;
      }
      return "normal";
    }

    render() {
      return html`
        <button
          type="button"
          class="kuc-button__button kuc-button__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this.text}
        </button>
      `;
    }
  }
  window.customElements.define("kuc-button", KucButton);
  createStyleOnHeader(BUTTON_CSS);
  exportButton = KucButton;
})();
const Button = exportButton as any;
export { Button };
