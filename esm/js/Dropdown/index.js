import * as tslib_1 from "tslib";
import Control from "../Control";
import Message from "../../constant/Message";
import Item from "./Item";
import AbstractSingleSelection from "../utils/AbstractSingleSelection";
import { mdilChevronDown } from "@mdi/light-js";
import "../../css/Dropdown.css";
var Dropdown = /** @class */ (function (_super) {
    tslib_1.__extends(Dropdown, _super);
    function Dropdown(params) {
        var _this = _super.call(this) || this;
        _this._props = tslib_1.__assign({}, _this._props, {
            items: []
        });
        _this.itemComps = [];
        _this.isListVisible = false;
        _this._showItems = function () {
            _this.isListVisible = true;
            _this.listOuterEl.setAttribute("style", "display: block");
        };
        _this._hideItems = function () {
            _this.isListVisible = false;
            _this.listOuterEl.setAttribute("style", "display: none");
        };
        _this._handleDropdownClick = function () {
            if (_this.isListVisible) {
                _this._hideItems();
                return;
            }
            _this._showItems();
        };
        _this._handleClickOutside = function () {
            _this._hideItems();
        };
        _this._handleItemClick = function (item) {
            _this._props.value = item.value;
            _this.label = item.label || "";
            _this._hideItems();
            _this.rerender(["item"]);
            _this._props.onChange && _this._props.onChange(_this._props.value);
        };
        _this._renderSubContainer = function () {
            _this.className = ["kuc-dropdown", _this._props.isDisabled ? "kuc-dropdown-disable" : ""];
            var subcontainerEl = _this._createDom("div", "kuc-dropdown-sub-container");
            subcontainerEl.setAttribute("tabIndex", "-1");
            subcontainerEl.onblur = _this._handleClickOutside;
            var outerEl = _this._createDom("div", "kuc-dropdown-outer");
            _this.dropdownEl = _this._createDom("div", _this.className.join(" ").trim());
            if (!_this._props.isDisabled) {
                _this.dropdownEl.onclick = _this._handleDropdownClick;
            }
            var selectedEl = _this._createDom("div", "kuc-dropdown-selected");
            var selectedNameEl = _this._createDom("span", "kuc-dropdown-selected-name");
            _this.nameLabelEl = _this._createDom("span", "kuc-dropdown-selected-label");
            _this.nameLabelEl.innerText = _this.label || "";
            var iconEl = _this._createDom("span", "icon-arrow-down");
            iconEl.appendChild(_this._createDownIconEl());
            selectedNameEl.appendChild(_this.nameLabelEl);
            selectedNameEl.appendChild(iconEl);
            selectedEl.appendChild(selectedNameEl);
            _this.dropdownEl.appendChild(selectedEl);
            outerEl.appendChild(_this.dropdownEl);
            _this.listOuterEl = _this._createDom("div", "kuc-list-outer");
            _this.listOuterEl.setAttribute("style", "display: none");
            _this.itemComps =
                _this._props.items &&
                    _this._props.items.map(function (item) {
                        var newItem = new Item({
                            selected: _this._props.value === item.value,
                            item: item,
                            onClick: _this._handleItemClick
                        });
                        return newItem;
                    });
            _this.itemComps.forEach(function (item) {
                _this.listOuterEl.appendChild(item.render());
            });
            subcontainerEl.appendChild(outerEl);
            subcontainerEl.appendChild(_this.listOuterEl);
            return subcontainerEl;
        };
        if (typeof params === "object" && params !== null && typeof params.isDisabled !== "boolean") {
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
        _this._props.items &&
            _this._props.items.some(function (item) {
                if (item.value === _this._props.value) {
                    _this.label = item.label;
                    return true;
                }
                return false;
            });
        _this.element = _this._createDom("div", "kuc-dropdown-container");
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
    Dropdown.prototype._createDownIconEl = function () {
        var pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathEl.setAttribute("d", mdilChevronDown);
        var svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgEl.appendChild(pathEl);
        return svgEl;
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
        this._props.items.forEach(function (item) {
            if (item.value === value) {
                _this._props.value = item.value;
                _this.label = item.label;
            }
        });
        this.rerender(["value"]);
    };
    Dropdown.prototype.getValue = function () {
        return this._props.value;
    };
    Dropdown.prototype.getItems = function () {
        return this._props.items;
    };
    Dropdown.prototype.addItem = function (item) {
        this._props.items.push(item);
        this.rerender(["item"]);
    };
    Dropdown.prototype.removeItem = function (index) {
        if (this._props.items.length <= index) {
            return false;
        }
        this._props.items.splice(index, 1);
        return this.rerender(["item"]);
    };
    Dropdown.prototype.disableItem = function (value) {
        this._props.items.forEach(function (item) {
            if (item.value === value) {
                item.isDisabled = true;
            }
        });
        this.rerender(["item"]);
    };
    Dropdown.prototype.enableItem = function (value) {
        this._props.items.forEach(function (item) {
            if (item.value === value) {
                item.isDisabled = false;
            }
        });
        this.rerender(["item"]);
    };
    Dropdown.prototype.disable = function () {
        this._props.isDisabled = true;
        this.rerender(["isDisabled"]);
    };
    Dropdown.prototype.enable = function () {
        this._props.isDisabled = false;
        this.rerender(["isDisabled"]);
    };
    Dropdown.prototype.on = function (eventName, callback) {
        if (eventName === "change") {
            this._props.onChange = callback;
            this.rerender(["item"]);
        }
    };
    return Dropdown;
}(Control));
export default Dropdown;
