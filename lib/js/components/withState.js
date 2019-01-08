var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default (function (WrappedComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(Wrapper, _Component);

    function Wrapper(props) {
      _classCallCheck(this, Wrapper);

      var _this = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props));

      _this.state = Object.assign({}, props);
      return _this;
    }

    _createClass(Wrapper, [{
<<<<<<< HEAD
      key: 'render',
      value: function render() {
        return React.createElement(WrappedComponent, this.state);
=======
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(_ref) {
        var value = _ref.value;

        this.setState({ value: value });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return React.createElement(WrappedComponent, Object.assign({}, this.state, { ref: function ref(c) {
            return _this2.inner = c;
          } }));
>>>>>>> origin/v0.2.0
      }
    }]);

    return Wrapper;
  }(Component), _class.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.object])
  }, _temp;
});