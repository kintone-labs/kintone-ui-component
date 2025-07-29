import { html, PropertyValues, svg } from "lit";
import { property, state } from "lit/decorators.js";

import { ERROR_MESSAGE } from "../base/constant";
import { unsafeHTMLConverter, visiblePropConverter } from "../base/converter";
import { createStyleOnHeader, KucBase } from "../base/kuc-base";
import {
  isHTMLElement,
  isValidDate,
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

    @state() private _sortField: string | null = null;
    @state() private _sortDirection: "asc" | "desc" | null = null;

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
      let displayData = [...this.data];

      if (this._sortField && this._sortDirection) {
        displayData = this._sortData(
          displayData,
          this._sortField,
          this._sortDirection,
        );
      }
      if (!this.pagination) return displayData;

      const firstRow = (this._pagePosition - 1) * this.rowsPerPage + 1;
      const lastRow = this._pagePosition * this.rowsPerPage;

      return displayData.filter(
        (_element, index: number) =>
          index >= firstRow - 1 && index <= lastRow - 1,
      );
    }

    private _sortData(
      data: T[],
      field: string,
      direction: "asc" | "desc",
    ): T[] {
      return [...data].sort((a: any, b: any) => {
        const valueA = a[field];
        const valueB = b[field];

        const isAHtml = isHTMLElement(valueA);
        const isBHtml = isHTMLElement(valueB);

        if (isAHtml && isBHtml) return 0;
        if (isAHtml) return 1;
        if (isBHtml) return -1;

        if (valueA == null && valueB == null) return 0;
        if (valueA == null) return 1;
        if (valueB == null) return -1;

        if (typeof valueA === "number" && typeof valueB === "number") {
          return direction === "asc" ? valueA - valueB : valueB - valueA;
        }
        if (
          typeof valueA === "string" &&
          typeof valueB === "string" &&
          isValidDate(valueA) &&
          isValidDate(valueB)
        ) {
          const dateA = new Date(valueA);
          const dateB = new Date(valueB);
          if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
            return direction === "asc"
              ? dateA.getTime() - dateB.getTime()
              : dateB.getTime() - dateA.getTime();
          }
        }

        const strA = String(valueA);
        const strB = String(valueB);
        const collator = new Intl.Collator(undefined, {
          numeric: true,
          sensitivity: "base",
        });
        return direction === "asc"
          ? collator.compare(strA, strB)
          : collator.compare(strB, strA);
      });
    }

    private _handleClickHeader(field: string) {
      this._sortFields(field);
    }
    private _handleKeyDownHeader(event: KeyboardEvent, field: string) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        this._sortFields(field);
      }
    }
    private _sortFields(field: string) {
      const columnIndex = this._columnOrder.indexOf(field);
      if (columnIndex < 0) return;

      const column = this.columns[columnIndex];
      if (!column.sort) return;

      if (this._sortField === field) {
        this._sortDirection = this._sortDirection === "asc" ? "desc" : "asc";
      } else {
        this._sortField = field;
        this._sortDirection = "asc";
      }
      this._pagePosition = 1;
    }

    private _customWidthVariables(index: number) {
      return `var(--kuc-readonly-table-header-${index}-width, var(--kuc-readonly-table-header-width, auto))`;
    }

    private _getColumnsTemplate(column: ReadOnlyTableColumn, index: number) {
      const customWidth = this._customWidthVariables(index);
      const isHTML = column.title ? isHTMLElement(column.title) : false;
      const field = column.field || "";
      const isSortable = column.sort === true;
      const isSorted = this._sortField === field;
      const visibleIndexes = this.columns
        .map((col, i) => (col.visible !== false ? i : -1))
        .filter((i) => i !== -1);
      const isFirstVisible = index === visibleIndexes[0];
      const isLastVisible = index === visibleIndexes[visibleIndexes.length - 1];
      const sortClass = isSorted
        ? `kuc-readonly-table__table__header__cell--sorted-${this._sortDirection}`
        : "";

      return html`
        <th
          class="kuc-readonly-table__table__header__cell${isHTML
            ? " kuc-readonly-table__table__header__cell--html"
            : ""}${isSortable
            ? " kuc-readonly-table__table__header__cell--sort"
            : ""} ${sortClass} ${isFirstVisible
            ? "kuc-readonly-table__table__header__cell--first-visible"
            : ""} ${isLastVisible
            ? "kuc-readonly-table__table__header__cell--last-visible"
            : ""}"
          ?hidden="${column.visible === false}"
          style="width: ${customWidth}; min-width: ${customWidth}; max-width: ${customWidth};"
          @click="${isSortable ? () => this._handleClickHeader(field) : null}"
          tabindex="${isSortable ? 0 : -1}"
          aria-sort="${isSorted
            ? this._getSortDescription(this._sortDirection)
            : "none"}"
          @keydown="${isSortable
            ? (event: KeyboardEvent) => this._handleKeyDownHeader(event, field)
            : null}"
        >
          <div class="kuc-readonly-table__table__header__cell__wrapper">
            <div
              class="kuc-readonly-table__table__header__cell__wrapper__title${isHTML
                ? " kuc-readonly-table__table__header__cell__wrapper__title--html"
                : ""}"
            >
              ${isHTML
                ? unsafeHTMLConverter(column.title!)
                : (column.title ?? "")}
            </div>
            ${isSortable && isSorted
              ? html`<div
                  class="kuc-readonly-table__table__header__cell__wrapper__sort-icon"
                >
                  ${this._getSortSvgIcon(this._sortDirection)}
                </div>`
              : ""}
          </div>
        </th>
      `;
    }

    private _getSortDescription(direction: "asc" | "desc" | null) {
      if (direction === "desc") {
        return "descending";
      }
      if (direction === "asc") {
        return "ascending";
      }
      return "none";
    }

    private _getSortSvgIcon(direction: "asc" | "desc" | null) {
      if (direction === "desc") {
        return svg`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99996 0H5.99996V10.6011L1.4528 5.78021L0.725342 6.46637L6.57169 12.6647L12.1902 6.45887L11.4489 5.78771L6.99996 10.7017V0Z" fill="white"/>
        </svg>
        `;
      }
      if (direction === "asc") {
        return svg`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99996 13H5.99996V2.3989L1.4528 7.21979L0.725342 6.53363L6.57169 0.3353L12.1902 6.54113L11.4489 7.21229L6.99996 2.2983V13Z" fill="white"/>
      </svg>`;
      }
      return "";
    }

    private _getDataTemplate(data: any, currentIndex: number) {
      return html`
        <tr
          class="kuc-readonly-table__table__body__row kuc-readonly-table__table__body__row-${currentIndex}"
        >
          ${this._columnOrder.map((currentCol, colIndex) => {
            const visible = this.columns[colIndex].visible ?? true;
            let value = data[currentCol];

            if (isHTMLElement(value)) {
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
  }
  window.customElements.define("kuc-readonly-table", KucReadOnlyTable);
  createStyleOnHeader(READ_ONLY_TABLE_CSS);
  exportReadOnlyTable = KucReadOnlyTable;
})();

const ReadOnlyTable = exportReadOnlyTable as any;
export { ReadOnlyTable };
