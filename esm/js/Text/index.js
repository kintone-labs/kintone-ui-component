import { __assign, __extends } from "tslib";
import '../polyfill';
import Control from '../Control';
import Message from '../../constant/Message';
import '../../css/Text.css';
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(params) {
        var _this = _super.call(this) || this;
        _this._props.value = '';
        _this._props.placeholder = '';
        if (typeof params === 'object' && params !== null && typeof params.isDisabled !== 'boolean') {
            delete params.isDisabled;
        }
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        _this.element = document.createElement('input');
        _this.element.className = 'kuc-input-text';
        _this.element.setAttribute('type', 'text');
        // If this._props.value is 0, we handle it as string.
        _this.element.value = (_this._props.value === null || _this._props.value === undefined) ? '' : _this._props.value;
        _this.element.placeholder =
            (_this._props.placeholder === null || _this._props.placeholder === undefined)
                ? ''
                : _this._props.placeholder;
        _this.element.onchange = function (e) {
            _this._props.value = e.target.value;
            _this._onChange && _this._onChange(e);
        };
        return _this;
    }
    Text.prototype.render = function () {
        this.rerender();
        return _super.prototype.render.call(this);
    };
    Text.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this);
        if (this._props.isDisabled) {
            this.element.setAttribute('disabled', "" + this._props.isDisabled);
        }
        else {
            this.element.removeAttribute('disabled');
        }
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('value') !== -1) {
            // If this._props.value is 0, we handle it as string.
            this.element.value = (this._props.value === null || this._props.value === undefined) ? '' : this._props.value;
        }
        if (changedAttr.indexOf('placeholder') !== -1) {
            // If this._props.placeholder is 0, we handle it as string.
            this.element.placeholder =
                (this._props.placeholder === null || this._props.placeholder === undefined)
                    ? ''
                    : this._props.placeholder;
        }
    };
    Text.prototype.on = function (eventName, callback) {
        var _this = this;
        if (eventName === 'change') {
            this._onChange = callback;
            return;
        }
        this.element.addEventListener(eventName, function (e) {
            if (_this._props.isDisabled)
                return;
            callback(e);
        });
    };
    Text.prototype.setValue = function (value) {
        this._props.value = value;
        this.rerender(['value']);
    };
    Text.prototype.getValue = function () {
        return this._props.value;
    };
    Text.prototype.setPlaceholder = function (placeholder) {
        if (!placeholder)
            throw new Error(Message.common.INVALID_ARGUMENT);
        this._props.placeholder = placeholder;
        this.rerender(['placeholder']);
    };
    Text.prototype.getPlaceholder = function () {
        return this._props.placeholder;
    };
    return Text;
}(Control));
export default Text;
