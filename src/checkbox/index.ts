import { html, PropertyValues, svg } from "lit";
import { property, queryAll, state } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail
} from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";

type Item = { value?: string; label?: string };
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
  selectedIndexes?: number[];
};

export class Checkbox extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) error = "";
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
    converter: visiblePropConverter
  })
  visible = true;
  @property({ type: Array }) items: Item[] = [];
  @property({ type: Array }) value: string[] = [];
  @property({ type: Array }) selectedIndexes: number[] = [];

  @queryAll(".kuc-checkbox__group__select-menu__item__input")
  private _inputEls!: HTMLInputElement[];
  private _GUID: string;

  @state()
  private _valueMapping: any = {};

  constructor(props?: CheckboxProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("items")) this._validateItems();
    if (changedProperties.has("value")) {
      this._validateValues();
      this._valueMapping = this._getValueMapping();
    }
    if (changedProperties.has("selectedIndexes")) {
      this._valueMapping = this._getValueMapping();
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
          <span
            id="${this._GUID}-group"
            class="kuc-checkbox__group__label__text"
            >${this.label}</span
          ><!--
          --><span
            class="kuc-checkbox__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </div>
        <div
          class="kuc-checkbox__group__select-menu"
          ?borderVisible="${this.borderVisible}"
          itemLayout="${this.itemLayout}"
        >
          ${this.items.map((item, index) => this._getItemTemplate(item, index))}
        </div>
        <div
          class="kuc-checkbox__group__error"
          id="${this._GUID}-error"
          role="alert"
          aria-live="assertive"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </div>
    `;
  }

  updated() {
    this._inputEls.forEach((inputEl: HTMLInputElement, index: number) => {
      inputEl.checked = this._isCheckedItem(inputEl.value, index);
    });
  }

  private _getValueMapping() {
    const listValues = this.items.map(item => item.value);
    const itemsMapping = Object.assign({}, listValues);

    const valueMapping: any = {};
    const validValue = this.value.filter(item => listValues.indexOf(item) > -1);
    for (let i = 0; i < validValue.length; i++) {
      const indexValue = listValues.indexOf(validValue[i]);
      if (itemsMapping[this.selectedIndexes[i]] === validValue[i]) {
        valueMapping[this.selectedIndexes[i]] = validValue[i];
        continue;
      }
      valueMapping[indexValue] = validValue[i];
    }
    return valueMapping;
  }

  private _handleChangeInput(event: MouseEvent | KeyboardEvent) {
    event.stopPropagation();
    const selectedIndex = (event.target as HTMLInputElement).getAttribute(
      "selected-index"
    );
    if (selectedIndex === null) return;

    const inputEl = event.target as HTMLInputElement;
    const inputvalue = inputEl.value;
    const oldValue = this.value;
    const newValueMapping = this._getNewValueMapping(inputvalue, selectedIndex);
    const newValue: string[] = Object.values(newValueMapping);
    const newSelectedIndexes = Object.keys(
      newValueMapping
    ).map((item: string) => parseInt(item, 10));

    this.value = newValue;
    this.selectedIndexes = newSelectedIndexes;
    const detail: CustomEventDetail = { value: newValue, oldValue: oldValue };
    dispatchCustomEvent(this, "change", detail);
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

  private _isCheckedItem(value: string, index: number) {
    const values = Object.values(this._valueMapping);
    const keys = Object.keys(this._valueMapping);
    const result = values.filter(
      (val, indexVal) => val === value && index === parseInt(keys[indexVal], 10)
    );
    return result.length > 0;
  }

  private _getItemTemplate(item: Item, index: number) {
    return html`
      <div
        class="kuc-checkbox__group__select-menu__item"
        itemLayout="${this.itemLayout}"
      >
        <input
          type="checkbox"
          aria-describedby="${this._GUID}-error"
          aria-required="${this.requiredIcon}"
          selected-index="${index}"
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
            this._isCheckedItem(item.value || "", index)
          )}${item.label === undefined ? item.value : item.label}
        </label>
      </div>
    `;
  }

  private _getCheckboxIconSvgTemplate(disabled: boolean, checked: boolean) {
    return svg`
    <svg
      class="kuc-checkbox__group__select-menu__item__label__icon"
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1'
        y='1'
        width='19'
        height='19'
        rx='1'
        fill='white'
        stroke='${this._getSVGStrokeValue(disabled, checked)}'
        stroke-width='2'/>
      ${
        checked
          ? svg`<path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z'
            fill='${disabled ? "#d8d8d8" : "#3498db"}'/>`
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

  private _validateItems() {
    if (!Array.isArray(this.items)) {
      throw new Error("'items' property is not array");
    }
  }

  private _validateValues() {
    if (!Array.isArray(this.value)) {
      throw new Error("'value' property is not array");
    }
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
        .kuc-checkbox__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-checkbox__group__label__required-icon[hidden] {
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
        .kuc-checkbox__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0;
          word-break: break-all;
          white-space: normal;
        }
        .kuc-checkbox__group__error[hidden] {
          display: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-checkbox")) {
  window.customElements.define("kuc-checkbox", Checkbox);
}
