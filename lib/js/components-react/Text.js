var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Text = function (_Component) {
  _inherits(Text, _Component);

  function Text(props) {
    _classCallCheck(this, Text);

    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));

    _this._onChange = function (event) {
      var value = event.target.value;
      _this.props.onChange(value);
      _this.setState({ value: value });
    };

    _this.state = { value: props.value || '' };
    return _this;
  }

  _createClass(Text, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var value = _ref.value;

      var new_value = value || '';
      this.setState({ value: new_value });
    }
  }, {
    key: '_getValue',
    value: function _getValue() {
      return this.props.value;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isVisible === false) {
        return null;
      }

      return React.createElement(
        'div',
        { className: 'kuc-input-outer' },
        React.createElement('input', {
          type: 'text',
          value: this.state.value,
          className: 'kuc-input-text',
          onClick: this.props.onClick,
          onChange: this._onChange,
          disabled: this.props.isDisabled
        })
      );
    }
  }]);

  return Text;
}(Component);

Text.propTypes = {
  value: PropTypes.string,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};
Text.defaultProps = {
  onChange: function onChange(f) {
    return f;
  }
};
export default Text;