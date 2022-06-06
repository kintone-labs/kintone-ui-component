import { html } from "lit";
import { property } from "lit/decorators.js";
import { createStyleOnHeader, KucBase } from "../kuc-base";
import { BASE_ERROR } from "./style";
class BaseError extends KucBase {
  @property({ type: String }) ariaLive = "";
  @property({ type: String }) guid = "";
  @property({ type: String }) text = "";

  render() {
    return html`
      ${this.ariaLive && this.ariaLive !== ""
        ? html`
            <div
              class="kuc-base-error__error"
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
              class="kuc-base-error__error"
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

if (!window.customElements.get("kuc-base-error")) {
  window.customElements.define("kuc-base-error", BaseError);
}
createStyleOnHeader(BASE_ERROR);

export { BaseError };
