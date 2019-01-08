<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';

var Spinner = function Spinner(props) {
  if (props.isVisible === false) {
    return null;
  }

  return React.createElement(
    'div',
    { className: 'kuc-spinner-outer' },
    React.createElement(
      'div',
      { className: 'kuc-spinner' },
      React.createElement('div', { className: 'kuc-loader' })
    )
  );
};
=======
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Spinner = function (_Component) {
  _inherits(Spinner, _Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: '_onClick',
    value: function _onClick() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isVisible === false) {
        return null;
      }

      return React.createElement(
        'div',
        { className: 'kuc-spinner-outer' },
        React.createElement(
          'div',
          { className: 'kuc-spinner' },
          React.createElement('div', { className: 'kuc-loader' })
        )
      );
    }
  }]);

  return Spinner;
}(Component);

>>>>>>> origin/v0.2.0
Spinner.propTypes = {
  isVisible: PropTypes.bool
};
Spinner.defaultProps = {
  isVisible: false
};
export default Spinner;