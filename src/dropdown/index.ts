import { html, PropertyValues, svg } from "lit";
import { property, state, queryAll, query } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail,
  createStyleOnHeader,
} from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import { getWidthElmByContext } from "../base/context";
import {
  validateProps,
  validateItems,
  validateValueString,
  validateSelectedIndexNumber,
  throwErrorAfterUpdateComplete,
} from "../base/validator";
import { ERROR_MESSAGE } from "../base/constant";
import { DropdownItem, DropdownProps } from "./type";
import { DROPDOWN_CSS } from "./style";
import { BaseLabel } from "../base/label";
import { BaseError } from "../base/error";
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

    @query(".kuc-dropdown__group")
    private _groupEl!: HTMLDivElement;

    @query(".kuc-dropdown__group__select-menu")
    private _menuEl!: HTMLUListElement;

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

    @query(".kuc-dropdown__group__select-menu__item[aria-selected=true]")
    private _selectedItemEl!: HTMLLIElement;

    @query(".kuc-dropdown__group__select-menu__highlight")
    private _highlightItemEl!: HTMLLIElement;

    @query(".kuc-base-error__error")
    private _errorEl!: HTMLDivElement;

    private _timeoutID!: number | null;

    private _GUID: string;

    constructor(props?: DropdownProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      this._handleClickDocument = this._handleClickDocument.bind(this);
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
        this._isCheckedItem(item, index)
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
        if (!validateItems(this.items)) {
          throwErrorAfterUpdateComplete(this, ERROR_MESSAGE.ITEMS.IS_NOT_ARRAY);
          return false;
        }
      }

      if (changedProperties.has("value")) {
        if (!validateValueString(this.value)) {
          throwErrorAfterUpdateComplete(
            this,
            ERROR_MESSAGE.VALUE.IS_NOT_STRING
          );
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
      if (!this.value) {
        if (this.items[this.selectedIndex]) return this.selectedIndex;
        return -1;
      }

      const firstIndex = this.items.findIndex(
        (item) => item.value === this.value
      );
      if (firstIndex === -1) return -1;
      const selectedIndex = this.items.findIndex(
        (item, index) =>
          item.value === this.value && index === this.selectedIndex
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
            class="kuc-dropdown__group__select-menu"
            role="listbox"
            aria-hidden="${!this._selectorVisible}"
            ?hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this.items.map((item, number) =>
              this._getItemTemplate(item, number)
            )}
          </ul>
          <kuc-base-error
            .text="${this.error}"
            .guid="${this._GUID}"
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
      this._updateContainerWidth();
      if (this._selectorVisible) {
        this._setMenuPosition();
        this._scrollToView();
        setTimeout(() => {
          document.addEventListener("click", this._handleClickDocument, true);
        }, 1);
      } else {
        setTimeout(() => {
          document.removeEventListener(
            "click",
            this._handleClickDocument,
            true
          );
        }, 1);
      }
    }

    private _handleMouseDownDropdownItem(event: MouseEvent) {
      const itemEl = event.target as HTMLLIElement;
      const value = itemEl.getAttribute("value") as string;
      const selectedIndex = itemEl.dataset.index || "0";
      this._actionUpdateValue(value, selectedIndex);
    }

    private _handleMouseOverDropdownItem(event: Event) {
      const itemEl = event.target as HTMLLIElement;
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
          if (!this._selectorVisible) {
            this._actionShowMenu();
            break;
          }

          const itemEl = this._highlightItemEl as HTMLLIElement;
          if (itemEl === null) break;

          const value = itemEl.getAttribute("value") as string;
          const selectedIndex = itemEl.dataset.index || "0";
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
        prevItem = this._highlightItemEl
          .previousElementSibling as HTMLLIElement;
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

    private _setHighlightAndActiveDescendantMenu(
      selectedItemEl: HTMLLIElement
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
      const detail: CustomEventDetail = { oldValue: this.value, value: value };
      this.value = value;
      this.selectedIndex = indexNumber;
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

    private _updateContainerWidth() {
      const MIN_WIDTH = 180;
      let labelWidth = this._labelEl.getBoundingClientRect().width;
      if (labelWidth === 0) labelWidth = getWidthElmByContext(this._labelEl);
      labelWidth = labelWidth > MIN_WIDTH ? labelWidth : MIN_WIDTH;
      this._groupEl.style.width = labelWidth + "px";
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

      const toTop = this._buttonEl.getBoundingClientRect().top;
      const toBottom =
        window.innerHeight -
        this._buttonEl.getBoundingClientRect().bottom -
        (isWindowBottomScrollbarShow ? scrollbarHeight : 0);
      const toLeft = this._buttonEl.getBoundingClientRect().left;
      const toRight =
        window.innerWidth -
        this._buttonEl.getBoundingClientRect().left -
        (isWindowRightScrollbarShow ? scrollbarWidth : 0);

      return { toTop, toBottom, toLeft, toRight };
    }

    private _setMenuPositionAboveOrBelow() {
      this._menuEl.style.height = "auto";
      this._menuEl.style.bottom = "auto";
      this._menuEl.style.overflowY = "";

      const menuHeight = this._menuEl.getBoundingClientRect().height;
      const distanceToggleButton = this._getDistanceToggleButton();
      if (distanceToggleButton.toBottom >= menuHeight) return;

      if (distanceToggleButton.toBottom < distanceToggleButton.toTop) {
        // Above
        const errorHeight = this._errorEl.offsetHeight
          ? this._errorEl.offsetHeight + 16
          : 0;
        this._menuEl.style.bottom = `${
          this._buttonEl.offsetHeight + errorHeight
        }px`;
        if (distanceToggleButton.toTop >= menuHeight) return;
        this._menuEl.style.height = `${distanceToggleButton.toTop}px`;
        this._menuEl.style.overflowY = "scroll";
      } else {
        // Below
        this._menuEl.style.height = `${distanceToggleButton.toBottom}px`;
        this._menuEl.style.overflowY = "scroll";
      }
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
      const right = this._buttonEl.offsetWidth - distanceToggleButton.toRight;
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

    private _isCheckedItem(item: DropdownItem, index: number) {
      if (!this.value) return this.selectedIndex === index;
      return item.value === this.value && this.selectedIndex === index;
    }

    private _getItemTemplate(item: DropdownItem, index: number) {
      const isCheckedItem = this._isCheckedItem(item, index);
      return html`
        <li
          class="kuc-dropdown__group__select-menu__item"
          role="option"
          tabindex="${isCheckedItem ? "0" : "-1"}"
          aria-selected="${isCheckedItem ? "true" : "false"}"
          data-index="${index}"
          value="${item.value !== undefined ? item.value : ""}"
          id="${this._GUID}-menuitem-${index}"
          @mousedown="${this._handleMouseDownDropdownItem}"
          @mouseover="${this._handleMouseOverDropdownItem}"
        >
          ${this._getDropdownIconSvgTemplate(isCheckedItem)}
          ${item.label === undefined ? item.value : item.label}
        </li>
      `;
    }

    private _getDropdownIconSvgTemplate(checked: boolean) {
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
            fill="#3498db"/>
        </svg>`
          : ""
      }`;
    }
  }
  window.customElements.define("kuc-dropdown", KucDropdown);
  createStyleOnHeader(DROPDOWN_CSS);
  exportDropdown = KucDropdown;
})();

const Dropdown = exportDropdown as any;
export { Dropdown };
