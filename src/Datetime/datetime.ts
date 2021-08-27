import { html } from "lit-html";
import { KucBase } from "../base/kuc-base";
import "./date";
import "./time";

export class Datetime extends KucBase {
  render() {
    return html`
      <kuc-date></kuc-date>
      <kuc-time></kuc-time>
    `;
  }
}

if (!window.customElements.get("kuc-datetime")) {
  window.customElements.define("kuc-datetime", Datetime);
}
