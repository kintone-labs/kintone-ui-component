var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import reactCSS from 'reactcss';
import PropTypes from 'prop-types';
import color from 'react-color/lib/helpers/color';
import colorPickerWrap from './colorPickerWrap';
import { EditableInput, Hue, Saturation } from 'react-color/lib/components/common';

var STATUS_CLOSE = 0;
var STATUS_OPEN = 1;
var STATUS_ACCEPT = 2;
var STATUS_CANCEL = 3;

var COLOR_PICKER_STYLES_NORMAL = reactCSS({
  'default': {
    HEXwrap: {
      position: 'relative'
    },
    HEXinput: {
      display: 'inline-block',
      boxsizing: 'border-box',
      width: '90%',
      marginLeft: '20%',
      marginBottom: '6px',
      paddingLeft: '10px',
      margin: '0',
      padding: '0 8px',
      height: '48px',
      outline: 'none',
      border: '1px solid #e3e7e8',
      backgroundColor: '#fff',
      boxShadow: '4px 4px 12px #f5f5f5 inset, -4px -4px 12px #f5f5f5 inset',
      fontSize: '14px',
      textIndent: '4px'
    },
    HEXlabel: {
      position: 'absolute',
      top: '15px',
      left: '0px',
      width: '14px',
      textTransform: 'uppercase',
      fontSize: '14px',
      height: '48px',
      lineHeight: '22px',
      marginBottom: '6px',
      textIndent: '2px'
    },
    RGBwrap: {
      position: 'relative'
    },
    RGBinput: {
      marginLeft: '40%',
      width: '40%',
      height: '16px',
      border: '1px solid #e3e7e8',
      boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
      marginBottom: '5px',
      fontSize: '13px',
      paddingLeft: '3px',
      marginRight: '10px'
    },
    RGBlabel: {
      left: '10px',
      width: '20px',
      textTransform: 'uppercase',
      fontSize: '13px',
      height: '18px',
      lineHeight: '22px',
      position: 'absolute'
    }
  }
});

var COLOR_PICKER_STYLES_DISABLED = reactCSS({
  'default': {
    HEXinput: {
      display: 'inline-block',
      boxsizing: 'border-box',
      width: '90%',
      marginLeft: '20%',
      marginBottom: '6px',
      paddingLeft: '10px',
      margin: '0',
      padding: '0 8px',
      height: '48px',
      outline: 'none',
      border: '1px solid #e3e7e8',
      fontSize: '14px',
      textIndent: '4px',

      cursor: 'not-allowed',
      backgroundColor: '#E7E6E6',
      boxShadow: 'none'
    }
  }
});

