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

type selectionItem = { start: number; end: number };
type selectionRange = {
  [key: string]: selectionItem;
};

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
  private _selectionRange: selectionRange = {
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
    const start = this._inputEl.selectionStart;
    if (start === null) return;
    if (start <= this._selectionRange.hours.end) {
      this._inputEl.setSelectionRange(
        this._selectionRange.hours.start,
        this._selectionRange.hours.end
      );
      return;
    }
    if (
      start >= this._selectionRange.minutes.start &&
      start <= this._selectionRange.minutes.end
    ) {
      this._inputEl.setSelectionRange(
        this._selectionRange.minutes.start,
        this._selectionRange.minutes.end
      );
      return;
    }
    this._inputEl.setSelectionRange(
      this._selectionRange.suffix.start,
      this._selectionRange.suffix.end
    );
  }

  private _handleChangeListBox(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this._listBoxVisible = false;
    const oldValue = this._inputValue;
    const listboxVal = this._listBoxEl.getHighlightDataLabel() || "";

    this._inputValue = listboxVal;
    this._inputEl.blur();
    this._inputEl.value = this._inputValue;
    this._handleDispatchEventTimeChange(oldValue);
  }

  private _handleDispatchEventTimeChange(oldValue: string) {
    const value = this._inputValue;
    const detail: CustomEventDetail = {
      value: value,
      oldValue: oldValue
    };
    dispatchCustomEvent(this, "kuc:base-time-change", detail);
  }

  private _handleFocusTime(event: Event) {
    setTimeout(() => {
      this._inputEl.setSelectionRange(
        this._selectionRange.hours.start,
        this._selectionRange.hours.end
      );
      event.preventDefault();
      event.stopImmediatePropagation();
      event.stopPropagation();
    }, 1);
  }

  private _handleKeyDownTime(event: KeyboardEvent) {
    event.preventDefault();
    const keyCode = event.key;
    switch (keyCode) {
      case "Tab":
        if (event.shiftKey) {
          this._actionSelectPreviousRange();
          break;
        }
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
        this._actionChangeInputValue(1);
        break;
      case "ArrowDown":
        this._actionChangeInputValue(-1);
        break;
      default:
        this._handleTypingInputValue(keyCode);
        break;
    }
  }

  private _handleTypingInputValue(keyCode: string) {
    const listKeyInvalid = [
      "Meta",
      "Shift",
      "Alt",
      "Backspace",
      "CapsLock",
      "Escape"
    ];
    if (listKeyInvalid.includes(keyCode)) return;

    const isNumber = /^[0-9]$/i.test(keyCode);
    const { isSelectSuffix } = this._getSelectionTimeValue();
    if (isSelectSuffix && !isNumber) {
      this._actionChangeSuffix();
      return;
    }
    if (isNumber && !isSelectSuffix) {
      this._handleSetInputValue(keyCode);
    }
  }

  private _handleSetInputValue(key: string) {
    const oldValue = this._inputValue;
    const { isSelectMinutes } = this._getSelectionTimeValue();
    const { hours, minutes, suffix } = this._separateTimeValue();
    let newTime = this._inputEl.value || "";
    const newSuffix = suffix ? " " + suffix : "";

    if (!this._inputValue) return;
    if (isSelectMinutes) {
      const previousMinutes = this._getPreviousMinutes(minutes);
      const newMinutes = padStart(previousMinutes + key);
      newTime = hours + ":" + newMinutes + newSuffix;
      this._setInputValue(newTime, this._selectionRange.minutes);
    } else {
      const previousHours = this._getPreviousHours(hours, key);
      const newHours = padStart(parseInt(previousHours, 10) + key);
      newTime = newHours + ":" + minutes + newSuffix;
      this._setInputValue(newTime, this._selectionRange.hours);
    }
    this._inputValue = newTime;
    this._handleDispatchEventTimeChange(oldValue);
  }

  private _actionSelectNextRange() {
    const { isSelectHours, isSelectMinutes } = this._getSelectionTimeValue();
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
    const selectionStart = this._inputEl.selectionStart;
    if (selectionStart === null) return;
    const { isSelectMinutes, isSelectSuffix } = this._getSelectionTimeValue();
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

  private _actionChangeSuffix() {
    const oldValue = this._inputValue;
    const { hours, minutes, suffix } = this._separateTimeValue();
    const newSuffix =
      suffix === this._locale.TIME_SELECT_SUFFIX.am
        ? this._locale.TIME_SELECT_SUFFIX.pm
        : this._locale.TIME_SELECT_SUFFIX.am;
    const newTime = hours + ":" + minutes + " " + newSuffix;
    this._inputValue = newTime;
    this._setInputValue(newTime, this._selectionRange.suffix);
    this._handleDispatchEventTimeChange(oldValue);
  }

  private _actionChangeInputValue(value: number) {
    const oldValue = this._inputValue;
    const { isSelectMinutes, isSelectSuffix } = this._getSelectionTimeValue();
    if (isSelectSuffix) {
      this._actionChangeSuffix();
      return;
    }
    if (isSelectMinutes) {
      this._changeMinutesBy(value);
    } else {
      this._changeHoursBy(value);
    }
    this._handleDispatchEventTimeChange(oldValue);
    this._closeListBox();
  }

  private _changeMinutesBy(minutesChange: number) {
    const { hours, minutes, suffix } = this._separateTimeValue();
    const currentMinute = parseInt(minutes, 10);
    let newMinutes =
      currentMinute === 0 ? maxMinutes - 1 : currentMinute + minutesChange;
    if (!this._inputValue) return;
    if (minutesChange > 0) {
      newMinutes =
        currentMinute === maxMinutes - 1 ? 0 : currentMinute + minutesChange;
    }
    const newTime =
      hours + ":" + padStart(newMinutes) + (suffix ? " " + suffix : "");
    this._inputValue = newTime;
    this._setInputValue(newTime, this._selectionRange.minutes);
  }

  private _changeHoursBy(hoursChange: number) {
    if (!this._inputValue) return;
    const { hours, minutes, suffix } = this._separateTimeValue();
    const currentHour = parseInt(hours, 10);
    let newHours = currentHour + hoursChange;
    if (this.hour12) {
      newHours %= maxHour12;
      newHours = newHours < 0 ? maxHour12 - 1 : newHours;
    } else {
      newHours %= maxHour24;
      newHours = newHours < 0 ? maxHour24 - 1 : newHours;
    }
    const newTime =
      padStart(newHours) + ":" + minutes + (suffix ? " " + suffix : "");
    this._inputValue = newTime;
    this._setInputValue(newTime, this._selectionRange.hours);
  }

  private _setInputValue(value: string, selection: selectionItem) {
    this._inputEl.value = value;
    this._inputEl.setSelectionRange(selection.start, selection.end);
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

  private _getSelectionTimeValue() {
    const start = this._inputEl.selectionStart;
    const end = this._inputEl.selectionEnd;
    const isSelectHours =
      start === this._selectionRange.hours.start &&
      end === this._selectionRange.hours.end;
    const isSelectMinutes =
      start === this._selectionRange.minutes.start &&
      end === this._selectionRange.minutes.end;
    const isSelectSuffix =
      start === this._selectionRange.suffix.start &&
      end === this._selectionRange.suffix.end;

    return { isSelectHours, isSelectMinutes, isSelectSuffix };
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
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-time")) {
  window.customElements.define("kuc-base-time", BaseDateTime);
}
