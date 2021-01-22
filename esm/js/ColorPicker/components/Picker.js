import { __assign, __extends } from "tslib";
import Control from '../../Control';
import PickerStyle from './PickerStyle';
import SaturationSpectrum from './SaturationSpectrum';
import HueSpectrum from './HueSpectrum';
import { hexToRgb, rgbToHex, rgbToHsv } from './utils';
import { RGBInput, HSVInput } from './TextInput';
import Button from '../../../js/Button';
var Picker = /** @class */ (function (_super) {
    __extends(Picker, _super);
    function Picker(params) {
        var _this = _super.call(this) || this;
        _this._props = __assign(__assign({}, _this._props), {
            hexString: '',
            isDisabled: false,
            isVisible: false
        });
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        _this.element = document.createElement('div');
        Object.assign(_this.element.style, PickerStyle.container);
        _this.rerender();
        _this._initSaturation();
        _this._initHue();
        _this._renderSaturation();
        _this._renderHue();
        _this._renderInput();
        _this._renderButton();
        return _this;
    }
    Picker.prototype._initHue = function () {
        var _this = this;
        this.hueSpectrum = new HueSpectrum({
            width: 30,
            height: 200,
            onSelect: function (newRgb) {
                _this._props.hexString = rgbToHex(newRgb.r, newRgb.g, newRgb.b);
                _this._props.onChange && _this._props.onChange(_this._props.hexString, true);
            }
        });
    };
    Picker.prototype._initSaturation = function () {
        var _this = this;
        this.saturationBackground = hexToRgb(this._props.hexString);
        this.saturationSpectrum = new SaturationSpectrum({
            width: 200,
            height: 200,
            rgb: this.saturationBackground,
            onSelect: function (rgb, triggerOnChange) {
                _this._props.hexString = rgbToHex(rgb.r, rgb.g, rgb.b);
                _this._props.onChange && _this._props.onChange(_this._props.hexString, triggerOnChange);
            }
        });
    };
    Picker.prototype._renderHue = function () {
        var hueContainer = document.createElement('div');
        Object.assign(hueContainer.style, PickerStyle.hueContainer);
        hueContainer.appendChild(this.hueSpectrum.render());
        this.element.appendChild(hueContainer);
    };
    Picker.prototype._renderSaturation = function () {
        var saturationContainer = document.createElement('div');
        Object.assign(saturationContainer.style, PickerStyle.saturationContainer);
        saturationContainer.appendChild(this.saturationSpectrum.render());
        this.element.appendChild(saturationContainer);
    };
    Picker.prototype._renderInput = function () {
        var _this = this;
        var inputGroupContainer = document.createElement('div');
        Object.assign(inputGroupContainer.style, PickerStyle.inputContainer);
        this.element.appendChild(inputGroupContainer);
        var tempRGB = hexToRgb(this._props.hexString);
        this.rgbInput = new RGBInput({
            rgb: tempRGB,
            onChange: function (hexString) {
                _this._props.onChange(hexString, true);
            },
            isVisible: true
        });
        inputGroupContainer.appendChild(this.rgbInput.render());
        this.hsvInput = new HSVInput({
            hsv: rgbToHsv(tempRGB.r, tempRGB.g, tempRGB.b),
            onChange: function (hexString) {
                _this._props.onChange(hexString, true);
            },
            isVisible: true
        });
        inputGroupContainer.appendChild(this.hsvInput.render());
    };
    Picker.prototype._renderButton = function () {
        var _this = this;
        var buttonContainer = document.createElement('div');
        this.element.appendChild(buttonContainer);
        var okButtonSpan = document.createElement('span');
        buttonContainer.appendChild(okButtonSpan);
        this.okButton = new Button({
            text: 'OK',
            type: 'submit'
        });
        okButtonSpan.appendChild(this.okButton.render());
        okButtonSpan.style.display = 'inline-block';
        this.okButton.on('click', function () {
            _this._props.isVisible = false;
            _this.rerender(['pickerDisplay']);
            _this._props.onAccept && _this._props.onAccept(_this._props.hexString);
        });
        var cancelButtonSpan = document.createElement('span');
        buttonContainer.appendChild(cancelButtonSpan);
        this.cancelButton = new Button({
            text: 'Cancel',
            type: 'normal'
        });
        cancelButtonSpan.appendChild(this.cancelButton.render());
        cancelButtonSpan.style.display = 'inline-block';
        this.cancelButton.on('click', function () {
            _this._props.isVisible = false;
            _this.rerender(['pickerDisplay']);
            _this._props.onCancel && _this._props.onCancel();
        });
    };
    Picker.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this);
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('hexString') !== -1) {
            var tempRGB = hexToRgb(this._props.hexString);
            this.saturationSpectrum.setRGB(tempRGB);
            this.rgbInput.setRGB(tempRGB);
            this.hsvInput.setHSV(rgbToHsv(tempRGB.r, tempRGB.g, tempRGB.b));
        }
    };
    Picker.prototype.setRGB = function (hexString) {
        var tempRGB = hexToRgb(this._props.hexString);
        this.rgbInput.setRGB(tempRGB);
        this.hsvInput.setHSV(rgbToHsv(tempRGB.r, tempRGB.g, tempRGB.b));
    };
    Picker.prototype.setHexString = function (hexString) {
        this._props.hexString = hexString;
        this.rerender(['hexString']);
    };
    Picker.prototype.setPickerDisplay = function (pickerDisplay) {
        this._props.isVisible = pickerDisplay;
        this.rerender();
    };
    return Picker;
}(Control));
export default Picker;
