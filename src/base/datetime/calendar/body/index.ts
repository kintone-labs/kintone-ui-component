import { html, property, query, svg } from "lit-element";
import { KucBase } from "../../../kuc-base";

export class BaseDateTimeCalendarBody extends KucBase {
  @property() month = 0;
  @property() year = 1970;

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div>CALENDAR BODY</div>
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
