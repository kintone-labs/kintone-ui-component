var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

var Table = function (_Component) {
  _inherits(Table, _Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _initialiseProps.call(_this);

    var rowTemplate = props.rowTemplate || [];
    _this.dataTemplate = props.rowTemplate.map(function (element) {
      return element.props.value;
    });
    var value = props.value || [_this.dataTemplate];

    _this.state = {
      rowTemplate: rowTemplate,
      header: props.header || [],
      value: value
    };
    return _this;
  }

  _createClass(Table, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var value = _ref.value;

      if (value) {
        this.setState({ value: value });
      }
    }
  }, {
    key: '_getValue',
    value: function _getValue() {
      return this.state.value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.isVisible === false) {
        return null;
      }

      var header = this.state.header.map(function (data, index) {
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

      var enableRemove = this.state.value.length > 1;

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
          this.state.value.map(function (rowValue, index) {
            return React.createElement(TableRow, {
              key: index,
              index: index,
              value: rowValue,
              enableRemove: enableRemove,
              template: _this2.state.rowTemplate,
              onRowAdd: _this2.addRow,
              onRowRemove: _this2.removeRow,
              onCellChange: _this2.onCellChange,
              onCellClick: _this2.onCellClick
            });
          })
        )
      );
    }
  }]);

  return Table;
}(Component);

Table.propTypes = {
  rowTemplate: PropTypes.array
};
Table.defaultProps = {
  rowTemplate: []
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onCellChange = function (rowValue, rowIndex, columnIndex) {
    _this3.setState(function (prevState) {
      var value = [].concat(_toConsumableArray(prevState.value));
      value[rowIndex] = rowValue;
      if (_this3.props.onCellChange) {
        var data = {
          tableValue: value,
          cell: {
            row: rowIndex,
            column: columnIndex
          }
        };
        _this3.props.onCellChange(data);
      }
      return { 'value': value };
    });
  };

  this.onCellClick = function (rowIndex, columnIndex) {
    var data = {
      tableValue: _this3.state.value,
      cell: {
        row: rowIndex,
        column: columnIndex
      }
    };
    if (_this3.props.onCellClick) {
      _this3.props.onCellClick(data);
    }
  };

  this.addRow = function (index) {
    _this3.setState(function (prevState) {
      var value = [].concat(_toConsumableArray(prevState.value));
      value.splice(index + 1, 0, _this3.dataTemplate);

      if (_this3.props.onRowAdd) {
        var data = {
          tableValue: value,
          row: index + 1
        };
        _this3.props.onRowAdd(data);
      }
      return { 'value': value };
    });
  };

  this.removeRow = function (index) {
    _this3.setState(function (prevState) {
      var value = [].concat(_toConsumableArray(prevState.value));
      value.splice(index, 1);

      if (_this3.props.onRowRemove) {
        var data = {
          tableValue: value
        };
        _this3.props.onRowRemove(data);
      }
      return { 'value': value };
    });
  };
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

export default Table;