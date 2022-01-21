import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { KucBase, dispatchCustomEvent } from "../../../kuc-base";
import { getLocale } from "../../utils";

export class BaseMobileDateTimeCalendarFooter extends KucBase {
  @property({ type: String }) language = "en";

  @state()
  private _locale = getLocale("en");

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("language")) {
      this._locale = getLocale(this.language);
    }
    super.update(changedProperties);
  }

  private _handleClickMobileCalendarFooterButtonClose(event: MouseEvent) {
    event.stopPropagation();
    dispatchCustomEvent(this, "kuc:mobile-calendar-footer-click-close");
  }

  private _handleClickMobileCalendarFooterButtonNone(event: MouseEvent) {
    event.stopPropagation();
    dispatchCustomEvent(this, "kuc:mobile-calendar-footer-click-none");
  }

  private _handleClickMobileCalendarFooterButtonToday(event: MouseEvent) {
    event.stopPropagation();
    dispatchCustomEvent(this, "kuc:mobile-calendar-footer-click-today");
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-mobile-datetime-calendar-footer__group">
        <button
          type="button"
          tabindex="0"
          class="kuc-base-mobile-datetime-calendar-footer__group__button kuc-base-mobile-datetime-calendar-footer__group__button--today"
          @click="${this._handleClickMobileCalendarFooterButtonToday}"
        >
          ${this._locale.MOBILE_CALENDAR_FOOTER_TEXT.today}
        </button>
        <span
          class="kuc-base-mobile-datetime-calendar-footer__group__center"
        ></span>
        <button
          type="button"
          tabindex="0"
          class="kuc-base-mobile-datetime-calendar-footer__group__button kuc-base-mobile-datetime-calendar-footer__group__button--none"
          @click="${this._handleClickMobileCalendarFooterButtonNone}"
        >
          ${this._locale.MOBILE_CALENDAR_FOOTER_TEXT.none}
        </button>
        <span
          class="kuc-base-mobile-datetime-calendar-footer__group__center"
        ></span>
        <button
          type="button"
          tabindex="0"
          class="kuc-base-mobile-datetime-calendar-footer__group__button kuc-base-mobile-datetime-calendar-footer__group__button--close"
          @click="${this._handleClickMobileCalendarFooterButtonClose}"
        >
          ${this._locale.MOBILE_CALENDAR_FOOTER_TEXT.close}
        </button>
      </div>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-base-mobile-datetime-calendar-footer,
        kuc-base-mobile-datetime-calendar-footer *,
        :lang(en) kuc-base-mobile-datetime-calendar-footer,
        :lang(en) kuc-base-mobile-datetime-calendar-footer * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-base-mobile-datetime-calendar-footer,
        :lang(ja) kuc-base-mobile-datetime-calendar-footer * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-base-mobile-datetime-calendar-footer,
        :lang(zh) kuc-base-mobile-datetime-calendar-footer * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        .kuc-base-mobile-datetime-calendar-footer__group {
          display: flex;
          align-items: flex-end;
          box-sizing: border-box;
          padding: 0;
          height: 27px;
          white-space: nowrap;
        }
        .kuc-base-mobile-datetime-calendar-footer__group__button {
          background: transparent;
          border: 1px solid transparent;
          color: #206694;
          height: 40px;
          cursor: pointer;
          font-size: 14px;
          outline: none;
          padding: 0;
          margin: 0;
          font-weight: 700;
        }
        .kuc-base-mobile-datetime-calendar-footer__group__center {
          width: 100%;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-mobile-datetime-calendar-footer")) {
  window.customElements.define(
    "kuc-base-mobile-datetime-calendar-footer",
    BaseMobileDateTimeCalendarFooter
  );
}
