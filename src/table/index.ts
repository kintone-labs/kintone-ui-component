/* eslint-disable kuc-v1/no-using-event-handler-name */
/* eslint-disable kuc-v1/validator-in-should-update */
import { html, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { KucBase } from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";

type Column = {
  headerName?: string;
  dataIndex: string;
  visible?: boolean;
  render: Render;
};
type Render = (dataCell: any, dataRow: object) => HTMLElement;
type TableProps = {
  className?: string;
  id?: string;
  label?: string;
  data?: string[][];
  columns?: Column[];
  visible?: boolean;
};

export class Table extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) label = "";
  @property({ type: Array }) columns: Column[] = [];
  @property({ type: Array }) data: object[] = [];
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter,
  })
  visible = true;

  constructor(props?: TableProps) {
    super();
    if (!props) {
      return;
    }
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("columns")) this._validateColumns(this.columns);
    if (changedProperties.has("data")) this._validateData(this.data);

    super.update(changedProperties);
  }

  private _getBodyTemplate(data: any, index: number) {
    const handleChange = (e: CustomEvent) => {
      e.detail.rowIndex = index;
      e.detail.data = this.data;
    };

    const handleAddRow = (e: Event) => {
      console.log('asddd')
      const newIndex = index + 1;
      this.data.splice(newIndex, 0, {
        key: "2",
        name: "neww",
        age: 20,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
      });
      console.log(this.data,'data')
    };
    return html`
      <tr class="kuc-table__table__body__row" @change="${handleChange}">
        ${this.columns.map((col) => {
          const rendered = data[col.dataIndex];
          const isCustomRender = col.render && typeof col.render === "function";
          const dataRender = isCustomRender
            ? col.render(rendered, data)
            : rendered;
          return html` <td class="kuc-table__table__body__row__cell-data">
            ${dataRender}
          </td>`;
        })}
        <td class="kuc-table__table__body__row__action">
          <button
            type="button"
            @click="${handleAddRow}"
            class="kuc-table__table__body__row__action-add"
            title="Add row"
          ></button
          ><button
            type="button"
            class="kuc-table__table__body__row__action-remove"
            title="Delete this row"
          ></button>
        </td>
      </tr>
    `;
  }

  private _getColumnsTemplate(column: Column) {
    return html`
      <th
        class="kuc-table__table__header__cell"
        ?hidden="${column.visible === false}"
      >
        ${column.headerName}
      </th>
    `;
  }

  private _getTableHeaderTemplate() {
    return html`
      <tr>
        ${this.columns.map((column) => this._getColumnsTemplate(column))}
      </tr>
    `;
  }

  render() {
    const currentData = this._createDisplayData(this.data);
    return html`
      ${this._getStyleTagTemplate()}
      <table class="kuc-table__table" aria-label="${this.label}">
        <caption>
          ${this.label}
        </caption>
        <thead class="kuc-table__table__header">
          ${this._getTableHeaderTemplate()}
        </thead>
        <tbody class="kuc-table__table__body">
          ${currentData.map((data: any, index: number) => {
            return this._getBodyTemplate(data, index);
          })}
        </tbody>
      </table>
    `;
  }

  private _validateColumns(columns: Column[]) {
    if (!Array.isArray(columns)) {
      throw new Error("'columns' property is invalid");
    }
  }

  private _validateData(data: object[]) {
    if (!Array.isArray(data)) {
      console.log(data, "data");
      throw new Error("'data' property is invalid123");
    }
  }

  // Formatting the data displayed on the current page
  private _createDisplayData(data: object[]) {
    const displayData = data;
    return displayData;
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
        .kuc-table__table {
          border-collapse: collapse;
        }
        .kuc-table__table__header {
          border-width: 0px 1px;
          border-color: #3498db;
          border-style: solid;
          border-right: 0;
        }
        .kuc-readonly-table__label {
          display: inline-block;
          white-space: nowrap;
          padding: 4px 0px 8px 0px;
        }
        .kuc-readonly-table__label[hidden] {
          display: none;
        }
        .kuc-table__table__header__cell {
          background-color: #3498db;
          color: #ffffff;
          height: 40px;
          box-sizing: border-box;
          text-align: left;
          min-width: 193px;
        }
        .kuc-table__table__header__cell[hidden] {
          display: none;
        }
        .kuc-table__table__header__cell__label {
          padding: 4px 8px;
          font-weight: 400;
          font-size: 12px;
        }
        .kuc-table__table__body__row__cell-data {
          border-color: #e3e7e8;
          border-style: solid;
          border-width: 1px;
          padding: 4px 8px;
        }
        .kuc-table__table__body__row__cell-data[hidden] {
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
        .kuc-table__table__body__row__action-add {
          margin-left: 12px;
          background: url(https://static.cybozu.com/contents/k/image/argo/app/subtable/add-active.png)
            no-repeat center center;
          border: 1px solid transparent;
        }
        .kuc-table__table__body__row__action-remove {
          margin-left: 4px;
          background: url(https://static.cybozu.com/contents/k/image/argo/app/subtable/delete.png)
            no-repeat center center;
          border: 1px solid transparent;
        }
        .kuc-table__table__body__row__action-add,
        .kuc-table__table__body__row__action-remove {
          display: inline-block;
          width: 24px;
          height: 24px;
          cursor: pointer;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-table")) {
  window.customElements.define("kuc-table", Table);
}
