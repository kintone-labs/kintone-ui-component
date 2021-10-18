import { html, property, query, PropertyValues, state } from "lit-element";
import {
  KucBase,
  generateGUID,
  CustomEventDetail,
  dispatchCustomEvent
} from "../kuc-base";
import { BaseDateTimeListBox, Item } from "../datetime/listbox";

type selectionItem = {
  start: number;
  end: number;
};
export class BaseDateTime extends KucBase {
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) hour12 = false;
  @property({ type: Boolean }) visible = false;
  @property({ type: String }) value = "";
  @property({ type: Number }) timeStep = 30;

  @state()
  private _listBoxVisible = false;
  @state()
  private _timeValue = "5:00";

  private _GUID = generateGUID();
  private _listBoxItems: Item[] | undefined;
  private _maxHour12 = 12;
  private _maxHour24 = 24;
  private _maxMinutes = 60;
  private _isHighlightItemListbox = false;
  private selectionRange = {
    hours: {
      start: 0,
      end: 2
    },
    minutes: {
      start: 3,
      end: 5
    },
    suffix: {
      start: 6,
      end: 8
    }
  };

  @query(".kuc-base-time__input")
  private _inputEl!: HTMLInputElement;

  @query(".kuc-base-time__listbox")
  private _listBoxEl!: BaseDateTimeListBox;

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("value")) {
      const { hours, minutes } = this._separateTime(this.value);
      const time = this._getValidTime(hours, minutes);
      this._timeValue = this._getValidTimeLabel(time);
    }
    if (changedProperties.has("hour12") || changedProperties.has("timeStep")) {
      this._listBoxItems = this._generateTimeOptions(
        this.hour12,
        this.timeStep
      );
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <input
        type="text"
        class="kuc-base-time__input"
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
        .isHighlightItem="${this._isHighlightItemListbox}"
        class="kuc-base-time__listbox"
        @kuc:calendar-listbox-click="${this._handleChangeListBox}"
        aria-hidden="${!this._listBoxVisible}"
        ?hidden="${!this._listBoxVisible}"
      >
      </kuc-base-datetime-listbox>
    `;
  }

  private _generateTimeOptions(isHour12: boolean, timeStep: number = 30) {
    const timeOptions = [];
    let hours, minutes, ampm;
    const limitLoop = (this._maxMinutes / timeStep) * 24;
    for (let i = 0; i <= timeStep * limitLoop - 1; i += timeStep) {
      hours = Math.floor(i / this._maxMinutes);
      minutes = i % this._maxMinutes;
      ampm = hours % this._maxHour24 < this._maxHour12 ? "AM" : "PM";
      hours = isHour12 ? hours % this._maxHour12 : hours % this._maxHour24;
      if (hours === 0 && isHour12) {
        hours = this._maxHour12;
      }
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      const timeItem: Item = {
        label: hours + ":" + minutes + (isHour12 ? " " + ampm : ""),
        value: hours + ":" + minutes
      };
      timeOptions.push(timeItem);
    }
    return timeOptions;
  }

  private _getValidTime(hours: string, minutes: string) {
    const time = new Date();
    time.setHours(parseInt(hours, 10));
    time.setMinutes(parseInt(minutes, 10));
    return time;
  }

  private _getValidTimeLabel(time: Date) {
    const hour = time.getHours();
    let suffix: string = "";
    let tempTime: string;
    if (this.hour12) {
      suffix = hour >= this._maxHour12 ? "PM" : "AM";
      tempTime = (time.getHours() % this._maxHour12) + ":" + time.getMinutes();
    } else {
      tempTime = (time.getHours() % this._maxHour24) + ":" + time.getMinutes();
    }
    return this._addZeroToTime(tempTime, suffix);
  }

  private _handleClickTime() {
    this._openListBox();
    const start = this._inputEl.selectionStart;
    if (start === null) return;
    if (start <= this.selectionRange.hours.start) {
      this._inputEl.setSelectionRange(
        this.selectionRange.hours.start,
        this.selectionRange.hours.end
      );
      return;
    }
    if (
      start >= this.selectionRange.minutes.start &&
      start <= this.selectionRange.minutes.end
    ) {
      this._inputEl.setSelectionRange(
        this.selectionRange.minutes.start,
        this.selectionRange.minutes.end
      );
      return;
    }
    this._inputEl.setSelectionRange(
      this.selectionRange.suffix.start,
      this.selectionRange.suffix.end
    );
  }

  private _handleFocusTime(event: Event) {
    setTimeout(() => {
      this._inputEl.setSelectionRange(
        this.selectionRange.hours.start,
        this.selectionRange.hours.end
      );
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
    const { suffix } = this._separateTime(listboxVal);

    this._timeValue = this._addZeroToTime(listboxVal, suffix || "");
    this._inputEl.blur();
    this._inputEl.value = this._timeValue;
    this._handleDispatchEventTimeChange(this._timeValue, oldValue);
  }

  private _handleKeyDownTime(event: KeyboardEvent) {
    event.preventDefault();
    const selectionStart = this._inputEl.selectionStart;
    const { isSelectSuffix } = this._getSelectionTimeValue();
    const keyCode = event.key;
    const isNumber = /^[0-9]$/i.test(keyCode);
    switch (keyCode) {
      case "Enter":
      case "Tab":
        this._handleKeyTab();
        break;
      case "ArrowLeft":
      case "Left":
        this._closeListBox();
        if (selectionStart === null || selectionStart <= 0) break;
        if (
          selectionStart >= this.selectionRange.minutes.start &&
          selectionStart <= this.selectionRange.minutes.end
        ) {
          this._inputEl.setSelectionRange(
            this.selectionRange.hours.start,
            this.selectionRange.hours.end
          );
          break;
        }
        this._inputEl.setSelectionRange(
          this.selectionRange.minutes.start,
          this.selectionRange.minutes.end
        );
        break;
      case "ArrowRight":
      case "Right":
        this._closeListBox();
        if (selectionStart === null || selectionStart > this._timeValue.length)
          break;
        if (
          selectionStart >= this.selectionRange.hours.start &&
          selectionStart <= this.selectionRange.hours.end
        ) {
          this._inputEl.setSelectionRange(
            this.selectionRange.minutes.start,
            this.selectionRange.minutes.end
          );
          break;
        }
        this._inputEl.setSelectionRange(
          this.selectionRange.suffix.start,
          this.selectionRange.suffix.end
        );
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
        if (isNumber && !isSelectSuffix) {
          this._handleSetTimeValueOnInput(keyCode);
          break;
        }
        if (isSelectSuffix) {
          this._changeSuffixTime();
        }
        break;
    }
  }

  private _handleKeyTab() {
    const { isSelectHours, isSelectMinutes } = this._getSelectionTimeValue();
    if (isSelectHours) {
      this._inputEl.setSelectionRange(
        this.selectionRange.minutes.start,
        this.selectionRange.minutes.end
      );
    }
    if (this.hour12 && isSelectMinutes) {
      this._inputEl.setSelectionRange(
        this.selectionRange.suffix.start,
        this.selectionRange.suffix.end
      );
    }
    this._closeListBox();
  }

  private _changeSuffixTime() {
    const oldValue = this._timeValue;
    const { hours, minutes, suffix } = this._separateTime(this._timeValue);
    const newSuffix = suffix === "AM" ? "PM" : "AM";

    this._timeValue = hours + ":" + minutes + " " + newSuffix;
    this._setTimeValueOnInput(this._timeValue, this.selectionRange.suffix);
    this._handleDispatchEventTimeChange(this._timeValue, oldValue);
  }

  private _handleKeyUpDown(type: number, oldValue: string) {
    const { isSelectMinutes, isSelectSuffix } = this._getSelectionTimeValue();
    if (isSelectSuffix) {
      this._changeSuffixTime();
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
    const { hours, minutes, suffix } = this._separateTime(this._timeValue);
    const currentMinute = parseInt(minutes, 10);
    if (!this._timeValue) return;
    if (minutesChange > 0) {
      newMinutes =
        currentMinute === this._maxMinutes - 1
          ? 0
          : currentMinute + minutesChange;
    } else {
      newMinutes =
        currentMinute === 0
          ? this._maxMinutes - 1
          : currentMinute + minutesChange;
    }
    const timeTemp = hours + ":" + newMinutes;
    this._timeValue = this._addZeroToTime(timeTemp, suffix || "");
    this._setTimeValueOnInput(this._timeValue, this.selectionRange.minutes);
  }

  private _changeHoursBy(hoursChange: number) {
    if (!this._timeValue) return;
    const { hours, minutes, suffix } = this._separateTime(this._timeValue);
    const currentHour = parseInt(hours, 10);
    let newHours = currentHour + hoursChange;
    if (this.hour12) {
      newHours %= this._maxHour12;
      newHours = newHours < 0 ? this._maxHour12 - 1 : newHours;
    } else {
      newHours %= this._maxHour24;
      newHours = newHours < 0 ? this._maxHour24 - 1 : newHours;
    }
    const timeTemp = newHours + ":" + minutes;
    this._timeValue = this._addZeroToTime(timeTemp, suffix || "");
    this._setTimeValueOnInput(this._timeValue, this.selectionRange.hours);
  }

  private _setTimeValueOnInput(value: string, selection: selectionItem) {
    this._inputEl.value = value;
    this._inputEl.dataset.previousValidTime = value;
    this._inputEl.setSelectionRange(selection.start, selection.end);
  }

  private _handleSetTimeValueOnInput(key: string) {
    const oldValue = this._timeValue;
    const { isSelectMinutes } = this._getSelectionTimeValue();
    const { hours, minutes, suffix } = this._separateTime(this._timeValue);
    let newTime = this._inputEl.value;

    if (!this._timeValue) return;
    if (!newTime) {
      newTime = "";
    }
    if (isSelectMinutes) {
      const previousMinutes = this._getPreviousMinutes(minutes);
      const tempTime = hours + ":" + previousMinutes + key;
      newTime = this._addZeroToTime(tempTime, suffix || "");
      this._setTimeValueOnInput(newTime, this.selectionRange.minutes);
    } else {
      const previousHours = this._getPreviousHours(hours, key);
      const tempTime = parseInt(previousHours, 10) + key + ":" + minutes;
      newTime = this._addZeroToTime(tempTime, suffix || "");
      this._setTimeValueOnInput(newTime, this.selectionRange.hours);
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
    const newHoursNumber = parseInt(previousHours + key, 10);
    if (
      (this.hour12 && newHoursNumber >= this._maxHour12) ||
      (!this.hour12 && newHoursNumber >= this._maxHour24)
    ) {
      previousHours = "0";
      return previousHours;
    }
    return previousHours;
  }

  private _separateTime(time: string) {
    const indexColon = time.indexOf(":");
    const hours = time.substring(0, indexColon);
    const minutes = time.substring(indexColon + 1, indexColon + 3);
    const suffix = time.substring(indexColon + 4, indexColon + 6);

    return { hours, minutes, suffix, indexColon };
  }

  private _getSelectionTimeValue() {
    const start = this._inputEl.selectionStart;
    const end = this._inputEl.selectionEnd;
    const isSelectHours =
      start === this.selectionRange.hours.start &&
      end === this.selectionRange.hours.end;
    const isSelectMinutes =
      start === this.selectionRange.minutes.start &&
      end === this.selectionRange.minutes.end;
    const isSelectSuffix =
      start === this.selectionRange.suffix.start &&
      end === this.selectionRange.suffix.end;

    return { isSelectHours, isSelectMinutes, isSelectSuffix };
  }

  private _addZeroToTime(value: string, suffix: string = "") {
    let { hours, minutes } = this._separateTime(value);
    if (parseInt(hours, 10) < 10) {
      hours = "0" + parseInt(hours, 10);
    }
    if (parseInt(minutes, 10) < 10) {
      minutes = "0" + parseInt(minutes, 10);
    }
    return hours + ":" + minutes + (suffix ? " " + suffix : "");
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

  private _removeActiveDescendant(_inputEl: HTMLInputElement) {
    _inputEl.removeAttribute("aria-activedescendant");
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
