import * as tslib_1 from "tslib";
import Control from "../Control";
import TabName from "./TabName";
import Message from '../../constant/Message';
import '../../css/Tabs.css';
var Tabs = /** @class */ (function (_super) {
    tslib_1.__extends(Tabs, _super);
    function Tabs(params) {
        var _this = _super.call(this) || this;
        _this._props = tslib_1.__assign({}, _this._props, {
            items: [],
            value: 0,
            isDisabled: false,
            isVisible: true
        });
        _this.tabNames = [];
        if (typeof params.isDisabled !== 'boolean') {
            delete params.isDisabled;
        }
        if (params) {
            _this._props = tslib_1.__assign({}, _this._props, params);
        }
        if (_this._validator()) {
            throw new Error(_this._validator());
        }
        _this.element = document.createElement('div');
        _this.element.className = 'kuc-tabs-tabs';
        _this._renderTabNames();
        _this._renderTabContent();
        _this.rerender();
        return _this;
    }
    Tabs.prototype._validator = function () {
        var err;
        if (this._props.items) {
            this._props.items.forEach(function (item, index) {
                if (!item.tabName) {
                    err = Message.tabs.MISSING_TAB_NAME.replace('{{index}}', index.toString());
                }
            });
        }
        if (this._props.value) {
            if (!this._props.items || this._props.value > this._props.items.length - 1 || this._props.value < 0) {
                err = Message.common.INVALID_ARGUMENT;
            }
        }
        return err;
    };
    Tabs.prototype._renderTabNames = function () {
        var _this = this;
        this.tabNamesElement = document.createElement('ul');
        this.tabNamesElement.className = 'kuc-tabs-tab-list';
        this._props.items.forEach(function (item, index) {
            var tabComponent = new TabName({
                tabName: item.tabName,
                tabIndex: index,
                onClickTabItem: function (tabIndex) {
                    _this.setValue(tabIndex);
                },
                isActive: index === _this._props.value,
                isDisabled: item.isDisabled
            });
            _this.tabNames.push(tabComponent);
            _this.tabNamesElement.appendChild(tabComponent.render());
        });
        this.element.appendChild(this.tabNamesElement);
    };
    Tabs.prototype._renderTabContent = function () {
        var tabContentWrapper = document.createElement('div');
        tabContentWrapper.className = 'kuc-tabs-tab-contents';
        this.element.appendChild(tabContentWrapper);
        this.tabContentElement = document.createElement('div');
        this.tabContentElement.append(this._props.items[this._props.value].tabContent || '');
        tabContentWrapper.appendChild(this.tabContentElement);
    };
    Tabs.prototype.rerender = function (changedAttr) {
        var _this = this;
        _super.prototype.rerender.call(this);
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('value') !== -1) {
            this.tabNames.forEach(function (tabNames, index) {
                if (index === _this._props.value) {
                    tabNames.select();
                }
                else {
                    tabNames.deselect();
                }
            });
            while (this.tabContentElement.firstChild) {
                this.tabContentElement.removeChild(this.tabContentElement.firstChild);
            }
            this.tabContentElement.append(this._props.items[this._props.value].tabContent || '');
        }
        if (changedAttr.indexOf('addItems') !== -1) {
            var tabComponent = new TabName({
                tabName: this._props.items[this._props.items.length - 1].tabName,
                tabIndex: this._props.items.length - 1,
                onClickTabItem: function (tabIndex) {
                    _this.setValue(tabIndex);
                },
                isActive: this._props.items.length - 1 === this._props.value
            });
            this.tabNames.push(tabComponent);
            this.tabNamesElement.appendChild(tabComponent.render());
        }
        if (changedAttr.indexOf('removeItems') !== -1) {
            while (this.tabNamesElement.firstChild) {
                this.tabNamesElement.removeChild(this.tabNamesElement.firstChild);
            }
            this._props.items.forEach(function (item, index) {
                var tabComponent = new TabName({
                    tabName: item.tabName,
                    tabIndex: index,
                    onClickTabItem: function (tabIndex) {
                        _this.setValue(tabIndex);
                    },
                    isActive: index === _this._props.value
                });
                _this.tabNames.push(tabComponent);
                _this.tabNamesElement.append(tabComponent.render());
            });
            while (this.tabContentElement.firstChild) {
                this.tabContentElement.removeChild(this.tabContentElement.firstChild);
            }
            this.tabContentElement.append(this._props.items[this._props.value].tabContent || '');
        }
    };
    Tabs.prototype.setValue = function (value) {
        if (!value && value !== 0) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        this._props.value = value;
        if (this._validator()) {
            throw new Error(this._validator());
        }
        this.rerender(['value']);
    };
    Tabs.prototype.getValue = function () {
        return this._props.value;
    };
    Tabs.prototype.addItem = function (item) {
        if (!item) {
            throw Message.common.INVALID_ARGUMENT;
        }
        if (!item.tabName) {
            throw Message.tabs.MISSING_NEW_ITEM_TABNAME;
        }
        this._props.items.push(item);
        if (this._validator()) {
            throw new Error(this._validator());
        }
        this.rerender(['addItems']);
    };
    Tabs.prototype.removeItem = function (index) {
        if (typeof index !== 'number') {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        if (index >= 0 && index < this._props.items.length) {
            this._props.items.splice(index, 1);
            this.rerender(['removeItems']);
        }
        else {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
    };
    Tabs.prototype.getItems = function () {
        return this._props.items;
    };
    Tabs.prototype.disableItem = function (tabName) {
        var _this = this;
        if (!tabName) {
            throw Message.common.INVALID_ARGUMENT;
        }
        this._props.items.forEach(function (item, index) {
            if (item.tabName === tabName) {
                _this.tabNames[index].disable();
            }
        });
    };
    Tabs.prototype.enableItem = function (tabName) {
        var _this = this;
        if (!tabName) {
            throw Message.common.INVALID_ARGUMENT;
        }
        this._props.items.forEach(function (item, index) {
            if (item.tabName === tabName) {
                _this.tabNames[index].enable();
            }
        });
    };
    return Tabs;
}(Control));
export default Tabs;
