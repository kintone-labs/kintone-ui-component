/* eslint-disable kuc-v1/no-using-event-handler-name */
/* eslint-disable kuc-v1/validator-in-should-update */
import { html, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import {
  KucBase,
  dispatchCustomEvent,
  CustomEventDetail,
  createStyleOnHeader,
} from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";
import { TableProps, Column } from "./type";
import { TABLE_CSS } from "./style";

let exportTable;
(() => {
  exportTable = window.customElements.get("kuc-table");
  if (exportTable) {
    return;
  }
  class KucTable extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
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
      if (!props) return;

      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    update(changedProperties: PropertyValues) {
      if (changedProperties.has("columns")) this._validateColumns(this.columns);
      if (changedProperties.has("data")) this._validateData(this.data);

      super.update(changedProperties);
    }

    private _getDefaultRowData(data: any) {
      const defaultRowData = {} as any;
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          if (typeof data[key] === "string") {
            defaultRowData[key] = "";
            continue;
          }
          if (Array.isArray(data[key])) {
            defaultRowData[key] = [];
            continue;
          }
          defaultRowData[key] = "";
        }
      }
      return defaultRowData;
    }

    private _deepCloneObject(data: any) {
      return JSON.parse(JSON.stringify(data)) as object[];
    }

    private _getTableRowTemplate(dataRow: any, index: number) {
      return html`
        <tr class="kuc-table__table__body__row">
          ${this.columns.map((col) => {
            const dataCell = dataRow[col.dataIndex];
            const templateCell = col.render
              ? col.render(dataCell, dataRow)
              : dataCell;
            return this._getTableCellTemplate(col, index, templateCell);
          })}
          ${this._getActionsTemplate(index)}
        </tr>
      `;
    }

    private _getTableCellTemplate(
      col: Column,
      index: number,
      templateCell: HTMLElement
    ) {
      const handleChangeCell = (event: CustomEvent, dataIndex: string) => {
        event.stopPropagation();
        event.stopImmediatePropagation();
        const _cloneData = this._deepCloneObject(this.data);
        (_cloneData[index] as any)[dataIndex] = event.detail.value;
        this.data = this._deepCloneObject(_cloneData);
        const data = {
          allData: this._deepCloneObject(_cloneData),
          rowData: this._deepCloneObject(this.data[index]),
          rowIndex: index,
          columnsName: dataIndex,
        };
        this._dispatchChangeEvent("changeCell", data);
      };
      return html`
        <td
          class="kuc-table__table__body__row__cell-data"
          @change="${(event: CustomEvent) =>
            handleChangeCell(event, col.dataIndex)}"
        >
          ${templateCell}
        </td>
      `;
    }

    private _dispatchChangeEvent(type: string, data: object) {
      const detail: CustomEventDetail = {
        data: data,
        type: type,
      };
      dispatchCustomEvent(this, "change", detail);
    }

    private _getActionsTemplate(index: number) {
      const _temp = JSON.parse(JSON.stringify(this.data)) as object[];
      const handleClickAddRow = () => {
        const defaultRow = this._getDefaultRowData(this.data[0]);
        _temp.splice(index + 1, 0, defaultRow);
        this.data = [..._temp];
        const data = {
          allData: this._deepCloneObject(this.data),
          rowIndex: index + 1,
        };
        this._dispatchChangeEvent("addRow", data);
      };
      const handleClickRemoveRow = () => {
        _temp.splice(index, 1);
        this.data = [..._temp];
        const data = {
          allData: this._deepCloneObject(this.data),
          rowIndex: index + 1,
        };
        this._dispatchChangeEvent("removeRow", data);
      };

      return html`
        <td class="kuc-table__table__body__row__action">
          <button
            type="button"
            @click="${handleClickAddRow}"
            class="kuc-table__table__body__row__action-add"
            title="Add row"
          ></button>
          ${this.data.length === 1
            ? null
            : html`<button
                type="button"
                @click="${handleClickRemoveRow}"
                class="kuc-table__table__body__row__action-remove"
                title="Delete this row"
              ></button>`}
        </td>
      `;
    }

    private _getColumnsTemplate(column: Column) {
      return html`
        <th
          class="kuc-table__table__header__cell"
          ?hidden="${column.visible === false}"
        >
          ${column.headerName || ""}
          <span
            class="kuc-base-label__required-icon"
            ?hidden="${!column.requiredIcon}"
          >
          *
          </span
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
      return html`
        <table class="kuc-table__table">
          <caption>
            ${this.label}
          </caption>
          <thead class="kuc-table__table__header">
            ${this._getTableHeaderTemplate()}
          </thead>
          <tbody class="kuc-table__table__body">
            ${this.data.map((dataRow: object, index: number) => {
              return this._getTableRowTemplate(dataRow, index);
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
        throw new Error("'data' property is invalid");
      }
    }
  }

  window.customElements.define("kuc-table", KucTable);
  createStyleOnHeader(TABLE_CSS);
  exportTable = KucTable;
})();
const Table = exportTable as any;
export { Table };
