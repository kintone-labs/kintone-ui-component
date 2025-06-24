import { html, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { DirectiveResult } from "lit/directive.js";
import { UnsafeHTMLDirective } from "lit/directives/unsafe-html.js";

import { unsafeHTMLConverter, visiblePropConverter } from "../base/converter";
import {
  createStyleOnHeader,
  dispatchCustomEvent,
  KucBase,
} from "../base/kuc-base";
import { isHTMLElement, validateProps } from "../base/validator";

import { BUTTON_CSS } from "./style";
import { ButtonProps } from "./type";

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

    willUpdate(changedProperties: PropertyValues) {
      if (changedProperties.has("content") || changedProperties.has("text")) {
        if (
          this.content !== null &&
          this.content !== undefined &&
          this.content !== ""
        ) {
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
          class="kuc-button__button kuc-button__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this._content}
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
