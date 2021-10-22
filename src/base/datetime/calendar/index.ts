import { html, PropertyValues } from "lit";
import { state, property, query } from "lit/decorators.js";
import { KucBase } from "../../kuc-base";
import { BaseDateTimeCalendarHeader } from "./header";
import { BaseDateTimeCalendarBody } from "./body";
import "./footer";

export class BaseDateTimeCalendar extends KucBase {
  @property({ type: String }) language = "en";
  @property({ type: String, reflect: true }) value = "";

  @query("kuc-base-datetime-calendar-header")
  _headerEl!: BaseDateTimeCalendarHeader;

  @query("kuc-base-datetime-calendar-body")
  _bodyEl!: BaseDateTimeCalendarBody;

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-datetime-calendar__group">
        <kuc-base-datetime-calendar-header
          .language="${this.language}"
          @kuc:calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-datetime-calendar-header>
        <kuc-base-datetime-calendar-body
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
    this._updateBodyEl(year, month);
  }

  private _handleCalendarBodyChangeDate(event: CustomEvent) {
    const { year, month } = this._separateValue(event.detail.value);
    this._updateHeaderEl(year, month);
  }

  private _updateValue() {
    const { year, month } = this._separateValue(this.value);
    this._updateHeaderEl(year, month);
    this._updateBodyEl(year, month, this.value);
  }

  private _updateHeaderEl(year: number, month: number) {
    this._headerEl.year = year;
    this._headerEl.month = month;
  }

  private _updateBodyEl(year: number, month: number, value?: string) {
    this._bodyEl.year = year;
    this._bodyEl.month = month;
    if (value) this._bodyEl.value = value;
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
