import { html, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import {
  KucBase,
  CustomEventDetail,
  dispatchCustomEvent
} from "../../kuc-base";
import {
  MAX_MINUTES,
  MAX_HOURS12,
  MAX_HOURS24,
  TIME_SUFFIX
} from "../resource/constant";
import {
  padStart,
  generateTimeOptions,
  formatTimeValueToInputValue,
  formatInputValueToTimeValue
} from "../utils";

import { BaseDateTimeListBox, Item } from "../listbox";
export { BaseDateTimeListBox };

type Time = {
  hours: string;
  minutes: string;
  suffix?: string;
};

export class BaseTime extends KucBase {
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) hour12 = false;

  /**
   * Considering name again
   * and change @state to @property to public.
   */
  @state()
  private _timeStep = 30;

  @state()
  private _listBoxVisible = false;

  @state()
  private _valueLabel = "";

  @state()
  private _doFocusListBox = false;

  @state()
  private _hours = "";

  @state()
  private _minutes = "";

  @state()
  private _suffix = "";

  @state()
  private _inputFocusEl!: HTMLInputElement | null;

  private _listBoxItems: Item[] | undefined;

  @query(".kuc-base-time__group__hours")
  private _hoursEl!: HTMLInputElement;

  @query(".kuc-base-time__group__minutes")
  private _minutesEl!: HTMLInputElement;

  @query(".kuc-base-time__group__suffix")
  private _suffixEl!: HTMLInputElement;

  @query(".kuc-base-time__group")
  private _inputGroupEl!: HTMLInputElement;

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("hour12")) {
      this._listBoxItems = generateTimeOptions(this.hour12, this._timeStep);
      this._updateInputValue();
    }
    if (changedProperties.has("value")) {
      this._updateInputValue();
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-time__group">
        <input
          type="text"
          class="kuc-base-time__group__hours"
          role="spinbutton"
          aria-label="hours"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @click="${this._handleClickInput}"
          ?disabled="${this.disabled}"
          value="${this._hours}"
        />
        <span class="kuc-base-time__group__colon">:</span>
        <input
          type="text"
          class="kuc-base-time__group__minutes"
          role="spinbutton"
          aria-label="minutes"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @click="${this._handleClickInput}"
          ?disabled="${this.disabled}"
          value="${this._minutes}"
        />
        ${this.hour12
          ? html`
              <input
                class="kuc-base-time__group__suffix"
                role="spinbutton"
                aria-label="${this._suffix}"
                @focus="${this._handleFocusInput}"
                @blur="${this._handleBlurInput}"
                @click="${this._handleClickInput}"
                @keydown="${this._handleKeyDownInput}"
                ?disabled="${this.disabled}"
                value="${this._suffix}"
              />
            `
          : ""}
      </div>
      <button
        aria-haspopup="menu"
        aria-expanded="${this._listBoxVisible}"
        class="kuc-base-time__assistive-text"
        @keydown="${this._handleKeyDownButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show time picker
      </button>
      ${this._getListBoxTemplate()}
    `;
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has("disabled")) {
      this._toggleDisabledGroup();
    }
    super.update(changedProperties);
  }

  private _getListBoxTemplate() {
    return this._listBoxVisible
      ? html`
          <kuc-base-datetime-listbox
            maxHeight="165"
            aria-hidden="${!this._listBoxVisible}"
            class="kuc-base-time__group__listbox"
            .items="${this._listBoxItems || []}"
            .value="${this._valueLabel}"
            .doFocus="${this._doFocusListBox}"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleBlurListBox}"
          ></kuc-base-datetime-listbox>
        `
      : "";
  }

  private _handleBlurListBox(event: Event) {
    event.preventDefault();
    this._listBoxVisible = false;
  }

  private _toggleDisabledGroup() {
    if (this.disabled)
      return this._inputGroupEl.classList.add("kuc-base-time__group--disabled");
    return this._inputGroupEl.classList.remove(
      "kuc-base-time__group--disabled"
    );
  }

  private _updateInputValue() {
    const times = formatTimeValueToInputValue(this.value, this.hour12);
    this._hours = times.hours;
    this._minutes = times.minutes;
    this._suffix = times.suffix || "";
    this._valueLabel = this._getValueLabel(times);
    if (!this._inputGroupEl) return;
    this._setValueToInput(times);
    this._inputFocusEl?.select();
  }

  private _getValueLabel(times: Time) {
    const newLabel = `${times.hours}:${times.minutes}`;
    if (!times.suffix) return newLabel;
    return newLabel + ` ${times.suffix}`;
  }

  private _setValueToInput(times: Time) {
    this._hoursEl.value = times.hours;
    this._minutesEl.value = times.minutes;
    if (!this._suffixEl) return;
    this._suffixEl.value = times.suffix || "";
  }

  private _handleKeyDownButton(event: KeyboardEvent) {
    if (this._handleTabKey(event)) return;
    event?.preventDefault();
    this._openListBoxByKey(event.key);
  }

  private _handleBlurButton() {
    this._inputGroupEl.classList.remove("kuc-base-time__group--focus");
  }

  private _handleFocusButton() {
    this._inputGroupEl.classList.add("kuc-base-time__group--focus");
  }

  private _openListBoxByKey(keyCode: string) {
    if (
      ["Enter", " ", "ArrowUp", "ArrowDown"].indexOf(keyCode) > -1 &&
      !this._listBoxVisible
    ) {
      this._doFocusListBox = true;
      this._listBoxVisible = true;
      this._inputGroupEl.classList.remove("kuc-base-time__group--focus");
      return true;
    }
    return false;
  }

  private _handleChangeListBox(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this._closeListBox();
    this._handleBlurButton();
    this._hoursEl.focus();
    if (!event.detail.value) return;
    const listboxVal = event.detail.value;
    this._actionUpdateInputValue(listboxVal);
  }

  private _handleFocusInput(event: Event) {
    this._inputFocusEl = event.target as HTMLInputElement;
    this._inputGroupEl.classList.add("kuc-base-time__group--focus");
  }

  private _handleBlurInput(event: FocusEvent) {
    this._inputFocusEl = null;
    const newTarget = event.relatedTarget;
    if (
      newTarget &&
      newTarget instanceof HTMLInputElement &&
      [this._hoursEl, this._minutesEl, this._suffixEl].indexOf(newTarget) > -1
    )
      return;
    this._closeListBox();
    this._inputGroupEl.classList.remove("kuc-base-time__group--focus");
  }

  private _handleClickInput(event: Event) {
    event.stopPropagation();
    const input = event.target as HTMLInputElement;
    input.select();
    this._openListBox();
  }

  private _handleTabKey(event: KeyboardEvent) {
    if (event.key === "Tab") return true;
    return false;
  }

  private _handleKeyDownInput(event: KeyboardEvent) {
    this._closeListBox();
    if (this._handleTabKey(event)) return;
    this._handleSupportedKey(event);
  }

  private _handleSupportedKey(event: KeyboardEvent) {
    event.preventDefault();
    const keyCode = event.key;
    let newValue;
    switch (keyCode) {
      case "Enter":
      case "ArrowRight":
        this._actionSelectNextRange();
        break;
      case "ArrowLeft":
        this._actionSelectPreviousRange();
        break;
      case "ArrowUp":
        newValue = this._computeArrowUpDownValue(1);
        this._actionUpdateInputValue(newValue);
        break;
      case "ArrowDown":
        newValue = this._computeArrowUpDownValue(-1);
        this._actionUpdateInputValue(newValue);
        break;
      default:
        newValue = this._computeDefaultKeyValue(keyCode);
        this._actionUpdateInputValue(newValue);
        break;
    }
  }

  private _actionUpdateInputValue(newValue: string) {
    const oldValue = this._formatKeyDownValue();
    if (oldValue === newValue) return;
    const oldValueProp = formatInputValueToTimeValue(oldValue);
    const newValueProp = formatInputValueToTimeValue(newValue);

    this.value = newValueProp;
    this._dispatchEventTimeChange(newValueProp, oldValueProp);
  }

  private _computeArrowUpDownValue(changeStep: number) {
    if (this._inputFocusEl === this._hoursEl)
      return this._computeArrowUpDownHourValue(changeStep);
    if (this._inputFocusEl === this._minutesEl)
      return this._computeArrowUpDownMinuteValue(changeStep);
    return this._computeKeyDownSuffixValue();
  }

  private _computeKeyDownSuffixValue(key?: string) {
    if (!key) {
      const newSuffix =
        this._suffix === TIME_SUFFIX.AM ? TIME_SUFFIX.PM : TIME_SUFFIX.AM;
      return this._formatKeyDownValue({ suffix: newSuffix });
    }
    if (key !== "a" && key !== "p") return this._formatKeyDownValue();
    const newSuffix = key === "a" ? TIME_SUFFIX.AM : TIME_SUFFIX.PM;
    return this._formatKeyDownValue({ suffix: newSuffix });
  }

  private _computeArrowUpDownHourValue(changeStep: number) {
    const currentHour = parseInt(this._hours, 10);
    let newHours = currentHour + changeStep;
    if (this.hour12) {
      newHours %= MAX_HOURS12;
      newHours = newHours <= 0 ? MAX_HOURS12 : newHours;
    } else {
      newHours %= MAX_HOURS24;
      newHours = newHours < 0 ? MAX_HOURS24 - 1 : newHours;
    }
    return this._formatKeyDownValue({ hours: newHours.toString() });
  }

  private _computeArrowUpDownMinuteValue(changeStep: number) {
    const currentMinute = parseInt(this._minutes, 10);
    let newMinutes = currentMinute + changeStep;
    newMinutes %= MAX_MINUTES;
    newMinutes = newMinutes < 0 ? MAX_MINUTES - 1 : newMinutes;
    return this._formatKeyDownValue({ minutes: newMinutes.toString() });
  }

  private _computeDefaultKeyValue(key: string) {
    const isNumber = /^[0-9]$/i.test(key);
    if (isNumber) {
      return this._computeNumberKeyValue(key);
    }
    if (this._inputFocusEl === this._suffixEl) {
      return this._computeKeyDownSuffixValue(key);
    }
    return this._formatKeyDownValue();
  }

  private _computeNumberKeyValue(key: string) {
    if (this._inputFocusEl === this._minutesEl) {
      const previousMinutes = this._getPreviousMinutes(this._minutes);
      const newMinutes = padStart(previousMinutes + key);
      return this._formatKeyDownValue({ minutes: newMinutes });
    }
    if (this._inputFocusEl === this._hoursEl) {
      const previousHours = this._getPreviousHours(this._hours, key);
      const newHours = padStart(parseInt(previousHours, 10) + key);
      return this._formatKeyDownValue({ hours: newHours });
    }
    return this._formatKeyDownValue();
  }

  private _getPreviousMinutes(minutes: string) {
    let previousMinutes: string;
    previousMinutes =
      parseInt(minutes, 10) > 10 ? ("" + minutes)[1] : "" + minutes;
    previousMinutes = parseInt(previousMinutes, 10) > 5 ? "0" : previousMinutes;
    return previousMinutes;
  }

  private _getPreviousHours(hours: string, key: string) {
    let previousHours: string;
    previousHours = parseInt(hours, 10) > 10 ? ("" + hours)[1] : "" + hours;
    const newHours = parseInt(previousHours + key, 10);
    const isMaxHours =
      (this.hour12 && newHours > MAX_HOURS12) ||
      (!this.hour12 && newHours >= MAX_HOURS24);
    previousHours = isMaxHours ? "0" : previousHours;
    return previousHours;
  }

  private _actionSelectNextRange() {
    if (this._inputFocusEl === this._hoursEl) {
      this._minutesEl.select();
      return;
    }
    if (this.hour12 && this._inputFocusEl === this._minutesEl) {
      this._suffixEl.select();
    }
  }

  private _actionSelectPreviousRange() {
    if (this._inputFocusEl === this._suffixEl) {
      this._minutesEl.select();
      return;
    }
    if (this._inputFocusEl === this._minutesEl) {
      this._hoursEl.select();
    }
  }

  private _dispatchEventTimeChange(value: string, oldValue: string) {
    const detail: CustomEventDetail = {
      value: value,
      oldValue: oldValue
    };
    dispatchCustomEvent(this, "kuc:base-time-change", detail);
  }

  private _formatKeyDownValue(
    props: {
      hours?: string;
      minutes?: string;
      suffix?: string;
    } = { hours: this._hours, minutes: this._minutes, suffix: this._suffix }
  ) {
    const hours = props.hours || this._hours;
    const minutes = props.minutes || this._minutes;
    const suffix = props.suffix || this._suffix;
    const timeStr = `${padStart(hours)}:${padStart(minutes)}`;
    if (!suffix) return timeStr;
    return `${timeStr} ${suffix}`;
  }

  private _openListBox() {
    if (this._listBoxVisible) return;
    this._doFocusListBox = false;
    this._listBoxVisible = true;
  }

  private _closeListBox() {
    this._doFocusListBox = false;
    this._listBoxVisible = false;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        .kuc-base-time__group {
          display: inline-flex;
          position: relative;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          max-width: 85px;
          width: 85px;
          height: 40px;
          color: #333333;
          border: solid 1px #e3e7e8;
          box-sizing: border-box;
          padding: 0px 8px;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
          background-color: #ffffff;
        }
        .kuc-base-time__group__hours {
          border: 0px;
          padding: 0px;
          width: 16px;
          font-size: 14px;
          outline: none;
          background-color: transparent;
          color: #333333;
          caret-color: transparent;
          user-select: none;
        }
        .kuc-base-time__group__minutes {
          border: 0px;
          padding: 0px;
          width: 16px;
          font-size: 14px;
          outline: none;
          background-color: transparent;
          color: #333333;
          caret-color: transparent;
          user-select: none;
        }
        .kuc-base-time__group__colon {
          width: 4px;
          text-align: center;
        }
        .kuc-base-time__group__suffix {
          border: 0px;
          width: 24px;
          text-align: right;
          font-size: 14px;
          outline: none;
          appearance: none;
          margin-left: 1px;
          padding: 0px;
          background-color: transparent;
          color: #333333;
          caret-color: transparent;
          user-select: none;
        }
        .kuc-base-time__group--focus {
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
          border: 1px solid #3498db;
          background-color: #ffffff;
          color: #333333;
        }
        .kuc-base-time__assistive-text {
          clip: rect(1px, 1px, 1px, 1px);
          overflow: hidden;
          position: absolute !important;
          padding: 0px !important;
          border: 0px !important;
          height: 1px !important;
          width: 1px !important;
        }
        .kuc-base-time__group--disabled {
          background-color: #d4d7d7;
          box-shadow: none;
          color: #888888;
          cursor: not-allowed;
        }
        .kuc-base-time__group--disabled input {
          cursor: not-allowed;
          color: #888888;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-time")) {
  window.customElements.define("kuc-base-time", BaseTime);
}
