import { property } from "lit-element";
import { html } from "lit-html";
import { KucBase } from "../../../base/kuc-base";

export class CalendarPresentationBody extends KucBase {
  @property() month = 0;
  @property() year = 1970;

  render() {
    return html`
      ${this._getStyleTagTemplate()} ${this._getWeekDayTemplate()}
      ${this._getDateTemplate()}
    `;
  }

  private _getWeekDayTemplate() {
    const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

    return html`
      ${weekDays.map(wday => {
        return html`
          <span class="kuc-calendar-presentation-cell">${wday}</span>
        `;
      })}
    `;
  }

  private _getDateRange() {
    const dateObj = new Date(this.year, this.month, 0);
    const day = dateObj.getDay();
    const previousMonth: string[] = [];
    const currentMonth: string[] = [];
    const nextMonth: string[] = [];

    let _tmpDate: Date = new Date(dateObj);
    _tmpDate.setDate(_tmpDate.getDate() - day + 1);
    for (let i = 0; i < day; i++) {
      _tmpDate.setDate(_tmpDate.getDate() + 1);
      previousMonth.push(_tmpDate.toISOString().substring(0, 10));
    }

    const startDateObj = new Date(this.year, this.month, 1);
    const endDateObj = new Date(this.year, Number(this.month) + 1, 0);
    const endDate = endDateObj.getDate();
    for (let i = 0; i < endDate; i++) {
      startDateObj.setDate(startDateObj.getDate() + 1);
      currentMonth.push(startDateObj.toISOString().substring(0, 10));
    }

    const dayEnd = endDateObj.getDay();
    _tmpDate = new Date(endDateObj);
    _tmpDate.setDate(_tmpDate.getDate() - day + 1);
    for (let i = dayEnd; i < 7; i++) {
      _tmpDate.setDate(_tmpDate.getDate() + 1);
      nextMonth.push(_tmpDate.toISOString().substring(0, 10));
    }

    return {
      previousMonth,
      currentMonth,
      nextMonth
    };
  }

  private _getDateTemplate() {
    const ranges = this._getDateRange();
    return html`
      ${ranges.previousMonth.map(date => {
        return html`
          <span class="kuc-calendar-presentation-cell"
            >${date.substring(8, 10)}</span
          >
        `;
      })}
      ${ranges.currentMonth.map(date => {
        return html`
          <span class="kuc-calendar-presentation-cell"
            >${date.substring(8, 10)}</span
          >
        `;
      })}
      ${ranges.nextMonth.map(date => {
        return html`
          <span class="kuc-calendar-presentation-cell"
            >${date.substring(8, 10)}</span
          >
        `;
      })}
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-calendar-presentation-body {
          font-size: 10px;
          display: flex;
          flex-wrap: wrap;
          width: 272px;
        }
        .kuc-calendar-presentation-cell {
          display: inline-flex;
          text-transform: uppercase;
          align-items: center;
          justify-content: center;
          color: #333;
          box-sizing: border-box;
          padding: 8px 0;
          width: 38px;
          height: 33px;
          border: 1px solid #fff;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-calendar-presentation-body")) {
  window.customElements.define(
    "kuc-calendar-presentation-body",
    CalendarPresentationBody
  );
}
