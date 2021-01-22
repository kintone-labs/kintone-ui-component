import { __assign, __extends } from "tslib";
/* eslint-disable @typescript-eslint/no-empty-function */
import Control from '../Control';
var TabName = /** @class */ (function (_super) {
    __extends(TabName, _super);
    function TabName(params) {
        var _this = _super.call(this) || this;
        _this._props = __assign(__assign({}, _this._props), {
            isActive: false,
            tabName: '',
            tabIndex: 0,
            onClickTabItem: function (tabIndex) { }
        });
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        var className = 'kuc-tabs-container';
        if (_this._props.isActive) {
            className += ' kuc-tabs-container-selection';
        }
        if (_this._props.isDisabled) {
            className += ' kuc-tabs-disabled';
            _this.element = document.createElement('li');
            _this.element.className = className;
            _this.element.append(_this._props.tabName);
        }
        else {
            _this.element = document.createElement('li');
            _this.element.className = className;
            _this.element.append(_this._props.tabName);
        }
        _this.on('click', function () { return _this._props.onClickTabItem(_this._props.tabIndex); });
        _this.rerender();
        return _this;
    }
    TabName.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this);
        if (!changedAttr)
            return;
        var className = 'kuc-tabs-container';
        if (changedAttr.indexOf('isActive') !== -1) {
            if (this._props.isActive) {
                className += ' kuc-tabs-container-selection';
            }
        }
        if (changedAttr.indexOf('isDisabled') !== -1) {
            if (this._props.isDisabled) {
                className += ' kuc-tabs-disabled';
            }
            else if (!this._props.isDisabled && this._props.isActive) {
                className += ' kuc-tabs-container-selection';
            }
        }
        this.element.className = className;
    };
    TabName.prototype.select = function () {
        this._props.isActive = true;
        this.rerender(['isActive', 'isDisabled']);
    };
    TabName.prototype.deselect = function () {
        this._props.isActive = false;
        this.rerender(['isActive', 'isDisabled']);
    };
    return TabName;
}(Control));
export default TabName;
