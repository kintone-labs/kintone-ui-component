import { html, property, svg, query, PropertyValues, state } from "lit-element";
import { KucBase, generateGUID } from "../../../../../kuc-base";
import { BaseDateTimeMenu, Item } from "../../../../menu";

export class BaseDateTimeYearDropdown extends KucBase {
  @property({ type: Number }) year = 2021;
  @property({ type: Number }) postfix = 2021;

  @state()
  private _menuVisible = false;

  @state()
  private _currentYear = new Date().getFullYear();
  // console.log('test')

  private _GUID = generateGUID();
  private _menuItems: Item[] | undefined;

  @query(".kuc-base-datetime-year-dropdown__toggle")
  private _toogleEl!: HTMLButtonElement;

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
        @keydown="${this._handleKeydownYearToggle}"
      >
        <span
          class="kuc-base-datetime-calendar-header__group__toggle__selected-year-label"
          >${this.year}</span
        >
        <span class="kuc-base-datetime-year__toggle__icon"
          >${this._getToggleIconSvgTemplate()}
        </span>
      </button>
      <kuc-base-datetime-menu
        .items="${this._menuItems}"
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
          padding: 0 24px 0 8px;
          line-height: 30px;
          overflow: hidden;
          background-color: white;
          text-overflow: ellipsis;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          border: 1px solid transparent;
        }
        .kuc-base-datetime-year__toggle__icon {
          flex: none;
          width: 38px;
          height: 38px;
        }
      </style>
    `;
  }

  private _getToggleIconSvgTemplate() {
    return svg`
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5V1.2764L6 7.5L12 1.2764V0.5L6 6.5L0 0.5Z" fill="#888888"/>
    </svg>
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

  private _handleKeydownYearToggle(event: KeyboardEvent) {
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
          this._toogleEl,
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
          this._toogleEl,
          this._menuEl.getHighlightItemId() ?? ""
        );
        break;
      }
      case "Home":
        event.preventDefault();
        this._menuEl.highlightFirstItem();
        this._menuEl.scrollToTop();
        this._setActiveDescendant(
          this._toogleEl,
          this._menuEl.getHighlightItemId() ?? ""
        );
        break;
      case "End":
        event.preventDefault();
        this._menuEl.highlightLastItem();
        this._menuEl.scrollToBottom();
        this._setActiveDescendant(
          this._toogleEl,
          this._menuEl.getHighlightItemId() ?? ""
        );
        break;
      case "Enter": {
        event.preventDefault();
        const highlightValue = this._menuEl.getHighlightValue();
        if (highlightValue) {
          this.year = Number(highlightValue);
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
  }

  private _openMenu() {
    this._toogleEl.focus();
    this._menuVisible = true;
    this._menuEl.highlightSelectedItem();
  }

  private _closeMenu() {
    this._menuVisible = false;
    this._removeActiveDescendant(this._toogleEl);
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
