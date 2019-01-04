var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this._onClick = function () {
      if (_this.props.isDisabled) {
        return false;
      }
      _this.props.onClick(_this.props.item);
      return true;
    }, _this.onChange = function () {
      if (_this.props.isDisabled) {
        return false;
      }
      _this.props.onChange(_this.props.item);
      return true;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Item, [{
    key: 'generateGUID',
    value: function generateGUID() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isVisible === false) {
        return null;
      }

      if (this.props.type === 'checkbox' || this.props.type === 'radio') {
        var id = new Date().getTime() + '-' + this.generateGUID() + '-' + this.generateGUID() + this.generateGUID();
        return React.createElement(
          'span',
          { className: this.props.className },
          React.createElement('input', {
            name: this.props.name,
            id: id,
            disabled: this.props.isDisabled,
            type: this.props.type,
            checked: this.props.selected,
            onChange: this.onChange
          }),
          React.createElement(
            'label',
            { htmlFor: id },
            this.props.item.label
          )
        );
      }
      var className = ['kuc-list-item', this.props.selected ? 'kuc-list-item-selected' : '', this.props.isDisabled ? 'kuc-list-item-disable' : ''];
      return React.createElement(
        'div',
        {
          onClick: this._onClick,
          className: className.join(' ').trim(),
          disabled: this.props.isDisabled
        },
        React.createElement(
          'span',
          { className: 'kuc-icon-check' },
          React.createElement('i', { className: 'fa fa-check', 'aria-hidden': 'true' })
        ),
        React.createElement(
          'span',
          { className: 'kuc-list-item-label' },
          this.props.item.label
        )
      );
    }
  }]);

  return Item;
}(Component);

Item.propTypes = {
  item: PropTypes.object,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string
};
Item.defaultProps = {
  onClick: function onClick(f) {
    return f;
  }
};
export default Item;