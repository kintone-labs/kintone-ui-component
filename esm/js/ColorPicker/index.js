import * as tslib_1 from "tslib";
import Control from "../Control";
import ColorPickerStyle from "./ColorPickerStyle";
import { invertColor, isHexString } from './components/utils';
import Picker from './components/Picker';
import Message from '../../constant/Message';
var ColorPicker = /** @class */ (function (_super) {
    tslib_1.__extends(ColorPicker, _super);
    function ColorPicker(params) {
        var _this = _super.call(this) || this;
        _this._props = tslib_1.__assign({}, _this._props, {
            color: '#ff0000',
            onAccept: function (color) { },
            onCancel: function (color) { }
        });
        if (typeof params.isDisabled !== 'boolean') {
            delete params.isDisabled;
        }
        if (params) {
            _this._props = tslib_1.__assign({}, _this._props, params);
        }
        if (!isHexString(_this._props.color)) {
            throw new Error(Message.colorPicker.INVALID_COLOR);
        }
        if (typeof _this._props.isDisabled !== 'boolean') {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        _this.oldColor = _this._props.color;
        _this.focus = false;
        _this.element = document.createElement('div');
        _this._renderInput();
        _this._renderPicker();
        _this.rerender();
        return _this;
    }
    ColorPicker.prototype._renderInput = function () {
        var _this = this;
        var inputContainer = document.createElement('div');
        this.element.appendChild(inputContainer);
        this.inputElement = document.createElement('input');
        this.inputElement.value = this._props.color;
        if (this._props.isDisabled) {
            this.inputElement.disabled = this._props.isDisabled;
        }
        this.inputElement.onblur = function (e) {
            _this.focus = false;
            if (isHexString(e.target.value)) {
                _this._props.color = e.target.value;
                _this.rerender(['color', 'redraw']);
            }
        };
        this.inputElement.onfocus = function () {
            _this.focus = true;
            _this.Picker.setPickerDisplay(true);
        };
        document.addEventListener('mousedown', function (e) {
            if (!_this.element.contains(e.target)) {
                _this.Picker.setPickerDisplay(false);
            }
        });
        inputContainer.appendChild(this.inputElement);
        var inputStyle = this.getInputStyle();
        Object.assign(this.inputElement.style, inputStyle);
    };
    ColorPicker.prototype._renderPicker = function () {
        var _this = this;
        this.Picker = new Picker({
            hexString: this._props.color,
            onAccept: function (hexString) {
                _this._props.color = hexString;
                _this.oldColor = hexString;
                _this.rerender(['color']);
                _this._props.onChange && _this._props.onChange(_this._props.color);
            },
            onCancel: function () {
                _this._props.color = _this.oldColor;
                _this.rerender(['color', 'redraw']);
            },
            onChange: function (hexString, triggerOnChange) {
                _this._props.color = hexString;
                if (triggerOnChange) {
                    _this.rerender(['color', 'redraw']);
                }
                else {
                    _this.rerender(['color']);
                }
            }
        });
        this.element.appendChild(this.Picker.render());
    };
    ColorPicker.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this);
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('color') !== -1) {
            this.inputElement.value = this._props.color;
            var inputStyle = this.getInputStyle();
            this.Picker.setRGB(this._props.color);
            Object.assign(this.inputElement.style, inputStyle);
        }
        if (changedAttr.indexOf('isDisabled') !== -1 && this._props.isDisabled) {
            this.inputElement.disabled = this._props.isDisabled;
            if (this._props.isDisabled) {
                this.Picker.setPickerDisplay(false);
            }
        }
        if (changedAttr.indexOf('redraw') !== -1) {
            this.Picker.setHexString(this._props.color);
        }
    };
    ColorPicker.prototype.setColor = function (hexString) {
        if (isHexString(hexString)) {
            this._props.color = hexString;
            this.rerender(['color', 'redraw']);
        }
        else {
            throw new Error(Message.colorPicker.INVALID_COLOR);
        }
    };
    ColorPicker.prototype.getColor = function () {
        return this._props.color;
    };
    ColorPicker.prototype.getInputStyle = function () {
        var style = {
            backgroundColor: this._props.color,
            color: invertColor(this._props.color)
        };
        style = tslib_1.__assign({}, style, ColorPickerStyle.input);
        if (this.focus) {
            style = tslib_1.__assign({}, style, ColorPickerStyle.inputFocus);
        }
        return style;
    };
    ColorPicker.prototype.on = function (eventName, callback) {
        if (eventName === 'change') {
            this._props.onChange = callback;
        }
    };
    return ColorPicker;
}(Control));
export default ColorPicker;
