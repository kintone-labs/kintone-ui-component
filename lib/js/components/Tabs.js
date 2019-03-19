var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/jsx-filename-extension */
import TabsReact from '../components-react/Tabs';
import AbstractSingleSelection from './AbstractSingleSelection';
import Message from '../constant/Message';
import withState from './withState';
import React from 'react';
import PropTypes from 'prop-types';

var TabContentJSX = function (_React$PureComponent) {
  _inherits(TabContentJSX, _React$PureComponent);

  function TabContentJSX(props) {
    _classCallCheck(this, TabContentJSX);

    var _this = _possibleConstructorReturn(this, (TabContentJSX.__proto__ || Object.getPrototypeOf(TabContentJSX)).call(this, props));

    _this.componentDidMount = function () {
      _this.spanContent.append(_this.props.content);
    };

    _this.spanContent = null;
    _this.setSpanContentRef = function (element) {
      _this.spanContent = element;
    };
    return _this;
  }

  _createClass(TabContentJSX, [{
    key: 'render',
    value: function render() {
      return React.createElement('span', { ref: this.setSpanContentRef });
    }
  }]);

  return TabContentJSX;
}(React.PureComponent);

TabContentJSX.propTypes = {
  content: PropTypes.any
};

var Tabs = function (_AbstractSingleSelect) {
  _inherits(Tabs, _AbstractSingleSelect);

  function Tabs(props_opt) {
    _classCallCheck(this, Tabs);

    if (props_opt === undefined) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
    if (props_opt.items === undefined) {
      props_opt.items = [];
    }
    props_opt.items = props_opt.items.map(function (item, i) {
      if (typeof item.tabContent !== 'string') {
        item.tabContentJSX = React.createElement(TabContentJSX, { content: item.tabContent });
      }
      return item;
    });

    var _this2 = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props_opt));

    _this2._onSelect = function (item, index, last) {
      var switchTab = true;
      if (_this2.onSelect) {
        switchTab = _this2.onSelect(item, index, last);
        switchTab = switchTab !== undefined ? switchTab : true;
      }
      if (switchTab) {
        _this2._setState({ value: index });
      }
      return true;
    };

    _this2._reactComponentClass = TabsReact;
    _this2.props = props_opt;
    _this2.onSelect = props_opt.onSelect;
    _this2.validEventNames = ['select'];
    return _this2;
  }

  _createClass(Tabs, [{
    key: '_setDisabledItem',
    value: function _setDisabledItem(value, isDisabled) {
      if (!this._getState().items) {
        return;
      }
      var newItems = [].concat(_toConsumableArray(this._getState().items));
      newItems.forEach(function (item, i) {
        if (item.tabName === value) {
          newItems[i].isDisabled = isDisabled;
        }
      });
      this._setState({ items: newItems });
    }
  }, {
    key: '_getReactElement',
    value: function _getReactElement() {
      var Component = withState(this._reactComponentClass);
      var additionalProps = { onSelect: this._onSelect };
      // eslint-disable-next-line react/jsx-filename-extension
      var reactElement = React.createElement(Component, Object.assign({}, this.props, additionalProps));
      return reactElement;
    }
  }, {
    key: 'disableItem',
    value: function disableItem(value) {
      return this._setDisabledItem(value, true);
    }
  }, {
    key: 'enableItem',
    value: function enableItem(value) {
      return this._setDisabledItem(value, false);
    }
  }, {
    key: 'addItem',
    value: function addItem(item) {
      var prevState = this._getState();
      this._setState({ items: prevState.items ? prevState.items.concat([item]) : [item] });
    }
  }, {
    key: 'removeItem',
    value: function removeItem(index) {
      this._removeItem(index);
    }
  }, {
    key: 'getItems',
    value: function getItems() {
      return this._getState().items;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (isNaN(value) && !isFinite(value) || value === '') {
        throw new Error(Message.common.INVALID_ARGUMENT);
      }

      var items = this._getState().items;
      if (!items || !items[value]) {
        throw new Error(Message.common.INVALID_ARGUMENT);
      }
      this._setState({ value: value });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this._getState().value;
    }
  }, {
    key: 'on',
    value: function on(eventName, callback) {
      if (!this.validEventNames.some(function (event) {
        return event === eventName;
      })) {
        throw new Error(Message.control.INVALID_EVENT + ' ' + this.validEventNames.join(','));
      }
      this['on' + eventName.charAt(0).toUpperCase() + eventName.slice(1)] = callback;
    }
  }]);

  return Tabs;
}(AbstractSingleSelection);

export default Tabs;