import { html, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import {
  KucBase,
  CustomEventDetail,
  dispatchCustomEvent
} from "../../kuc-base";
import { BaseDateTimeListBox } from "../listbox";
import {
  MAX_MINUTES,
  MAX_HOURS12,
  MAX_HOURS24,
  TIME_SUFFIX
} from "../resource/constant";
import { padStart } from "../utils";

export { BaseDateTimeListBox };
export class BaseDateTime extends KucBase {
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
  private _hours = "";

  @state()
  private _minutes = "";

  @state()
  private _suffix = "";

  private _timeLength = 2;

  @query(".kuc-base-time__group__fieldset__hours")
  private _hoursEl!: HTMLInputElement;

  @query(".kuc-base-time__group__fieldset__minutes")
  private _minutesEl!: HTMLInputElement;

  @query(".kuc-base-time__group__fieldset__suffix")
  private _suffixEl!: HTMLInputElement;

  @query(".kuc-base-time__group__fieldset")
  private _fieldsetEl!: HTMLInputElement;

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("hour12")) {
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
        <fieldset class="kuc-base-time__group__fieldset">
          <input
            type="text"
            class="kuc-base-time__group__fieldset__hours"
            role="spinbutton"
            aria-label="hours"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
            @keydown="${this._handleKeyDownInput}"
            value="${this._hours}"
          />
          <span class="kuc-base-time__group__fieldset__colon">:</span>
          <input
            type="text"
            class="kuc-base-time__group__fieldset__minutes"
            role="spinbutton"
            aria-label="minutes"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
            @keydown="${this._handleKeyDownInput}"
            value="${this._minutes}"
          />
          ${this.hour12
            ? html`
                <input
                  class="kuc-base-time__group__fieldset__suffix"
                  role="spinbutton"
                  aria-label="suffix"
                  @focus="${this._handleFocusInput}"
                  @blur="${this._handleBlurInput}"
                  @keydown="${this._handleKeyDownInput}"
                  value="${this._suffix}"
                />
              `
            : ""}
        </fieldset>
      </div>
    `;
  }

  private _updateInputValue() {
    const regexHour12 = /^(0?[1-9]|1[0-2]):([0-5]\d)\s((?:[A|a]|[P|p])\.?[M|m]\.?)$/gm;
    const regexHour24 = /^(2[0-3]|[01]?[0-9]):([0-5][0-9])$/;
    if (
      (!this.hour12 && !regexHour24.test(this.value)) ||
      (this.hour12 && !regexHour12.test(this.value))
    )
      return;
    const { hours, minutes, suffix } = this._separateInputValue(this.value);
    this._hours = hours;
    this._minutes = minutes;
    this._suffix = suffix || this._suffix;
  }

  private _handleBlurInput(event: Event) {
    this._fieldsetEl.classList.remove("kuc-base-time__group__fieldset--focus");
  }

  private _handleFocusInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this._fieldsetEl.classList.add("kuc-base-time__group__fieldset--focus");
    input.setSelectionRange(0, 2);
  }

  private _handleKeyDownInput(event: KeyboardEvent) {
    if (this._handleTabKey(event)) return;
    this._handleSupportedKey(event);
  }

  private _handleTabKey(event: KeyboardEvent) {
    if (event.key === "Tab") return true;
    return false;
  }

  private _handleSupportedKey(event: KeyboardEvent) {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    const range = input.getAttribute("aria-label") || "";
    const keyCode = event.key;
    let newValue;
    switch (keyCode) {
      case "Enter":
      case "ArrowRight":
        this._actionSelectNextRange(range, event);
        break;
      case "ArrowLeft":
        this._actionSelectPreviousRange(range, event);
        break;
      case "ArrowUp":
        newValue = this._computeArrowUpDownValue(range, 1);
        this._actionUpdateInputValue(newValue, input);
        break;
      case "ArrowDown":
        newValue = this._computeArrowUpDownValue(range, -1);
        this._actionUpdateInputValue(newValue, input);
        break;
      default:
        newValue = this._computeDefaultKeyValue(range, keyCode);
        this._actionUpdateInputValue(newValue, input);
        break;
    }
  }

  private _actionUpdateInputValue(newValue: string, input: HTMLInputElement) {
    const oldValue = this._formatKeyDownValue();
    if (oldValue === newValue) return;
    const { hours, minutes, suffix } = this._separateInputValue(newValue);
    if (this.hour12) {
      this._suffix = this._suffixEl.value = suffix;
    }
    this._hours = this._hoursEl.value = hours;
    this._minutes = this._minutesEl.value = minutes;
    this.value = newValue;
    input.setSelectionRange(0, 2);
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

  private _computeDefaultKeyValue(range: string, key: string) {
    const isNumber = /^[0-9]$/i.test(key);
    if (isNumber) {
      return this._computeNumberKeyValue(range, key);
    }
    if (range === "suffix") {
      return this._computeKeyDownSuffixValue(key);
    }
    return this._formatKeyDownValue();
  }

  private _computeNumberKeyValue(range: string, key: string) {
    if (range === "minutes") {
      const previousMinutes = this._getPreviousMinutes(this._minutes);
      const newMinutes = padStart(previousMinutes + key);
      return this._formatKeyDownValue({ minutes: newMinutes });
    }
    if (range === "hours") {
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

  private _actionSelectNextRange(range: string, event: KeyboardEvent) {
    if (range === "hours") {
      this._minutesEl.focus();
      return;
    }
    if (this.hour12 && range === "minutes") {
      this._suffixEl.focus();
    }
  }

  private _actionSelectPreviousRange(range: string, event: KeyboardEvent) {
    if (range === "suffix") {
      this._minutesEl.focus();
      return;
    }
    if (range === "minutes") {
      this._hoursEl.focus();
    }
  }

  private _dispatchEventTimeChange(value: string, oldValue: string) {
    const detail: CustomEventDetail = {
      value: value,
      oldValue: oldValue
    };
    dispatchCustomEvent(this, "kuc:base-time-change", detail);
  }

  private _separateInputValue(time: string) {
    const indexColon = time.indexOf(":");
    const indexSpace = time.indexOf(" ");
    const hours = time.substring(0, indexColon);
    const minutes = time.substr(indexColon + 1, this._timeLength);
    const suffix =
      indexSpace !== -1 ? time.substr(indexSpace + 1, this._timeLength) : "";
    return { hours, minutes, suffix, indexColon };
  }

  private _formatKeyDownValue(
    props: {
      hours?: string;
      minutes?: string;
      suffix?: string;
    } = { hours: this._hours, minutes: this._minutes, suffix: this._suffix }
  ) {
    return `${padStart(props.hours || this._hours)}:${padStart(
      props.minutes || this._minutes
    )} ${props.suffix || this._suffix}`;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        .kuc-base-time__group {
          position: relative;
          display: inline-block;
          width: 85px;
          height: 40px;
        }
        .kuc-base-time__group__fieldset {
          display: inline-flex;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          width: 85px;
          height: 40px;
          border: solid 1px #e3e7e8;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
          box-sizing: border-box;
          padding: 0px 8px;
        }
        .kuc-base-time__group__fieldset__hours {
          border: 0px;
          padding: 0px;
          width: 2ch;
          font-size: 14px;
          outline: none;
          background-color: transparent;
          caret-color: transparent;
          user-select: none;
        }
        .kuc-base-time__group__fieldset__minutes {
          border: 0px;
          padding: 0px;
          width: 2ch;
          font-size: 14px;
          outline: none;
          background-color: transparent;
          caret-color: transparent;
          user-select: none;
        }
        .kuc-base-time__group__fieldset__colon {
          width: 4px;
          text-align: center;
        }
        .kuc-base-time__group__fieldset__suffix {
          border: 0px;
          width: 24px;
          font-size: 14px;
          outline: none;
          appearance: none;
          margin-left: 4px;
          background-color: transparent;
          caret-color: transparent;
          user-select: none;
        }
        .kuc-base-time__group__fieldset--focus {
          background-color: #e2f2fe;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-time")) {
  window.customElements.define("kuc-base-time", BaseDateTime);
}
