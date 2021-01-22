import { __assign, __extends } from "tslib";
import Control from '../Control';
import { mdiCheckBold } from '@mdi/js';
import '../../css/Item.css';
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(params) {
        var _this = _super.call(this) || this;
        _this._props = __assign(__assign({}, _this._props), {
            isSelected: false,
            isDisabled: false,
            className: '',
        });
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        var className = 'kuc-list-item';
        if (_this._props.isSelected) {
            className += ' kuc-list-item-selected';
        }
        if (_this._props.isDisabled) {
            className += ' kuc-list-item-disable';
        }
        _this.element = document.createElement('div');
        _this.element.className = className;
        var spanIconCheckElement = document.createElement('span');
        spanIconCheckElement.className = 'kuc-icon-check';
        spanIconCheckElement.appendChild(_this._createCheckIconEl());
        var spanListItemLabelElement = document.createElement('span');
        spanListItemLabelElement.className = 'kuc-list-item-label';
        spanListItemLabelElement.append(_this._props.label || '');
        _this.element.appendChild(spanIconCheckElement);
        _this.element.appendChild(spanListItemLabelElement);
        _this.on('click', function (e) {
            _this._props.isSelected = !_this._props.isSelected;
            if (_this._props.onClick) {
                _this._props.onClick(_this);
            }
            _this.rerender(['isSelected']);
        });
        _this.rerender();
        return _this;
    }
    Item.prototype._createCheckIconEl = function () {
        var pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathEl.setAttribute('d', mdiCheckBold);
        var svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgEl.appendChild(pathEl);
        return svgEl;
    };
    Item.prototype.rerender = function (changedAttr) {
        if (!changedAttr)
            return;
        var className = 'kuc-list-item';
        if (changedAttr.indexOf('isSelected') !== -1) {
            if (this._props.isSelected) {
                className += ' kuc-list-item-selected';
            }
        }
        if (changedAttr.indexOf('isDisabled') !== -1) {
            if (this._props.isDisabled) {
                className += ' kuc-list-item-disable';
            }
        }
        this.element.className = className;
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
    return Item;
}(Control));
export default Item;
