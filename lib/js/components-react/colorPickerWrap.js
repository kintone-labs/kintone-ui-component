var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import debounce from 'lodash/debounce';
import color from 'react-color/lib/helpers/color';

export var ColorWrap = function ColorWrap(Picker) {
  var COLOR_EMPTY = {
    hex: '',
    hsl: { a: '',
      h: '',
      l: '',
      s: ''
    },
    hsv: { a: '',
      h: '',
      s: '',
      v: ''
    },
    oldHue: '',
    rgb: { a: '',
      b: '',
      g: '',
      r: ''
    }
  };

  var ColorPicker = function (_PureComponent) {
    _inherits(ColorPicker, _PureComponent);

    function ColorPicker(props) {
      _classCallCheck(this, ColorPicker);

      var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));

      _this.handleChange = function (data, event) {
        if (data.source === 'hex' && data.hex === '') {
          _this.setState({
            color: '',
            change: true
          });
          return true;
        }
        var isValidColor = color.simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = color.toState(data, data.h || _this.state.oldHue);
          _this.setState(Object.assign({}, colors, { change: true }));
          _this.state.onChangeComplete && _this.debounce(_this.state.onChangeComplete, colors, event);
          _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors, event);
        }
        return true;
      };

      if (props.hasOwnProperty('color')) {
        _this.state = Object.assign({}, color.toState(props.color, 0));
      } else {
        _this.state = COLOR_EMPTY;
      }

      _this.debounce = debounce(function (fn, data, event) {
        fn(data, event);
      }, 100);
      return _this;
    }

    _createClass(ColorPicker, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var isColorSetted = this.state.hasOwnProperty('color');
        var isChanging = this.state.hasOwnProperty('change');

        if (isColorSetted === false) {
          if (!isChanging && this.state.hasOwnProperty('hex') && this.props.hasOwnProperty('color') && this.props.color !== this.state.hex) {
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.color = this.props.color;
          }
        }

        if (isChanging) {
          delete this.state.change;
        }

        isColorSetted = this.state.hasOwnProperty('color');
        if (isColorSetted) {
          if (this.state.color === '') {
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state = Object.assign({}, this.state, COLOR_EMPTY);
            if (isChanging) {
              isColorSetted = false;
            }
          } else {
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state = Object.assign({}, this.state, color.toState(this.state.color, 0));
          }
          delete this.state.color;
        }
        this.props.color = this.state.hex;

        return React.createElement(Picker, Object.assign({}, this.props, this.state, {
          isColorSetted: isColorSetted,
          onChange: this.handleChange,
          ref: function ref(c) {
            return _this2.inner = c;
          }
        }));
      }
    }]);

    return ColorPicker;
  }(PureComponent);

  ColorPicker.propTypes = Object.assign({}, Picker.propTypes);

  ColorPicker.defaultProps = Object.assign({}, Picker.defaultProps);

  return ColorPicker;
};

export default ColorWrap;