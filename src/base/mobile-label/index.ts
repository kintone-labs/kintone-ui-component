import { html } from "lit";
import { property } from "lit/decorators.js";
import { KucBase, createStyleOnHeader } from "../kuc-base";
import { BASE_MOBILE_LABEL_CSS } from "./style";

export class BaseMobileLabel extends KucBase {
  @property({ type: Boolean }) requiredIcon = false;
  @property({ type: String }) guid = "";
  @property({ type: String }) text = "";

  render() {
    return html`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-mobile-label__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `;
  }

  private _getTextTemplate() {
    return this.guid && this.guid !== ""
      ? html`
          <span class="kuc-base-mobile-label__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `
      : html` <span class="kuc-base-mobile-label__text">${this.text}</span> `;
  }
}
if (!window.customElements.get("kuc-base-mobile-label")) {
  createStyleOnHeader(BASE_MOBILE_LABEL_CSS);
  window.customElements.define("kuc-base-mobile-label", BaseMobileLabel);
}