export var ColorPicker = function (_React$PureComponent) {
  _inherits(ColorPicker, _React$PureComponent);

  function ColorPicker(props) {
    _classCallCheck(this, ColorPicker);

    var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));

    _initialiseProps.call(_this);

    var data = props;

    _this.state = {
      currentColor: {
        hex: data.hex,
        hsl: data.hsl,
        hsv: data.hsv,
        rgb: data.rgb
      },
      status: STATUS_CLOSE
    };
    return _this;
  }

  _createClass(ColorPicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this._hex !== null && this._hex !== undefined) {
        this._hex.input.disabled = this.props.isDisabled === true;
      }
      if (this.props.isDisabled) return false;
      window.addEventListener('mousedown', this._handleMouseDown);
      window.addEventListener('pointerdown', this._handleMouseDown);
      return true;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this._hex !== null && this._hex !== undefined) {
        this._hex.input.disabled = this.props.isDisabled === true;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.isDisabled) return false;
      window.removeEventListener('mousedown', this._handleMouseDown);
      window.removeEventListener('pointerdown', this._handleMouseDown);
      return true;
    }
  }, {
    key: '_replaceHex',
    value: function _replaceHex(hex) {
      return hex.replace('#', '');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var thisProps = this.props;

      if (thisProps.isColorSetted) {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state = Object.assign({}, this.state, { currentColor: {
            hex: thisProps.hex,
            hsl: thisProps.hsl,
            hsv: thisProps.hsv,
            rgb: thisProps.rgb
          } });
      }

      if (this.props.isVisible === false) {
        return null;
      }

      if (this.state.status === STATUS_CANCEL) {
        this.props = Object.assign({}, this.props, {
          hex: this.state.currentColor.hex,
          hsl: this.state.currentColor.hsl,
          hsv: this.state.currentColor.hsv,
          rgb: this.state.currentColor.rgb
        });
      }

      if (this.props.isDisabled || this.state.status === STATUS_ACCEPT || this.state.status === STATUS_CANCEL) {
        if (this.state.status !== STATUS_CLOSE) {
          this.setState({ status: STATUS_CLOSE });
        }
      }

      var hexInputCss = null;
      if (this.props.isDisabled) {
        hexInputCss = {
          wrap: COLOR_PICKER_STYLES_NORMAL.HEXwrap,
          input: COLOR_PICKER_STYLES_DISABLED.HEXinput,
          label: COLOR_PICKER_STYLES_NORMAL.HEXlabel
        };
      } else {
        hexInputCss = {
          wrap: COLOR_PICKER_STYLES_NORMAL.HEXwrap,
          input: COLOR_PICKER_STYLES_NORMAL.HEXinput,
          label: COLOR_PICKER_STYLES_NORMAL.HEXlabel
        };
      }
      var rgbInputCss = {
        wrap: COLOR_PICKER_STYLES_NORMAL.RGBwrap,
        input: COLOR_PICKER_STYLES_NORMAL.RGBinput,
        label: COLOR_PICKER_STYLES_NORMAL.RGBlabel
      };

      return React.createElement(
        'div',
        {
          ref: function ref(input) {
            _this2._root = input;
          },
          className: 'kuc-colorpicker-outer'
        },
        React.createElement(
          'div',
          { className: 'kuc-colorpicker-fields', onClick: this._openColorPicker },
          React.createElement(EditableInput, {
            style: hexInputCss,
            label: '#',
            ref: function ref(input) {
              _this2._hex = input;
            },
            value: this._replaceHex(thisProps.hex),
            onChange: this._handleEditableInputChange
          })
        ),
        this.state.status === STATUS_OPEN ? React.createElement(
          'div',
          { className: 'kuc-colorpicker-pop-popover' },
          React.createElement(
            'div',
            { className: 'kuc-colorpicker-pop-outer' },
            React.createElement(
              'div',
              { className: 'kuc-colorpicker-pop-body' },
              React.createElement(
                'div',
                { className: 'kuc-colorpicker-saturation' },
                React.createElement(Saturation, {
                  hsl: thisProps.hsl,
                  hsv: thisProps.hsv,
                  onChange: this._handleSHVChange
                })
              ),
              React.createElement(
                'div',
                { className: 'kuc-colorpicker-hue' },
                React.createElement(Hue, {
                  direction: 'vertical',
                  hsl: thisProps.hsl,
                  onChange: this._handleSHVChange
                })
              ),
              React.createElement(
                'div',
                { className: 'kuc-colorpicker-fields' },
                React.createElement(EditableInput, {
                  style: rgbInputCss,
                  label: 'r',
                  ref: function ref(input) {
                    _this2._r = input;
                  },
                  value: thisProps.rgb.r,
                  onChange: this._handleEditableInputChange
                }),
                React.createElement(EditableInput, {
                  style: rgbInputCss,
                  label: 'g',
                  ref: function ref(input) {
                    _this2._g = input;
                  },
                  value: thisProps.rgb.g,
                  onChange: this._handleEditableInputChange
                }),
                React.createElement(EditableInput, {
                  style: rgbInputCss,
                  label: 'b',
                  ref: function ref(input) {
                    _this2._b = input;
                  },
                  value: thisProps.rgb.b,
                  onChange: this._handleEditableInputChange
                }),
                React.createElement('div', { className: 'kuc-colorpicker-divider' }),
                React.createElement(EditableInput, {
                  style: rgbInputCss,
                  label: 'h',
                  ref: function ref(input) {
                    _this2._h = input;
                  },
                  value: Math.round(thisProps.hsv.h),
                  onChange: this._handleEditableInputChange
                }),
                React.createElement(EditableInput, {
                  style: rgbInputCss,
                  label: 's',
                  ref: function ref(input) {
                    _this2._s = input;
                  },
                  value: Math.round(thisProps.hsv.s * 100),
                  onChange: this._handleEditableInputChange
                }),
                React.createElement(EditableInput, {
                  style: rgbInputCss,
                  label: 'v',
                  ref: function ref(input) {
                    _this2._v = input;
                  },
                  value: Math.round(thisProps.hsv.v * 100),
                  onChange: this._handleEditableInputChange
                })
              )
            ),
            React.createElement(
              'div',
              { className: 'kuc-colorpicker-pop-bottom' },
              React.createElement(
                'div',
                { className: 'kuc-colorpicker-button kuc-colorpicker-button-ok', onClick: this._handleAccept },
                'OK'
              ),
              React.createElement(
                'div',
                { className: 'kuc-colorpicker-button kuc-colorpicker-button-cancel', onClick: this._handleCancel },
                'Cancel'
              )
            )
          )
        ) : null
      );
    }
  }]);

  return ColorPicker;
}(React.PureComponent);

