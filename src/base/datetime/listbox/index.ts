import { html, svg } from "lit";
import { property, query, queryAll, state } from "lit/decorators.js";
import {
  KucBase,
  dispatchCustomEvent,
  CustomEventDetail,
} from "../../kuc-base";

export type Item = {
  label?: string;
  value?: string;
};

export class BaseDateTimeListBox extends KucBase {
  @property({ type: String }) value: string = "";
  @property({ type: Array }) items: Item[] = [];
  @property({ type: Number }) maxHeight = 300;
  @property({ type: Boolean }) doFocus = true;

  @query(".kuc-base-datetime-listbox__listbox")
  private _listBoxEl!: HTMLLIElement;

  @queryAll(".kuc-base-datetime-listbox__listbox__item")
  private _itemsEl!: HTMLLIElement[];

  @query(".kuc-base-datetime-listbox__listbox__item")
  private _firstItemEl!: HTMLLIElement;

  @query(".kuc-base-datetime-listbox__listbox__item:last-child")
  private _lastItemEl!: HTMLLIElement;

  @query(".kuc-base-datetime-listbox__listbox--highlight")
  private _highlightItemEl!: HTMLLIElement;

  @query(".kuc-base-datetime-listbox__listbox__item__icon")
  private _iconChecked!: HTMLElement;

  @state()
  private _actionKeyboard = false;

  @state()
  private _firstHighlight = true;

  @state()
  private _itemSelectedEl!: HTMLLIElement;

