import { html, property, query, PropertyValues, state } from "lit-element";
import {
  KucBase,
  generateGUID,
  CustomEventDetail,
  dispatchCustomEvent
} from "../kuc-base";
import { BaseDateTimeListBox, Item } from "../datetime/listbox";
import { timeList12H, timeList24H } from "./utils";

export class BaseDateTime extends KucBase {
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) hour12 = false;
  @property({ type: Boolean }) visible = false;
  @property({ type: String }) value = "";

  @state()
  private _listBoxVisible = false;
  @state()
  private _timeValue = "5:00";

  private _GUID = generateGUID();
  private _listBoxItems: Item[] | undefined;

  @query(".kuc-base-time__input__toggle")
  private _inputEl!: HTMLInputElement;

  @query(".kuc-base-time__listbox")
  private _listBoxEl!: BaseDateTimeListBox;

  update(changedProperties: PropertyValues) {
    this._listBoxItems = this._getTimeOptions(this.hour12);
    if (changedProperties.has("value")) {
      const { hours, minutes } = this._separateTime(this.value);
      const time = this._getValidTime(hours, minutes);
      this._timeValue = this._getValidTimeLabel(time);
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <input
        type="text"
        class="kuc-base-time__input__toggle"
        aria-haspopup="true"
        aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
        @click="${this._handleClickTime}"
        @blur="${this._handleBlurTime}"
        @keydown="${this._handleKeyDownTime}"
        @focus="${this._handleFocusTime}"
        value="${this._timeValue}"
        ?disabled="${this.disabled}"
        aria-hidden="${!this.visible}"
        ?hidden="${!this.visible}"
      />
      <kuc-base-datetime-listbox
        .items="${this._listBoxItems || []}"
        .value="${this.value}"
        class="kuc-base-time__listbox"
        @kuc:calendar-listbox-click="${this._handleChangeListBox}"
        aria-hidden="${!this._listBoxVisible}"
        ?hidden="${!this._listBoxVisible}"
      >
      </kuc-base-datetime-listbox>
    `;
  }

  private _getValidTime(hours: string, minutes: string) {
    const time = new Date();
    time.setHours(parseInt(hours, 10));
    time.setMinutes(parseInt(minutes, 10));
    return time;
  }

  private _getValidTimeLabel(time: Date) {
    let timeLabel;
    if (this.hour12) {
      if (time.getHours() > 11) {
        const tempTime = time.getHours() - 12 + ":" + time.getMinutes();
        timeLabel = this._addZeroToTime(tempTime, "PM");
      } else {
        const tempTime = time.getHours() + ":" + time.getMinutes();
        timeLabel = this._addZeroToTime(tempTime, "AM");
      }
    } else {
      const tempTime = time.getHours() + ":" + time.getMinutes();
      timeLabel = this._addZeroToTime(tempTime);
    }
    return timeLabel;
  }

  private _handleClickTime() {
    const start = this._inputEl.selectionStart;
    if (start === null) return;
    if (start <= 2) {
      this._inputEl.setSelectionRange(0, 2);
    } else if (start > 2 && start <= 5) {
      this._inputEl.setSelectionRange(3, 5);
    } else {
      this._inputEl.setSelectionRange(6, 8);
    }
    this._openListBox();
  }

  private _handleFocusTime(event: Event) {
    setTimeout(() => {
      this._inputEl.setSelectionRange(0, 2);
      event.preventDefault();
      event.stopImmediatePropagation();
      event.stopPropagation();
    }, 1);
  }

  private _handleBlurTime() {
    this._closeListBox();
    this._inputEl.setSelectionRange(0, 0);
  }

  private _handleChangeListBox(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this._listBoxVisible = false;
    const oldValue = this._timeValue;
    const listboxVal = this._listBoxEl.getHighlightDataLabel() || "";
    const { postfix } = this._separateTime(listboxVal);

    this._timeValue = this._addZeroToTime(listboxVal, postfix || "");
    this._inputEl.blur();
    this._inputEl.value = this._timeValue;
    this._handleDispatchEventTimeChange(this._timeValue, oldValue);
  }

  private _handleKeyDownTime(event: KeyboardEvent) {
    event.preventDefault();
    const selectionStart = this._inputEl.selectionStart;
    const { isSelectPostfix } = this._getSelectionTimeValue();
    let keyCode = event.keyCode || event.which;
    const key = String.fromCharCode(keyCode);
    const isNumber = /^[0-9]$/i.test(key);
    console.log(event.key);
    switch (event.key) {
      case "Enter":
      case "Tab":
        this._handleKeyTab();
        break;
      case "ArrowLeft":
      case "Left":
        if (selectionStart === null || selectionStart <= 0) break;
        if (selectionStart >= 3 && selectionStart <= 5) {
          this._inputEl.setSelectionRange(0, 2);
        } else if (selectionStart >= 6 && selectionStart <= 8) {
          this._inputEl.setSelectionRange(3, 5);
        }
        this._closeListBox();
        break;
      case "ArrowRight":
      case "Right":
        if (selectionStart === null || selectionStart > this._timeValue.length)
          break;
        if (selectionStart >= 0 && selectionStart <= 2) {
          this._inputEl.setSelectionRange(3, 5);
        } else if (this.hour12 && selectionStart >= 3 && selectionStart <= 5) {
          this._inputEl.setSelectionRange(6, 8);
        }
        this._closeListBox();
        break;
      case "ArrowUp":
      case "Up":
        this._handleKeyUpDown(1, this._timeValue);
        break;
      case "ArrowDown":
      case "Down":
        this._handleKeyUpDown(-1, this._timeValue);
        break;
      default:
        if (keyCode >= 96 && keyCode <= 105) {
          keyCode -= 48;
        }
        if (!isNumber && isSelectPostfix) {
          this._changePostfixTime();
          break;
        }
        this._handleSetTimeValueOnInput(key);
        break;
    }
  }

  private _handleKeyTab() {
    const { isSelectHours, isSelectMinutes } = this._getSelectionTimeValue();
    if (isSelectHours) {
      this._inputEl.setSelectionRange(3, 5);
    }
    if (this.hour12 && isSelectMinutes) {
      this._inputEl.setSelectionRange(6, 8);
    }
    this._closeListBox();
  }

  private _changePostfixTime() {
    const oldValue = this._timeValue;
    const { hours, minutes, postfix } = this._separateTime(this._timeValue);
    const newPostfix = postfix === "AM" ? "PM" : "AM";

    this._timeValue = hours + ":" + minutes + " " + newPostfix;
    this._setTimeValueOnInput(this._timeValue, 6, 8);
    this._handleDispatchEventTimeChange(this._timeValue, oldValue);
  }

  private _handleKeyUpDown(type: number, oldValue: string) {
    const { isSelectMinutes, isSelectPostfix } = this._getSelectionTimeValue();
    if (isSelectPostfix) {
      this._changePostfixTime();
      return;
    }
    if (isSelectMinutes) {
      this._changeMinutesBy(type);
    } else {
      this._changeHoursBy(type);
    }
    this._handleDispatchEventTimeChange(this._timeValue, oldValue);
    this._closeListBox();
  }

  private _changeMinutesBy(minutesChange: number) {
    let newMinutes;
    const { hours, minutes, postfix } = this._separateTime(this._timeValue);
    const currentMinute = parseInt(minutes, 10);
    if (!this._timeValue) return;
    if (minutesChange > 0) {
      newMinutes = currentMinute === 59 ? 0 : currentMinute + minutesChange;
    } else {
      newMinutes = currentMinute === 0 ? 59 : currentMinute + minutesChange;
    }
    const timeTemp = hours + ":" + newMinutes;
    this._timeValue = this._addZeroToTime(timeTemp, postfix || "");
    this._setTimeValueOnInput(this._timeValue, 3, 5);
  }

  private _changeHoursBy(hoursChange: number) {
    if (!this._timeValue) return;
    let newHours;
    const { hours, minutes, postfix } = this._separateTime(this._timeValue);
    const currentHour = parseInt(hours, 10);
    if (hoursChange > 0) {
      if (this.hour12) {
        newHours = currentHour >= 11 ? 0 : currentHour + hoursChange;
      } else {
        newHours = currentHour >= 23 ? 0 : currentHour + hoursChange;
      }
    } else if (this.hour12) {
      newHours = currentHour === 0 ? 11 : currentHour + hoursChange;
    } else {
      newHours = currentHour === 0 ? 23 : currentHour + hoursChange;
    }
    const timeTemp = newHours + ":" + minutes;
    this._timeValue = this._addZeroToTime(timeTemp, postfix || "");
    this._setTimeValueOnInput(this._timeValue, 0, 2);
  }

  private _setTimeValueOnInput(
    value: string,
    selectionStart: number,
    selectionEnd: number
  ) {
    this._inputEl.value = value;
    this._inputEl.dataset.previousValidTime = value;
    this._inputEl.setSelectionRange(selectionStart, selectionEnd);
  }

  private _handleSetTimeValueOnInput(key: string) {
    const oldValue = this._timeValue;
    const { isSelectHours, isSelectMinutes } = this._getSelectionTimeValue();
    const { hours, minutes, postfix } = this._separateTime(this._timeValue);
    let newTime = this._inputEl.value;

    if (!this._timeValue) return;
    if (!newTime) {
      newTime = "";
    }
    if (isSelectMinutes) {
      const previousMinutes = this._getPreviousMinutes(minutes);
      const tempTime = hours + ":" + previousMinutes + key;
      newTime = this._addZeroToTime(tempTime, postfix || "");
      this._setTimeValueOnInput(newTime, 3, 5);
    } else if (isSelectHours) {
      const previousHours = this._getPreviousHours(hours, key);
      const tempTime = parseInt(previousHours, 10) + key + ":" + minutes;
      newTime = this._addZeroToTime(tempTime, postfix || "");
      this._setTimeValueOnInput(newTime, 0, 2);
    }
    this._timeValue = newTime;
    this._handleDispatchEventTimeChange(this._timeValue, oldValue);
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
    if (this.hour12) {
      if (parseInt(previousHours + key, 10) > 11) {
        previousHours = "0";
      }
    } else if (parseInt(previousHours + key, 10) > 23) {
      previousHours = "0";
    }
    return previousHours;
  }

  private _separateTime(time: string) {
    const indexColon = time.indexOf(":");
    const hours = time.substring(0, indexColon);
    const minutes = time.substring(indexColon + 1, indexColon + 3);
    const postfix = time.substring(indexColon + 4, indexColon + 6);

    return { hours, minutes, postfix, indexColon };
  }

  private _getSelectionTimeValue() {
    const start = this._inputEl.selectionStart;
    const end = this._inputEl.selectionEnd;
    const isSelectHours = start === 0 && end === 2;
    const isSelectMinutes = start === 3 && end === 5;
    const isSelectPostfix = start === 6 && end === 8;

    return { isSelectHours, isSelectMinutes, isSelectPostfix };
  }

  private _addZeroToTime(value: string, postfix: string = "") {
    let { hours, minutes } = this._separateTime(value);
    if (parseInt(hours, 10) < 10) {
      hours = "0" + parseInt(hours, 10);
    }
    if (parseInt(minutes, 10) < 10) {
      minutes = "0" + parseInt(minutes, 10);
    }
    return hours + ":" + minutes + (postfix ? " " + postfix : "");
  }

  private _handleDispatchEventTimeChange(value: string, oldValue: string) {
    const detail: CustomEventDetail = {
      value: value,
      oldValue: oldValue
    };
    dispatchCustomEvent(this, "kuc:date-time-change", detail);
  }

  private _openListBox() {
    this._inputEl.focus();
    this._listBoxVisible = true;
  }

  private _closeListBox() {
    this._listBoxVisible = false;
    this._removeActiveDescendant(this._inputEl);
  }

  private _getTimeOptions(hour12 = false) {
    if (hour12) return timeList12H;
    return timeList24H;
  }

  private _removeActiveDescendant(_inputEl: HTMLInputElement) {
    _inputEl.removeAttribute("aria-activedescendant");
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        .kuc-base-time__input__toggle {
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
        .kuc-base-time__input__toggle:focus {
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
