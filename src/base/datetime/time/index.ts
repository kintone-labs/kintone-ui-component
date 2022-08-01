import { html, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import {
  KucBase,
  CustomEventDetail,
  dispatchCustomEvent,
  createStyleOnHeader,
} from "../../kuc-base";
import {
  MAX_MINUTES,
  MAX_HOURS12,
  MAX_HOURS24,
  TIME_SUFFIX,
} from "../resource/constant";
import {
  padStart,
  generateTimeOptions,
  formatTimeValueToInputValue,
  formatInputValueToTimeValue,
  getLocale,
  timeCompare,
} from "../utils";

import { BaseDateTimeListBox, BaseDateTimeListBoxItem } from "../listbox";
import { BASE_TIME_CSS } from "./style";
export { BaseDateTimeListBox };

type Time = {
  hours: string;
  minutes: string;
  suffix?: string;
};

export class BaseTime extends KucBase {
  @property({ type: String, reflect: true }) language = "en";
  @property({ type: String }) max = "";
  @property({ type: String }) min = "";
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) hour12 = false;
  @property({ type: Number }) timeStep = 30;

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

  private _valueForReset = "";

  @state()
  private _inputFocusEl!: HTMLInputElement | null;

  private _listBoxItems: BaseDateTimeListBoxItem[] | undefined;

  private _locale = getLocale("en");

  @query(".kuc-base-time__group__hours")
  private _hoursEl!: HTMLInputElement;

  @query(".kuc-base-time__group__minutes")
  private _minutesEl!: HTMLInputElement;

  @query(".kuc-base-time__group__suffix")
  private _suffixEl!: HTMLInputElement;

  @query(".kuc-base-time__assistive-text")
  private _toggleEl!: HTMLButtonElement;

  @query(".kuc-base-time__group")
  private _inputGroupEl!: HTMLInputElement;

  update(changedProperties: PropertyValues) {
    if (
      changedProperties.has("hour12") ||
      changedProperties.has("timeStep") ||
      changedProperties.has("max") ||
      changedProperties.has("min")
    ) {
      this._listBoxItems = generateTimeOptions(
        this.hour12,
        this.timeStep,
        this.min,
        this.max
      );
      this._updateInputValue();
    }
    if (changedProperties.has("value")) {
      this._updateInputValue();
    }
    if (changedProperties.has("language")) {
      this._locale = getLocale(this.language);
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      <div class="kuc-base-time__group" @click="${this._handleClickInputGroup}">
        <input
          type="text"
          class="kuc-base-time__group__hours"
          role="spinbutton"
          tabindex="${this._hours ? "0" : "-1"}"
          aria-label="Hour"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          ?disabled="${this.disabled}"
          value="${this._hours}"
        />
        ${this._getColonTemplate()}
        <input
          type="text"
          class="kuc-base-time__group__minutes"
          role="spinbutton"
          tabindex="${this._minutes ? "0" : "-1"}"
          aria-label="Minute"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          ?disabled="${this.disabled}"
          value="${this._minutes}"
        />
        ${this._getSuffixTemplate()}
      </div>
      <button
        aria-haspopup="listbox"
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

  private _handleClickInputGroup(event: Event) {
    if (this.disabled) return;

    if (this.value === "") {
      this._toggleEl.focus();
      this._openListBox();
      return;
    }

    const input = event.target as HTMLInputElement;
    this._openListBox();
    if (input.tagName.toUpperCase() === "INPUT") {
      input.select();
      return;
    }
    this._hoursEl.select();
  }

  private _handleBlurListBox(event: Event) {
    event.preventDefault();
    if (this._inputFocusEl) return;

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
    if (!times.hours || !times.minutes) return "";

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
    switch (event.key) {
      case "Tab":
      case "Escape":
        if (event.key === "Escape") event.preventDefault();
        if (!this._listBoxVisible) return;

        this._closeListBox();
        break;
      case "Enter":
      case " ":
      case "ArrowUp":
      case "ArrowDown":
        event.preventDefault();
        event.stopPropagation();
        this._openListBoxByKey();
        break;
      default:
        event.preventDefault();
        event.stopPropagation();
        this._handleDefaultKeyButton(event.key);
        break;
    }
  }

  private _handleBlurButton() {
    this._inputGroupEl.classList.remove("kuc-base-time__group--focus");
  }

  private _handleFocusButton(event: Event) {
    event.stopPropagation();
    this._inputGroupEl.classList.add("kuc-base-time__group--focus");
  }

  private _openListBoxByKey() {
    if (this._listBoxVisible) return false;

    this._valueForReset = this.value;
    this._doFocusListBox = true;
    this._listBoxVisible = true;
    this._inputGroupEl.classList.remove("kuc-base-time__group--focus");
    return true;
  }

  private _handleListBoxEscape() {
    this._closeListBox();
    this.value = this._valueForReset;
    this._actionUpdateInputValue(this.value);
    if (this.value === "") {
      this._toggleEl.focus();
      return;
    }
    this._hoursEl.select();
  }

  private _handleDefaultKeyButton(keyCode: string) {
    const isNumber = /^[0-9]$/i.test(keyCode);
    if (!isNumber || this.value !== "") return;

    const newValue = this._computeNumberKeyValueHours(keyCode);
    this._actionUpdateInputValue(newValue);
    this._hoursEl.select();
  }

  private _handleChangeListBox(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this._closeListBox();
    this._inputFocusEl = this._hoursEl;
    this._hoursEl.select();
    if (!event.detail.value) return;

    const listboxVal = event.detail.value;
    this._actionUpdateInputValue(listboxVal);
  }

  private _handleListBoxFocusChange(event: CustomEvent) {
    const listBoxValue = event.detail.value;
    const times = formatInputValueToTimeValue(listBoxValue);
    this._actionUpdateInputValue(times);
  }

  private _handleFocusInput(event: Event) {
    this._inputFocusEl = event.target as HTMLInputElement;
    this._inputFocusEl.select();
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

  private _handleTabKey(event: KeyboardEvent) {
    if (event.key === "Tab") return true;
    return false;
  }

  private _handleKeyDownInput(event: KeyboardEvent) {
    this._closeListBox();
    if (this._handleTabKey(event)) return;

    this._handleSupportedKey(event);
  }

  private _handlePasteInput(event: ClipboardEvent) {
    event.preventDefault();
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
      case "Backspace":
      case "Delete":
        newValue = this._computeDeleteValue();
        this._actionUpdateInputValue(newValue);
        break;
      default:
        newValue = this._computeDefaultKeyValue(keyCode);
        this._actionUpdateInputValue(newValue);
        break;
    }
  }

  private _actionUpdateInputValue(newValue: string) {
    const oldValue =
      this.value === "" ? this.value : this._formatKeyDownValue();
    const oldValueProp = formatInputValueToTimeValue(oldValue);
    const newValueProp = formatInputValueToTimeValue(newValue);
    if (oldValueProp === newValueProp) return;
    this.value = newValueProp;
    this._dispatchEventTimeChange(newValueProp, oldValueProp);
  }

  private _computeDeleteValue() {
    if (this._inputFocusEl === this._minutesEl)
      return this._formatKeyDownValue({ minutes: "00" });

    if (this._inputFocusEl === this._hoursEl)
      return this._formatKeyDownValue({ hours: "00" });

    return this._formatKeyDownValue();
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
    const supportedKey = ["a", "A", "p", "P"];
    if (supportedKey.indexOf(key) === -1) return this._formatKeyDownValue();

    const newSuffix =
      key === "a" || key === "A" ? TIME_SUFFIX.AM : TIME_SUFFIX.PM;
    if (this.value === "") {
      this._hoursEl.select();
    }
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
    if (isNumber) return this._computeNumberKeyValue(key);

    if (this._inputFocusEl === this._suffixEl)
      return this._computeKeyDownSuffixValue(key);

    return this._formatKeyDownValue();
  }

  private _computeNumberKeyValue(key: string) {
    if (this._inputFocusEl === this._minutesEl)
      return this._computeNumberKeyValueMinutes(key);

    if (this._inputFocusEl === this._hoursEl)
      return this._computeNumberKeyValueHours(key);

    return this._formatKeyDownValue();
  }

  private _computeNumberKeyValueMinutes(keyCode: string) {
    const previousMinutes = this._getPreviousMinutes(this._minutes);
    const newMinutes = padStart(previousMinutes + keyCode);
    if (this.value === "") {
      this._hoursEl.select();
      return this._computeNumberKeyValueHours(keyCode);
    }

    return this._formatKeyDownValue({ minutes: newMinutes });
  }

  private _computeNumberKeyValueHours(keyCode: string) {
    const previousHours = this._getPreviousHours(this._hours, keyCode);
    const newHours = padStart(previousHours + keyCode);
    if (this.value === "")
      return this._formatKeyDownValue({ hours: newHours, minutes: "00" });

    return this._formatKeyDownValue({ hours: newHours });
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
      oldValue: oldValue,
    };

    if (timeCompare(value, this.min) < 0 || timeCompare(this.max, value) < 0) {
      detail.error = this._locale.TIME_IS_OUT_OF_VALID_RANGE;
    }

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

  private _getColonTemplate() {
    return this._hours
      ? html` <span class="kuc-base-time__group__colon">:</span> `
      : "";
  }

  private _getSuffixTemplate() {
    return this.hour12
      ? html`
          <input
            class="kuc-base-time__group__suffix"
            role="spinbutton"
            tabindex="${this._suffix ? "0" : "-1"}"
            aria-label="${this._suffix || "suffix"}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
            @keydown="${this._handleKeyDownInput}"
            @paste="${this._handlePasteInput}"
            ?disabled="${this.disabled}"
            value="${this._suffix}"
          />
        `
      : "";
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
            @kuc:listbox-focus-change="${this._handleListBoxFocusChange}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
          ></kuc-base-datetime-listbox>
        `
      : "";
  }
}

if (!window.customElements.get("kuc-base-time")) {
  createStyleOnHeader(BASE_TIME_CSS);
  window.customElements.define("kuc-base-time", BaseTime);
}
