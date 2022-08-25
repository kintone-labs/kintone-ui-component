import { html, svg } from "lit";
import { property, query } from "lit/decorators.js";
import { createStyleOnHeader, dispatchCustomEvent, KucBase } from "../kuc-base";
import { visiblePropConverter } from "../converter";
import { PAGINATION_CSS } from "./style";

let exportPagination;
(() => {
  exportPagination = window.customElements.get("kuc-base-pagination");
  if (exportPagination) {
    return;
  }

  class BasePagination extends KucBase {
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;
    @property({
      type: Boolean,
      converter: visiblePropConverter,
    })
    isNext = true;
    @property({
      type: Boolean,
      converter: visiblePropConverter,
    })
    isPrev = true;

    render() {
      return html`
        <div class="kuc-base-pagination__group" ?hidden="${!this.visible}">
          <button
            title="previous"
            class="kuc-base-pagination__group__pagination-prev${this.isPrev
              ? ""
              : " pager-disable"}"
            type="button"
            @click="${this._handleClickPrevButton}"
          >
            ${this._getPrevButtonSvgTemplate()}
          </button>
          <button
            title="next"
            class="kuc-base-pagination__group__pagination-next${this.isNext
              ? ""
              : " pager-disable"}"
            type="button"
            @click="${this._handleClickNextButton}"
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

    private _handleClickNextButton(event: MouseEvent) {
      event.stopPropagation();
      dispatchCustomEvent(this, "kuc:pagination-click-next");
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
  }
  window.customElements.define("kuc-base-pagination", BasePagination);
  createStyleOnHeader(PAGINATION_CSS);
  exportPagination = BasePagination;
})();

const BasePagination = exportPagination as any;
export { BasePagination };