ColorPicker.propTypes = {
  color: PropTypes.string,
  isColorSetted: PropTypes.bool,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func
};
ColorPicker.defaultProps = {
  onChange: function onChange(f) {
    return f;
  }
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this._handleAccept = function () {
    var data = _this3.props;

    _this3.setState({ currentColor: {
        hex: data.hex,
        hsl: data.hsl,
        hsv: data.hsv,
        rgb: data.rgb
      },
      status: STATUS_ACCEPT });
    var colors = color.toState({ source: 'hex', hex: data.hex });
    _this3.props.onAccept && _this3.props.onAccept(colors);
  };

  this._handleCancel = function () {
    _this3.setState({ status: STATUS_CANCEL });

    var colors = color.toState({ source: 'hex', hex: _this3.state.currentColor.hex });
    _this3.props.onCancel && _this3.props.onCancel(colors);
  };

  this._handleSHVChange = function (data, e) {
    _this3._clearInputFocus();
    _this3.props.onChange(data, e);
  };

  this._handleMouseDown = function (e) {
    if (_this3._containDom(_this3._root, e.target) === false) {
      if (_this3._hex !== null && _this3._hex !== undefined) {
        _this3._hex.input.blur();
      }
      _this3.setState({ status: STATUS_CLOSE });
      if (_this3._hex.input.value === _this3._replaceHex(_this3.state.currentColor.hex).toUpperCase()) return;
      var colors = color.toState({ source: 'hex', hex: _this3.state.currentColor.hex });
      _this3.props.onCancel && _this3.props.onCancel(colors);
      _this3.setState({ status: STATUS_CANCEL });
    }
  };

  this._handleEditableInputChange = function (data, e) {
    if (data['#'] === '') {
      _this3.props.onChange({
        hex: data['#'],
        source: 'hex'
      }, e);
      return;
    }

    if (data['#']) {
      if (color.isValidHex(data['#'])) {
        _this3.props.onChange({
          hex: data['#'],
          source: 'hex'
        }, e);
      }
    } else if (data.r || data.g || data.b) {
      var thisProps = _this3.props;
      _this3.props.onChange({
        r: data.r || thisProps.rgb.r,
        g: data.g || thisProps.rgb.g,
        b: data.b || thisProps.rgb.b,
        source: 'rgb'
      }, e);
    } else if (data.h || data.s || data.v) {
      var _thisProps = _this3.props;
      _this3.props.onChange({
        h: data.h || _thisProps.hsv.h,
        s: data.s || _thisProps.hsv.s,
        v: data.v || _thisProps.hsv.v,
        source: 'hsv'
      }, e);
    }
  };

  this._openColorPicker = function () {
    if (_this3.props.isDisabled) return false;
    _this3.setState({ status: STATUS_OPEN });
    return true;
  };

  this._clearInputFocus = function () {
    _this3._hex.input.blur();
    _this3._r.input.blur();
    _this3._g.input.blur();
    _this3._b.input.blur();
    _this3._h.input.blur();
    _this3._s.input.blur();
    _this3._v.input.blur();
  };

  this._containDom = function (root, dom) {
    var point = dom;
    while (point !== undefined && point !== null && point.tagName.toUpperCase() !== 'BODY') {
      if (point === root) {
        return true;
      }
      point = point.parentNode;
    }
    return false;
  };
};

export default colorPickerWrap(ColorPicker);