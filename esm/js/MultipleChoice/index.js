import { __assign, __extends } from "tslib";
import '../polyfill';
import Control from '../Control';
import Item from '../MultipleChoice/Item';
import AbstractMultiSelection from '../utils/AbstractMultiSelection';
import Message from '../../constant/Message';
import '../../css/MultipleChoice.css';
var MultipleChoice = /** @class */ (function (_super) {
    __extends(MultipleChoice, _super);
    function MultipleChoice(params) {
        var _this = _super.call(this) || this;
        _this.itemList = [];
        _this._props = __assign(__assign({}, _this._props), {
            items: [],
            value: [],
            isDisabled: false,
            isVisible: true
        });
        if (params && typeof params.isDisabled !== 'boolean') {
            delete params.isDisabled;
        }
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        var validationErr = _this._validator(_this._props.items, _this._props.value);
        if (validationErr) {
            throw new Error(validationErr);
        }
        _this._renderItemList();
        _this.rerender(['isDisabled', 'isVisible']);
        return _this;
    }
    MultipleChoice.prototype._renderItemList = function () {
        var _this = this;
        if (!this.element) {
            this.element = document.createElement('div');
            this.element.className = 'kuc-multiple-list kuc-list-outer';
        }
        else {
            var itemNumber = this.element.children.length;
            for (var index = 0; index < itemNumber; index++) {
                var currentElement = this.element.children[0];
                this.element.removeChild(currentElement);
            }
        }
        if (this._props.items) {
            this._props.items.forEach(function (item, index) {
                var itemComponent = new Item(__assign(__assign({}, item), { isSelected: _this._props.value ? _this._props.value.some(function (value) { return value === item.value; }) : false, onClick: _this._handleItemChange.bind(_this) }));
                _this.itemList.push(itemComponent);
                _this.element.appendChild(itemComponent.render());
            });
        }
    };
    MultipleChoice.prototype._validator = function (items, value) {
        var err;
        if (items && !AbstractMultiSelection._hasItemValue(items)) {
            err = Message.selection.MISSING_VALUE_PROPERTY_IN_ITEMS;
        }
        if (items && AbstractMultiSelection._hasDuplicatedItems(items)) {
            err = Message.common.SELECTTION_DUPLICATE_VALUE;
        }
        if (AbstractMultiSelection._hasCheckedItemListDuplicated(value)) {
            err = Message.common.CHECKED_ITEM_LIST_DUPLICATE_VALUE;
        }
        if (items && value && !AbstractMultiSelection._hasValidValue(items, value)) {
            err = Message.selection.INVALID_VALUE;
        }
        return err;
    };
    MultipleChoice.prototype.setValue = function (value) {
        if (!Array.isArray(value)) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        var validationErr = this._validator(this._props.items, value);
        if (validationErr) {
            throw new Error(validationErr);
        }
        this._props.value = value;
        this.rerender(['value']);
    };
    MultipleChoice.prototype.getValue = function () {
        return this._props.value;
    };
    MultipleChoice.prototype.addItem = function (item) {
        if (!item) {
            throw Message.common.INVALID_ARGUMENT;
        }
        if (!this._props.items) {
            this._props.items = [];
        }
        var itemsToCheck = Object.assign([], this._props.items);
        itemsToCheck.push(item);
        var validationErr = this._validator(itemsToCheck);
        if (validationErr) {
            throw new Error(validationErr);
        }
        this._props.items = itemsToCheck;
        this.rerender(['addItems']);
    };
    MultipleChoice.prototype.removeItem = function (index) {
        if (typeof index !== 'number') {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        if (this._props.items && index >= 0 && index < this._props.items.length) {
            var removeItem = this._props.items.splice(index, 1);
            this.itemList.splice(index, 1);
            this.element.childNodes[index].remove();
            var removeItemValue = removeItem[0].value;
            if (this._props.value) {
                var selectedRemoveIndex = this._props.value.indexOf(removeItemValue);
                if (selectedRemoveIndex > -1) {
                    this._props.value.splice(selectedRemoveIndex, 1);
                }
            }
        }
        else {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
    };
    MultipleChoice.prototype.getItem = function (index) {
        if (typeof index !== 'number') {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        if (this._props.items && index >= 0 && index < this._props.items.length) {
            return this._props.items[index];
        }
        throw new Error(Message.common.INVALID_ARGUMENT);
    };
    MultipleChoice.prototype.setItems = function (items) {
        if (!items || !Array.isArray(items)) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        // It isn't need to check hasValidValue
        var validationErr = this._validator(items);
        if (validationErr) {
            throw new Error(validationErr);
        }
        this._props.items = items;
        this.itemList = [];
        this._props.value = [];
        this._renderItemList();
        this.rerender(['isDisabled']);
    };
    MultipleChoice.prototype.getItems = function () {
        return this._props.items;
    };
    MultipleChoice.prototype.disableItem = function (value) {
        var _this = this;
        if (!value) {
            throw Message.common.INVALID_ARGUMENT;
        }
        if (this._props.items) {
            this._props.items.forEach(function (item, index) {
                if (item.value === value) {
                    item.isDisabled = true;
                    _this.itemList[index].disable();
                }
            });
        }
    };
    MultipleChoice.prototype.enableItem = function (value) {
        var _this = this;
        if (!value) {
            throw Message.common.INVALID_ARGUMENT;
        }
        if (this._props.items) {
            this._props.items.forEach(function (item, index) {
                if (item.value === value) {
                    item.isDisabled = false;
                    _this.itemList[index].enable();
                }
            });
        }
    };
    MultipleChoice.prototype.rerender = function (changedAttr) {
        var _this = this;
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('value') !== -1) {
            this.itemList.forEach(function (item, index) {
                if (_this._props.value) {
                    var isInclude = _this._props.value.includes(item.getValue());
                    if (isInclude) {
                        item.select();
                    }
                    else {
                        item.deselect();
                    }
                }
            });
        }
        if (changedAttr.indexOf('addItems') !== -1 && this._props.items) {
            var itemComponent = new Item(__assign(__assign({}, this._props.items[this._props.items.length - 1]), { isSelected: false, onClick: this._handleItemChange.bind(this) }));
            this.itemList.push(itemComponent);
            this.element.appendChild(itemComponent.render());
        }
        if (changedAttr.indexOf('isDisabled') !== -1) {
            if (this._props.isDisabled) {
                this.itemList.forEach(function (item, index) {
                    if (_this._props.items && !_this._props.items[index].isDisabled) {
                        item.disable();
                    }
                });
            }
            else {
                this.itemList.forEach(function (item, index) {
                    if (_this._props.items && !_this._props.items[index].isDisabled) {
                        item.enable();
                    }
                });
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
    MultipleChoice.prototype._handleItemChange = function (itemComponent) {
        var selectedValue = itemComponent.getValue();
        if (this._props.value) {
            var isInclude = this._props.value.includes(selectedValue);
            if (isInclude) {
                var selectedIndex = this._props.value.indexOf(selectedValue);
                this._props.value.splice(selectedIndex, 1);
            }
            else {
                this._props.value.push(selectedValue);
            }
            if (typeof this._props.onChange === 'function') {
                this._props.onChange(this.getValue());
            }
        }
    };
    MultipleChoice.prototype.on = function (eventName, callback) {
        if (eventName === 'change') {
            this._props.onChange = callback;
        }
    };
    return MultipleChoice;
}(Control));
export default MultipleChoice;
