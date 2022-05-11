import { html, PropertyValues, svg } from "lit";
import { property, state, query } from "lit/decorators.js";
import {
  KucBase,
  dispatchCustomEvent,
  CustomEventDetail
} from "../../../kuc-base";
import { ListBoxItem } from "../../../datetime/listbox/type";
import { getWidthElmByContext } from "../../../context";
import { getLocale } from "../../../datetime/utils";

function isValidMonth(month: number) {
  return month > 0 && month < 13;
}
function isValidYear(year: number) {
  return year >= 0 && year < 10000;
}
export class BaseMobileDateTimeCalendarHeader extends KucBase {
  @property({ type: String }) language = "en";
  @property({
    type: Number,
    hasChanged(newVal: number) {
      return isValidMonth(newVal);
    }
  })
  month = 1;
  @property({
    type: Number,
    hasChanged(newVal: number) {
      return isValidYear(newVal);
    }
  })
  year = 2021;

  @state()
  private _monthOptions!: ListBoxItem[];
  @state()
  private _yearOptions!: ListBoxItem[];
  private _locale = getLocale("en");

  @query(
    ".kuc-base-mobile-datetime-calendar-header__group__center__month__select"
  )
  private _selectMonthEl!: HTMLSelectElement;

  @query(
    ".kuc-base-mobile-datetime-calendar-header__group__center__year__select"
  )
  private _selectYearEl!: HTMLSelectElement;

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("language")) {
      this._locale = getLocale(this.language);
    }
    this._monthOptions = this._generateMonthOptions();
    this._yearOptions = this._generateYearOptions();
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-mobile-datetime-calendar-header__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header__group__button kuc-base-mobile-datetime-calendar-header__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
        >
          ${this._getLeftArrowIconSvgTemplate()}
        </button>
        <div class="kuc-base-mobile-datetime-calendar-header__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header__group__button kuc-base-mobile-datetime-calendar-header__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${this._getRightArrowIconSvgTemplate()}
        </button>
      </div>
    `;
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has("month")) {
      this._setSelectMonthWidth(this.month);
    }
    if (changedProperties.has("year")) {
      this._setYearSelectedIndex();
    }
    super.update(changedProperties);
  }

  private _setSelectMonthWidth(month: number) {
    const optionText = this._monthOptions[month - 1].label;
    if (!optionText) return;

    const spanContext = document.createElement("span");
    spanContext.innerText = optionText;
    const optionWidth = getWidthElmByContext(spanContext);
    this._selectMonthEl.selectedIndex = this.month - 1;
    this._selectMonthEl.style.width = optionWidth + 35 + "px";
  }

  private _setYearSelectedIndex() {
    if (this.year < 100) {
      this._selectYearEl.selectedIndex = this.year;
      return;
    }
    this._selectYearEl.selectedIndex = 100;
  }

  private _generateMonthOptions() {
    return this._locale.MONTH_SELECT.map((month: string, index: number) => {
      const item: ListBoxItem = {
        value: `${index + 1}`,
        label: `${month}`
      };
      return item;
    });
  }

  private _generateYearOptions() {
    return this._getYearOptions().map((year: number) => {
      const item: ListBoxItem = {
        value: `${year}`,
        label: `${year}${this._locale.YEAR_SELECT_POSTFIX}`
      };
      return item;
    });
  }

  private _getYearOptions() {
    const options = [];
    if (!Number.isInteger(this.year)) {
      this.year = new Date().getFullYear();
    }
    let i = this.year < 100 ? 0 : this.year - 100;
    const maxYear = this.year >= 9999 - 100 ? 9999 : this.year + 100;
    if (i >= maxYear) {
      i = maxYear - 100;
    }
    for (i; i <= maxYear; i++) {
      options.push(i);
    }
    return options;
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

  private _handleChangeMonthDropdown(event: CustomEvent) {
    event.stopPropagation();
    event.preventDefault();
    const target = event.target as HTMLSelectElement;
    this.month = parseInt(target.value, 10);
    this._dispatchCalendarHeaderChangeEvent();
  }

  private _handleChangeYearDropdown(event: CustomEvent) {
    event.stopPropagation();
    event.preventDefault();
    const target = event.target as HTMLSelectElement;
    this.year = parseInt(target.value, 10);
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
    dispatchCustomEvent(this, "kuc:mobile-calendar-header-change", detail);
  }

  private _getOptionsMonthTemplate() {
    return this._monthOptions.map(
      month =>
        html`
          <option
            ?selected="${parseInt(month.value!, 10) === this.month}"
            value="${month.value!}"
            >${month.label}</option
          >
        `
    );
  }

  private _getOptionsYearTemplate() {
    return this._yearOptions.map(
      year =>
        html`
          <option
            ?selected="${parseInt(year.value!, 10) === this.year}"
            value="${year.value!}"
            >${year.label}</option
          >
        `
    );
  }

  private _getMonthTemplate() {
    return html`
      <div
        class="kuc-base-mobile-datetime-calendar-header__group__center__month"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header__group__center__month__select"
          @change="${this._handleChangeMonthDropdown}"
        >
          ${this._getOptionsMonthTemplate()}
        </select>
      </div>
    `;
  }

  private _getYearTemplate() {
    return html`
      <div
        class="kuc-base-mobile-datetime-calendar-header__group__center__year"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header__group__center__year__select"
          @change="${this._handleChangeYearDropdown}"
        >
          ${this._getOptionsYearTemplate()}
        </select>
      </div>
    `;
  }

  private _getLeftArrowIconSvgTemplate() {
    return svg`
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.70788 11.9567C9.0984 12.3472 9.0984 12.9804 8.70788 13.3709C8.31735 13.7614 7.68419 13.7614 7.29366 13.3709L2.34392 8.42118L0.929703 7.00696L2.34392 5.59275L7.29366 0.643003C7.68419 0.25248 8.31735 0.25248 8.70788 0.643003C9.0984 1.03353 9.0984 1.66669 8.70788 2.05722L4.68709 6.07801L14.0718 6.07801C14.6241 6.07801 15.0718 6.52572 15.0718 7.07801C15.0718 7.63029 14.6241 8.07801 14.0718 8.07801L4.82917 8.07801L8.70788 11.9567Z"
        fill="#206694"
      />
    </svg>`;
  }

  private _getRightArrowIconSvgTemplate() {
    return svg`
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.29396 2.0572C6.90344 1.66668 6.90344 1.03351 7.29396 0.642991C7.68449 0.252466 8.31765 0.252467 8.70817 0.642991L13.6579 5.59274L15.0721 7.00695L13.6579 8.42117L8.70817 13.3709C8.31765 13.7614 7.68448 13.7614 7.29396 13.3709C6.90344 12.9804 6.90344 12.3472 7.29396 11.9567L11.3148 7.93591L1.93 7.93591C1.37772 7.93591 0.93 7.48819 0.93 6.93591C0.93 6.38362 1.37772 5.93591 1.93 5.93591L11.1727 5.93591L7.29396 2.0572Z"
        fill="#206694"
      />
    </svg>`;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-base-mobile-datetime-calendar-header,
        kuc-base-mobile-datetime-calendar-header * {
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-base-mobile-datetime-calendar-header,
        :lang(zh) kuc-base-mobile-datetime-calendar-header * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        .kuc-base-mobile-datetime-calendar-header__group {
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
          border-bottom: 1px solid #e3e7e8;
          padding: 0;
          white-space: nowrap;
        }
        .kuc-base-mobile-datetime-calendar-header__group__button {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: inherit;
          border: 0;
          margin: 0;
          padding: 0;
          min-width: 40px;
          width: 40px;
          height: 40px;
          overflow: hidden;
          text-indent: 100%;
          white-space: nowrap;
          word-wrap: normal;
          cursor: pointer;
          -webkit-appearance: button;
        }
        .kuc-base-mobile-datetime-calendar-header__group__button-icon {
          vertical-align: middle;
        }
        .kuc-base-mobile-datetime-calendar-header__group__button:focus {
          outline: none;
        }
        .kuc-base-mobile-datetime-calendar-header__group__center {
          text-align: center;
          display: flex;
          flex: 1;
          justify-content: center;
          min-width: 186px;
        }
        .kuc-base-mobile-datetime-calendar-header__group__center
          > :first-child {
          padding-left: 13px;
        }
        .kuc-base-mobile-datetime-calendar-header__group__center__month,
        .kuc-base-mobile-datetime-calendar-header__group__center__year {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .kuc-base-mobile-datetime-calendar-header__group__center__month__select,
        .kuc-base-mobile-datetime-calendar-header__group__center__year__select {
          font-size: 14px;
          font-weight: 700;
          padding: 0 22.4px 0 0;
          line-height: 40px;
          border: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background: url("data:image/svg+xml,%3Csvg%0A%20%20%20%20width%3D%2211%22%0A%20%20%20%20height%3D%226%22%0A%20%20%20%20viewBox%3D%220%200%2011%206%22%0A%20%20%20%20fill%3D%22none%22%0A%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A%20%20%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20fill-rule%3D%22evenodd%22%0A%20%20%20%20%20%20clip-rule%3D%22evenodd%22%0A%20%20%20%20%20%20d%3D%22M5.5061%206L0%200L11%200L5.5061%206Z%22%0A%20%20%20%20%20%20fill%3D%22%234b4b4b%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fsvg%3E")
            no-repeat center right 0.6em #ffffff;
        }
        .kuc-base-mobile-datetime-calendar-header__group__center__month__select:focus,
        .kuc-base-mobile-datetime-calendar-header__group__center__year__select:focus {
          outline: none;
        }
        .kuc-base-mobile-datetime-calendar-header__month {
          margin: 0 4px 0 4px;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-mobile-datetime-calendar-header")) {
  window.customElements.define(
    "kuc-base-mobile-datetime-calendar-header",
    BaseMobileDateTimeCalendarHeader
  );
}
