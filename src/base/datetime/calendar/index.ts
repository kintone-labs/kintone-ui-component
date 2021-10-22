import { html } from "lit";
import { state, property } from "lit/decorators.js";
import { KucBase } from "../../kuc-base";
import "./header";
import "./body";
import "./footer";

export class BaseDateTimeCalendar extends KucBase {
  @property({ type: String }) language = "en";
  @property({ type: String, reflect: true }) value = "";

  @state()
  private _month = 0;

  @state()
  private _year = 2021;

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-datetime-calendar__group">
        <kuc-base-datetime-calendar-header
          .language="${this.language}"
          .month="${this._month}"
          .year="${this._year}"
          @kuc:calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-datetime-calendar-header>
        <kuc-base-datetime-calendar-body
          .month="${this._month}"
          .year="${this._year}"
          .language="${this.language}"
          .value="${this.value}"
          @kuc:calendar-body-change-date="${this._handleCalendarBodyChangeDate}"
          @kuc:calendar-body-click-date="${this._handleCalendarBodyClickDate}"
        ></kuc-base-datetime-calendar-body>
        <kuc-base-datetime-calendar-footer
          .language="${this.language}"
        ></kuc-base-datetime-calendar-footer>
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

  private _handleCalendarHeaderChange(event: CustomEvent) {
    const values = event.detail.value.split("-");
    this._year = values[0];
    this._month = values[1] - 1;
  }

  private _handleCalendarBodyChangeDate(event: CustomEvent) {
    const values = event.detail.value.split("-");
    console.log(values);
    this._year = values[0];
    this._month = values[1] - 1;
    console.log(this._year);
    console.log(this._month);
  }

  private _handleCalendarBodyClickDate(event: CustomEvent) {
    const values = event.detail.value.split("-");
    console.log(values);
    this._year = values[0];
    this._month = values[1] - 1;
    console.log(this._year);
    console.log(this._month);
  }
}

if (!window.customElements.get("kuc-base-datetime-calendar")) {
  window.customElements.define(
    "kuc-base-datetime-calendar",
    BaseDateTimeCalendar
  );
}
