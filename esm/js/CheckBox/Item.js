import { __assign, __extends } from "tslib";
import Control from '../Control';
import '../../css/Item.css';
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(params) {
        var _this = _super.call(this) || this;
        _this._props = __assign(__assign({}, _this._props), {
            isSelected: false,
            isDisabled: false,
        });
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        _this.element = document.createElement('span');
        _this.element.className = 'kuc-input-checkbox-item';
        var inputCheckboxElement = document.createElement('input');
        var inputCheckboxID = new Date().getTime() + '-' + _this.generateGUID() + '-' + _this.generateGUID();
        inputCheckboxElement.type = 'checkbox';
        inputCheckboxElement.checked = _this._props.isSelected;
        inputCheckboxElement.disabled = _this._props.isDisabled || false;
        inputCheckboxElement.id = inputCheckboxID;
        _this.inputCheckboxElement = inputCheckboxElement;
        _this.element.appendChild(inputCheckboxElement);
        var labelForCheckboxElement = document.createElement('label');
        labelForCheckboxElement.htmlFor = inputCheckboxID;
        labelForCheckboxElement.append(_this._props.label || '');
        _this.element.appendChild(labelForCheckboxElement);
        _this.inputCheckboxElement.addEventListener('change', function (e) {
            _this._props.isSelected = _this.inputCheckboxElement.checked;
            if (_this._props.onChange) {
                _this._props.onChange(_this);
            }
        });
        _this.rerender();
        return _this;
    }
    Item.prototype.rerender = function (changedAttr) {
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('isSelected') !== -1) {
            this.inputCheckboxElement.checked = this._props.isSelected;
        }
        if (changedAttr.indexOf('isDisabled') !== -1) {
            this.inputCheckboxElement.disabled = this._props.isDisabled || false;
        }
    };
    Item.prototype.getValue = function () {
        return this._props.value || '';
    };
    Item.prototype.select = function () {
        this._props.isSelected = true;
        this.rerender(['isSelected', 'isDisabled']);
    };
    Item.prototype.deselect = function () {
        this._props.isSelected = false;
        this.rerender(['isSelected', 'isDisabled']);
    };
    Item.prototype.disable = function () {
        this._props.isDisabled = true;
        this.rerender(['isSelected', 'isDisabled']);
    };
    Item.prototype.enable = function () {
        this._props.isDisabled = false;
        this.rerender(['isSelected', 'isDisabled']);
    };
    Item.prototype.generateGUID = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return Item;
}(Control));
export default Item;
