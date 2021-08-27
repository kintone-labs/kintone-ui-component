import { html } from "lit-html";
import { KucBase } from "../base/kuc-base";
import "./components/calendar/calendar";

export class Date extends KucBase {
  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <input class="kuc-date__input" type="text" />
      <kuc-calendar class="kuc-date__calendar"></kuc-calendar>
    `;
  }
  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-date {
          position: relative;
        }
        .kuc-date__input {
          border-color: #e3e7e8;
          border-width: 1px;
          border-style: solid;
          box-sizing: border-box;
          padding: 0;
          font-size: 14px;
          background-color: #fff;
          color: #333;
          width: 100px;
          height: 40px;
        }
        .kuc-date__calendar {
          position: absolute;
          top: 30px;
          left: 0px;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-date")) {
  window.customElements.define("kuc-date", Date);
}
