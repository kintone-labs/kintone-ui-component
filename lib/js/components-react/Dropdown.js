var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Item from './Item';
import Message from '../constant/Message';
import AbstractSingleSelection from './AbstractSingleSelection';
import React from 'react';
import PropTypes from 'prop-types';

var Dropdown = function (_React$PureComponent) {
  _inherits(Dropdown, _React$PureComponent);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isVisibleItems: false
    }, _this._showItems = function () {
      _this.setState({
        isVisibleItems: true
      }, function () {
        if (document.attachEvent) {
          document.attachEvent('onClick', _this._hideItems);
        } else {
          document.addEventListener('click', _this._hideItems);
        }
      });
    }, _this._hideItems = function () {
      _this.setState({
        isVisibleItems: false
      }, function () {
        if (document.detachEvent) {
          document.detachEvent('onClick', _this._hideItems);
        } else {
          document.removeEventListener('click', _this._hideItems);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dropdown, [{
    key: '_getItemsStyle',
    value: function _getItemsStyle() {
      var display = this.state.isVisibleItems && !this.props.isDisabled ? { display: 'block' } : { display: 'none' };
      return display;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.isVisible === false) {
        return null;
      }

      if (AbstractSingleSelection._hasDuplicatedItems(this.props.items)) {
        throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
      }

      if (!AbstractSingleSelection._hasValidValue(this.props.items, this.props.value)) {
        throw new Error(Message.common.INVALID_ARGUMENT);
      }

      var items = this.props.items && this.props.items.map(function (item, i) {
        return React.createElement(Item, {
          key: i,
          selected: _this2.props.value === item.value,
          onClick: function onClick(item_prop) {
            return AbstractSingleSelection._handleItemClick(item_prop, _this2.props.onChange);
          },
          item: item,
          isDisabled: item.isDisabled
        });
      });

      var index = -1;
      this.props.items && this.props.items.forEach(function (item, i) {
        if (item.value === _this2.props.value) {
          index = i;
        }
      });

      var className = ['kuc-dropdown', this.props.isDisabled ? 'kuc-dropdown-disable' : ''];
      return React.createElement(
        'div',
        { className: 'kuc-dropdown-container' },
        React.createElement(
          'div',
          { className: 'kuc-dropdown-sub-container' },
          React.createElement(
            'div',
            { className: 'kuc-dropdown-outer', onClick: this._showItems },
            React.createElement(
              'div',
              { className: className.join(' ').trim() },
              React.createElement(
                'div',
                { className: 'kuc-dropdown-selected' },
                React.createElement(
                  'span',
                  { className: 'kuc-dropdown-selected-name' },
                  React.createElement(
                    'span',
                    null,
                    index !== -1 && this.props.items[index].label
                  ),
                  React.createElement(
                    'span',
                    { className: 'icon-arrow-down' },
                    React.createElement('i', { className: 'fa fa-angle-down', 'aria-hidden': 'true' })
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { style: this._getItemsStyle(), className: 'kuc-list-outer' },
            items
          )
        )
      );
    }
  }]);

  return Dropdown;
}(React.PureComponent);

Dropdown.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  items: PropTypes.array,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func
};
export default Dropdown;