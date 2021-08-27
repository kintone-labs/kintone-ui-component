import { html } from "lit-html";
import { KucBase } from "../base/kuc-base";
import "./components/menu";

export class Time extends KucBase {
  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <input class="kuc-time__input" type="text" />
      <kuc-menu class="kuc-time__menu"></kuc-menu>
    `;
  }
  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-time {
          position: relative;
        }
        .kuc-time__input {
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
        .kuc-time__menu {
          position: absolute;
          top: 30px;
          left: 0px;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-time")) {
  window.customElements.define("kuc-time", Time);
}
