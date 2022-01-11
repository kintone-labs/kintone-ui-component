import { html, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail
} from "../../base/kuc-base";
import { visiblePropConverter } from "../../base/converter";
import {
  validateProps,
  validateValueString,
  validateItems,
  validateSelectedIndexNumber
} from "../../base/validator";

type Item = { label?: string; value?: string };
type MobileDropdownProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  value?: string;
  selectedIndex?: number;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: Item[];
};

export class MobileDropdown extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String }) error = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) label = "";
  @property({ type: String }) value = "";
  @property({ type: Number }) selectedIndex = -1;
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

  @query(".kuc-mobile-dropdown__input-form__select__input")
  private _selectEl!: HTMLSelectElement;

  private _GUID: string;

  constructor(props?: MobileDropdownProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  private _handleChangeInput(event: Event) {
    event.stopPropagation();
    const selectEl = event.target as HTMLSelectElement;
    const value = selectEl.value;
    if (this.value === value && this.selectedIndex === selectEl.selectedIndex)
      return;
    const detail: CustomEventDetail = { oldValue: this.value, value: value };
    this.value = value;
    this.selectedIndex = selectEl.selectedIndex;
    dispatchCustomEvent(this, "change", detail);
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("items")) validateItems(this.items);
    if (
      changedProperties.has("items") ||
      changedProperties.has("value") ||
      changedProperties.has("selectedIndex")
    ) {
      validateValueString(this.value);
      validateSelectedIndexNumber(this.selectedIndex);
      this.selectedIndex = this._getSelectedIndex();
      this.value = this._getValue() || "";
    }
    super.update(changedProperties);
  }

  private _getSelectedIndex() {
    if (!this.value) {
      if (this.items[this.selectedIndex]) return this.selectedIndex;
      return -1;
    }

    const firstIndex = this.items.findIndex(item => item.value === this.value);
    if (firstIndex === -1) return -1;
    const selectedIndex = this.items.findIndex(
      (item, index) => item.value === this.value && index === this.selectedIndex
    );
    return selectedIndex > -1 ? selectedIndex : firstIndex;
  }

  private _getValue() {
    const item = this.items[this.selectedIndex];
    if (!item) return "";
    return item.value;
  }

  private _isCheckedItem(item: Item, index: number) {
    if (!this.value) return this.selectedIndex === index;
    return item.value === this.value && this.selectedIndex === index;
  }

  private _getItemTemplate(item: Item, index: number) {
    const isCheckedItem = this._isCheckedItem(item, index);
    return html`
      <option value="${item.value || ""}" ?selected="${isCheckedItem}">
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
        <kuc-base-mobile-label
          .text="${this.label}"
          .requiredIcon="${this.requiredIcon}"
        ></kuc-base-mobile-label>
      </label>
      <div class="kuc-mobile-dropdown__input-form">
        <div
          class="kuc-mobile-dropdown__input-form__select
          ${this.requiredIcon ? "kuc--required" : ""}"
        >
          <select
            class="kuc-mobile-dropdown__input-form__select__input"
            id="${this._GUID}-label"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
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
      <kuc-base-mobile-error
        ariaLive="assertive"
        .text="${this.error}"
        .guid="${this._GUID}"
      >
      </kuc-base-mobile-error>
    `;
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has("selectedIndex")) {
      this._selectEl.selectedIndex = this.selectedIndex;
    }
    super.update(changedProperties);
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
          display: inline-block;
          font-size: 86%;
          font-weight: bold;
          line-height: 1.5;
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
          white-space: normal;
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

        .kuc-mobile-dropdown__input-form__select.kuc--required {
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
}
if (!window.customElements.get("kuc-mobile-dropdown")) {
  window.customElements.define("kuc-mobile-dropdown", MobileDropdown);
}
