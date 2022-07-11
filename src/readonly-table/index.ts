/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable kuc-v1/no-using-event-handler-name */
/* eslint-disable kuc-v1/validator-in-should-update */
import { html, svg, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import { KucBase } from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";
import { BaseLabel } from "../base/label";
export { BaseLabel };

type Column = { headerName?: string; visible?: boolean; width?: string };
type ReadOnlyTableProps = {
  className?: string;
  id?: string;
  label?: string;
  columns?: Column[];
  data?: string[][];
  pagination?: boolean;
  rowsPerPage?: number;
  paginationPosition?: "left" | "right";
  visible?: boolean;
};

export class ReadOnlyTable extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) label = "";
  @property({ type: Array }) columns: Column[] = [];
  @property({ type: Array }) data: string[][] = [];
  @property({ type: Boolean }) pagination = true;
  @property({ type: Number }) rowsPerPage = 5;
  @property({ type: String }) paginationPosition = "left";
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter,
  })
  visible = true;
  @state()
  private _pagePosition: number = 1;

  @query(".kuc-readonly-table__pager__pagenation-prev")
  private _prevButtonEl!: HTMLButtonElement;
  @query(".kuc-readonly-table__pager__pagenation-next")
  private _nextButtonEl!: HTMLButtonElement;

  constructor(props?: ReadOnlyTableProps) {
    super();
    if (props && props.columns && props.data) {
      this._validateColumns(props.columns);
      this._validateData(props.data);
    } else {
      return;
    }

    if (props.rowsPerPage || props.rowsPerPage === 0) {
      props.rowsPerPage = this._validateRowsPerPage(props.rowsPerPage);
    }

    if (props.paginationPosition) {
      props.paginationPosition = this._validatePagination(
        props.paginationPosition
      );
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
    return html`
      ${this._getStyleTagTemplate()}
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
            return this._getDataTemplate(data, currentIndex);
          })}
        </tbody>
      </table>
      <div
        class="kuc-readonly-table__pager"
        style="float: ${this.paginationPosition}"
        ?hidden="${!this.pagination}"
      >
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
    data &&
      data.forEach((val) => {
        if (!Array.isArray(val)) {
          throw new Error("'data' property is invalid");
        }
      });
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

  private _validatePagination(option: string) {
    if (option !== "left" && option !== "right") {
      console.error(
        "'paginationPosition' must be either 'left' or 'right'. Set to 'left' by default"
      );
      return "left";
    }
    return option;
  }

  private _getColumnsTemplate(column: Column) {
    if (!column.width) {
      column.width = "auto";
    }

    return html`
      <th
        class="kuc-readonly-table__table__header__cell"
        style="width: ${column.width}"
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

  private _getDataTemplate(data: string[], currentIndex: number) {
    return html`
      <tr
        class="kuc-readonly-table__table__body__row kuc-readonly-table__table__body__row-${currentIndex}"
      >
        ${data.map((dataContent: string, dataIndex: number) => {
          let isHidden = false;
          if (
            this.columns[dataIndex] &&
            this.columns[dataIndex].visible === false
          ) {
            isHidden = true;
          }
          return html`
            <td
              class="kuc-readonly-table__table__body__row__cell-data"
              ?hidden="${isHidden}"
            >
              ${dataContent}
            </td>
          `;
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

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-readonly-table,
        kuc-readonly-table *,
        :lang(en) kuc-readonly-table,
        :lang(en) kuc-readonly-table * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-readonly-table,
        :lang(ja) kuc-readonly-table * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-readonly-table,
        :lang(zh) kuc-readonly-table * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-readonly-table {
          font-size: 14px;
          color: #333333;
          display: block;
        }
        kuc-readonly-table[hidden] {
          display: none;
        }
        .kuc-readonly-table__table {
          border-collapse: collapse;
          table-layout: fixed;
          width: 100%;
        }
        .kuc-readonly-table__table__header {
          border-width: 0px 1px;
          border-color: #3498db;
          border-style: solid;
        }
        .kuc-readonly-table__table__label {
          text-align: left;
          white-space: nowrap;
          padding: 4px 0px;
        }
        .kuc-readonly-table__table__label[hidden] {
          display: none;
        }
        .kuc-readonly-table__table__header__cell {
          background-color: #3498db;
          color: #ffffff;
          height: 40px;
          box-sizing: border-box;
          text-align: left;
        }
        .kuc-readonly-table__table__header__cell[hidden] {
          display: none;
        }
        .kuc-readonly-table__table__header__cell__label {
          padding: 4px 8px;
          font-weight: 400;
          font-size: 12px;
        }
        .kuc-readonly-table__table__body__row-0
          > .kuc-readonly-table__table__body__row__cell-data {
          border-width: 0 1px 1px 1px;
        }
        .kuc-readonly-table__table__body__row__cell-data {
          border-color: #e3e7e8;
          border-style: solid;
          border-width: 1px;
          padding: 4px 8px;
        }
        .kuc-readonly-table__table__body__row__cell-data[hidden] {
          display: none;
        }
        .kuc-readonly-table__table__header__cell,
        .kuc-readonly-table__table__body__row__cell-data {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .kuc-readonly-table__pager {
          margin-top: 10px;
        }
        .kuc-readonly-table__pager button {
          cursor: pointer;
        }
        .kuc-readonly-table__pager__pagenation-prev {
          border: none;
          background-color: transparent;
          visibility: visible;
        }
        .kuc-readonly-table__pager__pagenation-next {
          border: none;
          background-color: transparent;
          visibility: visible;
        }
        .kuc-readonly-table__pager__pagenation-next:hover svg path,
        .kuc-readonly-table__pager__pagenation-prev:hover svg path,
        .kuc-readonly-table__pager__pagenation-next:focus svg path,
        .kuc-readonly-table__pager__pagenation-prev:focus svg path {
          fill: #3498db;
        }
        .pager-disable {
          visibility: hidden;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-readonly-table")) {
  window.customElements.define("kuc-readonly-table", ReadOnlyTable);
}
