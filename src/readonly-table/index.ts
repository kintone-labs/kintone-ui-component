/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable kuc-v1/no-using-event-handler-name */
/* eslint-disable kuc-v1/validator-in-should-update */
import { html, svg, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import { KucBase, createStyleOnHeader } from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";
import { BaseLabel } from "../base/label";
import { Column, ReadOnlyTableProps } from "./type";
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
    @property({ type: Array }) data: string[][] = [];
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

    @query(".kuc-readonly-table__pager__pagenation-prev")
    private _prevButtonEl!: HTMLButtonElement;
    @query(".kuc-readonly-table__pager__pagenation-next")
    private _nextButtonEl!: HTMLButtonElement;

    constructor(props?: ReadOnlyTableProps) {
      super();

      if (props && props.columns && props.data) {
        this._validateColumns(props.columns);
        this._validateData(props.data);
        props.columns.map((col) =>
          this._columnOrder.push(col.key ? col.key : "")
        );
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
      if (changedProperties.has("data")) this._validateData(this.data);

      super.update(changedProperties);
    }

    render() {
      const currentPageData = this._createDisplayData(
        this.data,
        this._pagePosition,
        this.rowsPerPage
      );
      console.log(currentPageData);
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
            ${currentPageData.map((data: string[], currentIndex: number) => {
              console.log("hi");
              return this._getDataTemplate(
                data,
                currentIndex,
                this._columnOrder
              );
            })}
          </tbody>
        </table>
        <div class="kuc-readonly-table__pager" ?hidden="${!this.pagination}">
          <button
            title="previous"
            class="kuc-readonly-table__pager__pagenation-prev"
            type="button"
            @click="${this._handleClickPreviusButton}"
          >
            ${this._getPrevButtonSvgTemplate()}
          </button>
          <button
            title="next"
            class="kuc-readonly-table__pager__pagenation-next"
            type="button"
            @click="${this._handleClickNextButton}"
          >
            ${this._getNextButtonSvgTemplate()}
          </button>
        </div>
      `;
    }

    updated() {
      if (!this._toggleDisplayPreviusButton()) {
        this._prevButtonEl.classList.add("pager-disable");
      } else {
        this._prevButtonEl.classList.remove("pager-disable");
      }

      if (!this._toggleDisplayNextButton()) {
        this._nextButtonEl.classList.add("pager-disable");
      } else {
        this._nextButtonEl.classList.remove("pager-disable");
      }
    }

    private _validateColumns(columns: Column[]) {
      if (!Array.isArray(columns)) {
        throw new Error("'columns' property is invalid");
      }
    }

    private _validateData(data: string[][]) {
      if (!Array.isArray(data)) {
        throw new Error("'data' property is invalid");
      }
      // data &&
      //   data.forEach((val) => {
      //     if (!Array.isArray(val)) {
      //       throw new Error("'data' property is invalid");
      //     }
      //   });
    }

    private _validateRowsPerPage(numRows: number) {
      if (numRows < 0 || numRows === 0 || !Number.isInteger(numRows)) {
        console.error(
          "'rowsPerPage' property must be a positive integer! Set to 5 by default."
        );
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
      data: string[][],
      pagePosition: number,
      steps: number
    ) {
      if (!this.pagination) return data;
      const firstRow = (pagePosition - 1) * steps + 1;
      const lastRow = pagePosition * steps;
      const displayData = data.filter(
        (element, index: number) =>
          element.length && index >= firstRow - 1 && index <= lastRow - 1
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
          ${columnOrder.forEach((currentCol, colIndex) => {
            let isHidden = false;
            if (
              this.columns[colIndex] &&
              this.columns[colIndex].visible === false
            ) {
              isHidden = true;
            }
            data.map((dataEl: any) => {
              return html`
                <td
                  class="kuc-readonly-table__table__body__row__cell-data"
                  ?hidden="${isHidden}"
                >
                  ${dataEl[currentCol]}
                </td>
              `;
            });
          })}
        </tr>
      `;
    }

    private _handleClickPreviusButton(event: MouseEvent | KeyboardEvent) {
      if (this._pagePosition === 1) return;
      this._pagePosition -= 1;
    }

    private _handleClickNextButton(event: MouseEvent | KeyboardEvent) {
      this._pagePosition += 1;
    }

    private _toggleDisplayPreviusButton() {
      return this._pagePosition > 1;
    }

    private _toggleDisplayNextButton() {
      return this._pagePosition < this.data.length / this.rowsPerPage;
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
  window.customElements.define("kuc-readonly-table", KucReadOnlyTable);
  createStyleOnHeader(READ_ONLY_TABLE_CSS);
  exportReadOnlyTable = KucReadOnlyTable;
})();

const ReadOnlyTable = exportReadOnlyTable as any;
export { ReadOnlyTable };
