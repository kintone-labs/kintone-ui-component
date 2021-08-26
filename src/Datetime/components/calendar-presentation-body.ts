import { html } from "lit-html";
import { KucBase } from "../../base/kuc-base";

export class CalendarPresentationBody extends KucBase {
  render() {
    return html`
      ${this._getStyleTagTemplate()} ${this._getWeekDayTemplate()}
      ${this._getDateTemplate()}
    `;
  }

  private _getWeekDayTemplate() {
    const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return html`
      ${weekDays.map(wday => {
        return html`
          <span class="kuc-calendar-presentation-cell">${wday}</span>
        `;
      })}
    `;
  }

  private _getDateTemplate() {
    const dates = [];
    for (let i = 0; i < 42; i++) {
      dates.push(i);
    }

    return html`
      ${dates.map(date => {
        return html`
          <span class="kuc-calendar-presentation-cell">${date}</span>
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
