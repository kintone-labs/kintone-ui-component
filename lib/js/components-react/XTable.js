var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

var XTable = function XTable(_ref) {
  var data = _ref.data,
      onChange = _ref.onChange,
      _ref$keyField = _ref.keyField,
      keyField = _ref$keyField === undefined ? 'id' : _ref$keyField,
      columns = _ref.columns;

  return React.createElement(
    'div',
    { className: 'kuc-table' },
    React.createElement(
      'div',
      { className: 'kuc-table-thead' },
      React.createElement(
        'div',
        { className: 'kuc-table-tr' },
        React.createElement(XTableHeaderRow, { columns: columns })
      )
    ),
    React.createElement(XTableBody, { columns: columns, data: data, onChange: onChange, keyField: keyField })
  );
};

var XTableHeaderRow = function XTableHeaderRow(_ref2) {
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
XTableHeaderRow.propTypes = {
  columns: PropTypes.array
};

var XTableBody = function XTableBody(_ref3) {
  var columns = _ref3.columns,
      data = _ref3.data,
      onChange = _ref3.onChange,
      keyField = _ref3.keyField;

  return React.createElement(
    'div',
    { className: 'kuc-table-tbody' },
    data.map(function (rowData, rowIndex) {
      return React.createElement(
        'div',
        { className: 'kuc-table-tr', key: rowData[keyField] || rowIndex },
        columns.map(function (column, columnIndex) {
          var cell = column.cell,
              accessor = column.accessor,
              actions = column.actions,
              tdProps = column.tdProps;

          if (actions === true) {
            return React.createElement(XTableCellActions, Object.assign({ key: columnIndex, data: data, rowIndex: rowIndex, addRow: addRow, removeRow: removeRow }, {
              dispatch: function dispatch(newState) {
                onChange && onChange(newState);
              }
            }));
          }
          return React.createElement(XTableCell, Object.assign({
            key: columnIndex
          }, { rowData: rowData, rowIndex: rowIndex, accessor: accessor, cell: cell, tdProps: tdProps }));
        })
      );
    })
  );
};
XTableBody.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  onChange: PropTypes.func,
  keyField: PropTypes.string
};

var XTableCell = function XTableCell(_ref4) {
  var rowData = _ref4.rowData,
      rowIndex = _ref4.rowIndex,
      accessor = _ref4.accessor,
      _ref4$cell = _ref4.cell,
      cell = _ref4$cell === undefined ? function () {
    return '';
  } : _ref4$cell,
      tdPropsFn = _ref4.tdProps;

  var cellProps = { rowData: rowData, rowIndex: rowIndex };
  var content = accessor ? getValueByAccessor(accessor, rowData) : cell(cellProps);
  var tdProps = tdPropsFn ? tdPropsFn(cellProps) : {};
  return React.createElement(
    'div',
    Object.assign({}, tdProps, { className: 'kuc-table-td' }),
    content
  );
};

var XTableCellActions = function XTableCellActions(_ref5) {
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
XTableCellActions.propTypes = {
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

export default XTable;