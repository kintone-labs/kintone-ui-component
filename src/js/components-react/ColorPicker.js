import React from 'react';
import reactCSS from 'reactcss';
import PropTypes from 'prop-types';
import color from 'react-color/lib/helpers/color';
import colorPickerWrap from './colorPickerWrap';
import {EditableInput, Hue, Saturation} from 'react-color/lib/components/common';

const STATUS_CLOSE = 0;
const STATUS_OPEN = 1;
const STATUS_ACCEPT = 2;
const STATUS_CANCEL = 3;

const COLOR_PICKER_STYLES_NORMAL = reactCSS({
  'default': {
    HEXwrap: {
      position: 'relative',
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
      textIndent: '4px',
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
      textIndent: '2px',
    },
    RGBwrap: {
      position: 'relative',
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
      marginRight: '10px',
    },
    RGBlabel: {
      left: '10px',
      width: '20px',
      textTransform: 'uppercase',
      fontSize: '13px',
      height: '18px',
      lineHeight: '22px',
      position: 'absolute',
    }
  }
});

const COLOR_PICKER_STYLES_DISABLED = reactCSS({
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
      boxShadow: 'none',
    }
  }
});

export class ColorPicker extends React.PureComponent {

    static propTypes = {
      color: PropTypes.string,
      isColorSetted: PropTypes.bool,
      isVisible: PropTypes.bool,
      isDisabled: PropTypes.bool,
      onChange: PropTypes.func,
      onAccept: PropTypes.func,
      onCancel: PropTypes.func
    };

    static defaultProps = {
      onChange: f => f
    };

    constructor(props) {
      super();
      const data = props;

      this.state = {
        currentColor: {
          hex: data.hex,
          hsl: data.hsl,
          hsv: data.hsv,
          rgb: data.rgb
        },
        status: STATUS_CLOSE
      };
    }

    componentDidMount() {
      if (this._hex !== null && this._hex !== undefined) {
        this._hex.input.disabled = (this.props.isDisabled === true);
      }
      if (this.props.isDisabled) return false;
      window.addEventListener('mousedown', this._handleMouseDown);
      window.addEventListener('pointerdown', this._handleMouseDown);
      return true;
    }

    componentDidUpdate() {
      if (this._hex !== null && this._hex !== undefined) {
        this._hex.input.disabled = (this.props.isDisabled === true);
      }
    }

    componentWillUnmount() {
      if (this.props.isDisabled) return false;
      window.removeEventListener('mousedown', this._handleMouseDown);
      window.removeEventListener('pointerdown', this._handleMouseDown);
      return true;
    }

    _handleAccept = () => {
      const data = this.props;

      this.setState({currentColor: {
        hex: data.hex,
        hsl: data.hsl,
        hsv: data.hsv,
        rgb: data.rgb
      },
      status: STATUS_ACCEPT});
      const colors = color.toState({source: 'hex', hex: data.hex});
      this.props.onAccept && this.props.onAccept(colors);
    };

    _handleCancel = () => {
      this.setState({status: STATUS_CANCEL});

      const colors = color.toState({source: 'hex', hex: this.state.currentColor.hex});
      this.props.onCancel && this.props.onCancel(colors);
    };

    _handleSHVChange = (data, e) => {
      this._clearInputFocus();
      this.props.onChange(data, e);
    };

    _handleMouseDown = (e) => {
      if (this._containDom(this._root, e.target) === false) {
        if (this._hex !== null && this._hex !== undefined) {
          this._hex.input.blur();

          this.setState({status: STATUS_CLOSE});
          if (this._hex.input.value === this._replaceHex(this.state.currentColor.hex).toUpperCase()) return;
          const colors = color.toState({source: 'hex', hex: this.state.currentColor.hex});
          this.props.onCancel && this.props.onCancel(colors);
          this.setState({status: STATUS_CANCEL});
        }
      }
    }

    _handleEditableInputChange = (data, e) => {
      if (data['#'] === '') {
        this.props.onChange({
          hex: data['#'],
          source: 'hex',
        }, e);
        return;
      }

      if (data['#']) {
        if (color.isValidHex(data['#'])) {
          this.props.onChange({
            hex: data['#'],
            source: 'hex',
          }, e);
        }
      } else if (data.r || data.g || data.b) {
        const thisProps = this.props;
        this.props.onChange({
          r: data.r || thisProps.rgb.r,
          g: data.g || thisProps.rgb.g,
          b: data.b || thisProps.rgb.b,
          source: 'rgb',
        }, e);
      } else if (data.h || data.s || data.v) {
        const thisProps = this.props;
        this.props.onChange({
          h: data.h || thisProps.hsv.h,
          s: data.s || thisProps.hsv.s,
          v: data.v || thisProps.hsv.v,
          source: 'hsv',
        }, e);
      }
    };

    _openColorPicker = () => {
      if (this.props.isDisabled) return false;
      this.setState({status: STATUS_OPEN});
      return true;
    };

