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
export { BaseError, BaseLabel };
import {
  validateArrayType,
  validateDuplicatedValues,
  validateProps,
} from "../base/validator";

import { USER_ORG_GROUP_SELECT_CSS } from "./style";
import {
  UserOrgGroupSelectChangeEventDetail,
  UserOrgGroupSelectClickIconEventDetail,
  UserOrgGroupSelectItem,
  UserOrgGroupSelectProps,
} from "./type";

let exportUserOrgGroupSelect;

(() => {
  exportUserOrgGroupSelect = window.customElements.get(
    "kuc-user-org-group-select",
  );
  if (exportUserOrgGroupSelect) {
    return;
  }

  class KucUserOrgGroupSelect extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String }) error = "";
    @property({ type: String }) icon: "" | "user" | "org" | "group" = "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) label = "";
    @property({ type: String }) placeholder = "";
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) requiredIcon = false;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;
    @property({ type: Array }) items: UserOrgGroupSelectItem[] = [];
    @property({ type: Array }) value: string[] = [];

    @queryAll(
      ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
    )
    private _itemsEl!: HTMLLIElement[];
    @query(
      ".kuc-user-org-group-select__group__container__select-area__toggle__input",
    )
    private _inputEl!: HTMLInputElement;
    @query(".kuc-user-org-group-select__group__container__select-area__toggle")
    private _toggleEl!: HTMLDivElement;
    @query(".kuc-user-org-group-select__group__container__select-area")
    private _selectAreaEl!: HTMLDivElement;
    @query(
      ".kuc-user-org-group-select__group__container__select-area__select-menu",
    )
    private _menuEl!: HTMLUListElement;
    @query(
      ".kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
    )
    private _highlightItemEl!: HTMLLIElement;
    @query(
      ".kuc-user-org-group-select__group__container__select-area__select-menu__item:first-child",
    )
    private _firstItemEl!: HTMLLIElement;
    @query(
      ".kuc-user-org-group-select__group__container__select-area__select-menu__item:last-child",
    )
    private _lastItemEl!: HTMLLIElement;

    @queryAll(
      ".kuc-user-org-group-select__group__container__select-area__select-menu__item--disabled",
    )
    private _disabledItemsEl!: HTMLLIElement[];

    @state()
    private _selectedValues: string[] = [];
    @state()
    private _searchText = "";
    @state()
    private _selectorVisible = false;
    private _query = "";
    private _matchingItems: UserOrgGroupSelectItem[] = [];
    private _previousScrollTop!: number;
    private _DISABLED_ITEM_CLASS =
      "kuc-user-org-group-select__group__container__select-area__select-menu__item--disabled";
    private _DISABLED_ICON_CLASS =
      "kuc-user-org-group-select__group__container__select-area__select-menu__item__icon--disabled";
    private _timeoutID!: number | null;
    private _GUID: string;
    private _SMALL_ICON_SIZE = 24;
    private _LARGE_ICON_SIZE = 48;

    constructor(props?: UserOrgGroupSelectProps) {
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

      if (changedProperties.has("value") && !validateArrayType(this.value)) {
        this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.VALUE.IS_NOT_ARRAY);
        return false;
      }
      return true;
    }

    render() {
      const iconType = this._getIconType();
      return html`
        <div class="kuc-user-org-group-select__group">
          <div
            class="kuc-user-org-group-select__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </div>
          <div class="kuc-user-org-group-select__group__container">
            <div
              class="kuc-user-org-group-select__group__container__select-area"
            >
              <div
                class="kuc-user-org-group-select__group__container__select-area__toggle"
              >
                <input
                  class="kuc-user-org-group-select__group__container__select-area__toggle__input"
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
                  @change="${this._handleChangeUserOrgGroupInput}"
                  @input="${this._handleInputUserOrgGroupInput}"
                  @keydown="${this._handleKeyDownUserOrgGroupInput}"
                  @click="${this._handleClickUserOrgGroupInput}"
                  @blur="${this._handleBlurUserOrgGroupInput}"
                />
                <div
                  class="kuc-user-org-group-select__group__container__select-area__toggle__icon"
                >
                  <button
                    class="kuc-user-org-group-select__group__container__select-area__toggle__icon__button"
                    tabindex="-1"
                    type="button"
                    aria-label="search"
                    aria-controls="${this._GUID}-listbox"
                    aria-expanded="${this._selectorVisible}"
                    ?disabled="${this.disabled}"
                    @mousedown="${this._handleMouseDownToggleButton}"
                    @click="${this._handleClickToggleButton}"
                  >
                    ${this._getSearchPickerSvgTemplate()}
                  </button>
                </div>
              </div>
              <ul
                class="kuc-user-org-group-select__group__container__select-area__select-menu"
                role="listbox"
                id="${this._GUID}-listbox"
                aria-labelledby="${this._GUID}-label"
                aria-hidden="${!this._selectorVisible}"
                ?hidden="${!this._selectorVisible}"
                @mouseleave="${this._handleMouseLeaveMenu}"
                @mousedown="${this._handleMouseDownMenu}"
              >
                ${this._matchingItems.map((item, number) =>
                  this._getMatchedItemTemplate(item, number),
                )}
              </ul>
              <ul
                class="kuc-user-org-group-select__group__container__select-area__selected-list"
              >
                ${this._selectedValues.map((value, index) =>
                  this._getSelectedItemTemplate(value, index),
                )}
              </ul>
            </div>
            <div
              class="kuc-user-org-group-select__group__container__picker"
              ?hidden="${!iconType}"
            >
              <button
                class="kuc-user-org-group-select__group__container__picker__button"
                tabindex="-1"
                type="button"
                ?disabled="${this.disabled}"
                @click="${this._handleClickIconButton}"
              >
                ${this._getPickerSVGTemplateByIcon(iconType)}
              </button>
            </div>
          </div>
          <kuc-base-error
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error>
        </div>
      `;
    }

    private _getIconType() {
      if (
        this.icon === "user" ||
        this.icon === "org" ||
        this.icon === "group"
      ) {
        return this.icon;
      }
      return undefined;
    }

    firstUpdated() {
      this._initializeSelectedValues();
      window.addEventListener("resize", () => {
        this._actionResizeScrollWindow();
      });

      window.addEventListener("scroll", () => {
        this._actionResizeScrollWindow();
      });
    }

    private _actionResizeScrollWindow() {
      if (this._timeoutID || !this._selectorVisible) return;
      this._timeoutID = window.setTimeout(() => {
        this._timeoutID = null;
        this._setMenuPosition();
      }, 50);
    }

    async updated(changedProperties: PropertyValues) {
      super.updated(changedProperties);
      if (changedProperties.has("value")) {
        this._initializeSelectedValues();
      }
      await this.updateComplete;
      if (this._selectorVisible) {
        this._menuEl.addEventListener("scroll", this._handleScrollMenu);
        this._setMenuPosition();
        this._scrollToView();
        this._actionClearAllHighlightMenuItem();

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

    private _initializeSelectedValues() {
      if (Array.isArray(this.value)) {
        this._selectedValues = this.value.filter((value) =>
          this.items.some((item) => item.value === value),
        );
      }
    }
    private _getMatchedItemTemplate(
      item: UserOrgGroupSelectItem,
      index: number,
    ) {
      const text =
        item.label === undefined || item.label === null
          ? item.value
          : item.label;
      let newText = html`${text}`;
      const isDisabled = item.disabled;
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
          class="kuc-user-org-group-select__group__container__select-area__select-menu__item ${isDisabled
            ? this._DISABLED_ITEM_CLASS
            : ""}"
          role="option"
          value="${item.value !== undefined ? item.value : ""}"
          id="${this._GUID}-menuitem-${index}"
          @click="${!isDisabled ? this._handleClickUserOrgGroupItem : null}"
          @mouseover="${!isDisabled
            ? this._handleMouseOverUserOrgGroupItem
            : null}"
        >
          <div
            class="kuc-user-org-group-select__group__container__select-area__select-menu__item__icon ${isDisabled
              ? this._DISABLED_ICON_CLASS
              : ""}"
          >
            ${this._getSvgTemplateByType(item ? item.type : "")}
          </div>
          <div
            class="kuc-user-org-group-select__group__container__select-area__select-menu__item__text"
          >
            ${newText}
          </div>
        </li>
      `;
    }

    private _getSelectedItemTemplate(value: string, index: number) {
      const selectedItem = this.items.filter((item) => item.value === value)[0];
      if (!selectedItem) return "";
      const disabled = selectedItem?.disabled;
      const text =
        selectedItem.label === undefined || selectedItem.label === null
          ? selectedItem.value
          : selectedItem.label;
      return html`
        <li
          class="kuc-user-org-group-select__group__container__select-area__selected-list__item"
          value="${value}"
          id="${this._GUID}-selected-item-${index}"
        >
          <div
            class="kuc-user-org-group-select__group__container__select-area__selected-list__item__content"
          >
            <div
              class="kuc-user-org-group-select__group__container__select-area__selected-list__item__content__icon"
            >
              ${this._getSvgTemplateByType(
                selectedItem.type || "",
                this._SMALL_ICON_SIZE,
              )}
            </div>
            <div
              class="kuc-user-org-group-select__group__container__select-area__selected-list__item__content__text ${disabled
                ? "kuc-user-org-group-select__group__container__select-area__selected-list__item__content__text--disabled"
                : ""}"
            >
              ${text}
            </div>
          </div>
          <div
            class="kuc-user-org-group-select__group__container__select-area__selected-list__item__remove-icon"
            ?hidden="${this.disabled}"
          >
            <button
              class="kuc-user-org-group-select__group__container__select-area__selected-list__item__remove-icon__button"
              type="button"
              aria-label="remove"
              selected-item-index="${index}"
              @click="${this._handleClickRemoveSelectedItem}"
            >
              ${this._getRemoveSVGTemplate()}
            </button>
          </div>
        </li>
      `;
    }

    private _handleChangeUserOrgGroupInput(event: Event) {
      event.stopPropagation();
    }

    private _handleInputUserOrgGroupInput(event: Event) {
      event.stopPropagation();

      this._searchText = this._inputEl.value;
      this._query = this._inputEl.value;
      this._setMatchingItems();
    }

    private _handleClickUserOrgGroupInput(event: Event) {
      event.stopPropagation();
      this._inputEl.select();
      this._setMatchingItems();
    }

    private _handleBlurUserOrgGroupInput(event: Event) {
      const focusEvent = event as unknown as FocusEvent;
      const nextTarget = focusEvent.relatedTarget as HTMLElement | null;
      if (
        nextTarget &&
        (this._toggleEl.contains(nextTarget) ||
          (this._menuEl && this._menuEl.contains(nextTarget)))
      ) {
        return;
      }
      this._resetToggleInputValue();
    }

    private _handleKeyDownUserOrgGroupInput(event: KeyboardEvent) {
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
    private _resetToggleInputValue() {
      this._searchText = "";
      this._query = "";
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
        prevItemIsDisabled = prevItem.classList.contains(
          this._DISABLED_ITEM_CLASS,
        );
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
        nextItemIsDisabled = nextItem.classList.contains(
          this._DISABLED_ITEM_CLASS,
        );
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

    private _setHighlightAndActiveDescendantMenu(
      selectedItemEl: HTMLLIElement,
    ) {
      this._actionHighlightMenuItem(selectedItemEl);
      this._actionSetActiveDescendant(selectedItemEl.id);
      this._scrollToView();
    }

    private _actionSetActiveDescendant(value?: string) {
      if (value !== undefined && this._inputEl !== null) {
        this._inputEl.setAttribute("aria-activedescendant", value);
      }
    }

    private _actionRemoveActiveDescendant() {
      this._inputEl.removeAttribute("aria-activedescendant");
    }

    private _setMenuPosition() {
      this._setMenuPositionAboveOrBelow();
      this._setMenuPositionLeftOrRight();
    }

    private _handleClickRemoveSelectedItem(event: Event) {
      const button = event.currentTarget as HTMLElement;
      const index = parseInt(
        button.getAttribute("selected-item-index") || "-1",
        10,
      );
      const newValues = this._selectedValues.filter((_, i) => i !== index);
      const oldValue = this.value;
      this._selectedValues = newValues;
      this.value = newValues;
      const detail: UserOrgGroupSelectChangeEventDetail = {
        oldValue,
        value: this.value,
      };
      dispatchCustomEvent(this, "change", detail);
    }

    private _handleClickToggleButton(event: MouseEvent): void {
      event.preventDefault();
      this._inputEl.focus();
      const currentLength = this._inputEl.value.length;
      this._inputEl.setSelectionRange(currentLength, currentLength);
      this._setMatchingItems();
      this._actionShowMenu();
    }

    private _handleMouseDownToggleButton(event: MouseEvent): void {
      event.preventDefault();
    }

    private _handleClickIconButton(event: MouseEvent): void {
      event.preventDefault();
      const clickIconEventDetail: UserOrgGroupSelectClickIconEventDetail = {
        value: this.value,
      };
      dispatchCustomEvent(this, "click-picker-icon", clickIconEventDetail);
    }

    private _setMenuPositionAboveOrBelow() {
      this._menuEl.style.height = "auto";
      this._menuEl.style.bottom = "auto";
      this._menuEl.style.overflowY = "scroll";

      this._menuEl.style.maxHeight = "none";
      const menuHeightNoMaxHeight = this._menuEl.getBoundingClientRect().height;
      this._menuEl.style.maxHeight =
        "var(--kuc-user-org-group-select-menu-max-height, none)";
      const menuHeightWithMaxHeight =
        this._menuEl.getBoundingClientRect().height;

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
        this._menuEl.style.bottom = `${this._selectAreaEl.offsetHeight}px`;
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

    private _actionHighlightFirstMenuItem() {
      let firstItem = this._firstItemEl;
      let itemIsDisabled = false;
      for (let i = 0; i < this._matchingItems.length; i++) {
        itemIsDisabled = firstItem.classList.contains(
          this._DISABLED_ITEM_CLASS,
        );
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
        itemIsDisabled = lastItem.classList.contains(this._DISABLED_ITEM_CLASS);
        if (itemIsDisabled) {
          lastItem = lastItem.previousElementSibling as HTMLLIElement;
        } else {
          break;
        }
      }
      !itemIsDisabled && this._setHighlightAndActiveDescendantMenu(lastItem);
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

    private _handleMouseOverUserOrgGroupItem(event: Event) {
      const itemEl = this._getItemElementWhenMouseOverDown(
        event.target as HTMLElement,
      );
      this._actionHighlightMenuItem(itemEl);
    }

    private _actionHighlightMenuItem(item: HTMLLIElement) {
      this._actionClearAllHighlightMenuItem();
      item.setAttribute("aria-selected", "true");
      item.classList.add(
        "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
      );
    }

    private _handleClickUserOrgGroupItem(event: MouseEvent) {
      const itemEl = this._getItemElementWhenMouseOverDown(
        event.target as HTMLElement,
      );
      const value = itemEl.getAttribute("value") as string;
      this._actionUpdateValue(value);
    }

    private _actionUpdateValue(value: string) {
      if (this._selectedValues.includes(value)) {
        this._resetToggleInputValue();
        return;
      }
      const oldValue = this.value;
      const newValues = [...this._selectedValues, value];
      this._selectedValues = newValues;
      this.value = newValues;
      const detail: UserOrgGroupSelectChangeEventDetail = {
        oldValue,
        value: this.value,
      };
      this._query = "";
      dispatchCustomEvent(this, "change", detail);
      // Clear input after selecting an item so the filter resets
      this._resetToggleInputValue();
    }

    private _getItemElementWhenMouseOverDown(
      eventTarget: HTMLElement,
    ): HTMLLIElement {
      if (
        eventTarget.classList.value
          .split(" ")
          .includes(
            "kuc-user-org-group-select__group__container__select-area__select-menu__item",
          )
      ) {
        return eventTarget as HTMLLIElement;
      }

      return this._getItemElementWhenMouseOverDown(
        eventTarget.parentElement as HTMLElement,
      );
    }

    private _handleMouseLeaveMenu() {
      this._actionClearAllHighlightMenuItem();
    }

    private _actionClearAllHighlightMenuItem() {
      this._itemsEl.forEach((itemEl: HTMLLIElement) => {
        itemEl.setAttribute("aria-selected", "false");
        itemEl.classList.remove(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        );
      });
      this._actionRemoveActiveDescendant();
    }

    private _handleMouseDownMenu(event: MouseEvent) {
      event.preventDefault();
    }

    private _handleClickDocument(event: MouseEvent) {
      if (
        event.target === this._toggleEl ||
        this._toggleEl.contains(event.target as HTMLElement)
      ) {
        return;
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

    private _actionHideMenu() {
      this._selectorVisible = false;
      this._actionRemoveActiveDescendant();
    }
    private _getPickerSVGTemplateByIcon(icon?: string) {
      if (!icon) return "";
      switch (icon) {
        case "user":
          return this._getUserPickerSvgTemplate();
        case "org":
          return this._getOrgPickerSvgTemplate();
        case "group":
          return this._getGroupPickerSvgTemplate();
        default:
          return "";
      }
    }

    private _getSvgTemplateByType(
      type?: string,
      size: number = this._LARGE_ICON_SIZE,
    ) {
      if (!type) return "";
      switch (type) {
        case "user":
          return this._getUserSvgTemplate(size);
        case "org":
          return this._getOrgSvgTemplate(size);
        case "group":
          return this._getGroupSvgTemplate(size);
        default:
          return "";
      }
    }
    private _getUserPickerSvgTemplate() {
      return svg`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11108_7820)">
            <path d="M40 0H0V40H40V0Z" fill="#3498db"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.7952 29.5014C30.6103 29.1232 29.0893 28.2243 26.4523 27.2194C26.3083 27.1766 26.1685 27.121 26.0346 27.0532C24.9881 26.7068 23.9606 26.3054 22.9564 25.8507L22.8145 25.7719C22.1496 25.3286 22.0013 24.4536 22.0017 22.7937C22.0235 22.0583 22.2846 21.3509 22.7443 20.7784C23.1224 20.1551 23.3587 19.4542 23.4442 18.6661C23.5273 18.1843 23.7029 17.7231 23.923 17.3756C24.1192 16.9983 24.2545 16.5924 24.3239 16.1729L24.3601 16.0255C24.4067 15.883 24.4067 15.7294 24.3636 15.5974C24.2774 15.3437 24.2123 15.0833 24.1689 14.8188L24.1456 14.6767L24.1635 14.5338C24.2604 13.7586 24.3379 13.1224 24.4059 12.5811C24.4211 11.6974 24.0911 10.8425 23.4802 10.1922C22.6022 9.24161 21.3353 8.74834 20.0457 8.85492L19.8783 8.85466C18.5907 8.74424 17.3242 9.23383 16.4373 10.1905C15.8303 10.8294 15.5009 11.6826 15.5145 12.4708C15.5459 12.7398 15.576 13.0061 15.634 13.5218C15.6816 13.9435 15.7157 14.2344 15.7516 14.5219L15.7676 14.6495L15.7506 14.7771C15.7126 15.063 15.6424 15.3438 15.5603 15.5586C15.5129 15.7122 15.5129 15.8764 15.5603 16.03L15.5883 16.1448C15.6658 16.5693 15.8109 16.9785 16.0232 17.367C16.2479 17.789 16.3905 18.2498 16.4437 18.7267C16.5233 19.4513 16.7617 20.1491 17.1417 20.7705C17.6108 21.3382 17.8822 22.0458 17.9138 22.8232V23.1366C17.9893 23.859 17.8735 24.5889 17.5774 25.253L17.4666 25.5013L17.2451 25.6591C16.6349 26.0939 15.9497 26.4124 15.3008 26.5755L13.5299 27.1849C10.7007 28.2494 9.16333 29.179 9.1108 29.4241C9.05833 29.8816 9.02367 30.3408 9.00687 30.8007H30.8764L30.7952 29.5014ZM26.7379 25.1844L26.9153 25.2625C26.9487 25.2812 26.984 25.2961 27.0908 25.3307C30.6256 26.674 32.4548 27.7827 32.7559 29.1001L32.779 29.2601L33 32.7957H7.02157L7.00338 31.8168C6.98712 30.9416 7.02899 30.0664 7.14161 29.1148C7.4095 27.7754 9.24475 26.6656 12.8538 25.3081L14.7282 24.6661C15.1234 24.5647 15.5007 24.405 15.8479 24.1926C15.9346 23.9083 15.9615 23.6082 15.9259 23.3111L15.9187 23.1922L15.9196 22.8648C15.9065 22.551 15.787 22.251 15.5807 22.0142L15.4891 21.8909C14.9273 20.9994 14.5756 19.9919 14.4608 18.9462C14.4357 18.7217 14.3683 18.5039 14.2675 18.3144C13.967 17.765 13.754 17.1722 13.6359 16.5575C13.4886 16.0383 13.4952 15.4851 13.6727 14.9152C13.7077 14.8215 13.735 14.7251 13.7544 14.6271C13.7234 14.3744 13.6923 14.1065 13.6515 13.7459C13.5934 13.229 13.5638 12.9668 13.5264 12.6091C13.4943 11.2011 14.0208 9.83752 14.9825 8.82527C16.2601 7.44706 18.0936 6.7253 19.965 6.86029C21.8377 6.73098 23.6699 7.4573 24.94 8.83235C25.9008 9.85515 26.4248 11.2124 26.3941 12.7139C26.3238 13.3167 26.2511 13.9157 26.1624 14.6273C26.1861 14.739 26.217 14.8509 26.2561 14.9661C26.4263 15.4861 26.4344 16.0449 26.2802 16.5686C26.1732 17.1707 25.9739 17.7555 25.6547 18.3632C25.5325 18.5594 25.4495 18.7773 25.4192 18.9406C25.3084 19.9869 24.9615 20.9944 24.4046 21.887L24.321 22.002C24.1197 22.2407 24.0052 22.5405 23.9964 22.8232C23.9964 23.3728 24.0234 23.8066 24.0731 24.0998C24.953 24.5507 25.838 24.8892 26.7379 25.1844Z" fill="white"/>
          </g>
          <defs>
            <clipPath">
              <rect width="40" height="40" fill="white"/>
            </clipPath>
          </defs>
        </svg>`;
    }
    private _getOrgPickerSvgTemplate() {
      return svg`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="39" height="39" fill="#3498db"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15 7V14H25V7H15ZM13 5H27V16H21V19H27V21V23H36V34H22V23H25V21H15V23H18V34H4V23H13V21V19H19V16H13V5ZM6 25V32H16V25H6ZM24 32V25H34V32H24Z" fill="white"/>
        </svg>`;
    }
    private _getGroupPickerSvgTemplate() {
      return svg`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="39" height="39" fill="#3498db"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6551 24.1065C12.3317 23.9525 12.0125 23.7844 11.698 23.6024L11.6295 23.5538C11.3087 23.2805 11.2372 22.741 11.2374 21.7176C11.2479 21.2643 11.3739 20.8281 11.5956 20.4752C11.778 20.0909 11.892 19.6587 11.9333 19.1728C11.9734 18.8758 12.0581 18.5915 12.1643 18.3772C12.2589 18.1446 12.3242 17.8943 12.3577 17.6357L12.3751 17.5448C12.3976 17.457 12.3976 17.3623 12.3768 17.2809C12.3352 17.1245 12.3038 16.9639 12.2829 16.8009L12.2717 16.7132L12.2803 16.6251C12.3034 16.3892 12.3242 16.1742 12.3433 15.9768C12.3628 15.7742 12.3806 15.5902 12.3973 15.4212C12.4046 14.8764 12.2454 14.3493 11.9507 13.9484C11.5271 13.3623 10.9159 13.0582 10.2937 13.1239L10.213 13.1237C9.59178 13.0557 8.98076 13.3575 8.55289 13.9473C8.26007 14.3412 8.10115 14.8673 8.10773 15.3532C8.12287 15.5191 8.13739 15.6833 8.16535 16.0012C8.18835 16.2612 8.20477 16.4405 8.22211 16.6178L8.2298 16.6965L8.22163 16.7751C8.20329 16.9514 8.16943 17.1245 8.1298 17.2569C8.10695 17.3516 8.10695 17.4529 8.1298 17.5476L8.14334 17.6184C8.18073 17.8801 8.25069 18.1324 8.35314 18.3719C8.46153 18.6321 8.53033 18.9162 8.55601 19.2102C8.5944 19.6569 8.70942 20.0871 8.89274 20.4703C9.11905 20.8203 9.24997 21.2565 9.26522 21.7358V21.929C9.30165 22.3744 9.24576 22.8245 9.10291 23.2339L9.04949 23.387L8.94263 23.4843C8.64824 23.7523 8.31767 23.9487 8.00464 24.0493L7.15028 24.425C5.78535 25.0813 5.04368 25.6544 5.01834 25.8055C4.99303 26.0876 4.97631 26.3707 4.9682 26.6542H8.03855C7.71232 27.0377 7.44846 27.4499 7.2567 27.8843H4.01041L4.00163 27.2807C3.99378 26.7411 4.01399 26.2015 4.06832 25.6149C4.19756 24.789 5.08295 24.1048 6.82411 23.2679L7.72834 22.8721C7.91901 22.8096 8.10105 22.7111 8.26854 22.5802C8.31037 22.4049 8.32337 22.2198 8.30616 22.0367L8.30272 21.9633L8.30314 21.7615C8.29682 21.568 8.23916 21.3831 8.13966 21.2371L8.09543 21.1611C7.82441 20.6114 7.65474 19.9902 7.59936 19.3456C7.58726 19.2071 7.55474 19.0729 7.5061 18.956C7.36114 18.6173 7.25836 18.2518 7.2014 17.8728C7.13032 17.5527 7.13353 17.2117 7.21915 16.8603C7.23605 16.8025 7.24922 16.7431 7.25854 16.6827C7.24361 16.5269 7.22861 16.3617 7.20894 16.1394L7.20467 16.0909C7.17941 15.8037 7.16568 15.6476 7.14859 15.4385C7.1331 14.5704 7.38708 13.7297 7.85104 13.1057C8.4674 12.2559 9.35196 11.811 10.2548 11.8942C11.1582 11.8144 12.0422 12.2623 12.6549 13.11C13.1184 13.7406 13.3712 14.5774 13.3564 15.5031C13.3225 15.8748 13.2874 16.2441 13.2446 16.6828C13.2561 16.7517 13.271 16.8206 13.2898 16.8917C13.372 17.2123 13.3758 17.5568 13.3015 17.8797C13.2498 18.2509 13.1537 18.6115 12.9997 18.9861C12.9408 19.1071 12.9007 19.2414 12.8861 19.3421C12.8326 19.9872 12.6653 20.6083 12.3966 21.1587L12.3563 21.2296C12.2592 21.3768 12.2039 21.5616 12.1997 21.7358C12.1997 22.0747 12.2127 22.3422 12.2367 22.5229C12.6612 22.8009 13.0881 23.0096 13.5223 23.1916L13.6079 23.2398C13.624 23.2513 13.641 23.2605 13.6925 23.2818C14.0991 23.4793 14.4589 23.6685 14.773 23.8532C14.0381 23.873 13.328 23.9604 12.6551 24.1065Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3449 24.1065C27.6683 23.9525 27.9875 23.7844 28.302 23.6024L28.3705 23.5538C28.6913 23.2805 28.7628 22.741 28.7626 21.7176C28.7521 21.2643 28.6261 20.8281 28.4044 20.4752C28.222 20.0909 28.108 19.6587 28.0667 19.1728C28.0266 18.8758 27.9419 18.5915 27.8357 18.3772C27.7411 18.1446 27.6758 17.8943 27.6423 17.6357L27.6249 17.5448C27.6024 17.457 27.6024 17.3623 27.6232 17.2809C27.6648 17.1245 27.6962 16.9639 27.7171 16.8009L27.7283 16.7132L27.7197 16.6251C27.6966 16.3892 27.6758 16.1742 27.6567 15.9768C27.6372 15.7742 27.6194 15.5902 27.6027 15.4212C27.5954 14.8764 27.7546 14.3493 28.0493 13.9484C28.4729 13.3623 29.0841 13.0582 29.7063 13.1239L29.787 13.1237C30.4082 13.0557 31.0192 13.3575 31.4471 13.9473C31.7399 14.3412 31.8989 14.8673 31.8923 15.3532C31.8771 15.5191 31.8626 15.6833 31.8346 16.0012C31.8117 16.2612 31.7952 16.4405 31.7779 16.6178L31.7702 16.6965L31.7784 16.7751C31.7967 16.9514 31.8306 17.1245 31.8702 17.2569C31.8931 17.3516 31.8931 17.4529 31.8702 17.5476L31.8567 17.6184C31.8193 17.8801 31.7493 18.1324 31.6469 18.3719C31.5385 18.6321 31.4697 18.9162 31.444 19.2102C31.4056 19.6569 31.2906 20.0871 31.1073 20.4703C30.8809 20.8203 30.75 21.2565 30.7348 21.7358V21.9291C30.6983 22.3744 30.7542 22.8245 30.8971 23.2339L30.9505 23.387L31.0574 23.4843C31.3518 23.7523 31.6823 23.9487 31.9954 24.0493L32.8497 24.425C34.2146 25.0813 34.9563 25.6544 34.9817 25.8055C35.007 26.0876 35.0237 26.3707 35.0318 26.6542H31.9614C32.2877 27.0377 32.5515 27.4499 32.7433 27.8843H35.9896L35.9984 27.2807C36.0062 26.7411 35.986 26.2015 35.9317 25.6149C35.8024 24.789 34.9171 24.1048 33.1759 23.2679L32.2717 22.8721C32.081 22.8096 31.8989 22.7111 31.7315 22.5802C31.6896 22.4049 31.6766 22.2198 31.6938 22.0367L31.6973 21.9633L31.6969 21.7615C31.7032 21.568 31.7608 21.3831 31.8603 21.2371L31.9046 21.1611C32.1756 20.6114 32.3453 19.9902 32.4006 19.3456C32.4127 19.2071 32.4453 19.0729 32.4939 18.956C32.6389 18.6173 32.7416 18.2518 32.7986 17.8728C32.8697 17.5527 32.8665 17.2117 32.7809 16.8603C32.7639 16.8025 32.7508 16.7431 32.7415 16.6827C32.7564 16.5269 32.7714 16.3617 32.7911 16.1394L32.7953 16.0911C32.8206 15.8038 32.8343 15.6476 32.8514 15.4385C32.8669 14.5704 32.6129 13.7297 32.149 13.1057C31.5326 12.2559 30.648 11.811 29.7452 11.8942C28.8418 11.8144 27.9578 12.2623 27.3451 13.11C26.8816 13.7406 26.6288 14.5774 26.6436 15.5031C26.6775 15.8748 26.7126 16.2441 26.7554 16.6828C26.7439 16.7517 26.729 16.8206 26.7102 16.8917C26.628 17.2123 26.6242 17.5568 26.6985 17.8797C26.7502 18.2509 26.8463 18.6115 27.0003 18.9861C27.0592 19.1071 27.0993 19.2414 27.1139 19.3421C27.1674 19.9872 27.3347 20.6083 27.6034 21.1587L27.6437 21.2296C27.7408 21.3768 27.7961 21.5616 27.8003 21.7358C27.8003 22.0747 27.7873 22.3422 27.7633 22.5229C27.3388 22.8009 26.9119 23.0096 26.4777 23.1916L26.3921 23.2398C26.376 23.2513 26.359 23.2605 26.3075 23.2818C25.9009 23.4793 25.5411 23.6685 25.227 23.8532C25.9619 23.873 26.672 23.9604 27.3449 24.1065Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8186 29.5726C30.6403 29.1791 29.1727 28.2439 26.6283 27.1984C26.4894 27.1538 26.3545 27.096 26.2253 27.0255C25.2156 26.665 24.2242 26.2474 23.2552 25.7743L23.1183 25.6924C22.4767 25.2312 22.3337 24.3208 22.3341 22.5938C22.3551 21.8288 22.6071 21.0928 23.0506 20.4972C23.4154 19.8487 23.6434 19.1194 23.7259 18.2995C23.8061 17.7982 23.9756 17.3184 24.1879 16.9569C24.3772 16.5643 24.5077 16.142 24.5748 15.7056L24.6096 15.5522C24.6546 15.404 24.6546 15.2441 24.613 15.1068C24.5298 14.8429 24.467 14.5719 24.4252 14.2968L24.4027 14.1489L24.4199 14.0002C24.5134 13.1937 24.5882 12.5318 24.6538 11.9686C24.6685 11.0492 24.3501 10.1598 23.7607 9.4832C22.9135 8.49423 21.6911 7.98104 20.4468 8.09191L20.2853 8.09164C19.0429 7.97677 17.8209 8.48614 16.9651 9.48141C16.3795 10.1462 16.0616 11.0338 16.0748 11.8539C16.1051 12.1338 16.1341 12.4109 16.19 12.9474C16.236 13.3861 16.2689 13.6887 16.3036 13.9879L16.3189 14.1207L16.3026 14.2533C16.2659 14.5508 16.1982 14.8429 16.1189 15.0664C16.0732 15.2262 16.0732 15.3971 16.1189 15.5569L16.146 15.6764C16.2208 16.1179 16.3607 16.5437 16.5656 16.9479C16.7824 17.3869 16.92 17.8663 16.9714 18.3625C17.0481 19.1164 17.2782 19.8424 17.6448 20.4889C18.0975 21.0795 18.3593 21.8157 18.3898 22.6245V22.9506C18.4626 23.7022 18.3509 24.4616 18.0652 25.1525L17.9583 25.4109L17.7446 25.5751C17.1558 26.0274 16.4947 26.3587 15.8686 26.5284L14.1599 27.1625C11.43 28.27 9.94671 29.2372 9.89602 29.4921C9.8454 29.9681 9.81195 30.4459 9.79575 30.9243H30.897L30.8186 29.5726ZM26.9039 25.0812L27.0751 25.1624C27.1073 25.1818 27.1413 25.1974 27.2444 25.2334C30.6551 26.6309 32.42 27.7844 32.7105 29.155L32.7328 29.3215L32.946 33H7.88019L7.86263 31.9814C7.84694 31.071 7.88735 30.1603 7.99601 29.1703C8.25449 27.7768 10.0253 26.6222 13.5076 25.2099L15.3161 24.5419C15.6974 24.4364 16.0615 24.2702 16.3964 24.0493C16.4801 23.7535 16.5061 23.4412 16.4717 23.1322L16.4648 23.0084L16.4657 22.6678C16.453 22.3413 16.3377 22.0292 16.1387 21.7828L16.0502 21.6546C15.5082 20.7271 15.1689 19.6788 15.0581 18.5909C15.0339 18.3573 14.9689 18.1307 14.8716 17.9335C14.5817 17.3619 14.3761 16.7453 14.2622 16.1057C14.12 15.5655 14.1264 14.99 14.2977 14.3971C14.3315 14.2996 14.3578 14.1993 14.3765 14.0973C14.3466 13.8344 14.3166 13.5557 14.2773 13.1805C14.2212 12.6427 14.1926 12.37 14.1566 11.9978C14.1256 10.5328 14.6335 9.11422 15.5614 8.06107C16.7942 6.62717 18.5633 5.87626 20.369 6.0167C22.1758 5.88217 23.9437 6.63783 25.1692 8.06843C26.0962 9.13255 26.6019 10.5446 26.5722 12.1068C26.5043 12.734 26.4342 13.3572 26.3486 14.0975C26.3715 14.2138 26.4013 14.3301 26.439 14.45C26.6033 14.991 26.6111 15.5724 26.4623 16.1172C26.3591 16.7437 26.1668 17.3521 25.8588 17.9844C25.7409 18.1884 25.6608 18.4152 25.6315 18.5851C25.5247 19.6736 25.1899 20.7218 24.6526 21.6506L24.5719 21.7702C24.3777 22.0186 24.2672 22.3305 24.2587 22.6245C24.2587 23.1963 24.2848 23.6477 24.3327 23.9527C25.1817 24.4218 26.0357 24.774 26.9039 25.0812Z" fill="white"/>
        </svg>`;
    }
    private _getSearchPickerSvgTemplate() {
      return svg`
        <svg width="38" height="38" viewBox="-8 -8 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="kuc-user-org-group-select__group__container__select-area__toggle__icon__button__svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1034 16.5176C11.5697 19.3478 6.3971 19.125 3.12139 15.8493C-0.393328 12.3346 -0.393328 6.63611 3.12139 3.12139C6.63611 -0.393328 12.3346 -0.393328 15.8493 3.12139C18.878 6.15005 19.2968 10.8002 17.1058 14.2774L23.6275 20.7991L21.5062 22.9204L15.1034 16.5176ZM13.728 5.24271C16.0711 7.58586 16.0711 11.3848 13.728 13.728C11.3848 16.0711 7.58586 16.0711 5.24271 13.728C2.89957 11.3848 2.89957 7.58586 5.24271 5.24271C7.58586 2.89957 11.3848 2.89957 13.728 5.24271Z" fill="#888888"/>
        </svg>`;
    }
    private _getRemoveSVGTemplate() {
      return svg`
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_11108_7852)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8999 5.96056L0.930232 1.99089L0.399902 1.46056L1.46056 0.399902L1.99089 0.930232L5.96056 4.8999L9.93023 0.930232L10.4606 0.399902L11.5212 1.46056L10.9909 1.99089L7.02122 5.96056L10.9909 9.93023L11.5212 10.4606L10.4606 11.5212L9.93023 10.9909L5.96056 7.02122L1.99089 10.9909L1.46056 11.5212L0.399902 10.4606L0.930233 9.93023L4.8999 5.96056Z" fill="#3498db"/>
        </g>
        <defs>
          <clipPath>
            <rect width="12" height="12" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `;
    }
    private _getUserSvgTemplate(size: number) {
      return svg`
        <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11108_7825)">
            <path d="M32.5866 -0.521484H-0.586548V32.6516H32.5866V-0.521484Z" fill="#717272"/>
            <path d="M15.9413 5.64404C18.4049 5.64404 20.6468 8.02938 20.6077 11.4053C20.5686 14.7552 19.2 15.407 18.4309 16.8278C18.1442 17.3622 18.066 19.0306 18.6134 19.3565C21.1291 20.8815 23.5926 22.0416 25.6912 23.2669C26.6167 23.8143 26.747 24.9483 26.747 25.7174C25.0525 25.7174 20.4774 25.7174 15.9413 25.7174C11.4053 25.7174 6.83012 25.7174 5.13562 25.7174C5.13562 24.9483 5.26597 23.8143 6.19142 23.2669C8.29 22.0416 10.7535 20.8815 13.2692 19.3565C13.8167 19.0306 13.7385 17.3622 13.4517 16.8278C12.6827 15.407 11.314 14.7422 11.2749 11.4053C11.2358 8.02938 13.4778 5.64404 15.9413 5.64404Z" fill="white"/>
          </g>
          <defs>
            <clipPath>
              <rect width="32" height="31.9348" fill="white"/>
            </clipPath>
          </defs>
        </svg>`;
    }
    private _getOrgSvgTemplate(size: number) {
      return svg`
        <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11108_7858)">
            <path d="M32 0H0V32H32V0Z" fill="#4f91c5"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3335 5.3335H10.0002V14.0002H21.3335V5.3335ZM20.0002 6.66683H18.0002V8.66683H20.0002V6.66683ZM16.6668 19.3335H26.6668V27.3335H16.6668V19.3335ZM15.3335 19.3335H5.3335V27.3335H15.3335V19.3335ZM24.0002 21.3335H25.3335V22.6668H24.0002V21.3335ZM14.0002 21.3335H12.6668V22.6668H14.0002V21.3335Z" fill="#eff3f4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6668 14H15.3335V16H9.3335V17.3333V19.3333H10.6668V17.3333H20.6668V19.3333H22.0002V17.3333V16H16.6668V14Z" fill="#a6b2b3"/>
          </g>
          <defs>
            <clipPath>
              <rect width="32" height="32" fill="white"/>
            </clipPath>
          </defs>
        </svg>`;
    }
    private _getGroupSvgTemplate(size: number) {
      return svg`
        <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11108_7756)">
            <path d="M32 0H0V31.9032H32V0Z" fill="#86bac0"/>
            <path d="M32.0005 15.6099L20.1262 3.72021L3.74902 20.0193L15.749 31.9033H32.0005V15.6099Z" fill="#6c969b"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1141 0.0854492C24.9541 0.0854492 31.9998 7.22949 31.9998 16.0427C31.9998 24.856 24.9541 32 16.1141 32C7.27412 32 0.108398 24.856 0.108398 16.0427C0.108398 7.22949 7.27412 0.0854492 16.1141 0.0854492Z" fill="#86bac0"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.983 16.6751C31.6459 24.8845 25.2059 31.5329 17.0001 31.983L6.85156 21.8651L25.1487 9.78174L31.9887 16.601L31.983 16.6751Z" fill="#6c969b"/>
            <path d="M25.1487 9.78174H6.85156V21.8651H25.1487V9.78174Z" fill="#e5e5e4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85156 21.8653L16.0001 13.8154L25.1487 21.8653H6.85156Z" fill="#cccccc"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85156 21.8653L16.0001 14.3794L25.1487 21.8653H6.85156Z" fill="#e5e5e4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85156 9.78174L16.0001 17.8202L25.1487 9.78174H6.85156Z" fill="#cccccc"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85156 9.78174L16.0001 17.2676L25.1487 9.78174H6.85156Z" fill="white"/>
            <path d="M32 0H0V31.9032H32V0Z" fill="#9cc076"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3942 24.6003H16.2011C16.192 24.1094 16.2156 23.6184 16.2717 23.1307C16.3705 22.6384 17.3704 22.0361 19.2712 21.3235L20.337 20.9579C20.6968 20.8659 21.0366 20.7085 21.3392 20.4938C21.4763 20.1873 21.5275 19.8495 21.4874 19.5164V19.2984C21.474 18.9793 21.352 18.6743 21.1415 18.4335C20.8563 17.9824 20.6777 17.4727 20.6193 16.9427C20.5961 16.7361 20.5339 16.5356 20.4358 16.3521C20.2827 16.0732 20.1755 15.7717 20.1182 15.459C20.0551 15.2552 20.0551 15.0371 20.1182 14.8332C20.1625 14.7152 20.1933 14.5925 20.2099 14.4676C20.1605 14.0738 20.1182 13.673 20.0688 13.2511C20.0533 12.5749 20.307 11.9202 20.7745 11.4298C21.4194 10.7368 22.3491 10.3787 23.2941 10.4595C24.2402 10.3816 25.1696 10.7421 25.8137 11.4369C26.278 11.9293 26.5312 12.5826 26.5195 13.2581C26.4701 13.68 26.4207 14.0808 26.3713 14.4746C26.3917 14.5988 26.4224 14.7211 26.4631 14.8402C26.5299 15.0435 26.5299 15.2628 26.4631 15.4661C26.4117 15.7751 26.3117 16.0741 26.1666 16.3521C26.0537 16.5326 25.9771 16.7332 25.9408 16.9427C25.8845 17.4721 25.7084 17.9818 25.4256 18.4335C25.2202 18.6762 25.1033 18.981 25.0939 19.2984C25.0939 20.0015 25.1644 20.4516 25.3127 20.55C25.9041 20.8168 26.5096 21.0516 27.1265 21.2532C27.1846 21.2857 27.2461 21.3116 27.31 21.3305C29.192 22.0431 30.1895 22.6455 30.3025 23.1377L30.3942 24.6003Z" fill="#d4d7d8"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0016 24.6003H1.80856C1.79941 24.1094 1.82298 23.6184 1.87914 23.1307C1.97795 22.6384 2.97779 22.0361 4.87867 21.3235L5.94438 20.9579C6.30425 20.8659 6.644 20.7085 6.94658 20.4938C7.08374 20.1873 7.13496 19.8495 7.09479 19.5164V19.2984C7.08142 18.9793 6.95946 18.6743 6.74896 18.4335C6.46369 17.9824 6.28509 17.4727 6.22669 16.9427C6.20354 16.7361 6.14127 16.5356 6.04319 16.3521C5.89012 16.0732 5.78289 15.7717 5.7256 15.459C5.66249 15.2552 5.66249 15.0371 5.7256 14.8332C5.7699 14.7152 5.80068 14.5925 5.81735 14.4676C5.76794 14.0738 5.7256 13.673 5.67619 13.2511C5.66071 12.5749 5.91445 11.9202 6.38196 11.4298C7.02682 10.7368 7.95648 10.3787 8.90157 10.4595C9.84766 10.3816 10.777 10.7421 11.4212 11.4369C11.8854 11.9293 12.1386 12.5826 12.1269 13.2581C12.0775 13.68 12.0281 14.0808 11.9787 14.4746C11.9992 14.5988 12.0298 14.7211 12.0705 14.8402C12.1373 15.0435 12.1373 15.2628 12.0705 15.4661C12.0191 15.7751 11.9191 16.0741 11.7741 16.3521C11.6612 16.5326 11.5845 16.7332 11.5482 16.9427C11.492 17.4721 11.3158 17.9818 11.033 18.4335C10.8276 18.6762 10.7107 18.981 10.7013 19.2984C10.7013 20.0015 10.7719 20.4516 10.9201 20.55C11.5115 20.8168 12.117 21.0516 12.7339 21.2532C12.792 21.2857 12.8535 21.3116 12.9174 21.3305C14.7995 22.0431 15.797 22.6455 15.9099 23.1377L16.0016 24.6003Z" fill="#d4d7d8"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6766 24.6002H7.3295C7.31831 24.0002 7.34712 23.4001 7.41576 22.804C7.53652 22.2024 8.75855 21.4661 11.0818 20.5952L12.3844 20.1483C12.8242 20.0359 13.2395 19.8436 13.6093 19.5811C13.7769 19.2065 13.8395 18.7937 13.7904 18.3865V18.12C13.7741 17.7301 13.625 17.3573 13.3678 17.0629C13.0191 16.5117 12.8008 15.8886 12.7294 15.2409C12.7011 14.9883 12.625 14.7434 12.5052 14.519C12.3181 14.1782 12.187 13.8097 12.117 13.4275C12.0399 13.1784 12.0399 12.9118 12.117 12.6626C12.1711 12.5183 12.2088 12.3684 12.2291 12.2157C12.1687 11.7344 12.117 11.2446 12.0566 10.7289C12.0377 9.90252 12.3478 9.10226 12.9192 8.50296C13.7074 7.65586 14.8436 7.21826 15.9987 7.31694C17.1551 7.22174 18.291 7.66239 19.0782 8.51156C19.6457 9.11336 19.9551 9.91193 19.9409 10.7375C19.8805 11.2532 19.8201 11.743 19.7597 12.2243C19.7847 12.3761 19.8222 12.5256 19.8718 12.6712C19.9535 12.9197 19.9535 13.1876 19.8718 13.4361C19.8091 13.8138 19.6868 14.1793 19.5095 14.519C19.3716 14.7396 19.2778 14.9848 19.2335 15.2409C19.1648 15.8879 18.9494 16.5109 18.6038 17.0629C18.3528 17.3596 18.2099 17.7322 18.1984 18.12C18.1984 18.9795 18.2846 19.5295 18.4658 19.6498C19.1887 19.9759 19.9287 20.2628 20.6827 20.5093C20.7537 20.549 20.8289 20.5807 20.907 20.6038C23.2073 21.4747 24.4264 22.211 24.5644 22.8126L24.6766 24.6002Z" fill="white"/>
          </g>
          <defs>
            <clipPath>
              <rect width="32" height="32" fill="white"/>
            </clipPath>
          </defs>
        </svg>`;
    }
  }
  window.customElements.define(
    "kuc-user-org-group-select",
    KucUserOrgGroupSelect,
  );
  createStyleOnHeader(USER_ORG_GROUP_SELECT_CSS);
  exportUserOrgGroupSelect = KucUserOrgGroupSelect;
})();
const UserOrgGroupSelect = exportUserOrgGroupSelect as any;
export { UserOrgGroupSelect };
