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
  getScrollableAncestors,
  getToggleIconSvgTemplate,
  measureEl,
  setListBoxPosition,
} from "../../../../utils";

import { CALENDAR_HEADER_YEAR_CSS } from "./style";
export class BaseDateTimeHeaderYear extends KucBase {
  @property({ type: Number }) year = new Date().getFullYear();
  @property({ type: String }) postfix = "";

  @state()
  private _listBoxVisible = false;

  private _listBoxItems: BaseDateTimeListBoxItem[] | undefined;

  @query(".kuc-base-datetime-header-year__toggle")
  private _toggleEl!: HTMLButtonElement;

  @query(".kuc-base-datetime-header-year__listbox")
  private _listBoxEl!: any;

   @query(".kuc-base-datetime-listbox__listbox")
  private _listBoxUl!: HTMLUListElement;

  private _listBoxHeight = 0;
  private _scrollTargets: Array<Window | Element> = [];

  disconnectedCallback() {
    this._detachListeners();
    super.disconnectedCallback();
  }

  update(changedProperties: PropertyValues) {
    this._listBoxItems = this._getYearOptions().map((year: number) => {
      const item: BaseDateTimeListBoxItem = {
        value: `${year}`,
        label: `${year}${this.postfix}`,
      };
      return item;
    });
    super.update(changedProperties);
  }

  render() {
    return html`
      <button
        class="kuc-base-datetime-header-year__toggle"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible ? "-1" : "0"}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownYearToggle}"
        @keydown="${this._handleKeyDownYearToggle}"
      >
        <span class="kuc-base-datetime-header-year__toggle__label"
          >${this.year}${this.postfix}</span
        >
        <span class="kuc-base-datetime-header-year__toggle__icon"
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
    if (!this._listBoxVisible || !this._listBoxEl ) return; 
    setListBoxPosition({
      anchorEl: this._toggleEl,
      popoverEl: this._listBoxUl,
      popoverHeight: this._listBoxHeight,
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
      popoverHeight: this._listBoxHeight,
    });

  private _detachListeners() {
    for (const targetEl of this._scrollTargets) {
      targetEl.removeEventListener(
        "scroll",
        this._boundOnScrollAndResize as EventListener,
      );
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
            .value="${this.year.toString()}"
            class="kuc-base-datetime-header-year__listbox"
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

  private _handleMouseUpDropdownToggle(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleMouseDownDropdownToggle(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleClickDropdownYearToggle(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    if (!this._listBoxVisible) {
      this._openListBox();
    } else {
      this.closeListBox();
    }
    dispatchCustomEvent(this, "kuc:year-dropdown-click", {
      value: this._listBoxVisible.toString(),
      oldValue: (!this._listBoxVisible).toString(),
    });
  }

  private _handleKeyDownYearToggle(event: KeyboardEvent) {
    if (event.key === "Tab") return;
    event.preventDefault();
    this._openListBoxByKey(event.key);
  }

  private _openListBoxByKey(key: string) {
    const isOpenListBox =
      [" ", "Up", "ArrowUp", "Down", "ArrowDown", "Enter"].indexOf(key) > -1;
    if (!isOpenListBox) return;
    this._openListBox();
  }

  private _handleChangeListBox(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.closeListBox();
    if (!event.detail.value) return;
    this.year = Number(event.detail.value);
    const detail: CustomEventDetail = { value: `${this.year}` };
    dispatchCustomEvent(this, "kuc:year-dropdown-change", detail);
  }

  private async _openListBox() {
    this._listBoxVisible = true;
    await this.updateComplete;
    if (this._listBoxEl) {
      this._listBoxEl.showPopover();
      if(!this._listBoxHeight){
        const measureResult = measureEl(this._listBoxUl);
        this._listBoxHeight = measureResult.height;
      }
      setListBoxPosition({
        anchorEl: this._toggleEl,
        popoverEl: this._listBoxUl,
        popoverHeight: this._listBoxHeight,
      });
      this._attachListeners();
    }
  }

  private _getYearOptions() {
    const options = [];
    if (!Number.isInteger(this.year)) {
      this.year = new Date().getFullYear();
    }
    let i = this.year < 100 ? 0 : this.year - 100;
    const maxYear = this.year >= 9999 - 100 ? 9999 : this.year + 100;
    for (i; i <= maxYear; i++) {
      options.push(i);
    }
    return options;
  }
}

if (!window.customElements.get("kuc-base-datetime-header-year")) {
  createStyleOnHeader(CALENDAR_HEADER_YEAR_CSS);
  window.customElements.define(
    "kuc-base-datetime-header-year",
    BaseDateTimeHeaderYear,
  );
}
