import { __assign, __extends } from "tslib";
import Control from '../Control';
import '../../css/Item.css';
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(params) {
        var _this = _super.call(this) || this;
        _this._props = __assign(__assign({}, _this._props), {
            type: 'default'
        });
        if (typeof params === 'object' &&
            params !== null &&
            typeof params.isDisabled !== 'boolean') {
            delete params.isDisabled;
        }
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        var generateGUID = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        _this.id =
            new Date().getTime() +
                '-' +
                generateGUID() +
                '-' +
                generateGUID() +
                generateGUID();
        _this.value = params.item.value;
        _this.element = document.createElement('span');
        if (_this._props.className) {
            _this.element.className = _this._props.className;
        }
        _this.inputEl = document.createElement('input');
        _this.inputEl.id = _this.id;
        if (_this._props.name) {
            _this.inputEl.name = _this._props.name;
        }
        if (_this._props.type) {
            _this.inputEl.type = _this._props.type;
        }
        _this.inputEl.checked = _this._props.selected;
        if (_this._props.isDisabled) {
            _this.inputEl.disabled = _this._props.isDisabled;
        }
        var labelEl = document.createElement('label');
        labelEl.htmlFor = _this.id;
        labelEl.innerText = _this._props.item.label || '';
        _this.element.appendChild(_this.inputEl);
        _this.element.appendChild(labelEl);
        return _this;
    }
    Item.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this);
        if (this._props.isDisabled) {
            this.inputEl.setAttribute('disabled', "" + this._props.isDisabled);
        }
        else {
            this.inputEl.removeAttribute('disabled');
        }
    };
    Item.prototype.on = function (eventName, callback) {
        var _this = this;
        this.inputEl.addEventListener(eventName, function (e) {
            if (_this._props.isDisabled)
                return;
            callback(e);
        });
    };
    return Item;
}(Control));
export default Item;
