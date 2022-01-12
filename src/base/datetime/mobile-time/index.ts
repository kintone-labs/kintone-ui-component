import { html, PropertyValues } from "lit";
import { property, state, query } from "lit/decorators.js";
import {
  KucBase,
  CustomEventDetail,
  dispatchCustomEvent
} from "../../kuc-base";
import { validateProps } from "../../validator";
import {
  generateMinuteOptions,
  generateHourOptions,
  formatTimeValueToInputValue,
  formatInputValueToTimeValue
} from "../../datetime/utils";
import { Item } from "../../datetime/listbox";

type BaseMobileTimeProps = {
  value?: string;
  disabled?: boolean;
  hour12?: boolean;
};

type Time = {
  hours: string;
  minutes: string;
  suffix?: string;
};

export class BaseMobileTime extends KucBase {
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) hour12 = false;

  @state()
  private _hours = "";

  @state()
  private _minutes = "";

  @state()
  private _suffix = "";

  @state()
  private _hourOptions!: Item[];

  @state()
  private _minuteOptions = generateMinuteOptions();

  @query(".kuc-base-mobile-time__group__hours")
  private _hoursEl!: HTMLSelectElement;

  @query(".kuc-base-mobile-time__group__minutes")
  private _minutesEl!: HTMLInputElement;

  constructor(props?: BaseMobileTimeProps) {
    super();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("hour12")) {
      this._hourOptions = generateHourOptions(this.hour12);
    }
    super.update(changedProperties);
  }

  private _updateInputValue() {
    const times = formatTimeValueToInputValue(this.value, this.hour12);
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

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <fieldset class="kuc-base-mobile-time__group">
        <select
          class="kuc-base-mobile-time__group__hours"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeHours}"
        >
          <option value selected></option>
          ${this._getOptionsHourTemplate()}
        </select>
        <span class="kuc-base-mobile-time__group__colon">:</span>
        <select
          class="kuc-base-mobile-time__group__minutes"
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

  private _handleChangeMinutes(event: Event) {
    const oldTime = this._getTimeValueString();

    const target = event.target as HTMLOptionElement;
    const minutes = target.value;
    this._minutes = minutes;
    const newTime = this._getTimeValueString();
    this._dispatchEventTimeChange(newTime, oldTime);
  }

  private _handleChangeHours(event: Event) {
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
    this._dispatchEventTimeChange(newTime, oldTime);
  }

  private _getTimeValueString() {
    const time = `${this._hours}:${this._minutes}`;

    if (this._suffix)
      return formatInputValueToTimeValue(`${time} ${this._suffix}`);

    return formatInputValueToTimeValue(time);
  }

  private _dispatchEventTimeChange(value: string, oldValue: string) {
    const detail: CustomEventDetail = {
      value: value,
      oldValue: oldValue
    };
    dispatchCustomEvent(this, "kuc:base-mobile-time-change", detail);
  }

  private _getOptionsMinuteTemplate() {
    return this._minuteOptions.map(
      min =>
        html`
          <option value="${min.value}">${min.label}</option>
        `
    );
  }

  private _getOptionsHourTemplate() {
    return this._hourOptions.map(
      hour =>
        html`
          <option value="${hour.value}">${hour.label}</option>
        `
    );
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-base-mobile-time,
        kuc-base-mobile-time * {
          font-size: 13px;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-base-mobile-time,
        :lang(zh) kuc-base-mobile-time * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        kuc-base-mobile-time {
          width: 100%;
          display: inline-block;
          vertical-align: top;
        }
        kuc-base-mobile-time[hidden] {
          display: none;
        }
        .kuc-base-mobile-time__group {
          padding: 0;
          margin: 0;
          border: 1px solid #a5a5a5;
          border-radius: 5.2px;
          box-sizing: border-box;
          background-color: #ffffff;
          display: -webkit-flex;
          display: flex;
          -webkit-align-items: center;
          align-items: center;
        }
        .kuc-base-mobile-time__group__hours {
          padding: 8px 8px 8px 10px;
        }
        .kuc-base-mobile-time__group__minutes {
          padding: 8px 10px 8px 8px;
          -webkit-flex-grow: 1;
          flex-grow: 1;
        }
        .kuc-base-mobile-time__group__hours,
        .kuc-base-mobile-time__group__minutes {
          font-size: 14px;
          border: none;
          border-radius: 5.6px;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        .kuc-base-mobile-time__group__colon {
          color: #000000;
        }
        .kuc-base-mobile-time__group__hours:disabled
          + .kuc-base-mobile-time__group__colon {
          color: #808080;
        }
        .kuc-base-mobile-time__group__hours:focus {
          outline: none;
        }
        .kuc-base-mobile-time__group__minutes:focus {
          outline: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-base-mobile-time")) {
  window.customElements.define("kuc-base-mobile-time", BaseMobileTime);
}
