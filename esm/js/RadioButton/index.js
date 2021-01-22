import { __assign, __extends } from "tslib";
import '../polyfill';
import Control from '../Control';
import Message from '../../constant/Message';
import Item from './Item';
import AbstractSingleSelection from '../utils/AbstractSingleSelection';
import '../../css/RadioButton.css';
var RadioButton = /** @class */ (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(params) {
        var _this = _super.call(this) || this;
        _this.itemComps = [];
        _this._props = __assign(__assign({}, _this._props), {
            items: []
        });
        if (params && !params.name) {
            throw new Error(Message.radioBtn.MISSING_NAME);
        }
        if (typeof params === 'object' &&
            params !== null &&
            typeof params.isDisabled !== 'boolean') {
            delete params.isDisabled;
        }
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        var validationErr = _this._validator(_this._props.items, _this._props.value);
        if (validationErr) {
            throw new Error(validationErr);
        }
        _this.element = document.createElement('div');
        _this.element.className = 'kuc-input-radio';
        _this.itemComps =
            _this._props.items &&
                _this._props.items.map(function (obj) {
                    var newItem = new Item({
                        selected: _this._props.value === obj.value,
                        item: obj,
                        isDisabled: _this._props.isDisabled || obj.isDisabled,
                        type: 'radio',
                        name: _this._props.name,
                        className: 'kuc-input-radio-item'
                    });
                    newItem.on('change', _this._handleItemClick.bind(_this));
                    return newItem;
                });
        _this.itemComps && _this.itemComps.forEach(function (obj) {
            _this.element.appendChild(obj.render());
        });
        return _this;
    }
    RadioButton.prototype._handleItemClick = function (itemEl) {
        var _this = this;
        var inputEl = itemEl.target;
        this.itemComps && this.itemComps.some(function (obj) {
            if (obj.id === inputEl.id) {
                _this._props.value = obj.value;
                return true;
            }
            return false;
        });
        this._props.onChange && this._props.onChange(this._props.value);
    };
    RadioButton.prototype._validator = function (items, value) {
        var err;
        if (items && AbstractSingleSelection._hasDuplicatedItems(items)) {
            err = Message.common.SELECTTION_DUPLICATE_VALUE;
        }
        if (items && value && !AbstractSingleSelection._hasValidValue(items, value)
            || !AbstractSingleSelection._hasValidItems(items)) {
            err = Message.common.INVALID_ARGUMENT;
        }
        return err;
    };
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
                this._props.items.map(function (obj) {
                    var newItem = new Item({
                        selected: _this._props.value === obj.value,
                        item: obj,
                        isDisabled: _this._props.isDisabled || obj.isDisabled,
                        type: 'radio',
                        name: _this._props.name,
                        className: 'kuc-input-radio-item'
                    });
                    newItem.on('change', _this._handleItemClick.bind(_this));
                    return newItem;
                });
        this.itemComps && this.itemComps.forEach(function (itemComp) {
            _this.element.appendChild(itemComp.render());
        });
    };
    RadioButton.prototype.setValue = function (value) {
        if (value === null || value === undefined) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        var validationErr = this._validator(this._props.items, value);
        if (validationErr) {
            throw new Error(validationErr);
        }
        this._props.value = value;
        this.rerender(['value']);
    };
    RadioButton.prototype.getValue = function () {
        return this._props.value;
    };
    RadioButton.prototype.setItems = function (items) {
        if (!items || !Array.isArray(items)) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        // It isn't need to check hasValidValue
        var validaErr = this._validator(items);
        if (validaErr) {
            throw new Error(validaErr);
        }
        this._props.items = items;
        this.rerender(['item']);
    };
    RadioButton.prototype.getItems = function () {
        return this._props.items;
    };
    RadioButton.prototype.addItem = function (obj) {
        if (!obj) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        if (!this._props.items) {
            this._props.items = [];
        }
        var itemsToCheck = Object.assign([], this._props.items);
        itemsToCheck.push(obj);
        var validationErr = this._validator(itemsToCheck);
        if (validationErr) {
            throw new Error(validationErr);
        }
        this._props.items = itemsToCheck;
        this.rerender(['item']);
    };
    RadioButton.prototype.removeItem = function (index) {
        if ((this._props.items && this._props.items.length <= index)
            || typeof index !== 'number' || index === null) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        if (this._props.items
            && typeof index === 'number'
            && this._props.items[index].value === this._props.value) {
            this._props.value = null;
        }
        this._props.items && this._props.items.splice(index, 1);
        return this.rerender(['item']);
    };
    RadioButton.prototype.disableItem = function (value) {
        if (!value) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        this._props.items && this._props.items.forEach(function (obj) {
            if (obj.value === value) {
                obj.isDisabled = true;
            }
        });
        this.rerender(['item']);
    };
    RadioButton.prototype.enableItem = function (value) {
        if (!value) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        this._props.items && this._props.items.forEach(function (obj) {
            if (obj.value === value) {
                obj.isDisabled = false;
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
