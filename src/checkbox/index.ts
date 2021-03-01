import {
  LitElement,
  html,
  property,
  PropertyValues,
  queryAll,
  svg,
  query
} from "lit-element";
import { v4 as uuid } from "uuid";

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
};

type CustomEventDetail = {
  value?: string[];
  oldValue?: string[];
};

export class Checkbox extends LitElement {
  @property({ type: String }) error = "";
  @property({ type: String }) itemLayout: "horizontal" | "vertical" =
    "horizontal";
  @property({ type: String }) label = "";
  @property({ type: Boolean }) borderVisible = true;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({ type: Boolean }) visible = true;
  @property({ type: Array }) items: Item[] = [];
  @property({ type: Array }) value: string[] = [];

  @queryAll(".kuc-checkbox__group__select-menu__item__input")
  private _inputEls!: HTMLInputElement[];
  private _GUID: string;

  @query(".kuc-checkbox__group__label") private _labelEl!: HTMLLegendElement;
  @query(".kuc-checkbox__group__select-menu")
  private _selectMenuEl!: HTMLElement;

  constructor(props?: CheckboxProps) {
    super();
    this._GUID = this._generateGUID();
    if (!props) {
      return;
    }
    this.className =
      props.className !== undefined ? props.className : this.className;
    this.error = props.error !== undefined ? props.error : this.error;
    this.id = props.id !== undefined ? props.id : this.id;
    this.itemLayout =
      props.itemLayout !== undefined ? props.itemLayout : this.itemLayout;
    this.label = props.label !== undefined ? props.label : this.label;
    this.borderVisible =
      props.borderVisible !== undefined
        ? props.borderVisible
        : this.borderVisible;
    this.disabled =
      props.disabled !== undefined ? props.disabled : this.disabled;
    this.requiredIcon =
      props.requiredIcon !== undefined ? props.requiredIcon : this.requiredIcon;
    this.visible = props.visible !== undefined ? props.visible : this.visible;
    this.items = props.items !== undefined ? props.items : this.items;
    this.value = props.value !== undefined ? props.value : this.value;
  }

  private _generateGUID(): string {
    return uuid();
  }

  private _updateVisible() {
    if (!this.visible) {
      this.setAttribute("hidden", "");
    } else {
      this.removeAttribute("hidden");
    }
  }

  private _updateContainerWidth() {
    let width = this._labelEl.getBoundingClientRect().width;
    const selectMenuWidth = this._selectMenuEl.getBoundingClientRect().width;
    if (width < selectMenuWidth) {
      width = selectMenuWidth;
    }
    this.style.width = width + "px";
  }

  private _getNewValue(value: string) {
    if (this.value.every(val => val !== value)) {
      return [...this.value, value];
    }
    return this.value.filter(val => val !== value);
  }

  private _handleChangeInput(event: MouseEvent | KeyboardEvent) {
    event.stopPropagation();
    const inputEl = event.target as HTMLInputElement;
    const value = inputEl.value;
    const oldValue = this.value;
    const newValue = this._getNewValue(value);
    this.value = newValue;
    const detail: CustomEventDetail = { value: newValue, oldValue: oldValue };
    this._dispatchCustomEvent("change", detail);
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

  private _dispatchCustomEvent(eventName: string, detail?: CustomEventDetail) {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true
    });
    return this.dispatchEvent(event);
  }

  createRenderRoot() {
    return this;
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

  private _getItemTemplate(item: Item, index: number) {
    return html`
      <div
        class="kuc-checkbox__group__select-menu__item"
        itemLayout="${this.itemLayout}"
      >
        <input
          type="checkbox"
          aria-describedby="${this._GUID}-error"
          aria-required=${this.requiredIcon}
          id="${this._GUID}-item-${index}"
          class="kuc-checkbox__group__select-menu__item__input"
          name="${this._GUID}-group"
          value=${item.value !== undefined ? item.value : ""}
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
            item.value !== undefined
              ? this.value.some(val => val === item.value)
              : false
          )}${item.label === undefined ? item.value : item.label}
        </label>
      </div>
    `;
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("items")) this._validateItems();
    if (changedProperties.has("value")) this._validateValues();
    super.update(changedProperties);
  }

  render() {
    this._updateVisible();
    return html`
      ${this._getStyleTagTemplate()}
      <fieldset class="kuc-checkbox__group">
        <legend class="kuc-checkbox__group__label" ?hidden="${!this.label}">
          <span class="kuc-checkbox__group__label__text">${this.label}</span
          ><!--
          --><span
            class="kuc-checkbox__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </legend>
        <div
          class="kuc-checkbox__group__select-menu"
          ?borderVisible=${this.borderVisible}
          itemLayout="${this.itemLayout}"
        >
          ${this.items.map((item, index) => this._getItemTemplate(item, index))}
        </div>
        <div
          class="kuc-checkbox__error"
          id="${this._GUID}-error"
          role="alert"
          aria-live="assertive"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </fieldset>
    `;
  }

  updated() {
    this._inputEls.forEach((inputEl: HTMLInputElement) => {
      inputEl.checked = this.value.indexOf(inputEl.value) > -1;
    });
    this._updateContainerWidth();
  }

  private _getDuplicatedIndex(values: string[]) {
    for (let index = 0; index < values.length; index++) {
      const value = values[index];
      if (value !== undefined && values.indexOf(value) !== index) return index;
    }
    return -1;
  }

  private _validateItems() {
    if (!Array.isArray(this.items)) {
      throw new Error("'items' property is not array");
    }
    const itemsValue = this.items.map(item => item.value || "");
    const index = this._getDuplicatedIndex(itemsValue);
    if (index > -1)
      throw new Error(
        `'items[${index}].value' is duplicated! You can specify unique one.`
      );
  }

  private _validateValues() {
    if (!Array.isArray(this.value)) {
      throw new Error("'value' property is not array");
    }
    const index = this._getDuplicatedIndex(this.value);
    if (index > -1)
      throw new Error(
        `'value[${index}]' is duplicated! You can specify unique one.`
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
          display: inline-block;
          vertical-align: top;
          width: 239px;
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
        .kuc-checkbox__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0;
          word-break: break-all;
        }
        .kuc-checkbox__error[hidden] {
          display: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-checkbox")) {
  window.customElements.define("kuc-checkbox", Checkbox);
}
