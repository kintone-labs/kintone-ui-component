import { __assign, __extends } from "tslib";
import '../polyfill';
import Control from '../Control';
import '../../css/Button.css';
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(params) {
        var _this = _super.call(this) || this;
        _this._props = __assign(__assign({}, _this._props), {
            text: '',
            type: 'normal',
        });
        if (params && typeof params.isDisabled !== 'boolean') {
            delete params.isDisabled;
        }
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        _this._createLayout();
        _this.rerender(['isDisabled', 'isVisible']);
        return _this;
    }
    Button.prototype.rerender = function (changedAttr) {
        // super.rerender();
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('type') !== -1) {
            this.element.className = this._getClassName();
        }
        if (changedAttr.indexOf('text') !== -1) {
            this.element.innerHTML = this._props.text || '';
        }
        if (changedAttr.indexOf('isDisabled') !== -1) {
            if (this._props.isDisabled) {
                this.element.setAttribute('disabled', "" + this._props.isDisabled);
            }
            else {
                this.element.removeAttribute('disabled');
            }
        }
        if (changedAttr.indexOf('isVisible') !== -1) {
            if (!this._props.isVisible) {
                this.element.style.display = 'none';
            }
            else {
                this.element.style.display = '';
            }
        }
    };
    Button.prototype.setText = function (text) {
        this._props.text = text;
        this.rerender(['text']);
    };
    Button.prototype.setType = function (type) {
        this._props.type = type;
        this.rerender(['type']);
    };
    Button.prototype._getClassName = function () {
        return [
            'kuc-btn',
            this._props.type === 'submit' ? 'submit' : 'normal'
        ].join(' ').trim();
    };
    Button.prototype.on = function (eventName, callback) {
        var _this = this;
        this.element.addEventListener(eventName, function (e) {
            if (_this._props.isDisabled)
                return;
            callback(e);
        });
    };
    Button.prototype._createLayout = function () {
        this.element = document.createElement('button');
        this.element.className = this._getClassName();
        this.element.innerHTML = this._props.text || '';
        if (this._props.onClick) {
            this.on('click', this._props.onClick);
        }
    };
    return Button;
}(Control));
export default Button;
