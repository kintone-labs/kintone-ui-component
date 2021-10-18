import { html, PropertyValues } from "lit";
import { state, property, query } from "lit/decorators.js";
import {
  KucBase,
  dispatchCustomEvent,
  CustomEventDetail,
  generateGUID
} from "../../kuc-base";
import { getLocale, padStart } from "../utils";
import "./header";
import "./body";
import "./footer";

export class BaseDateTimeCalendar extends KucBase {
  @property({ type: String }) language = "en";
  @property({ type: String, reflect: true }) value = "";

  @state()
  private _month = 0;
  private _year = 2021;
  private _locale = getLocale("en");

  @query(".kuc-base-datetime-calendar__group")
  private _groupEl!: HTMLElement;
  update(changedProperties: PropertyValues) {
    if (changedProperties.has("language")) {
      this._locale = getLocale(this.language);
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-datetime-calendar__group">
        <kuc-base-datetime-calendar-header
          @kuc:calendar-header-change="${this._handleKucCalendarHeaderChange}"
        ></kuc-base-datetime-calendar-header>
        <kuc-base-datetime-calendar-body
          month="${this._month}"
          year="${this._year}"
        ></kuc-base-datetime-calendar-body>
        <kuc-base-datetime-calendar-footer
          class="kuc-base-datetime-calendar-footer"
          @kuc:calendar-footer-click-today="${this
            ._handleClickCalendarFooterButtonToday}"
          @kuc:calendar-footer-click-none="${this
            ._handleClickCalendarFooterButtonNone}"
        ></kuc-base-datetime-calendar-footer>
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
        .kuc-base-datetime-calendar__group {
          display: inline-block;
          box-sizing: border-box;
          width: 336px;
          padding: 32px 32px 24px;
          background: #ffffff;
          box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);
          text-align: center;
          font-size: 13px;
        }
        .kuc-base-datetime-calendar__group[hidden] {
          display: none;
        }
      </style>
    `;
  }

  private _handleKucCalendarHeaderChange(event: CustomEvent) {
    const values = event.detail.value.split("-");
    this._year = values[0];
    this._month = values[1] - 1;
  }

  private _handleClickCalendarFooterButtonNone(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.value = "";
    this._dispatchClickEvent(this.value);
    this._groupEl.setAttribute("hidden", "true");
  }

  private _handleClickCalendarFooterButtonToday(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.value = this._getDateString();
    this._groupEl.setAttribute("hidden", "true");
  }

  private _dispatchClickEvent(value: string) {
    if (this.value === value) return;
    const detail: CustomEventDetail = { oldValue: this.value, value: value };
    dispatchCustomEvent(this, "calendar-footer-click-none", detail);
    this.value = value;
  }

  private _getDateString(date = new Date()) {
    const year = date.getFullYear();
    const month = padStart(date.getMonth() + 1);
    const day = padStart(date.getDate());
    return `${year}-${month}-${day}`;
  }
}

if (!window.customElements.get("kuc-base-datetime-calendar")) {
  window.customElements.define(
    "kuc-base-datetime-calendar",
    BaseDateTimeCalendar
  );
}
