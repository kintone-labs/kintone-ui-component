import { html, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import { KucBase, createStyleOnHeader } from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import {
  throwErrorAfterUpdateComplete,
  validateProps,
  validateValueArray,
} from "../base/validator";
import { BaseLabel } from "../base/label";
import "../base/pagination";
import { ERROR_MESSAGE } from "../base/constant";
import { Column, ReadOnlyTableProps, DataItem } from "./type";
import { READ_ONLY_TABLE_CSS } from "./style";
export { BaseLabel };

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
    @property({ type: Array }) data: DataItem[] = [];
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
      if (props && props.columns && props.data) {
        this._validateColumns(props.columns);
        props.columns.map((col) =>
          this._columnOrder.push(col.field ? col.field : "")
        );
        if (!validateValueArray(props.data)) {
          throwErrorAfterUpdateComplete(this, ERROR_MESSAGE.VALUE.IS_NOT_ARRAY);
        }
      } else {
        return;
      }

      if (props.rowsPerPage || props.rowsPerPage === 0) {
        props.rowsPerPage = this._validateRowsPerPage(props.rowsPerPage);
      }

      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    update(changedProperties: PropertyValues) {
      if (changedProperties.has("columns")) this._validateColumns(this.columns);
      if (changedProperties.has("data")) validateValueArray(this.data);

      super.update(changedProperties);
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
            <kuc-base-label .text="${this.label}"></kuc-base-label>
          </caption>
          <thead class="kuc-readonly-table__table__header">
            <tr>
              ${this.columns.map((column) => this._getColumnsTemplate(column))}
            </tr>
          </thead>
          <tbody class="kuc-readonly-table__table__body">
            ${currentPageData.map((data: string, currentIndex: number) => {
              return this._getDataTemplate(
                data,
                currentIndex,
                this._columnOrder
              );
            })}
          </tbody>
        </table>
        <kuc-base-pagination
          .className="pagination-class"
          .id="pagination-id"
          .visible="${this.pagination}"
          .isPrev="${this._toggleDisplayPreviousButton()}"
          .isNext="${this._toggleDisplayNextButton()}"
          @kuc:pagination-click-prev=${this._handleClickPreviousButton}
          @kuc:pagination-click-next=${this._handleClickNextButton}
        ></kuc-base-pagination>
      `;
    }

    private _validateColumns(columns: Column[]) {
      if (!Array.isArray(columns)) {
        throw new Error(ERROR_MESSAGE.COLUMNS.INVALID);
      }
    }

    private _validateRowsPerPage(numRows: number) {
      if (numRows < 0 || numRows === 0 || typeof numRows !== "number") {
        console.error(ERROR_MESSAGE.ROWS_PER_PAGE.INVALID);
        return 5;
      }
      return Math.round(numRows);
    }

    private _getColumnsTemplate(column: Column) {
      return html`
        <th
          class="kuc-readonly-table__table__header__cell"
          ?hidden="${column.visible === false}"
        >
          <span class="kuc-readonly-table__table__header__cell__label">
            ${column.headerName}</span
          >
        </th>
      `;
    }

    // Formatting the data displayed on the current page
    private _createDisplayData(
      data: string[],
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
            return html`
              <td
                class="kuc-readonly-table__table__body__row__cell-data"
                ?hidden="${isHidden}"
              >
                ${data[currentCol]}
              </td>
            `;
          })}
        </tr>
      `;
    }

    private _handleClickPreviousButton(_event: MouseEvent | KeyboardEvent) {
      if (this._pagePosition === 1) return;
      this._pagePosition -= 1;
    }

    private _handleClickNextButton(_event: MouseEvent | KeyboardEvent) {
      this._pagePosition += 1;
    }

    private _toggleDisplayPreviousButton() {
      return this._pagePosition > 1;
    }

    private _toggleDisplayNextButton() {
      return this._pagePosition < this.data.length / this.rowsPerPage;
    }
  }
  window.customElements.define("kuc-readonly-table", KucReadOnlyTable);
  createStyleOnHeader(READ_ONLY_TABLE_CSS);
  exportReadOnlyTable = KucReadOnlyTable;
})();

const ReadOnlyTable = exportReadOnlyTable as any;
export { ReadOnlyTable };
