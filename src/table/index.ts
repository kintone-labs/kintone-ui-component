import { html, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";

import { ERROR_MESSAGE } from "../base/constant";
import { unsafeHTMLConverter, visiblePropConverter } from "../base/converter";
import {
  createStyleOnHeader,
  dispatchCustomEvent,
  KucBase,
} from "../base/kuc-base";
import {
  isHTMLElement,
  validateArrayType,
  validateFieldRequiredInColumnTable,
  validateFieldUniqueInColumnTable,
  validateProps,
} from "../base/validator";

import { TABLE_CSS } from "./style";
import { TableChangeEventDetail, TableColumn, TableProps } from "./type";

const cellClassName = "kuc-table__table__body__row__cell-data";
const rowClassName = "kuc-table__table__body__row";
const cellActionsClassName = "kuc-table__table__body__row__action";
const btnAddRowClassName = "kuc-table__table__body__row__action-add";
const btnRemoveRowClassName = "kuc-table__table__body__row__action-remove";

const customWidthVariables = (index: number) =>
  `var(--kuc-table-header-${index}-width, var(--kuc-table-header-width, auto))`;

const dAdd =
  "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM12.0355 8.49997V7.49997H8.50008V3.96454H7.50008V7.49997H3.96443V8.49997H7.50008V12.0356H8.50008V8.49997H12.0355Z";
const fillAdd = "#3498db";
const dRemove =
  "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.0355 7.49997V8.49997L3.96443 8.49997V7.49997H12.0355Z";
const fillRemove = "#b5b5b5";

let exportTable;
(() => {
  exportTable = window.customElements.get("kuc-table");
  if (exportTable) {
    return;
  }
  class KucTable<T extends object = object> extends KucBase {
    @property({ type: String }) actionButtonPosition: "left" | "right" =
      "right";
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) label = "";
    @property({ type: Array }) columns: TableColumn[] = [];
    @property({ type: Array }) data: T[] = [];
    @property() actionButton: boolean | { add?: boolean; remove?: boolean } =
      true;
    @property({ type: Boolean }) headerVisible = true;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;

    @query(".kuc-table__table")
    private _table!: HTMLTableElement;

    @query(".kuc-table__table__body")
    private _tBody!: HTMLTableSectionElement;

    @query(".kuc-table__table__header__cell__action--right")
    private _actionHeaderCellRight!: HTMLTableCellElement;

    @query(".kuc-table__table__header__cell__action--left")
    private _actionHeaderCellLeft!: HTMLTableCellElement;

    private _actionButton: { add: boolean; remove: boolean } = {
      add: true,
      remove: true,
    };
    private _actionButtonPosition: "left" | "right" = "right";

    constructor(props?: TableProps<T>) {
      super();
      if (!props) return;

      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    protected shouldUpdate(_changedProperties: PropertyValues): boolean {
      if (_changedProperties.has("data") || _changedProperties.has("columns")) {
        const errorMessage = this._getErrorValidateColumnsAndData();
        if (errorMessage) {
          this.throwErrorAfterUpdateComplete(errorMessage);
          return false;
        }
      }
      return true;
    }

    protected willUpdate(_changedProperties: PropertyValues): void {
      if (_changedProperties.has("actionButtonPosition")) {
        this._actionButtonPosition =
          this.actionButtonPosition === "left" ? "left" : "right";
      }

      if (_changedProperties.has("actionButton")) {
        this._actionButton = this._getActionButtonSettings();
      }

      if (!this._tBody) return;
      this._tBody.innerHTML = "";
    }

    render() {
      return !this.columns || this.columns.length < 1
        ? html`<table class="kuc-table__table">
            <caption
              class="kuc-table__table__label kuc-table__table__label--no-column"
              ?hidden="${!this.label}"
            >
              ${this.label}
            </caption>
          </table>`
        : html`
            <table class="kuc-table__table">
              <caption class="kuc-table__table__label" ?hidden="${!this.label}">
                ${this.label}
              </caption>
              <thead
                class="kuc-table__table__header"
                ?hidden="${!this.headerVisible}"
              >
                ${this._getTableHeaderTemplate()}
              </thead>
              <tbody
                class="kuc-table__table__body${!this.headerVisible
                  ? " kuc-table__table__body--no-header"
                  : ""}"
              ></tbody>
            </table>
          `;
    }

    protected updated(_changedProperties: PropertyValues): void {
      if (this.columns.length === 0) return;

      for (let i = 0; i < this.data.length; i++) {
        this._addRowToTable(i, this.data[i]);
      }
    }

    private _getTableHeaderTemplate() {
      return html`
        <tr>
          ${this._actionButtonPosition === "left"
            ? this._getActionButtonHeaderTemplate()
            : ""}
          ${this.columns.map((column, index) =>
            this._getColumnHeaderTemplate(column, index),
          )}
          ${this._actionButtonPosition === "right"
            ? this._getActionButtonHeaderTemplate()
            : ""}
        </tr>
      `;
    }

    private _getActionButtonHeaderTemplate() {
      if (
        !this.data ||
        this.data.length < 1 ||
        (!this._actionButton.add && !this._actionButton.remove)
      )
        return html``;

      return html`
        <th
          class="kuc-table__table__header__cell kuc-table__table__header__cell__action${this
            ._actionButtonPosition === "left"
            ? "--left"
            : "--right"}"
        ></th>
      `;
    }

    private _getColumnHeaderTemplate(column: TableColumn, index: number) {
      const customWidth = customWidthVariables(index);
      return html`
        <th
          class="kuc-table__table__header__cell"
          ?hidden="${column.visible === false}"
          style="width: ${customWidth}; min-width: ${customWidth}; max-width: ${customWidth}"
        >
          <div class="kuc-table__table__header__cell-title">
            ${column.title && isHTMLElement(column.title)
              ? unsafeHTMLConverter(column.title)
              : column.title}<!--
        --><span
              class="kuc-base-label__required-icon"
              ?hidden="${!column.requiredIcon}"
              >*</span
            >
          </div>
        </th>
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
          actionsCell =
            currentRow.cells[
              this._actionButtonPosition === "left" ? 0 : this.columns.length
            ];
          break;
        }
      }
      return actionsCell;
    }

    private _getDefaultDataRow(data: any) {
      const defaultRowData = {} as any;
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          if (Array.isArray(data[key])) {
            defaultRowData[key] = [];
            continue;
          }
          if (typeof data[key] === "object" && data[key] !== null) {
            defaultRowData[key] = {};
            continue;
          }
          defaultRowData[key] = "";
        }
      }
      return defaultRowData;
    }

    private _addRowToTable(currentRowIndex: number, defaultRow: any) {
      const newRow = this._tBody.insertRow(currentRowIndex);
      newRow.classList.add(rowClassName);

      if (
        (this._actionButton.add || this._actionButton.remove) &&
        this._actionButtonPosition === "left"
      ) {
        this._addActionsCellToNewRow(newRow);
      }
      for (let i = 0; i < this.columns.length; i++) {
        const customWidth = customWidthVariables(i);
        const newCell = newRow.insertCell(
          i +
            ((this._actionButton.add || this._actionButton.remove) &&
            this._actionButtonPosition === "left"
              ? 1
              : 0),
        );
        const column = this.columns[i];
        newCell.classList.add(cellClassName);
        newCell.style.width = customWidth;
        newCell.style.maxWidth = customWidth;
        newCell.style.minWidth = customWidth;
        newCell.addEventListener("change", (event: Event) => {
          this._handleChangeCell(event, column.field);
        });
        newCell.hidden = !(column.visible ?? true);
        const cellTemplate = column.render
          ? column.render(defaultRow[column.field], defaultRow, currentRowIndex)
          : defaultRow[column.field];
        if (cellTemplate && cellTemplate.nodeType) {
          newCell.appendChild(cellTemplate);
        } else {
          newCell.innerText = cellTemplate || "";
        }
      }
      if (
        (!this._actionButton.add && !this._actionButton.remove) ||
        this._actionButtonPosition === "left"
      )
        return;
      this._addActionsCellToNewRow(newRow);
    }

    private _handleChangeCell(event: Event, field: string) {
      event.stopPropagation();
      const oldData = this._deepCloneObject(this.data);
      const currentRow = (event.currentTarget as HTMLTableCellElement)
        .parentElement as HTMLTableRowElement;
      const dataIndex = currentRow.rowIndex - 1;
      const dataRow = this.data[dataIndex] as any;
      if (field in dataRow) {
        let _newValue = (event.target as any).value;
        if ("detail" in event) {
          _newValue = (event as CustomEvent).detail.value;
        }
        dataRow[field] = _newValue;
      }
      const data: TableChangeEventDetail = {
        type: "change-cell",
        rowIndex: dataIndex,
        data: this._deepCloneObject(this.data),
        oldData: oldData,
        field: field,
      };
      this._dispatchChangeEvent(data);
    }

    private _handleAddRow(currentRowIndex: number) {
      const oldData = this._deepCloneObject(this.data);
      const defaultDataRow = this._getDefaultDataRow(this.data[0]);
      this._addRowToTable(currentRowIndex, defaultDataRow);
      this.data.splice(currentRowIndex, 0, defaultDataRow);
      const data: TableChangeEventDetail = {
        type: "add-row",
        rowIndex: currentRowIndex,
        data: this._deepCloneObject(this.data),
        oldData: oldData,
      };
      this._dispatchChangeEvent(data);
      this._toggleRemoveRowButton();
    }

    private _handleRemoveRow(currentRowIndex: number) {
      if (this.data.length === 1) return;

      const dataIndexRemoved = currentRowIndex - 1;
      const oldData = this._deepCloneObject(this.data);
      this._table.deleteRow(currentRowIndex);
      this.data.splice(dataIndexRemoved, 1);
      const data: TableChangeEventDetail = {
        type: "remove-row",
        rowIndex: dataIndexRemoved,
        data: this._deepCloneObject(this.data),
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
        this._actionButtonPosition === "left" ? 0 : this.columns.length
      ] as HTMLTableCellElement;
      const addRowButton = firstActionsCell.querySelector(
        `.${btnAddRowClassName}`,
      ) as HTMLButtonElement;
      addRowButton?.focus();
    }

    private _toggleRemoveRowButton() {
      const firstActionsCell =
        this._actionButtonPosition === "left"
          ? (this._tBody.rows[0].firstChild as HTMLTableCellElement)
          : (this._tBody.rows[0].lastChild as HTMLTableCellElement);
      const firstRemoveRow = firstActionsCell.lastChild as HTMLButtonElement;
      if (this.data.length === 1) {
        firstRemoveRow.style.display = "none";
        if (!this._actionButton.add) {
          firstActionsCell.style.display = "none";
          this._hideActionHeaderCell();
        }
        return;
      }
      if (this.data.length === 2) {
        const secondActionsCell =
          this._actionButtonPosition === "left"
            ? (this._tBody.rows[1].firstChild as HTMLTableCellElement)
            : (this._tBody.rows[1].lastChild as HTMLTableCellElement);
        const secondRemoveRow =
          secondActionsCell.lastChild as HTMLButtonElement;
        firstRemoveRow.style.display = secondRemoveRow.style.display =
          "inline-block";
        firstActionsCell.style.removeProperty("display");
      }
    }

    private _getSvgDOM(fillPath: string, dPath: string) {
      const iconSvg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg",
      );
      iconSvg.setAttribute("fill", "none");
      iconSvg.setAttribute("width", "18");
      iconSvg.setAttribute("height", "18");
      iconSvg.setAttribute("viewBox", "0 0 16 16");
      iconSvg.setAttribute("aria-hidden", "true");

      const iconPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );
      iconPath.setAttribute("d", dPath);
      iconPath.setAttribute("fill-rule", "evenodd");
      iconPath.setAttribute("clip-rule", "evenodd");
      iconPath.setAttribute("fill", fillPath);

      iconSvg.appendChild(iconPath);
      return iconSvg;
    }

    private _addActionsCellToNewRow(newRow: HTMLTableRowElement) {
      if (!this._actionButton.add && !this._actionButton.remove) {
        return;
      }

      const newCell = newRow.insertCell(
        this._actionButtonPosition === "left" ? 0 : this.columns.length,
      );
      newCell.classList.add(cellActionsClassName);
      if (this._actionButtonPosition === "left") {
        newCell.classList.add("kuc-table__table__body__row__action--left");
      } else {
        newCell.classList.add("kuc-table__table__body__row__action--right");
      }

      if (this._actionButton.add) {
        const btnAddDOM = this._getActionButtonDOM("add", newRow);
        newCell.appendChild(btnAddDOM);
      }

      if (this._actionButton.remove) {
        const btnRemoveDOM = this._getActionButtonDOM("remove", newRow);
        newCell.appendChild(btnRemoveDOM);

        if (this.data.length === 1) {
          btnRemoveDOM.style.display = "none";
        }
      }

      if (!this._actionButton.add && this.data.length === 1) {
        this._hideActionHeaderCell();
        newCell.style.display = "none";
      } else {
        this._showActionHeaderCell();
        newCell.style.removeProperty("display");
      }
    }

    private _getActionButtonDOM(type: string, newRow: HTMLTableRowElement) {
      const titleDeleteRow = "Delete this row";
      const titleAddRow = "Add row";
      let className = btnRemoveRowClassName;
      let title = titleDeleteRow;
      const isAdd = type === "add";
      if (isAdd) {
        className = btnAddRowClassName;
        title = titleAddRow;
      }
      const fillPath = isAdd ? fillAdd : fillRemove;
      const dPath = isAdd ? dAdd : dRemove;
      const svgEl = this._getSvgDOM(fillPath, dPath);

      const buttonAction = document.createElement("button");
      buttonAction.classList.add(className);
      buttonAction.setAttribute("title", title);
      buttonAction.type = "button";
      buttonAction.appendChild(svgEl);
      buttonAction.addEventListener("click", () => {
        const errorMessage = this._getErrorValidateColumnsAndData();
        if (errorMessage) {
          this.throwErrorAfterUpdateComplete(errorMessage);
          return;
        }
        if (isAdd) {
          this._handleAddRow(newRow.rowIndex);
          return;
        }
        this._handleRemoveRow(newRow.rowIndex);
      });

      return buttonAction;
    }

    private _getActionButtonSettings() {
      const actionButton: { add: boolean; remove: boolean } = {
        add: true,
        remove: true,
      };

      if (!this.actionButton) {
        actionButton.add = actionButton.remove = false;
        return actionButton;
      }

      if (typeof this.actionButton === "object") {
        actionButton.add = Object.prototype.hasOwnProperty.call(
          this.actionButton,
          "add",
        )
          ? !!this.actionButton.add
          : true;
        actionButton.remove = Object.prototype.hasOwnProperty.call(
          this.actionButton,
          "remove",
        )
          ? !!this.actionButton.remove
          : true;
      }
      return actionButton;
    }

    private _getErrorValidateColumnsAndData() {
      const errorColumns = this._getErrorMessageWhenValidateColumns();
      if (errorColumns) return errorColumns;

      if (!validateArrayType(this.data)) return ERROR_MESSAGE.DATA.IS_NOT_ARRAY;

      return "";
    }

    private _getErrorMessageWhenValidateColumns() {
      if (!validateArrayType(this.columns)) {
        return ERROR_MESSAGE.COLUMNS.IS_NOT_ARRAY;
      }
      if (!validateFieldRequiredInColumnTable(this.columns)) {
        return ERROR_MESSAGE.COLUMNS.FIELD_REQUIRED;
      }
      if (validateFieldUniqueInColumnTable(this.columns)) {
        return ERROR_MESSAGE.COLUMNS.FIELD_UNIQUE;
      }
      return "";
    }

    private _deepCloneObject(obj: any) {
      return JSON.parse(JSON.stringify(obj));
    }

    private _dispatchChangeEvent(_detail: TableChangeEventDetail) {
      const detail: TableChangeEventDetail = _detail;
      dispatchCustomEvent(this, "change", detail);
    }

    private _hideActionHeaderCell() {
      this._actionHeaderCellRight &&
        (this._actionHeaderCellRight.hidden = true);
      this._actionHeaderCellLeft && (this._actionHeaderCellLeft.hidden = true);
    }

    private _showActionHeaderCell() {
      this._actionHeaderCellRight &&
        (this._actionHeaderCellRight.hidden = false);
      this._actionHeaderCellLeft && (this._actionHeaderCellLeft.hidden = false);
    }
  }

  window.customElements.define("kuc-table", KucTable);
  createStyleOnHeader(TABLE_CSS);
  exportTable = KucTable;
})();
const Table = exportTable as any;
export { Table };
