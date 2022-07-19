import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import {
  KucBase,
  dispatchCustomEvent,
  createStyleOnHeader,
} from "../../../kuc-base";
import { getLocale } from "../../../datetime/utils";
import { BASE_MOBILE_CALENDAR_FOOTER_CSS } from "./style";

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

  private _handleClickCalendarFooterButtonClose(event: MouseEvent) {
    event.stopPropagation();
    dispatchCustomEvent(this, "kuc:mobile-calendar-footer-click-close");
  }

  private _handleClickCalendarFooterButtonNone(event: MouseEvent) {
    event.stopPropagation();
    dispatchCustomEvent(this, "kuc:mobile-calendar-footer-click-none");
  }

  private _handleClickCalendarFooterButtonToday(event: MouseEvent) {
    event.stopPropagation();
    dispatchCustomEvent(this, "kuc:mobile-calendar-footer-click-today");
  }

  render() {
    return html`
      <div class="kuc-base-mobile-datetime-calendar-footer__group">
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer__group__button kuc-base-mobile-datetime-calendar-footer__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer__group__button kuc-base-mobile-datetime-calendar-footer__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer__group__button kuc-base-mobile-datetime-calendar-footer__group__button--close"
          @click="${this._handleClickCalendarFooterButtonClose}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.close}
        </button>
      </div>
    `;
  }
}

if (!window.customElements.get("kuc-base-mobile-datetime-calendar-footer")) {
  createStyleOnHeader(BASE_MOBILE_CALENDAR_FOOTER_CSS);
  window.customElements.define(
    "kuc-base-mobile-datetime-calendar-footer",
    BaseMobileDateTimeCalendarFooter
  );
}
