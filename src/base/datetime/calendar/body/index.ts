import { html, property, PropertyValues } from "lit-element";
import {
  KucBase,
  CustomEventDetail,
  dispatchCustomEvent
} from "../../../kuc-base";
import { en, zh, ja } from "../../resource/locale";
import { getDisplayingDates } from "../../utils/index";

type WeekDaysItems = {
  text: string;
  abbr: string;
};

export class BaseDateTimeCalendarBody extends KucBase {
  @property({ type: Number }) month = 0;
  @property({ type: Number }) year = 2021;
  @property({ type: String }) language = "ja";
  @property({ type: String }) value = "";

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

  showHide() {
    this.hidden = !this.hidden;
  }

  private _getHeaderItemsTemplate() {
    return html`
      <thead>
        ${this._locale.WEEK_DAYS.map(wday => {
          return html`
            <th
              class="kuc-base-datetime-calendar-body__header"
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
              ${weeks.map(weekDate => {
                const dateParts = weekDate.split("-");
                return html`
                  <td role="gridcell">
                    <button
                      aria-selected="${this.value === weekDate}"
                      tabindex="${weekDate === today || this.value === weekDate
                        ? "0"
                        : "-1"}"
                      class="${this._getDateClass(dateParts)}"
                      data-date="${weekDate}"
                      @click=${this._handleClickDateCalendarBody}
                      @keydown="${this._handleKeyDownDateCalendarBody}"
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

  private _handleClickDateCalendarBody(event: MouseEvent | KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();

    const itemEl = event.target as HTMLButtonElement;
    itemEl.setAttribute("aria-selected", "true");

    const value = itemEl.getAttribute("data-date") || "";
    this._handleUpdateValue(value);
    this.close();
  }

  private _handleKeyDownDateCalendarBody(event: KeyboardEvent) {
    let flag = false;
    switch (event.key) {
      case "Up":
      case "ArrowUp": {
        flag = true;
        this._moveToPositionOfDate(-7);
        break;
      }
      case "Down":
      case "ArrowDown": {
        flag = true;
        this._moveToPositionOfDate(7);
        break;
      }
      case "Left":
      case "ArrowLeft": {
        flag = true;
        this._moveToPositionOfDate(-1);
        break;
      }
      case "Right":
      case "ArrowRight": {
        flag = true;
        this._moveToPositionOfDate(1);
        break;
      }
      case "Enter": {
        flag = true;
        const value = this._getValueSelected();
        this._handleUpdateValue(value);
        this.close();
        break;
      }
      default:
        break;
    }
    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
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

  private close() {
    this.hidden = true;
  }

  private _getValueSelected() {
    const selectedEl = this.querySelectorAll(
      '.kuc-base-datetime-calendar-body__date[aria-selected="true"]'
    )[0];
    if (selectedEl) {
      return selectedEl.getAttribute("data-date") || "";
    }
    return "";
  }

  private _handleUpdateValue(value: string) {
    if (this.value === value) return;
    const detail: CustomEventDetail = { oldValue: this.value, value: value };
    dispatchCustomEvent(this, "kuc:calendar-body-click-date", detail);
    this.value = value;
  }

  private _moveToPositionOfDate(days: number) {
    const date = new Date(this.value || this._getDateString());
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

  private _getDateClass(dateParts: string[]) {
    let className = "kuc-base-datetime-calendar-body__date";

    const isToday = this._isToday(dateParts);
    if (isToday) {
      return (className += " kuc-base-datetime-calendar-body__date--today");
    }

    const isOtherMonth = parseInt(dateParts[1], 10) !== this.month + 1;
    if (isOtherMonth) {
      return (className +=
        " kuc-base-datetime-calendar-body__date--other-month");
    }
    return className;
  }

  private _getDateString(date = new Date()) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  private _isToday(dateParts: string[]) {
    const today = new Date();
    return (
      parseInt(dateParts[0], 10) === today.getFullYear() &&
      parseInt(dateParts[1], 10) === today.getMonth() + 1 &&
      parseInt(dateParts[2], 10) === today.getDate()
    );
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
        .kuc-base-datetime-calendar-body__date,
        .kuc-base-datetime-calendar-body__header {
          text-align: center;
          text-transform: uppercase;
          font-size: 10px;
          font-weight: 400;
          color: #333333;
        }
        .kuc-base-datetime-calendar-body__date,
        .kuc-base-datetime-calendar-body__header {
          box-sizing: border-box;
          padding: 8px 0;
          width: 36px;
          border: 1px solid #ffffff;
          line-height: 1.5;
        }
        .kuc-base-datetime-calendar-body__header:nth-child(1),
        .kuc-base-datetime-calendar-body__header:nth-child(7) {
          color: #d4d7d7;
        }
        .kuc-base-datetime-calendar-body__date {
          background: none;
          cursor: pointer;
        }
        .kuc-base-datetime-calendar-body__date[aria-selected="true"] {
          border: 1px solid #3498db;
        }
        .kuc-base-datetime-calendar-body__date:focus-visible {
          outline: none;
        }
        .kuc-base-datetime-calendar-body__date--today {
          color: #ffffff;
          background: #888888;
        }
        .kuc-base-datetime-calendar-body__date--today:hover {
          color: #333333;
        }
        .kuc-base-datetime-calendar-body__date--other-month {
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
