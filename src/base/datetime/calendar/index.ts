import { html, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";

import {
  createStyleOnHeader,
  dispatchCustomEvent,
  KucBase,
} from "../../kuc-base";
import { BaseDateTimeListBox } from "../listbox";
import { getTodayStringByLocale } from "../utils";

import { BaseDateTimeCalendarBody } from "./body";
import { BaseDateTimeHeaderMonth } from "./header/dropdown/month";
import { BaseDateTimeHeaderYear } from "./header/dropdown/year";
import "./header";
import "./footer";
import { CALENDAR_CSS } from "./style";
export { BaseDateTimeCalendarBody } from "./body";

export class BaseDateTimeCalendar extends KucBase {
  @property({ type: String, attribute: "lang", reflect: true }) language = "en";
  @property({ type: String, reflect: true }) value = "";

  @query(".kuc-base-datetime-calendar-header__month")
  private _monthEl!: BaseDateTimeHeaderMonth;

  @query(".kuc-base-datetime-calendar-header__year")
  private _yearEl!: BaseDateTimeHeaderYear;

  @query(".kuc-base-datetime-header-month__listbox")
  private _listBoxMonthEl!: BaseDateTimeListBox;
  @query(".kuc-base-datetime-header-year__listbox")
  private _listBoxYearEl!: BaseDateTimeListBox;

  @state() _month = 1;
  @state() _year = new Date().getFullYear();

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("value")) this._updateValue();
    super.update(changedProperties);
  }

  render() {
    return html`
      <div
        class="kuc-base-datetime-calendar__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
        @keydown="${this._handleKeyDownCalendarGroup}"
      >
        <kuc-base-datetime-calendar-header
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-datetime-calendar-header>
        <kuc-base-datetime-calendar-body
          .year="${this._year}"
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

  async updated(changedProperties: PropertyValues) {
    await this.updateComplete;
    super.updated(changedProperties);
  }

  public focusActiveDate() {
    const calendarBody = this.querySelector(
      "kuc-base-datetime-calendar-body",
    ) as BaseDateTimeCalendarBody;
    if (calendarBody) {
      calendarBody.focusActiveDate();
    }
  }
  private _handleKeyDownCalendarGroup(event: KeyboardEvent) {
    if (event.key !== "Escape") return;
    event.preventDefault();
    event.stopPropagation();
    dispatchCustomEvent(this, "kuc:calendar-escape", {});
  }

  private _handleClickCalendarGroup(event: Event) {
    event.stopPropagation();
    if (this._listBoxMonthEl) this._monthEl.closeListBox();
    if (this._listBoxYearEl) this._yearEl.closeListBox();
  }

  private _handleCalendarHeaderChange(event: CustomEvent) {
    const { year, month } = this._separateValue(event.detail.value);
    this._year = year;
    this._month = month;
  }

  private _handleCalendarBodyChangeDate(event: CustomEvent) {
    const { year, month } = this._separateValue(event.detail.value);
    this._year = year;
    this._month = month;
  }

  private _updateValue() {
    if (this.value === "") {
      this.value = getTodayStringByLocale().slice(0, 7) + "-01";
    }
    const { year, month } = this._separateValue(this.value);
    this._year = year;
    this._month = month;
  }

  private _separateValue(value: string) {
    const dateParts = value.split("-");
    return {
      year: parseInt(dateParts[0], 10),
      month: parseInt(dateParts[1], 10),
    };
  }
}

if (!window.customElements.get("kuc-base-datetime-calendar")) {
  createStyleOnHeader(CALENDAR_CSS);
  window.customElements.define(
    "kuc-base-datetime-calendar",
    BaseDateTimeCalendar,
  );
}
