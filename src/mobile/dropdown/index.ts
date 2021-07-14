import { LitElement, html, property, PropertyValues } from "lit-element";
import { v4 as uuid } from "uuid";
import { visiblePropConverter } from "../../base/converter";

type Item = { value?: string; label?: string };
type MobileDropdownProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: Item[];
};

type CustomEventDetail = {
  value?: string;
  oldValue?: string;
};

export class MobileDropdown extends LitElement {
  @property({ type: String }) error = "";
  @property({ type: String }) label = "";
  @property({ type: String }) value = "";
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

  private _GUID: string;

  constructor(props?: MobileDropdownProps) {
    super();
    this._GUID = this._generateGUID();
    if (!props) {
      return;
    }
    this.className =
      props.className !== undefined ? props.className : this.className;
    this.error = props.error !== undefined ? props.error : this.error;
    this.id = props.id !== undefined ? props.id : this.id;
    this.label = props.label !== undefined ? props.label : this.label;
    this.value = props.value !== undefined ? props.value : this.value;
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

  private _handleChangeInput(event: Event) {
    event.stopPropagation();
    const selectEl = event.target as HTMLSelectElement;
    const detail: CustomEventDetail = { value: "", oldValue: this.value };
    this.value = selectEl.value;
    detail.value = this.value;
    this._dispatchCustomEvent("change", detail);
  }

  private _dispatchCustomEvent(eventName: string, detail?: CustomEventDetail) {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  createRenderRoot() {
    return this;
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("items")) {
      this._validateItems();
    }
    super.update(changedProperties);
  }

  private _getItemTemplate(item: Item, index: number) {
    return html`
      <option
        value="${item.value || ""}"
        ?selected="${this.value === item.value}"
      >
        ${item.label === undefined ? item.value : item.label}
      </option>
    `;
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <label
        class="kuc-mobile-dropdown__label"
        for="${this._GUID}-label"
        ?hidden="${!this.label}"
      >
        <span class="kuc-mobile-dropdown__label__text">${this.label}</span
        ><!--
        --><span
          class="kuc-mobile-dropdown__label__required-icon"
          ?hidden="${!this.requiredIcon}"
          >*</span
        >
      </label>
      <div class="kuc-mobile-dropdown__input-form">
        <div
          class="kuc-mobile-dropdown__input-form__select"
          aria-required=${this.requiredIcon}
        >
          <select
            class="kuc-mobile-dropdown__input-form__select__input"
            id="${this._GUID}-label"
            aria-describedBy="${this._GUID}-error"
            aria-required=${this.requiredIcon}
            aria-invalid="${this.error !== ""}"
            ?disabled="${this.disabled}"
            @change="${this._handleChangeInput}"
          >
            ${this.items.map((item, index) =>
              this._getItemTemplate(item, index)
            )}
          </select>
        </div>
      </div>
      <div
        class="kuc-mobile-dropdown__error"
        id="${this._GUID}-error"
        role="alert"
        aria-live="assertive"
        ?hidden="${!this.error}"
      >
        ${this.error}
      </div>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-mobile-dropdown,
        kuc-mobile-dropdown * {
          font-size: 13px;
          color: #333333;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }

        :lang(zh) kuc-mobile-dropdown,
        :lang(zh) kuc-mobile-dropdown * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }

        kuc-mobile-dropdown {
          display: inline-block;
          width: 100%;
        }

        kuc-mobile-dropdown[hidden] {
          display: none;
        }

        .kuc-mobile-dropdown__label {
          display: flex;
          padding: 0px;
          margin: 0 0 4px 0;
          white-space: nowrap;
        }

        .kuc-mobile-dropdown__label[hidden] {
          display: none;
        }

        .kuc-mobile-dropdown__label__text {
          text-shadow: 0 1px 0 #ffffff;
          color: #888888;
          font-size: 86%;
          font-weight: bold;
        }

        .kuc-mobile-dropdown__label__required-icon {
          color: #d01212;
          left: 3px;
          position: relative;
        }

        .kuc-mobile-dropdown__label__required-icon[hidden] {
          display: none;
        }

        .kuc-mobile-dropdown__input-form {
          word-wrap: break-word;
          min-height: 1em;
          padding-left: 0.5em;
          padding-right: 0.5em;
        }

        .kuc-mobile-dropdown__input-form__select {
          display: inline-block;
          border-radius: 0.4em;
          max-width: 100%;
        }

        .kuc-mobile-dropdown__input-form__select[aria-required="true"] {
          border: 1px solid #cf4a38;
        }

        .kuc-mobile-dropdown__input-form__select__input {
          min-width: 100px;
          max-width: 100%;
        }

        .kuc-mobile-dropdown__input-form__select__input:disabled {
          color: #999999;
          -webkit-text-fill-color: #999999;
          background-color: #d5d7d9;
          opacity: 1;
        }

        .kuc-mobile-dropdown__error {
          line-height: 1.5;
          color: #000000;
          background-color: #fdffc9;
          border: 1px solid #e5db68;
          border-radius: 0.4em;
          padding: 0.4em 1em;
          margin-top: 0.3em;
          margin-left: 0.5em;
        }
      </style>
    `;
  }

  private _validateItems() {
    if (!Array.isArray(this.items)) {
      throw new Error("'items' property is not array");
    }
    const itemsValue = this.items.map(item => item.value);
    itemsValue.forEach((value, number, self) => {
      if (value !== undefined && self.indexOf(value) !== number) {
        throw new Error(`'items[${number}].value' property is duplicated`);
      }
    });
  }
}
if (!window.customElements.get("kuc-mobile-dropdown")) {
  window.customElements.define("kuc-mobile-dropdown", MobileDropdown);
}
