import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

var RowItem = function RowItem(props) {
  return React.createElement(
    'div',
    {
      className: 'kuc-table-td'
    },
    props.newCell
  );
};
RowItem.propTypes = {
  newCell: PropTypes.object
};

var TableRow = function TableRow(props) {
  var addRow = function addRow() {
    props.onRowAdd(props.index);
  };

  var removeRow = function removeRow() {
    props.onRowRemove(props.index);
  };

  var handleOnCellChange = function handleOnCellChange(value, cellIndex) {
    var rowValue = props.value.slice();
    rowValue[cellIndex] = value;
    props.onCellChange(rowValue, props.index, cellIndex);
  };

  var handleOnCellClick = function handleOnCellClick(cellIndex) {
    var rowIndex = props.index;
    props.onCellClick(rowIndex, cellIndex);
  };

  var addIcon = React.createElement(
    'span',
    { style: { marginRight: '5px' } },
    React.createElement(IconButton, {
      type: 'insert',
      color: 'blue',
      size: 'small',
      onClick: addRow
    })
  );

  var removeIcon = null;
  if (props.enableRemove) {
    removeIcon = React.createElement(
      'span',
      null,
      React.createElement(IconButton, {
        type: 'remove',
        color: 'gray',
        size: 'small',
        onClick: removeRow
      })
    );
  }

  var listItems = props.template.map(function (cell, index) {
    var newCell = cloneElement(cell, {
      value: props.value[index],
      onChange: function onChange(value) {
        handleOnCellChange(value, index);
      },
      onClick: function onClick() {
        handleOnCellClick(index);
      },
      name: cell.props.name + '_' + props.index + '_' + index
    });
    return React.createElement(RowItem, { key: newCell.props.value, newCell: newCell });
  });

  return React.createElement(
    'div',
    { className: 'kuc-table-tr' },
    listItems,
    React.createElement(
      'div',
      { className: 'kuc-table-td action-group' },
      addIcon,
      removeIcon
    )
  );
};
TableRow.propTypes = {
  index: PropTypes.number,
  enableRemove: PropTypes.bool,
  template: PropTypes.arrayOf(PropTypes.element),
  value: PropTypes.array,
  onRowAdd: PropTypes.func,
  onRowRemove: PropTypes.func,
  onCellChange: PropTypes.func,
  onCellClick: PropTypes.func
};
export default TableRow;