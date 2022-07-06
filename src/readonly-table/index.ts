/* eslint-disable kuc-v1/no-using-event-handler-name */
/* eslint-disable kuc-v1/validator-in-should-update */
import { html, svg, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";
import { KucBase } from "../base/kuc-base";
import { dateValueConverter, visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";

type Column = { headerName?: string; visible?: boolean };
type ReadOnlyTableProps = {
  className?: string;
  id?: string;
  label?: string;
  columns?: Column[];
  data?: string[][];
  pagenation?: boolean;
  rowsPerPage?: number;
  visible?: boolean;
};

let currentPage: number = 1;
let isFocusPrev = false;
let isFocusNext = false;
export class ReadOnlyTable extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) label = "";
  @property({ type: Array }) columns: Column[] = [];
  @property({ type: Array }) data: string[][] = [];
  @property({ type: Boolean }) pagenation = true;
  @property({ type: Number }) rowsPerPage = 10;
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter
  })
  visible = true;

  @query(".kuc-readonly-table__pager__pagenation-prev")
  private _prevButtonEl!: HTMLButtonElement;
  @query(".kuc-readonly-table__pager__pagenation-next")
  private _nextButtonEl!: HTMLButtonElement;

  constructor(props?: ReadOnlyTableProps) {
    super();
    if (!props) {
      return;
    }
    if (!Array.isArray(props.columns) && props.columns !== undefined) {
      throw new Error("'columns' property is invalid");
    }
    if (!Array.isArray(props.data) && props.data !== undefined) {
      throw new Error("'data' property is invalid");
    }
    props.data &&
      props.data.forEach(data => {
        if (!Array.isArray(data)) {
          throw new Error("'data' property is invalid");
        }
      });

    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("columns")) this._validateColumns(this.columns);
    if (changedProperties.has("data")) this._validateData(this.data);

    super.update(changedProperties);
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

  private _getDataTemplate(data: string[], number: number, steps: number) {
    // Do not process if the number of data rows per page exceeds steps
    if (this.pagenation && number >= steps) return html``;
    return html`
      <tr
        class="kuc-readonly-table__table__body__row kuc-readonly-table__table__body__row-${number}"
      >
        ${data.map((dataContent: string, dataNumber: number) => {
          let isHidden = false;
          if (
            this.columns[dataNumber] &&
            this.columns[dataNumber].visible === false
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

  render() {
    const currentData = this._createDisplayData(
      this.data,
      currentPage,
      this.rowsPerPage
    );
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-readonly-table__label" ?hidden="${!this.label}">
        <span class="kuc-readonly-table__table__label__text"
          >${this.label}</span
        >
      </div>
      <table class="kuc-readonly-table__table" aria-label="${this.label}">
        <thead class="kuc-readonly-table__table__header">
          <tr>
            ${this.columns.map(column => this._getColumnsTemplate(column))}
          </tr>
        </thead>
        <tbody class="kuc-readonly-table__table__body">
          ${currentData.map((data: string[], number: number) =>
            this._getDataTemplate(data, number, this.rowsPerPage)
          )}
        </tbody>
      </table>
      <div class="kuc-readonly-table__pager" ?hidden="${!this.pagenation}">
        <button
          title="previous"
          class="kuc-readonly-table__pager__pagenation-prev"
          type="button"
          @mouseover="${this._handleFocusButton("isNextButton")}"
          @mouseleave="${this._handleBlurButton("isNextButton")}"
          @click="${this._handleClickPreviusButton}"
        >
          ${this._getPrevButtonSvgTemplate()}
        </button>
        <button
          title="next"
          class="kuc-readonly-table__pager__pagenation-next"
          type="button"
          @mouseover="${this._handleFocusButton}"
          @mouseleave="${this._handleBlurButton}"
          @click="${this._handleClickNextButton}"
        >
          ${this._getNextButtonSvgTemplate()}
        </button>
      </div>
    `;
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
      data.forEach(val => {
        if (!Array.isArray(val)) {
          throw new Error("'data' property is invalid");
        }
      });
  }

  private _handleClickPreviusButton(event: MouseEvent | KeyboardEvent) {
    // Do not process on the first page
    if (currentPage === 1) return;
    currentPage -= 1;
    this.render();
    this.requestUpdate();
  }

  private _handleClickNextButton(event: MouseEvent | KeyboardEvent) {
    // Do not process on the last page
    if (currentPage >= this.data.length / this.rowsPerPage) return;
    currentPage += 1;
    this.render();
    this.requestUpdate();
  }

  private _toggleDisplayPreviusButton() {
    return currentPage > 1;
  }

  private _toggleDisplayNextButton() {
    return currentPage < this.data.length / this.rowsPerPage;
  }

  private _handleFocusButton(isNextButton: string) {
    // This Logic does not work, so needs fix
    isNextButton ? (isFocusNext = true) : (isFocusPrev = true);
  }

  private _handleBlurButton(isNextButton: string) {
    // This Logic does not work, so needs fix
    isNextButton ? (isFocusNext = false) : (isFocusPrev = false);
  }

  // Formatting the data displayed on the current page
  private _createDisplayData(data: string[][], page: number, steps: number) {
    if (!this.pagenation) return data;
    const firstRow = (currentPage - 1) * steps + 1;
    const lastRow = currentPage * steps;
    const displayData = data
      .map((data, row: number) => {
        if (row < firstRow - 1 || row > lastRow - 1) return [];
        return data;
      })
      .filter(data => data.length);
    return displayData;
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
          fill="${isFocusPrev ? "#3498db" : "#888888"}"
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
        fill="${isFocusNext ? "#3498db" : "#888888"}"
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
        }
        .kuc-readonly-table__table__header {
          border-width: 0px 1px;
          border-color: #3498db;
          border-style: solid;
        }
        .kuc-readonly-table__label {
          display: inline-block;
          white-space: nowrap;
          padding: 4px 0px 8px 0px;
        }
        .kuc-readonly-table__label[hidden] {
          display: none;
        }
        .kuc-readonly-table__table__header__cell {
          background-color: #3498db;
          color: #ffffff;
          height: 40px;
          box-sizing: border-box;
          text-align: left;
          min-width: 193px;
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
