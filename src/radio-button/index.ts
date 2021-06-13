import {
  LitElement,
  html,
  property,
  PropertyValues,
  svg,
  queryAll
} from "lit-element";
import { v4 as uuid } from "uuid";

type Item = { value?: string; label?: string };
type RadioButtonProps = {
  className?: string;
  error?: string;
  id?: string;
  itemLayout?: string;
  label?: string;
  value?: string;
  borderVisible?: boolean;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: Item[];
};
type CustomEventDetail = {
  value?: string;
  oldValue?: string;
};

export class RadioButton extends LitElement {
  @property({ type: String }) error = "";
  @property({ type: String }) itemLayout = "horizontal";
  @property({ type: String }) label = "";
  @property({ type: String }) value = "";
  @property({ type: Boolean }) borderVisible = true;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({ type: Boolean }) visible = true;
  @property({ type: Array }) items: Item[] = [];

  @queryAll(".kuc-radio-button__group__select-menu__item__input")
  private _inputEls!: HTMLInputElement[];
  private _GUID: string;

  constructor(props?: RadioButtonProps) {
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
    this.value = props.value !== undefined ? props.value : this.value;
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

  private _handleChangeInput(event: MouseEvent | KeyboardEvent) {
    event.stopPropagation();
    const inputEl = event.target as HTMLInputElement;
    const value = inputEl.value;
    const detail: CustomEventDetail = { value: value, oldValue: this.value };
    this.value = value;
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

  private _getRadioIconSvgTemplate(disabled: boolean, checked: boolean) {
    return svg`
    <svg
      class="kuc-radio-button__group__select-menu__item__label__icon"
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='10.5'
        cy='10.5'
        r='10'
        fill='white'
        stroke='#e3e7e8' stroke-width='1'/>
      ${
        checked
          ? svg`<circle cx='10.5' cy='10.5' r='6.5' fill='${
              disabled ? "#e3e7e8" : "#3498db"
            }'/>`
          : ""
      }
    </svg>
  `;
  }

  private _getItemTemplate(item: Item, index: number) {
    return html`
      <div
        class="kuc-radio-button__group__select-menu__item"
        itemLayout="${this.itemLayout}"
      >
        <input
          type="radio"
          aria-describedby="${this._GUID}-error"
          id="${this._GUID}-item-${index}"
          class="kuc-radio-button__group__select-menu__item__input"
          name="${this._GUID}-group"
          value="${item.value !== undefined ? item.value : ""}"
          aria-required=${this.requiredIcon}
          ?disabled="${this.disabled}"
          @change="${this._handleChangeInput}"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
        />
        <label
          class="kuc-radio-button__group__select-menu__item__label"
          for="${this._GUID}-item-${index}"
          >${this._getRadioIconSvgTemplate(
            this.disabled,
            item.value !== undefined ? this.value === item.value : false
          )}${item.label === undefined ? item.value : item.label}
        </label>
      </div>
    `;
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("items")) this._validateItems();
    super.update(changedProperties);
  }

  render() {
    this._updateVisible();
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-radio-button__group">
        <div class="kuc-radio-button__group__label" ?hidden="${!this.label}">
          <span class="kuc-radio-button__group__label__text">${this.label}</span
          ><!--
            --><span
            class="kuc-radio-button__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </div>
        <div
          class="kuc-radio-button__group__select-menu"
          ?borderVisible=${this.borderVisible}
          itemLayout="${this.itemLayout}"
        >
          ${this.items.map((item, index) => this._getItemTemplate(item, index))}
        </div>
        <div
          class="kuc-radio-button__group__error"
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
    this._inputEls.forEach((inputEl: HTMLInputElement, idx) => {
      inputEl.checked = this.value === inputEl.value;
    });
  }

  private _validateItems() {
    if (!Array.isArray(this.items)) {
      throw new Error("'items' property is not array");
    }
    const itemsValue = this.items.map(item => item.value);
    itemsValue.forEach((value, index, self) => {
      if (value !== undefined && self.indexOf(value) !== index) {
        throw new Error(
          `'items[${index}].value' is duplicated! You can specify unique one.`
        );
      }
    });
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-radio-button,
        kuc-radio-button *,
        :lang(en) kuc-radio-button,
        :lang(en) kuc-radio-button * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-radio-button,
        :lang(ja) kuc-radio-button * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-radio-button,
        :lang(zh) kuc-radio-button * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-radio-button {
          font-size: 14px;
          color: #333333;
          display: inline-table;
          min-width: 239px;
          vertical-align: top;
        }

        kuc-radio-button[hidden] {
          display: none;
        }

        .kuc-radio-button__group {
          border: none;
          padding: 0px;
          height: auto;
          display: table-caption;
          margin-left: 0px;
          margin-right: 0px;
          width: 100%;
        }

        .kuc-radio-button__group__label {
          display: block;
          padding: 4px 0 8px 0;
          white-space: nowrap;
        }

        .kuc-radio-button__group__label[hidden] {
          display: none;
        }

        .kuc-radio-button__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }

        .kuc-radio-button__group__label__required-icon[hidden] {
          display: none;
        }

        .kuc-radio-button__group__select-menu {
          display: inline-flex;
          min-width: 239px;
          width: 100%;
        }

        .kuc-radio-button__group__select-menu[itemlayout="vertical"] {
          display: block;
        }

        .kuc-radio-button__group__select-menu[bordervisible] {
          border-color: #e3e7e8;
          border-width: 1px;
          border-style: solid;
          padding-top: 4px;
          box-sizing: border-box;
        }

        .kuc-radio-button__group__select-menu__item {
          margin-left: 4px;
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

        .kuc-radio-button__group__select-menu__item[itemlayout="vertical"] {
          display: block;
        }

        .kuc-radio-button__group__select-menu__item[focused] {
          border: 1px solid #3498db;
        }

        .kuc-radio-button__group__select-menu__item__input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        .kuc-radio-button__group__select-menu__item__input:hover
          + .kuc-radio-button__group__select-menu__item__label {
          color: #666666;
        }

        .kuc-radio-button__group__select-menu__item__label__icon {
          position: absolute;
          top: 50%;
          left: -30px;
          box-sizing: border-box;
          margin-top: -11px;
          width: 21px;
          height: 21px;
          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
          content: "";
          border-radius: 9px;
        }

        .kuc-radio-button__group__select-menu__item__input[disabled]
          + .kuc-radio-button__group__select-menu__item__label {
          color: #888888;
          cursor: not-allowed;
        }

        .kuc-radio-button__group__select-menu__item__label {
          cursor: pointer;
          position: relative;
          margin-left: 32px;
          display: inline-block;
          vertical-align: middle;
          white-space: nowrap;
        }

        .kuc-radio-button__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0;
          word-break: break-all;
          white-space: normal;
        }

        .kuc-radio-button__group__error[hidden] {
          display: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-radio-button")) {
  window.customElements.define("kuc-radio-button", RadioButton);
}
