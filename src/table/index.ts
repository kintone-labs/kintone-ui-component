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
import {
  validateProps,
  throwErrorAfterUpdateComplete,
  validateColumnTable,
  validateDataTable,
} from "../base/validator";
import { ERROR_MESSAGE } from "../base/constant";
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

    protected shouldUpdate(_changedProperties: PropertyValues): boolean {
      if (
        _changedProperties.has("columns") &&
        !validateColumnTable(this.columns)
      ) {
        const errorMessage = ERROR_MESSAGE.COLUMNS.IS_NOT_ARRAY;
        throwErrorAfterUpdateComplete(this, errorMessage);
        return false;
      }
      if (_changedProperties.has("data") && !validateDataTable(this.data)) {
        const errorMessage = ERROR_MESSAGE.DATA_TABLE.IS_NOT_ARRAY;
        throwErrorAfterUpdateComplete(this, errorMessage);
        return false;
      }
      return true;
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

    private _getTableHeaderTemplate() {
      return html`
        <tr>
          ${this.columns.map((column) => this._getColumnHeaderTemplate(column))}
        </tr>
      `;
    }

    private _getColumnHeaderTemplate(column: Column) {
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

    private _getTableRowTemplate(dataRow: any, index: number) {
      return html`
        <tr class="kuc-table__table__body__row">
          ${this.columns.map((column) => {
            const dataCell = dataRow[column.dataIndex];
            const cellTemplate = column.render
              ? column.render(dataCell, dataRow)
              : dataCell;
            return this._getTableCellTemplate(column, index, cellTemplate);
          })}
          ${this._getActionsCellTemplate(index)}
        </tr>
      `;
    }

    private _getTableCellTemplate(
      column: Column,
      index: number,
      cellTemplate: HTMLElement
    ) {
      const handleChangeCell = (event: CustomEvent, dataIndex: string) => {
        event.stopPropagation();
        event.stopImmediatePropagation();
        const _cloneData = this._deepCloneObject(this.data);
        (_cloneData[index] as any)[dataIndex] = event.detail.value;
        this.data = this._deepCloneObject(_cloneData);
        const data = {
          allData: this.data,
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
            handleChangeCell(event, column.dataIndex)}"
        >
          ${cellTemplate}
        </td>
      `;
    }

    private _getActionsCellTemplate(index: number) {
      const _tempData = this._deepCloneObject(this.data);
      const handleAddRow = () => {
        const defaultRow = this._getDefaultRowData(this.data[0]);
        _tempData.splice(index + 1, 0, defaultRow);
        this.data = this._deepCloneObject(_tempData);
        const data = {
          allData: this._deepCloneObject(this.data),
          rowIndex: index + 1,
        };
        this._dispatchChangeEvent("addRow", data);
      };
      const handleRemoveRow = () => {
        _tempData.splice(index, 1);
        this.data = this._deepCloneObject(_tempData);
        const data = {
          allData: this._deepCloneObject(this.data),
          rowIndex: index,
        };
        this._dispatchChangeEvent("removeRow", data);
      };

      return html`
        <td class="kuc-table__table__body__row__action">
          <button
            type="button"
            @click="${handleAddRow}"
            class="kuc-table__table__body__row__action-add"
            title="Add row"
          ></button>
          ${this.data.length === 1
            ? null
            : html`<button
                type="button"
                @click="${handleRemoveRow}"
                class="kuc-table__table__body__row__action-remove"
                title="Delete this row"
              ></button>`}
        </td>
      `;
    }

    private _deepCloneObject(obj: any) {
      return JSON.parse(JSON.stringify(obj));
    }

    private _dispatchChangeEvent(type: string, data: object) {
      const detail: CustomEventDetail = {
        data: data,
        type: type,
      };
      dispatchCustomEvent(this, "change", detail);
    }

    private _getDefaultRowData(data: any) {
      const defaultRowData = {} as any;
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          if (Array.isArray(data[key])) {
            defaultRowData[key] = [];
            continue;
          }
          defaultRowData[key] = "";
        }
      }
      return defaultRowData;
    }
  }

  window.customElements.define("kuc-table", KucTable);
  createStyleOnHeader(TABLE_CSS);
  exportTable = KucTable;
})();
const Table = exportTable as any;
export { Table };
