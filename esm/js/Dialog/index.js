import { __assign, __extends } from "tslib";
import '../polyfill';
import Control from '../Control';
import IconButton from '../IconButton';
import Message from '../../constant/Message';
import '../../css/Dialog.css';
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog(params) {
        var _this = _super.call(this) || this;
        _this._props = __assign(__assign({}, _this._props), {
            header: '',
            content: '',
            footer: '',
            showCloseButton: true,
            isVisible: true
        });
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        var error = _this._validator();
        if (error) {
            throw new Error(error);
        }
        _this.element = _this._createDialogLayout();
        _this.rerender(['isVisible']);
        return _this;
    }
    Dialog.prototype._createDialogLayout = function () {
        var _this = this;
        var wrapperDiv = document.createElement('div');
        this._headerDivEl = document.createElement('div');
        this._headerDivEl.className = 'kuc-dialog-header';
        if (this._props.header) {
            this._headerDivEl.append(this._props.header);
        }
        else {
            this._headerDivEl.append(document.createElement('span'));
        }
        if (this._props.showCloseButton) {
            var spanEl = document.createElement('span');
            spanEl.className = 'kuc-dialog-close-button';
            this._closeButton = new IconButton({ type: 'close' });
            spanEl.appendChild(this._closeButton.render());
            this._closeButton.on('click', function () {
                _this.hide();
            });
            this._headerDivEl.append(spanEl);
        }
        else {
            this._headerDivEl.append(document.createElement('span'));
        }
        this._footerDivEl = document.createElement('div');
        this._footerDivEl.className = 'kuc-dialog-footer';
        if (this._props.footer) {
            this._footerDivEl.append(this._props.footer);
        }
        this._bodyContentDivEl = document.createElement('div');
        this._bodyContentDivEl.className = 'kuc-dialog-body';
        if (this._props.content) {
            this._bodyContentDivEl.append(this._props.content);
        }
        var wrapper = document.createElement('div');
        wrapper.className = 'kuc-dialog-wrapper';
        this._containerEl = document.createElement('div');
        this._containerEl.className = 'kuc-dialog-container';
        wrapper.append(this._headerDivEl, this._bodyContentDivEl, this._footerDivEl);
        this._containerEl.append(wrapper);
        wrapperDiv.appendChild(this._containerEl);
        return wrapperDiv;
    };
    Dialog.prototype.rerender = function (changedAttr) {
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('header') !== -1) {
            while (this._headerDivEl.childNodes.length > 1 && this._headerDivEl.firstChild) {
                this._headerDivEl.removeChild(this._headerDivEl.firstChild);
            }
            if (this._props.header) {
                this._headerDivEl.prepend(this._props.header);
            }
        }
        if (changedAttr.indexOf('footer') !== -1) {
            while (this._footerDivEl.firstChild) {
                this._footerDivEl.removeChild(this._footerDivEl.firstChild);
            }
            if (this._props.footer) {
                this._footerDivEl.append(this._props.footer);
            }
        }
        if (changedAttr.indexOf('content') !== -1) {
            while (this._bodyContentDivEl.firstChild) {
                this._bodyContentDivEl.removeChild(this._bodyContentDivEl.firstChild);
            }
            if (this._props.content) {
                this._bodyContentDivEl.append(this._props.content);
            }
        }
        if (changedAttr.indexOf('isVisible') !== -1) {
            if (!this._props.isVisible) {
                this._containerEl.classList.add('hidden');
            }
            else {
                this._containerEl.classList.remove('hidden');
            }
        }
    };
    Dialog.prototype._validator = function () {
        var err = null;
        if (typeof this._props.header !== 'string' && !(this._props.header instanceof HTMLElement)) {
            err = Message.common.INVALID_ARGUMENT;
        }
        if (typeof this._props.footer !== 'string' && !(this._props.footer instanceof HTMLElement)) {
            err = Message.common.INVALID_ARGUMENT;
        }
        if (typeof this._props.content !== 'string' && !(this._props.content instanceof HTMLElement)) {
            err = Message.common.INVALID_ARGUMENT;
        }
        if (typeof this._props.showCloseButton !== 'boolean') {
            err = Message.common.INVALID_ARGUMENT;
        }
        if (typeof this._props.isVisible !== 'boolean') {
            err = Message.common.INVALID_ARGUMENT;
        }
        return err;
    };
    Dialog.prototype.setHeader = function (headerContent) {
        if (typeof headerContent !== 'string' && !(headerContent instanceof HTMLElement)) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        this._props.header = headerContent;
        this.rerender(['header']);
    };
    Dialog.prototype.getHeader = function () {
        return this._props.header;
    };
    Dialog.prototype.setFooter = function (footerContent) {
        if (typeof footerContent !== 'string' && !(footerContent instanceof HTMLElement)) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        this._props.footer = footerContent;
        this.rerender(['footer']);
    };
    Dialog.prototype.getFooter = function () {
        return this._props.footer;
    };
    Dialog.prototype.setContent = function (bodyContent) {
        if (typeof bodyContent !== 'string' && !(bodyContent instanceof HTMLElement)) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        this._props.content = bodyContent;
        this.rerender(['content']);
    };
    Dialog.prototype.getContent = function () {
        return this._props.content;
    };
    return Dialog;
}(Control));
export default Dialog;
