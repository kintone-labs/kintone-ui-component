import { __assign, __extends, __spreadArrays } from "tslib";
import '../polyfill';
import Control from '../Control';
import Message from '../../constant/Message';
import IconButton from '../IconButton';
import '../../css/Table.css';
var validEventNames = ['rowAdd', 'rowRemove', 'cellChange'];
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(params) {
        var _this = _super.call(this) || this;
        _this._props = __assign(__assign({}, _this._props), {
            data: [],
            defaultRowData: {},
            columns: [],
            actionButtonsShown: true
        });
        if (typeof params === 'object' && params !== null && typeof params.isDisabled !== 'boolean') {
            delete params.isDisabled;
        }
        if (typeof params === 'object' && params !== null && typeof params.isVisible !== 'boolean') {
            delete params.isVisible;
        }
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        _this._validateRequired();
        if (_this._props.actionButtonsShown === true) {
            _this._props.columns && _this._props.columns.push({ actions: _this._props.actionButtonsShown });
        }
        return _this;
    }
    Table.prototype._addRow = function (_a) {
        var data = _a.data, rowIndex = _a.rowIndex;
        if (!data) {
            return [];
        }
        var insertAt = rowIndex + 1;
        var newRowData = JSON.parse(JSON.stringify(this._props.defaultRowData));
        var newData = __spreadArrays(data.slice(0, insertAt), [newRowData], data.slice(insertAt));
        this._props.data = newData;
        return newData;
    };
    Table.prototype._removeRow = function (_a) {
        var data = _a.data, rowIndex = _a.rowIndex;
        var currentData = data && data.filter(function (_, index) { return index !== rowIndex; });
        this._props.data = currentData;
        this._renderTableRows(true);
        this._renderCells();
        return currentData;
    };
    Table.prototype._triggerChange = function (args) {
        var type = args.type;
        delete args.type;
        if (type === 'REMOVE_ROW' && this._props.onRowRemove) {
            this._props.onRowRemove(args);
        }
        if (type === 'CELL_CHANGE' && this._props.onCellChange) {
            this._props.onCellChange(args);
        }
    };
    Table.prototype._renderCells = function () {
        var _this = this;
        var table = this._props;
        var rowsEl = [].slice.call(this.element.querySelectorAll('.kuc-table-tbody > .kuc-table-tr'));
        var columns = [].slice.call(this._props.columns);
        rowsEl.forEach(function (rowEl, rowIndex) {
            var rowData = _this._props.data && JSON.parse(JSON.stringify(_this._props.data[rowIndex]));
            var updateRowData = _this.updateRowData.bind(_this, rowIndex);
            columns.forEach(function (_a, columnIndex) {
                var cell = _a.cell;
                var cellTemplate = cell;
                if (cellTemplate) {
                    var cellElement = rowEl.childNodes[columnIndex];
                    var element = null;
                    var cellInstance = void 0;
                    if (cellElement.childNodes.length === 0) {
                        cellInstance = cellTemplate();
                        element = cellInstance.init({
                            table: table,
                            rowData: rowData,
                            rowIndex: rowIndex,
                            columnIndex: columnIndex,
                            updateRowData: updateRowData
                        });
                        if (element) {
                            cellElement.appendChild(element);
                        }
                        cellElement.__tableCellInstance = cellInstance;
                    }
                    cellInstance = cellElement.__tableCellInstance;
                    cellInstance.update({ table: table, rowData: rowData, rowIndex: rowIndex, columnIndex: columnIndex, element: element });
                }
            });
        });
    };
    Table.prototype._isObject = function (item) {
        return (item && typeof item === 'object' && !Array.isArray(item));
    };
    Table.prototype._mergeDeep = function (target, source) {
        var _this = this;
        var output = Object.assign({}, target);
        if (this._isObject(target) && this._isObject(source)) {
            Object.keys(source).forEach(function (key) {
                var _a, _b;
                if (_this._isObject(source[key])) {
                    if (!(key in target))
                        Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                    else
                        output[key] = _this._mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(output, (_b = {}, _b[key] = source[key], _b));
                }
            });
        }
        return output;
    };
    Table.prototype._validateRequired = function () {
        if (!Array.isArray(this._props.data) ||
            !Array.isArray(this._props.columns) ||
            typeof this._props.defaultRowData !== 'object') {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
    };
    Table.prototype._renderTableContainer = function () {
        var tableContainer = document.createElement('div');
        tableContainer.className = 'kuc-table';
        tableContainer.style.display = this._props.isVisible ? 'table' : 'none';
        this.element = tableContainer;
    };
    Table.prototype._renderTableHeadersContainer = function () {
        var tableHeader = document.createElement('div');
        tableHeader.className = 'kuc-table-thead';
        var tableTr = document.createElement('div');
        tableTr.className = 'kuc-table-tr';
        this._tableHeaderContainer = tableTr;
        tableHeader.appendChild(tableTr);
        this.element.appendChild(tableHeader);
    };
    Table.prototype._renderTableHeaders = function () {
        var _this = this;
        this._props.columns && this._props.columns.forEach(function (data) {
            var tableHeaderText = data.header;
            if (tableHeaderText) {
                var headerTr = document.createElement('div');
                var span = document.createElement('span');
                span.className = 'kuc-header-label';
                span.textContent = tableHeaderText;
                headerTr.className = 'kuc-table-th';
                headerTr.appendChild(span);
                _this._tableHeaderContainer.appendChild(headerTr);
            }
        });
    };
    Table.prototype._renderTableBodyContainer = function () {
        var tableBody = document.createElement('div');
        tableBody.className = 'kuc-table-tbody';
        this.element.appendChild(tableBody);
        this._tableBodyContainer = tableBody;
    };
    Table.prototype._renderTableCellActions = function (rowIndex) {
        var _this = this;
        var tableCellDiv = document.createElement('div');
        tableCellDiv.className = 'kuc-table-td action-group';
        var span1 = document.createElement('span');
        tableCellDiv.appendChild(span1);
        var iconButton = new IconButton({ type: 'insert', color: 'blue', size: 'small' });
        var iconButtonDom = iconButton.render();
        iconButton.on('click', function () {
            _this._dispatch({
                type: 'ADD_ROW',
                data: _this._addRow({ data: _this._props.data, rowIndex: rowIndex, defaultRowData: _this._props.defaultRowData }),
                rowIndex: rowIndex + 1
            });
        });
        span1.appendChild(iconButtonDom);
        if (this._props.data && this._props.data.length > 1) {
            var span2 = document.createElement('span');
            span2.style.marginLeft = '5px';
            var iconButton2 = new IconButton({ type: 'remove', color: 'gray', size: 'small' });
            var iconButtonDom2 = iconButton2.render();
            iconButton2.on('click', function () {
                _this._dispatch({
                    type: 'REMOVE_ROW',
                    data: _this._removeRow({ data: _this._props.data, rowIndex: rowIndex }),
                    rowIndex: rowIndex
                });
            });
            span2.appendChild(iconButtonDom2);
            tableCellDiv.appendChild(span2);
        }
        return tableCellDiv;
    };
    Table.prototype._dispatch = function (eventOption) {
        if (eventOption.type === 'ADD_ROW') {
            this._renderTableRows();
            this._renderCells();
            if (this._props.onRowAdd) {
                var newRowData = this._props.onRowAdd(eventOption);
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
    };
    Table.prototype._renderTableRows = function (rerender) {
        var _this = this;
        if (rerender === void 0) { rerender = false; }
        if (rerender) {
            this._tableBodyContainer.innerHTML = '';
        }
        this._props.data && this._props.data.forEach(function (_, rowIndex) {
            var tableRow = _this._tableBodyContainer.children.namedItem(rowIndex.toString());
            if (!tableRow || rerender) {
                var newTableRow_1 = document.createElement('div');
                newTableRow_1.className = 'kuc-table-tr';
                newTableRow_1.id = rowIndex.toString();
                _this._props.columns && _this._props.columns.forEach(function (column) {
                    var actions = column.actions;
                    if (actions === true) {
                        var actionCell = _this._renderTableCellActions(rowIndex);
                        actionCell.id = rowIndex + '_action';
                        newTableRow_1.appendChild(actionCell);
                    }
                    else {
                        var div = document.createElement('div');
                        div.className = 'kuc-table-td';
                        newTableRow_1.appendChild(div);
                    }
                });
                _this._tableBodyContainer.appendChild(newTableRow_1);
            }
            else {
                var child = tableRow.children.namedItem(rowIndex + '_action');
                if (_this._props.actionButtonsShown) {
                    var actionCell = _this._renderTableCellActions(rowIndex);
                    actionCell.id = rowIndex + '_action';
                    if (child) {
                        tableRow.replaceChild(actionCell, child);
                    }
                    else {
                        tableRow.appendChild(actionCell);
                    }
                }
                else if (child) {
                    tableRow.removeChild(child);
                }
            }
        });
    };
    Table.prototype.updateRowData = function (rowIndex, data, rerender, trigger, fieldName) {
        if (rerender === void 0) { rerender = true; }
        if (trigger === void 0) { trigger = true; }
        if (fieldName === void 0) { fieldName = ''; }
        if (rowIndex === undefined || data === undefined) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        if (!this._props.data) {
            return;
        }
        var rowData = this._mergeDeep(this._props.data[rowIndex], data);
        var type = 'CELL_CHANGE';
        this._props.data[rowIndex] = rowData;
        if (rerender) {
            this._renderCells();
        }
        if (trigger) {
            if (fieldName) {
                this._triggerChange({ type: type, data: this._props.data, rowIndex: rowIndex, fieldName: fieldName });
            }
            else {
                this._triggerChange({ type: type, data: this._props.data, rowIndex: rowIndex });
            }
        }
    };
    Table.prototype.render = function () {
        this._renderTableContainer();
        this._renderTableHeadersContainer();
        this._renderTableHeaders();
        this._renderTableBodyContainer();
        this._renderTableRows();
        this._renderCells();
        return this.element;
    };
    Table.prototype.showActionButtons = function () {
        this._props.actionButtonsShown = true;
        if (this._props.columns) {
            var existAction = this._props.columns.filter(function (column) {
                var actions = column.actions;
                return actions;
            })[0];
            if (!existAction) {
                this._props.columns.push({ actions: this._props.actionButtonsShown });
            }
        }
        this._renderTableRows();
    };
    Table.prototype.hideActionButtons = function () {
        this._props.actionButtonsShown = false;
        this._renderTableRows();
    };
    Table.prototype.getValue = function () {
        return this._props.data;
    };
    Table.prototype.setValue = function (data) {
        if (!Array.isArray(data)) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        this._props.data = data;
        this._renderTableRows(true);
        this._renderCells();
    };
    Table.prototype.on = function (eventName, callback) {
        if (!validEventNames.some(function (event) { return event === eventName; })) {
            throw new Error(Message.control.INVALID_EVENT + ' ' + validEventNames.join(','));
        }
        this._props['on' + eventName.charAt(0).toUpperCase() + eventName.slice(1)] = callback;
    };
    return Table;
}(Control));
export default Table;
