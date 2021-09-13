import { html, property, query, svg } from "lit-element";
import { KucBase } from "../../../kuc-base";
import { getDisplayingDates } from "../../utils/index";

type WeekDaysItems = {
  text: string;
  abbr: string;
};

export class BaseDateTimeCalendarBody extends KucBase {
  @property({ type: Number }) month = 0;
  @property({ type: Number }) year = 1970;
  @property() weekDays: WeekDaysItems[] | undefined;

  constructor() {
    super();

    if (!this.weekDays || this.weekDays.length === 0) {
      this.weekDays = [
        { text: "SUN", abbr: "Sunday" },
        { text: "MON", abbr: "Monday" },
        { text: "TUE", abbr: "Tuesday" },
        { text: "WED", abbr: "Wednesday" },
        { text: "THU", abbr: "Thursday" },
        { text: "FRI", abbr: "Friday" },
        { text: "SAT", abbr: "Saturday" }
      ];
    }
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
                      class="${this._getDateClass(dateParts)}"
                      data-date="${weekDate}"
                    >
                      ${dateParts[2]}
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

  private _getDateClass(dateParts: string[]) {
    let className = "kuc-base-datetime-calendar-body__date";

    const today = new Date();
    const isToday =
      parseInt(dateParts[0], 10) === today.getFullYear() &&
      parseInt(dateParts[1], 10) === today.getMonth() + 1 &&
      parseInt(dateParts[2], 10) === today.getDate();

    if (isToday) {
      className += " kuc-base-datetime-calendar-body__date--today";
      return className;
    }

    const isOtherMonth = parseInt(dateParts[1], 10) !== this.month + 1;
    if (isOtherMonth) {
      className += " kuc-base-datetime-calendar-body__date--other-month";
    }

    return className;
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
