import * as tslib_1 from "tslib";
import Control from '../Control';
import Message from '../../constant/Message';
import Item from './Item';
import AbstractSingleSelection from '../utils/AbstractSingleSelection';
import '../../css/RadioButton.css';
var RadioButton = /** @class */ (function (_super) {
    tslib_1.__extends(RadioButton, _super);
    function RadioButton(params) {
        var _this = _super.call(this) || this;
        _this._props = tslib_1.__assign({}, _this._props, {
            items: []
        });
        _this.itemComps = [];
        _this._handleItemClick = function (itemEl) {
            var inputEl = itemEl.target;
            _this.itemComps.some(function (item) {
                if (item.id === inputEl.id) {
                    _this._props.value = item.value;
                    return true;
                }
                return false;
            });
            _this._props.onChange && _this._props.onChange(_this._props.value);
        };
        if (!params.name) {
            throw new Error(Message.radioBtn.MISSING_NAME);
        }
        if (typeof params === 'object' &&
            params !== null &&
            typeof params.isDisabled !== 'boolean') {
            delete params.isDisabled;
        }
        if (params) {
            _this._props = tslib_1.__assign({}, _this._props, params);
        }
        if (AbstractSingleSelection._hasDuplicatedItems(_this._props.items)) {
            throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
        }
        if (!AbstractSingleSelection._hasValidValue(_this._props.items, _this._props.value)) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        _this.element = document.createElement('div');
        _this.element.className = 'kuc-input-radio';
        _this.itemComps =
            _this._props.items &&
                _this._props.items.map(function (item) {
                    var newItem = new Item({
                        selected: _this._props.value === item.value,
                        item: item,
                        isDisabled: _this._props.isDisabled || item.isDisabled,
                        type: 'radio',
                        name: _this._props.name,
                        className: 'kuc-input-radio-item'
                    });
                    newItem.on('change', _this._handleItemClick);
                    return newItem;
                });
        _this.itemComps.forEach(function (item) {
            _this.element.appendChild(item.render());
        });
        return _this;
    }
    RadioButton.prototype.render = function () {
        this.rerender();
        return _super.prototype.render.call(this);
    };
    RadioButton.prototype.rerender = function (changedAttr) {
        var _this = this;
        _super.prototype.rerender.call(this);
        if (!changedAttr)
            return;
        while (this.element.firstChild)
            this.element.removeChild(this.element.firstChild);
        this.itemComps =
            this._props.items &&
                this._props.items.map(function (item) {
                    var newItem = new Item({
                        selected: _this._props.value === item.value,
                        item: item,
                        isDisabled: _this._props.isDisabled || item.isDisabled,
                        type: 'radio',
                        name: _this._props.name,
                        className: 'kuc-input-radio-item'
                    });
                    newItem.on('change', _this._handleItemClick);
                    return newItem;
                });
        this.itemComps.forEach(function (item) {
            _this.element.appendChild(item.render());
        });
    };
    RadioButton.prototype.setValue = function (value) {
        var _this = this;
        this._props.items.forEach(function (item) {
            if (item.value === value) {
                _this._props.value = item.value;
            }
        });
        this.rerender(['value']);
    };
    RadioButton.prototype.getValue = function () {
        return this._props.value;
    };
    RadioButton.prototype.getItems = function () {
        return this._props.items;
    };
    RadioButton.prototype.addItem = function (item) {
        this._props.items.push(item);
        this.rerender(['item']);
    };
    RadioButton.prototype.removeItem = function (index) {
        if (this._props.items.length <= index) {
            return false;
        }
        this._props.items.splice(index, 1);
        return this.rerender(['item']);
    };
    RadioButton.prototype.disableItem = function (value) {
        this._props.items.forEach(function (item) {
            if (item.value === value) {
                item.isDisabled = true;
            }
        });
        this.rerender(['item']);
    };
    RadioButton.prototype.enableItem = function (value) {
        this._props.items.forEach(function (item) {
            if (item.value === value) {
                item.isDisabled = false;
            }
        });
        this.rerender(['item']);
    };
    RadioButton.prototype.on = function (eventName, callback) {
        if (eventName === 'change') {
            this._props.onChange = callback;
            this.rerender(['item']);
        }
    };
    return RadioButton;
}(Control));
export default RadioButton;
