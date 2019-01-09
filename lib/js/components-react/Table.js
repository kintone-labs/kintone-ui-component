function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

var Table = function Table(props) {
  var dataTemplate = props.rowTemplate.map(function (element) {
    return element.props.value;
  });
  props.value = props.value || [dataTemplate];
  Table.innerValue = props.value;
  var onCellChange = function onCellChange(rowValue, rowIndex, columnIndex) {
    var value = [].concat(_toConsumableArray(Table.innerValue));
    value[rowIndex] = rowValue;
    if (props.onCellChange) {
      var data = {
        tableValue: value,
        cell: {
          row: rowIndex,
          colunm: columnIndex
        }
      };
      props.onCellChange(data);
    }
  };

  var onCellClick = function onCellClick(rowIndex, columnIndex) {
    var data = {
      tableValue: props.value,
      cell: {
        row: rowIndex,
        colunm: columnIndex
      }
    };
    if (props.onCellClick) {
      props.onCellClick(data);
    }
  };

  var addRow = function addRow(index) {
    var value = [].concat(_toConsumableArray(props.value));
    value.splice(index + 1, 0, dataTemplate);
    if (props.onRowAdd) {
      var data = {
        tableValue: value,
        row: index + 1
      };
      props.onRowAdd(data);
    }
  };

  var removeRow = function removeRow(index) {
    var value = [].concat(_toConsumableArray(props.value));
    value.splice(index, 1);
    if (props.onRowRemove) {
      var data = {
        tableValue: value
      };
      props.onRowRemove(data);
    }
  };

  if (props.isVisible === false) {
    return null;
  }

  var header = props.header.map(function (data, index) {
    return React.createElement(
      'div',
      { key: 'Table_Header_Column_' + index, className: 'kuc-table-th' },
      React.createElement(
        'span',
        { className: 'kuc-header-label' },
        data
      )
    );
  });

  var enableRemove = props.value.length > 1;
  return React.createElement(
    'div',
    { className: 'kuc-table' },
    React.createElement(
      'div',
      { className: 'kuc-table-thead' },
      React.createElement(
        'div',
        { className: 'kuc-table-tr' },
        header
      )
    ),
    React.createElement(
      'div',
      { className: 'kuc-table-tbody' },
      props.value.map(function (rowValue, index) {
        return React.createElement(TableRow, {
          key: index,
          index: index,
          value: rowValue,
          enableRemove: enableRemove,
          template: props.rowTemplate,
          onRowAdd: addRow,
          onRowRemove: removeRow,
          onCellChange: onCellChange,
          onCellClick: onCellClick
        });
      })
    )
  );
};

Table.propTypes = {
  isVisible: PropTypes.bool,
  header: PropTypes.arrayOf(PropTypes.string),
  rowTemplate: PropTypes.arrayOf(PropTypes.element),
  value: PropTypes.array,
  onCellChange: PropTypes.func,
  onCellClick: PropTypes.func,
  onRowAdd: PropTypes.func,
  onRowRemove: PropTypes.func
};
Table.defaultProps = {
  rowTemplate: []
};

export default Table;