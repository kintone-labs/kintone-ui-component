var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Control from './Control';
import DateTimeReact from '../components-react/DateTime';

var DateTime = function (_Control) {
  _inherits(DateTime, _Control);

  function DateTime() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DateTime);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateTime.__proto__ || Object.getPrototypeOf(DateTime)).call.apply(_ref, [this].concat(args))), _this), _this._reactComponentClass = DateTimeReact, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateTime, [{
    key: 'getValue',
    value: function getValue() {
      return this._getState().value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this._setState({ value: value });
    }
  }, {
    key: 'getLocale',
    value: function getLocale() {
      return this._getState().locale;
    }
  }, {
    key: 'setLocale',
    value: function setLocale(locale) {
      this._setState({ locale: locale });
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this._getState().type;
    }
  }, {
    key: 'setType',
    value: function setType(type) {
      this._setState({ type: type });
    }
  }, {
    key: 'geTimeFormat',
    value: function geTimeFormat() {
      return this._getState().timeFormat;
    }
  }, {
    key: 'setTimeFormat',
    value: function setTimeFormat(timeFormat) {
      this._setState({ timeFormat: timeFormat });
    }
  }, {
    key: 'getTimeIntervals',
    value: function getTimeIntervals() {
      return this._getState().timeIntervals;
    }
  }, {
    key: 'setTimeIntervals',
    value: function setTimeIntervals(timeIntervals) {
      this._setState({ timeIntervals: timeIntervals });
    }
  }]);

  return DateTime;
}(Control);

export default DateTime;