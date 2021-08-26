import { html } from "lit-html";
import { KucBase } from "../../base/kuc-base";

export class CalendarPresentationFooter extends KucBase {
  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <span>Today</span>
      <span class="kuc-calendar-presentation-footer__center"></span>
      <span>None</span>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-calendar-presentation-footer {
          display: flex;
          align-items: flex-end;
          box-sizing: border-box;
          padding: 0;
          height: 27px;
        }
        .kuc-calendar-presentation-footer__center {
          width: 100%;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-calendar-presentation-footer")) {
  window.customElements.define(
    "kuc-calendar-presentation-footer",
    CalendarPresentationFooter
  );
}
