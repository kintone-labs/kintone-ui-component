import { html, PropertyValues, svg } from "lit";
import { property, query } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail
} from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import {
  validateProps,
  validateItems,
  validateValueString,
  validateSelectedIndexNumber,
  throwErrorAfterUpdateComplete
} from "../base/validator";
import { ERROR_MESSAGE } from "../base/constant";
import { getWidthElmByContext } from "../base/context";
import { BaseLabel } from "../base/label";
import { BaseError } from "../base/error";
export { BaseError, BaseLabel };

type Item = { label?: string; value?: string };
type RadioButtonProps = {
  className?: string;
  error?: string;
  id?: string;
  itemLayout?: string;
  label?: string;
  value?: string;
  selectedIndex?: number;
  borderVisible?: boolean;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: Item[];
};

export class RadioButton extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String }) error = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) itemLayout = "horizontal";
  @property({ type: String }) label = "";
  @property({ type: String }) value = "";
  @property({ type: Number }) selectedIndex = -1;
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

  @query(".kuc-radio-button__group__label")
  private _labelEl!: HTMLDivElement;

  @query(".kuc-base-error__error")
  private _errorEl!: HTMLDivElement;

  @query(".kuc-radio-button__group__select-menu")
  private _selectMenuEl!: HTMLDivElement;

  private _GUID: string;

  constructor(props?: RadioButtonProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    this._setInitialValue(validProps);

    Object.assign(this, validProps);
  }

  private _setInitialValue(validProps: RadioButtonProps) {
    const hasValue = "value" in validProps;
    const hasSelectedIndex = "selectedIndex" in validProps;
    if (!hasValue && hasSelectedIndex) {
      this.value = this._getValue(validProps) || "";
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
      if (!validateValueString(this.value)) {
        throwErrorAfterUpdateComplete(this, ERROR_MESSAGE.VALUE.IS_NOT_STRING);
        return false;
      }
    }

    if (changedProperties.has("selectedIndex")) {
      if (!validateSelectedIndexNumber(this.selectedIndex)) {
        throwErrorAfterUpdateComplete(
          this,
          ERROR_MESSAGE.SELECTED_INDEX.IS_NOT_NUMBER
        );
        return false;
      }
    }
    return true;
  }

  willUpdate(changedProperties: PropertyValues): void {
    if (changedProperties.has("value")) {
      if (this.value !== "") return;

      this.selectedIndex = -1;
    }
  }

  private _handleChangeInput(event: MouseEvent | KeyboardEvent) {
    event.stopPropagation();
    const inputEl = event.target as HTMLInputElement;
    const value = inputEl.value;
    const index = inputEl.dataset.index || "0";

    const indexNumber = parseInt(index, 10);
    if (this.value === value && this.selectedIndex === indexNumber) return;
    const detail: CustomEventDetail = { oldValue: this.value, value: value };
    this.value = value;
    this.selectedIndex = indexNumber;
    dispatchCustomEvent(this, "change", detail);
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

  private _getRadioIconSvgTemplate(disabled: boolean, checked: boolean) {
    return svg`
    <svg
      class="kuc-radio-button__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10.5"
        cy="10.5"
        r="10"
        fill="white"
        stroke="#e3e7e8" stroke-width="1"/>
      ${
        checked
          ? svg`<circle cx="10.5" cy="10.5" r="6.5" fill="${
              disabled ? "#e3e7e8" : "#3498db"
            }"/>`
          : ""
      }
    </svg>
  `;
  }

  private _isCheckedItem(item: Item, index: number) {
    if (!this.value) return this.selectedIndex === index;
    return item.value === this.value && this.selectedIndex === index;
  }

  private _getItemTemplate(item: Item, index: number) {
    const isCheckedItem = this._isCheckedItem(item, index);
    return html`
      <div
        class="kuc-radio-button__group__select-menu__item"
        itemLayout="${this.itemLayout}"
      >
        <input
          type="radio"
          aria-checked="${isCheckedItem}"
          aria-describedby="${this._GUID}-error"
          data-index="${index}"
          id="${this._GUID}-item-${index}"
          class="kuc-radio-button__group__select-menu__item__input"
          name="${this._GUID}-group"
          value="${item.value !== undefined ? item.value : ""}"
          tabindex="${this._getTabIndex(index, item, this.items)}"
          aria-required="${this.requiredIcon}"
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
            isCheckedItem
          )}${item.label === undefined ? item.value : item.label}
        </label>
      </div>
    `;
  }

  private _getTabIndex(index: number, currentItem: Item, items: Item[]) {
    if (
      index === 0 &&
      items.filter(item => item.value === this.value).length === 0
    )
      return "0";
    if (currentItem.value === this.value) return "0";
    return "-1";
  }

  update(changedProperties: PropertyValues) {
    if (
      changedProperties.has("items") ||
      changedProperties.has("value") ||
      changedProperties.has("selectedIndex")
    ) {
      this.selectedIndex = this._getSelectedIndex();
      this.value =
        this._getValue({
          items: this.items,
          selectedIndex: this.selectedIndex
        }) || "";
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div
        class="kuc-radio-button__group"
        role="radiogroup"
        aria-labelledby="${this._GUID}-group"
      >
        <div class="kuc-radio-button__group__label" ?hidden="${!this.label}">
          <kuc-base-label
            .text="${this.label}"
            .guid="${this._GUID}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-label>
        </div>
        <div
          class="kuc-radio-button__group__select-menu"
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

  async updated() {
    await this.updateComplete;
    this._updateErrorWidth();
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

  private _getValue(validProps: RadioButtonProps) {
    const _items = validProps.items || [];
    const _selectedIndex =
      validProps.selectedIndex === 0 || validProps.selectedIndex
        ? validProps.selectedIndex
        : -1;
    const item = _items[_selectedIndex];
    if (!item) return "";
    return item.value;
  }

  private _updateErrorWidth() {
    const MIN_WIDTH = 239;
    const labelWidth = getWidthElmByContext(this._labelEl);
    const menuWidth = getWidthElmByContext(this._selectMenuEl);

    let errorWidth = labelWidth > MIN_WIDTH ? labelWidth : MIN_WIDTH;
    if (menuWidth > errorWidth) errorWidth = menuWidth;
    this._errorEl.style.width = errorWidth + "px";
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
          line-height: 1.5;
        }

        kuc-radio-button[hidden] {
          display: none;
        }

        .kuc-radio-button__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          margin: 0px;
          width: 100%;
        }

        .kuc-radio-button__group__label {
          display: inline-block;
          padding: 4px 0 8px 0;
          white-space: nowrap;
        }

        .kuc-radio-button__group__label[hidden] {
          display: none;
        }

        .kuc-radio-button__group__select-menu {
          display: block;
          min-width: 239px;
          width: 100%;
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
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-radio-button")) {
  window.customElements.define("kuc-radio-button", RadioButton);
}
