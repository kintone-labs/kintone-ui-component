import { html, PropertyValues, svg } from "lit";
import { property, queryAll, query } from "lit/decorators.js";
import { KucBase, generateGUID, dispatchCustomEvent } from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";

type Item = {
  label?: string;
  value?: string;
};

type MultiChoiceProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  value?: string[];
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: Item[];
};

export class MultiChoice extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) error = "";
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
  @property({ type: Array }) value: string[] = [];

  @query(".kuc-multi-choice__group__menu")
  private _menuEl!: HTMLDivElement;
  @queryAll(".kuc-multi-choice__group__menu__item")
  private _itemsEl!: HTMLDivElement[];
  private _GUID: string;

  constructor(props?: MultiChoiceProps) {
    super();
    this._GUID = generateGUID();

    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("items")) this._validateItems();
    if (changedProperties.has("value")) this._validateValues();
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-multi-choice__group">
        <div
          class="kuc-multi-choice__group__label"
          id="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-multi-choice__group__label__text">${this.label}</span
          ><!--
          --><span
            class="kuc-multi-choice__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </div>
        <div
          class="kuc-multi-choice__group__menu"
          role="menu"
          aria-describedby="${this._GUID}-error"
          aria-labelledby="${this._GUID}-label"
          ?disabled="${this.disabled}"
          tabindex="${this.disabled ? "-1" : "0"}"
          @keydown="${this._handleKeyDownMultiChoice}"
        >
          ${this.items.map((item, number) =>
            this._getMenuItemTemplate(item, number)
          )}
        </div>
        <div
          class="kuc-multi-choice__group__error"
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

  private _handleMouseDownMultiChoiceItem(event: MouseEvent) {
    if (this.disabled) return;
    const itemEl = event.target as HTMLDivElement;
    const value = itemEl.getAttribute("value") as string;
    this._handleChangeValue(value);
  }

  private _handleMouseOverMultiChoiceItem(event: Event) {
    if (this.disabled) return;
    this._itemsEl.forEach((itemEl: HTMLDivElement) => {
      if (
        itemEl.classList.contains("kuc-multi-choice__group__menu__highlight")
      ) {
        itemEl.classList.remove("kuc-multi-choice__group__menu__highlight");
      }
    });
    const itemEl = event.currentTarget as HTMLDivElement;
    itemEl.classList.add("kuc-multi-choice__group__menu__highlight");

    this._setActiveDescendant(itemEl.id);
  }

  private _handleMouseLeaveMultiChoiceItem(event: Event) {
    if (this.disabled) return;
    const itemEl = event.currentTarget as HTMLDivElement;
    itemEl.classList.remove("kuc-multi-choice__group__menu__highlight");

    this._setActiveDescendant();
  }

  private _handleKeyDownMultiChoice(event: KeyboardEvent) {
    if (this.disabled) return;
    let highLightNumber = 0;
    switch (event.key) {
      case "Up": // IE/Edge specific value
      case "ArrowUp": {
        event.preventDefault();

        this._itemsEl.forEach((itemEl: HTMLDivElement, number: number) => {
          if (
            itemEl.classList.contains(
              "kuc-multi-choice__group__menu__highlight"
            )
          ) {
            itemEl.classList.remove("kuc-multi-choice__group__menu__highlight");
            highLightNumber = number - 1;
          }
        });
        highLightNumber =
          highLightNumber <= -1 ? this._itemsEl.length - 1 : highLightNumber;

        const currentItemEl = this._itemsEl[highLightNumber];
        currentItemEl.classList.add("kuc-multi-choice__group__menu__highlight");

        this._setActiveDescendant(currentItemEl.id);
        break;
      }
      case "Down": // IE/Edge specific value
      case "ArrowDown": {
        event.preventDefault();
        this._itemsEl.forEach((itemEl: HTMLDivElement, number: number) => {
          if (
            itemEl.classList.contains(
              "kuc-multi-choice__group__menu__highlight"
            )
          ) {
            itemEl.classList.remove("kuc-multi-choice__group__menu__highlight");
            highLightNumber = number + 1;
          }
        });
        highLightNumber =
          highLightNumber >= this._itemsEl.length ? 0 : highLightNumber;

        const currentItemEl = this._itemsEl[highLightNumber];
        currentItemEl.classList.add("kuc-multi-choice__group__menu__highlight");

        this._setActiveDescendant(currentItemEl.id);
        break;
      }
      case "Spacebar": // IE/Edge specific value
      case " ": {
        event.preventDefault();
        this._itemsEl.forEach((itemEl: HTMLDivElement) => {
          if (
            itemEl.classList.contains(
              "kuc-multi-choice__group__menu__highlight"
            )
          ) {
            const value = itemEl.getAttribute("value") as string;
            this._handleChangeValue(value);
          }
        });
        break;
      }
      default:
        break;
    }
  }

  private _getMultiChoiceCheckedIconSvgTemplate(
    disabled: boolean,
    checked: boolean
  ) {
    return svg`
      ${
        checked
          ? svg`<svg
          class='kuc-multi-choice__group__menu__item__icon'
          width='11'
          height='9'
          viewBox='0 0 11 9'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z'
            fill='${disabled ? "#d8d8d8" : "#3498db"}'
          />
        </svg>`
          : ""
      }`;
  }

  private _getMenuItemTemplate(item: Item, index: number) {
    return html`
      <div
        class="kuc-multi-choice__group__menu__item"
        role="menuitemcheckbox"
        aria-checked="${this.value.some(val => val === item.value)}"
        aria-required="${this.requiredIcon}"
        value="${item.value !== undefined ? item.value : ""}"
        id="${this._GUID}-menuitem-${index}"
        @mousedown="${this._handleMouseDownMultiChoiceItem}"
        @mouseover="${this._handleMouseOverMultiChoiceItem}"
        @mouseleave="${this._handleMouseLeaveMultiChoiceItem}"
      >
        ${this._getMultiChoiceCheckedIconSvgTemplate(
          this.disabled,
          item.value !== undefined
            ? this.value.some(val => val === item.value)
            : false
        )}
        ${item.label === undefined ? item.value : item.label}
      </div>
    `;
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
      throw new Error(`'items[${index}].value' property is duplicated`);
  }

  private _validateValues() {
    if (!Array.isArray(this.value)) {
      throw new Error("'value' property is not array");
    }
    const index = this._getDuplicatedIndex(this.value);
    if (index > -1) throw new Error(`'value[${index}]' property is duplicated`);
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-multi-choice,
        kuc-multi-choice *,
        :lang(en) kuc-multi-choice,
        :lang(en) kuc-multi-choice * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-multi-choice,
        :lang(ja) kuc-multi-choice * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-multi-choice,
        :lang(zh) kuc-multi-choice * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-multi-choice {
          display: inline-table;
          font-size: 14px;
          color: #333;
          width: 180px;
          min-width: 180px;
        }
        kuc-multi-choice[hidden] {
          display: none;
        }
        .kuc-multi-choice__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          width: 100%;
          margin: 0px;
        }
        .kuc-multi-choice__group__label {
          padding: 4px 0px 8px 0px;
          display: inline-block;
          white-space: nowrap;
        }
        .kuc-multi-choice__group__label[hidden] {
          display: none;
        }
        .kuc-multi-choice__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-multi-choice__group__label__required-icon[hidden] {
          display: none;
        }
        .kuc-multi-choice__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0px;
          word-break: break-all;
          white-space: normal;
        }
        .kuc-multi-choice__group__error[hidden] {
          display: none;
        }
        .kuc-multi-choice__group__menu {
          position: relative;
          background: #ffffff;
          border: 1px solid #e3e7e8;
          box-sizing: border-box;
          box-shadow: 1px 1px 12px #f5f5f5 inset, -1px -1px 12px #f5f5f5 inset;
          padding: 6px 0;
          overflow-y: auto;
          overflow-x: hidden;
          max-height: 134px;
          width: 100%;
        }
        .kuc-multi-choice__group__menu:not([disabled]):focus {
          outline: none;
          border: 1px solid #3498db;
        }
        .kuc-multi-choice__group__menu[disabled] {
          background-color: #dbdcdd;
          box-shadow: none;
          cursor: not-allowed;
          color: #888;
          outline: none;
        }
        .kuc-multi-choice__group__menu__item {
          padding: 4px 16px;
          margin-bottom: 2px;
          line-height: 1;
          position: relative;
          white-space: nowrap;
        }
        .kuc-multi-choice__group__menu__item__icon {
          position: absolute;
          top: 50%;
          left: 16px;
          margin-top: -6px;
          pointer-events: none;
        }
        .kuc-multi-choice__group__menu__item[aria-checked="true"] {
          color: #3498db;
          padding-left: 32px;
        }
        .kuc-multi-choice__group__menu[disabled]
          .kuc-multi-choice__group__menu__item[aria-checked="true"] {
          color: #888;
        }
        .kuc-multi-choice__group__menu__highlight[role="menuitemcheckbox"] {
          background-color: #e2f2fe;
          cursor: pointer;
        }
      </style>
    `;
  }

  private _setActiveDescendant(value?: string) {
    value !== undefined && this._menuEl !== null
      ? this._menuEl.setAttribute("aria-activedescendant", value)
      : this._menuEl.removeAttribute("aria-activedescendant");
  }

  private _handleChangeValue(value: string) {
    const oldValue = this.value;
    const newValue = this._getNewValue(value);

    if (newValue !== oldValue) {
      this.value = newValue;
      dispatchCustomEvent(this, "change", {
        oldValue,
        value: newValue
      });
    }
  }

  private _getNewValue(value: string) {
    const sorting = this.items.map(item => item.value);
    if (this.value.indexOf(value) === -1) {
      return [...this.value, value].sort(
        (item1: string, item2: any) =>
          sorting.indexOf(item1) - sorting.indexOf(item2)
      );
    }
    return this.value.filter(val => val !== value);
  }
}
if (!window.customElements.get("kuc-multi-choice")) {
  window.customElements.define("kuc-multi-choice", MultiChoice);
}
