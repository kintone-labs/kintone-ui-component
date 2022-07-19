import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import {
  KucBase,
  CustomEventDetail,
  dispatchCustomEvent,
  createStyleOnHeader,
} from "../../../kuc-base";
import { getDisplayingDates, WeekDate, getLocale } from "../../utils";
import { BASE_MOBILE_CALENDAR_BODY_CSS } from "./style";

export class BaseMobileDateTimeCalendarBody extends KucBase {
  @property({ type: Number }) month = 1;
  @property({ type: Number }) year = 2021;
  @property({ type: String }) language = "en";
  @property({ type: String, reflect: true }) value = "";

  @state() _month = 1;
  @state() _year = 2021;

  private _locale = getLocale("en");

  constructor() {
    super();
    this._handleClickDocument = this._handleClickDocument.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      document.addEventListener("click", this._handleClickDocument);
    }, 1);
  }

  disconnectedCallback() {
    document.removeEventListener("click", this._handleClickDocument);
    super.disconnectedCallback();
  }

  update(changedProperties: PropertyValues) {
    changedProperties.forEach((_oldValue, propName) => {
      propName === "language" && (this._locale = getLocale(this.language));
    });
    if (changedProperties.has("month")) this._month = this.month;
    if (changedProperties.has("year")) this._year = this.year;
    if (changedProperties.has("value")) {
      const { month, year } = this._separateDateValue();
      this._month = parseInt(month, 10);
      this._year = parseInt(year, 10);
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      <table class="kuc-base-mobile-datetime-calendar-body__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `;
  }

  private _handleClickDocument() {
    dispatchCustomEvent(this, "kuc:mobile-calendar-body-blur", {});
  }

  private _handleClickDateBtn(event: MouseEvent | KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();

    const itemEl = event.target as HTMLButtonElement;
    itemEl.setAttribute("aria-current", "true");

    const value = itemEl.getAttribute("data-date")!;
    this._dispatchClickEvent(value);
  }

  private _dispatchClickEvent(value: string) {
    const detail: CustomEventDetail = { oldValue: this.value, value: value };
    dispatchCustomEvent(this, "kuc:mobile-calendar-body-click-date", detail);
    this.value = value;
  }

  private _isToday(dateParts: string[]) {
    const today = new Date();
    return (
      parseInt(dateParts[0], 10) === today.getFullYear() &&
      parseInt(dateParts[1], 10) === today.getMonth() + 1 &&
      parseInt(dateParts[2], 10) === today.getDate()
    );
  }

  private _separateDateValue(value = this.value) {
    const dates = value.split("-");
    return {
      day: dates[2],
      month: dates[1],
      year: dates[0],
    };
  }

  private _getDateClass(dateParts: string[], isThisMonth: boolean) {
    if (isThisMonth) {
      const isToday = this._isToday(dateParts);
      if (isToday)
        return " kuc-base-mobile-datetime-calendar-body__table__date--today";

      return "";
    }
    return " kuc-base-mobile-datetime-calendar-body__table__date--other-month";
  }

  private _isSameDayOfMoment(dates: string[]) {
    const month = parseInt(dates[1], 10);
    const day = parseInt(dates[2], 10);
    const year = parseInt(dates[0], 10);
    let dateFocused = new Date().getDate();

    const currentDay = this.value.split("-")[2];
    if (!currentDay) return false;

    if (this.value) dateFocused = new Date(this.value).getDate();
    if (dateFocused === day && month === this._month) return true;
    const lastDayOfMonth = new Date(year, this._month, 0).getDate();
    if (
      dateFocused > lastDayOfMonth &&
      lastDayOfMonth === day &&
      month === this._month
    )
      return true;
    return false;
  }

  private _getHeaderItemsTemplate() {
    return html`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map((wday) => {
            return html`
              <th
                class="kuc-base-mobile-datetime-calendar-body__table__header"
                role="columnheader"
                abbr="${wday.abbr}"
              >
                ${wday.text}
              </th>
            `;
          })}
        </tr>
      </thead>
    `;
  }

  private _getDateItemsTemplate() {
    const displayingDates = getDisplayingDates(this._year, this._month - 1);
    const monthString = this._locale.MONTH_SELECT[this._month - 1];
    return html`
      <tbody>
        ${displayingDates.map((weeks) => {
          return html`
            <tr>
              ${weeks.map((weekDate: WeekDate) => {
                const dateParts = weekDate.text.split("-");
                const isSameDate = this._isSameDayOfMoment(dateParts);
                const isThisMonth = parseInt(dateParts[1], 10) === this._month;
                return html`
                  <td
                    role="gridcell"
                    tabindex="-1"
                    class="kuc-base-mobile-datetime-calendar-body__table__date${(this
                      .value === weekDate.attr ||
                      isSameDate) &&
                    isThisMonth
                      ? "--selected"
                      : ""}${this._getDateClass(dateParts, isThisMonth)}"
                    data-date="${weekDate.attr}"
                    aria-label="${dateParts[2]} ${monthString}"
                    @click="${this._handleClickDateBtn}"
                  >
                    ${dateParts[2] || ""}
                  </td>
                `;
              })}
            </tr>
          `;
        })}
      </tbody>
    `;
  }
}

if (!window.customElements.get("kuc-base-mobile-datetime-calendar-body")) {
  createStyleOnHeader(BASE_MOBILE_CALENDAR_BODY_CSS);
  window.customElements.define(
    "kuc-base-mobile-datetime-calendar-body",
    BaseMobileDateTimeCalendarBody
  );
}
