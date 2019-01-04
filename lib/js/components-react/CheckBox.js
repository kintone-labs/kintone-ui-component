var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Item from './Item';
import Message from '../constant/Message';
import AbstractMultiSelection from './AbstractMultiSelection';
import React from 'react';

var CheckBox = function (_AbstractMultiSelecti) {
  _inherits(CheckBox, _AbstractMultiSelecti);

  function CheckBox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CheckBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call.apply(_ref, [this].concat(args))), _this), _this._handleItemClick = function (itemValue) {
      _this.setState(function (prevState) {
        var value = prevState.value ? prevState.value.slice() : [];
        var length = value.length;
        var include = false;
        for (var i = 0; i < length; i++) {
          if (value[i] === itemValue) {
            include = true;
            value.splice(i, 1);
            break;
          }
        }
        if (!include) {
          value.push(itemValue);
        }
        _this.props.onChange(value);
        return { 'value': value };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CheckBox, [{
    key: 'checkItemIsSelect',
    value: function checkItemIsSelect(itemValue) {
      return !this.state.value.every(function (currentValue) {
        return itemValue !== currentValue;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.isVisible === false || !this.props.items) {
        return null;
      }
      var items = this.props.items.map(function (item, i) {
        var isSelected = _this2.state.value ? _this2.state.value.some(function (value) {
          return value === item.value;
        }) : false;
        return React.createElement(Item, {
          key: i,
          selected: isSelected,
          onChange: function onChange() {
            return _this2._handleItemClick(item.value);
          },
          label: item.label,
          item: item,
          isDisabled: _this2.props.isDisabled ? _this2.props.isDisabled : item.isDisabled,
          type: 'checkbox',
          className: 'kuc-input-checkbox-item'
        });
      });

      if (!this._hasDuplicatedItems()) {
        throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
      }

      if (!this._hasValidValue()) {
        throw new Error(Message.common.INVALID_ARGUMENT);
      }

      return React.createElement(
        'div',
        { className: 'kuc-input-checkbox' },
        items
      );
    }
  }]);

  return CheckBox;
}(AbstractMultiSelection);

export default CheckBox;