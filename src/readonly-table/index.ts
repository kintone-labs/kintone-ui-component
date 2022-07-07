/* eslint-disable kuc-v1/validator-in-should-update */
import { html, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { KucBase } from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";

type Column = { header?: { text?: string }; visible?: boolean };
type ReadOnlyTableProps = {
  className?: string;
  id?: string;
  label?: string;
  visible?: boolean;
  columns?: Column[];
  data?: string[][];
};

export class ReadOnlyTable extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) label = "";
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter,
  })
  visible = true;
  @property({ type: Array }) columns: Column[] = [];
  @property({ type: Array }) data: string[][] = [];

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
      props.data.forEach((data) => {
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
            ${this.columns.map((column) => this._getColumnsTemplate(column))}
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
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-readonly-table")) {
  window.customElements.define("kuc-readonly-table", ReadOnlyTable);
}
