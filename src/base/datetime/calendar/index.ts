import { html, PropertyValues } from "lit";
import { state, property, query } from "lit/decorators.js";
import {
  KucBase,
  dispatchCustomEvent,
  createStyleOnHeader
} from "../../kuc-base";
import { BaseDateTimeHeaderMonth } from "./header/dropdown/month";
import { BaseDateTimeHeaderYear } from "./header/dropdown/year";
import { BaseDateTimeListBox } from "../listbox";
import { getTodayStringByLocale, calculateDistanceInput } from "../utils";
import "./header";
import "./body";
import "./footer";
import { CALENDAR_CSS } from "./style";

export class BaseDateTimeCalendar extends KucBase {
  @property({ type: String }) language = "en";
  @property({ type: String, reflect: true }) value = "";

  @query(".kuc-base-datetime-calendar__group")
  private _baseCalendarGroupEl!: HTMLDivElement;

  @query(".kuc-base-datetime-calendar-header__month")
  private _monthEl!: BaseDateTimeHeaderMonth;

  @query(".kuc-base-datetime-calendar-header__year")
  private _yearEl!: BaseDateTimeHeaderYear;

  @query(".kuc-base-datetime-header-month__listbox")
  private _listBoxMonthEl!: BaseDateTimeListBox;

  @query(".kuc-base-datetime-header-year__listbox")
  private _listBoxYearEl!: BaseDateTimeListBox;

  @state() _month = 1;
  @state() _year = 2021;

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
    this._calculateBodyCalendarPosition();
    super.updated(changedProperties);
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

  private _calculateBodyCalendarPosition() {
    const { inputToBottom, inputToTop, inputToRight, inputToLeft } =
      calculateDistanceInput(this);
    const calendarHeight =
      this._baseCalendarGroupEl.getBoundingClientRect().height;

    if (inputToBottom >= calendarHeight) {
      this._calculateCalendarPosition(inputToRight, inputToLeft, "bottom");
      return;
    }
    if (inputToTop < 0 || inputToBottom > inputToTop) {
      this._calculateCalendarPosition(inputToRight, inputToLeft, "bottom");
      return;
    }
    this._calculateCalendarPosition(inputToRight, inputToLeft, "top");
  }

  private _calculateCalendarPosition(
    inputToRight: number,
    inputToLeft: number,
    type: string
  ) {
    if (!this.parentElement) return;

    const calendarWidth = 336;
    const inputHeight = 40;
    const inputWidth = 100;
    if (inputToRight < calendarWidth && inputToRight < inputToLeft) {
      const parentWidth = this.parentElement.getBoundingClientRect().width;
      const top = type === "bottom" ? inputHeight : "auto";
      const bottom = type === "bottom" ? "auto" : inputHeight;
      const right = parentWidth > inputWidth ? parentWidth - inputWidth : 0;

      this._setCalendarPosition({
        top,
        bottom,
        right,
      });
      return;
    }
    const top = type === "bottom" ? inputHeight : "auto";
    const bottom = type === "bottom" ? "auto" : inputHeight;
    const left = 0;
    this._setCalendarPosition({
      bottom,
      top,
      left,
    });
  }

  private _setCalendarPosition({
    top = "auto",
    left = "auto",
    right = "auto",
    bottom = "auto",
  }: {
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
  }) {
    const baseDatetimeCalendarEl = this._baseCalendarGroupEl.parentElement;
    if (!this.parentElement || !baseDatetimeCalendarEl) return;

    this.parentElement.style.position = "relative";
    baseDatetimeCalendarEl.style.bottom =
      bottom === "auto" ? bottom : bottom + "px";
    baseDatetimeCalendarEl.style.top = top === "auto" ? top : top + "px";
    baseDatetimeCalendarEl.style.left = left === "auto" ? left : left + "px";
    baseDatetimeCalendarEl.style.right =
      right === "auto" ? right : right + "px";
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
    BaseDateTimeCalendar
  );
}
