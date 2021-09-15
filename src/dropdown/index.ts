import {
  html,
  property,
  PropertyValues,
  internalProperty,
  queryAll,
  query,
  svg
} from "lit-element";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail
} from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";

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

export class Dropdown extends KucBase {
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

  @internalProperty()
  private _selectorVisible = false;

  @query(".kuc-dropdown__group")
  private _groupEl!: HTMLDivElement;

  @queryAll(".kuc-dropdown__group__select-menu__item")
  private _itemsEl!: HTMLLIElement[];

  @query("button.kuc-dropdown__group__toggle")
  private _buttonEl!: HTMLButtonElement;

  @query(".kuc-dropdown__group__label")
  private _labelEl!: HTMLDivElement;

  @query(".kuc-dropdown__group__select-menu__item")
  private _firstItemEl!: HTMLLIElement;

  @query(".kuc-dropdown__group__select-menu__item:last-child")
  private _lastItemEl!: HTMLLIElement;

  @query(".kuc-dropdown__group__select-menu__item[aria-checked=true]")
  private _selectedItemEl!: HTMLLIElement;

  @query(".kuc-dropdown__group__select-menu__highlight")
  private _highlightItemEl!: HTMLLIElement;

  private _GUID: string;

  constructor(props?: DropdownProps) {
    super();
    this._GUID = generateGUID();
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

  private _getSelectedLabel() {
    let selectedItemLabel = "";
    this.items.forEach(item => {
      if (item.value === this.value) {
        selectedItemLabel = item.label === undefined ? item.value : item.label;
      }
    });
    return selectedItemLabel;
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

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("items")) {
      this._validateItems();
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-dropdown__group">
        <div
          class="kuc-dropdown__group__label"
          id="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-dropdown__group__label__text">${this.label}</span
          ><!--
          --><span
            class="kuc-dropdown__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </div>
        <button
          class="kuc-dropdown__group__toggle"
          id="${this._GUID}-toggle"
          type="button"
          aria-haspopup="true"
          aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
          aria-describedby="${this._GUID}-error"
          aria-required=${this.requiredIcon}
          ?disabled="${this.disabled}"
          @mouseup="${this._handleMouseUpDropdownToggle}"
          @mousedown="${this._handleMouseDownDropdownToggle}"
          @click="${this._handleClickDropdownToggle}"
          @blur="${this._handleBlurDropdownToggle}"
          @keydown="${this._handleKeyDownDropdownToggle}"
        >
          <span class="kuc-dropdown__group__toggle__selected-item-label"
            >${this._getSelectedLabel()}</span
          >
          <span class="kuc-dropdown__group__toggle__icon">
            ${this._getToggleIconSvgTemplate()}
          </span>
        </button>
        <ul
          class="kuc-dropdown__group__select-menu"
          role="menu"
          aria-hidden="${!this._selectorVisible}"
          ?hidden="${!this._selectorVisible}"
          @mouseleave="${this._handleMouseLeaveMenu}"
        >
          ${this.items.map((item, number) =>
            this._getItemTemplate(item, number)
          )}
        </ul>
        <div
          class="kuc-dropdown__group__error"
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
    this._updateContainerWidth();
  }

  private _handleMouseDownDropdownItem(event: MouseEvent) {
    const itemEl = event.target as HTMLLIElement;
    const value = itemEl.getAttribute("value") as string;
    this._actionUpdateValue(value);
  }

  private _handleMouseOverDropdownItem(event: Event) {
    const itemEl = event.target as HTMLLIElement;
    this._actionHighlightMenuItem(itemEl);
  }

  private _handleMouseLeaveMenu() {
    this._actionClearAllHighlightMenuItem();
  }

  private _handleMouseDownDropdownToggle(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleMouseUpDropdownToggle(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleClickDropdownToggle() {
    this._actionToggleMenu();
  }

  private _handleBlurDropdownToggle() {
    this._actionHideMenu();
  }

  private _handleKeyDownDropdownToggle(event: KeyboardEvent) {
    switch (event.key) {
      case "Up": // IE/Edge specific value
      case "ArrowUp": {
        event.preventDefault();
        if (!this._selectorVisible) {
          this._actionShowMenu();
          break;
        }
        this._actionHighlightPrevMenuItem();
        break;
      }
      case "Down": // IE/Edge specific value
      case "ArrowDown": {
        event.preventDefault();
        if (!this._selectorVisible) {
          this._actionShowMenu();
          break;
        }
        this._actionHighlightNextMenuItem();
        break;
      }
      case "Enter": {
        event.preventDefault();
        if (!this._selectorVisible) {
          this._actionShowMenu();
          break;
        }

        const itemEl = this._highlightItemEl as HTMLLIElement;
        if (itemEl === null) break;

        const value = itemEl.getAttribute("value") as string;
        this._actionUpdateValue(value);
        this._actionHideMenu();
        break;
      }
      case "Escape": {
        event.preventDefault();
        this._actionHideMenu();
        break;
      }
      case "Home": {
        if (this._selectorVisible) {
          event.preventDefault();
          this._actionHighlightFirstMenuItem();
        }
        break;
      }
      case "End": {
        if (this._selectorVisible) {
          event.preventDefault();
          this._actionHighlightLastMenuItem();
        }
        break;
      }
      default:
        break;
    }
  }

  private _actionShowMenu() {
    this._buttonEl.focus();
    this._selectorVisible = true;

    if (this._selectedItemEl === null) return;
    this._setHighlightAndActiveDescendantMenu(this._selectedItemEl);
  }

  private _actionHideMenu() {
    this._selectorVisible = false;
    this._actionRemoveActiveDescendant();
  }

  private _actionToggleMenu() {
    if (this._selectorVisible) {
      this._actionHideMenu();
      return;
    }

    this._actionShowMenu();
  }

  private _actionHighlightFirstMenuItem() {
    this._setHighlightAndActiveDescendantMenu(this._firstItemEl);
  }

  private _actionHighlightLastMenuItem() {
    this._setHighlightAndActiveDescendantMenu(this._lastItemEl);
  }

  private _actionHighlightPrevMenuItem() {
    let prevItem = null;
    if (this._highlightItemEl !== null) {
      prevItem = this._highlightItemEl.previousElementSibling as HTMLLIElement;
      this._highlightItemEl.classList.remove(
        "kuc-dropdown__group__select-menu__highlight"
      );
    }

    if (prevItem === null) {
      prevItem = this._lastItemEl;
    }

    this._setHighlightAndActiveDescendantMenu(prevItem);
  }

  private _actionHighlightNextMenuItem() {
    let nextItem = null;
    if (this._highlightItemEl !== null) {
      nextItem = this._highlightItemEl.nextElementSibling as HTMLLIElement;
      this._highlightItemEl.classList.remove(
        "kuc-dropdown__group__select-menu__highlight"
      );
    }

    if (nextItem === null) {
      nextItem = this._firstItemEl;
    }

    this._setHighlightAndActiveDescendantMenu(nextItem);
  }

  private _actionClearAllHighlightMenuItem() {
    this._itemsEl.forEach((itemEl: HTMLLIElement) => {
      itemEl.classList.remove("kuc-dropdown__group__select-menu__highlight");
    });
    this._actionRemoveActiveDescendant();
  }

  private _setHighlightAndActiveDescendantMenu(selectedItemEl: HTMLLIElement) {
    this._actionHighlightMenuItem(selectedItemEl);
    this._actionSetActiveDescendant(selectedItemEl.id);
  }

  private _actionHighlightMenuItem(item: HTMLLIElement) {
    this._actionClearAllHighlightMenuItem();
    item.classList.add("kuc-dropdown__group__select-menu__highlight");
  }

  private _actionUpdateValue(value: string) {
    if (this.value === value) return;
    const detail: CustomEventDetail = { oldValue: this.value, value: value };
    this.value = value;
    dispatchCustomEvent(this, "change", detail);
  }

  private _actionSetActiveDescendant(value?: string) {
    if (value !== undefined && this._buttonEl !== null) {
      this._buttonEl.setAttribute("aria-activedescendant", value);
    }
  }

  private _actionRemoveActiveDescendant() {
    this._buttonEl.removeAttribute("aria-activedescendant");
  }

  private _getLabelWidth() {
    const context = document.createElement("div");
    context.style.height = "0px";
    context.style.overflow = "hidden";
    context.style.display = "inline-block";
    context.style.fontSize = "14px";

    const clonedLabel = this._labelEl.cloneNode(true);
    context.appendChild(clonedLabel);
    document.body.appendChild(context);

    const width = context.getBoundingClientRect().width;
    document.body.removeChild(context);

    return width;
  }

  private _updateContainerWidth() {
    const MIN_WIDTH = 180;
    let labelWidth = this._labelEl.getBoundingClientRect().width;
    if (labelWidth === 0) labelWidth = this._getLabelWidth();
    labelWidth = labelWidth > MIN_WIDTH ? labelWidth : MIN_WIDTH;
    this._groupEl.style.width = labelWidth + "px";
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
          display: inline-table;
          font-size: 14px;
          color: #333333;
          vertical-align: top;
          width: 180px;
          min-width: 180px;
        }
        kuc-dropdown[hidden] {
          display: none;
        }
        .kuc-dropdown__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          width: 100%;
          margin: 0px;
        }
        .kuc-dropdown__group__label {
          padding: 4px 0px 8px 0px;
          display: inline-block;
          white-space: nowrap;
        }
        .kuc-dropdown__group__label[hidden] {
          display: none;
        }
        .kuc-dropdown__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-dropdown__group__label__required-icon[hidden] {
          display: none;
        }
        .kuc-dropdown__group__toggle {
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
          cursor: pointer;
        }
        .kuc-dropdown__group__toggle:focus {
          outline: none;
          border: 1px solid #3498db;
        }
        .kuc-dropdown__group__toggle:disabled {
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
          color: #888888;
        }
        .kuc-dropdown__group__toggle__selected-item-label {
          font-size: 14px;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .kuc-dropdown__group__toggle__icon {
          flex: none;
          width: 38px;
          height: 38px;
        }
        .kuc-dropdown__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0px;
          word-break: break-all;
          white-space: normal;
        }
        .kuc-dropdown__group__error[hidden] {
          display: none;
        }
        .kuc-dropdown__group__select-menu {
          position: absolute;
          min-width: 280px;
          margin: 0;
          padding: 8px 0;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
          z-index: 2000;
          list-style: none;
        }
        .kuc-dropdown__group__select-menu[hidden] {
          display: none;
        }
        .kuc-dropdown__group__select-menu__item {
          padding: 8px 16px 8px 24px;
          line-height: 1;
          position: relative;
          cursor: pointer;
        }
        .kuc-dropdown__group__select-menu__item__icon {
          position: absolute;
          top: 50%;
          left: 6px;
          margin-top: -5px;
        }
        .kuc-dropdown__group__select-menu__item[aria-checked="true"] {
          color: #3498db;
        }
        .kuc-dropdown__group__select-menu__highlight[role="menuitem"] {
          background-color: #e2f2fe;
        }
      </style>
    `;
  }

  private _getItemTemplate(item: Item, index: number) {
    return html`
      <li
        class="kuc-dropdown__group__select-menu__item"
        role="menuitem"
        tabindex=${item.value === this.value ? "0" : "-1"}
        aria-checked=${item.value === this.value ? "true" : "false"}
        value=${item.value !== undefined ? item.value : ""}
        id="${this._GUID}-menuitem-${index}"
        @mousedown="${this._handleMouseDownDropdownItem}"
        @mouseover="${this._handleMouseOverDropdownItem}"
      >
        ${this._getDropdownIconSvgTemplate(item.value === this.value)}
        ${item.label === undefined ? item.value : item.label}
      </li>
    `;
  }

  private _getDropdownIconSvgTemplate(checked: boolean) {
    return svg`
      ${
        checked
          ? svg`<svg
          class='kuc-dropdown__group__select-menu__item__icon'
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
            fill='#3498db'/>
        </svg>`
          : ""
      }`;
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
