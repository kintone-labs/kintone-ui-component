/* eslint-disable kuc-v1/no-kuc-class-prefix */
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

const cellClassName = "kuc-table__table__body__row__cell-data";
const rowClassName = "kuc-table__table__body__row";
const cellActionsClassName = "kuc-table__table__body__row__action";
const btnAddRowClassName = "kuc-table__table__body__row__action-add";
const btnRemoveRowClassName = "kuc-table__table__body__row__action-remove";

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
    @query(`.${btnRemoveRowClassName}`)
    private _firstButtonRemoveRow!: HTMLButtonElement;

    constructor(props?: TableProps) {
      super();
      if (!props) return;

      const validProps = validateProps(props);
      Object.assign(this, validProps);
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
            ${this.data.map((dataRow: object, rowIndex: number) => {
              return this._getTableRowTemplate(dataRow, rowIndex);
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

    private _getTableRowTemplate(dataRow: object, rowIndex: number) {
      return html`
        <tr class="${rowClassName}">
          ${this.columns.map((column) => {
            const dataCell = (dataRow as { [key: string]: any })[column.field];
            const dataRender = column.render
              ? column.render(dataCell, dataRow, rowIndex)
              : dataCell;
            return this._getTableCellTemplate(column, dataRender);
          })}
          ${this._getActionsCellTemplate()}
        </tr>
      `;
    }

    private _getTableCellTemplate(
      column: Column,
      dataRender: HTMLElement | string
    ) {
      return html`
        <td
          class="${cellClassName}"
          @change="${(event: Event) =>
            this._handleChangeCell(event, column.field)}"
        >
          ${dataRender}
        </td>
      `;
    }

    private _getActionsCellWhenRemoveRow(currentRowIndex: number) {
      let actionsCell = null;
      let i = currentRowIndex;
      while (this.data.length > 1) {
        const currentRow = this._table.rows[i] as HTMLTableRowElement;
        if (!currentRow) {
          i--;
        } else {
          actionsCell = currentRow.cells[this.columns.length];
          break;
        }
      }
      return actionsCell;
    }

    private _getCurrentRowIndex(event: PointerEvent) {
      const currentButtonEl = event.target as HTMLButtonElement;
      const currentCellEl =
        currentButtonEl.parentElement as HTMLTableCellElement;
      const currentRow = currentCellEl.parentElement as HTMLTableRowElement;
      return currentRow.rowIndex;
    }

    private _getActionsCellTemplate() {
      return html`
        <td
          class="${cellActionsClassName}"
          ?hidden="${!this.actionButtonsShown}"
        >
          <button
            type="button"
            @click="${(event: PointerEvent) => {
              const rowIndex = this._getCurrentRowIndex(event);
              this._handleAddRow(rowIndex);
            }}"
            class="${btnAddRowClassName}"
            title="Add row"
          ></button>
          ${this.data.length === 1
            ? null
            : html`<button
                type="button"
                @click="${(event: PointerEvent) => {
                  const rowIndex = this._getCurrentRowIndex(event);
                  this._handleRemoveRow(rowIndex);
                }}"
                class="${btnRemoveRowClassName}"
                title="Delete this row"
              ></button>`}
        </td>
      `;
    }

    private _getDefaultDataRow(data: any) {
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

    private _addDataCellToNewRow(currentRowIndex: number, defaultRow: any) {
      const newRow = this._table.insertRow(currentRowIndex + 1);
      newRow.classList.add(rowClassName);
      for (let i = 0; i < this.columns.length; i++) {
        const newCell = newRow.insertCell(i);
        const column = this.columns[i];
        newCell.classList.add(cellClassName);
        newCell.addEventListener("change", (event: Event) => {
          this._handleChangeCell(event, column.field);
        });
        const cellTemplate = column.render
          ? column.render(defaultRow[column.field], column, currentRowIndex)
          : defaultRow[column.field];
        newCell.appendChild(cellTemplate);
      }
      this._addActionsButtonToNewRow(newRow);
    }

    private _handleChangeCell(event: Event, field: string) {
      event.stopPropagation();
      const oldData = this._deepCloneObject(this.data);
      const currentRow = (event.currentTarget as HTMLTableCellElement)
        .parentElement as HTMLTableRowElement;
      const dataIndex = currentRow.rowIndex - 1;
      const dataRow = this.data[dataIndex] as any;
      if (field in dataRow) {
        dataRow[field] = (event as CustomEvent).detail.value;
      }
      const data = {
        type: "change-cell",
        rowIndex: dataIndex,
        data: this.data,
        oldData: oldData,
        field: field,
      };
      this._dispatchChangeEvent(data);
    }

    private _handleAddRow(currentRowIndex: number) {
      const oldData = this._deepCloneObject(this.data);
      const defaultDataRow = this._getDefaultDataRow(this.data[0]);
      this._addDataCellToNewRow(currentRowIndex, defaultDataRow);
      this.data.splice(currentRowIndex, 0, defaultDataRow);
      const data = {
        type: "add-row",
        rowIndex: currentRowIndex,
        data: this.data,
        oldData: oldData,
      };
      this._dispatchChangeEvent(data);
      this._toggleRemoveRowButton();
    }

    private _handleRemoveRow(currentRowIndex: number) {
      const oldData = this._deepCloneObject(this.data);
      this._table.deleteRow(currentRowIndex);
      this.data.splice(currentRowIndex - 2, 1);
      const data = {
        type: "remove-row",
        rowIndex: currentRowIndex,
        data: this.data,
        oldData: oldData,
      };
      this._dispatchChangeEvent(data);
      this._toggleRemoveRowButton();
      this._focusActionsButtonWhenRemoveRow(currentRowIndex);
    }

    private _focusActionsButtonWhenRemoveRow(currentRowIndex: number) {
      const actionsCell = this._getActionsCellWhenRemoveRow(currentRowIndex);
      if (actionsCell) {
        this._focusRemoveRowButton(actionsCell);
        return;
      }
      this._focusFirstAddRowButton();
    }

    private _focusRemoveRowButton(actionsCell: HTMLTableCellElement) {
      const removeRowButton = (
        actionsCell as HTMLTableCellElement
      ).querySelector(`.${btnRemoveRowClassName}`) as HTMLButtonElement;
      removeRowButton.focus();
    }

    private _focusFirstAddRowButton() {
      const firstActionsCell = this._table.rows[1].cells[
        this.columns.length
      ] as HTMLTableCellElement;
      const addRowButton = firstActionsCell.querySelector(
        `.${btnAddRowClassName}`
      ) as HTMLButtonElement;
      addRowButton.focus();
    }

    private _toggleRemoveRowButton() {
      if (this.data.length === 1) {
        this._firstButtonRemoveRow.style.display = "none";
        return;
      }
      this._firstButtonRemoveRow.style.display = "block";
    }

    private _addActionsButtonToNewRow(newRow: HTMLTableRowElement) {
      const newCell = newRow.insertCell(this.columns.length);
      newCell.classList.add(cellActionsClassName);
      const buttonAdd = document.createElement("button");
      buttonAdd.classList.add(btnAddRowClassName);
      buttonAdd.addEventListener("click", () => {
        this._handleAddRow(newRow.rowIndex);
      });
      const buttonRemove = document.createElement("button");
      buttonRemove.classList.add(btnRemoveRowClassName);
      buttonRemove.addEventListener("click", () => {
        this._handleRemoveRow(newRow.rowIndex);
      });
      newCell.appendChild(buttonAdd);
      newCell.appendChild(buttonRemove);
    }

    private _deepCloneObject(obj: any) {
      return JSON.parse(JSON.stringify(obj));
    }

    private _dispatchChangeEvent(_detail: object) {
      const detail: CustomEventDetail = _detail;
      dispatchCustomEvent(this, "change", detail);
    }
  }

  window.customElements.define("kuc-table", KucTable);
  createStyleOnHeader(TABLE_CSS);
  exportTable = KucTable;
})();
const Table = exportTable as any;
export { Table };
