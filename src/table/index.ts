/* eslint-disable kuc-v1/no-using-event-handler-name */
/* eslint-disable kuc-v1/validator-in-should-update */
import { html, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";
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
  validateColumnTableArray,
  validateFieldRequiedInColumnTable,
  validateFieldUniqueInColumnTable,
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
    @property({ type: Boolean }) actionButtonsShown = true;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;

    @query(".kuc-table__table")
    private _table!: HTMLTableElement;

    constructor(props?: TableProps) {
      super();
      if (!props) return;

      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    private _getErrorMessageWhenValidateColumns() {
      let errorMessage = "";
      if (!validateColumnTableArray(this.columns)) {
        errorMessage = ERROR_MESSAGE.COLUMNS.IS_NOT_ARRAY;
      }
      if (!validateFieldRequiedInColumnTable(this.columns)) {
        errorMessage = ERROR_MESSAGE.COLUMNS.FIELD_REQUIRED;
      }
      if (validateFieldUniqueInColumnTable(this.columns)) {
        errorMessage = ERROR_MESSAGE.COLUMNS.FIELD_UNIQUE;
      }
      return errorMessage;
    }

    protected shouldUpdate(_changedProperties: PropertyValues): boolean {
      if (_changedProperties.has("columns")) {
        const errorMessage = this._getErrorMessageWhenValidateColumns();
        if (errorMessage) {
          throwErrorAfterUpdateComplete(this, errorMessage);
          return false;
        }
      }
      if (_changedProperties.has("data") && !validateDataTable(this.data)) {
        const errorMessage = ERROR_MESSAGE.DATA_TABLE.IS_ARRAY_OBJECT;
        throwErrorAfterUpdateComplete(this, errorMessage);
        return false;
      }
      return true;
    }

    render() {
      console.log(this.data.length, " length");
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
            const dataCell = dataRow[column.field];
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
      const handleChangeCell = (event: CustomEvent, field: string) => {
        event.stopPropagation();
        event.stopImmediatePropagation();
        const _cloneData = this._deepCloneObject(this.data);
        const oldData = this._deepCloneObject(this.data);
        if (field in _cloneData[index]) {
          _cloneData[index][field] = event.detail.value;
        }
        this.data = this._deepCloneObject(_cloneData);
        const data = {
          type: "change-cell",
          rowIndex: index,
          data: this._deepCloneObject(_cloneData),
          oldData: oldData,
          field: field,
        };
        this._dispatchChangeEvent(data);
      };
      return html`
        <td
          class="kuc-table__table__body__row__cell-data"
          @change="${(event: CustomEvent) =>
            handleChangeCell(event, column.field)}"
        >
          ${cellTemplate}
        </td>
      `;
    }

    private _handleAddRow(currentRow: HTMLTableRowElement) {
      const defaultRow = this._getDefaultRowData(this.data[0]);
      // const currentCell = (e.target as HTMLElement)
      //   .parentElement as HTMLTableCellElement;
      // const currentRow = currentCell.parentElement as HTMLTableRowElement;
      const currentRowIndex = currentRow.rowIndex;
      const newRow = this._table.insertRow(currentRowIndex + 1);
      newRow.classList.add("kuc-table__table__body__row");
      for (let i = 0; i < this.columns.length; i++) {
        const newCell = newRow.insertCell(i);
        newCell.classList.add("kuc-table__table__body__row__cell-data");
        const column = this.columns[i];
        const cellTemplate = column.render
          ? column.render(defaultRow[column.field], column)
          : defaultRow[column.field];
        newCell.appendChild(cellTemplate);
      }
      this._addActionsButtonToNewRow(newRow, currentRowIndex);

      this.data.splice(currentRowIndex + 1, 0, defaultRow);
    }

    private _addActionsButtonToNewRow(
      newRow: HTMLTableRowElement,
      currentRowIndex: number
    ) {
      const newCell = newRow.insertCell(this.columns.length);
      newCell.classList.add("kuc-table__table__body__row__action");
      const buttonAdd = document.createElement("button");
      buttonAdd.classList.add("kuc-table__table__body__row__action-add");
      buttonAdd.addEventListener("click", () => {
        this._handleAddRow(newRow);
      });
      const buttonRemove = document.createElement("button");
      buttonRemove.classList.add("kuc-table__table__body__row__action-remove");
      buttonRemove.addEventListener("click", () => {
        this._handleRemoveRow(newRow);
      });
      newCell.appendChild(buttonAdd);
      newCell.appendChild(buttonRemove);
    }

    private _handleRemoveRow(currentRow: HTMLTableRowElement) {
      if (!this._table) return;

      console.log(currentRow.rowIndex, "currentRow");

      this._table.deleteRow(currentRow.rowIndex);
      this.data.splice(currentRow.rowIndex - 1, 1);
      const data = {
        type: "remove-row",
        rowIndex: currentRow.rowIndex,
        data: this._deepCloneObject(this.data),
        oldData: this.data,
      };
      this._dispatchChangeEvent(data);
    }

    private _getActionsCellTemplate(currentIndex: number) {
      return html`
        <td
          class="kuc-table__table__body__row__action"
          ?hidden="${!this.actionButtonsShown}"
        >
          <button
            type="button"
            @click="${(e: PointerEvent) => {
              const currentCell = (e.target as HTMLButtonElement).parentElement;
              const currentRow =
                currentCell?.parentElement as HTMLTableRowElement;
              this._handleAddRow(currentRow);
            }}"
            class="kuc-table__table__body__row__action-add"
            title="Add row"
          ></button>
          ${this.data.length === 1
            ? null
            : html`<button
                type="button"
                @click="${(e: PointerEvent) => {
                  const currentCell = (e.target as HTMLButtonElement)
                    .parentElement;
                  const currentRow =
                    currentCell?.parentElement as HTMLTableRowElement;
                  this._handleRemoveRow(currentRow);
                }}"
                class="kuc-table__table__body__row__action-remove"
                title="Delete this row"
              ></button>`}
        </td>
      `;
    }

    private _deepCloneObject(obj: any) {
      return JSON.parse(JSON.stringify(obj));
    }

    private _dispatchChangeEvent(_detail: object) {
      const detail: CustomEventDetail = _detail;
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
