import { html, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";

import {
  createStyleOnHeader,
  CustomEventDetail,
  dispatchCustomEvent,
  KucBase,
} from "../../../../../kuc-base";
import { BaseDateTimeListBoxItem } from "../../../../listbox";
import {
  getLocale,
  getScrollableAncestors,
  getToggleIconSvgTemplate,
  setListBoxPosition,
} from "../../../../utils";

import { CALENDAR_HEADER_MONTH_CSS } from "./style";
export class BaseDateTimeHeaderMonth extends KucBase {
  @property({ type: String, attribute: "lang", reflect: true }) language =
    "auto";
  @property({ type: Number }) month = 1;

  @state()
  private _listBoxVisible = false;
  private _locale = getLocale("en");
  private _monthLabel = "";
  private _listBoxItems: BaseDateTimeListBoxItem[] | undefined;
  private _maxHeight = 1000;

  @query(".kuc-base-datetime-header-month__toggle")
  private _toggleEl!: HTMLButtonElement;

  @query(".kuc-base-datetime-header-month__listbox")
  private _listBoxEl!: any;

  @query(".kuc-base-datetime-listbox__listbox")
  private _listBoxUl!: HTMLUListElement;

  private _scrollTargets: Array<Window | Element> = [];

  private _listBoxMaxHeight = 378;

  disconnectedCallback() {
    this._detachListeners();
    super.disconnectedCallback();
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("language")) {
      this._locale = getLocale(this.language);
      this._listBoxItems = this._getListBoxItems();
    }
    if (changedProperties.has("month")) {
      this._monthLabel = this._getMonthLabel();
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      <button
        class="kuc-base-datetime-header-month__toggle"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible ? "-1" : "0"}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownMonthToggle}"
        @keydown="${this._handleKeyDownMonthToggle}"
      >
        <span class="kuc-base-datetime-header-month__toggle__label"
          >${this._monthLabel}</span
        >
        <span class="kuc-base-datetime-header-month__toggle__icon"
          >${getToggleIconSvgTemplate()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `;
  }

  async updated(changedProperties: PropertyValues) {
    await this.updateComplete;
    super.update(changedProperties);
  }

  public repositionListBox() {
    if (!this._listBoxVisible || !this._listBoxEl) return;
    setListBoxPosition({
      anchorEl: this._toggleEl,
      popoverEl: this._listBoxUl,
      popoverHeight: this._listBoxMaxHeight,
    });
  }

  private _attachListeners() {
    this._detachListeners();
    this._scrollTargets = getScrollableAncestors(this._toggleEl);
    for (const targetEl of this._scrollTargets) {
      targetEl.addEventListener("scroll", this._boundOnScrollAndResize, {
        passive: true,
      });
    }
  }

  private _boundOnScrollAndResize = () =>
    setListBoxPosition({
      anchorEl: this._toggleEl,
      popoverEl: this._listBoxUl,
      popoverHeight: this._listBoxMaxHeight,
    });

  private _detachListeners() {
    for (const targetEl of this._scrollTargets) {
      targetEl.removeEventListener("scroll", this._boundOnScrollAndResize);
    }
    this._scrollTargets = [];
  }
  public closeListBox() {
    if (this._listBoxEl) {
      this._listBoxEl.hidePopover();
    }
    this._listBoxVisible = false;
    this._detachListeners();
    this._toggleEl?.focus();
  }

  private _getListBoxTemplate() {
    return this._listBoxVisible
      ? html`
          <kuc-base-datetime-listbox
            .items="${this._listBoxItems || []}"
            .value="${this.month.toString()}"
            .maxHeight="${this._maxHeight}"
            class="kuc-base-datetime-header-month__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox>
        `
      : "";
  }

  private _handleFocusOutListBox() {
    this.closeListBox();
  }

  private _handleListBoxEscape() {
    this._handleFocusOutListBox();
  }

  private _handleClickDropdownMonthToggle(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    if (!this._listBoxVisible) {
      this._openListBox();
    } else {
      this.closeListBox();
    }
    dispatchCustomEvent(this, "kuc:month-dropdown-click", {
      value: this._listBoxVisible.toString(),
      oldValue: (!this._listBoxVisible).toString(),
    });
  }

  private _handleMouseUpDropdownToggle(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleMouseDownDropdownToggle(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleKeyDownMonthToggle(event: KeyboardEvent) {
    if (this._handleTabKey(event.key)) return;
    event.preventDefault();
    this._openListBoxByKey(event.key);
  }

  private _openListBoxByKey(key: string) {
    const isOpenListBox =
      [" ", "Up", "ArrowUp", "Down", "ArrowDown", "Enter"].indexOf(key) > -1;
    if (!isOpenListBox) return;
    this._openListBox();
  }

  private _handleTabKey(key: string) {
    return key === "Tab";
  }

  private _handleChangeListBox(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.closeListBox();
    if (!event.detail.value) return;
    this.month = Number(event.detail.value);
    const detail: CustomEventDetail = { value: `${this.month}` };
    dispatchCustomEvent(this, "kuc:month-dropdown-change", detail);
  }

  private async _openListBox() {
    this._listBoxVisible = true;
    await this.updateComplete;
    if (this._listBoxEl) {
      this._listBoxEl.showPopover();
      setListBoxPosition({
        anchorEl: this._toggleEl,
        popoverEl: this._listBoxUl,
        popoverHeight: this._listBoxMaxHeight,
      });
      this._attachListeners();
    }
  }

  private _getListBoxItems() {
    return this._locale.MONTH_SELECT.map((month: string, index: number) => {
      const item: BaseDateTimeListBoxItem = {
        value: `${index + 1}`,
        label: `${month}`,
      };
      return item;
    });
  }

  private _getMonthLabel() {
    const monthSelected = this._locale.MONTH_SELECT.filter(
      (_: string, index: number) => this.month === index + 1,
    );
    return monthSelected.length > 0 ? monthSelected[0] : "JANUARY";
  }
}

if (!window.customElements.get("kuc-base-datetime-header-month")) {
  createStyleOnHeader(CALENDAR_HEADER_MONTH_CSS);
  window.customElements.define(
    "kuc-base-datetime-header-month",
    BaseDateTimeHeaderMonth,
  );
}
