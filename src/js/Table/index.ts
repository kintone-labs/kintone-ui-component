import '../polyfill';
import Control, {ControlProps} from '../Control';
import TableCell from './TableCell';
import Message from '../../constant/Message';
import IconButton from '../IconButton';
import {ActionFlag, RowEventProps} from '../../react/Table';
import '../../css/Table.css';
const validEventNames = ['rowAdd', 'rowRemove', 'cellChange'];

type TableColumnJS = {
  header: string;
  cell: () => TableCell;
}

type DispatchParams = {
  type: string;
  data?: Array<Record<string, any>>;
  rowIndex: number;
  fieldName?: string;
}

type HandlerFunction = (
  eventOptions: DispatchParams
) => void | Record<string, any>

type TableProps = ControlProps & {
  data?: Array<Record<string, any>>;
  defaultRowData?: Record<string, any>;
  columns?: Array<TableColumnJS | ActionFlag>;
  actionButtonsShown?: boolean;
  onRowAdd?: HandlerFunction;
  onRowRemove?: HandlerFunction;
  onCellChange?: HandlerFunction;
}

export default class Table extends Control<TableProps> {
  private _tableHeaderContainer: HTMLElement
  private _tableBodyContainer: HTMLElement

  constructor(params?: TableProps) {
    super();
    this._props = {
      ...this._props,
      ...{
        data: [],
        defaultRowData: {},
        columns: [],
        actionButtonsShown: true
      }
    };
    if (typeof params === 'object' && params !== null && typeof params.isDisabled !== 'boolean') {
      delete params.isDisabled;
    }
    if (typeof params === 'object' && params !== null && typeof params.isVisible !== 'boolean') {
      delete params.isVisible;
    }
    if (params) {
      this._props = {...this._props, ...params};
    }
    this._validateRequired();
    if (this._props.actionButtonsShown === true) {
      this._props.columns && this._props.columns.push({actions: this._props.actionButtonsShown});
    }
  }

  private _addRow({data, rowIndex}: RowEventProps) {
    if (!data) {
      return [];
    }
    const insertAt = rowIndex + 1;
    const newRowData = JSON.parse(JSON.stringify(this._props.defaultRowData));
    const newData = [...data.slice(0, insertAt), newRowData, ...data.slice(insertAt)];
    this._props.data = newData;

    return newData;
  }

  private _removeRow({data, rowIndex}: RowEventProps) {
    const currentData = data && data.filter((_, index) => index !== rowIndex);
    this._props.data = currentData;
    this._renderTableRows(true);
    this._renderCells();
    return currentData;
  }

  private _triggerChange(args: DispatchParams) {
    const {type} = args;
    delete args.type;
    if (type === 'REMOVE_ROW' && this._props.onRowRemove) {
      this._props.onRowRemove(args);
    }
    if (type === 'CELL_CHANGE' && this._props.onCellChange) {
      this._props.onCellChange(args);
    }
  }

