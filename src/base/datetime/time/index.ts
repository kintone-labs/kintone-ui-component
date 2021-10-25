import { html, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import {
  KucBase,
  CustomEventDetail,
  dispatchCustomEvent
} from "../../kuc-base";
import { Item } from "../listbox";
import {
  padStart,
  generateTimeOptions,
  formatTimeValue,
  convertTimeValueToHour12,
  convertTimeValueToHour24,
  MAX_MINUTES,
  MAX_HOURS12,
  MAX_HOURS24,
  getLocale
} from "../utils";

type TimeItem = { type: string; value: string };

export class BaseDateTime extends KucBase {
  @property({ type: String }) inputId = "";
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) inputAriaInvalid = false;
  @property({ type: Boolean }) hour12 = false;

  @state()
  private _listBoxVisible = false;
  @state()
  private _timeStep = 30;
  @state()
  private _inputValue = "12:00";

  private _listBoxItems: Item[] | undefined;
  private _selectionRange = {
    hours: { start: 0, end: 2 },
    minutes: { start: 3, end: 5 },
    suffix: { start: 6, end: 8 }
  };
  private _timeLength = 2;
  private _locale = getLocale("en");

  @query(".kuc-base-time__input")
  private _inputEl!: HTMLInputElement;

  private _GUID: string | undefined;

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("hour12")) {
      this._listBoxItems = generateTimeOptions(this.hour12, this._timeStep);
      this._handleUpdateValueProperty(this._inputValue);
    }
    if (changedProperties.has("value")) {
      this._handleUpdateValueProperty(this.value);
    }
    if (changedProperties.has("inputId")) {
      this._GUID = this.inputId;
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <input
        type="text"
        class="kuc-base-time__input"
        id="${this._GUID}-label"
        aria-describedby="${this._GUID}-error"
        aria-invalid="${this.inputAriaInvalid}"
        .value="${this._inputValue}"
        ?disabled="${this.disabled}"
        @click="${this._handleClickInput}"
        @blur="${this._handleBlurInput}"
        @keydown="${this._handleKeyDownInput}"
        @focus="${this._handleFocusInput}"
      />
      <kuc-base-datetime-listbox
        maxHeight="165"
        aria-hidden="${!this._listBoxVisible}"
        class="kuc-base-time__listbox"
        ?hidden="${!this._listBoxVisible}"
        .items="${this._listBoxItems || []}"
        @kuc:calendar-listbox-click="${this._handleChangeListBox}"
      >
      </kuc-base-datetime-listbox>
    `;
  }

  private _handleUpdateValueProperty(value: string) {
    const { hours, minutes, suffix } = this._separateInputValue(value);
    const dateTime = formatTimeValue(hours, minutes);
    const isValidTime = dateTime instanceof Date && !isNaN(dateTime.getTime());
    if (!isValidTime) {
      this._inputValue = "";
      return;
    }
    this._inputValue = this.hour12
      ? convertTimeValueToHour12(dateTime)
      : convertTimeValueToHour24(dateTime, suffix);
  }

  private _handleFocusInput() {
    this._inputEl.setSelectionRange(
      this._selectionRange.hours.start,
      this._selectionRange.hours.end
    );
  }

  private _handleBlurInput() {
    this._closeListBox();
    this._inputEl.setSelectionRange(0, 0);
  }

  private _handleClickInput() {
    this._openListBox();
    const selectionRange = this._getSelectionRange();
    this._inputEl.setSelectionRange(selectionRange.start, selectionRange.end);
  }

  private _handleKeyDownInput(event: KeyboardEvent) {
    this._closeListBox();

    if (this._handleTabKey(event)) return;

    if (this._handleNotSupportedKey(event)) return;

    this._handleSupportedKey(event);
  }

  private _handleTabKey(event: KeyboardEvent) {
    const currentSelection = this._getCurrentSelection();

    if (event.key !== "Tab") return false;
    if (event.shiftKey) {
      if (currentSelection === "hours") return true;
      event.preventDefault();
      this._actionSelectPreviousRange(currentSelection);
      return true;
    }

    const isLastSelectionRange =
      (this.hour12 && currentSelection === "suffix") ||
      (!this.hour12 && currentSelection === "minutes");
    if (isLastSelectionRange) {
      return true;
    }

    event.preventDefault();
    this._actionSelectNextRange(currentSelection);
    return true;
  }

  private _handleNotSupportedKey(event: KeyboardEvent) {
    event.preventDefault();
    return ["Meta", "Shift", "Alt", "Backspace", "CapsLock", "Escape"].includes(
      event.key
    );
  }

  private _handleSupportedKey(event: KeyboardEvent) {
    const currentSelection = this._getCurrentSelection();
    const keyCode = event.key;
    let newValue;
    switch (keyCode) {
      case "Enter":
      case "ArrowRight":
        this._actionSelectNextRange(currentSelection);
        break;
      case "ArrowLeft":
        this._actionSelectPreviousRange(currentSelection);
        break;
      case "ArrowUp":
        newValue = this._getNewValueByArrowUpDown(currentSelection, 1);
        this._actionUpdateInputValue(newValue);
        break;
      case "ArrowDown":
        newValue = this._getNewValueByArrowUpDown(currentSelection, -1);
        this._actionUpdateInputValue(newValue);
        break;
      default:
        newValue = this._getNewValueByDefaultKey(keyCode);
        this._actionUpdateInputValue(newValue);
        break;
    }
  }

  private _handleChangeListBox(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this._listBoxVisible = false;
    this._inputEl.blur();
    const listboxVal = event.detail.value;
    this._actionUpdateInputValue(listboxVal);
  }

  private _actionSelectNextRange(currentSelection: string) {
    if (currentSelection === "hours") {
      this._inputEl.setSelectionRange(
        this._selectionRange.minutes.start,
        this._selectionRange.minutes.end
      );
      return;
    }
    if (this.hour12 && currentSelection === "minutes") {
      this._inputEl.setSelectionRange(
        this._selectionRange.suffix.start,
        this._selectionRange.suffix.end
      );
    }
  }

  private _actionSelectPreviousRange(currentSelection: string) {
    if (currentSelection === "suffix") {
      this._inputEl.setSelectionRange(
        this._selectionRange.minutes.start,
        this._selectionRange.minutes.end
      );
      return;
    }
    if (currentSelection === "minutes") {
      this._inputEl.setSelectionRange(
        this._selectionRange.hours.start,
        this._selectionRange.hours.end
      );
    }
  }

  private _actionUpdateInputValue(newValue: string) {
    const selectionRange = this._getSelectionRange();
    const oldValue = this._inputValue;
    if (oldValue === newValue) return;

    this._inputValue = newValue;
    this._inputEl.value = newValue;
    this._inputEl.setSelectionRange(selectionRange.start, selectionRange.end);

    this._dispatchEventTimeChange(newValue, oldValue);
  }

  private _getNewValueByArrowUpDown(
    currentSelection: string,
    changeStep: number
  ) {
    if (currentSelection === "hours") {
      return this._getNewValueByChangeHours(changeStep);
    }
    if (currentSelection === "minutes") {
      return this._getNewValueByChangeMinutes(changeStep);
    }
    return this._getNewValueByChangeSuffix();
  }

  private _getNewValueByDefaultKey(key: string) {
    const isNumber = /^[0-9]$/i.test(key);
    const currentSelection = this._getCurrentSelection();
    if (isNumber) {
      return this._getNewValueIsNumber(key);
    }
    if (currentSelection === "suffix" && !isNumber) {
      return this._getNewValueByChangeSuffix();
    }
    return this._inputValue;
  }

  private _getNewValueIsNumber(key: string) {
    const currentSelection = this._getCurrentSelection();
    const { hours, minutes } = this._separateInputValue();
    if (currentSelection === "minutes") {
      const previousMinutes = this._getPreviousMinutes(minutes);
      const newMinutes = padStart(previousMinutes + key);
      return this._formatInputValue({ type: "minutes", value: newMinutes });
    }
    if (currentSelection === "hours") {
      const previousHours = this._getPreviousHours(hours, key);
      const newHours = padStart(parseInt(previousHours, 10) + key);
      return this._formatInputValue({ type: "hours", value: newHours });
    }
    return this._inputValue;
  }

  private _getNewValueByChangeHours(changeStep: number) {
    const { hours } = this._separateInputValue();
    const currentHour = parseInt(hours, 10);
    let newHours = currentHour + changeStep;
    if (this.hour12) {
      newHours %= MAX_HOURS12;
      newHours = newHours < 0 ? MAX_HOURS12 - 1 : newHours;
    } else {
      newHours %= MAX_HOURS24;
      newHours = newHours < 0 ? MAX_HOURS24 - 1 : newHours;
    }
    return this._formatInputValue({
      type: "hours",
      value: padStart(newHours)
    });
  }

  private _getNewValueByChangeMinutes(changeStep: number) {
    const { minutes } = this._separateInputValue();
    const currentMinute = parseInt(minutes, 10);
    let newMinutes = currentMinute + changeStep;
    newMinutes %= MAX_MINUTES;
    newMinutes = newMinutes < 0 ? MAX_MINUTES - 1 : newMinutes;
    return this._formatInputValue({
      type: "minutes",
      value: padStart(newMinutes)
    });
  }

  private _getNewValueByChangeSuffix() {
    const { suffix } = this._separateInputValue();
    const newSuffix =
      suffix === this._locale.TIME_SELECT_SUFFIX.am
        ? this._locale.TIME_SELECT_SUFFIX.pm
        : this._locale.TIME_SELECT_SUFFIX.am;
    return this._formatInputValue({
      type: "suffix",
      value: newSuffix
    });
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
      (this.hour12 && newHours >= MAX_HOURS12) ||
      (!this.hour12 && newHours >= MAX_HOURS24);
    previousHours = isMaxHours ? "0" : previousHours;
    return previousHours;
  }

  private _getCurrentSelection() {
    const start = this._inputEl.selectionStart || 0;
    const end = this._inputEl.selectionEnd || 0;
    const isSelectHours =
      start >= this._selectionRange.hours.start &&
      end <= this._selectionRange.hours.end;
    if (isSelectHours) return "hours";
    const isSelectMinutes =
      start >= this._selectionRange.minutes.start &&
      end <= this._selectionRange.minutes.end;
    if (isSelectMinutes) return "minutes";
    return "suffix";
  }

  private _getSelectionRange() {
    const currentSelection = this._getCurrentSelection();
    if (currentSelection === "hours") return this._selectionRange.hours;
    if (currentSelection === "minutes") return this._selectionRange.minutes;
    return this._selectionRange.suffix;
  }

  private _formatInputValue(itemChange: TimeItem) {
    let { hours, minutes, suffix } = this._separateInputValue();
    hours = itemChange.type === "hours" ? itemChange.value : hours;
    minutes = itemChange.type === "minutes" ? itemChange.value : minutes;
    suffix = itemChange.type === "suffix" ? itemChange.value : suffix;
    return hours + ":" + minutes + (suffix ? " " + suffix : "");
  }

  private _separateInputValue(time: string = this._inputValue) {
    const indexColon = time.indexOf(":");
    const indexSpace = time.indexOf(" ");
    const hours = time.substring(0, indexColon);
    const minutes = time.substr(indexColon + 1, this._timeLength);
    const suffix =
      indexSpace !== -1 ? time.substr(indexSpace + 1, this._timeLength) : "";
    return { hours, minutes, suffix, indexColon };
  }

  private _openListBox() {
    this._inputEl.focus();
    this._listBoxVisible = true;
  }

  private _closeListBox() {
    this._listBoxVisible = false;
  }

  private _dispatchEventTimeChange(value: string, oldValue: string) {
    const detail: CustomEventDetail = {
      value: value,
      oldValue: oldValue
    };
    dispatchCustomEvent(this, "kuc:base-time-change", detail);
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        .kuc-base-time__input {
          position: relative;
          box-sizing: border-box;
          width: 85px;
          height: 40px;
          padding: 0;
          text-align: center;
          color: #333333;
          overflow: hidden;
          background-color: #ffffff;
          border: 1px solid #e3e7e8;
        }
        .kuc-base-time__input:focus {
          border: 1px solid #3498db;
          outline: none;
        }
        .kuc-base-time__input:disabled {
          color: #888888;
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-time")) {
  window.customElements.define("kuc-base-time", BaseDateTime);
}
