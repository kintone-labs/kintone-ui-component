import { __assign, __extends } from "tslib";
import '../polyfill';
import Control from '../Control';
import '../../css/FieldGroup.css';
var FieldGroup = /** @class */ (function (_super) {
    __extends(FieldGroup, _super);
    function FieldGroup(params) {
        var _this = _super.call(this) || this;
        _this._props = __assign(__assign({}, _this._props), {
            name: '',
            toggle: 'collapse'
        });
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        _this.element = document.createElement('div');
        _this.element.className = 'kuc-fieldgroup';
        var container = document.createElement('div');
        container.className = 'kuc-fieldgroup-container';
        _this.fgTab = document.createElement('span');
        _this.fgTab.className = _this._getClassName();
        _this.fgTab.setAttribute('role', 'button');
        _this.fgTab.setAttribute('tabindex', '0');
        _this.fgTab.onclick = _this._handleToggleClick.bind(_this);
        _this.fgTabArrow = document.createElement('span');
        _this.fgTabArrow.className = _this._getArrowClassName();
        _this.fgTabLabel = document.createElement('span');
        if (_this._props.name) {
            _this.fgTabLabel.innerText = _this._props.name;
        }
        _this.fgTab.appendChild(_this.fgTabArrow);
        _this.fgTab.appendChild(_this.fgTabLabel);
        _this.fgContents = document.createElement('div');
        _this.fgContents.className = 'kuc-fieldgroup-contents';
        if (_this._props.content) {
            _this.fgContents.appendChild(_this._props.content);
        }
        container.appendChild(_this.fgTab);
        container.appendChild(_this.fgContents);
        _this.element.appendChild(container);
        return _this;
    }
    FieldGroup.prototype._getClassName = function () {
        return [
            'kuc-fieldgroup-label',
            'label',
            this._props.toggle === 'expand' ? 'expand' : 'collapse'
        ].join(' ').trim();
    };
    FieldGroup.prototype._getArrowClassName = function () {
        return [
            'kuc-arrow',
            this._props.toggle === 'expand' ? 'down' : 'right'
        ].join(' ').trim();
    };
    FieldGroup.prototype._handleToggleClick = function () {
        this._props.toggle = (this._props.toggle === 'expand' ? 'collapse' : 'expand');
        this.fgTab.className = this._getClassName();
        this.fgTabArrow.className = this._getArrowClassName();
    };
    FieldGroup.prototype.render = function () {
        return _super.prototype.render.call(this);
    };
    FieldGroup.prototype.setContent = function (content) {
        this._props.content = content;
        while (this.fgContents.firstChild) {
            this.fgContents.removeChild(this.fgContents.firstChild);
        }
        this.fgContents.appendChild(this._props.content);
    };
    FieldGroup.prototype.getContent = function () {
        return this._props.content;
    };
    FieldGroup.prototype.setName = function (name) {
        this._props.name = name;
        this.fgTabLabel.innerText = this._props.name;
    };
    FieldGroup.prototype.getName = function () {
        return this._props.name;
    };
    FieldGroup.prototype.setToggle = function (toggle) {
        this._props.toggle = toggle;
        this.fgTab.className = this._getClassName();
        this.fgTabArrow.className = this._getArrowClassName();
    };
    FieldGroup.prototype.getToggle = function () {
        return this._props.toggle;
    };
    return FieldGroup;
}(Control));
export default FieldGroup;
