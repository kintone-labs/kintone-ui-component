import { __assign, __spreadArrays } from "tslib";
import React from 'react';
import IconButton from '../IconButton';
import '../../css/font.css';
import '../../css/Table.css';
var Table = function (_a) {
    var data = _a.data, columns = _a.columns, defaultRowData = _a.defaultRowData, onRowAdd = _a.onRowAdd, onRowRemove = _a.onRowRemove, onCellChange = _a.onCellChange, _b = _a.actionButtonsShown, actionButtonsShown = _b === void 0 ? true : _b, _c = _a.isVisible, isVisible = _c === void 0 ? true : _c;
    var _onCellChange = function (newValue, tableData, rowIndex, fieldName) {
        if (onCellChange) {
            tableData[rowIndex][fieldName] = newValue;
            onCellChange({ rowIndex: rowIndex, data: tableData, fieldName: fieldName });
        }
    };
    return (React.createElement("div", { className: "kuc-table", style: { display: isVisible ? 'table' : 'none' } },
        React.createElement("div", { className: "kuc-table-thead" },
            React.createElement("div", { className: "kuc-table-tr" },
                React.createElement(TableHeaderRow, { columns: columns }))),
        React.createElement(TableBody, __assign({}, { columns: columns, data: data, defaultRowData: defaultRowData, onRowAdd: onRowAdd, onRowRemove: onRowRemove, _onCellChange: _onCellChange, actionButtonsShown: actionButtonsShown }))));
};
var TableHeaderRow = function (_a) {
    var columns = _a.columns;
    var header = columns && columns.map(function (data, index) {
        return data.header ? (React.createElement("div", { key: 'Table_Header_Column_' + index, className: "kuc-table-th" },
            React.createElement("span", { className: "kuc-header-label" }, data.header))) : '';
    });
    return React.createElement(React.Fragment, null, header);
};
var TableBody = function (_a) {
    var columns = _a.columns, data = _a.data, defaultRowData = _a.defaultRowData, onRowAdd = _a.onRowAdd, onRowRemove = _a.onRowRemove, actionButtonsShown = _a.actionButtonsShown, _onCellChange = _a._onCellChange;
    if (actionButtonsShown) {
        columns && columns.push({ actions: true });
    }
    return (React.createElement("div", { className: "kuc-table-tbody" }, data && data.map(function (rowData, rowIndex) { return (React.createElement("div", { className: "kuc-table-tr", key: rowIndex }, columns && columns.map(function (column, columnIndex) {
        var actions = column.actions;
        var _a = column, cell = _a.cell, tdProps = _a.tdProps;
        if (actions === true) {
            return (React.createElement(TableCellActions, __assign({}, { key: columnIndex, data: data, defaultRowData: defaultRowData, rowIndex: rowIndex, addRow: addRow, removeRow: removeRow }, { dispatch: function (newState) {
                    if (onRowAdd && newState.type === 'ADD_ROW') {
                        onRowAdd(newState);
                    }
                    if (onRowRemove && newState.type === 'REMOVE_ROW') {
                        onRowRemove(newState);
                    }
                } })));
        }
        return (React.createElement(TableCell, __assign({ key: columnIndex }, { rowData: rowData, rowIndex: rowIndex, columnIndex: columnIndex, cell: cell, _onCellChange: _onCellChange, tdProps: tdProps })));
    }))); })));
};
var TableCell = function (_a) {
    var rowData = _a.rowData, rowIndex = _a.rowIndex, columnIndex = _a.columnIndex, cell = _a.cell, _onCellChange = _a._onCellChange, tdProps = _a.tdProps;
    var cellProps = { rowData: rowData, rowIndex: rowIndex, columnIndex: columnIndex };
    if (typeof _onCellChange === 'function') {
        cellProps.onCellChange = _onCellChange;
    }
    var content = cell ? cell(cellProps) : '';
    var tdPropsObj = tdProps ? tdProps(cellProps) : {};
    return React.createElement("div", __assign({}, tdPropsObj, { className: "kuc-table-td" }), content);
};
var TableCellActions = function (_a) {
    var data = _a.data, rowIndex = _a.rowIndex, defaultRowData = _a.defaultRowData, addRow = _a.addRow, removeRow = _a.removeRow, dispatch = _a.dispatch;
    return (React.createElement("div", { className: "kuc-table-td action-group" },
        React.createElement("span", { style: { marginRight: '5px', display: 'inline-block' } },
            React.createElement(IconButton, { type: "insert", color: "blue", size: "small", onClick: function () {
                    dispatch({
                        type: 'ADD_ROW',
                        data: addRow ? addRow({ data: data, rowIndex: rowIndex, defaultRowData: defaultRowData }) : [],
                        rowIndex: rowIndex + 1
                    });
                } })),
        data && data.length > 1 &&
            React.createElement("span", { style: { display: 'inline-block' } },
                React.createElement(IconButton, { type: "remove", color: "gray", size: "small", onClick: function () {
                        return dispatch({
                            type: 'REMOVE_ROW',
                            data: removeRow({ data: data, rowIndex: rowIndex }),
                            rowIndex: rowIndex
                        });
                    } }))));
};
var addRow = function (_a) {
    var data = _a.data, rowIndex = _a.rowIndex, defaultRowData = _a.defaultRowData;
    if (!data || !defaultRowData) {
        return [];
    }
    var insertAt = rowIndex + 1;
    var newData = __spreadArrays(data.slice(0, insertAt), [__assign({}, defaultRowData)], data.slice(insertAt));
    return newData;
};
var removeRow = function (_a) {
    var data = _a.data, rowIndex = _a.rowIndex;
    return data ? data.filter(function (item, index) { return index !== rowIndex; }) : [];
};
export default Table;
export { Table };
