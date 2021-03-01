import {
  LitElement,
  html,
  property,
  PropertyValues,
  internalProperty,
  queryAll,
  query,
  svg
} from "lit-element";
import { v4 as uuid } from "uuid";

type Item = {
  label?: string;
  value?: string;
};
type DropdownProps = {
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

export class Dropdown extends LitElement {
  @property({ type: String }) error = "";
  @property({ type: String }) label = "";
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({ type: Boolean }) visible = true;
  @property({ type: Array }) items: Item[] = [];

  @internalProperty()
  private _selectorVisible = false;

  @queryAll(".kuc-dropdown__select-menu__item")
  private _itemsEl!: HTMLLIElement[];

  @query("button.kuc-dropdown__toggle")
  private _buttonEl!: HTMLButtonElement;

  @query(".kuc-dropdown__label")
  private _labelEl!: HTMLDivElement;

  private _GUID: string;

  constructor(props?: DropdownProps) {
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

  private _getSelectedLabel() {
    let selectedItemLabel = "";
    this.items.forEach(item => {
      if (item.value === this.value) {
        selectedItemLabel = item.label === undefined ? item.value : item.label;
      }
    });
    return selectedItemLabel;
  }

  private _updateVisible() {
    if (!this.visible) {
      this.setAttribute("hidden", "");
    } else {
      this.removeAttribute("hidden");
    }
  }

  private _dispatchCustomEvent(eventName: string, detail?: CustomEventDetail) {
    const changeEvent = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true
    });
    return this.dispatchEvent(changeEvent);
  }

  private _handleClickDropdownToggle(event: MouseEvent) {
    if (!this._selectorVisible) {
      this._itemsEl.forEach((itemEl: HTMLLIElement) => {
        if (itemEl.classList.contains("kuc-dropdown__select-menu__highlight")) {
          itemEl.classList.remove("kuc-dropdown__select-menu__highlight");
        }
        if (itemEl.getAttribute("aria-checked") === "true") {
          itemEl.classList.add("kuc-dropdown__select-menu__highlight");
        }
      });
    }
    this._selectorVisible = !this._selectorVisible;
    this._removeActiveDescendant();
  }

  private _handleBlurDropdownToggle(event: Event) {
    this._selectorVisible = false;
    this._removeActiveDescendant();
  }

  private _handleUpdateValue(value: string) {
    if (this.value === value) return;
    const detail: CustomEventDetail = { oldValue: this.value, value: value };
    this.value = value;
    this._dispatchCustomEvent("change", detail);
  }

  private _handleMousedownDropdownItem(event: MouseEvent) {
    const itemEl = event.target as HTMLLIElement;
    this._selectorVisible = false;
    const value = itemEl.getAttribute("value") as string;
    this._handleUpdateValue(value);
  }

  private _handleMouseOverDropdownItem(event: Event) {
    this._itemsEl.forEach((itemEl: HTMLLIElement) => {
      if (itemEl.classList.contains("kuc-dropdown__select-menu__highlight")) {
        itemEl.classList.remove("kuc-dropdown__select-menu__highlight");
      }
    });
    const itemEl = event.currentTarget as HTMLLIElement;
    itemEl.classList.add("kuc-dropdown__select-menu__highlight");
    this._setActiveDescendant(itemEl.id);
  }

  private _handleMouseLeaveDropdownItem(event: Event) {
    const itemEl = event.currentTarget as HTMLLIElement;
    itemEl.classList.remove("kuc-dropdown__select-menu__highlight");
    this._removeActiveDescendant();
  }

  private _handleKeyDownDropdownToggle(event: KeyboardEvent) {
    if (!this._selectorVisible) {
      this._itemsEl.forEach((itemEl: HTMLLIElement) => {
        if (itemEl.classList.contains("kuc-dropdown__select-menu__highlight")) {
          itemEl.classList.remove("kuc-dropdown__select-menu__highlight");
        }
        if (itemEl.getAttribute("aria-checked") === "true") {
          itemEl.classList.add("kuc-dropdown__select-menu__highlight");
        }
      });
    } else {
      let highLightNumber = 0;
      switch (event.key) {
        case "Up": // IE/Edge specific value
        case "ArrowUp": {
          this._itemsEl.forEach((itemEl: HTMLLIElement, number: number) => {
            if (
              itemEl.classList.contains("kuc-dropdown__select-menu__highlight")
            ) {
              itemEl.classList.remove("kuc-dropdown__select-menu__highlight");
              highLightNumber = number - 1;
            }
          });
          highLightNumber =
            highLightNumber <= -1 ? this._itemsEl.length - 1 : highLightNumber;
          this._itemsEl[highLightNumber].classList.add(
            "kuc-dropdown__select-menu__highlight"
          );
          this._setActiveDescendant(this._itemsEl[highLightNumber].id);
          break;
        }
        case "Down": // IE/Edge specific value
        case "ArrowDown": {
          this._itemsEl.forEach((itemEl: HTMLLIElement, number: number) => {
            if (
              itemEl.classList.contains("kuc-dropdown__select-menu__highlight")
            ) {
              itemEl.classList.remove("kuc-dropdown__select-menu__highlight");
              highLightNumber = number + 1;
            }
          });
          highLightNumber =
            highLightNumber >= this._itemsEl.length ? 0 : highLightNumber;
          this._itemsEl[highLightNumber].classList.add(
            "kuc-dropdown__select-menu__highlight"
          );
          this._setActiveDescendant(this._itemsEl[highLightNumber].id);
          break;
        }
        case "Enter": {
          this._itemsEl.forEach((itemEl: HTMLLIElement) => {
            if (
              itemEl.classList.contains("kuc-dropdown__select-menu__highlight")
            ) {
              const value = itemEl.getAttribute("value") as string;
              this._handleUpdateValue(value);
            }
          });
          break;
        }
        default:
          break;
      }
    }
  }

  private _getToggleIconSvgTemplate() {
    return svg`
      <svg
        width='36'
        height='36'
        viewBox='0 0 36 36'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z'
          fill='#3498DB'/>
      </svg>
    `;
  }

  private _getDropdownIconSvgTemplate(checked: boolean) {
    return svg`
      ${
        checked
          ? svg`<svg
          class='kuc-dropdown__select-menu__item__icon'
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
            fill='#3498DB'/>
        </svg>`
          : ""
      }`;
  }

  private _getItemTemplate(item: Item, index: number) {
    return html`
      <li
        class="kuc-dropdown__select-menu__item"
        role="menuitem"
        tabindex=${item.value === this.value ? "0" : "-1"}
        aria-checked=${item.value === this.value ? "true" : "false"}
        value=${item.value !== undefined ? item.value : ""}
        id="${this._GUID}-menuitem-${index}"
        @mousedown="${this._handleMousedownDropdownItem}"
        @mouseover="${this._handleMouseOverDropdownItem}"
        @mouseleave="${this._handleMouseLeaveDropdownItem}"
      >
        ${this._getDropdownIconSvgTemplate(item.value === this.value)}
        ${item.label === undefined ? item.value : item.label}
      </li>
    `;
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

  render() {
    this._updateVisible();
    return html`
      ${this._getStyleTagTemplate()}
      <div
        class="kuc-dropdown__label"
        id="${this._GUID}-label"
        ?hidden="${!this.label}"
      >
        <span class="kuc-dropdown__label__text">${this.label}</span
        ><!--
        --><span
          class="kuc-dropdown__label__required-icon"
          ?hidden="${!this.requiredIcon}"
          >*</span
        >
      </div>
      <button
        class="kuc-dropdown__toggle"
        id="${this._GUID}-toggle"
        type="button"
        aria-haspopup="true"
        aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
        aria-describedby="${this._GUID}-error"
        aria-required=${this.requiredIcon}
        ?disabled="${this.disabled}"
        @click="${this._handleClickDropdownToggle}"
        @blur="${this._handleBlurDropdownToggle}"
        @keydown="${this._handleKeyDownDropdownToggle}"
      >
        <span class="kuc-dropdown__toggle__selected-item-label"
          >${this._getSelectedLabel()}</span
        >
        <span class="kuc-dropdown__toggle__icon">
          ${this._getToggleIconSvgTemplate()}
        </span>
      </button>
      <ul
        class="kuc-dropdown__select-menu"
        role="menu"
        aria-hidden="${!this._selectorVisible}"
        ?hidden="${!this._selectorVisible}"
      >
        ${this.items.map((item, number) => this._getItemTemplate(item, number))}
      </ul>
      <div
        class="kuc-dropdown__error"
        id="${this._GUID}-error"
        role="alert"
        aria-live="assertive"
        ?hidden="${!this.error}"
      >
        ${this.error}
      </div>
    `;
  }

  updated() {
    this._updateContainerWidth();
  }

  private _updateContainerWidth() {
    let toggleWidth = this._buttonEl.getBoundingClientRect().width;
    const labelWidth = this._labelEl.getBoundingClientRect().width;
    if (toggleWidth < labelWidth) {
      toggleWidth = labelWidth;
    }
    this.style.width = toggleWidth + "px";
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-dropdown,
        kuc-dropdown *,
        :lang(en) kuc-dropdown,
        :lang(en) kuc-dropdown * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-dropdown,
        :lang(ja) kuc-dropdown * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-dropdown,
        :lang(zh) kuc-dropdown * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-dropdown {
          display: inline-block;
          font-size: 14px;
          color: #333333;
          vertical-align: top;
          width: 180px;
        }
        kuc-dropdown[hidden] {
          display: none;
        }
        .kuc-dropdown__label {
          margin-top: 4px;
          margin-bottom: 8px;
          display: inline-block;
          white-space: nowrap;
        }
        .kuc-dropdown__label[hidden] {
          display: none;
        }
        .kuc-dropdown__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-dropdown__label__required-icon[hidden] {
          display: none;
        }
        .kuc-dropdown__toggle {
          height: 40px;
          box-sizing: border-box;
          box-shadow: 1px 1px 1px #ffffff inset;
          border: 1px solid #e3e7e8;
          color: #3498db;
          background-color: #f7f9fa;
          padding: 0 0 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .kuc-dropdown__toggle:focus {
          outline: none;
          border: 1px solid #3498db;
        }
        .kuc-dropdown__toggle:disabled {
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
          color: #888888;
        }
        .kuc-dropdown__toggle__selected-item-label {
          font-size: 14px;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .kuc-dropdown__toggle__icon {
          flex: none;
          width: 38px;
          height: 38px;
        }
        .kuc-dropdown__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin-top: 8px;
          word-break: break-all;
        }
        .kuc-dropdown__error[hidden] {
          display: none;
        }
        .kuc-dropdown__select-menu {
          position: absolute;
          min-width: 280px;
          margin: 0;
          padding: 8px 0;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
          z-index: 2000;
          list-style: none;
        }
        .kuc-dropdown__select-menu[hidden] {
          display: none;
        }
        .kuc-dropdown__select-menu__item {
          padding: 8px 16px 8px 24px;
          line-height: 1;
          position: relative;
        }
        .kuc-dropdown__select-menu__item__icon {
          position: absolute;
          top: 50%;
          left: 6px;
          margin-top: -5px;
        }
        .kuc-dropdown__select-menu__item[aria-checked="true"] {
          color: #3498db;
        }
        .kuc-dropdown__select-menu__highlight[role="menuitem"] {
          background-color: #e2f2fe;
        }
      </style>
    `;
  }

  private _setActiveDescendant(value?: string) {
    if (value !== undefined && this._buttonEl !== null) {
      this._buttonEl.setAttribute("aria-activedescendant", value);
    }
  }

  private _removeActiveDescendant() {
    this._buttonEl.removeAttribute("aria-activedescendant");
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
if (!window.customElements.get("kuc-dropdown")) {
  window.customElements.define("kuc-dropdown", Dropdown);
}
