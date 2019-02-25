var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render as _render } from 'react-dom';
import TableReact from '../components-react/Table';
import PropTypes from 'prop-types';
import TableCell from './TableCell';
import Message from '../constant/Message';
var validEventNames = ['rowAdd', 'rowRemove', 'cellChange'];

var Table = function () {
  function Table(_ref) {
    var data = _ref.data,
        defaultRowData = _ref.defaultRowData,
        columns = _ref.columns,
        actionButtonsShown = _ref.actionButtonsShown,
        onRowAdd = _ref.onRowAdd,
        onRowRemove = _ref.onRowRemove,
        onCellChange = _ref.onCellChange;

    _classCallCheck(this, Table);

    _initialiseProps.call(this);

    this.data = data;
    this.onRowAdd = onRowAdd;
    this.onRowRemove = onRowRemove;
    this.onCellChange = onCellChange;
    this.columns = columns.map(function (_ref2) {
      var header = _ref2.header;

      return {
        header: header
      };
    });
    this.cellsTemplate = columns.map(function (_ref3) {
      var cell = _ref3.cell;

      return cell;
    });
    this.defaultRowData = defaultRowData;
    this.actionButtonsShown = actionButtonsShown !== undefined ? actionButtonsShown : true;
  }

  _createClass(Table, [{
    key: '_triggerChange',
    value: function _triggerChange() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var type = args[0].type;

      delete args[0].type;
      if (type === 'REMOVE_ROW' && this.onRowRemove) {
        this.onRowRemove.apply(this, args);
      }
      if (type === 'CELL_CHANGE' && this.onCellChange) {
        this.onCellChange.apply(this, args);
      }
    }
  }, {
    key: '_renderCells',
    value: function _renderCells() {
      var table = this;
      var rowsEl = [].concat(_toConsumableArray(this.el.querySelectorAll('.kuc-table-tbody > .kuc-table-tr')));
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = rowsEl.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref4 = _step.value;

          var _ref5 = _slicedToArray(_ref4, 2);

          var rowIndex = _ref5[0];
          var rowEl = _ref5[1];

          var rowData = this.data[rowIndex];
          var updateRowData = this.updateRowData.bind(this, rowIndex);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.cellsTemplate.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _ref6 = _step2.value;

              var _ref7 = _slicedToArray(_ref6, 2);

              var columnIndex = _ref7[0];
              var cellTemplate = _ref7[1];

              var cell = rowEl.childNodes[columnIndex];
              var element = void 0;
              var cellInstance = void 0;
              if (cell.childNodes.length === 0) {
                cellInstance = cellTemplate();
                element = cellInstance.init({
                  table: table,
                  rowData: rowData,
                  rowIndex: rowIndex,
                  columnIndex: columnIndex,
                  updateRowData: updateRowData
                });
                cell.appendChild(element);
                cell.__tableCellInstance = cellInstance;
              }
              cellInstance = cell.__tableCellInstance;
              cellInstance.update({ table: table, rowData: rowData, rowIndex: rowIndex, columnIndex: columnIndex, element: element });
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: '_isObject',
    value: function _isObject(item) {
      return item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !Array.isArray(item);
    }
  }, {
    key: '_mergeDeep',
    value: function _mergeDeep(target, source) {
      var _this = this;

      var output = Object.assign({}, target);
      if (this._isObject(target) && this._isObject(source)) {
        Object.keys(source).forEach(function (key) {
          if (_this._isObject(source[key])) {
            if (!(key in target)) Object.assign(output, _defineProperty({}, key, source[key]));else output[key] = _this._mergeDeep(target[key], source[key]);
          } else {
            Object.assign(output, _defineProperty({}, key, source[key]));
          }
        });
      }
      return output;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var wrapperEl = document.createElement('span');
      _render(React.createElement(StatefulTable, {
        data: this.data,
        columns: this.columns,
        onRowRemove: this._handleOnChange,
        onRowAdd: this._handleOnChange,
        actionButtonsShown: this.actionButtonsShown,
        ref: function ref(el) {
          return _this2._reactObject = el;
        }
      }), wrapperEl, function () {
        _this2.el = wrapperEl.childNodes[0];
        _this2._renderCells();
      });
      return wrapperEl;
    }
  }, {
    key: 'updateRowData',
    value: function updateRowData(rowIndex, data) {
      var rerender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var trigger = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var fieldName = arguments[4];

      var rowData = this._mergeDeep(this.data[rowIndex], data);
      var type = 'CELL_CHANGE';
      this.data[rowIndex] = rowData;
      if (rerender) {
        this._renderCells();
      }
      if (trigger) {
        if (fieldName) {
          this._triggerChange({ type: type, data: this.data, rowIndex: rowIndex, fieldName: fieldName });
        } else {
          this._triggerChange({ type: type, data: this.data, rowIndex: rowIndex });
        }
      }
    }
  }, {
    key: 'showActionButtons',
    value: function showActionButtons() {
      var actionButtonsShown = true;
      if (this._reactObject) {
        this._reactObject.setState({ actionButtonsShown: actionButtonsShown });
      }
    }
  }, {
    key: 'hideActionButtons',
    value: function hideActionButtons() {
      var actionButtonsShown = false;
      if (this._reactObject) {
        this._reactObject.setState({ actionButtonsShown: actionButtonsShown });
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.data;
    }
  }, {
    key: 'setValue',
    value: function setValue(data) {
      var _this3 = this;

      this.data = data;
      if (this._reactObject) {
        this._reactObject.setState({ data: data }, function () {
          // rerender cells
          _this3._renderCells();
        });
      }
    }
  }, {
    key: 'show',
    value: function show() {
      this._reactObject.setState({ isVisible: true });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this._reactObject.setState({ isVisible: false });
    }
  }, {
    key: 'on',
    value: function on(eventName, callback) {
      if (!validEventNames.some(function (event) {
        return event === eventName;
      })) {
        throw new Error(Message.control.INVALID_EVENT + ' ' + validEventNames.join(','));
      }
      this['on' + eventName.charAt(0).toUpperCase() + eventName.slice(1)] = callback;
    }
  }]);

  return Table;
}();

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this._handleOnChange = function (_ref8) {
    var type = _ref8.type,
        rowIndex = _ref8.rowIndex,
        data = _ref8.data;

    if (type === 'ADD_ROW') {
      var newRowData = void 0;
      if (_this4.onRowAdd) {
        newRowData = _this4.onRowAdd({ rowIndex: rowIndex, data: data });
      }
      if (!newRowData || newRowData === undefined) {
        newRowData = JSON.parse(JSON.stringify(_this4.defaultRowData));
      }
      data[rowIndex] = newRowData;
    }
    _this4.data = data;
    _this4._renderCells();
    _this4._triggerChange({ type: type, rowIndex: rowIndex, data: data });
  };
};

