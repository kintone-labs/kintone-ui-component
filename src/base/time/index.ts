import { html, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import { KucBase, CustomEventDetail, dispatchCustomEvent } from "../kuc-base";
import { BaseDateTimeListBox, Item } from "../datetime/listbox";
import {
  padStart,
  generateTimeOptions,
  formatTimeValue,
  convertTimeValueToHour12,
  maxMinutes,
  maxHour12,
  maxHour24,
  getLocale
} from "../datetime/utils";

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

  @query(".kuc-base-time__listbox")
  private _listBoxEl!: BaseDateTimeListBox;

  update(changedProperties: PropertyValues) {
    this._handleUpdateTimeOptions(changedProperties);
    this._handleUpdateValueProperty(changedProperties);
    super.update(changedProperties);
  }

  private _handleUpdateTimeOptions(changedProperties: PropertyValues) {
    if (changedProperties.has("hour12")) {
      this._listBoxItems = generateTimeOptions(this.hour12, this._timeStep);
    }
  }

  private _handleUpdateValueProperty(changedProperties: PropertyValues) {
    if (changedProperties.has("value")) {
      const { hours, minutes } = this._separateTimeValue(this.value);
      const time = formatTimeValue(hours, minutes);
      this._inputValue = convertTimeValueToHour12(time, this.hour12);
    }
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
    const listboxVal = event.detail.value;
    this._inputEl.blur();
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
    event.preventDefault();
    const keyCode = event.key;
    const listKeyNotSupport = [
      "Meta",
      "Shift",
      "Alt",
      "Backspace",
      "CapsLock",
      "Escape"
    ];
    if (keyCode === "Tab" && event.shiftKey) {
      this._actionSelectPreviousRange();
      return;
    }
    if (listKeyNotSupport.includes(keyCode)) return;
    let newValue = this._inputValue;
    switch (keyCode) {
      case "Tab":
        this._actionSelectNextRange();
        break;
      case "ArrowRight":
      case "Enter":
        this._actionSelectNextRange();
        break;
      case "ArrowLeft":
        this._actionSelectPreviousRange();
        break;
      case "ArrowUp":
        newValue = this._getNewInputValue(1);
        this._actionUpdateInputValue(newValue);
        break;
      case "ArrowDown":
        newValue = this._getNewInputValue(-1);
        this._actionUpdateInputValue(newValue);
        break;
      default:
        newValue = this._getNewInputValue(keyCode);
        this._actionUpdateInputValue(newValue);
        break;
    }
  }

  private _actionUpdateInputValue(newValue: string) {
    const oldValue = this._inputValue;
    const selectionRange = this._getSelectionRange();
    this._inputValue = newValue;
    this._inputEl.value = newValue;
    this._inputEl.setSelectionRange(selectionRange.start, selectionRange.end);
    if (oldValue !== newValue) {
      this._handleDispatchEventTimeChange(newValue, oldValue);
    }
  }

  private _actionSelectNextRange() {
    const { isSelectHours, isSelectMinutes } = this._getCurrentSelection();
    if (isSelectHours) {
      this._inputEl.setSelectionRange(
        this._selectionRange.minutes.start,
        this._selectionRange.minutes.end
      );
    }
    if (this.hour12 && isSelectMinutes) {
      this._inputEl.setSelectionRange(
        this._selectionRange.suffix.start,
        this._selectionRange.suffix.end
      );
    }
    this._closeListBox();
  }

  private _actionSelectPreviousRange() {
    const { isSelectMinutes, isSelectSuffix } = this._getCurrentSelection();
    if (isSelectSuffix) {
      this._inputEl.setSelectionRange(
        this._selectionRange.minutes.start,
        this._selectionRange.minutes.end
      );
    }
    if (isSelectMinutes) {
      this._inputEl.setSelectionRange(
        this._selectionRange.hours.start,
        this._selectionRange.hours.end
      );
    }
    this._closeListBox();
  }

  private _getNewInputValue(key: string | number) {
    const { isSelectHours, isSelectMinutes } = this._getCurrentSelection();
    if (typeof key === "number") {
      if (isSelectHours) {
        return this._getNewValueByChangeHours(key);
      }
      if (isSelectMinutes) {
        return this._getNewValueByChangeMinutes(key);
      }
      return this._getNewValueByChangeSuffix();
    }
    const isNumber = /^[0-9]$/i.test(key);
    return this._getNewValueByTyping(key, isNumber);
  }

  private _getNewValueByTyping(key: string, isNumber: boolean) {
    const { isSelectSuffix } = this._getCurrentSelection();
    if (isNumber) {
      return this._getNewValueIsNumber(key);
    }
    if (isSelectSuffix && !isNumber) {
      return this._getNewValueByChangeSuffix();
    }
    return this._inputValue;
  }

  private _getNewValueIsNumber(key: string) {
    const { isSelectHours, isSelectMinutes } = this._getCurrentSelection();
    const { hours, minutes } = this._separateTimeValue();
    if (isSelectMinutes) {
      const previousMinutes = this._getPreviousMinutes(minutes);
      const newMinutes = padStart(previousMinutes + key);
      return this._groupingNewTime({ type: "minutes", value: newMinutes });
    }
    if (isSelectHours) {
      const previousHours = this._getPreviousHours(hours, key);
      const newHours = padStart(parseInt(previousHours, 10) + key);
      return this._groupingNewTime({ type: "hours", value: newHours });
    }
    return this._inputValue;
  }

  private _getNewValueByChangeHours(hoursChange: number) {
    const { hours } = this._separateTimeValue();
    const currentHour = parseInt(hours, 10);
    let newHours = currentHour + hoursChange;
    if (this.hour12) {
      newHours %= maxHour12;
      newHours = newHours < 0 ? maxHour12 - 1 : newHours;
    } else {
      newHours %= maxHour24;
      newHours = newHours < 0 ? maxHour24 - 1 : newHours;
    }
    return this._groupingNewTime({
      type: "hours",
      value: padStart(newHours)
    });
  }

  private _getNewValueByChangeMinutes(minutesChange: number) {
    const { minutes } = this._separateTimeValue();
    const currentMinute = parseInt(minutes, 10);
    let newMinutes =
      currentMinute === 0 ? maxMinutes - 1 : currentMinute + minutesChange;
    if (minutesChange > 0) {
      newMinutes =
        currentMinute === maxMinutes - 1 ? 0 : currentMinute + minutesChange;
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
    if (parseInt(minutes, 10) > 10) {
      previousMinutes = ("" + parseInt(minutes, 10))[1];
    } else {
      previousMinutes = "" + parseInt(minutes, 10);
    }
    if (parseInt(previousMinutes, 10) > 5) {
      previousMinutes = "0";
    }
    return previousMinutes;
  }

  private _getPreviousHours(hours: string, key: string) {
    let previousHours: string;
    if (parseInt(hours, 10) > 10) {
      previousHours = ("" + hours)[1];
    } else {
      previousHours = "" + hours;
    }
    const newHoursNumber = parseInt(previousHours + key, 10);
    if (
      (this.hour12 && newHoursNumber >= maxHour12) ||
      (!this.hour12 && newHoursNumber >= maxHour24)
    ) {
      previousHours = "0";
      return previousHours;
    }
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
    let suffix = "";
    if (indexSpace !== -1) {
      suffix = time.substr(indexSpace + 1, this._timeLength);
    }
    return { hours, minutes, suffix, indexColon };
  }

  private _getCurrentSelection() {
    const start = this._inputEl.selectionStart || 0;
    const end = this._inputEl.selectionEnd || 0;
    const isSelectHours =
      start >= this._selectionRange.hours.start &&
      end <= this._selectionRange.hours.end;
    const isSelectMinutes =
      start >= this._selectionRange.minutes.start &&
      end <= this._selectionRange.minutes.end;
    const isSelectSuffix =
      start >= this._selectionRange.suffix.start &&
      end <= this._selectionRange.suffix.end;

    return { isSelectHours, isSelectMinutes, isSelectSuffix };
  }

  private _getSelectionRange() {
    const { isSelectHours, isSelectMinutes } = this._getCurrentSelection();
    if (isSelectHours) return this._selectionRange.hours;
    if (isSelectMinutes) return this._selectionRange.minutes;
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
