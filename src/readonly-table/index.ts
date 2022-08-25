import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";

import { visiblePropConverter } from "../base/converter";
import { ERROR_MESSAGE } from "../base/constant";
import { createStyleOnHeader, KucBase } from "../base/kuc-base";
import {
  throwErrorAfterUpdateComplete,
  validateColumns,
  validateData,
  validateProps,
  validateRowsPerPage,
} from "../base/validator";
import "../base/pagination";
import { Column, ReadOnlyTableProps } from "./type";
import { READ_ONLY_TABLE_CSS } from "./style";

let exportReadOnlyTable;
(() => {
  exportReadOnlyTable = window.customElements.get("kuc-readonly-table");
  if (exportReadOnlyTable) {
    return;
  }
  class KucReadOnlyTable extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) label = "";
    @property({ type: Array }) columns: Column[] = [];
    @property({ type: Array }) data: object[] = [];
    @property({ type: Boolean }) pagination = true;
    @property({ type: Number }) rowsPerPage = 5;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;
    @state()
    private _pagePosition: number = 1;
    @state()
    private _columnOrder: string[] = [];

    constructor(props?: ReadOnlyTableProps) {
      super();
      if (!props) {
        return;
      }
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    shouldUpdate(changedProperties: PropertyValues): boolean {
      if (changedProperties.has("columns")) {
        if (!validateColumns(this.columns)) {
          throwErrorAfterUpdateComplete(
            this,
            ERROR_MESSAGE.COLUMNS.IS_NOT_ARRAY
          );
          return false;
        }
        this.columns.map((col) =>
          this._columnOrder.push(col.field ? col.field : "")
        );
      }

      if (changedProperties.has("data") && !validateData(this.data)) {
        throwErrorAfterUpdateComplete(this, ERROR_MESSAGE.DATA.IS_NOT_ARRAY);
        return false;
      }

      if (changedProperties.has("rowsPerPage")) {
        if (!validateRowsPerPage(this.rowsPerPage)) {
          this.rowsPerPage = 5;
          throwErrorAfterUpdateComplete(
            this,
            ERROR_MESSAGE.ROWS_PER_PAGE.INVALID
          );
          return true;
        }
        this.rowsPerPage = Math.round(this.rowsPerPage);
      }
      return true;
    }

    render() {
      const currentPageData = this._createDisplayData(
        this.data,
        this._pagePosition,
        this.rowsPerPage
      );
      return html`
        <table class="kuc-readonly-table__table" aria-label="${this.label}">
          <caption class="kuc-readonly-table__table__label">
            ${this.label}
          </caption>
          <thead class="kuc-readonly-table__table__header">
            <tr>
              ${this.columns.map((column) => this._getColumnsTemplate(column))}
            </tr>
          </thead>
          <tbody class="kuc-readonly-table__table__body">
            ${currentPageData.map((data: object, currentIndex: number) => {
              return this._getDataTemplate(
                data,
                currentIndex,
                this._columnOrder
              );
            })}
          </tbody>
        </table>
        <kuc-base-pagination
          .visible="${this.pagination}"
          .isPrev="${this._toggleDisplayPreviousButton()}"
          .isNext="${this._toggleDisplayNextButton()}"
          @kuc:pagination-click-prev=${this._handleClickPreviousButton}
          @kuc:pagination-click-next=${this._handleClickNextButton}
        ></kuc-base-pagination>
      `;
    }

    private _createDisplayData(
      data: object[],
      pagePosition: number,
      steps: number
    ) {
      if (!this.pagination) return data;
      const firstRow = (pagePosition - 1) * steps + 1;
      const lastRow = pagePosition * steps;
      const displayData = data.filter(
        (_element, index: number) =>
          index >= firstRow - 1 && index <= lastRow - 1
      );
      return displayData;
    }

    private _getColumnsTemplate(column: Column) {
      return html`
        <th
          class="kuc-readonly-table__table__header__cell"
          ?hidden="${column.visible === false}"
        >
          <span class="kuc-readonly-table__table__header__cell__label"
            >${column.title}</span
          >
        </th>
      `;
    }

    // Formatting the data displayed on the current page
    private _getDataTemplate(
      data: any,
      currentIndex: number,
      columnOrder: string[]
    ) {
      return html`
        <tr
          class="kuc-readonly-table__table__body__row kuc-readonly-table__table__body__row-${currentIndex}"
        >
          ${columnOrder.map((currentCol, colIndex) => {
            let isHidden = false;
            if (
              this.columns[colIndex] &&
              this.columns[colIndex].visible === false
            ) {
              isHidden = true;
            }
            /* eslint-disable */
            return html`
              <td
                class="kuc-readonly-table__table__body__row__cell-data"
                ?hidden="${isHidden}"
              >${data[currentCol]}</td>
            `;
            /* eslint-enable */
          })}
        </tr>
      `;
    }

    private _toggleDisplayPreviousButton() {
      return this._pagePosition > 1;
    }

    private _toggleDisplayNextButton() {
      return this._pagePosition < this.data.length / this.rowsPerPage;
    }

    private _handleClickPreviousButton(_event: MouseEvent | KeyboardEvent) {
      if (this._pagePosition === 1) return;
      this._pagePosition -= 1;
    }

    private _handleClickNextButton(_event: MouseEvent | KeyboardEvent) {
      this._pagePosition += 1;
    }
  }
  window.customElements.define("kuc-readonly-table", KucReadOnlyTable);
  createStyleOnHeader(READ_ONLY_TABLE_CSS);
  exportReadOnlyTable = KucReadOnlyTable;
})();

const ReadOnlyTable = exportReadOnlyTable as any;
export { ReadOnlyTable };