export default Table;

Table.Cell = TableCell;

var StatefulTable = function (_React$Component) {
  _inherits(StatefulTable, _React$Component);

  function StatefulTable() {
    var _ref9;

    var _temp, _this5, _ret;

    _classCallCheck(this, StatefulTable);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret = (_temp = (_this5 = _possibleConstructorReturn(this, (_ref9 = StatefulTable.__proto__ || Object.getPrototypeOf(StatefulTable)).call.apply(_ref9, [this].concat(args))), _this5), _this5.propTypes = {
      data: PropTypes.array,
      onRowRemove: PropTypes.func,
      onRowAdd: PropTypes.func,
      columns: PropTypes.array,
      actionButtonsShown: PropTypes.bool,
      isVisible: PropTypes.bool
    }, _this5.state = {
      data: _this5.props.data,
      actionButtonsShown: _this5.props.actionButtonsShown,
      isVisible: true
    }, _this5.handleChange = function (_ref10) {
      var type = _ref10.type,
          data = _ref10.data,
          rowIndex = _ref10.rowIndex;

      var handler = _this5.props.onRowRemove;
      if (type === 'ADD_ROW') {
        data[rowIndex] = {};
        handler = _this5.props.onRowAdd;
      }

      _this5.setState({ data: data }, function () {
        if (!handler) {
          return;
        }
        handler({ data: data, type: type, rowIndex: rowIndex });
      });
    }, _temp), _possibleConstructorReturn(_this5, _ret);
  }

  _createClass(StatefulTable, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          data = _state.data,
          actionButtonsShown = _state.actionButtonsShown,
          isVisible = _state.isVisible;

      var columns = [].concat(_toConsumableArray(this.props.columns));
      return React.createElement(TableReact, {
        data: data,
        columns: columns,
        onRowAdd: this.handleChange,
        onRowRemove: this.handleChange,
        actionButtonsShown: actionButtonsShown,
        isVisible: isVisible
      });
    }
  }]);

  return StatefulTable;
}(React.Component);