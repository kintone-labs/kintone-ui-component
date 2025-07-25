import { html, PropertyValues, svg } from "lit";
import { property, query, queryAll, state } from "lit/decorators.js";

import { ERROR_MESSAGE } from "../base/constant";
import { visiblePropConverter } from "../base/converter";
import { BaseError } from "../base/error";
import {
  createStyleOnHeader,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
} from "../base/kuc-base";
import { BaseLabel } from "../base/label";
import {
  validateArrayType,
  validateNumberType,
  validateProps,
  validateValueString,
} from "../base/validator";

import { DROPDOWN_CSS } from "./style";
import { DropdownChangeEventDetail, DropdownItem, DropdownProps } from "./type";

export { BaseError, BaseLabel };

let exportDropdown;
(() => {
  exportDropdown = window.customElements.get("kuc-dropdown");
  if (exportDropdown) {
    return;
  }

  class KucDropdown extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
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
      converter: visiblePropConverter,
    })
    visible = true;
    @property({ type: Array }) items: DropdownItem[] = [];

    @state()
    private _selectorVisible = false;

    @query(".kuc-dropdown__group__select-menu")
    private _menuEl!: HTMLUListElement;

    @queryAll(".kuc-dropdown__group__select-menu__item")
    private _itemsEl!: HTMLLIElement[];

    @query("button.kuc-dropdown__group__toggle")
    private _buttonEl!: HTMLButtonElement;

    @query(".kuc-dropdown__group__select-menu__item")
    private _firstItemEl!: HTMLLIElement;

    @query(".kuc-dropdown__group__select-menu__item:last-child")
    private _lastItemEl!: HTMLLIElement;

    @query(".kuc-dropdown__group__select-menu__item[aria-selected=true]")
    private _selectedItemEl!: HTMLLIElement;

    @query(".kuc-dropdown__group__select-menu__highlight")
    private _highlightItemEl!: HTMLLIElement;

    @queryAll(".kuc-dropdown__group__select-menu__item--disabled")
    private _disabledItemsEl!: HTMLLIElement[];

    private _timeoutID!: number | null;
    private _previousScrollTop!: number;

    private _GUID: string;

    private _DISABLED_CLASS =
      "kuc-dropdown__group__select-menu__item--disabled";

    private _hasValueInItems = false;

    private _scrollParent: HTMLElement | Window = window;

    constructor(props?: DropdownProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      this._handleClickDocument = this._handleClickDocument.bind(this);
      this._handleScrollMenu = this._handleScrollMenu.bind(this);
      this._handleScrollParent = this._handleScrollParent.bind(this);
      this._setMenuPosition = this._setMenuPosition.bind(this);
      this._setInitialValue(validProps);
      Object.assign(this, validProps);
    }

    private _setInitialValue(validProps: DropdownProps) {
      const hasValue = "value" in validProps;
      const hasSelectedIndex = "selectedIndex" in validProps;
      if (!hasValue && hasSelectedIndex) {
        this.value = this._getValue(validProps) || "";
      }
    }

    private _getSelectedLabel() {
      const items = this.items.filter((item, index) =>
        this._isCheckedItem(item, index),
      );
      if (items.length === 0) return "";
      return items[0].label === undefined ? items[0].value : items[0].label;
    }

    private _getToggleIconSvgTemplate() {
      return svg`
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z"
          fill="#3498db"/>
      </svg>
    `;
    }

    shouldUpdate(changedProperties: PropertyValues): boolean {
      if (changedProperties.has("items")) {
        if (!validateArrayType(this.items)) {
          this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.ITEMS.IS_NOT_ARRAY);
          return false;
        }
      }

      if (changedProperties.has("value")) {
        if (!validateValueString(this.value)) {
          this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.VALUE.IS_NOT_STRING);
          return false;
        }
      }

      if (changedProperties.has("selectedIndex")) {
        if (!validateNumberType(this.selectedIndex)) {
          this.throwErrorAfterUpdateComplete(
            ERROR_MESSAGE.SELECTED_INDEX.IS_NOT_NUMBER,
          );
          return false;
        }
      }
      return true;
    }

    willUpdate(changedProperties: PropertyValues): void {
      if (changedProperties.has("items") || changedProperties.has("value")) {
        this._hasValueInItems = this.items.some(
          (item) => item.value === this.value,
        );
      }
      if (changedProperties.has("value")) {
        if (this.value !== "" || this._hasValueInItems) return;
        this.selectedIndex = -1;
      }
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
            selectedIndex: this.selectedIndex,
          }) || "";
      }
      super.update(changedProperties);
    }

    private _getSelectedIndex() {
      if (!this.value && !this._hasValueInItems) {
        if (this.items[this.selectedIndex]) return this.selectedIndex;
        return -1;
      }

      const firstIndex = this.items.findIndex(
        (item) => item.value === this.value,
      );
      if (firstIndex === -1) return -1;
      const selectedIndex = this.items.findIndex(
        (item, index) =>
          item.value === this.value && index === this.selectedIndex,
      );
      return selectedIndex > -1 ? selectedIndex : firstIndex;
    }

    private _getValue(validProps: DropdownProps) {
      const _items = validProps.items || [];
      const _selectedIndex =
        validProps.selectedIndex === 0 || validProps.selectedIndex
          ? validProps.selectedIndex
          : -1;
      const item = _items[_selectedIndex];
      if (!item) return "";
      return item.value;
    }

    render() {
      return html`
        <div class="kuc-dropdown__group">
          <div
            class="kuc-dropdown__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </div>
          <button
            class="kuc-dropdown__group__toggle"
            id="${this._GUID}-toggle"
            type="button"
            aria-haspopup="true"
            aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled}"
            @mouseup="${this._handleMouseUpDropdownToggle}"
            @mousedown="${this._handleMouseDownDropdownToggle}"
            @click="${this._handleClickDropdownToggle}"
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
            id="${this._GUID}-popover"
            popover
            class="kuc-dropdown__group__select-menu"
            role="listbox"
            aria-hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this.items.map((item, number) =>
              this._getItemTemplate(item, number),
            )}
          </ul>
          <kuc-base-error
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error>
        </div>
      `;
    }

    firstUpdated() {
      window.addEventListener("resize", () => {
        this._actionResizeScrollWindow();
      });

      window.addEventListener("scroll", () => {
        this._actionResizeScrollWindow();
      });
    }

    async updated() {
      await this.updateComplete;
      if (this._selectorVisible) {
        this._menuEl.addEventListener("scroll", this._handleScrollMenu);
        this._setMenuPosition();
        this._scrollToView();
        setTimeout(() => {
          document.addEventListener("click", this._handleClickDocument, true);
          this._scrollParent = this._getScrollParent(this._buttonEl);
          this._scrollParent.removeEventListener(
            "scroll",
            this._handleScrollParent,
            true,
          );
          this._scrollParent.addEventListener(
            "scroll",
            this._handleScrollParent,
            true,
          );
        }, 1);
      } else {
        setTimeout(() => {
          document.removeEventListener(
            "click",
            this._handleClickDocument,
            true,
          );
          this._scrollParent.removeEventListener(
            "scroll",
            this._handleScrollParent,
            true,
          );
        }, 1);
      }
    }

    private _handleMouseDownDropdownItem(event: MouseEvent) {
      const itemEl = this._getItemElementWhenMouseOverDown(
        event.target as HTMLElement,
      );
      const value = itemEl.getAttribute("value") as string;
      const selectedIndex = itemEl.dataset.index || "0";
      this._actionUpdateValue(value, selectedIndex);
    }

    private _handleMouseOverDropdownItem(event: Event) {
      const itemEl = this._getItemElementWhenMouseOverDown(
        event.target as HTMLElement,
      );
      this._actionHighlightMenuItem(itemEl);
    }

    private _handleMouseLeaveMenu() {
      this._actionClearAllHighlightMenuItem();
    }

    private _handleMouseDownMenu(event: MouseEvent) {
      event.preventDefault();
    }

    private _handleMouseDownDropdownToggle(event: MouseEvent) {
      event.preventDefault();
    }

    private _handleMouseUpDropdownToggle(event: MouseEvent) {
      event.preventDefault();
    }

    private _handleClickDropdownToggle(event: Event) {
      event.stopPropagation();
      this._actionToggleMenu();
    }

    private _handleClickDocument(event: MouseEvent) {
      if (
        event.target === this._buttonEl ||
        this._buttonEl.contains(event.target as HTMLElement)
      ) {
        event.stopPropagation();
      }

      if (
        Array.from(this._disabledItemsEl).some(
          (disabledItemEl: HTMLLIElement) =>
            disabledItemEl === event.target ||
            disabledItemEl.contains(event.target as HTMLElement),
        )
      ) {
        return;
      }
      this._actionHideMenu();
    }

    private _handleScrollMenu() {
      this._previousScrollTop = this._menuEl.scrollTop;
    }

    private _handleKeyDownDropdownToggle(event: KeyboardEvent) {
      switch (event.key) {
        case "Up": // IE/Edge specific value
        case "ArrowUp": {
          event.preventDefault();
          if (this.items.length === 0) break;
          if (!this._selectorVisible) {
            this._actionShowMenu();
            break;
          }
          this._actionHighlightPrevMenuItem();
          break;
        }
        case "Tab":
          if (this._selectorVisible) {
            this._actionHideMenu();
          }
          break;
        case "Down": // IE/Edge specific value
        case "ArrowDown": {
          event.preventDefault();
          if (this.items.length === 0) break;
          if (!this._selectorVisible) {
            this._actionShowMenu();
            break;
          }
          this._actionHighlightNextMenuItem();
          break;
        }
        case "Enter": {
          event.preventDefault();
          if (this.items.length === 0) break;
          if (!this._selectorVisible) {
            this._actionShowMenu();
            break;
          }
          const { value, selectedIndex } = this._getInfoHighlightItem();
          if (value === null) break;
          this._actionUpdateValue(value, selectedIndex);
          this._actionHideMenu();
          break;
        }
        case "Escape": {
          event.preventDefault();
          if (this._selectorVisible) {
            event.stopPropagation();
          }
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

    private _getInfoHighlightItem() {
      const itemEl = this._highlightItemEl as HTMLLIElement;
      if (itemEl === null) return { value: null, selectedIndex: "-1" };

      const value = itemEl.getAttribute("value") as string;
      const selectedIndex = itemEl.dataset.index || "0";
      return { value: value, selectedIndex: selectedIndex };
    }

    private _actionShowMenu() {
      this._buttonEl.focus();
      if (this.items.length === 0) return;
      this._selectorVisible = true;
      this._menuEl.showPopover();
      if (!this._menuEl || !this._buttonEl) return;
      this._setMenuPosition();
      this._scrollParent = this._getScrollParent(this._buttonEl);
      this._scrollParent.removeEventListener(
        "scroll",
        this._handleScrollParent,
        true,
      );
      this._scrollParent.addEventListener(
        "scroll",
        this._handleScrollParent,
        true,
      );
      if (
        this._selectedItemEl === null ||
        this._selectedItemEl.classList.contains(this._DISABLED_CLASS)
      )
        return;
      this._setHighlightAndActiveDescendantMenu(this._selectedItemEl);
    }

    disconnectedCallback() {
      if (this._scrollParent) {
        this._scrollParent.removeEventListener(
          "scroll",
          this._handleScrollParent,
          true,
        );
      }
      super.disconnectedCallback && super.disconnectedCallback();
    }

    private _handleScrollParent = (event: Event) => {
      if (event.target === this._menuEl) return;
      this._setMenuPosition();
    };

    private _actionHideMenu() {
      this._selectorVisible = false;
      this._menuEl.hidePopover();
      if (this._scrollParent) {
        this._scrollParent.removeEventListener(
          "scroll",
          this._handleScrollParent,
          true,
        );
      }
      this._actionRemoveActiveDescendant();
    }

    private _getScrollParent(element: HTMLElement): HTMLElement | Window {
      let parent: HTMLElement | null = element.parentElement;
      while (parent) {
        const style = window.getComputedStyle(parent);
        const overflowY = style.overflowY;
        if (
          overflowY === "auto" ||
          overflowY === "scroll" ||
          overflowY === "overlay"
        ) {
          return parent;
        }
        parent = parent.parentElement;
      }
      return window;
    }

    private _actionToggleMenu() {
      if (this.items.length === 0) return;
      if (this._selectorVisible) {
        this._actionHideMenu();
        return;
      }

      this._actionShowMenu();
    }

    private _actionHighlightFirstMenuItem() {
      let firstItem = this._firstItemEl;
      let itemIsDisabled = false;
      for (let i = 0; i < this.items.length; i++) {
        itemIsDisabled = firstItem.classList.contains(this._DISABLED_CLASS);
        if (itemIsDisabled) {
          firstItem = firstItem.nextElementSibling as HTMLLIElement;
        } else {
          break;
        }
      }

      !itemIsDisabled && this._setHighlightAndActiveDescendantMenu(firstItem);
    }

    private _actionHighlightLastMenuItem() {
      let lastItem = this._lastItemEl;
      let itemIsDisabled = false;
      for (let i = 0; i < this.items.length; i++) {
        itemIsDisabled = lastItem.classList.contains(this._DISABLED_CLASS);
        if (itemIsDisabled) {
          lastItem = lastItem.previousElementSibling as HTMLLIElement;
        } else {
          break;
        }
      }

      !itemIsDisabled && this._setHighlightAndActiveDescendantMenu(lastItem);
    }

    private _actionHighlightPrevMenuItem() {
      let prevItem = null;
      if (this._highlightItemEl !== null) {
        prevItem = this._highlightItemEl
          .previousElementSibling as HTMLLIElement;
      }

      if (prevItem === null) {
        prevItem = this._lastItemEl;
      }

      let prevItemIsDisabled = false;
      for (let i = 0; i < this.items.length; i++) {
        prevItemIsDisabled = prevItem.classList.contains(this._DISABLED_CLASS);
        if (prevItemIsDisabled) {
          prevItem = prevItem.previousElementSibling as HTMLLIElement;
          if (prevItem === null) {
            prevItem = this._lastItemEl;
          }
        } else {
          break;
        }
      }

      !prevItemIsDisabled &&
        this._setHighlightAndActiveDescendantMenu(prevItem);
    }

    private _actionHighlightNextMenuItem() {
      let nextItem = null;
      if (this._highlightItemEl !== null) {
        nextItem = this._highlightItemEl.nextElementSibling as HTMLLIElement;
      }

      if (nextItem === null) {
        nextItem = this._firstItemEl;
      }

      let nextItemIsDisabled = false;
      for (let i = 0; i < this.items.length; i++) {
        nextItemIsDisabled = nextItem.classList.contains(this._DISABLED_CLASS);
        if (nextItemIsDisabled) {
          nextItem = nextItem.nextElementSibling as HTMLLIElement;
          if (nextItem === null) {
            nextItem = this._firstItemEl;
          }
        } else {
          break;
        }
      }

      !nextItemIsDisabled &&
        this._setHighlightAndActiveDescendantMenu(nextItem);
    }

    private _actionClearAllHighlightMenuItem() {
      this._itemsEl.forEach((itemEl: HTMLLIElement) => {
        itemEl.classList.remove("kuc-dropdown__group__select-menu__highlight");
      });
      this._actionRemoveActiveDescendant();
    }

    private _setHighlightAndActiveDescendantMenu(
      selectedItemEl: HTMLLIElement,
    ) {
      this._actionHighlightMenuItem(selectedItemEl);
      this._actionSetActiveDescendant(selectedItemEl.id);
      this._scrollToView();
    }

    private _actionHighlightMenuItem(item: HTMLLIElement) {
      this._actionClearAllHighlightMenuItem();
      item.classList.add("kuc-dropdown__group__select-menu__highlight");
    }

    private _actionUpdateValue(value: string, index: string) {
      const indexNumber = parseInt(index, 10);
      if (this.value === value && this.selectedIndex === indexNumber) return;
      const eventDetail: DropdownChangeEventDetail = {
        oldValue: this.value,
        value: value,
      };
      this.value = value;
      this.selectedIndex = indexNumber;
      dispatchCustomEvent(this, "change", eventDetail);
    }

    private _actionSetActiveDescendant(value?: string) {
      if (value !== undefined && this._buttonEl !== null) {
        this._buttonEl.setAttribute("aria-activedescendant", value);
      }
    }

    private _actionRemoveActiveDescendant() {
      this._buttonEl.removeAttribute("aria-activedescendant");
    }

    private _setMenuPositionAboveOrBelow(
      menuEl: HTMLUListElement,
      buttonEl: HTMLButtonElement,
    ) {
      const buttonRect = buttonEl.getBoundingClientRect();
      const spaceAbove = buttonRect.top;
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      menuEl.style.maxHeight = "none";
      const menuHeight = menuEl.getBoundingClientRect().height;
      let top, maxHeight;
      if (spaceBelow >= menuHeight) {
        top = buttonRect.bottom;
        maxHeight = spaceBelow;
      } else if (spaceAbove >= menuHeight) {
        top = buttonRect.top - menuHeight;
        maxHeight = spaceAbove;
      } else if (spaceBelow >= spaceAbove) {
        top = buttonRect.bottom;
        maxHeight = spaceBelow;
      } else {
        top = 0;
        maxHeight = spaceAbove;
      }
      menuEl.style.position = "fixed";
      menuEl.style.left = `${buttonRect.left}px`;
      menuEl.style.top = `${top}px`;
      menuEl.style.maxHeight = `${maxHeight}px`;
      menuEl.style.overflowY = "auto";
    }

    private _setMenuPositionLeftOrRight(
      menuEl: HTMLUListElement,
      buttonEl: HTMLButtonElement,
    ) {
      menuEl.style.right = "auto";
      const menuWidth = menuEl.getBoundingClientRect().width;
      const buttonRect = buttonEl.getBoundingClientRect();
      const toRight = window.innerWidth - buttonRect.left;
      const toLeft = buttonRect.left;
      if (toRight < menuWidth && toLeft > menuWidth) {
        menuEl.style.left = "auto";
        menuEl.style.right = `${window.innerWidth - buttonRect.right}px`;
      }
    }

    private _setMenuPosition() {
      // If the menu or button element is not available, do not proceed
      if (!this._menuEl || !this._buttonEl) {
        if (this._scrollParent) {
          this._scrollParent.removeEventListener(
            "scroll",
            this._handleScrollParent,
            true,
          );
        }
        return;
      }
      this._setMenuPositionAboveOrBelow(this._menuEl, this._buttonEl);
      this._setMenuPositionLeftOrRight(this._menuEl, this._buttonEl);
      // restore previous scroll position
      if (this._menuEl && this._previousScrollTop) {
        this._menuEl.scrollTop = this._previousScrollTop;
      }
    }

    private _scrollToView() {
      if (!this._highlightItemEl || !this._menuEl) return;

      const menuElClientRect = this._menuEl.getBoundingClientRect();
      const highlightItemClientRect =
        this._highlightItemEl.getBoundingClientRect();

      if (highlightItemClientRect.top < menuElClientRect.top) {
        this._menuEl.scrollTop -=
          menuElClientRect.top - highlightItemClientRect.top;
      }

      if (menuElClientRect.bottom < highlightItemClientRect.bottom) {
        this._menuEl.scrollTop +=
          highlightItemClientRect.bottom - menuElClientRect.bottom;
      }
    }

    private _actionResizeScrollWindow() {
      if (this._timeoutID || !this._selectorVisible) return;
      this._timeoutID = window.setTimeout(() => {
        this._timeoutID = null;
        this._setMenuPosition();
      }, 50);
    }

    private _isCheckedItem(item: DropdownItem, index: number) {
      if (!this.value) return this.selectedIndex === index;
      return item.value === this.value && this.selectedIndex === index;
    }

    private _getItemTemplate(item: DropdownItem, index: number) {
      const isCheckedItem = this._isCheckedItem(item, index);
      return html`
        <li
          class="kuc-dropdown__group__select-menu__item ${item.disabled
            ? this._DISABLED_CLASS
            : ""}"
          role="option"
          tabindex="${!item.disabled && isCheckedItem ? "0" : "-1"}"
          aria-selected="${isCheckedItem ? "true" : "false"}"
          data-index="${index}"
          value="${item.value !== undefined ? item.value : ""}"
          id="${this._GUID}-menuitem-${index}"
          @mousedown="${!item.disabled
            ? this._handleMouseDownDropdownItem
            : null}"
          @mouseover="${!item.disabled
            ? this._handleMouseOverDropdownItem
            : null}"
        >
          ${this._getDropdownIconSvgTemplate(isCheckedItem, !!item.disabled)}
          ${item.label === undefined ? item.value : item.label}
        </li>
      `;
    }

    private _getDropdownIconSvgTemplate(checked: boolean, disabled: boolean) {
      return svg`
      ${
        checked
          ? svg`<svg
          class="kuc-dropdown__group__select-menu__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="${disabled ? "#888888" : "#3498db"}"/>
        </svg>`
          : ""
      }`;
    }

    private _getItemElementWhenMouseOverDown(
      eventTarget: HTMLElement,
    ): HTMLLIElement {
      if (
        eventTarget.classList.value
          .split(" ")
          .includes("kuc-dropdown__group__select-menu__item")
      ) {
        return eventTarget as HTMLLIElement;
      }

      return this._getItemElementWhenMouseOverDown(
        eventTarget.parentElement as HTMLElement,
      );
    }
  }
  window.customElements.define("kuc-dropdown", KucDropdown);
  createStyleOnHeader(DROPDOWN_CSS);
  exportDropdown = KucDropdown;
})();

const Dropdown = exportDropdown as any;
export { Dropdown };
