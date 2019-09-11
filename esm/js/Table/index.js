import * as tslib_1 from "tslib";
import Control from '../Control';
import Message from '../../constant/Message';
import IconButton from '../IconButton';
import '../../css/Table.css';
var validEventNames = ['rowAdd', 'rowRemove', 'cellChange'];
var Table = /** @class */ (function (_super) {
    tslib_1.__extends(Table, _super);
    function Table(params) {
        var _this = _super.call(this) || this;
        _this._props = tslib_1.__assign({}, _this._props, {
            data: [],
            defaultRowData: {},
            columns: [],
            actionButtonsShown: true
        });
        _this._addRow = function (_a) {
            var data = _a.data, rowIndex = _a.rowIndex;
            var insertAt = rowIndex + 1;
            var newRowData = JSON.parse(JSON.stringify(_this._props.defaultRowData));
            var newData = data.slice(0, insertAt).concat([newRowData], data.slice(insertAt));
            _this._props.data = newData;
            return newData;
        };
        _this._removeRow = function (_a) {
            var data = _a.data, rowIndex = _a.rowIndex;
            _this._props.data = data.filter(function (_, index) { return index !== rowIndex; });
            _this._renderTableRows(true);
            _this._renderCells();
        };
        if (typeof params === 'object' && params !== null && typeof params.isDisabled !== 'boolean') {
            delete params.isDisabled;
        }
        if (typeof params === 'object' && params !== null && typeof params.isVisible !== 'boolean') {
            delete params.isVisible;
        }
        if (params) {
            _this._props = tslib_1.__assign({}, _this._props, params);
        }
        _this._validateRequired();
        if (_this._props.actionButtonsShown !== undefined) {
            _this._props.columns.push({ actions: _this._props.actionButtonsShown });
        }
        return _this;
    }
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
            var rowData = _this._props.data[rowIndex];
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
                        cellElement['__tableCellInstance'] = cellInstance;
                    }
                    cellInstance = cellElement['__tableCellInstance'];
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
        this._props.columns.forEach(function (data) {
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
        span1.style.marginRight = '5px';
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
        iconButtonDom.style.display = 'inline-block';
        span1.appendChild(iconButtonDom);
        if (this._props.data.length > 1) {
            var span2 = document.createElement('span');
            var iconButton2 = new IconButton({ type: 'remove', color: 'gray', size: 'small' });
            var iconButtonDom2 = iconButton2.render();
            iconButton2.on('click', function () {
                _this._dispatch({
                    type: 'REMOVE_ROW',
                    rowIndex: rowIndex
                });
            });
            iconButtonDom2.style.display = 'inline-block';
            span2.appendChild(iconButtonDom2);
            tableCellDiv.appendChild(span2);
        }
        return tableCellDiv;
    };
    Table.prototype._dispatch = function (eventOption) {
        if (eventOption['type'] === 'ADD_ROW') {
            if (this._props.onRowAdd) {
                var newRowData = this._props.onRowAdd(eventOption);
                if (newRowData) {
                    this._props.data[eventOption.rowIndex] = newRowData;
                }
            }
            this._renderTableRows();
            this._renderCells();
        }
        if (eventOption['type'] === 'REMOVE_ROW') {
            this._removeRow({ data: this._props.data, rowIndex: eventOption['rowIndex'] });
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
        this._props.data.forEach(function (_, rowIndex) {
            var tableRow = _this._tableBodyContainer.children.namedItem(rowIndex.toString());
            if (!tableRow || rerender) {
                var tableRow_1 = document.createElement('div');
                tableRow_1.className = 'kuc-table-tr';
                tableRow_1.id = rowIndex.toString();
                _this._props.columns.forEach(function (column) {
                    var actions = column.actions;
                    if (actions === true) {
                        var actionCell = _this._renderTableCellActions(rowIndex);
                        actionCell.id = rowIndex + '_action';
                        tableRow_1.appendChild(actionCell);
                    }
                    else {
                        var div = document.createElement('div');
                        div.className = 'kuc-table-td';
                        tableRow_1.appendChild(div);
                    }
                });
                _this._tableBodyContainer.appendChild(tableRow_1);
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
        if (rowIndex === undefined || data === undefined) {
            throw new Error(Message.common.INVALID_ARGUMENT);
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
