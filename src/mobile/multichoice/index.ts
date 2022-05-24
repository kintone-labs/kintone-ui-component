import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail
} from "../../base/kuc-base";
import { visiblePropConverter } from "../../base/converter";
import {
  validateProps,
  validateItems,
  validateValueArray,
  validateSelectedIndexArray,
  throwErrorAfterUpdateComplete
} from "../../base/validator";
import { ERROR_MESSAGE } from "../../base/constant";
import { BaseMobileLabel } from "../../base/mobile-label";
import { BaseMobileError } from "../../base/mobile-error";
export { BaseMobileLabel, BaseMobileError };

type Item = {
  label?: string;
  value?: string;
};

type MobileMultiChoiceProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: Item[];
  value?: string[];
  selectedIndex?: number[];
};

type ValueMapping = {
  [key: number]: string;
};

export class MobileMultiChoice extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String }) error = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) label = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter
  })
  visible = true;
  @property({ type: Array }) items: Item[] = [];
  @property({ type: Array }) selectedIndex: number[] = [];
  @property({ type: Array }) value: string[] = [];

  @state()
  private _valueMapping: ValueMapping = {};

  private _GUID: string;

  constructor(props?: MobileMultiChoiceProps) {
    super();
    this._GUID = generateGUID();

    const validProps = validateProps(props);
    this._setInitialValue(validProps);
    Object.assign(this, validProps);
  }

  private _setInitialValue(validProps: MobileMultiChoiceProps) {
    const hasValue = "value" in validProps;
    const hasSelectedIndex = "selectedIndex" in validProps;
    const _selectedIndex = validProps.selectedIndex || [];
    if (!hasValue && hasSelectedIndex) {
      if (!validateSelectedIndexArray(_selectedIndex)) return;

      const _valueMapping = this._getValueMapping(validProps);
      this.value = this._getValidValue(_valueMapping, _selectedIndex);
    }
  }

  private _handleChangeInput(event: Event) {
    event.stopPropagation();
    const selectEl = event.target as HTMLSelectElement;

    const oldValue = !this.value ? this.value : [...this.value];
    const newValue = Array.from(
      selectEl.selectedOptions,
      option => option.value
    );
    const newSelectedIndex = Array.from(
      selectEl.selectedOptions,
      option => option.dataset.index
    );
    const detail: CustomEventDetail = { value: newValue, oldValue: oldValue };
    this.value = newValue;
    this.selectedIndex = newSelectedIndex.map(item =>
      item ? parseInt(item, 10) : 0
    );
    dispatchCustomEvent(this, "change", detail);
  }

  shouldUpdate(changedProperties: PropertyValues): boolean {
    if (changedProperties.has("items")) {
      if (!validateItems(this.items)) {
        throwErrorAfterUpdateComplete(this, ERROR_MESSAGE.ITEMS.IS_NOT_ARRAY);
        return false;
      }
    }

    if (changedProperties.has("value")) {
      if (!validateValueArray(this.value)) {
        throwErrorAfterUpdateComplete(this, ERROR_MESSAGE.VALUE.IS_NOT_ARRAY);
        return false;
      }
    }

    if (changedProperties.has("selectedIndex")) {
      if (!validateSelectedIndexArray(this.selectedIndex)) {
        throwErrorAfterUpdateComplete(
          this,
          ERROR_MESSAGE.SELECTED_INDEX.IS_NOT_ARRAY
        );
        return false;
      }
    }
    return true;
  }

  willUpdate(changedProperties: PropertyValues): void {
    if (changedProperties.has("value")) {
      if (this.value.length > 0) return;

      this.selectedIndex = [];
    }
  }

  update(changedProperties: PropertyValues) {
    if (
      changedProperties.has("items") ||
      changedProperties.has("value") ||
      changedProperties.has("selectedIndex")
    ) {
      this._valueMapping = this._getValueMapping({
        items: this.items,
        value: this.value,
        selectedIndex: this.selectedIndex
      });
      this._setValueAndSelectedIndex();
    }
    super.update(changedProperties);
  }

  private _getValueMapping(validProps: MobileMultiChoiceProps) {
    const _items = validProps.items || [];
    const _value = validProps.value || [];
    const _selectedIndex = validProps.selectedIndex || [];

    const itemsValue = _items.map(item => item.value || "");
    const itemsMapping = Object.assign({}, itemsValue);
    const result: ValueMapping = {};
    if (_value.length === 0) {
      const value = this._getValidValue(itemsMapping, _selectedIndex);
      _selectedIndex.forEach((key, i) => (result[key] = value[i]));
      return result;
    }
    const validSelectedIndex = this._getValidSelectedIndex(itemsMapping);
    validSelectedIndex.forEach((key, i) => (result[key] = _value[i]));
    return result;
  }

  private _getValidValue(itemsMapping: ValueMapping, _selectedIndex: number[]) {
    return _selectedIndex
      .filter(item => itemsMapping[item])
      .map(item => itemsMapping[item]);
  }

  private _getValidSelectedIndex(itemsMapping: ValueMapping) {
    const validSelectedIndex: number[] = [];
    for (let i = 0; i < this.value.length; i++) {
      const selectedIndex = this.selectedIndex[i];
      if (itemsMapping[selectedIndex] === this.value[i]) {
        validSelectedIndex.push(selectedIndex);
        continue;
      }
      const firstIndex = this.items.findIndex(
        item => item.value === this.value[i]
      );
      validSelectedIndex.push(firstIndex);
    }

    return validSelectedIndex;
  }

  private _setValueAndSelectedIndex() {
    this.value = Object.values(this._valueMapping);
    this.selectedIndex = Object.keys(this._valueMapping).map(key =>
      parseInt(key, 10)
    );
  }

  private _isCheckedItem(item: Item, index: number) {
    const values = Object.values(this._valueMapping);
    const keys = Object.keys(this._valueMapping);
    const result = values.filter(
      (val, indexVal) =>
        val === item.value && index === parseInt(keys[indexVal], 10)
    );
    return result.length > 0;
  }

  private _getItemTemplate(item: Item, index: number) {
    const isCheckedItem = this._isCheckedItem(item, index);
    return html`
      <option
        value="${item.value || ""}"
        data-index="${index}"
        ?selected="${item.value !== undefined ? isCheckedItem : false}"
      >
        ${item.label === undefined ? item.value : item.label}
      </option>
    `;
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <label
        class="kuc-mobile-multi-choice__label"
        for="${this._GUID}-label"
        ?hidden="${!this.label}"
      >
        <kuc-base-mobile-label
          .text="${this.label}"
          .requiredIcon="${this.requiredIcon}"
        ></kuc-base-mobile-label>
      </label>
      <div class="kuc-mobile-multi-choice__input-form">
        <div
          class="kuc-mobile-multi-choice__input-form__select
          ${this.requiredIcon ? "kuc--required" : ""}"
        >
          <select
            class="kuc-mobile-multi-choice__input-form__select__input"
            id="${this._GUID}-label"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            aria-invalid="${this.error !== ""}"
            ?disabled="${this.disabled}"
            multiple
            @change="${this._handleChangeInput}"
          >
            ${this.items.map((item, index) =>
              this._getItemTemplate(item, index)
            )}
          </select>
        </div>
      </div>
      <kuc-base-mobile-error
        .text="${this.error}"
        .guid="${this._GUID}"
        ariaLive="assertive"
      >
      </kuc-base-mobile-error>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-mobile-multi-choice,
        kuc-mobile-multi-choice * {
          font-size: 13px;
          color: #333333;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }

        :lang(zh) kuc-mobile-multi-choice,
        :lang(zh) kuc-mobile-multi-choice * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }

        kuc-mobile-multi-choice {
          display: inline-block;
          width: 100%;
        }

        kuc-mobile-multi-choice[hidden] {
          display: none;
        }

        .kuc-mobile-multi-choice__label {
          display: inline-block;
          font-size: 86%;
          font-weight: bold;
          line-height: 1.5;
          padding: 0px;
          margin: 0 0 4px 0;
          white-space: nowrap;
        }

        .kuc-mobile-multi-choice__label[hidden] {
          display: none;
        }

        .kuc-mobile-multi-choice__input-form {
          word-wrap: break-word;
          min-height: 1em;
          padding-left: 0.5em;
          padding-right: 0.5em;
        }

        .kuc-mobile-multi-choice__input-form__select {
          display: inline-block;
          border-radius: 0.4em;
          max-width: 100%;
        }

        .kuc-mobile-multi-choice__input-form__select.kuc--required {
          border: 1px solid #cf4a38;
        }

        .kuc-mobile-multi-choice__input-form__select__input {
          min-width: 100px;
          max-width: 100%;
        }

        .kuc-mobile-multi-choice__input-form__select__input:disabled {
          color: #999999;
          -webkit-text-fill-color: #999999;
          background-color: #d5d7d9;
          opacity: 1;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-mobile-multi-choice")) {
  window.customElements.define("kuc-mobile-multi-choice", MobileMultiChoice);
}
