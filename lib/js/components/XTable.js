var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/jsx-filename-extension */
import Control from './Control';
import XTableReact from '../components-react/XTable';
import Message from '../constant/Message';
import { render } from 'react-dom';
import withState from './withState';
import PropTypes from 'prop-types';
import React from 'react';
var validEventNames = ['cellChange', 'cellClick', 'rowAdd', 'rowRemove'];

var XTableCustomCell = function (_React$Component) {
  _inherits(XTableCustomCell, _React$Component);

  function XTableCustomCell(props) {
    _classCallCheck(this, XTableCustomCell);

    var _this = _possibleConstructorReturn(this, (XTableCustomCell.__proto__ || Object.getPrototypeOf(XTableCustomCell)).call(this, props));

    _this.domEl = null;
    _this.setDomElRef = function (element) {
      _this.domEl = element;
    };
    return _this;
  }

  _createClass(XTableCustomCell, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.domEl) this.domEl.append(this.props.html);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('div', { ref: this.setDomElRef });
    }
  }]);

  return XTableCustomCell;
}(React.Component);

XTableCustomCell.propTypes = {
  html: PropTypes.object
};

var XTable = function (_Control) {
  _inherits(XTable, _Control);

  function XTable(opt_props) {
    _classCallCheck(this, XTable);

    var columns = opt_props.columns,
        data = opt_props.data;
    var tableItems = data.tableItems;

    var props = {};
    var columnsReact = columns.map(function (column) {
      if (typeof column.cell === 'function') {
        var cellRenderer = function cellRenderer(_ref) {
          var rowData = _ref.rowData,
              rowIndex = _ref.rowIndex,
              columnIndex = _ref.columnIndex;

          var div = column.cell({ rowData: rowData, rowIndex: rowIndex, columnIndex: columnIndex });
          return React.createElement(XTableCustomCell, { html: div, key: columnIndex });
        };
        cellRenderer.propTypes = {
          rowData: PropTypes.array,
          rowIndex: PropTypes.number,
          columnIndex: PropTypes.number
        };
        column.cellRenderer = cellRenderer;
      }
      return column;
    });
    props.data = tableItems;
    props.columns = columnsReact;

    var _this2 = _possibleConstructorReturn(this, (XTable.__proto__ || Object.getPrototypeOf(XTable)).call(this, props));

    _this2._reactComponentClass = XTableReact;
    return _this2;
  }

  _createClass(XTable, [{
    key: 'setValue',
    value: function setValue(value) {
      this._setState({ value: value });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      if (!this._reactObject) {
        return this._getState().value;
      }
      return this.inner._getValue();
    }
  }, {
    key: 'on',
    value: function on(eventName, callback) {
      if (!validEventNames.some(function (event) {
        return event === eventName;
      })) {
        throw new Error(Message.control.INVALID_EVENT + ' ' + validEventNames.join(','));
      }
      if (validEventNames.some(function (event) {
        return event === eventName;
      })) {
        this.onRowAdd = callback;
      }
      var formatEventName = 'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);
      this._reactObject.setState(_defineProperty({}, formatEventName, callback));
    }
  }, {
    key: '_renderReactObject',
    value: function _renderReactObject() {
      var container = document.createElement('div');
      container.classList.add('kuc-wrapper');
      this._reactObject = render(this._getReactElement(), container);
      return container;
    }
  }, {
    key: '_getReactElement',
    value: function _getReactElement() {
      var Component = withState(this._reactComponentClass);
      var additionalProps = {
        onChange: this._handleOnChange
      };
      // eslint-disable-next-line react/jsx-filename-extension
      var reactElement = React.createElement(Component, Object.assign({}, this.props, additionalProps));
      return reactElement;
    }
  }]);

  return XTable;
}(Control);

export default XTable;