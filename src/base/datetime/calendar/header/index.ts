import { html, property, svg, query, PropertyValues } from "lit-element";
import {
  KucBase,
  dispatchCustomEvent,
  CustomEventDetail
} from "../../../kuc-base";
import { en, zh, ja } from "../../resource/locale";

export class BaseDateTimeCalendarHeader extends KucBase {
  @property({ type: String }) language = "en";
  @property({ type: Number }) month = 1;
  @property({ type: Number }) year = 2021;

  @query(".kuc-base-datetime-calendar-header__group__year")
  private _yearSelectEl: HTMLSelectElement | undefined;

  @query(".kuc-base-datetime-calendar-header__group__month")
  private _monthSelectEl: HTMLSelectElement | undefined;

  private _locale = en;

  update(changedProperties: PropertyValues) {
    changedProperties.forEach((_oldValue, propName) => {
      propName === "language" &&
        (this._locale = this._getLocale(this.language));
    });
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
          ${this._getLeftArrowIconSvgTemplate()}
        </button>
        <span class="kuc-base-datetime-calendar-header__group__center"
          >${this._getYearMonthTemplate()}</span
        >
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-datetime-calendar-header__group__button kuc-base-datetime-calendar-header__group__button-next-month"
          @click=${this._handleClickCalendarNextMonthBtn}
        >
          ${this._getRightArrowIconSvgTemplate()}
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
        }
      </style>
    `;
  }

  private _getLeftArrowIconSvgTemplate() {
    return svg`
      <svg
        class="kuc-base-datetime-calendar-header__group__button-icon"
        width="9"
        height="14"
        viewBox="0 0 9 14" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill-rule="evenodd" 
          clip-rule="evenodd" 
          d="M3.06077 7L8.53044 1.53033L7.46978 0.469666L0.939453 7L7.46978 13.5303L8.53044 12.4697L3.06077 7Z" 
          fill="#888888"
        />
      </svg>`;
  }

  private _getRightArrowIconSvgTemplate() {
    return svg`
      <svg
        class="kuc-base-datetime-calendar-header__group__button-icon"
        width="9" 
        height="14" 
        viewBox="0 0 9 14" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill-rule="evenodd" 
          clip-rule="evenodd" 
          d="M5.93923 7L0.469557 1.53033L1.53022 0.469666L8.06055 7L1.53022 13.5303L0.469557 12.4697L5.93923 7Z"
          fill="#888888"
        />
      </svg>`;
  }

  private _getYearTemplate() {
    const yearSelectPostfix = this._locale.YEAR_SELECT_POSTFIX;
    return html`
      <select
        class="kuc-base-datetime-calendar-header__group__year"
        @change="${this._handleChangeCalendarHeaderYearSelect}"
      >
        ${this._getYearSelectOptions().map((year: number) => {
          return html`
            <option ?selected="${this.year === year}" value="${year}"
              >${year}${yearSelectPostfix}</option
            >
          `;
        })}
      </select>
    `;
  }

  private _getMonthTemplate() {
    return html`
      <select
        class="kuc-base-datetime-calendar-header__group__month"
        @change="${this._handleChangeCalendarHeaderMonthSelect}"
      >
        ${this._locale.MONTHS_SELECT.map((month: string, index: number) => {
          return html`
            <option ?selected="${this.month === index + 1}" value="${index + 1}"
              >${month}</option
            >
          `;
        })}
      </select>
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

  private _handleClickCalendarPrevMonthBtn(event: MouseEvent) {
    event.stopPropagation();
    if (!this._monthSelectEl || !this._yearSelectEl) return;
    const monthSelectedIndex = this._monthSelectEl.selectedIndex;
    const yearSelectedIndex = this._yearSelectEl.selectedIndex;
    if (monthSelectedIndex === 0) {
      this._monthSelectEl.selectedIndex = 11;
      this._yearSelectEl.selectedIndex = yearSelectedIndex - 1;
    } else {
      this._monthSelectEl.selectedIndex = monthSelectedIndex - 1;
    }
    this._handleChangeCalendarHeader();
  }

  private _handleClickCalendarNextMonthBtn(event: MouseEvent) {
    event.stopPropagation();
    if (!this._monthSelectEl || !this._yearSelectEl) return;
    const monthSelectedIndex = this._monthSelectEl.selectedIndex;
    const yearSelectedIndex = this._yearSelectEl.selectedIndex;
    if (monthSelectedIndex === 11) {
      this._monthSelectEl.selectedIndex = 0;
      this._yearSelectEl.selectedIndex = yearSelectedIndex + 1;
    } else {
      this._monthSelectEl.selectedIndex = monthSelectedIndex + 1;
    }
    this._handleChangeCalendarHeader();
  }

  private _handleChangeCalendarHeaderYearSelect(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this._handleChangeCalendarHeader();
  }

  private _handleChangeCalendarHeaderMonthSelect(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this._handleChangeCalendarHeader();
  }

  private _handleChangeCalendarHeader() {
    const year = this._yearSelectEl?.value;
    const month = this._monthSelectEl?.value;
    const detail: CustomEventDetail = { value: `${year}-${month}` };
    dispatchCustomEvent(this, "kuc:calendar-header-change", detail);
  }

  private _getYearSelectOptions() {
    const yearSelectOptions = [];
    if (!Number.isInteger(this.year)) {
      this.year = 2021;
    }
    for (let i = this.year - 100; i <= this.year + 100; i++) {
      yearSelectOptions.push(i);
    }
    return yearSelectOptions;
  }

  private _getLocale(language: string) {
    switch (language) {
      case "en":
        return en;
      case "zh":
        return zh;
      case "ja":
        return ja;
      default:
        return en;
    }
  }
}

if (!window.customElements.get("kuc-base-datetime-calendar-header")) {
  window.customElements.define(
    "kuc-base-datetime-calendar-header",
    BaseDateTimeCalendarHeader
  );
}
