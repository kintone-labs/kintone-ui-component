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
  MaxMinutes,
  MaxHour12,
  MaxHour24,
  getLocale
} from "../utils";

type TimeItem = { type: string; value: string };

export class BaseDateTime extends KucBase {
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) hour12 = false;
  @property({ type: String }) value = "";

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

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("hour12")) {
      this._listBoxItems = generateTimeOptions(this.hour12, this._timeStep);
      this._handleUpdateValueProperty();
    }
    if (changedProperties.has("value")) {
      this._handleUpdateValueProperty();
    }
    super.update(changedProperties);
  }

  private _handleUpdateValueProperty() {
    const { hours, minutes } = this._separateTimeValue(this.value);
    const time = formatTimeValue(hours, minutes);
    const isValidTime = time instanceof Date && !isNaN(time.getTime());
    this._inputValue = isValidTime
      ? convertTimeValueToHour12(time, this.hour12)
      : "";
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <input
        type="text"
        class="kuc-base-time__input"
        value="${this._inputValue}"
        ?disabled="${this.disabled}"
        @click="${this._handleClickTime}"
        @blur="${this._handleBlurTime}"
        @keydown="${this._handleKeyDownTime}"
        @focus="${this._handleFocusTime}"
      />
      <kuc-base-datetime-listbox
        aria-hidden="${!this._listBoxVisible}"
        class="kuc-base-time__listbox"
        ?hidden="${!this._listBoxVisible}"
        .items="${this._listBoxItems || []}"
        @kuc:calendar-listbox-click="${this._handleChangeListBox}"
      >
      </kuc-base-datetime-listbox>
    `;
  }

  private _handleBlurTime() {
    this._closeListBox();
    this._inputEl.setSelectionRange(0, 0);
  }

  private _handleClickTime() {
    this._openListBox();
    const selectionRange = this._getSelectionRange();
    this._inputEl.setSelectionRange(selectionRange.start, selectionRange.end);
  }

  private _handleChangeListBox(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this._listBoxVisible = false;
    this._inputEl.blur();
    const listboxVal = event.detail.value;
    this._actionUpdateInputValue(listboxVal);
  }

  private _handleDispatchEventTimeChange(value: string, oldValue: string) {
    const detail: CustomEventDetail = {
      value: value,
      oldValue: oldValue
    };
    dispatchCustomEvent(this, "kuc:base-time-change", detail);
  }

  private _handleFocusTime() {
    this._inputEl.setSelectionRange(
      this._selectionRange.hours.start,
      this._selectionRange.hours.end
    );
  }

  private _handleKeyDownTime(event: KeyboardEvent) {
    const keyCode = event.key;
    if (keyCode === "ArrowLeft" || (event.shiftKey && keyCode === "Tab")) {
      this._handleSelectPreviousRange(event);
      return;
    }
    const isNotSupport = this._validateNotSupportKeyCode(event);
    if (isNotSupport) return;
    this._handleSupportKeyCode(event);
  }

  private _validateNotSupportKeyCode(event: KeyboardEvent) {
    const listKeyNotSupport = [
      "Meta",
      "Shift",
      "Alt",
      "Backspace",
      "CapsLock",
      "Escape"
    ];
    const keyCode = event.key;
    if (!listKeyNotSupport.includes(keyCode)) return false;
    event.preventDefault();
    return true;
  }

  private _handleSupportKeyCode(event: KeyboardEvent) {
    const keyCode = event.key;
    if (keyCode === "Tab" || keyCode === "Enter" || keyCode === "ArrowRight") {
      this._handleSelectNextRange(event);
      return;
    }
    const newValue = this._getNewInputValue(event);
    this._actionUpdateInputValue(newValue);
  }

  private _handleSelectNextRange(event: KeyboardEvent) {
    this._closeListBox();
    const currentSelection = this._getCurrentSelection();
    const isLastSelectionRange =
      (this.hour12 && currentSelection === "suffix") ||
      (!this.hour12 && currentSelection === "minutes");
    if (event.key === "Tab" && isLastSelectionRange) {
      return;
    }
    this._actionSelectNextRange(event);
  }

  private _handleSelectPreviousRange(event: KeyboardEvent) {
    this._closeListBox();
    const currentSelection = this._getCurrentSelection();
    const isShiftTabKey = event.key === "Tab" && event.shiftKey;
    if (isShiftTabKey && currentSelection === "hours") {
      return;
    }
    this._actionSelectPreviousRange(event);
  }

  private _actionSelectNextRange(event: KeyboardEvent) {
    event.preventDefault();
    const currentSelection = this._getCurrentSelection();
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

  private _actionSelectPreviousRange(event: KeyboardEvent) {
    event.preventDefault();
    const currentSelection = this._getCurrentSelection();
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
    const oldValue = this._inputValue;
    if (oldValue === newValue) return;
    this._handleDispatchEventTimeChange(newValue, oldValue);
    const selectionRange = this._getSelectionRange();
    this._inputValue = newValue;
    this._inputEl.value = newValue;
    this._inputEl.setSelectionRange(selectionRange.start, selectionRange.end);
  }

  private _getNewInputValue(event: KeyboardEvent) {
    event.preventDefault();
    const key = event.key;
    if (key === "ArrowUp" || key === "ArrowDown") {
      return this._getNewValueByArrowUpDown(key);
    }
    return this._getNewValueByTyping(key);
  }

  private _getNewValueByArrowUpDown(key: string) {
    const currentSelection = this._getCurrentSelection();
    if (currentSelection === "hours") {
      return this._getNewValueByChangeHours(key);
    }
    if (currentSelection === "minutes") {
      return this._getNewValueByChangeMinutes(key);
    }
    return this._getNewValueByChangeSuffix();
  }

  private _getNewValueByTyping(key: string) {
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
    const { hours, minutes } = this._separateTimeValue();
    if (currentSelection === "minutes") {
      const previousMinutes = this._getPreviousMinutes(minutes);
      const newMinutes = padStart(previousMinutes + key);
      return this._groupingNewTime({ type: "minutes", value: newMinutes });
    }
    if (currentSelection === "hours") {
      const previousHours = this._getPreviousHours(hours, key);
      const newHours = padStart(parseInt(previousHours, 10) + key);
      return this._groupingNewTime({ type: "hours", value: newHours });
    }
    return this._inputValue;
  }

  private _getNewValueByChangeHours(key: string) {
    const { hours } = this._separateTimeValue();
    const currentHour = parseInt(hours, 10);
    const hoursChange = key === "ArrowDown" ? -1 : 1;
    let newHours = currentHour + hoursChange;
    if (this.hour12) {
      newHours %= MaxHour12;
      newHours = newHours < 0 ? MaxHour12 - 1 : newHours;
    } else {
      newHours %= MaxHour24;
      newHours = newHours < 0 ? MaxHour24 - 1 : newHours;
    }
    return this._groupingNewTime({
      type: "hours",
      value: padStart(newHours)
    });
  }

  private _getNewValueByChangeMinutes(key: string) {
    const { minutes } = this._separateTimeValue();
    const minutesChange = key === "ArrowDown" ? -1 : 1;
    const currentMinute = parseInt(minutes, 10);
    let newMinutes =
      currentMinute === 0 ? MaxMinutes - 1 : currentMinute + minutesChange;
    if (minutesChange > 0) {
      newMinutes =
        currentMinute === MaxMinutes - 1 ? 0 : currentMinute + minutesChange;
    }
    return this._groupingNewTime({
      type: "minutes",
      value: padStart(newMinutes)
    });
  }

  private _getNewValueByChangeSuffix() {
    const { suffix } = this._separateTimeValue();
    const newSuffix =
      suffix === this._locale.TIME_SELECT_SUFFIX.am
        ? this._locale.TIME_SELECT_SUFFIX.pm
        : this._locale.TIME_SELECT_SUFFIX.am;
    return this._groupingNewTime({
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
      (this.hour12 && newHours >= MaxHour12) ||
      (!this.hour12 && newHours >= MaxHour24);
    previousHours = isMaxHours ? "0" : previousHours;
    return previousHours;
  }

  private _groupingNewTime(itemChange: TimeItem) {
    let { hours, minutes, suffix } = this._separateTimeValue();
    hours = itemChange.type === "hours" ? itemChange.value : hours;
    minutes = itemChange.type === "minutes" ? itemChange.value : minutes;
    suffix = itemChange.type === "suffix" ? itemChange.value : suffix;
    return hours + ":" + minutes + (suffix ? " " + suffix : "");
  }

  private _separateTimeValue(time: string = this._inputValue) {
    const indexColon = time.indexOf(":");
    const indexSpace = time.indexOf(" ");
    const hours = time.substring(0, indexColon);
    const minutes = time.substr(indexColon + 1, this._timeLength);
    const suffix =
      indexSpace !== -1 ? time.substr(indexSpace + 1, this._timeLength) : "";
    return { hours, minutes, suffix, indexColon };
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

  private _openListBox() {
    this._inputEl.focus();
    this._listBoxVisible = true;
  }

  private _closeListBox() {
    this._listBoxVisible = false;
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
