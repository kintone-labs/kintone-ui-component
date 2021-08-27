import { query } from "lit-element";
import { html } from "lit-html";
import { CustomEventDetail, dispatchCustomEvent, KucBase } from "../../../base/kuc-base";

export class CalendarPresentationHeader extends KucBase {
  @query(".kuc-calendar-presentation-header__month")
  private _monthSelectEl: HTMLSelectElement | undefined;

  @query(".kuc-calendar-presentation-header__year")
  private _yearSelectEl: HTMLSelectElement | undefined;

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <span
        ><button
          class="kuc-calendar-button kuc-calendar-button--prev"
          @click=${this._handleClickPrevButton}
        >
          <
        </button></span
      >
      <span class="kuc-calendar-presentation-header__year-month">
        <select
          class="kuc-calendar-presentation-header__month"
          @change="${this._handleChangeMonthSelect}"
        >
          ${this._getMonthSelectOptions().map((month: string) => {
            return html`
              <option value="${month}">${month}</option>
            `;
          })}
        </select>
        <select
          class="kuc-calendar-presentation-header__year"
          @change="${this._handleChangeYearSelect}"
        >
          ${this._getYearSelectOptions().map((month: string) => {
            return html`
              <option value="${month}">${month}</option>
            `;
          })}
        </select>
      </span>
      <span
        ><button
          class="kuc-calendar-button kuc-calendar-button--next"
          @click=${this._handleClickNextButton}
        >
          >
        </button></span
      >
    `;
  }

  private _handleClickPrevButton() {
    if (!this._monthSelectEl) return;
    const selectedIndex = this._monthSelectEl.selectedIndex;
    this._monthSelectEl.selectedIndex = selectedIndex - 1;
    this._dispatchChangeMonthYearEvent();
  }

  private _handleClickNextButton() {
    if (!this._monthSelectEl) return;
    const selectedIndex = this._monthSelectEl.selectedIndex;
    this._monthSelectEl.selectedIndex = selectedIndex + 1;
    this._dispatchChangeMonthYearEvent();
  }

  private _handleChangeMonthSelect(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this._dispatchChangeMonthYearEvent();
  }

  private _handleChangeYearSelect(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this._dispatchChangeMonthYearEvent();
  }

  private _dispatchChangeMonthYearEvent() {
    const year = this._yearSelectEl?.value;
    const month = this._monthSelectEl?.value;
    const detail: CustomEventDetail = { value: `${year}-${month}` };
    dispatchCustomEvent(this, "change", detail);
  }

  private _getYearSelectOptions() {
    return ["2018", "2019", "2020", "2021", "2022", "2023"];
  }

  private _getMonthSelectOptions() {
    return [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER"
    ];
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-calendar-presentation-header {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          width: 272px;
          padding: 0;
          height: 44px;
          border-bottom: 1px solid #e3e7e8;
        }
        .kuc-calendar-presentation-header__year-month {
          width: 100%;
        }
        .kuc-calendar-button {
          background-color: unset;
          border: unset;
          cursor: pointer;
        }
        .kuc-calendar-button--prev,
        .kuc-calendar-button--next {
          width: 38px;
          height: 32px;
          margin: 0;
          padding: 0;
          border-style: none;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-calendar-presentation-header")) {
  window.customElements.define(
    "kuc-calendar-presentation-header",
    CalendarPresentationHeader
  );
}
