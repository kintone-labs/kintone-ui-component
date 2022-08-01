import { html, PropertyValues } from "lit";
import { property, state, query } from "lit/decorators.js";
import {
  KucBase,
  CustomEventDetail,
  dispatchCustomEvent,
  createStyleOnHeader,
} from "../../kuc-base";
import { validateProps, validateTimeValue } from "../../validator";
import {
  generateMinuteOptions,
  generateHourOptions,
  formatInputValueToTimeValue,
  formatTimeValueToInputValueForMobile,
  getLocale,
} from "../../datetime/utils";
import { BASE_MOBILE_TIME_CSS } from "./style";

type BaseMobileTimeSelectItem = {
  label?: string;
  value?: string;
};

type BaseMobileTimeProps = {
  guid?: string;
  language?: string;
  value?: string;
  disabled?: boolean;
  hour12?: boolean;
  required?: boolean;
};

type Time = {
  hours: string;
  minutes: string;
  suffix?: string;
};

// eslint-disable-next-line kuc-v1/no-using-generate-guid-function
export class BaseMobileTime extends KucBase {
  @property({ type: String }) guid = "";
  @property({ type: String, reflect: true }) language = "en";
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) hour12 = false;
  @property({ type: Boolean }) required = false;
  /**
   * Please consider name again and change @state to @property when publishing the function.
   */
  @state()
  private _timeStep = 1;

  @state()
  private _hours = "";

  @state()
  private _minutes = "";

  @state()
  private _suffix = "";

  @state()
  private _hourOptions!: BaseMobileTimeSelectItem[];

  @state()
  private _minuteOptions!: BaseMobileTimeSelectItem[];

  @query(".kuc-base-mobile-time__group__hours")
  private _hoursEl!: HTMLSelectElement;

  @query(".kuc-base-mobile-time__group__minutes")
  private _minutesEl!: HTMLInputElement;

  private _locale = getLocale("en");

  constructor(props?: BaseMobileTimeProps) {
    super();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("language")) {
      this._locale = getLocale(this.language);
    }
    if (changedProperties.has("hour12")) {
      this._hourOptions = generateHourOptions(this.hour12);
    }
    if (changedProperties.has("_timeStep")) {
      this._minuteOptions = generateMinuteOptions(this._timeStep);
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      <fieldset
        class="kuc-base-mobile-time__group${this.disabled
          ? " kuc-base-mobile-time__group--disabled"
          : ""}${this.required ? " kuc-base-mobile-time__group--required" : ""}"
        aria-label="label-text"
      >
        <select
          class="kuc-base-mobile-time__group__hours"
          aria-label="Hour"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeHours}"
        >
          <option value selected></option>
          ${this._getOptionsHourTemplate()}
        </select>
        <span class="kuc-base-mobile-time__group__colon">:</span>
        <select
          class="kuc-base-mobile-time__group__minutes"
          aria-label="Minute"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeMinutes}"
        >
          <option value selected></option>
          ${this._getOptionsMinuteTemplate()}
        </select>
      </fieldset>
    `;
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has("value")) {
      this._updateInputValue();
    }
    super.update(changedProperties);
  }

  private _updateInputValue() {
    const times = formatTimeValueToInputValueForMobile(this.value, this.hour12);
    this._hours = times.hours;
    this._minutes = times.minutes;
    this._suffix = times.suffix || "";
    this._setValueToInput(times);
  }

  private _setValueToInput(times: Time) {
    this._minutesEl.value = times.minutes;
    if (times.suffix) {
      this._hoursEl.value = times.suffix + " " + times.hours;
      return;
    }
    this._hoursEl.value = times.hours;
  }

  private _handleChangeMinutes(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const oldTime = this._getTimeValueString();

    const target = event.target as HTMLOptionElement;
    const minutes = target.value;
    this._minutes = minutes;
    const newTime = this._getTimeValueString();
    this.value = newTime;
    this._dispatchEventTimeChange(newTime, oldTime);
  }

  private _handleChangeHours(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const oldTime = this._getTimeValueString();
    const target = event.target as HTMLOptionElement;
    const values = target.value.split(" ");
    if (values.length === 2) {
      this._hours = values[1];
      this._suffix = values[0];
    } else {
      this._hours = values[0];
      this._suffix = "";
    }
    const newTime = this._getTimeValueString();
    this.value = newTime;
    this._dispatchEventTimeChange(newTime, oldTime);
  }

  private _getTimeValueString() {
    const time = `${this._hours}:${this._minutes}`;

    if (this._suffix)
      return formatInputValueToTimeValue(`${time} ${this._suffix}`);

    return formatInputValueToTimeValue(time);
  }

  private _dispatchEventTimeChange(value: string, oldValue: string) {
    const tempValue = value === ":" ? "" : value;
    const tempOldValue = oldValue === ":" ? "" : oldValue;
    const detail: CustomEventDetail = {
      value: tempValue,
      oldValue: tempOldValue,
    };
    detail.error = validateTimeValue(tempValue)
      ? ""
      : this._locale.INVALID_TIME_FORMAT;

    dispatchCustomEvent(this, "kuc:base-mobile-time-change", detail);
  }

  private _getOptionsMinuteTemplate() {
    return this._minuteOptions.map(
      (min) => html` <option value="${min.value}">${min.label}</option> `
    );
  }

  private _getOptionsHourTemplate() {
    return this._hourOptions.map(
      (hour) => html` <option value="${hour.value}">${hour.label}</option> `
    );
  }
}
if (!window.customElements.get("kuc-base-mobile-time")) {
  createStyleOnHeader(BASE_MOBILE_TIME_CSS);
  window.customElements.define("kuc-base-mobile-time", BaseMobileTime);
}
