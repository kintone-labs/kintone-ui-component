import { html, property, svg, query, PropertyValues, state } from "lit-element";
import {
  KucBase,
  dispatchCustomEvent,
  CustomEventDetail,
  generateGUID
} from "../../kuc-base";
// import { BaseDateTimeCalendarHeader } from "./header";
// import { BaseDateTimeCalendarBody } from "./body";
import { BaseDateTimeCalendarFooter } from "./footer";
// import { en, zh, ja } from "../resource/locale";

export class BaseDateTimeCalendar extends KucBase {
  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-datetime-calendar__group">
        <kuc-base-datetime-calendar-header></kuc-base-datetime-calendar-header>
        <kuc-base-datetime-calendar-body></kuc-base-datetime-calendar-body>
        <kuc-base-datetime-calendar-footer></kuc-base-datetime-calendar-footer>
      </div>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-base-datetime-calendar,
        kuc-base-datetime-calendar *,
        :lang(en) kuc-base-datetime-calendar,
        :lang(en) kuc-base-datetime-calendar * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-base-datetime-calendar,
        :lang(ja) kuc-base-datetime-calendar * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-base-datetime-calendar,
        :lang(zh) kuc-base-datetime-calendar * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-datetime-calendar")) {
  window.customElements.define(
    "kuc-base-datetime-calendar",
    BaseDateTimeCalendar
  );
}
