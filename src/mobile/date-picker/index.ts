import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";

import {
  dateValueConverter,
  languagePropConverter,
  visiblePropConverter,
} from "../../base/converter";
import { INVALID_FORMAT_MESSAGE } from "../../base/datetime/resource/constant";
import {
  createStyleOnHeader,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
} from "../../base/kuc-base";
import {
  isValidDate,
  validateDateValue,
  validateProps,
} from "../../base/validator";

import "../../base/datetime/mobile-date";
import "../../base/mobile-label";
import "../../base/mobile-error";
import { MOBILE_DATE_PICKER_CSS } from "./style";
import {
  MobileDatePickerChangeEventDetail,
  MobileDatePickerProps,
} from "./type";

let exportMobileDatePicker;
(() => {
  exportMobileDatePicker = window.customElements.get("kuc-mobile-date-picker");
  if (exportMobileDatePicker) {
    return;
  }

  class KucMobileDatePicker extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String }) error = "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) label = "";
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) requiredIcon = false;
    @property({
      type: String,
      attribute: "lang",
      reflect: true,
      converter: languagePropConverter,
    })
    language = "auto";
    @property({ type: String }) value? = "";
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;

    private _GUID: string;
    private _dateConverted: string = "";

    @state()
    private _inputValue: string = "";

    constructor(props?: MobileDatePickerProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    protected shouldUpdate(
      _changedProperties: Map<string | number | symbol, unknown>,
    ): boolean {
      if (this.value === undefined || this.value === "") return true;

      if (!validateDateValue(this.value)) {
        this.throwErrorAfterUpdateComplete(INVALID_FORMAT_MESSAGE.VALUE);
        return false;
      }

      this._dateConverted = dateValueConverter(this.value);
      if (this._dateConverted !== "" && !isValidDate(this._dateConverted)) {
        this.throwErrorAfterUpdateComplete(INVALID_FORMAT_MESSAGE.VALUE);
        return false;
      }
      return true;
    }

    willUpdate(changedProperties: PropertyValues): void {
      if (changedProperties.has("value")) {
        if (this.value !== undefined && this.value !== "") {
          this.value = this._dateConverted;
        }
      }
    }

    update(changedProperties: PropertyValues) {
      if (changedProperties.has("value")) {
        this._updateInputValue();
      }
      super.update(changedProperties);
    }

    render() {
      return html`
        <div class="kuc-mobile-date-picker__group">
          <label
            class="kuc-mobile-date-picker__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label>
          </label>
          <kuc-mobile-base-date
            class="kuc-mobile-date-picker__group__base__date"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .inputId="${this._GUID}"
            .inputAriaInvalid="${this.error !== ""}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:mobile-base-date-change="${this._handleDateChange}"
          >
          </kuc-mobile-base-date>
          <kuc-base-mobile-error .guid="${this._GUID}" .text="${this.error}">
          </kuc-base-mobile-error>
        </div>
      `;
    }

    private _updateInputValue() {
      if (this.value === undefined || this.value === "") {
        this._inputValue = "";
        return;
      }
      this._inputValue = this.value;
    }

    private _getLanguage() {
      const langs = ["en", "ja", "zh", "zh-TW", "es"];
      if (langs.indexOf(this.language) !== -1) return this.language;
      if (langs.indexOf(document.documentElement.lang) !== -1) {
        return document.documentElement.lang;
      }
      return "en";
    }

    private _handleClickLabel(event: Event) {
      event.preventDefault();
    }

    private _handleDateChange(event: CustomEvent) {
      event.stopPropagation();
      event.preventDefault();
      const eventDetail: MobileDatePickerChangeEventDetail = {
        oldValue: this.value,
        value: "",
      };
      this.value = event.detail.value;
      eventDetail.value = this.value;
      this._dispatchChangeEvent(eventDetail);
    }

    private _dispatchChangeEvent(
      eventDetail: MobileDatePickerChangeEventDetail,
    ) {
      dispatchCustomEvent(this, "change", eventDetail);
    }
  }

  window.customElements.define("kuc-mobile-date-picker", KucMobileDatePicker);
  createStyleOnHeader(MOBILE_DATE_PICKER_CSS);
  exportMobileDatePicker = KucMobileDatePicker;
})();
const MobileDatePicker = exportMobileDatePicker as any;
export { MobileDatePicker };
