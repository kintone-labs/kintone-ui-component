import { __assign, __extends } from "tslib";
/* eslint-disable @typescript-eslint/no-empty-function */
import Control from '../../Control';
var HueSpectrum = /** @class */ (function (_super) {
    __extends(HueSpectrum, _super);
    function HueSpectrum(params) {
        var _this = _super.call(this) || this;
        _this._props = __assign(__assign({}, _this._props), {
            width: 0,
            height: 0,
            onSelect: function (rgbObj) {
            }
        });
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        _this.element = document.createElement('div');
        _this.colorCanvas = document.createElement('canvas');
        _this.colorCanvas.width = _this._props.width;
        _this.colorCanvas.height = _this._props.height;
        _this.colorCanvas.onmousedown = _this.handleMouseDown.bind(_this);
        _this.colorCanvas.onmouseup = _this.handleMouseUp.bind(_this);
        _this.colorCanvas.onmousemove = _this.handleMouseMove.bind(_this);
        _this.colorCanvas.onmouseleave = _this.handleMouseLeave.bind(_this);
        _this.element.appendChild(_this.colorCanvas);
        _this.initLayout();
        return _this;
    }
    HueSpectrum.prototype.initLayout = function () {
        if (!this.hasInitLayout && this.colorCanvas) {
            var ctx = this.colorCanvas.getContext('2d');
            if (ctx) {
                ctx.rect(0, 0, this._props.width, this._props.height);
                var grd1 = ctx.createLinearGradient(0, 0, 0, this._props.height);
                grd1.addColorStop(0, 'rgb(255, 0, 0)'); // red
                grd1.addColorStop(0.17, 'rgb(255, 0, 255)'); // magenta
                grd1.addColorStop(0.34, 'rgb(0, 0, 255)'); // blue
                grd1.addColorStop(0.51, 'rgb(0, 255, 255)'); // aqua
                grd1.addColorStop(0.68, 'rgb(0, 255, 0)'); // green
                grd1.addColorStop(0.85, 'rgb(255, 255, 0)'); // yellow
                grd1.addColorStop(1, 'rgb(255, 0, 0)'); // red
                ctx.fillStyle = grd1;
                ctx.fill();
                this.hasInitLayout = true;
            }
        }
    };
    HueSpectrum.prototype.handleMouseLeave = function () {
        this.isMouseDown = false;
        this.rerender(['isMouseDown']);
    };
    HueSpectrum.prototype.handleMouseMove = function (e) {
        if (this.isMouseDown) {
            this.triggerSelect(e.clientY);
        }
    };
    HueSpectrum.prototype.handleMouseDown = function () {
        this.isMouseDown = true;
        this.rerender(['isMouseDown']);
    };
    HueSpectrum.prototype.handleMouseUp = function (e) {
        this.triggerSelect(e.clientY);
        this.isMouseDown = false;
        this.rerender(['isMouseDown']);
    };
    HueSpectrum.prototype.triggerSelect = function (clientY) {
        var x = this._props.width / 2;
        var y = clientY - this.element.getBoundingClientRect().top;
        if (this.colorCanvas && this.colorCanvas) {
            var ctx = this.colorCanvas.getContext('2d');
            if (ctx) {
                var imageData = ctx.getImageData(x, y, 1, 1).data;
                this._props.onSelect({ r: imageData[0], g: imageData[1], b: imageData[2] });
            }
        }
    };
    return HueSpectrum;
}(Control));
export default HueSpectrum;
