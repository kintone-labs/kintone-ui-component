import { __assign, __extends } from "tslib";
import '../polyfill';
import Control from '../Control';
import Message from '../../constant/Message';
import Item from './Item';
import AbstractSingleSelection from '../utils/AbstractSingleSelection';
import { mdilChevronDown } from '@mdi/light-js';
import '../../css/Dropdown.css';
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(params) {
        var _this = _super.call(this) || this;
        _this.itemComps = [];
        _this.isListVisible = false;
        _this._props = __assign(__assign({}, _this._props), {
            items: []
        });
        if (typeof params === 'object' &&
            params !== null &&
            typeof params.isDisabled !== 'boolean') {
            delete params.isDisabled;
        }
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        // for Non-null assertion operator
        var validationErr = _this._validator(_this._props.items, _this._props.value);
        if (validationErr) {
            throw new Error(validationErr);
        }
        _this._props.items &&
            _this._props.items.some(function (data) {
                if (data.value === _this._props.value) {
                    _this.label = data.label;
                    return true;
                }
                return false;
            });
        _this.element = _this._createDom('div', 'kuc-dropdown-container');
        var subcontainerEl = _this._renderSubContainer();
        _this.element.appendChild(subcontainerEl);
        return _this;
    }
    Dropdown.prototype._createDom = function (tagName, className) {
        var element = document.createElement(tagName);
        if (className) {
            element.className = className;
        }
        return element;
    };
    Dropdown.prototype._showItems = function (e) {
        this.isListVisible = true;
        this.listOuterEl.setAttribute('style', 'display: block');
        this.listOuterEl.setAttribute('style', "margin-top: " + this._caclListOuterPosition() + "px");
        this._props.listItemsShown && this._props.listItemsShown(e);
    };
    Dropdown.prototype._caclListOuterPosition = function () {
        var position = -6;
        var currentPosition = this.listOuterEl.offsetTop + this.listOuterEl.offsetHeight;
        if (currentPosition >= window.innerHeight) {
            position -= (this.listOuterEl.offsetHeight + this.element.offsetHeight);
        }
        return position;
    };
    Dropdown.prototype._hideItems = function () {
        this.isListVisible = false;
        this.listOuterEl.setAttribute('style', 'display: none');
    };
    Dropdown.prototype._handleDropdownClick = function (e) {
        if (this.isListVisible) {
            this._hideItems();
            return;
        }
        this._showItems(e);
    };
    Dropdown.prototype._handleClickOutside = function () {
        this._hideItems();
    };
    Dropdown.prototype._handleItemClick = function (data) {
        this._props.value = data.value;
        this.label = data.label || '';
        this._hideItems();
        this.rerender(['item']);
        this._props.onChange && this._props.onChange(this._props.value);
    };
    Dropdown.prototype._createDownIconEl = function () {
        var pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathEl.setAttribute('d', mdilChevronDown);
        var svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgEl.appendChild(pathEl);
        return svgEl;
    };
    Dropdown.prototype._renderSubContainer = function () {
        var _this = this;
        this.className = [
            'kuc-dropdown',
            this._props.isDisabled ? 'kuc-dropdown-disable' : ''
        ];
        var subcontainerEl = this._createDom('div', 'kuc-dropdown-sub-container');
        subcontainerEl.setAttribute('tabIndex', '-1');
        subcontainerEl.onblur = this._handleClickOutside.bind(this);
        var outerEl = this._createDom('div', 'kuc-dropdown-outer');
        this.dropdownEl = this._createDom('div', this.className.join(' ').trim());
        if (!this._props.isDisabled) {
            this.dropdownEl.onclick = this._handleDropdownClick.bind(this);
        }
        var selectedEl = this._createDom('div', 'kuc-dropdown-selected');
        var selectedNameEl = this._createDom('span', 'kuc-dropdown-selected-name');
        this.nameLabelEl = this._createDom('span', 'kuc-dropdown-selected-label');
        this.nameLabelEl.innerText = this.label || '';
        var iconEl = this._createDom('span', 'icon-arrow-down');
        iconEl.appendChild(this._createDownIconEl());
        selectedNameEl.appendChild(this.nameLabelEl);
        selectedNameEl.appendChild(iconEl);
        selectedEl.appendChild(selectedNameEl);
        this.dropdownEl.appendChild(selectedEl);
        outerEl.appendChild(this.dropdownEl);
        this.listOuterEl = this._createDom('div', 'kuc-list-outer');
        this.listOuterEl.setAttribute('style', 'display: none');
        this.itemComps =
            this._props.items &&
                this._props.items.map(function (data) {
                    var newItem = new Item({
                        selected: _this._props.value === data.value,
                        item: data,
                        isDisabled: _this._props.isDisabled || data.isDisabled,
                        onClick: _this._handleItemClick.bind(_this)
                    });
                    return newItem;
                });
        if (this.itemComps) {
            this.itemComps.forEach(function (data) {
                _this.listOuterEl.appendChild(data.render());
            });
        }
        subcontainerEl.appendChild(outerEl);
        subcontainerEl.appendChild(this.listOuterEl);
        return subcontainerEl;
    };
    Dropdown.prototype._validator = function (items, value) {
        var err;
        if (items && AbstractSingleSelection._hasDuplicatedItems(items)) {
            err = Message.common.SELECTTION_DUPLICATE_VALUE;
        }
        if (!AbstractSingleSelection._hasValidValue(items, value) || !AbstractSingleSelection._hasValidItems(items)) {
            err = Message.common.INVALID_ARGUMENT;
        }
        return err;
    };
    Dropdown.prototype.render = function () {
        this.rerender();
        return _super.prototype.render.call(this);
    };
    Dropdown.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this);
        if (!changedAttr)
            return;
        while (this.element.firstChild)
            this.element.removeChild(this.element.firstChild);
        var subcontainerEl = this._renderSubContainer();
        this.element.appendChild(subcontainerEl);
    };
    Dropdown.prototype.setValue = function (value) {
        var _this = this;
        if (value === null || value === undefined) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        var validationErr = this._validator(this._props.items, value);
        if (validationErr) {
            throw new Error(validationErr);
        }
        this._props.items && this._props.items.forEach(function (data) {
            if (data.value === value) {
                _this._props.value = data.value;
                _this.label = data.label;
            }
        });
        this.rerender(['value']);
    };
    Dropdown.prototype.getValue = function () {
        return this._props.value;
    };
    Dropdown.prototype.getItems = function () {
        return this._props.items;
    };
    Dropdown.prototype.addItem = function (data) {
        if (!data) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        if (!this._props.items) {
            this._props.items = [];
        }
        var itemsToCheck = Object.assign([], this._props.items);
        itemsToCheck.push(data);
        var validationErr = this._validator(itemsToCheck);
        if (validationErr) {
            throw new Error(validationErr);
        }
        this._props.items = itemsToCheck;
        this.rerender(['item']);
    };
    Dropdown.prototype.setItems = function (items) {
        if (!items || !Array.isArray(items)) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        // It isn't need to check hasValidValue
        var validationErr = this._validator(items);
        if (validationErr) {
            throw new Error(validationErr);
        }
        this._props.items = items;
        this.rerender(['item']);
    };
    Dropdown.prototype.removeItem = function (index) {
        if (this._props.items && this._props.items.length <= index) {
            return false;
        }
        if (typeof index !== 'number') {
            return false;
        }
        if (this._props.items
            && typeof index === 'number'
            && this._props.items[index].value === this._props.value) {
            this._props.value = null;
            this.label = '';
        }
        this._props.items && this._props.items.splice(index, 1);
        return this.rerender(['item']);
    };
    Dropdown.prototype.disableItem = function (value) {
        if (!value) {
            throw Message.common.INVALID_ARGUMENT;
        }
        this._props.items && this._props.items.forEach(function (data) {
            if (data.value === value) {
                data.isDisabled = true;
            }
        });
        this.rerender(['item']);
    };
    Dropdown.prototype.enableItem = function (value) {
        if (!value) {
            throw Message.common.INVALID_ARGUMENT;
        }
        this._props.items && this._props.items.forEach(function (data) {
            if (data.value === value) {
                data.isDisabled = false;
            }
        });
        this.rerender(['item']);
    };
    Dropdown.prototype.disable = function () {
        this._props.isDisabled = true;
        this.rerender(['isDisabled']);
    };
    Dropdown.prototype.enable = function () {
        this._props.isDisabled = false;
        this.rerender(['isDisabled']);
    };
    Dropdown.prototype.on = function (eventName, callback) {
        if (eventName === 'change') {
            this._props.onChange = callback;
            this.rerender(['item']);
        }
        if (eventName === 'listItemsShown') {
            this._props.listItemsShown = callback;
        }
    };
    return Dropdown;
}(Control));
export default Dropdown;
