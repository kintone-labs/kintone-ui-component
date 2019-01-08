function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React from 'react';
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
            colunm: columnIndex
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
        colunm: columnIndex
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