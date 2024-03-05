import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";

import { ERROR_MESSAGE } from "../base/constant";
import { unsafeHTMLConverter, visiblePropConverter } from "../base/converter";
import { createStyleOnHeader, KucBase } from "../base/kuc-base";
import {
  validateArrayType,
  validateProps,
  validateRowsPerPage,
} from "../base/validator";

import "../base/pagination";
import { READ_ONLY_TABLE_CSS } from "./style";
import { ReadOnlyTableColumn, ReadOnlyTableProps } from "./type";

let exportReadOnlyTable;
(() => {
  exportReadOnlyTable = window.customElements.get("kuc-readonly-table");
  if (exportReadOnlyTable) {
    return;
  }
  class KucReadOnlyTable<T extends object = object> extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) label = "";
    @property({ type: Array }) columns: ReadOnlyTableColumn[] = [];
    @property({ type: Array }) data: T[] = [];
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

    constructor(props?: ReadOnlyTableProps<T>) {
      super();
      if (!props) return;
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    shouldUpdate(changedProperties: PropertyValues): boolean {
      if (
        changedProperties.has("columns") &&
        !validateArrayType(this.columns)
      ) {
        this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.COLUMNS.IS_NOT_ARRAY);
        return false;
      }

      if (changedProperties.has("data") && !validateArrayType(this.data)) {
        this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.DATA.IS_NOT_ARRAY);
        return false;
      }

      if (
        changedProperties.has("rowsPerPage") &&
        !validateRowsPerPage(this.rowsPerPage)
      ) {
        this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.ROWS_PER_PAGE.INVALID);
        return false;
      }
      return true;
    }

    willUpdate(changedProperties: PropertyValues): void {
      if (changedProperties.has("columns")) {
        this._columnOrder = [];
        this.columns.map((col) =>
          this._columnOrder.push(col.field ? col.field : ""),
        );
      }

      if (changedProperties.has("rowsPerPage")) {
        this.rowsPerPage = Math.round(this.rowsPerPage);
      }
    }

    render() {
      const currentPageData = this._createDisplayData();
      return !this.columns || this.columns.length < 1
        ? html`
            <table class="kuc-readonly-table__table">
              <caption
                class="kuc-readonly-table__table__label kuc-readonly-table__table__label--no-column"
                ?hidden="${!this.label}"
              >
                ${this.label}
              </caption>
            </table>
          `
        : html`
            <table class="kuc-readonly-table__table">
              <caption
                class="kuc-readonly-table__table__label"
                ?hidden="${!this.label}"
              >
                ${this.label}
              </caption>
              <thead class="kuc-readonly-table__table__header">
                <tr>
                  ${this.columns.map((column, index) =>
                    this._getColumnsTemplate(column, index),
                  )}
                </tr>
              </thead>
              <tbody class="kuc-readonly-table__table__body">
                ${currentPageData.map((data: object, currentIndex: number) => {
                  return this._getDataTemplate(data, currentIndex);
                })}
              </tbody>
            </table>
            <kuc-base-pagination
              .pagePosition="${this._pagePosition}"
              .rowsPerPage="${this.rowsPerPage}"
              .total="${this.data.length}"
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
          index >= firstRow - 1 && index <= lastRow - 1,
      );
      return displayData;
    }

    private _customWidthVariables(index: number) {
      return `var(--kuc-readonly-table-header-${index}-width, var(--kuc-readonly-table-header-width, auto))`;
    }

    private _getColumnsTemplate(column: ReadOnlyTableColumn, index: number) {
      const customWidth = this._customWidthVariables(index);
      return html`
        <th
          class="kuc-readonly-table__table__header__cell"
          ?hidden="${column.visible === false}"
          style="width: ${customWidth}; min-width: ${customWidth}; max-width: ${customWidth}"
        >
          ${column.title || ""}
        </th>
      `;
    }

    private _getDataTemplate(data: any, currentIndex: number) {
      return html`
        <tr
          class="kuc-readonly-table__table__body__row kuc-readonly-table__table__body__row-${currentIndex}"
        >
          ${this._columnOrder.map((currentCol, colIndex) => {
            const visible = this.columns[colIndex].visible ?? true;
            let value = data[currentCol];

            if (this._isHTML(value)) {
              value = html`<div
                class="kuc-readonly-table__table__body__row__cell-data--html"
              >
                ${unsafeHTMLConverter(value)}
              </div>`;
            }

            const customWidth = this._customWidthVariables(colIndex);
            // Do not remove below disable comment. This is for table display.
            // eslint-disable-next-line
            return html`<td class="kuc-readonly-table__table__body__row__cell-data" ?hidden="${!visible}" style="width: ${customWidth}; min-width: ${customWidth}; max-width: ${customWidth}">${value}</td>`;
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
        this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.ROWS_PER_PAGE.INVALID);
        return;
      }
      this._pagePosition -= 1;
    }

    private _handleClickNextButton(_event: MouseEvent | KeyboardEvent) {
      if (!validateRowsPerPage(this.rowsPerPage)) {
        this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.ROWS_PER_PAGE.INVALID);
        return;
      }
      if (this._toggleDisplayNextButton() === false) return;
      this._pagePosition += 1;
    }

    private _isHTML(element: string | HTMLElement) {
      if (element instanceof HTMLElement) return true;

      const div = document.createElement("div");
      div.innerHTML = element;
      return div.childElementCount > 0;
    }
  }
  window.customElements.define("kuc-readonly-table", KucReadOnlyTable);
  createStyleOnHeader(READ_ONLY_TABLE_CSS);
  exportReadOnlyTable = KucReadOnlyTable;
})();

const ReadOnlyTable = exportReadOnlyTable as any;
export { ReadOnlyTable };
