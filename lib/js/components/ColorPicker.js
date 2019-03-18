var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Control from './Control';
import ColorPickerReact from '../components-react/ColorPicker';
import React from 'react';
import Message from '../constant/Message';

var validEventNames = ['changeComplete', 'accept', 'cancel'];

var ColorPicker = function (_Control) {
  _inherits(ColorPicker, _Control);

  function ColorPicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ColorPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call.apply(_ref, [this].concat(args))), _this), _this._reactComponentClass = ColorPickerReact, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ColorPicker, [{
    key: '_getReactElement',
    value: function _getReactElement() {
      var _this2 = this;

      var Component = this._reactComponentClass;
      // eslint-disable-next-line react/jsx-filename-extension
      var reactElement = React.createElement(Component, Object.assign({}, this.props, { ref: function ref(el) {
          return _this2._reactObject = el;
        } }));
      return reactElement;
    }
  }, {
    key: 'on',
    value: function on(eventName, callback) {
      if (!validEventNames.some(function (event) {
        return event === eventName;
      })) {
        throw new Error(Message.control.INVALID_EVENT + ' ' + validEventNames.join(','));
      }
      this._reactObject.setState(_defineProperty({}, 'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1), callback));
    }
  }, {
    key: 'setColor',
    value: function setColor(color) {
      this._setState({ color: color });
    }
  }, {
    key: 'getColor',
    value: function getColor() {
      return this._reactObject.inner.state.currentColor.hex;
    }
  }]);

  return ColorPicker;
}(Control);

export default ColorPicker;