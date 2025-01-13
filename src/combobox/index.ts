import { html, PropertyValues, svg } from "lit";
import { property, query, queryAll, state } from "lit/decorators.js";

import { ERROR_MESSAGE } from "../base/constant";
import { visiblePropConverter } from "../base/converter";
import {
  createStyleOnHeader,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
} from "../base/kuc-base";
import {
  validateArrayType,
  validateDuplicatedValues,
  validateProps,
  validateValueString,
} from "../base/validator";

import { COMBOBOX_CSS } from "./style";
import { ComboboxChangeEventDetail, ComboboxItem, ComboboxProps } from "./type";
import "../base/label";
import "../base/error";

let exportCombobox;
(() => {
  exportCombobox = window.customElements.get("kuc-combobox");
  if (exportCombobox) {
    return;
  }

  class KucCombobox extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String }) error = "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) label = "";
    @property({ type: String }) placeholder = "";
    @property({ type: String }) value = "";
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) requiredIcon = false;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;
    @property({ type: Array }) items: ComboboxItem[] = [];

    @state()
    private _selectorVisible = false;

    @query(".kuc-combobox__group__toggle")
    private _toggleEl!: HTMLDivElement;

    @query(".kuc-combobox__group__toggle__input")
    private _inputEl!: HTMLInputElement;

    @query(".kuc-combobox__group__select-menu")
    private _menuEl!: HTMLUListElement;

    @queryAll(".kuc-combobox__group__select-menu__item")
    private _itemsEl!: HTMLLIElement[];

    @query(".kuc-combobox__group__select-menu__item")
    private _firstItemEl!: HTMLLIElement;

    @query(".kuc-combobox__group__select-menu__item:last-child")
    private _lastItemEl!: HTMLLIElement;

    @query(".kuc-combobox__group__select-menu__item[aria-selected=true]")
    private _selectedItemEl!: HTMLLIElement;

    @query(".kuc-combobox__group__select-menu__highlight")
    private _highlightItemEl!: HTMLLIElement;

    @query(".kuc-base-error__error")
    private _errorEl!: HTMLDivElement;

    @queryAll(".kuc-combobox__group__select-menu__item--disabled")
    private _disabledItemsEl!: HTMLLIElement[];

    private _timeoutID!: number | null;
    private _previousScrollTop!: number;

    private _GUID: string;

    @state()
    private _searchText = "";

    private _DISABLED_CLASS =
      "kuc-combobox__group__select-menu__item--disabled";

    private _query = "";
    private _matchingItems: ComboboxItem[] = [];

    constructor(props?: ComboboxProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      this._handleClickDocument = this._handleClickDocument.bind(this);
      this._handleScrollMenu = this._handleScrollMenu.bind(this);
      Object.assign(this, validProps);
    }

    shouldUpdate(changedProperties: PropertyValues): boolean {
      if (changedProperties.has("items")) {
        if (!validateArrayType(this.items)) {
          this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.ITEMS.IS_NOT_ARRAY);
          return false;
        }

        const itemsValues = this.items.map((item) => item.value);
        if (!validateDuplicatedValues(itemsValues)) {
          this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.ITEMS.IS_DUPLICATED);
          return false;
        }
      }

      if (changedProperties.has("value") && !validateValueString(this.value)) {
        this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.VALUE.IS_NOT_STRING);
        return false;
      }

      return true;
    }

    willUpdate(changedProperties: PropertyValues) {
      if (changedProperties.has("value")) {
        this._searchText = this._getSelectedLabel() || "";
      }
    }

    render() {
      return html`
        <div class="kuc-combobox__group">
          <div
            class="kuc-combobox__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </div>
          <div class="kuc-combobox__group__toggle">
            <input
              class="kuc-combobox__group__toggle__input"
              role="combobox"
              type="text"
              .value="${this._searchText}"
              aria-haspopup="listbox"
              aria-autocomplete="list"
              aria-labelledby="${this._GUID}-label"
              aria-controls="${this._GUID}-listbox"
              aria-describedby="${this._GUID}-error"
              aria-expanded="${this._selectorVisible}"
              aria-required="${this.requiredIcon}"
              placeholder="${this.placeholder}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeComboboxInput}"
              @input="${this._handleInputComboboxInput}"
              @keydown="${this._handleKeyDownComboboxInput}"
              @click="${this._handleClickComboboxInput}"
              @blur="${this._handleBlurComboboxInput}"
            />
            <div class="kuc-combobox__group__toggle__icon">
              <button
                class="kuc-combobox__group__toggle__icon__button"
                tabindex="-1"
                type="button"
                aria-labelledby="${this._GUID}-label"
                aria-controls="${this._GUID}-listbox"
                aria-expanded="${this._selectorVisible}"
                ?disabled="${this.disabled}"
                @click="${this._handleClickToggleButton}"
              >
                ${this._getToggleIconSvgTemplate()}
              </button>
            </div>
          </div>
          <ul
            class="kuc-combobox__group__select-menu"
            role="listbox"
            id="${this._GUID}-listbox"
            aria-labelledby="${this._GUID}-label"
            aria-hidden="${!this._selectorVisible}"
            ?hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this._matchingItems.map((item, number) =>
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

    async updated(changedProperties: PropertyValues) {
      super.updated(changedProperties);

      await this.updateComplete;
      if (this._selectorVisible) {
        this._menuEl.addEventListener("scroll", this._handleScrollMenu);
        this._setMenuPosition();
        this._scrollToView();
        if (
          this._selectedItemEl === null ||
          this._selectedItemEl.classList.contains(this._DISABLED_CLASS)
        ) {
          this._actionClearAllHighlightMenuItem();
        } else {
          this._setHighlightAndActiveDescendantMenu(this._selectedItemEl);
        }

        setTimeout(() => {
          document.addEventListener("click", this._handleClickDocument, true);
        }, 1);
      } else {
        setTimeout(() => {
          document.removeEventListener(
            "click",
            this._handleClickDocument,
            true,
          );
        }, 1);
      }
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

    private _getItemTemplate(item: ComboboxItem, index: number) {
      const isCheckedItem = this._isCheckedItem(item);
      const isDisabled = item.disabled;
      const text = item.label === undefined ? item.value : item.label;
      let newText = isCheckedItem ? html`<b>${text}</b>` : html`${text}`;
      const trimmedQuery = this._query.trim().toLowerCase();
      if (trimmedQuery && text) {
        const startIndex = text.toLowerCase().indexOf(trimmedQuery);
        const endIndex = startIndex + trimmedQuery.length;
        newText = html`
          ${text.slice(0, startIndex)}<b>${text.slice(
            startIndex,
            endIndex,
          )}</b>${text.slice(endIndex)}
        `;
      }

      return html`
        <li
          class="kuc-combobox__group__select-menu__item ${isDisabled
            ? this._DISABLED_CLASS
            : ""}"
          role="option"
          aria-selected="${isCheckedItem ? "true" : "false"}"
          value="${item.value !== undefined ? item.value : ""}"
          id="${this._GUID}-menuitem-${index}"
          @click="${!isDisabled ? this._handleClickComboboxItem : null}"
          @mouseover="${!isDisabled ? this._handleMouseOverComboboxItem : null}"
        >
          ${this._getComboboxIconSvgTemplate(isCheckedItem, isDisabled)}
          ${newText}
        </li>
      `;
    }

    private _getComboboxIconSvgTemplate(checked: boolean, disabled?: boolean) {
      return svg`
      ${
        checked
          ? svg`<svg
          class="kuc-combobox__group__select-menu__item__icon"
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

    private _handleClickComboboxItem(event: MouseEvent) {
      const itemEl = this._getItemElementWhenMouseOverDown(
        event.target as HTMLElement,
      );
      const value = itemEl.getAttribute("value") as string;
      this._actionUpdateValue(value);
    }

    private _handleMouseOverComboboxItem(event: Event) {
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

    private _handleClickToggleButton(event: MouseEvent): void {
      event.preventDefault();
      this._inputEl.focus();
      this._inputEl.select();
      this._resetToggleInputValue();
      this._actionToggleMenu();
    }

    private _handleInputComboboxInput(event: Event) {
      event.stopPropagation();

      this._searchText = this._inputEl.value;
      this._query = this._inputEl.value;
      this._setMatchingItems();
    }

    private _handleClickComboboxInput(event: Event) {
      event.stopPropagation();
      this._inputEl.select();
      this._setMatchingItems();
    }

    private _handleChangeComboboxInput(event: Event) {
      event.stopPropagation();
    }

    private _handleBlurComboboxInput(event: Event) {
      this._resetToggleInputValue();
    }

    private _handleClickDocument(event: MouseEvent) {
      if (
        event.target === this._toggleEl ||
        this._toggleEl.contains(event.target as HTMLElement)
      ) {
        this._inputEl.focus();
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

    private _handleKeyDownComboboxInput(event: KeyboardEvent) {
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
        case "Tab":
          if (this._selectorVisible) {
            this._actionHideMenu();
          }
          break;
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
          const itemEl = this._highlightItemEl as HTMLLIElement;
          if (itemEl === null) break;

          const value = itemEl.getAttribute("value") as string;
          this._actionUpdateValue(value);
          this._actionHideMenu();
          break;
        }
        case "Escape": {
          event.preventDefault();
          if (this._selectorVisible) {
            event.stopPropagation();
          }
          this._resetToggleInputValue();
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

    private _getSelectedLabel() {
      const items = this.items.filter((item, index) =>
        this._isCheckedItem(item),
      );
      if (items.length === 0) return "";
      return items[0].label === undefined ? items[0].value : items[0].label;
    }

    private _actionShowMenu() {
      if (this._query.trim() === "") {
        this._matchingItems = this.items;
      }

      if (this.items.length === 0 || this._matchingItems.length === 0) {
        return;
      }

      this._inputEl.focus();
      this._selectorVisible = true;
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
      let firstItem = this._firstItemEl;
      let itemIsDisabled = false;
      for (let i = 0; i < this._matchingItems.length; i++) {
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
      for (let i = 0; i < this._matchingItems.length; i++) {
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
      for (let i = 0; i < this._matchingItems.length; i++) {
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
      for (let i = 0; i < this._matchingItems.length; i++) {
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
        itemEl.classList.remove("kuc-combobox__group__select-menu__highlight");
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
      item.classList.add("kuc-combobox__group__select-menu__highlight");
    }

    private _actionUpdateValue(value: string) {
      if (this.value === value) {
        this._resetToggleInputValue();
        return;
      }
      const detail: ComboboxChangeEventDetail = {
        oldValue: this.value,
        value: value,
      };
      this.value = value;
      this._query = "";
      dispatchCustomEvent(this, "change", detail);
    }

    private _actionSetActiveDescendant(value?: string) {
      if (value !== undefined && this._inputEl !== null) {
        this._inputEl.setAttribute("aria-activedescendant", value);
      }
    }

    private _actionRemoveActiveDescendant() {
      this._inputEl.removeAttribute("aria-activedescendant");
    }

    private _setMatchingItems() {
      const matchingItems = this.items.filter((item) => {
        const escapePattern = (string: string) => {
          return string.replace(/[.*+?^=!:${}()|[\]/\\]/g, "\\$&");
        };
        const regex = new RegExp(escapePattern(this._query.trim()), "gi");

        if (item.label) return regex.test(item.label);
        if (item.value) return regex.test(item.value);
        return false;
      });

      if (matchingItems.length === 0) {
        this._matchingItems = [];
        this._actionHideMenu();
      } else {
        this._matchingItems = matchingItems;
        this._actionShowMenu();
      }
    }

    private _getScrollbarWidthHeight() {
      const scrollDiv = document.createElement("div");
      scrollDiv.style.cssText =
        "overflow: scroll; position: absolute; top: -9999px;";
      document.body.appendChild(scrollDiv);
      const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      const scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
      document.body.removeChild(scrollDiv);
      return { scrollbarWidth, scrollbarHeight };
    }

    private _getDistanceToggleButton() {
      const { scrollbarWidth, scrollbarHeight } =
        this._getScrollbarWidthHeight();

      const isWindowRightScrollbarShow =
        document.body.scrollHeight > window.innerHeight;
      const isWindowBottomScrollbarShow =
        document.body.scrollWidth > window.innerWidth;

      const toTop = this._toggleEl.getBoundingClientRect().top;
      const toBottom =
        window.innerHeight -
        this._toggleEl.getBoundingClientRect().bottom -
        (isWindowBottomScrollbarShow ? scrollbarHeight : 0);
      const toLeft = this._toggleEl.getBoundingClientRect().left;
      const toRight =
        window.innerWidth -
        this._toggleEl.getBoundingClientRect().left -
        (isWindowRightScrollbarShow ? scrollbarWidth : 0);

      return { toTop, toBottom, toLeft, toRight };
    }

    private _setMenuPositionAboveOrBelow() {
      this._menuEl.style.height = "auto";
      this._menuEl.style.bottom = "auto";
      this._menuEl.style.overflowY = "scroll";

      this._menuEl.style.maxHeight = "none";
      const menuHeightNoMaxHeight = this._menuEl.getBoundingClientRect().height;
      this._menuEl.style.maxHeight =
        "var(--kuc-combobox-menu-max-height, none)";
      const menuHeightWithMaxHeight =
        this._menuEl.getBoundingClientRect().height;

      const ERROR_MARGIN = 16;
      const distanceToggleButton = this._getDistanceToggleButton();
      if (distanceToggleButton.toBottom >= menuHeightWithMaxHeight) {
        if (menuHeightNoMaxHeight > menuHeightWithMaxHeight) {
          this._previousScrollTop &&
            (this._menuEl.scrollTop = this._previousScrollTop);
        } else {
          this._menuEl.style.overflowY = "";
        }
        return;
      }

      if (distanceToggleButton.toBottom < distanceToggleButton.toTop) {
        // Above
        const errorHeight = this._errorEl.offsetHeight
          ? this._errorEl.offsetHeight + ERROR_MARGIN
          : 0;
        this._menuEl.style.bottom = `${
          this._toggleEl.offsetHeight + errorHeight
        }px`;
        if (distanceToggleButton.toTop >= menuHeightWithMaxHeight) {
          if (menuHeightNoMaxHeight > menuHeightWithMaxHeight) {
            this._previousScrollTop &&
              (this._menuEl.scrollTop = this._previousScrollTop);
          } else {
            this._menuEl.style.overflowY = "";
          }
          return;
        }
        this._menuEl.style.height = `${distanceToggleButton.toTop}px`;
      } else {
        // Below
        this._menuEl.style.height = `${distanceToggleButton.toBottom}px`;
      }

      this._previousScrollTop &&
        (this._menuEl.scrollTop = this._previousScrollTop);
    }

    private _setMenuPositionLeftOrRight() {
      this._menuEl.style.right = "auto";

      const menuWidth = this._menuEl.getBoundingClientRect().width;
      const distanceToggleButton = this._getDistanceToggleButton();
      if (
        // Right
        distanceToggleButton.toRight >= menuWidth ||
        distanceToggleButton.toLeft < menuWidth ||
        distanceToggleButton.toRight < 0
      )
        return;

      // Left
      const right = this._toggleEl.offsetWidth - distanceToggleButton.toRight;
      this._menuEl.style.right = right > 0 ? `${right}px` : "0px";
    }

    private _setMenuPosition() {
      this._setMenuPositionAboveOrBelow();
      this._setMenuPositionLeftOrRight();
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

    private _isCheckedItem(item: ComboboxItem) {
      return item.value === this.value;
    }

    private _resetToggleInputValue() {
      const selectedLabel = this._getSelectedLabel();
      if (this._searchText !== selectedLabel) {
        this._searchText = selectedLabel ? selectedLabel : "";
      }

      this._query = "";
    }

    private _getItemElementWhenMouseOverDown(
      eventTarget: HTMLElement,
    ): HTMLLIElement {
      if (
        eventTarget.classList.value
          .split(" ")
          .includes("kuc-combobox__group__select-menu__item")
      ) {
        return eventTarget as HTMLLIElement;
      }

      return this._getItemElementWhenMouseOverDown(
        eventTarget.parentElement as HTMLElement,
      );
    }
  }
  window.customElements.define("kuc-combobox", KucCombobox);
  createStyleOnHeader(COMBOBOX_CSS);
  exportCombobox = KucCombobox;
})();

const Combobox = exportCombobox as any;
export { Combobox };
