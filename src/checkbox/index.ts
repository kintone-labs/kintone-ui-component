import { html, PropertyValues, svg } from "lit";
import { property, queryAll, state } from "lit/decorators.js";
import { KucBase, generateGUID, dispatchCustomEvent } from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import {
  validateProps,
  validateItems,
  validateValueArray,
  validateSelectedIndexArray,
  throwErrorAfterUpdateComplete,
} from "../base/validator";
import { ERROR_MESSAGE } from "../base/constant";
import { BaseLabel } from "../base/label";
import { BaseError } from "../base/error";
export { BaseError, BaseLabel };

type Item = { label?: string; value?: string };
type CheckboxProps = {
  className?: string;
  error?: string;
  id?: string;
  itemLayout?: "horizontal" | "vertical";
  label?: string;
  borderVisible?: boolean;
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

export class Checkbox extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String }) error = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) itemLayout: "horizontal" | "vertical" =
    "horizontal";
  @property({ type: String }) label = "";
  @property({ type: Boolean }) borderVisible = true;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter,
  })
  visible = true;
  @property({ type: Array }) items: Item[] = [];
  @property({ type: Array }) selectedIndex: number[] = [];
  @property({ type: Array }) value: string[] = [];

  @queryAll(".kuc-checkbox__group__select-menu__item__input")
  private _inputEls!: HTMLInputElement[];
  private _GUID: string;

  @state()
  private _valueMapping: ValueMapping = {};

  constructor(props?: CheckboxProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    this._setInitialValue(validProps);
    Object.assign(this, validProps);
  }

  private _setInitialValue(validProps: CheckboxProps) {
    const hasValue = "value" in validProps;
    const hasSelectedIndex = "selectedIndex" in validProps;
    const _selectedIndex = validProps.selectedIndex || [];
    if (!hasValue && hasSelectedIndex) {
      if (!validateSelectedIndexArray(_selectedIndex)) return;
      const _valueMapping = this._getValueMapping(validProps);
      this.value = this._getValidValue(_valueMapping, _selectedIndex);
    }
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

  private _getNewValueMapping(value: string, selectedIndex: string) {
    const selectedIndexNumber = parseInt(selectedIndex, 10);
    const keys = Object.keys(this._valueMapping);
    const newValue = { ...this._valueMapping };
    if (keys.indexOf(selectedIndex) > -1) {
      delete newValue[selectedIndexNumber];
      return newValue;
    }
    newValue[selectedIndexNumber] = value;
    return newValue;
  }

  private _handleChangeInput(event: MouseEvent | KeyboardEvent) {
    event.stopPropagation();
    const inputEl = event.target as HTMLInputElement;
    const selectedIndex = inputEl.dataset.index || "0";
    const value = inputEl.value;

    const oldValue = !this.value ? this.value : [...this.value];
    const newValueMapping = this._getNewValueMapping(value, selectedIndex);
    const itemsValue = this.items.map((item) => item.value);
    const newValue = Object.values(newValueMapping).filter(
      (item) => itemsValue.indexOf(item) > -1
    );
    if (newValue === oldValue) return;

    const newSelectedIndex = Object.keys(newValueMapping).map((item: string) =>
      parseInt(item, 10)
    );
    this.value = newValue;
    this.selectedIndex = newSelectedIndex;
    dispatchCustomEvent(this, "change", {
      oldValue,
      value: newValue,
    });
  }

  private _handleFocusInput(event: FocusEvent) {
    const inputEl = event.target as HTMLInputElement;
    const menuEl = inputEl.parentNode as HTMLDivElement;
    menuEl.setAttribute("focused", "");
  }

  private _handleBlurInput(event: FocusEvent) {
    const inputEl = event.target as HTMLInputElement;
    const menuEl = inputEl.parentNode as HTMLDivElement;
    menuEl.removeAttribute("focused");
  }

  private _getCheckboxIconSvgTemplate(disabled: boolean, checked: boolean) {
    return svg`
    <svg
      class="kuc-checkbox__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="19"
        height="19"
        rx="1"
        fill="white"
        stroke="${this._getSVGStrokeValue(disabled, checked)}"
        stroke-width="2"/>
      ${
        checked
          ? svg`<path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z"
            fill="${disabled ? "#d8d8d8" : "#3498db"}"/>`
          : ""
      }
    </svg>
  `;
  }

  private _getSVGStrokeValue(disabled: boolean, checked: boolean) {
    if (disabled) return "#d8d8d8";
    if (checked) return "#3498db";
    return "#d8d8d8";
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
      <div
        class="kuc-checkbox__group__select-menu__item"
        itemLayout="${this.itemLayout}"
      >
        <input
          type="checkbox"
          aria-describedby="${this._GUID}-error"
          aria-required="${this.requiredIcon}"
          data-index="${index}"
          id="${this._GUID}-item-${index}"
          class="kuc-checkbox__group__select-menu__item__input"
          name="${this._GUID}-group"
          value="${item.value !== undefined ? item.value : ""}"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeInput}"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
        />
        <label
          for="${this._GUID}-item-${index}"
          class="kuc-checkbox__group__select-menu__item__label"
          >${this._getCheckboxIconSvgTemplate(
            this.disabled,
            isCheckedItem
          )}${item.label === undefined ? item.value : item.label}
        </label>
      </div>
    `;
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
        selectedIndex: this.selectedIndex,
      });
      this._setValueAndSelectedIndex();
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div
        class="kuc-checkbox__group"
        role="group"
        aria-labelledby="${this._GUID}-group"
      >
        <div class="kuc-checkbox__group__label" ?hidden="${!this.label}">
          <kuc-base-label
            .text="${this.label}"
            .guid="${this._GUID}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-label>
        </div>
        <div
          class="kuc-checkbox__group__select-menu"
          ?borderVisible="${this.borderVisible}"
          itemLayout="${this.itemLayout}"
        >
          ${this.items.map((item, index) => this._getItemTemplate(item, index))}
        </div>
        <kuc-base-error
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        ></kuc-base-error>
      </div>
    `;
  }

  updated() {
    this._inputEls.forEach((inputEl: HTMLInputElement) => {
      inputEl.checked = this.value.indexOf(inputEl.value) > -1;
    });
  }

  private _getValueMapping(validProps: CheckboxProps) {
    const _items = validProps.items || [];
    const _value = validProps.value || [];
    const _selectedIndex = validProps.selectedIndex || [];

    const itemsValue = _items.map((item) => item.value || "");
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
      .filter((item) => itemsMapping[item])
      .map((item) => itemsMapping[item]);
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
        (item) => item.value === this.value[i]
      );
      validSelectedIndex.push(firstIndex);
    }

    return validSelectedIndex;
  }

  private _setValueAndSelectedIndex() {
    this.value = Object.values(this._valueMapping);
    this.selectedIndex = Object.keys(this._valueMapping).map((key) =>
      parseInt(key, 10)
    );
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-checkbox,
        kuc-checkbox *,
        :lang(en) kuc-checkbox,
        :lang(en) kuc-checkbox * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-checkbox,
        :lang(ja) kuc-checkbox * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-checkbox,
        :lang(zh) kuc-checkbox * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-checkbox {
          font-size: 14px;
          color: #333333;
          display: inline-table;
          vertical-align: top;
          width: 239px;
          min-width: 239px;
          line-height: 1.5;
        }
        kuc-checkbox[hidden] {
          display: none;
        }
        .kuc-checkbox__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          width: 100%;
          margin: 0px;
        }
        .kuc-checkbox__group__select-menu {
          white-space: nowrap;
        }
        .kuc-checkbox__group__label {
          display: inline-block;
          padding: 4px 0 8px 0;
          white-space: nowrap;
        }
        .kuc-checkbox__group__label[hidden] {
          display: none;
        }
        .kuc-checkbox__group__select-menu[borderVisible] {
          border-color: #e3e7e8;
          border-width: 1px;
          border-style: solid;
          padding: 4px 0 0 4px;
        }
        .kuc-checkbox__group__select-menu__item {
          margin-bottom: 4px;
          margin-right: 16px;
          padding: 4px;
          border: 1px solid transparent;
          position: relative;
          white-space: normal;
          word-wrap: normal;
          display: inline-block;
          height: 24px;
          line-height: 24px;
        }
        .kuc-checkbox__group__select-menu__item[itemLayout="vertical"] {
          display: block;
        }
        .kuc-checkbox__group__select-menu__item[focused] {
          border: 1px solid #3498db;
        }
        .kuc-checkbox__group__select-menu__item__input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }
        .kuc-checkbox__group__select-menu__item__input:hover
          + .kuc-checkbox__group__select-menu__item__label {
          color: #666666;
        }
        .kuc-checkbox__group__select-menu__item__label__icon {
          position: absolute;
          top: 50%;
          left: -30px;
          box-sizing: border-box;
          margin-top: -11px;
          width: 21px;
          height: 21px;
          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
          content: "";
        }
        .kuc-checkbox__group__select-menu__item__input[disabled]
          + .kuc-checkbox__group__select-menu__item__label {
          color: #888888;
          cursor: not-allowed;
        }
        .kuc-checkbox__group__select-menu__item__label {
          cursor: pointer;
          position: relative;
          margin-left: 32px;
          display: inline-block;
          vertical-align: middle;
          white-space: nowrap;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-checkbox")) {
  window.customElements.define("kuc-checkbox", Checkbox);
}
