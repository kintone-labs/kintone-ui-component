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
      if (!props) return;
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
      }

      if (changedProperties.has("data") && !validateData(this.data)) {
        throwErrorAfterUpdateComplete(this, ERROR_MESSAGE.DATA.IS_NOT_ARRAY);
        return false;
      }

      if (changedProperties.has("rowsPerPage")) {
        if (!validateRowsPerPage(this.rowsPerPage)) {
          throwErrorAfterUpdateComplete(
            this,
            ERROR_MESSAGE.ROWS_PER_PAGE.INVALID
          );
          return false;
        }
      }

      return true;
    }

    willUpdate(changedProperties: PropertyValues): void {
      if (changedProperties.has("columns")) {
        this._columnOrder = [];
        this.columns.map((col) =>
          this._columnOrder.push(col.field ? col.field : "")
        );
      }

      if (changedProperties.has("rowsPerPage")) {
        this.rowsPerPage = Math.round(this.rowsPerPage);
      }
    }

    render() {
      const currentPageData = this._createDisplayData();
      return html`
        <table class="kuc-readonly-table__table">
          <caption
            class="kuc-readonly-table__table__label"
            ?hidden="${!this.label}"
          >
            ${this.label}
          </caption>
          <thead class="kuc-readonly-table__table__header">
            <tr>
              ${this.columns.map((column) => this._getColumnsTemplate(column))}
            </tr>
          </thead>
          <tbody class="kuc-readonly-table__table__body">
            ${currentPageData.map((data: object, currentIndex: number) => {
              return this._getDataTemplate(data, currentIndex);
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

    private _createDisplayData() {
      if (!this.pagination) return this.data;
      const firstRow = (this._pagePosition - 1) * this.rowsPerPage + 1;
      const lastRow = this._pagePosition * this.rowsPerPage;
      const displayData = this.data.filter(
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
    private _getDataTemplate(data: any, currentIndex: number) {
      return this.columns.length === 0
        ? null
        : html`
            <tr
              class="kuc-readonly-table__table__body__row kuc-readonly-table__table__body__row-${currentIndex}"
            >
              ${this._columnOrder.map((currentCol, colIndex) => {
                const visible = this.columns[colIndex].visible ?? true;
                const value = data[currentCol];
                /* eslint-disable */
                return html`<td class="kuc-readonly-table__table__body__row__cell-data" ?hidden="${!visible}">${value}</td>`;
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
      if (this._pagePosition < 2) return;
      if (!validateRowsPerPage(this.rowsPerPage)) {
        throwErrorAfterUpdateComplete(
          this,
          ERROR_MESSAGE.ROWS_PER_PAGE.INVALID
        );
        return;
      }
      this._pagePosition -= 1;
    }

    private _handleClickNextButton(_event: MouseEvent | KeyboardEvent) {
      if (!validateRowsPerPage(this.rowsPerPage)) {
        throwErrorAfterUpdateComplete(
          this,
          ERROR_MESSAGE.ROWS_PER_PAGE.INVALID
        );
        return;
      }
      this._pagePosition += 1;
    }
  }
  window.customElements.define("kuc-readonly-table", KucReadOnlyTable);
  createStyleOnHeader(READ_ONLY_TABLE_CSS);
  exportReadOnlyTable = KucReadOnlyTable;
})();

const ReadOnlyTable = exportReadOnlyTable as any;
export { ReadOnlyTable };
