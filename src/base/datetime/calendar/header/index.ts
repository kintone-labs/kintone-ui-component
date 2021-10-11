import { html, property, PropertyValues } from "lit-element";
import {
  KucBase,
  dispatchCustomEvent,
  CustomEventDetail
} from "../../../kuc-base";
import {
  getLeftArrowIconSvgTemplate,
  getLocale,
  getRightArrowIconSvgTemplate
} from "../header/ultils";
import "../../calendar/header/dropdown/month";
import "../../calendar/header/dropdown/year";
import "../../listbox";
import { en } from "../../resource/locale";

export class BaseDateTimeCalendarHeader extends KucBase {
  @property({ type: String }) language = "en";
  @property({ type: Number }) month = 1;
  @property({ type: Number }) year = 2021;

  private _locale = en;

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("language")) {
      this._locale = getLocale(this.language);
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-datetime-calendar-header__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-datetime-calendar-header__group__button kuc-base-datetime-calendar-header__group__button-previous-month"
          @click=${this._handleClickCalendarPrevMonthBtn}
        >
          ${getLeftArrowIconSvgTemplate()}
        </button>
        <span class="kuc-base-datetime-calendar-header__group__center"
          >${this._getYearMonthTemplate()}</span
        >
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-datetime-calendar-header__group__button kuc-base-datetime-calendar-header__group__button--next-month"
          @click=${this._handleClickCalendarNextMonthBtn}
        >
          ${getRightArrowIconSvgTemplate()}
        </button>
      </div>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-base-datetime-calendar-header,
        kuc-base-datetime-calendar-header *,
        :lang(en) kuc-base-datetime-calendar-header,
        :lang(en) kuc-base-datetime-calendar-header * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-base-datetime-calendar-header,
        :lang(ja) kuc-base-datetime-calendar-header * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-base-datetime-calendar-header,
        :lang(zh) kuc-base-datetime-calendar-header * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        .kuc-base-datetime-calendar-header__group {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          border-bottom: 1px solid #e3e7e8;
          padding: 0;
          white-space: nowrap;
          width: 272px;
          height: 44px;
        }
        .kuc-base-datetime-calendar-header__group__button {
          background: transparent;
          border: none;
          cursor: pointer;
          outline: none;
          width: 38px;
          height: 32px;
          padding: 1px;
          margin: 0;
          text-align: center;
        }
        .kuc-base-datetime-calendar-header__group__button:focus {
          padding: 1px;
          border: 1px solid #e3e7e8;
          border-radius: 4px;
          outline: none;
        }
        .kuc-base-datetime-calendar-header__group__button-icon {
          vertical-align: middle;
        }
        .kuc-base-datetime-calendar-header__group__center {
          width: 196px;
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .kuc-base-datetime-calendar-header__group_center_year {
          position: relative;
          display: inline-block;
          white-space: nowrap;
        }
        .kuc-base-datetime-calendar-header__group__toggle__selected-item-label {
          display: inline-block;
          box-sizing: border-box;
        }
        .kuc-base-datetime-calendar-header__group__toggle__icon {
          flex: none;
          width: 38px;
          height: 38px;
        }
      </style>
    `;
  }

  private _getYearTemplate() {
    return html`
      <kuc-base-datetime-year-dropdown
        class="kuc-base-datetime-calendar-year-dropdown"
        .postfix="${this._locale.YEAR_SELECT_POSTFIX}"
        .year="${this.year}"
        @kuc:year-dropdown-change="${this._handleYearDropdownChange}"
      >
      </kuc-base-datetime-year-dropdown>
    `;
  }

  private _getMonthTemplate() {
    return html`
      <kuc-base-datetime-month-dropdown
        class="kuc-base-datetime-calendar-month-dropdown"
        .month="${this.month}"
        .language="${this.language}"
        @kuc:month-dropdown-change="${this._handleMonthDropdownChange}"
      >
      </kuc-base-datetime-month-dropdown>
    `;
  }

  private _getYearMonthTemplate() {
    return this.language === "zh" || this.language === "ja"
      ? html`
          ${this._getYearTemplate()}${this._getMonthTemplate()}
        `
      : html`
          ${this._getMonthTemplate()}${this._getYearTemplate()}
        `;
  }

  private _handleMonthDropdownChange(event: CustomEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.month = parseInt(event.detail.value, 10);
    this._dispatchCalendarHeaderChangeEvent();
  }

  private _handleYearDropdownChange(event: CustomEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.year = parseInt(event.detail.value, 10);
    this._dispatchCalendarHeaderChangeEvent();
  }

  private _handleClickCalendarPrevMonthBtn(event: MouseEvent) {
    event.stopPropagation();
    const monthSelected = this.month;
    if (monthSelected === 1) {
      this.month = 12;
      this.year--;
    } else {
      this.month -= 1;
    }
    this._dispatchCalendarHeaderChangeEvent();
  }

  private _handleClickCalendarNextMonthBtn(event: MouseEvent) {
    event.stopPropagation();
    const monthSelected = this.month;
    if (monthSelected === 12) {
      this.month = 1;
      this.year++;
    } else {
      this.month += 1;
    }
    this._dispatchCalendarHeaderChangeEvent();
  }

  private _dispatchCalendarHeaderChangeEvent() {
    const year = this.year;
    const month = this.month;
    const detail: CustomEventDetail = { value: `${year}-${month}` };
    dispatchCustomEvent(this, "kuc:calendar-header-change", detail);
  }
}

if (!window.customElements.get("kuc-base-datetime-calendar-header")) {
  window.customElements.define(
    "kuc-base-datetime-calendar-header",
    BaseDateTimeCalendarHeader
  );
}
