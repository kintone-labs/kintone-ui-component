import { LitElement, html, property } from "lit-element";

type Column = { header?: { text?: string }; visible?: boolean };
type ReadOnlyTableProps = {
  className?: string;
  id?: string;
  label?: string;
  visible?: boolean;
  columns?: Column[];
  data?: string[][];
};

export class ReadOnlyTable extends LitElement {
  @property({ type: String }) label = "";
  @property({ type: Boolean }) visible = true;
  @property({
    type: Array,
    hasChanged(newVal: Column[]) {
      if (!Array.isArray(newVal)) {
        throw new Error("'columns' property is invalid");
      }
      return true;
    }
  })
  columns: Column[] = [];
  @property({
    type: Array,
    hasChanged(newVal: string[][]) {
      if (!Array.isArray(newVal)) {
        throw new Error("'data' property is invalid");
      }
      newVal &&
        newVal.forEach(data => {
          if (!Array.isArray(data)) {
            throw new Error("'data' property is invalid");
          }
        });
      return true;
    }
  })
  data: string[][] = [];

  constructor(props?: ReadOnlyTableProps) {
    super();
    if (!props) {
      return;
    }
    this.className =
      props.className !== undefined ? props.className : this.className;
    this.id = props.id !== undefined ? props.id : this.id;
    this.label = props.label !== undefined ? props.label : this.label;
    this.visible = props.visible !== undefined ? props.visible : this.visible;
    if (!Array.isArray(props.columns) && props.columns !== undefined) {
      throw new Error("'columns' property is invalid");
    }
    this.columns = props.columns !== undefined ? props.columns : this.columns;
    if (!Array.isArray(props.data) && props.data !== undefined) {
      throw new Error("'data' property is invalid");
    }
    props.data &&
      props.data.forEach(data => {
        if (!Array.isArray(data)) {
          throw new Error("'data' property is invalid");
        }
      });
    this.data = props.data !== undefined ? props.data : this.data;
  }

  private _updateVisible() {
    if (!this.visible) {
      this.setAttribute("hidden", "");
    } else {
      this.removeAttribute("hidden");
    }
  }

  createRenderRoot() {
    return this;
  }

  private _getColumnsTemplate(column: Column) {
    return html`
      <th
        class="kuc-readonly-table__table__header__cell"
        ?hidden="${column.visible === false}"
      >
        <span class="kuc-readonly-table__table__header__cell__label">
          ${column.header && column.header.text}</span
        >
      </th>
    `;
  }

  private _getDataTemplate(data: string[], number: number) {
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
    this._updateVisible();
    return html`
      ${this._getStyleTagTemplate()}
      <table class="kuc-readonly-table__table" aria-label="${this.label}">
        <caption class="kuc-readonly-table__label" ?hidden="${!this.label}">
          <span class="kuc-readonly-table__table__label__text"
            >${this.label}</span
          >
        </caption>
        <thead class="kuc-readonly-table__table__header">
          <tr>
            ${this.columns.map(column => this._getColumnsTemplate(column))}
          </tr>
        </thead>
        <tbody class="kuc-readonly-table__table__body">
          ${this.data.map((data: string[], number: number) =>
            this._getDataTemplate(data, number)
          )}
        </tbody>
      </table>
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
          text-align: left;
          margin-bottom: 4px;
        }
        .kuc-readonly-table__label[hideden] {
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
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-readonly-table")) {
  window.customElements.define("kuc-readonly-table", ReadOnlyTable);
}
