import { html, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import {
  KucBase,
  CustomEventDetail,
  dispatchCustomEvent
} from "../../kuc-base";
import { BaseDateTimeListBox, Item } from "../listbox";
import {
  MAX_MINUTES,
  MAX_HOURS12,
  MAX_HOURS24,
  TIME_SUFFIX
} from "../resource/constant";
import { padStart, generateTimeOptions, createTimeObj } from "../utils";

type TimeItem = { type: string; value: string };

export class BaseDateTime extends KucBase {
  @property({ type: String }) inputId = "";
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) inputAriaInvalid = false;
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
  private _inputValue = "12:00";

  private _listBoxItems: Item[] | undefined;
  private _selectionRange = {
    hours: { start: 0, end: 2 },
    minutes: { start: 3, end: 5 },
    suffix: { start: 6, end: 8 }
  };
  private _timeLength = 2;

  @query(".kuc-base-time__group__input")
  private _inputEl!: HTMLInputElement;

  @query(".kuc-base-time__group__listbox")
  private _listBoxEl!: BaseDateTimeListBox;

  @query(".kuc-base-datetime-listbox__listbox")
  private _ulListBoxEl!: HTMLUListElement;

  private _GUID: string | undefined;

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("hour12")) {
      this._listBoxItems = generateTimeOptions(this.hour12, this._timeStep);
      this._updateInputValue(this._inputValue);
    }
    if (changedProperties.has("value")) {
      this._updateInputValue(this.value);
    }
    if (changedProperties.has("inputId")) {
      this._GUID = this.inputId;
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-time__group">
        <input
          type="text"
          class="kuc-base-time__group__input"
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
          class="kuc-base-time__group__listbox"
          ?hidden="${!this._listBoxVisible}"
          .items="${this._listBoxItems || []}"
          @kuc:calendar-listbox-click="${this._handleChangeListBox}"
        >
        </kuc-base-datetime-listbox>
      </div>
    `;
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.get("_listBoxVisible") === false) {
      this._listBoxEl.scrollToView(this._inputValue);
      this._calculateListBoxPosition();
    }
  }

  private _calculateListBoxPosition() {
    const listBoxHeight = this._ulListBoxEl.getBoundingClientRect().height;
    const distanceInputToBottom =
      window.innerHeight - this._inputEl.getBoundingClientRect().bottom;
    this._ulListBoxEl.style.bottom = "auto";
    this._ulListBoxEl.style.left = "auto";
    if (distanceInputToBottom >= listBoxHeight) return;
    this._ulListBoxEl.style.bottom = "40px";
    this._ulListBoxEl.style.left = "0";
  }

  private _updateInputValue(value: string) {
    const { hours, minutes, suffix } = this._separateInputValue(value);
    const timeObj = createTimeObj(hours, minutes);
    const notValidTime = !(timeObj instanceof Date) || isNaN(timeObj.getTime());
    if (notValidTime) {
      this._inputValue = "";
      return;
    }
    this._inputValue = this._formatInputValue(timeObj, suffix);
  }

  private _formatInputValue(timeObj: Date, suffix: string) {
    const hours = timeObj.getHours();
    const minutes = timeObj.getMinutes();
    let newHours = hours % MAX_HOURS24;
    if (this.hour12) {
      const newSuffix = hours >= MAX_HOURS12 ? TIME_SUFFIX.PM : TIME_SUFFIX.AM;
      newHours = hours % MAX_HOURS12;
      newHours = newHours === 0 ? MAX_HOURS12 : newHours;
      return `${padStart(newHours)}:${padStart(minutes)} ${newSuffix}`;
    }
    if (suffix === TIME_SUFFIX.PM) {
      newHours =
        newHours === MAX_HOURS12 ? MAX_HOURS12 : newHours + MAX_HOURS12;
      return `${padStart(newHours)}:${padStart(minutes)}`;
    }
    newHours = newHours === MAX_HOURS12 ? 0 : newHours;
    return `${padStart(newHours)}:${padStart(minutes)}`;
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
    return (
      ["Meta", "Shift", "Alt", "Backspace", "CapsLock", "Escape"].indexOf(
        event.key
      ) > -1
    );
  }

  private _handleSupportedKey(event: KeyboardEvent) {
    const range = this._getCurrentSelection();
    const keyCode = event.key;
    let newValue;
    switch (keyCode) {
      case "Enter":
      case "ArrowRight":
        this._actionSelectNextRange(range);
        break;
      case "ArrowLeft":
        this._actionSelectPreviousRange(range);
        break;
      case "ArrowUp":
        newValue = this._computeArrowUpDownValue(range, 1);
        this._actionUpdateInputValue(newValue);
        break;
      case "ArrowDown":
        newValue = this._computeArrowUpDownValue(range, -1);
        this._actionUpdateInputValue(newValue);
        break;
      default:
        newValue = this._computeDefaultKeyValue(keyCode);
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

  private _actionSelectNextRange(range: string) {
    if (range === "hours") {
      this._inputEl.setSelectionRange(
        this._selectionRange.minutes.start,
        this._selectionRange.minutes.end
      );
      return;
    }
    if (this.hour12 && range === "minutes") {
      this._inputEl.setSelectionRange(
        this._selectionRange.suffix.start,
        this._selectionRange.suffix.end
      );
    }
  }

  private _actionSelectPreviousRange(range: string) {
    if (range === "suffix") {
      this._inputEl.setSelectionRange(
        this._selectionRange.minutes.start,
        this._selectionRange.minutes.end
      );
      return;
    }
    if (range === "minutes") {
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

  private _computeArrowUpDownValue(range: string, changeStep: number) {
    if (range === "hours") {
      return this._computeArrowUpDownHourValue(changeStep);
    }
    if (range === "minutes") {
      return this._computeArrowUpDownMinuteValue(changeStep);
    }
    return this._computeKeyDownSuffixValue();
  }

  private _computeDefaultKeyValue(key: string) {
    const isNumber = /^[0-9]$/i.test(key);
    const range = this._getCurrentSelection();
    if (isNumber) {
      return this._computeNumberKeyValue(key);
    }
    if (range === "suffix" && !isNumber) {
      return this._computeKeyDownSuffixValue();
    }
    return this._inputValue;
  }

  private _computeNumberKeyValue(key: string) {
    const range = this._getCurrentSelection();
    const { hours, minutes } = this._separateInputValue();
    if (range === "minutes") {
      const previousMinutes = this._getPreviousMinutes(minutes);
      const newMinutes = padStart(previousMinutes + key);
      return this._formatKeyDownValue({ type: "minutes", value: newMinutes });
    }
    if (range === "hours") {
      const previousHours = this._getPreviousHours(hours, key);
      const newHours = padStart(parseInt(previousHours, 10) + key);
      return this._formatKeyDownValue({ type: "hours", value: newHours });
    }
    return this._inputValue;
  }

  private _computeArrowUpDownHourValue(changeStep: number) {
    const { hours } = this._separateInputValue();
    const currentHour = parseInt(hours, 10);
    let newHours = currentHour + changeStep;
    if (this.hour12) {
      newHours %= MAX_HOURS12;
      newHours = newHours <= 0 ? MAX_HOURS12 : newHours;
    } else {
      newHours %= MAX_HOURS24;
      newHours = newHours < 0 ? MAX_HOURS24 - 1 : newHours;
    }
    return this._formatKeyDownValue({
      type: "hours",
      value: padStart(newHours)
    });
  }

  private _computeArrowUpDownMinuteValue(changeStep: number) {
    const { minutes } = this._separateInputValue();
    const currentMinute = parseInt(minutes, 10);
    let newMinutes = currentMinute + changeStep;
    newMinutes %= MAX_MINUTES;
    newMinutes = newMinutes < 0 ? MAX_MINUTES - 1 : newMinutes;
    return this._formatKeyDownValue({
      type: "minutes",
      value: padStart(newMinutes)
    });
  }

  private _computeKeyDownSuffixValue() {
    const { suffix } = this._separateInputValue();
    const newSuffix =
      suffix === TIME_SUFFIX.AM ? TIME_SUFFIX.PM : TIME_SUFFIX.AM;
    return this._formatKeyDownValue({
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
      (this.hour12 && newHours > MAX_HOURS12) ||
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
    const isSelectSuffix =
      start >= this._selectionRange.suffix.start &&
      end <= this._selectionRange.suffix.end;
    if (isSelectSuffix) return "suffix";
    return "hours";
  }

  private _getSelectionRange() {
    const range = this._getCurrentSelection();
    if (range === "hours") return this._selectionRange.hours;
    if (range === "minutes") return this._selectionRange.minutes;
    return this._selectionRange.suffix;
  }

  private _formatKeyDownValue(itemChange: TimeItem) {
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
        .kuc-base-time__group {
          position: relative;
        }
        .kuc-base-time__group__input {
          position: relative;
          box-sizing: border-box;
          width: 85px;
          height: 40px;
          padding: 0;
          text-align: center;
          font-size: 14px;
          color: #333333;
          overflow: hidden;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
          background-color: #ffffff;
          border: 1px solid #e3e7e8;
        }
        .kuc-base-time__group__input:focus {
          border: 1px solid #3498db;
          outline: none;
        }
        .kuc-base-time__group__input:disabled {
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
