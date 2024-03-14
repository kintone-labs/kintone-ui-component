import { html, svg } from "lit";
import { property, query } from "lit/decorators.js";

import { visiblePropConverter } from "../converter";
import { createStyleOnHeader, dispatchCustomEvent, KucBase } from "../kuc-base";

import { PAGINATION_CSS } from "./style";

let exportPagination;
(() => {
  exportPagination = window.customElements.get("kuc-base-pagination");
  if (exportPagination) {
    return;
  }

  class BasePagination extends KucBase {
    @property({ type: Number }) pagePosition = 1;
    @property({ type: Number }) rowsPerPage = 5;
    @property({ type: Number }) total = 1;
    @property({ type: Boolean }) isNext = true;
    @property({ type: Boolean }) isPrev = true;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;

    @query(".kuc-base-pagination__group__pager-prev")
    private _prevButtonEl!: HTMLButtonElement;

    @query(".kuc-base-pagination__group__pager-next")
    private _nextButtonEl!: HTMLButtonElement;

    render() {
      return html`
        <div class="kuc-base-pagination__group" ?hidden="${!this.visible}">
          <button
            title="previous"
            class="kuc-base-pagination__group__pager-prev${this.isPrev
              ? ""
              : " kuc-base-pagination__group__pager-disable"}"
            type="button"
            @click="${this._handleClickPrevButton}"
            @focus="${this._handleFocusPrevButton}"
            @blur="${this._handleBlurPrevButton}"
            @mouseover="${this._handleMouseOverPrevButton}"
            @mouseleave="${this._handleMouseLeavePrevButton}"
          >
            ${this._getPrevButtonSvgTemplate()}</button
          >${this._getCurrentPageNumberTemplate()}<button
            title="next"
            class="kuc-base-pagination__group__pager-next${this.isNext
              ? ""
              : " kuc-base-pagination__group__pager-disable"}"
            type="button"
            @click="${this._handleClickNextButton}"
            @focus="${this._handleFocusNextButton}"
            @blur="${this._handleBlurNextButton}"
            @mouseover="${this._handleMouseOverNextButton}"
            @mouseleave="${this._handleMouseLeaveNextButton}"
          >
            ${this._getNextButtonSvgTemplate()}
          </button>
        </div>
      `;
    }

    private _handleClickPrevButton(event: MouseEvent) {
      event.stopPropagation();
      dispatchCustomEvent(this, "kuc:pagination-click-prev");
    }

    private _handleFocusPrevButton() {
      this._prevButtonEl.classList.add(
        "kuc-base-pagination__group__pager--focus",
      );
    }

    private _handleBlurPrevButton() {
      this._prevButtonEl.classList.remove(
        "kuc-base-pagination__group__pager--focus",
      );
    }

    private _handleMouseOverPrevButton() {
      this._prevButtonEl.classList.add(
        "kuc-base-pagination__group__pager--horver",
      );
    }

    private _handleMouseLeavePrevButton() {
      this._prevButtonEl.classList.remove(
        "kuc-base-pagination__group__pager--horver",
      );
    }

    private _handleClickNextButton(event: MouseEvent) {
      event.stopPropagation();
      dispatchCustomEvent(this, "kuc:pagination-click-next");
    }

    private _handleFocusNextButton() {
      this._nextButtonEl.classList.add(
        "kuc-base-pagination__group__pager--focus",
      );
    }

    private _handleBlurNextButton() {
      this._nextButtonEl.classList.remove(
        "kuc-base-pagination__group__pager--focus",
      );
    }

    private _handleMouseOverNextButton() {
      this._nextButtonEl.classList.add(
        "kuc-base-pagination__group__pager--horver",
      );
    }

    private _handleMouseLeaveNextButton() {
      this._nextButtonEl.classList.remove(
        "kuc-base-pagination__group__pager--horver",
      );
    }

    private _getPrevButtonSvgTemplate() {
      return svg`
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.99061 7.5L9 0.0604158L7.06632 0L0 7.5L7.06632 15L9 14.9396L1.99061 7.5Z"
            fill="#888888"
          />
        </svg>
      `;
    }

    private _getNextButtonSvgTemplate() {
      return svg`
      <svg
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.00939 7.5L0 0.0604158L1.93368 0L9 7.5L1.93368 15L0 14.9396L7.00939 7.5Z"
          fill="#888888"
        />
      </svg>
      `;
    }

    private _getCurrentPageNumberTemplate() {
      const currentPageInfo = this._createCurrentPageInfo();
      const currentPageNumber = `${currentPageInfo.firstNum} - ${currentPageInfo.lastNum} / ${this.total}`;
      return html`<span class="kuc-base-pagination__group__pager-current"
        >${currentPageNumber}</span
      >`;
    }

    private _createCurrentPageInfo() {
      const firstNum = (this.pagePosition - 1) * this.rowsPerPage + 1;
      let lastNum = this.pagePosition * this.rowsPerPage;
      lastNum = lastNum > this.total ? this.total : lastNum;
      return { firstNum, lastNum };
    }
  }
  window.customElements.define("kuc-base-pagination", BasePagination);
  createStyleOnHeader(PAGINATION_CSS);
  exportPagination = BasePagination;
})();

const BasePagination = exportPagination as any;
export { BasePagination };
