import * as tslib_1 from "tslib";
import Control from "../Control";
import Item from "../MultipleChoice/Item";
import AbstractMultiSelection from "../utils/AbstractMultiSelection";
import Message from "../../constant/Message";
import "../../css/MultipleChoice.css";
var MultipleChoice = /** @class */ (function (_super) {
    tslib_1.__extends(MultipleChoice, _super);
    function MultipleChoice(params) {
        var _this = _super.call(this) || this;
        _this._props = tslib_1.__assign({}, _this._props, {
            items: [],
            value: [],
            isDisabled: false,
            isVisible: true
        });
        _this.itemList = [];
        if (typeof params.isDisabled !== "boolean") {
            delete params.isDisabled;
        }
        if (params) {
            _this._props = tslib_1.__assign({}, _this._props, params);
        }
        if (_this._validator()) {
            throw new Error(_this._validator());
        }
        _this._renderItemList();
        _this.rerender(["isDisabled", "isVisible"]);
        return _this;
    }
    MultipleChoice.prototype._renderItemList = function () {
        var _this = this;
        this.element = document.createElement("div");
        this.element.className = "kuc-multiple-list kuc-list-outer";
        if (this._props.items) {
            this._props.items.forEach(function (item, index) {
                var itemComponent = new Item(tslib_1.__assign({}, item, { isDisabled: item.isDisabled, isSelected: _this._props.value ? _this._props.value.some(function (value) { return value === item.value; }) : false, onClick: _this._handleItemChange.bind(_this) }));
                _this.itemList.push(itemComponent);
                _this.element.appendChild(itemComponent.render());
            });
        }
    };
    MultipleChoice.prototype._validator = function () {
        var err;
        if (this._props.items && AbstractMultiSelection._hasDuplicatedItems(this._props.items)) {
            err = Message.common.SELECTTION_DUPLICATE_VALUE;
        }
        if (this._props.items && this._props.value && !AbstractMultiSelection._hasValidValue(this._props.items, this._props.value)) {
            err = Message.common.INVALID_ARGUMENT;
        }
        return err;
    };
    MultipleChoice.prototype.setValue = function (value) {
        if (!value && Array.isArray(value)) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        if (this._validator()) {
            throw new Error(this._validator());
        }
        this._props.value = value;
        this.rerender(["value"]);
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
        this._props.items.push(item);
        if (this._validator()) {
            throw new Error(this._validator());
        }
        this.rerender(["addItems"]);
    };
    MultipleChoice.prototype.removeItem = function (index) {
        if (typeof index !== "number") {
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
        if (typeof index !== "number") {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        if (this._props.items && index >= 0 && index < this._props.items.length) {
            return this._props.items[index];
        }
        else {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
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
        if (changedAttr.indexOf("value") !== -1) {
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
        if (changedAttr.indexOf("addItems") !== -1 && this._props.items) {
            var selected = false;
            if (this._props.value && this._props.value.indexOf(this._props.items[this._props.items.length - 1].value)) {
                selected = true;
            }
            var itemComponent = new Item(tslib_1.__assign({}, this._props.items[this._props.items.length - 1], { isSelected: selected, onClick: this._handleItemChange.bind(this) }));
            this.itemList.push(itemComponent);
            this.element.appendChild(itemComponent.render());
        }
        if (changedAttr.indexOf("isDisabled") !== -1) {
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
        if (changedAttr.indexOf("isVisible") !== -1) {
            if (!this._props.isVisible) {
                this.element.style.display = "none";
            }
            else {
                this.element.style.display = "";
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
            if (typeof this._props.onChange == "function") {
                this._props.onChange(this.getValue());
            }
        }
    };
    MultipleChoice.prototype.on = function (eventName, callback) {
        if (eventName == "change") {
            this._props.onChange = callback;
            return;
        }
        _super.prototype.on.call(this, eventName, callback);
    };
    return MultipleChoice;
}(Control));
export default MultipleChoice;
