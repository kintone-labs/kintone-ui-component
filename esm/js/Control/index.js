import { __assign } from "tslib";
var Control = /** @class */ (function () {
    function Control() {
        this._props = __assign(__assign({}, this._props), {
            isDisabled: false,
            isVisible: true
        });
    }
    Control.prototype.rerender = function (changedAttr) {
        if (this.element) {
            if (!this._props.isVisible && typeof this._props.isVisible === 'boolean') {
                this.element.style.display = 'none';
            }
            else {
                this.element.style.display = '';
            }
            if (this._props.isDisabled) {
                this.element.setAttribute('disabled', "" + this._props.isDisabled);
            }
            else {
                this.element.removeAttribute('disabled');
            }
        }
    };
    Control.prototype.getIsDisabled = function () {
        return this._props.isDisabled;
    };
    Control.prototype.render = function () {
        return this.element;
    };
    Control.prototype.on = function (eventName, callback) {
        var _this = this;
        this.element.addEventListener(eventName, function (e) {
            if (_this._props.isDisabled)
                return;
            callback(e);
        });
    };
    Control.prototype.show = function () {
        this._props.isVisible = true;
        this.rerender(['isVisible']);
    };
    Control.prototype.hide = function () {
        this._props.isVisible = false;
        this.rerender(['isVisible']);
    };
    Control.prototype.disable = function () {
        this._props.isDisabled = true;
        this.rerender(['isDisabled']);
    };
    Control.prototype.enable = function () {
        this._props.isDisabled = false;
        this.rerender(['isDisabled']);
    };
    return Control;
}());
export default Control;