  constructor() {
    super();
    this._handleClickDocument = this._handleClickDocument.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      document.addEventListener("click", this._handleClickDocument);
    }, 1);
  }

  disconnectedCallback() {
    document.removeEventListener("click", this._handleClickDocument);
    super.disconnectedCallback();
  }

  public getHighlightItemEl() {
    return this._highlightItemEl;
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <ul
        style="max-height: ${this.maxHeight}px;"
        class="kuc-base-datetime-listbox__listbox"
        role="listbox"
        @mousedown="${this._handleMouseDownListBox}"
        @click="${this._handleClickListBox}"
      >
        ${this.items.map((item) => this._getListBoxItemTemplate(item))}
      </ul>
    `;
  }

  updated(changedProperties: any) {
    if (changedProperties.has("value")) {
      this._highlightSelectedItem();
    }
    this._setListBoxPosition();
    this._scrollToView();
    super.updated(changedProperties);
  }

  private _handleClickDocument() {
    dispatchCustomEvent(this, "kuc:listbox-blur", {});
  }

  private _handleClickListBox(event: Event) {
    event.stopPropagation();
  }

  private _handleKeyDownListBox(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();
    switch (event.key) {
      case "Up":
      case "ArrowUp":
        this._actionKeyboard = true;
        this._highlightPrevItemEl();
        this._focusHighlightItemEl();
        this._scrollToView();
        break;
      case "Down":
      case "ArrowDown":
        this._actionKeyboard = true;
        this._highlightNextItemEl();
        this._focusHighlightItemEl();
        this._scrollToView();
        break;
      case "Home":
        this._actionKeyboard = true;
        this._highlightFirstItem();
        this._focusHighlightItemEl();
        break;
      case "End":
        this._actionKeyboard = true;
        this._highlightLastItem();
        this._focusHighlightItemEl();
        break;
      case "Tab":
        dispatchCustomEvent(this, "kuc:listbox-click", {});
        break;
      case "Escape":
        dispatchCustomEvent(this, "kuc:listbox-escape", {});
        break;
      case " ":
      case "Enter": {
        const highlightValue = this._highlightItemEl.getAttribute("value");
        const detail: CustomEventDetail = { value: highlightValue || "" };
        dispatchCustomEvent(this, "kuc:listbox-click", detail);
        break;
      }
    }
  }

  private _handleMouseDownListBox(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (event.target === event.currentTarget) return;

    const itemEl = event.target as HTMLLIElement;
    const value = itemEl.getAttribute("value") || "";
    const detail: CustomEventDetail = { value: value };
    dispatchCustomEvent(this, "kuc:listbox-click", detail);
  }

  private _handleMouseOverItem(event: MouseEvent) {
    if (this._actionKeyboard) {
      this._actionKeyboard = false;
      return;
    }
    const itemEl = event.target as HTMLLIElement;
    this._setHighlightItemEl(itemEl);
    if (!this.doFocus) return;

    this._focusHighlightItemEl(false);
  }

  private _setListBoxPosition() {
    const listBoxHeight = this._listBoxEl.getBoundingClientRect().height;
    const parentElement = this._listBoxEl.parentElement;
    if (!parentElement || !this.parentElement) return;
    const distanceInputToBottom =
      window.innerHeight - this.parentElement.getBoundingClientRect().bottom;
    const parentHeight = this.parentElement.offsetHeight;

    this._listBoxEl.style.bottom = "auto";
    this._listBoxEl.style.left = "auto";
    if (distanceInputToBottom >= listBoxHeight) return;
    this.parentElement.style.position = "relative";
    this._listBoxEl.style.bottom = parentHeight + "px";
    this._listBoxEl.style.left = "0px";
  }

  private _setHighlightItemEl(itemEl: HTMLLIElement) {
    this._removeHighlight();
    itemEl.classList.add("kuc-base-datetime-listbox__listbox--highlight");
    itemEl.setAttribute("tabindex", "0");
  }

  private _highlightSelectedItem() {
    if (!this.doFocus) return;

    const itemsEl = Array.from(this._itemsEl);
    const itemSelected = itemsEl.filter(
      (item) => item.getAttribute("aria-selected") === "true"
    )[0];
    if (!itemSelected) return;

    this._itemSelectedEl = itemSelected;
    this._setHighlightItemEl(itemSelected);
    this._focusHighlightItemEl();
  }

  private _highlightFirstItem() {
    this._itemSelectedEl = this._firstItemEl;
    this._setHighlightItemEl(this._firstItemEl);
  }

  private _highlightLastItem() {
    this._itemSelectedEl = this._lastItemEl;
    this._setHighlightItemEl(this._lastItemEl);
  }

  private _highlightNextItemEl() {
    if (this._highlightItemEl === null || this._iconChecked === null) {
      this._highlightFirstItem();
      return;
    }
    const nextItemEl = this._getNextItemEl();
    if (nextItemEl) {
      this._setHighlightItemEl(nextItemEl);
      this._firstHighlight = false;
      this._itemSelectedEl = nextItemEl;

      return;
    }
    this._highlightFirstItem();
  }

  private _getNextItemEl() {
    const itemcheckedEL = this._iconChecked.parentElement as HTMLLIElement;
    if (!this._itemSelectedEl && itemcheckedEL && this._firstHighlight) {
      this._itemSelectedEl = itemcheckedEL;
    }
    let nextItemEl = this._highlightItemEl.nextElementSibling as HTMLLIElement;

    if (!this._itemSelectedEl) return nextItemEl;

    if (this._itemSelectedEl.nextElementSibling) {
      nextItemEl = this._itemSelectedEl.nextElementSibling as HTMLLIElement;
      return nextItemEl;
    }
    return this._firstItemEl;
  }

  private _highlightPrevItemEl() {
    if (this._highlightItemEl === null || this._iconChecked === null) {
      this._highlightLastItem();
      return;
    }
    const prevItemEl = this._getPreviousItemEl();
    if (prevItemEl) {
      this._setHighlightItemEl(prevItemEl);
      this._firstHighlight = false;
      this._itemSelectedEl = prevItemEl;
      return;
    }
    this._highlightLastItem();
  }

  private _getPreviousItemEl() {
    const itemcheckedEL = this._iconChecked.parentElement as HTMLLIElement;
    if (!this._itemSelectedEl && itemcheckedEL && this._firstHighlight) {
      this._itemSelectedEl = itemcheckedEL;
    }

    let prevItemEl = this._highlightItemEl
      .previousElementSibling as HTMLLIElement;

    if (!this._itemSelectedEl) return prevItemEl;

    if (this._itemSelectedEl.previousElementSibling) {
      prevItemEl = this._itemSelectedEl.previousElementSibling as HTMLLIElement;
      return prevItemEl;
    }
    return this._lastItemEl;
  }

  private _removeHighlight() {
    if (!this._highlightItemEl) return;
    this._highlightItemEl.setAttribute("tabindex", "-1");
    this._highlightItemEl.classList.remove(
      "kuc-base-datetime-listbox__listbox--highlight"
    );
  }

  private _focusHighlightItemEl(dispatch?: boolean) {
    const liEl = this._highlightItemEl as HTMLLIElement;
    if (!liEl) return;

    liEl.focus({ preventScroll: true });
    if (dispatch === false) return;

    this._dispatchListBoxFocusChange();
  }

  private _dispatchListBoxFocusChange() {
    const highlightValue = this._highlightItemEl.getAttribute("value") || "";
    const detail: CustomEventDetail = { value: highlightValue };
    dispatchCustomEvent(this, "kuc:listbox-focus-change", detail);
  }

  private _scrollToView() {
    const higlightItemEl =
      this._highlightItemEl || this._getHighlightItemByValue();
    if (!higlightItemEl || !this._listBoxEl) {
      return;
    }
    const lineHeight = higlightItemEl.offsetHeight;
    const offsetItemCount = this._listBoxEl.clientHeight / lineHeight / 2;
    let offsetScrollTop =
      higlightItemEl.offsetTop - offsetItemCount * lineHeight;
    if (offsetScrollTop < 0) offsetScrollTop = 0;
    this._listBoxEl.scrollTop = offsetScrollTop;
  }

  private _getHighlightItemByValue() {
    const listLiEl = Array.from(this._listBoxEl.children);
    const itemTimeObj = new Date(Date.parse(`2021/01/01 ${this.value}`));
    let liEl = listLiEl.find(
      (element) =>
        new Date(
          Date.parse(`2021/01/01 ${(element as HTMLLIElement).title}`)
        ) >= itemTimeObj
    ) as HTMLLIElement;
    if (!liEl) {
      liEl = listLiEl[listLiEl.length - 1] as HTMLLIElement;
    }
    if (!this.doFocus || !liEl) return liEl;

    this._setHighlightItemEl(liEl);
    this._focusHighlightItemEl();
    return liEl;
  }

  private _getListBoxItemTemplate(item: Item) {
    const isSelected = this.value === item.value && this.doFocus;
    return html`
      <li
        class="kuc-base-datetime-listbox__listbox__item"
        role="option"
        tabindex="${isSelected ? "0" : "-1"}"
        aria-selected="${isSelected}"
        title="${item.label || ""}"
        value="${item.value !== undefined ? item.value : ""}"
        @mouseover="${this._handleMouseOverItem}"
        @keydown="${this._handleKeyDownListBox}"
      >
        ${isSelected ? this._getCheckedIconSvgTemplate() : ""}
        ${item.label === undefined ? item.value : item.label}
      </li>
    `;
  }

  private _getCheckedIconSvgTemplate() {
    return svg`<svg
          class="kuc-base-datetime-listbox__listbox__item__icon"
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
            fill="#3498db"
          />
        </svg>`;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-base-datetime-listbox,
        kuc-base-datetime-listbox *,
        :lang(en) kuc-base-datetime-listbox,
        :lang(en) kuc-base-datetime-listbox * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-base-datetime-listbox,
        :lang(ja) kuc-base-datetime-listbox * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-base-datetime-listbox,
        :lang(zh) kuc-base-datetime-listbox * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        .kuc-base-datetime-listbox__listbox {
          position: absolute;
          z-index: 2000;
          min-width: 280px;
          margin: 0;
          padding: 8px 0;
          border: 1px solid #e3e7e8;
          background-color: #ffffff;
          list-style: none;
          line-height: 1;
          overflow-y: auto;
          -webkit-tap-highlight-color: transparent;
          box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
        }
        .kuc-base-datetime-listbox__listbox__item {
          position: relative;
          display: block;
          box-sizing: border-box;
          width: 100%;
          padding: 8px 16px 8px 25px;
          color: #333333;
          cursor: pointer;
          -webkit-tap-highlight-color: initial;
          text-align: left;
          font-size: 14px;
          user-select: none;
        }
        .kuc-base-datetime-listbox__listbox__item[aria-selected="true"] {
          color: #3498db;
        }
        .kuc-base-datetime-listbox__listbox--highlight {
          background-color: #e2f2fe;
          cursor: pointer;
        }
        .kuc-base-datetime-listbox__listbox__item__icon {
          position: absolute;
          left: 8px;
          top: 10px;
          background-color: transparent;
        }
        .kuc-base-datetime-listbox__listbox__item:focus {
          outline: none;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-datetime-listbox")) {
  window.customElements.define(
    "kuc-base-datetime-listbox",
    BaseDateTimeListBox
  );
}
