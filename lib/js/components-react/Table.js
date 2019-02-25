var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

var Table = function Table(_ref) {
  var data = _ref.data,
      onRowAdd = _ref.onRowAdd,
      onRowRemove = _ref.onRowRemove,
      onCellChange = _ref.onCellChange,
      _ref$actionButtonsSho = _ref.actionButtonsShown,
      actionButtonsShown = _ref$actionButtonsSho === undefined ? true : _ref$actionButtonsSho,
      columns = _ref.columns,
      isVisible = _ref.isVisible;

  var _onCellChange = function _onCellChange(newValue, tableData, rowIndex, fieldName) {
    if (onCellChange) {
      tableData[rowIndex][fieldName] = newValue;
      onCellChange({ rowIndex: rowIndex, data: tableData, fieldName: fieldName });
    }
  };
  return React.createElement(
    'div',
    { className: 'kuc-table', style: { display: isVisible ? 'table' : 'none' } },
    React.createElement(
      'div',
      { className: 'kuc-table-thead' },
      React.createElement(
        'div',
        { className: 'kuc-table-tr' },
        React.createElement(TableHeaderRow, { columns: columns })
      )
    ),
    React.createElement(TableBody, { columns: columns, data: data, onRowAdd: onRowAdd, onRowRemove: onRowRemove, _onCellChange: _onCellChange, actionButtonsShown: actionButtonsShown })
  );
};

var TableHeaderRow = function TableHeaderRow(_ref2) {
  var columns = _ref2.columns;

  var header = columns.map(function (data, index) {
    return data.header ? React.createElement(
      'div',
      { key: 'Table_Header_Column_' + index, className: 'kuc-table-th' },
      React.createElement(
        'span',
        { className: 'kuc-header-label' },
        data.header
      )
    ) : '';
  });
  return header;
};
TableHeaderRow.propTypes = {
  columns: PropTypes.array
};

var TableBody = function TableBody(_ref3) {
  var columns = _ref3.columns,
      data = _ref3.data,
      onRowAdd = _ref3.onRowAdd,
      onRowRemove = _ref3.onRowRemove,
      actionButtonsShown = _ref3.actionButtonsShown,
      _onCellChange = _ref3._onCellChange;

  if (actionButtonsShown) {
    columns.push({ actions: true });
  }
  return React.createElement(
    'div',
    { className: 'kuc-table-tbody' },
    data.map(function (rowData, rowIndex) {
      return React.createElement(
        'div',
        { className: 'kuc-table-tr', key: rowIndex },
        columns.map(function (column, columnIndex) {
          var cell = column.cell,
              accessor = column.accessor,
              actions = column.actions,
              tdProps = column.tdProps;

          if (actions === true) {
            return React.createElement(TableCellActions, Object.assign({ key: columnIndex, data: data, rowIndex: rowIndex, addRow: addRow, removeRow: removeRow }, {
              dispatch: function dispatch(newState) {
                if (onRowAdd && newState.type === 'ADD_ROW') {
                  onRowAdd(newState);
                }
                if (onRowRemove && newState.type === 'REMOVE_ROW') {
                  onRowRemove(newState);
                }
              }
            }));
          }
          return React.createElement(TableCell, Object.assign({
            key: columnIndex
          }, { rowData: rowData, rowIndex: rowIndex, columnIndex: columnIndex, accessor: accessor, cell: cell, _onCellChange: _onCellChange, tdProps: tdProps }));
        })
      );
    })
  );
};
TableBody.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  actionButtonsShown: PropTypes.bool,
  onRowAdd: PropTypes.func,
  onRowRemove: PropTypes.func,
  _onCellChange: PropTypes.func
};

var TableCell = function TableCell(_ref4) {
  var rowData = _ref4.rowData,
      rowIndex = _ref4.rowIndex,
      columnIndex = _ref4.columnIndex,
      accessor = _ref4.accessor,
      _ref4$cell = _ref4.cell,
      cell = _ref4$cell === undefined ? function () {
    return '';
  } : _ref4$cell,
      _onCellChange = _ref4._onCellChange,
      tdPropsFn = _ref4.tdProps;

  var cellProps = { rowData: rowData, rowIndex: rowIndex, columnIndex: columnIndex };
  if (typeof _onCellChange === 'function') {
    cellProps.onCellChange = _onCellChange;
  }
  var content = accessor ? getValueByAccessor(accessor, rowData) : cell(cellProps);
  var tdProps = tdPropsFn ? tdPropsFn(cellProps) : {};
  return React.createElement(
    'div',
    Object.assign({}, tdProps, { className: 'kuc-table-td' }),
    content
  );
};

var TableCellActions = function TableCellActions(_ref5) {
  var data = _ref5.data,
      rowIndex = _ref5.rowIndex,
      addRow = _ref5.addRow,
      removeRow = _ref5.removeRow,
      dispatch = _ref5.dispatch;

  return React.createElement(
    'div',
    { className: 'kuc-table-td action-group' },
    React.createElement(
      'span',
      { style: { marginRight: '5px' } },
      React.createElement(IconButton, {
        type: 'insert',
        color: 'blue',
        size: 'small',
        onClick: function onClick() {
          return dispatch({
            type: 'ADD_ROW',
            data: addRow({ data: data, rowIndex: rowIndex }),
            rowIndex: rowIndex + 1
          });
        }
      })
    ),
    data.length > 1 && React.createElement(
      'span',
      null,
      React.createElement(IconButton, {
        type: 'remove',
        color: 'gray',
        size: 'small',
        onClick: function onClick() {
          return dispatch({
            type: 'REMOVE_ROW',
            data: removeRow({ data: data, rowIndex: rowIndex }),
            rowIndex: rowIndex
          });
        }
      })
    )
  );
};
TableCellActions.propTypes = {
  data: PropTypes.array,
  rowIndex: PropTypes.number,
  addRow: PropTypes.func,
  removeRow: PropTypes.func,
  dispatch: PropTypes.func
};

var getValueByAccessor = function getValueByAccessor(accessor, data) {
  switch (typeof accessor === 'undefined' ? 'undefined' : _typeof(accessor)) {
    case 'string':
      return data[accessor];
    case 'function':
      return accessor(data);
    default:
      return '';
  }
};

var addRow = function addRow(_ref6) {
  var data = _ref6.data,
      rowIndex = _ref6.rowIndex;

  var insertAt = rowIndex + 1;
  var newData = [].concat(_toConsumableArray(data.slice(0, insertAt)), [{}], _toConsumableArray(data.slice(insertAt)));
  return newData;
};

var removeRow = function removeRow(_ref7) {
  var data = _ref7.data,
      rowIndex = _ref7.rowIndex;

  return data.filter(function (item, index) {
    return index !== rowIndex;
  });
};

export default Table;