<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';

var Alert = function Alert(props) {
  var _getClassName = function _getClassName() {
    var className = ['kuc-alert', props.type === 'success' ? 'bg-success' : 'bg-danger'];

    return className.join(' ');
  };

  var _onClick = function _onClick() {
    if (props.isDisabled) {
      return null;
=======
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Alert = function (_Component) {
  _inherits(Alert, _Component);

  function Alert() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Alert.__proto__ || Object.getPrototypeOf(Alert)).call.apply(_ref, [this].concat(args))), _this), _this._onClick = function () {
      if (_this.props.isDisabled) {
        return null;
      }

      _this.props.onClick();
      return true;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alert, [{
    key: '_getClassName',
    value: function _getClassName() {
      var className = ['kuc-alert', this.props.type === 'success' ? 'bg-success' : 'bg-danger'];

      return className.join(' ');
>>>>>>> origin/v0.2.0
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isVisible === false) {
        return null;
      }

      return React.createElement(
        'div',
        {
          className: this._getClassName(),
          onClick: this._onClick,
          onChange: this.props.onChange
        },
        this.props.text
      );
    }
  }]);

<<<<<<< HEAD
    props.onClick();
    return true;
  };

  if (props.isVisible === false) {
    return null;
  }

  return React.createElement(
    'div',
    {
      className: _getClassName(),
      onClick: _onClick,
      onChange: props.onChange
    },
    props.text
  );
};
=======
  return Alert;
}(Component);

>>>>>>> origin/v0.2.0
Alert.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};
Alert.defaultProps = {
  onClick: function onClick(f) {
    return f;
  }
};
export default Alert;