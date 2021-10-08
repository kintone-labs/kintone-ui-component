import { html, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";
import {
  KucBase,
  CustomEventDetail,
  dispatchCustomEvent
} from "../../../kuc-base";
import { en, zh, ja } from "../../resource/locale";
import { getDisplayingDates, padStart, WeekDate } from "../../utils/";

export class BaseDateTimeCalendarBody extends KucBase {
  @property({ type: Number }) month = 0;
  @property({ type: Number }) year = 2021;
  @property({ type: String }) language = "en";
  @property({ type: String, reflect: true }) value = "";

  @query(
    '.kuc-base-datetime-calendar-body__table__date__button[aria-selected="true"]'
  )
  private _selectedItem!: HTMLButtonElement;
  private _locale = en;

  update(changedProperties: PropertyValues) {
    changedProperties.forEach((_oldValue, propName) => {
      propName === "language" &&
        (this._locale = this._getLocale(this.language));
    });
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <table class="kuc-base-datetime-calendar-body__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `;
  }

  private _handleClickDateBtn(event: MouseEvent | KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();

    const itemEl = event.target as HTMLButtonElement;
    itemEl.setAttribute("aria-selected", "true");

    const value = itemEl.getAttribute("data-date") || "";
    this._dispatchClickEvent(value);
  }

  private _handleKeyDownDateBtn(event: KeyboardEvent) {
    let doPreventEvent = false;
    switch (event.key) {
      case "Up":
      case "ArrowUp": {
        doPreventEvent = true;
        this._moveToDate(-7);
        break;
      }
      case "Down":
      case "ArrowDown": {
        doPreventEvent = true;
        this._moveToDate(7);
        break;
      }
      case "Left":
      case "ArrowLeft": {
        doPreventEvent = true;
        this._moveToDate(-1);
        break;
      }
      case "Right":
      case "ArrowRight": {
        doPreventEvent = true;
        this._moveToDate(1);
        break;
      }
      case "Enter": {
        doPreventEvent = true;
        const value = this._getSelectedValue();
        this._dispatchClickEvent(value);
        break;
      }
      default:
        break;
    }
    if (doPreventEvent) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  private _dispatchClickEvent(value: string) {
    if (this.value === value) return;
    const detail: CustomEventDetail = { oldValue: this.value, value: value };
    dispatchCustomEvent(this, "kuc:calendar-body-click-date", detail);
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

  private _moveToDate(days: number) {
    const date = new Date(this.value);
    if (isNaN(date.getTime())) return;
    date.setDate(date.getDate() + days);

    const nextDate = this._getDateString(date);
    const nextMonth = date.getMonth();
    const nextYear = date.getFullYear();
    if (nextMonth !== this.month) this.month = nextMonth;
    if (nextYear !== this.year) this.year = nextYear;

    const detail: CustomEventDetail = {
      oldValue: this.value,
      value: nextDate
    };
    dispatchCustomEvent(this, "kuc:calendar-body-change-date", detail);
    this.value = nextDate;
  }

  private _getSelectedValue() {
    if (this._selectedItem) {
      return this._selectedItem.getAttribute("data-date") || "";
    }
    return "";
  }

  private _getDateClass(dateParts: string[]) {
    const isToday = this._isToday(dateParts);
    if (isToday)
      return " kuc-base-datetime-calendar-body__table__date__button--today";

    const isOtherMonth = parseInt(dateParts[1], 10) !== this.month + 1;
    if (isOtherMonth)
      return " kuc-base-datetime-calendar-body__table__date__button--other-month";
    return "";
  }

  private _getDateString(date = new Date()) {
    const year = date.getFullYear();
    const month = padStart(date.getMonth() + 1);
    const day = padStart(date.getDate());
    return `${year}-${month}-${day}`;
  }

  private _getLocale(language: string) {
    switch (language) {
      case "en":
        return en;
      case "zh":
        return zh;
      case "ja":
        return ja;
      default:
        return en;
    }
  }

  private _getHeaderItemsTemplate() {
    return html`
      <thead>
        ${this._locale.WEEK_DAYS.map(wday => {
          return html`
            <th
              class="kuc-base-datetime-calendar-body__table__header"
              role="columnheader"
              abbr="${wday.abbr}"
            >
              ${wday.text}
            </th>
          `;
        })}
      </thead>
    `;
  }

  private _getDateItemsTemplate() {
    const displayingDates = getDisplayingDates(this.year, this.month);
    const today = this._getDateString();
    return html`
      <tbody>
        ${displayingDates.map(weeks => {
          return html`
            <tr>
              ${weeks.map((weekDate: WeekDate) => {
                const dateParts = weekDate.text.split("-");
                return html`
                  <td
                    role="gridcell"
                    class="kuc-base-datetime-calendar-body__table__date${this
                      .value === weekDate.attr
                      ? "--selected"
                      : ""}"
                  >
                    <button
                      aria-selected="${this.value === weekDate.attr}"
                      tabindex="${weekDate.attr === today ||
                      this.value === weekDate.attr
                        ? "0"
                        : "-1"}"
                      class="kuc-base-datetime-calendar-body__table__date__button${this._getDateClass(
                        dateParts
                      )}"
                      data-date="${weekDate.attr}"
                      @click="${this._handleClickDateBtn}"
                      @keydown="${this._handleKeyDownDateBtn}"
                    >
                      ${dateParts[2] || ""}
                    </button>
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
        kuc-base-datetime-calendar-body,
        kuc-base-datetime-calendar-body *,
        :lang(en) kuc-base-datetime-calendar-body,
        :lang(en) kuc-base-datetime-calendar-body * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-base-datetime-calendar-body,
        :lang(ja) kuc-base-datetime-calendar-body * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-base-datetime-calendar-body,
        :lang(zh) kuc-base-datetime-calendar-body * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        .kuc-base-datetime-calendar-body__table {
          border-collapse: separate;
          border-spacing: 0;
        }
        .kuc-base-datetime-calendar-body__table__date
          .kuc-base-datetime-calendar-body__table__date__button,
        .kuc-base-datetime-calendar-body__table__date--selected
          .kuc-base-datetime-calendar-body__table__date__button,
        .kuc-base-datetime-calendar-body__table__header {
          text-align: center;
          text-transform: uppercase;
          font-size: 10px;
          font-weight: 400;
          color: #333333;
        }
        .kuc-base-datetime-calendar-body__table__date--selected
          .kuc-base-datetime-calendar-body__table__date__button,
        .kuc-base-datetime-calendar-body__table__date
          .kuc-base-datetime-calendar-body__table__date__button,
        .kuc-base-datetime-calendar-body__table__header {
          box-sizing: border-box;
          padding: 8px 0;
          width: 36px;
          height: 31px;
          border: 1px solid #ffffff;
        }
        .kuc-base-datetime-calendar-body__table__header:nth-child(1),
        .kuc-base-datetime-calendar-body__table__header:nth-child(7) {
          color: #d4d7d7;
        }
        .kuc-base-datetime-calendar-body__table__date--selected
          .kuc-base-datetime-calendar-body__table__date__button,
        .kuc-base-datetime-calendar-body__table__date
          .kuc-base-datetime-calendar-body__table__date__button {
          background: none;
          cursor: pointer;
        }
        .kuc-base-datetime-calendar-body__table__date
          .kuc-base-datetime-calendar-body__table__date__button:hover {
          color: #000000;
        }
        .kuc-base-datetime-calendar-body__table__date--selected {
          border: 1px solid #3498db;
          box-sizing: border-box;
        }
        .kuc-base-datetime-calendar-body__table__date--selected
          .kuc-base-datetime-calendar-body__table__date__button {
          width: 34px;
          height: 29px;
          outline: none;
        }
        .kuc-base-datetime-calendar-body__table__date
          .kuc-base-datetime-calendar-body__table__date__button:focus-visible {
          outline: none;
        }
        .kuc-base-datetime-calendar-body__table__date--selected
          .kuc-base-datetime-calendar-body__table__date__button--today,
        .kuc-base-datetime-calendar-body__table__date
          .kuc-base-datetime-calendar-body__table__date__button--today {
          color: #ffffff;
          background: #888888;
        }
        .kuc-base-datetime-calendar-body__table__date
          .kuc-base-datetime-calendar-body__table__date__button--today:hover {
          color: #333333;
        }
        .kuc-base-datetime-calendar-body__table__date
          .kuc-base-datetime-calendar-body__table__date__button--other-month {
          color: #d4d7d7;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-datetime-calendar-body")) {
  window.customElements.define(
    "kuc-base-datetime-calendar-body",
    BaseDateTimeCalendarBody
  );
}