  private _renderCells() {
    const table = this._props;
    const rowsEl = [].slice.call(this.element.querySelectorAll('.kuc-table-tbody > .kuc-table-tr'));
    const columns = [].slice.call(this._props.columns as TableColumnJS[]);
    rowsEl.forEach((rowEl: HTMLElement, rowIndex: number) => {
      const rowData = this._props.data && JSON.parse(JSON.stringify(this._props.data[rowIndex]));
      const updateRowData = this.updateRowData.bind(this, rowIndex);
      columns.forEach(({cell}: TableColumnJS, columnIndex: number) => {
        const cellTemplate = cell;
        if (cellTemplate) {
          const cellElement = rowEl.childNodes[columnIndex];
          let element: HTMLElement | null = null;
          let cellInstance: TableCell;
          if (cellElement.childNodes.length === 0) {
            cellInstance = cellTemplate();
            element = cellInstance.init({
              table,
              rowData,
              rowIndex,
              columnIndex,
              updateRowData
            });
            if (element) {
              cellElement.appendChild(element);
            }
            (cellElement as any).__tableCellInstance = cellInstance;
          }
          cellInstance = (cellElement as any).__tableCellInstance;
          cellInstance.update({table, rowData, rowIndex, columnIndex, element});
        }
      });
    });
  }
  private _isObject(item: Record<string, any>) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }

  private _mergeDeep(target: Record<string, any>, source: Record<string, any>) {
    const output = Object.assign({}, target);
    if (this._isObject(target) && this._isObject(source)) {
      Object.keys(source).forEach(key => {
        if (this._isObject(source[key])) {
          if (!(key in target)) Object.assign(output, {[key]: source[key]});
          else output[key] = this._mergeDeep(target[key], source[key]);
        } else {
          Object.assign(output, {[key]: source[key]});
        }
      });
    }
    return output;
  }

  private _validateRequired() {
    if (
      !Array.isArray(this._props.data) ||
      !Array.isArray(this._props.columns) ||
      typeof this._props.defaultRowData !== 'object'
    ) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
  }

  private _renderTableContainer() {
    const tableContainer = document.createElement('div');
    tableContainer.className = 'kuc-table';
    tableContainer.style.display = this._props.isVisible ? 'table' : 'none';
    this.element = tableContainer;
  }

  private _renderTableHeadersContainer() {
    const tableHeader = document.createElement('div');
    tableHeader.className = 'kuc-table-thead';
    const tableTr = document.createElement('div');
    tableTr.className = 'kuc-table-tr';
    this._tableHeaderContainer = tableTr;
    tableHeader.appendChild(tableTr);
    this.element.appendChild(tableHeader);
  }

  private _renderTableHeaders() {
    this._props.columns && this._props.columns.forEach((data) => {
      const tableHeaderText = (data as TableColumnJS).header;
      if (tableHeaderText) {
        const headerTr = document.createElement('div');
        const span = document.createElement('span');
        span.className = 'kuc-header-label';
        span.textContent = tableHeaderText;
        headerTr.className = 'kuc-table-th';
        headerTr.appendChild(span);
        this._tableHeaderContainer.appendChild(headerTr);
      }
    });
  }

  private _renderTableBodyContainer() {
    const tableBody = document.createElement('div');
    tableBody.className = 'kuc-table-tbody';
    this.element.appendChild(tableBody);
    this._tableBodyContainer = tableBody;
  }

  private _renderTableCellActions(rowIndex: number) {
    const tableCellDiv = document.createElement('div');
    tableCellDiv.className = 'kuc-table-td action-group';
    const span1 = document.createElement('span');
    tableCellDiv.appendChild(span1);
    const iconButton = new IconButton({type: 'insert', color: 'blue', size: 'small'});
    const iconButtonDom = iconButton.render();
    iconButton.on('click', () => {
      this._dispatch({
        type: 'ADD_ROW',
        data: this._addRow({data: this._props.data, rowIndex, defaultRowData: this._props.defaultRowData}),
        rowIndex: rowIndex + 1
      });
    });
    span1.appendChild(iconButtonDom);
    if (this._props.data && this._props.data.length > 1) {
      const span2 = document.createElement('span');
      span2.style.marginLeft = '5px';
      const iconButton2 = new IconButton({type: 'remove', color: 'gray', size: 'small'});
      const iconButtonDom2 = iconButton2.render();
      iconButton2.on('click', () => {
        this._dispatch({
          type: 'REMOVE_ROW',
          data: this._removeRow({data: this._props.data, rowIndex}),
          rowIndex: rowIndex
        });
      });
      span2.appendChild(iconButtonDom2);
      tableCellDiv.appendChild(span2);
    }
    return tableCellDiv;
  }

  private _dispatch(eventOption: DispatchParams) {
    if (eventOption.type === 'ADD_ROW') {
      this._renderTableRows();
      this._renderCells();
      if (this._props.onRowAdd) {
        const newRowData = this._props.onRowAdd(eventOption);
        if (newRowData && this._props.data) {
          this._props.data[eventOption.rowIndex] = newRowData;
        }
      }
    }
    if (eventOption.type === 'REMOVE_ROW') {
      if (this._props.onRowRemove) {
        this._props.onRowRemove(eventOption);
      }
    }
  }

  private _renderTableRows(rerender = false) {
    if (rerender) {
      this._tableBodyContainer.innerHTML = '';
    }
    this._props.data && this._props.data.forEach((_, rowIndex) => {
      const tableRow = this._tableBodyContainer.children.namedItem(rowIndex.toString());
      if (!tableRow || rerender) {
        const newTableRow = document.createElement('div');
        newTableRow.className = 'kuc-table-tr';
        newTableRow.id = rowIndex.toString();
        this._props.columns && this._props.columns.forEach((column) => {
          const {actions} = (column as ActionFlag);
          if (actions === true) {
            const actionCell = this._renderTableCellActions(rowIndex);
            actionCell.id = rowIndex + '_action';
            newTableRow.appendChild(actionCell);
          } else {
            const div = document.createElement('div');
            div.className = 'kuc-table-td';
            newTableRow.appendChild(div);
          }
        });
        this._tableBodyContainer.appendChild(newTableRow);
      } else {
        const child = tableRow.children.namedItem(rowIndex + '_action');
        if (this._props.actionButtonsShown) {
          const actionCell = this._renderTableCellActions(rowIndex);
          actionCell.id = rowIndex + '_action';
          if (child) {
            tableRow.replaceChild(actionCell, child);
          } else {
            tableRow.appendChild(actionCell);
          }
        } else if (child) {
          tableRow.removeChild(child);
        }
      }
    });
  }

  updateRowData(rowIndex: number, data: Record<string, any>, rerender = true, trigger = true, fieldName: string = '') {
    if (rowIndex === undefined || data === undefined) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
    if (!this._props.data) {
      return;
    }
    const rowData = this._mergeDeep(this._props.data[rowIndex], data);
    const type = 'CELL_CHANGE';
    this._props.data[rowIndex] = rowData;
    if (rerender) {
      this._renderCells();
    }
    if (trigger) {
      if (fieldName) {
        this._triggerChange({type, data: this._props.data, rowIndex, fieldName});
      } else {
        this._triggerChange({type, data: this._props.data, rowIndex});
      }
    }
  }

  render() {
    this._renderTableContainer();
    this._renderTableHeadersContainer();
    this._renderTableHeaders();
    this._renderTableBodyContainer();
    this._renderTableRows();
    this._renderCells();
    return this.element;
  }

  showActionButtons() {
    this._props.actionButtonsShown = true;
    if (this._props.columns) {
      const existAction = this._props.columns.filter(column => {
        const {actions} = (column as ActionFlag);
        return actions;
      })[0];
      if (!existAction) {
        this._props.columns.push({actions: this._props.actionButtonsShown});
      }
    }
    this._renderTableRows();
  }

  hideActionButtons() {
    this._props.actionButtonsShown = false;
    this._renderTableRows();
  }

  getValue() {
    return this._props.data;
  }

  setValue(data: Array<Record<string, any>>) {
    if (!Array.isArray(data)) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
    this._props.data = data;
    this._renderTableRows(true);
    this._renderCells();
  }

  on(eventName: string, callback: HandlerFunction) {
    if (!validEventNames.some(event => event === eventName)) {
      throw new Error(Message.control.INVALID_EVENT + ' ' + validEventNames.join(','));
    }
    this._props['on' + eventName.charAt(0).toUpperCase() + eventName.slice(1)] = callback;
  }
}

export {TableProps};