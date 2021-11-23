import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { KucBase, dispatchCustomEvent } from "../../../kuc-base";
import { getLocale } from "../../utils";

export class BaseDateTimeCalendarFooter extends KucBase {
  @property({ type: String }) language = "en";

  @state()
  private _locale = getLocale("en");

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("language")) {
      this._locale = getLocale(this.language);
    }
    super.update(changedProperties);
  }

  private _handleClickCalendarFooterButtonNone(event: MouseEvent) {
    event.stopPropagation();
    dispatchCustomEvent(this, "kuc:calendar-footer-click-none");
  }

  private _handleClickCalendarFooterButtonToday(event: MouseEvent) {
    event.stopPropagation();
    dispatchCustomEvent(this, "kuc:calendar-footer-click-today");
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-datetime-calendar-footer__group">
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer__group__button kuc-base-datetime-calendar-footer__group__button--today"
          @click=${this._handleClickCalendarFooterButtonToday}
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <span class="kuc-base-datetime-calendar-footer__group__center"></span>
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer__group__button kuc-base-datetime-calendar-footer__group__button--none"
          @click=${this._handleClickCalendarFooterButtonNone}
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
      </div>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-base-datetime-calendar-footer,
        kuc-base-datetime-calendar-footer *,
        :lang(en) kuc-base-datetime-calendar-footer,
        :lang(en) kuc-base-datetime-calendar-footer * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-base-datetime-calendar-footer,
        :lang(ja) kuc-base-datetime-calendar-footer * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-base-datetime-calendar-footer,
        :lang(zh) kuc-base-datetime-calendar-footer * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        .kuc-base-datetime-calendar-footer__group {
          display: flex;
          align-items: flex-end;
          box-sizing: border-box;
          padding: 0;
          height: 27px;
          white-space: nowrap;
          width: 272px;
        }
        .kuc-base-datetime-calendar-footer__group__button {
          background: transparent;
          border: 1px solid transparent;
          color: #3498db;
          cursor: pointer;
          font-size: 13px;
          outline: none;
        }
        .kuc-base-datetime-calendar-footer__group__button:hover {
          color: #217dbb;
        }
        .kuc-base-datetime-calendar-footer__group__button:focus {
          border: 1px solid #3498db;
          outline: none;
        }
        .kuc-base-datetime-calendar-footer__group__center {
          width: 100%;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-datetime-calendar-footer")) {
  window.customElements.define(
    "kuc-base-datetime-calendar-footer",
    BaseDateTimeCalendarFooter
  );
}
