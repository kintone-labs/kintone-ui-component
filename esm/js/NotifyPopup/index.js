import { __assign, __extends } from "tslib";
import '../polyfill';
import Control from '../Control';
import { elements } from '../utils/util';
import IconButton from '../IconButton';
import '../../css/NotifyPopup.css';
var NotifyPopup = /** @class */ (function (_super) {
    __extends(NotifyPopup, _super);
    function NotifyPopup(params) {
        var _this = _super.call(this) || this;
        _this._props = __assign(__assign({}, _this._props), {
            text: '',
            type: 'error'
        });
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
            _this._props.text = (params.text && typeof params.text === 'string') ? params.text : '';
        }
        // isDisabled always is setted false
        // When we update major version of ui-component, we should delete this prop
        _this._props.isDisabled = false;
        _this.element = _this._createPopupLayout();
        _this.closeButton.on('click', function (e) {
            if (_this._props.isDisabled)
                return;
            _this._onClose && _this._onClose(e);
            _this.hide();
        });
        _this.rerender(['text', 'type']);
        return _this;
    }
    NotifyPopup.prototype._getStyleByType = function () {
        var style = { bgClass: '', color: 'red' };
        switch (this._props.type) {
            case 'success':
                style.bgClass = 'bg-success';
                style.color = 'green';
                break;
            case 'info':
                style.bgClass = 'bg-info';
                style.color = 'blue';
                break;
            default:
                style.bgClass = 'bg-danger';
                style.color = 'red';
        }
        return style;
    };
    NotifyPopup.prototype._createPopupLayout = function () {
        var _this = this;
        var containerDOM = document.createElement('div');
        this.textEl = elements(document.createElement('div')).addClass('kuc-notify-title').appendTo(containerDOM);
        this.textEl.on('click', function (e) {
            if (_this._props.isDisabled)
                return;
            _this._onClick && _this._onClick(e);
        });
        this.closeButton = new IconButton({ type: 'close' });
        elements(document.createElement('div')).addClass('kuc-close-button').appendTo(containerDOM).append(this.closeButton.render());
        return containerDOM;
    };
    NotifyPopup.prototype.on = function (eventName, callback) {
        if (eventName === 'click') {
            this._onClick = callback;
            return;
        }
        if (eventName === 'close') {
            this._onClose = callback;
        }
    };
    NotifyPopup.prototype._getClassName = function () {
        var className = [
            'kuc-notify',
            this._getStyleByType().bgClass
        ];
        return className.join(' ').trim();
    };
    NotifyPopup.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this);
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('text') !== -1) {
            this.textEl.html(this._props.text);
        }
        if (changedAttr.indexOf('type') !== -1) {
            this.element.className = this._getClassName();
            this.closeButton.setColor(this._getStyleByType().color);
        }
    };
    NotifyPopup.prototype.setText = function (text) {
        this._props.text = (typeof text === 'string') ? text : '';
        this.rerender(['text']);
    };
    NotifyPopup.prototype.setType = function (type) {
        this._props.type = type;
        this.rerender(['type']);
    };
    NotifyPopup.prototype.disable = function () {
        // nothing to do
    };
    NotifyPopup.prototype.enable = function () {
        // nothing to do
    };
    return NotifyPopup;
}(Control));
export default NotifyPopup;
