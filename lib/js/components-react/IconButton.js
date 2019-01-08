var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

var IconButton = function (_Component) {
  _inherits(IconButton, _Component);

  function IconButton() {
    _classCallCheck(this, IconButton);

    return _possibleConstructorReturn(this, (IconButton.__proto__ || Object.getPrototypeOf(IconButton)).apply(this, arguments));
  }

  _createClass(IconButton, [{
    key: '_getClassName',
    value: function _getClassName() {
      var colors = ['gray', 'blue', 'red', 'green'];
      var color = colors.indexOf(this.props.color) === -1 ? 'gray' : this.props.color;

      var className = ['kuc-icon-btn', this._getClassSize(), this.props.type === 'remove' && color === 'gray' ? 'hover-danger' : '', color];

      return className.join(' ').trim();
    }
  }, {
    key: '_getClassType',
    value: function _getClassType() {
      var classType = 'fa fa-plus';
      switch (this.props.type) {
        case 'insert':
          break;
        case 'remove':
          classType = 'fa fa-minus';
          break;
        case 'close':
          classType = 'fa fa-times';
          break;
      }
      return classType;
    }
  }, {
    key: '_getClassSize',
    value: function _getClassSize() {
      var className = this.props.size === 'small' ? 'small' : 'large';
      return className;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isVisible === false) {
        return null;
      }
      return React.createElement(
        'button',
        {
          className: this._getClassName(),
          onClick: this.props.onClick,
          disabled: this.props.isDisabled
        },
        React.createElement('i', { className: this._getClassType() })
      );
    }
  }]);

  return IconButton;
}(Component);

IconButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};
export default IconButton;