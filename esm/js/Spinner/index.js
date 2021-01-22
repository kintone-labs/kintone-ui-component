import { __assign, __extends } from "tslib";
import '../polyfill';
import Control from '../Control';
import { elements } from '../utils/util';
import '../../css/Spinner.css';
var Spinner = /** @class */ (function (_super) {
    __extends(Spinner, _super);
    function Spinner(params) {
        var _this = _super.call(this) || this;
        _this._props = {
            isDisabled: true,
            isVisible: false
        };
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        // isDisabled always is setted false
        // When we update major version of ui-component, we should delete this prop
        _this._props.isDisabled = false;
        _this.element = _this._createSpinnerElement();
        _this.rerender();
        return _this;
    }
    Spinner.prototype._createSpinnerElement = function () {
        var loader = elements(document.createElement('div')).addClass('kuc-loader');
        var spinner = elements(document.createElement('div')).addClass('kuc-spinner').append(loader);
        var outerDOM = document.createElement('div');
        elements(outerDOM).addClass('kuc-spinner-outer').append(spinner);
        return outerDOM;
    };
    Spinner.prototype.disable = function () {
        // nothing to do
    };
    Spinner.prototype.enable = function () {
        // nothing to do
    };
    return Spinner;
}(Control));
export default Spinner;
