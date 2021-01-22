import { __assign, __extends } from "tslib";
import Control from '../../Control';
import TextInputStyle from './TextInputStyle';
import { rgbToHex, hsvToRgb } from './utils';
import Message from '../../../constant/Message';
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput(params) {
        var _this = _super.call(this) || this;
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        _this.element = document.createElement('div');
        var labelContainer = document.createElement('span');
        Object.assign(labelContainer.style, TextInputStyle.label);
        labelContainer.append(_this._props.label);
        _this.element.appendChild(labelContainer);
        var inputContainer = document.createElement('span');
        _this.inputElement = document.createElement('input');
        Object.assign(_this.inputElement.style, TextInputStyle.input);
        _this.inputElement.value = _this._props.value;
        _this.inputElement.onchange = function (e) {
            _this._props.onChange(e.target.value);
        };
        inputContainer.appendChild(_this.inputElement);
        _this.element.appendChild(inputContainer);
        return _this;
    }
    TextInput.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this);
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('value') !== -1) {
            this.inputElement.value = this._props.value;
        }
    };
    TextInput.prototype.setValue = function (value) {
        this._props.value = value;
        this.rerender(['value']);
    };
    return TextInput;
}(Control));
var RGBInput = /** @class */ (function (_super) {
    __extends(RGBInput, _super);
    function RGBInput(params) {
        var _this = _super.call(this) || this;
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        _this.element = document.createElement('div');
        _this.rInput = new TextInput({
            label: 'R',
            value: _this._props.rgb.r.toString(),
            onChange: function (value) {
                var intValue = parseInt(value || '0', 10);
                if (isNaN(value) || intValue < 0 || intValue > 255) {
                    throw new Error(Message.colorPicker.INVALID_COLOR);
                }
                _this._props.rgb.r = intValue;
                _this._props.onChange(rgbToHex(_this._props.rgb.r, _this._props.rgb.g, _this._props.rgb.b));
            },
            isVisible: true
        });
        _this.element.appendChild(_this.rInput.render());
        _this.gInput = new TextInput({
            label: 'G',
            value: _this._props.rgb.g.toString(),
            onChange: function (value) {
                var intValue = parseInt(value || '0', 10);
                if (isNaN(value) || intValue < 0 || intValue > 255) {
                    throw new Error(Message.colorPicker.INVALID_COLOR);
                }
                _this._props.rgb.g = intValue;
                _this._props.onChange(rgbToHex(_this._props.rgb.r, _this._props.rgb.g, _this._props.rgb.b));
            },
            isVisible: true
        });
        _this.element.appendChild(_this.gInput.render());
        _this.bInput = new TextInput({
            label: 'B',
            value: _this._props.rgb.b.toString(),
            onChange: function (value) {
                var intValue = parseInt(value || '0', 10);
                if (isNaN(value) || intValue < 0 || intValue > 255) {
                    throw new Error(Message.colorPicker.INVALID_COLOR);
                }
                _this._props.rgb.b = intValue;
                _this._props.onChange(rgbToHex(_this._props.rgb.r, _this._props.rgb.g, _this._props.rgb.b));
            },
            isVisible: true
        });
        _this.element.appendChild(_this.bInput.render());
        return _this;
    }
    RGBInput.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this);
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('rgb') !== -1) {
            this.rInput.setValue(this._props.rgb.r.toString());
            this.gInput.setValue(this._props.rgb.g.toString());
            this.bInput.setValue(this._props.rgb.b.toString());
        }
    };
    RGBInput.prototype.setRGB = function (rgb) {
        this._props.rgb = rgb;
        this.rerender(['rgb']);
    };
    return RGBInput;
}(Control));
var HSVInput = /** @class */ (function (_super) {
    __extends(HSVInput, _super);
    function HSVInput(params) {
        var _this = _super.call(this) || this;
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        _this.element = document.createElement('div');
        _this.hInput = new TextInput({
            label: 'H',
            value: _this._props.hsv.h.toFixed(1),
            onChange: function (value) {
                var floatValue = parseFloat(value || '0');
                if (isNaN(value) || floatValue < 0 || floatValue > 1) {
                    throw new Error(Message.colorPicker.INVALID_COLOR);
                }
                _this._props.hsv.h = floatValue;
                var rgb = hsvToRgb(_this._props.hsv.h, _this._props.hsv.s, _this._props.hsv.v);
                _this._props.onChange(rgbToHex(rgb.r, rgb.g, rgb.b));
            },
            isVisible: true
        });
        _this.element.appendChild(_this.hInput.render());
        _this.sInput = new TextInput({
            label: 'S',
            value: _this._props.hsv.s.toFixed(1),
            onChange: function (value) {
                var floatValue = parseFloat(value || '0');
                if (isNaN(value) || floatValue < 0 || floatValue > 1) {
                    throw new Error(Message.colorPicker.INVALID_COLOR);
                }
                _this._props.hsv.s = floatValue;
                var rgb = hsvToRgb(_this._props.hsv.h, _this._props.hsv.s, _this._props.hsv.v);
                _this._props.onChange(rgbToHex(rgb.r, rgb.g, rgb.b));
            },
            isVisible: true
        });
        _this.element.appendChild(_this.sInput.render());
        _this.vInput = new TextInput({
            label: 'V',
            value: _this._props.hsv.v.toFixed(1),
            onChange: function (value) {
                var floatValue = parseFloat(value || '0');
                if (isNaN(value) || floatValue < 0 || floatValue > 1) {
                    throw new Error(Message.colorPicker.INVALID_COLOR);
                }
                _this._props.hsv.v = floatValue;
                var rgb = hsvToRgb(_this._props.hsv.h, _this._props.hsv.s, _this._props.hsv.v);
                _this._props.onChange(rgbToHex(rgb.r, rgb.g, rgb.b));
            },
            isVisible: true
        });
        _this.element.appendChild(_this.vInput.render());
        return _this;
    }
    HSVInput.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this);
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('hsv') !== -1) {
            this.hInput.setValue(this._props.hsv.h.toFixed(1));
            this.sInput.setValue(this._props.hsv.s.toFixed(1));
            this.vInput.setValue(this._props.hsv.v.toFixed(1));
        }
    };
    HSVInput.prototype.setHSV = function (hsv) {
        this._props.hsv = hsv;
        this.rerender(['hsv']);
    };
    return HSVInput;
}(Control));
export { RGBInput, HSVInput };
