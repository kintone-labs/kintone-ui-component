import { html, PropertyValues } from "lit";
import { state, property, query } from "lit/decorators.js";
import { KucBase } from "../../kuc-base";
import { BaseDateTimeCalendarHeader } from "./header";
import { BaseDateTimeCalendarBody } from "./body";
import "./footer";

export class BaseDateTimeCalendar extends KucBase {
  @property({ type: String }) language = "en";
  @property({ type: String, reflect: true }) value = "";

  @state() _month = 1;
  @state() _Year = 2021;

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-datetime-calendar__group">
        <kuc-base-datetime-calendar-header
          .year="${this._Year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-datetime-calendar-header>
        <kuc-base-datetime-calendar-body
          .year="${this._Year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
          @kuc:calendar-body-change-date="${this._handleCalendarBodyChangeDate}"
        ></kuc-base-datetime-calendar-body>
        <kuc-base-datetime-calendar-footer
          .language="${this.language}"
        ></kuc-base-datetime-calendar-footer>
      </div>
    `;
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has("value")) this._updateValue();
    super.updated(changedProperties);
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
    const { year, month } = this._separateValue(event.detail.value);
    this._Year = year;
    this._month = month;
  }

  private _handleCalendarBodyChangeDate(event: CustomEvent) {
    const { year, month } = this._separateValue(event.detail.value);
    this._Year = year;
    this._month = month;
  }

  private _updateValue() {
    if (this.value === "") return;

    const { year, month } = this._separateValue(this.value);
    this._Year = year;
    this._month = month;
  }

  private _separateValue(value: string) {
    let date = new Date(this.value);
    if (isNaN(date.getTime())) {
      date = new Date();
      return {
        year: date.getFullYear(),
        month: date.getMonth() + 1
      };
    }

    const dateParts = value.split("-");
    return {
      year: parseInt(dateParts[0], 10),
      month: parseInt(dateParts[1], 10)
    };
  }
}

if (!window.customElements.get("kuc-base-datetime-calendar")) {
  window.customElements.define(
    "kuc-base-datetime-calendar",
    BaseDateTimeCalendar
  );
}
