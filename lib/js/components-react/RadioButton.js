<<<<<<< HEAD
import Item from './Item';
import Message from '../constant/Message';
import AbstractSingleSelection from './AbstractSingleSelection';
import PropTypes from 'prop-types';
import React from 'react';

var RadioButton = function RadioButton(props) {
  if (!props.name) {
    throw new Error(Message.radioBtn.MISSING_NAME);
  }

  if (props.isVisible === false) {
    return null;
  }

  if (!function () {
    return AbstractSingleSelection._hasDuplicatedItems;
  }()) {
    throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
  }

  if (!function () {
    return AbstractSingleSelection._hasValidValue;
  }()) {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }

  var items = props.items && props.items.map(function (item, i) {
    return React.createElement(Item, {
      key: i,
      selected: props.value === item.value,
      onChange: function onChange(item_prop) {
        return AbstractSingleSelection._handleItemClick(item_prop, props.onChange);
      },
      item: item,
      isDisabled: props.isDisabled ? props.isDisabled : item.isDisabled,
      type: 'radio',
      name: props.name,
      className: 'kuc-input-radio-item'
    });
  });

  return React.createElement(
    'div',
    { className: 'kuc-input-radio' },
    items
  );
};
RadioButton.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  items: PropTypes.array,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};
=======
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Item from './Item';
import Message from '../constant/Message';
import AbstractSingleSelection from './AbstractSingleSelection';
import React from 'react';

var RadioButton = function (_AbstractSingleSelect) {
  _inherits(RadioButton, _AbstractSingleSelect);

  function RadioButton(props) {
    _classCallCheck(this, RadioButton);

    var _this = _possibleConstructorReturn(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call(this, props));

    if (!props.name) {
      throw new Error(Message.radioBtn.MISSING_NAME);
    }
    return _this;
  }

  _createClass(RadioButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.isVisible === false) {
        return null;
      }

      if (!this._hasDuplicatedItems()) {
        throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
      }

      if (!this._hasValidValue()) {
        throw new Error(Message.common.INVALID_ARGUMENT);
      }

      var items = this.props.items && this.props.items.map(function (item, i) {
        return React.createElement(Item, {
          key: i,
          selected: _this2.props.value === item.value,
          onChange: _this2._handleItemClick,
          item: item,
          isDisabled: _this2.props.isDisabled ? _this2.props.isDisabled : item.isDisabled,
          type: 'radio',
          name: _this2.props.name,
          className: 'kuc-input-radio-item'
        });
      });

      return React.createElement(
        'div',
        { className: 'kuc-input-radio' },
        items
      );
    }
  }]);

  return RadioButton;
}(AbstractSingleSelection);

>>>>>>> origin/v0.2.0
export default RadioButton;