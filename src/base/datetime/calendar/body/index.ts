import { html, property, query, svg } from "lit-element";
import { KucBase } from "../../../kuc-base";

type WeekDaysItems = {
  text: string;
  abbr: string;
};

export class BaseDateTimeCalendarBody extends KucBase {
  @property() month = 0;
  @property() year = 1970;
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
        ${this._getWeekDayItemsTemplate()}
      </table>
    `;
  }

  private _getWeekDayItemsTemplate() {
    return html`
      <thead>
        ${this.weekDays?.map(wday => {
          return html`
            <th
              class="kuc-base-datetime-calendar-body__header-column"
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
        .kuc-base-datetime-calendar-body__header-column {
          text-transform: uppercase;
          font-size: 10px;
          font-weight: 400;
          color: #333;
        }
        .kuc-base-datetime-calendar-body__date-column,
        .kuc-base-datetime-calendar-body__header-column {
          box-sizing: border-box;
          padding: 8px 0;
          width: 38px;
          border: 1px solid #fff;
        }
        .kuc-base-datetime-calendar-body__header-column:nth-child(1),
        .kuc-base-datetime-calendar-body__header-column:nth-child(7) {
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
