import { __assign, __extends } from "tslib";
import '../polyfill';
import Control from '../Control';
import { mdiPlus, mdiMinus, mdiClose, mdiFile, mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import '../../css/IconButton.css';
var IconButton = /** @class */ (function (_super) {
    __extends(IconButton, _super);
    function IconButton(params) {
        var _this = _super.call(this) || this;
        _this._props = __assign(__assign({}, _this._props), {
            type: 'insert',
            size: 'normal',
            color: 'gray',
            shape: 'circle'
        });
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        _this.element = _this._createLayout();
        _this.rerender(['btnStyle', 'iconStyle', 'isDisabled', 'isVisible']);
        return _this;
    }
    IconButton.prototype._createLayout = function () {
        var _this = this;
        var btnEl = document.createElement('button');
        btnEl.addEventListener('click', function (e) {
            if (_this._props.isDisabled)
                return;
            _this._onClick && _this._onClick(e);
        });
        this.pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        this.iconEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.iconEl.appendChild(this.pathEl);
        btnEl.appendChild(this.iconEl);
        return btnEl;
    };
    IconButton.prototype._getClassName = function () {
        var colors = ['gray', 'blue', 'red', 'green', 'transparent'];
        var color = 'gray';
        if (this._props.color && colors.indexOf(this._props.color) !== -1) {
            color = this._props.color;
        }
        var shape = this._props.shape === 'square' ? 'square' : 'circle';
        var className = [
            'kuc-icon-btn',
            this._getClassSize(),
            this._props.type === 'remove' && color === 'gray' ? 'hover-danger' : '',
            color,
            shape
        ];
        return className.join(' ').trim();
    };
    IconButton.prototype._getClassSize = function () {
        var className = this._props.size === 'small' ? 'small' : 'normal';
        return className;
    };
    IconButton.prototype._getIconData = function () {
        var iconData = mdiPlus;
        switch (this._props.type) {
            case 'insert':
                break;
            case 'remove':
                iconData = mdiMinus;
                break;
            case 'close':
                iconData = mdiClose;
                break;
            case 'file':
                iconData = mdiFile;
                break;
            case 'right':
                iconData = mdiChevronRight;
                break;
            case 'left':
                iconData = mdiChevronLeft;
                break;
        }
        return iconData;
    };
    IconButton.prototype.rerender = function (changedAttr) {
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('btnStyle') !== -1) {
            this.element.className = this._getClassName();
        }
        if (changedAttr.indexOf('iconStyle') !== -1) {
            this.pathEl.setAttribute('d', this._getIconData());
        }
        if (changedAttr.indexOf('isDisabled') !== -1) {
            if (this._props.isDisabled === true) {
                this.element.setAttribute('disabled', "" + this._props.isDisabled);
            }
            else {
                this.element.removeAttribute('disabled');
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
    IconButton.prototype.setType = function (type) {
        this._props.type = type;
        this.rerender(['iconStyle']);
    };
    IconButton.prototype.setSize = function (size) {
        this._props.size = size;
        this.rerender(['btnStyle']);
    };
    IconButton.prototype.setShape = function (shape) {
        this._props.shape = shape;
        this.rerender(['btnStyle']);
    };
    IconButton.prototype.setColor = function (color) {
        this._props.color = color;
        this.rerender(['btnStyle']);
    };
    IconButton.prototype.on = function (eventName, callback) {
        if (eventName === 'click') {
            this._onClick = callback;
        }
    };
    return IconButton;
}(Control));
export default IconButton;