    _clearInputFocus = () => {
      this._hex.input.blur();
      this._r.input.blur();
      this._g.input.blur();
      this._b.input.blur();
      this._h.input.blur();
      this._s.input.blur();
      this._v.input.blur();
    }

    _containDom = (root, dom) => {
      let point = dom;
      while (point !== undefined && point !== null 
        && point.tagName !== undefined && point.tagName !== null && point.tagName.toUpperCase() !== 'BODY') {
        if (point === root) {
          return true;
        }
        point = point.parentNode;
      }
      return false;
    }

    _replaceHex(hex) {
      return hex.replace('#', '');
    }

    render() {
      const thisProps = this.props;

      if (thisProps.isColorSetted) {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state = {
          ...this.state,
          ...{currentColor: {
            hex: thisProps.hex,
            hsl: thisProps.hsl,
            hsv: thisProps.hsv,
            rgb: thisProps.rgb
          }}
        };
      }

      if (this.props.isVisible === false) {
        return null;
      }

      if (this.state.status === STATUS_CANCEL) {
        this.props = {
          ...this.props,
          hex: this.state.currentColor.hex,
          hsl: this.state.currentColor.hsl,
          hsv: this.state.currentColor.hsv,
          rgb: this.state.currentColor.rgb,
        };
      }

      if (this.props.isDisabled || this.state.status === STATUS_ACCEPT || this.state.status === STATUS_CANCEL) {
        if (this.state.status !== STATUS_CLOSE) {
          this.setState({status: STATUS_CLOSE});
        }
      }

      let hexInputCss = null;
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
      const rgbInputCss = {
        wrap: COLOR_PICKER_STYLES_NORMAL.RGBwrap,
        input: COLOR_PICKER_STYLES_NORMAL.RGBinput,
        label: COLOR_PICKER_STYLES_NORMAL.RGBlabel
      };

      return (
        <div
          ref={(input) => {
            this._root = input;
          }}
          className="kuc-colorpicker-outer"
        >
          <div className="kuc-colorpicker-fields" onClick={this._openColorPicker} >
            <EditableInput
              style={hexInputCss}
              label="#"
              ref={(input) => {
                this._hex = input;
              }}
              value={this._replaceHex(thisProps.hex)}
              onChange={this._handleEditableInputChange}
            />
          </div>

          { this.state.status === STATUS_OPEN ?
            <div className="kuc-colorpicker-pop-popover" >
              <div className="kuc-colorpicker-pop-outer">
                <div className="kuc-colorpicker-pop-body" >
                  <div className="kuc-colorpicker-saturation">
                    <Saturation
                      hsl={thisProps.hsl}
                      hsv={thisProps.hsv}
                      onChange={this._handleSHVChange}
                    />
                  </div>
                  <div className="kuc-colorpicker-hue">
                    <Hue
                      direction="vertical"
                      hsl={thisProps.hsl}
                      onChange={this._handleSHVChange}
                    />
                  </div>
                  <div className="kuc-colorpicker-fields">
                    <EditableInput
                      style={rgbInputCss}
                      label="r"
                      ref={(input) => {
                        this._r = input;
                      }}
                      value={thisProps.rgb.r}
                      onChange={this._handleEditableInputChange}
                    />
                    <EditableInput
                      style={rgbInputCss}
                      label="g"
                      ref={(input) => {
                        this._g = input;
                      }}
                      value={thisProps.rgb.g}
                      onChange={this._handleEditableInputChange}
                    />
                    <EditableInput
                      style={rgbInputCss}
                      label="b"
                      ref={(input) => {
                        this._b = input;
                      }}
                      value={thisProps.rgb.b}
                      onChange={this._handleEditableInputChange}
                    />
                    <div className="kuc-colorpicker-divider" />
                    <EditableInput
                      style={rgbInputCss}
                      label="h"
                      ref={(input) => {
                        this._h = input;
                      }}
                      value={Math.round(thisProps.hsv.h)}
                      onChange={this._handleEditableInputChange}
                    />
                    <EditableInput
                      style={rgbInputCss}
                      label="s"
                      ref={(input) => {
                        this._s = input;
                      }}
                      value={Math.round(thisProps.hsv.s * 100)}
                      onChange={this._handleEditableInputChange}
                    />
                    <EditableInput
                      style={rgbInputCss}
                      label="v"
                      ref={(input) => {
                        this._v = input;
                      }}
                      value={Math.round(thisProps.hsv.v * 100)}
                      onChange={this._handleEditableInputChange}
                    />
                  </div>
                </div>
                <div className="kuc-colorpicker-pop-bottom">
                  <div className="kuc-colorpicker-button kuc-colorpicker-button-ok" onClick={this._handleAccept}>OK</div>
                  <div className="kuc-colorpicker-button kuc-colorpicker-button-cancel" onClick={this._handleCancel}>Cancel</div>
                </div>
              </div>
            </div> : null}
        </div>
      );
    }
}

export default colorPickerWrap(ColorPicker);
