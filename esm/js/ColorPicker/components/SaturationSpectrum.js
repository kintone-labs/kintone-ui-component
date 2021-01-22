import { __assign, __extends } from "tslib";
/* eslint-disable @typescript-eslint/no-empty-function */
import Control from '../../Control';
var SaturationSpectrum = /** @class */ (function (_super) {
    __extends(SaturationSpectrum, _super);
    function SaturationSpectrum(params) {
        var _this = _super.call(this) || this;
        _this._props = __assign(__assign({}, _this._props), {
            width: 200,
            height: 200,
            rgb: { r: 0, g: 0, b: 0 },
            onSelect: function (rgb, triggerOnChange) {
                if (rgb === void 0) { rgb = { r: 0, g: 0, b: 0 }; }
                if (triggerOnChange === void 0) { triggerOnChange = false; }
            }
        });
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        _this.isMouseDown = false;
        _this.element = document.createElement('div');
        _this.colorCanvas = document.createElement('canvas');
        _this.colorCanvas.width = _this._props.width;
        _this.colorCanvas.height = _this._props.height;
        _this.colorCanvas.onmousedown = _this.handleMouseDown.bind(_this);
        _this.colorCanvas.onmouseup = _this.handleMouseUp.bind(_this);
        _this.colorCanvas.onmousemove = _this.handleMouseMove.bind(_this);
        _this.colorCanvas.onmouseleave = _this.handleMouseLeave.bind(_this);
        _this.element.appendChild(_this.colorCanvas);
        _this.fillSatSpectrumCanvas();
        return _this;
    }
    SaturationSpectrum.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this);
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('rgb') !== -1) {
            this.fillSatSpectrumCanvas();
        }
    };
    SaturationSpectrum.prototype.setRGB = function (rgb) {
        this._props.rgb = rgb;
        this.rerender(['rgb']);
    };
    SaturationSpectrum.prototype.fillSatSpectrumCanvas = function () {
        if (this.colorCanvas) {
            var ctx = this.colorCanvas.getContext('2d');
            if (ctx) {
                ctx.fillStyle = "rgb(" + this._props.rgb.r + "," + this._props.rgb.g + "," + this._props.rgb.b + ")";
                ctx.fillRect(0, 0, this._props.width, this._props.height);
                var grdWhite = ctx.createLinearGradient(0, 0, this._props.width, 0);
                grdWhite.addColorStop(0, 'rgb(255,255,255)');
                grdWhite.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = grdWhite;
                ctx.fillRect(0, 0, this._props.width, this._props.height);
                var grdBlack = ctx.createLinearGradient(0, 0, 0, this._props.height);
                grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
                grdBlack.addColorStop(1, 'rgb(0,0,0)');
                ctx.fillStyle = grdBlack;
                ctx.fillRect(0, 0, this._props.width, this._props.height);
            }
        }
    };
    SaturationSpectrum.prototype.handleMouseLeave = function () {
        this.isMouseDown = false;
        this.rerender(['isMouseDown']);
    };
    SaturationSpectrum.prototype.triggerSelect = function (clientX, clientY, triggerOnChange) {
        var x = clientX - this.element.getBoundingClientRect().left;
        var y = clientY - this.element.getBoundingClientRect().top;
        if (this.colorCanvas) {
            var ctx = this.colorCanvas.getContext('2d');
            if (ctx) {
                var imageData = ctx.getImageData(x, y, 1, 1).data;
                this._props.onSelect({ r: imageData[0], g: imageData[1], b: imageData[2] }, triggerOnChange);
            }
        }
    };
    SaturationSpectrum.prototype.handleMouseMove = function (e) {
        if (this.isMouseDown) {
            this.triggerSelect(e.clientX, e.clientY, false);
        }
    };
    SaturationSpectrum.prototype.handleMouseDown = function () {
        this.isMouseDown = true;
        this.rerender(['isMouseDown']);
    };
    SaturationSpectrum.prototype.handleMouseUp = function (e) {
        this.triggerSelect(e.clientX, e.clientY, false);
        this.isMouseDown = false;
        this.rerender(['isMouseDown']);
    };
    return SaturationSpectrum;
}(Control));
export default SaturationSpectrum;
