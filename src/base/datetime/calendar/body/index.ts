import { html, property, query, PropertyValues } from "lit-element";
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
  @property({ type: Number }) month = 1;
  @property({ type: Number }) year = 2021;
  @property({ type: String }) language = "en";
  @property() weekDays: WeekDaysItems[] | undefined;

  @query(".kuc-base-datetime-calendar-body__date--selected")
  private _selectedItemEl!: HTMLButtonElement;

  @query(".kuc-base-datetime-calendar-body__date--today")
  private _todayItemEm!: HTMLButtonElement;

  private _locale = en;
  private _selectedValue = "";
  constructor() {
    super();
    if (!this.weekDays || this.weekDays.length === 0) {
      this.weekDays = this._locale.WEEK_DAYS;
    }
  }

  public getTodayItemEl() {
    return this._todayItemEm;
  }

  public getTodayValue() {
    const today = this._getTodayObj();
    return `${today.fullYear}-${today.month}-${today.date}`;
  }

  public getSelectedItemEl() {
    return this._selectedItemEl;
  }

  public getSelectedValue() {
    return this._selectedItemEl
      ? this._selectedItemEl.getAttribute("data-date")
      : "";
  }

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
        ${this.weekDays?.map(wday => {
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
    const today = this.getTodayValue();
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
                      aria-selected="${this._selectedValue === weekDate}"
                      tabindex="${weekDate === today ? "0" : "-1"}"
                      class="${this._getDateClass(dateParts)}"
                      data-date="${weekDate}"
                      @click=${this._handleClickDate}
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

  private _handleClickDate(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    const itemEl = event.target as HTMLButtonElement;
    this._setSelectedEl(itemEl);

    const value = itemEl.getAttribute("data-date") || "";
    const detail: CustomEventDetail = {
      oldValue: this._selectedValue,
      value: value
    };
    this._selectedValue = value;
    dispatchCustomEvent(this, "kuc:calendar-body-click-date", detail);
  }

  private _setSelectedEl(itemEl: HTMLButtonElement) {
    if (this._selectedItemEl)
      this._selectedItemEl.classList.remove(
        "kuc-base-datetime-calendar-body__date--selected"
      );
    itemEl.classList.add("kuc-base-datetime-calendar-body__date--selected");
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

  private _getTodayObj() {
    const today = new Date();
    return {
      fullYear: today.getFullYear(),
      month: today.getMonth() + 1,
      date: today.getDate()
    };
  }

  private _isToday(dateParts: string[]) {
    const today = this._getTodayObj();
    return (
      parseInt(dateParts[0], 10) === today.fullYear &&
      parseInt(dateParts[1], 10) === today.month &&
      parseInt(dateParts[2], 10) === today.date
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
        .kuc-base-datetime-calendar-body__date--selected {
          border: 1px solid #3498db;
        }
        .kuc-base-datetime-calendar-body__date--selected:focus-visible {
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
