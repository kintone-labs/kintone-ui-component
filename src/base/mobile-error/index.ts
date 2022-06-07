import { html } from "lit";
import { property } from "lit/decorators.js";
import { KucBase, createStyleOnHeader } from "../kuc-base";
import { BASE_MOBILE_ERROR_CSS } from "./style";

export class BaseMobileError extends KucBase {
  @property({ type: String }) ariaLive = "";
  @property({ type: String }) guid = "";
  @property({ type: String }) text = "";

  render() {
    return html`
      ${this.ariaLive && this.ariaLive !== ""
        ? html`
            <div
              class="kuc-base-mobile-error__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `
        : html`
            <div
              class="kuc-base-mobile-error__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `;
  }
}
if (!window.customElements.get("kuc-base-mobile-error")) {
  createStyleOnHeader(BASE_MOBILE_ERROR_CSS);
  window.customElements.define("kuc-base-mobile-error", BaseMobileError);
}
