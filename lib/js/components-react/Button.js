<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';

var Button = function Button(props) {
  var _getClassName = function _getClassName() {
    return ['kuc-btn', props.type !== 'submit' ? 'normal' : '', props.type === 'submit' ? 'submit' : ''].join(' ').trim();
  };
  if (props.isVisible === false) {
    return null;
  }

  return React.createElement(
    'button',
    {
      className: _getClassName(),
      onClick: props.onClick,
      onChange: props.onChange,
      disabled: props.isDisabled
    },
    props.text
  );
};
=======
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: '_getClassName',
    value: function _getClassName() {
      return ['kuc-btn', this.props.type !== 'submit' ? 'normal' : '', this.props.type === 'submit' ? 'submit' : ''].join(' ').trim();
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
          onChange: this.props.onChange,
          disabled: this.props.isDisabled
        },
        this.props.text
      );
    }
  }]);

  return Button;
}(Component);

>>>>>>> origin/v0.2.0
Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};
export default Button;