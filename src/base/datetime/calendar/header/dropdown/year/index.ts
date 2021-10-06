import { html, property, query, PropertyValues, state } from "lit-element";
import {
  KucBase,
  generateGUID,
  CustomEventDetail,
  dispatchCustomEvent,
} from "../../../../../kuc-base";
import { BaseDateTimeMenu, Item } from "../../../../menu";
import { _getToggleIconSvgTemplate } from "../../ultils";

export class BaseDateTimeYearDropdown extends KucBase {
  @property({ type: Number }) year = 2021;
  @property({ type: String }) postfix = "";

  @state()
  private _menuVisible = false;

  @state()
  private _currentYear = new Date().getFullYear();

  private _GUID = generateGUID();
  private _menuItems: Item[] | undefined;

  @query(".kuc-base-datetime-year-dropdown__toggle")
  private _toggleEl!: HTMLButtonElement;

  @query(".kuc-base-datetime-year-dropdown__menu")
  private _menuEl!: BaseDateTimeMenu;

  update(changedProperties: PropertyValues) {
    this._menuItems = this._getYearOptions().map((year: number) => {
      const item: Item = {
        value: `${year}`,
        label: `${year}${this.postfix}`,
      };
      return item;
    });
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <button
        class="kuc-base-datetime-year-dropdown__toggle"
        aria-haspopup="true"
        aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownYearToggle}"
        @blur="${this._handleBlurDropdownYearToggle}"
        @keydown="${this._handleKeyDownYearToggle}"
      >
        <span
          class="kuc-base-datetime-calendar-header__group__toggle__selected-year-label"
          data-year="${this.year}"
          >${this.year}</span
        >
        <span class="kuc-base-datetime-year__toggle__icon"
          >${_getToggleIconSvgTemplate()}
        </span>
      </button>
      <kuc-base-datetime-menu
        .items="${this._menuItems || []}"
        .value="${this.year.toString()}"
        class="kuc-base-datetime-year-dropdown__menu"
        @kuc:calendar-menu-click="${this._handleChangeMenu}"
        aria-hidden="${!this._menuVisible}"
        ?hidden="${!this._menuVisible}"
      >
      </kuc-base-datetime-menu>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        .kuc-base-datetime-year-dropdown__toggle {
          position: relative;
          box-sizing: border-box;
          height: 32px;
          padding: 0 14px 0 8px;
          line-height: 30px;
          overflow: hidden;
          background-color: white;
          border: 1px solid transparent;
          cursor: pointer;
        }
        .kuc-base-datetime-year__toggle__icon {
          flex: none;
          width: 38px;
          height: 38px;
        }
      </style>
    `;
  }

  private _handleMouseUpDropdownToggle(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleMouseDownDropdownToggle(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleClickDropdownYearToggle(event: MouseEvent) {
    if (!this._menuVisible) {
      this._openMenu();
    } else {
      this._closeMenu();
    }
  }

  private _handleKeyDownYearToggle(event: KeyboardEvent) {
    if (!this._menuVisible) {
      this._menuEl.highlightFirstItem();
      return;
    }
    switch (event.key) {
      case "Up":
      case "ArrowUp": {
        event.preventDefault();
        this._menuEl.highlightPrevItem();
        this._menuEl.scrollToView();
        this._setActiveDescendant(
          this._toggleEl,
          this._menuEl.getHighlightItemId() ?? ""
        );
        break;
      }
      case "Down":
      case "ArrowDown": {
        event.preventDefault();
        this._menuEl.highlightNextItem();
        this._menuEl.scrollToView();
        this._setActiveDescendant(
          this._toggleEl,
          this._menuEl.getHighlightItemId() ?? ""
        );
        break;
      }
      case "Home":
        event.preventDefault();
        this._menuEl.highlightFirstItem();
        this._menuEl.scrollToTop();
        this._setActiveDescendant(
          this._toggleEl,
          this._menuEl.getHighlightItemId() ?? ""
        );
        break;
      case "End":
        event.preventDefault();
        this._menuEl.highlightLastItem();
        this._menuEl.scrollToBottom();
        this._setActiveDescendant(
          this._toggleEl,
          this._menuEl.getHighlightItemId() ?? ""
        );
        break;
      case "Enter": {
        event.preventDefault();
        const highlightValue = this._menuEl.getHighlightValue();
        if (highlightValue) {
          this.year = Number(highlightValue);
          const detail: CustomEventDetail = { value: `${this.year}` };
          dispatchCustomEvent(this, "kuc:year-dropdown-change", detail);
        }
        this._menuVisible = false;
        break;
      }
    }
  }

  private _handleBlurDropdownYearToggle(event: Event) {
    this._menuVisible = false;
  }

  private _handleChangeMenu(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.year = Number(event.detail.value);
    this._menuVisible = false;
    const detail: CustomEventDetail = { value: `${this.year}` };
    dispatchCustomEvent(this, "kuc:year-dropdown-change", detail);
  }

  private _openMenu() {
    this._toggleEl.focus();
    this._menuVisible = true;
    this._menuEl.highlightSelectedItem();
  }

  private _closeMenu() {
    this._menuVisible = false;
    this._removeActiveDescendant(this._toggleEl);
  }

  private _setActiveDescendant(_buttonEl: HTMLButtonElement, value?: string) {
    if (value !== undefined && _buttonEl !== null) {
      _buttonEl.setAttribute("aria-activedescendant", value);
    }
  }

  private _removeActiveDescendant(_buttonEl: HTMLButtonElement) {
    _buttonEl.removeAttribute("aria-activedescendant");
  }

  private _getYearOptions() {
    const options = [];
    const year = this._currentYear;
    if (!Number.isInteger(this.year)) {
      this.year = 2021;
    }
    for (let i = year - 100; i <= year + 100; i++) {
      options.push(i);
    }
    return options;
  }
}

if (!window.customElements.get("kuc-base-datetime-year-dropdown")) {
  window.customElements.define(
    "kuc-base-datetime-year-dropdown",
    BaseDateTimeYearDropdown
  );
}
