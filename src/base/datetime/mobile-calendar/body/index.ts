import { html, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import {
  KucBase,
  CustomEventDetail,
  dispatchCustomEvent
} from "../../../kuc-base";
import { getDisplayingDates, WeekDate, getLocale } from "../../utils";

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
      ${this._getStyleTagTemplate()}
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
      year: dates[0]
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
          ${this._locale.WEEK_DAYS.map(wday => {
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
        ${displayingDates.map(weeks => {
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

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-base-mobile-datetime-calendar-body,
        kuc-base-mobile-datetime-calendar-body * {
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }

        :lang(zh) kuc-base-mobile-datetime-calendar-body,
        :lang(zh) kuc-base-mobile-datetime-calendar-body * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        .kuc-base-mobile-datetime-calendar-body__table,
        .kuc-base-mobile-datetime-calendar-body__table tr {
          border-collapse: separate;
          border-spacing: 0;
        }
        .kuc-base-mobile-datetime-calendar-body__table__date--selected {
          border-spacing: 1px;
          padding: 0px;
        }
        .kuc-base-mobile-datetime-calendar-body__table__date {
          max-width: 40px;
          border-spacing: 1px;
          cursor: pointer;
          box-sizing: border-box;
          width: 40px;
          height: 40px;
          border: 1px solid #ffffff;
          text-align: center;
          vertical-align: middle;
          user-select: none;
          color: #333333;
          font-size: 14px;
          font-weight: 400;
        }
        .kuc-base-mobile-datetime-calendar-body__table__date
          .kuc-base-mobile-datetime-calendar-body__table__date__button {
          border-spacing: 1px;
          cursor: pointer;
          box-sizing: border-box;
          text-align: center;
          vertical-align: middle;
          color: #333333;
        }
        .kuc-base-mobile-datetime-calendar-body__table__date,
        .kuc-base-mobile-datetime-calendar-body__table__date--selected,
        .kuc-base-mobile-datetime-calendar-body__table__header {
          box-sizing: border-box;
          height: 40px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          font-weight: 400;
          font-size: 12px;
          color: #333333;
          padding: 0;
        }
        .kuc-base-mobile-datetime-calendar-body__table__date {
          font-size: 14px;
        }
        th.kuc-base-mobile-datetime-calendar-body__table__header {
          font-weight: 700;
        }
        .kuc-base-mobile-datetime-calendar-body__table__date--selected
          .kuc-base-mobile-datetime-calendar-body__table__date__button,
        .kuc-base-mobile-datetime-calendar-body__table__date
          .kuc-base-mobile-datetime-calendar-body__table__date__button,
        .kuc-base-mobile-datetime-calendar-body__table__header {
          box-sizing: border-box;
          border: 1px solid #ffffff;
        }
        .kuc-base-mobile-datetime-calendar-body__table__date--selected
          .kuc-base-mobile-datetime-calendar-body__table__date__button,
        .kuc-base-mobile-datetime-calendar-body__table__date
          .kuc-base-mobile-datetime-calendar-body__table__date__button {
          background: none;
          cursor: pointer;
          max-width: 40px;
        }
        .kuc-base-mobile-datetime-calendar-body__table__date--selected {
          border: 1px solid #206694;
          box-sizing: border-box;
          text-align: center;
          font-size: 14px;
        }
        .kuc-base-mobile-datetime-calendar-body__table__date--selected
          .kuc-base-mobile-datetime-calendar-body__table__date__button {
          outline: none;
        }
        .kuc-base-mobile-datetime-calendar-body__table__date
          .kuc-base-mobile-datetime-calendar-body__table__date__button:focus-visible {
          outline: none;
        }
        .kuc-base-mobile-datetime-calendar-body__table__date--today {
          color: #333333;
          background: #d8d8d8;
        }
        .kuc-base-mobile-datetime-calendar-body__table__date--other-month {
          color: #a5a5a5;
        }
        .kuc-base-mobile-datetime-calendar-body__table__date--selected:focus {
          outline: none;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-mobile-datetime-calendar-body")) {
  window.customElements.define(
    "kuc-base-mobile-datetime-calendar-body",
    BaseMobileDateTimeCalendarBody
  );
}
