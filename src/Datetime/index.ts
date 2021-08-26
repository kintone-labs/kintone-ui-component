import { html } from "lit-html";
import { KucBase } from "../base/kuc-base";
import "./date";

export class Datetime extends KucBase {
  render() {
    return html`
      <kuc-date />
    `;
  }
}

if (!window.customElements.get("kuc-datetime")) {
  window.customElements.define("kuc-datetime", Datetime);
}
