import * as tslib_1 from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../../react/IconButton';
import '../../../css/Table.css';
var Table = function (_a) {
    var data = _a.data, columns = _a.columns, defaultRowData = _a.defaultRowData, onRowAdd = _a.onRowAdd, onRowRemove = _a.onRowRemove, onCellChange = _a.onCellChange, actionButtonsShown = _a.actionButtonsShown, isVisible = _a.isVisible;
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
        React.createElement(TableBody, tslib_1.__assign({}, { columns: columns, data: data, defaultRowData: defaultRowData, onRowAdd: onRowAdd, onRowRemove: onRowRemove, _onCellChange: _onCellChange, actionButtonsShown: actionButtonsShown }))));
};
Table.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.string.isRequired,
        cell: PropTypes.func.isRequired,
    })).isRequired,
    defaultRowData: PropTypes.object.isRequired,
    onRowAdd: PropTypes.func,
    onRowRemove: PropTypes.func,
    onCellChange: PropTypes.func,
    actionButtonsShown: PropTypes.bool,
    isVisible: PropTypes.bool
};
Table.defaultProps = {
    isVisible: true,
    actionButtonsShown: true
};
var TableHeaderRow = function (_a) {
    var columns = _a.columns;
    var header = columns.map(function (data, index) {
        return data.header ? (React.createElement("div", { key: 'Table_Header_Column_' + index, className: "kuc-table-th" },
            React.createElement("span", { className: "kuc-header-label" }, data.header))) : '';
    });
    return header;
};
TableHeaderRow.propTypes = {
    columns: PropTypes.array,
};
var TableBody = function (_a) {
    var columns = _a.columns, data = _a.data, defaultRowData = _a.defaultRowData, onRowAdd = _a.onRowAdd, onRowRemove = _a.onRowRemove, actionButtonsShown = _a.actionButtonsShown, _onCellChange = _a._onCellChange;
    if (actionButtonsShown) {
        columns.push({ actions: true });
    }
    return (React.createElement("div", { className: "kuc-table-tbody" }, data.map(function (rowData, rowIndex) { return (React.createElement("div", { className: "kuc-table-tr", key: rowIndex }, columns.map(function (column, columnIndex) {
        var cell = column.cell, accessor = column.accessor, actions = column.actions, tdProps = column.tdProps;
        if (actions === true) {
            return (React.createElement(TableCellActions, tslib_1.__assign({}, { key: columnIndex, data: data, defaultRowData: defaultRowData, rowIndex: rowIndex, addRow: addRow, removeRow: removeRow }, { dispatch: function (newState) {
                    if (onRowAdd && newState.type === 'ADD_ROW') {
                        onRowAdd(newState);
                    }
                    if (onRowRemove && newState.type === 'REMOVE_ROW') {
                        onRowRemove(newState);
                    }
                } })));
        }
        return (React.createElement(TableCell, tslib_1.__assign({ key: columnIndex }, { rowData: rowData, rowIndex: rowIndex, columnIndex: columnIndex, accessor: accessor, cell: cell, _onCellChange: _onCellChange, tdProps: tdProps })));
    }))); })));
};
TableBody.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    defaultRowData: PropTypes.object.isRequired,
    actionButtonsShown: PropTypes.bool,
    onRowAdd: PropTypes.func,
    onRowRemove: PropTypes.func,
    _onCellChange: PropTypes.func,
};
var TableCell = function (_a) {
    var rowData = _a.rowData, rowIndex = _a.rowIndex, columnIndex = _a.columnIndex, accessor = _a.accessor, _b = _a.cell, cell = _b === void 0 ? function () { return ''; } : _b, _onCellChange = _a._onCellChange, tdPropsFn = _a.tdProps;
    var cellProps = { rowData: rowData, rowIndex: rowIndex, columnIndex: columnIndex };
    if (typeof _onCellChange === 'function') {
        cellProps.onCellChange = _onCellChange;
    }
    var content = accessor
        ? getValueByAccessor(accessor, rowData)
        : cell(cellProps);
    var tdProps = tdPropsFn ? tdPropsFn(cellProps) : {};
    return React.createElement("div", tslib_1.__assign({}, tdProps, { className: "kuc-table-td" }), content);
};
var TableCellActions = function (_a) {
    var data = _a.data, rowIndex = _a.rowIndex, defaultRowData = _a.defaultRowData, addRow = _a.addRow, removeRow = _a.removeRow, dispatch = _a.dispatch;
    return (React.createElement("div", { className: "kuc-table-td action-group" },
        React.createElement("span", { style: { marginRight: '5px' } },
            React.createElement(IconButton, { type: "insert", color: "blue", size: "small", onClick: function () {
                    return dispatch({
                        type: 'ADD_ROW',
                        data: addRow({ data: data, rowIndex: rowIndex, defaultRowData: defaultRowData }),
                        rowIndex: rowIndex + 1
                    });
                } })),
        data.length > 1 &&
            React.createElement("span", null,
                React.createElement(IconButton, { type: "remove", color: "gray", size: "small", onClick: function () {
                        return dispatch({
                            type: 'REMOVE_ROW',
                            data: removeRow({ data: data, rowIndex: rowIndex }),
                            rowIndex: rowIndex
                        });
                    } }))));
};
TableCellActions.propTypes = {
    data: PropTypes.array.isRequired,
    rowIndex: PropTypes.number,
    defaultRowData: PropTypes.object.isRequired,
    addRow: PropTypes.func,
    removeRow: PropTypes.func,
    dispatch: PropTypes.func
};
var getValueByAccessor = function (accessor, data) {
    switch (typeof accessor) {
        case 'string':
            return data[accessor];
        case 'function':
            return accessor(data);
        default:
            return '';
    }
};
var addRow = function (_a) {
    var data = _a.data, rowIndex = _a.rowIndex, defaultRowData = _a.defaultRowData;
    var insertAt = rowIndex + 1;
    var newData = data.slice(0, insertAt).concat([tslib_1.__assign({}, defaultRowData)], data.slice(insertAt));
    return newData;
};
var removeRow = function (_a) {
    var data = _a.data, rowIndex = _a.rowIndex;
    return data.filter(function (item, index) { return index !== rowIndex; });
};
export default Table;
