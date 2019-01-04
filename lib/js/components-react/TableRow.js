var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

var TableRow = function (_Component) {
  _inherits(TableRow, _Component);

  function TableRow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TableRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableRow.__proto__ || Object.getPrototypeOf(TableRow)).call.apply(_ref, [this].concat(args))), _this), _this.addRow = function () {
      _this.props.onRowAdd(_this.props.index);
    }, _this.removeRow = function () {
      _this.props.onRowRemove(_this.props.index);
    }, _this.handleOnCellChange = function (value, cellIndex) {
      var rowValue = _this.props.value.slice();
      rowValue[cellIndex] = value;
      _this.props.onCellChange(rowValue, _this.props.index, cellIndex);
    }, _this.handleOnCellClick = function (cellIndex) {
      var rowIndex = _this.props.index;
      _this.props.onCellClick(rowIndex, cellIndex);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableRow, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var addIcon = React.createElement(
        'span',
        { style: { marginRight: '5px' } },
        React.createElement(IconButton, {
          type: 'insert',
          color: 'blue',
          size: 'small',
          onClick: this.addRow
        })
      );

      var removeIcon = null;
      if (this.props.enableRemove) {
        removeIcon = React.createElement(
          'span',
          null,
          React.createElement(IconButton, {
            type: 'remove',
            color: 'gray',
            size: 'small',
            onClick: this.removeRow
          })
        );
      }

      return React.createElement(
        'div',
        { className: 'kuc-table-tr' },
        this.props.template.map(function (cell, index) {
          return React.createElement(
            'div',
            {
              key: index,
              className: 'kuc-table-td'
            },
            cloneElement(cell, {
              value: _this2.props.value[index],
              onChange: function onChange(value) {
                _this2.handleOnCellChange(value, index);
              },
              onClick: function onClick() {
                _this2.handleOnCellClick(index);
              },
              name: cell.props.name + '_' + _this2.props.index + '_' + index
            })
          );
        }),
        React.createElement(
          'div',
          { className: 'kuc-table-td action-group' },
          addIcon,
          removeIcon
        )
      );
    }
  }]);

  return TableRow;
}(Component);

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