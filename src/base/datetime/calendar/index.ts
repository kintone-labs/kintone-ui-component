import { html } from "lit";
import { state } from "lit/decorators.js";
import { KucBase } from "../../kuc-base";
import "./header";
import "./body";
import "./footer";

export class BaseDateTimeCalendar extends KucBase {
  @state() _month = 0;
  @state() _year = 2021;

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-datetime-calendar__group">
        <kuc-base-datetime-calendar-header
          @kuc:calendar-header-change="${this._handleKucCalendarHeaderChange}"
        ></kuc-base-datetime-calendar-header>
        <kuc-base-datetime-calendar-body
          month="${this._month}"
          year="${this._year}"
        ></kuc-base-datetime-calendar-body>
        <kuc-base-datetime-calendar-footer></kuc-base-datetime-calendar-footer>
      </div>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        .kuc-base-datetime-calendar__group {
          display: inline-block;
          box-sizing: border-box;
          width: 336px;
          padding: 32px 32px 24px;
          background: #ffffff;
          box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);
          text-align: center;
          font-size: 13px;
        }
      </style>
    `;
  }

  private _handleKucCalendarHeaderChange(event: CustomEvent) {
    const values = event.detail.value.split("-");
    this._year = values[0];
    this._month = values[1] - 1;
  }
}

if (!window.customElements.get("kuc-base-datetime-calendar")) {
  window.customElements.define(
    "kuc-base-datetime-calendar",
    BaseDateTimeCalendar
  );
}
