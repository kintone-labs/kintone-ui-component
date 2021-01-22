import { __assign, __extends } from "tslib";
import '../polyfill';
import Control from '../Control';
import Message from '../../constant/Message';
import '../../css/TextArea.css';
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea(params) {
        var _this = _super.call(this) || this;
        _this.textAreaWidth = 297;
        _this.textAreaHeight = 123;
        _this.mixTextAreaWidth = 297;
        _this.mixtTextAreaHeight = 123;
        _this.currentX = null;
        _this.currentY = null;
        _this.translateX = 0;
        _this.translateY = 0;
        _this._props = __assign(__assign({}, _this._props), {
            placeholder: ''
        });
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        _this.element = _this.createContainerEL();
        _this.rerender(Object.keys(_this._props));
        return _this;
    }
    TextArea.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this, changedAttr);
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('value') !== -1) {
            this.textAreaEl.value = this._props.value || '';
        }
        if (changedAttr.indexOf('placeholder') !== -1) {
            this.textAreaEl.placeholder = this._props.placeholder || '';
        }
        if (changedAttr.indexOf('isDisabled') !== -1) {
            if (this._props.isDisabled) {
                this.textAreaEl.setAttribute('disabled', "" + this._props.isDisabled);
            }
            else {
                this.textAreaEl.removeAttribute('disabled');
            }
        }
    };
    TextArea.prototype.setValue = function (text) {
        this._props.value = text;
        this.rerender(['value']);
    };
    TextArea.prototype.getValue = function () {
        return this._props.value;
    };
    TextArea.prototype.setPlaceholder = function (placeholder) {
        if (!placeholder)
            throw new Error(Message.common.INVALID_ARGUMENT);
        this._props.placeholder = placeholder;
        this.rerender(['placeholder']);
    };
    TextArea.prototype.getPlaceholder = function () {
        return this._props.placeholder;
    };
    TextArea.prototype._onMouseDown = function () {
        var _this = this;
        if (this._props.isDisabled)
            return;
        var eventMouseMove = document.onmousemove;
        var eventMouseUp = document.onmouseup;
        document.onmousemove = function (event) {
            if (_this.currentX && _this.currentY) {
                var dx = event.clientX - _this.currentX;
                if (_this.textAreaWidth + dx < _this.mixTextAreaWidth) {
                    dx = 0;
                }
                var dy = event.clientY - _this.currentY;
                if (_this.textAreaHeight + dy < _this.mixtTextAreaHeight) {
                    dy = 0;
                }
                _this.translateX += dx;
                _this.translateY += dy;
                _this.textAreaWidth += dx;
                _this.textAreaHeight += dy;
                _this.textAreaEl.style.width = _this.textAreaWidth + 'px';
                _this.textAreaEl.style.height = _this.textAreaHeight + 'px';
                _this.resizeEl.style.transform = "translate(" + _this.translateX + "px, " + _this.translateY + "px)";
            }
            _this.currentX = event.clientX;
            _this.currentY = event.clientY;
        };
        document.onmouseup = function () {
            document.onmousemove = eventMouseMove;
            document.onmouseup = eventMouseUp;
            _this.currentX = null;
            _this.currentY = null;
        };
    };
    TextArea.prototype.createContainerEL = function () {
        var container = document.createElement('div');
        container.className = 'kuc-textarea-outer';
        this.textAreaEl = this.createTextareaEL();
        container.appendChild(this.textAreaEl);
        this.resizeEl = this.createResizeEL();
        container.appendChild(this.resizeEl);
        return container;
    };
    TextArea.prototype.createTextareaEL = function () {
        var _this = this;
        var textarea = document.createElement('textarea');
        textarea.className = 'kuc-textarea';
        textarea.onclick = function (e) {
            _this._onClick && _this._onClick(e);
        };
        textarea.onchange = function (e) {
            _this._props.value = e.target.value;
            _this._onChange && _this._onChange(e.target.value);
        };
        textarea.style.width = this.textAreaWidth + 'px';
        textarea.style.height = this.textAreaHeight + 'px';
        return textarea;
    };
    TextArea.prototype.createResizeEL = function () {
        var _this = this;
        var textarea = document.createElement('div');
        textarea.className = 'kuc-textarea-resize';
        textarea.onmousedown = function (e) {
            _this._onMouseDown();
        };
        textarea.style.transform = "translate(" + this.translateX + "px, " + this.translateY + "px)";
        return textarea;
    };
    TextArea.prototype.on = function (eventName, callback) {
        if (eventName === 'click') {
            this._onClick = callback;
        }
        if (eventName === 'change') {
            this._onChange = callback;
        }
    };
    return TextArea;
}(Control));
export default TextArea;
