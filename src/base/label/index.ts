import { html } from "lit";
import { property } from "lit/decorators.js";
import { createStyleOnHeader, KucBase } from "../kuc-base";
import { BASE_LABEL_CSS } from "./style";

export class BaseLabel extends KucBase {
  @property({ type: Boolean }) requiredIcon = false;
  @property({ type: String }) guid = "";
  @property({ type: String }) text = "";

  render() {
    return html`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-label__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `;
  }

  private _getTextTemplate() {
    return this.guid && this.guid !== ""
      ? html`
          <span class="kuc-base-label__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `
      : html` <span class="kuc-base-label__text">${this.text}</span> `;
  }
}
if (!window.customElements.get("kuc-base-label")) {
  createStyleOnHeader(BASE_LABEL_CSS);
  window.customElements.define("kuc-base-label", BaseLabel);
}
