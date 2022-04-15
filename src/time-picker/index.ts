import { html, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  CustomEventDetail,
  dispatchCustomEvent
} from "../base/kuc-base";
import { visiblePropConverter, timeValueConverter } from "../base/converter";
import { getWidthElmByContext } from "../base/context";
import { FORMAT_IS_NOT_VALID } from "../base/datetime/resource/constant";
import {
  validateProps,
  validateTimeValue,
  throwErrorAfterUpdateComplete
} from "../base/validator";
import "../base/datetime/time";
import { BaseLabel } from "../base/label";
import { BaseError } from "../base/error";
export { BaseError, BaseLabel };

type TimePickerProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
  hour12?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
};

export class TimePicker extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String }) error = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) label = "";
  @property({ type: String }) value? = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) hour12 = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter
  })
  visible = true;

  @query("kuc-base-label")
  private _baseLabelEl!: BaseLabel;

  @query("kuc-base-error")
  private _baseErrorEl!: BaseError;

  private _GUID: string;
  private _inputValue? = "";

  constructor(props?: TimePickerProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  protected shouldUpdate(_changedProperties: PropertyValues): boolean {
    if (this.value === undefined || this.value === "") return true;

    if (!validateTimeValue(this.value)) {
      throwErrorAfterUpdateComplete(this, FORMAT_IS_NOT_VALID);
      return false;
    }

    return true;
  }

  willUpdate(_changedProperties: PropertyValues): void {
    if (this.value === undefined || this.value === "") return;

    this.value = timeValueConverter(this.value);
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("value")) {
      const isEmpty = this.value === undefined || this.value === "";
      this._inputValue = isEmpty ? "" : this.value;
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <fieldset
        class="kuc-time-picker__group"
        aria-describedby="${this._GUID}-error"
      >
        <legend class="kuc-time-picker__group__label" ?hidden="${!this.label}">
          <kuc-base-label
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-label>
        </legend>
        <kuc-base-time
          class="kuc-time-picker__group__input"
          .value="${this._inputValue}"
          .hour12="${this.hour12}"
          .disabled="${this.disabled}"
          @kuc:base-time-change="${this._handleTimeChange}"
        >
        </kuc-base-time>
        <kuc-base-error
          .text="${this.error}"
          .guid="${this._GUID}"
        ></kuc-base-error>
      </fieldset>
    `;
  }

  updated() {
    this._baseLabelEl.updateComplete.then(_ => {
      this._updateErrorWidth();
    });
  }

  private _updateErrorWidth() {
    const labelWidth = getWidthElmByContext(this._baseLabelEl);
    const inputGroupWitdh = 85;
    if (labelWidth > inputGroupWitdh) {
      this._baseErrorEl.style.width = labelWidth + "px";
      return;
    }
    this._baseErrorEl.style.width = inputGroupWitdh + "px";
  }

  private _handleTimeChange(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    const detail: CustomEventDetail = {
      value: event.detail.value,
      oldValue: this.value
    };
    this.value = event.detail.value;
    dispatchCustomEvent(this, "change", detail);
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-time-picker,
        kuc-time-picker *,
        :lang(en) kuc-time-picker,
        :lang(en) kuc-time-picker * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-time-picker,
        :lang(ja) kuc-time-picker * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-time-picker,
        :lang(zh) kuc-time-picker * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-time-picker {
          font-size: 14px;
          color: #333333;
          display: inline-block;
          vertical-align: top;
          line-height: 1.5;
        }
        .kuc-time-picker__group__input {
          position: relative;
        }
        kuc-time-picker[hidden] {
          display: none;
        }
        .kuc-time-picker__group {
          display: flex;
          flex-direction: column;
          border: none;
          padding: 0px;
          height: auto;
          margin: 0px;
        }
        .kuc-time-picker__group__label {
          padding: 4px 0px 8px 0px;
          display: inline-block;
          white-space: nowrap;
        }
        .kuc-time-picker__group__label[hidden] {
          display: none;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-time-picker")) {
  window.customElements.define("kuc-time-picker", TimePicker);
}
