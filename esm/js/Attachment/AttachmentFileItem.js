import { __assign, __extends } from "tslib";
/* eslint-disable @typescript-eslint/no-empty-function */
import Control from '../Control';
import '../../css/Attachment.css';
var AttachmentFileItem = /** @class */ (function (_super) {
    __extends(AttachmentFileItem, _super);
    function AttachmentFileItem(params) {
        var _this = _super.call(this) || this;
        _this.ONE_GB = 1073741824;
        _this.ONE_MB = 1048576;
        _this.ONE_KB = 1024;
        if (params) {
            _this._props = __assign({}, params);
        }
        if (!_this._props.onFileRemove || typeof _this._props.onFileRemove !== 'function') {
            _this._props.onFileRemove = function () { };
        }
        _this.element = _this.createItemContainerEl();
        return _this;
    }
    AttachmentFileItem.prototype._formatFileSize = function (size) {
        if (size >= this.ONE_GB) {
            return Math.round(size / this.ONE_GB) + ' GB';
        }
        else if (size >= this.ONE_MB) {
            return Math.round(size / this.ONE_MB) + ' MB';
        }
        else if (size >= this.ONE_KB) {
            return Math.round(size / this.ONE_KB) + ' KB';
        }
        return Math.round(size) + ' bytes';
    };
    AttachmentFileItem.prototype.createItemContainerEl = function () {
        var _this = this;
        var container = document.createElement('div');
        container.classList.add('kuc-attachment_delete');
        container.classList.add('kuc-attachment-file-item');
        var fileNameEl = document.createElement('div');
        fileNameEl.classList.add('kuc-attachment_file_name');
        fileNameEl.setAttribute('title', this._props.fileName || '');
        fileNameEl.innerText = this._props.fileName || '';
        container.appendChild(fileNameEl);
        var actionContainerEl = document.createElement('div');
        actionContainerEl.classList.add('kuc-attachment_file_action');
        var actionInputEl = document.createElement('button');
        actionInputEl.setAttribute('type', 'button');
        actionInputEl.onclick = function () {
            _this.onRemove();
        };
        actionContainerEl.appendChild(actionInputEl);
        container.appendChild(actionContainerEl);
        var fileSizeEl = document.createElement('div');
        fileSizeEl.classList.add('kuc-attachment_file_size');
        if (typeof this._props.fileSize === 'number') {
            fileSizeEl.innerText = this._formatFileSize(this._props.fileSize);
        }
        else {
            fileSizeEl.innerText = 'NaN bytes';
        }
        container.appendChild(fileSizeEl);
        var clearEl = document.createElement('div');
        clearEl.classList.add('kuc-attachment_clearer');
        container.appendChild(actionContainerEl);
        return container;
    };
    AttachmentFileItem.prototype.onRemove = function () {
        if (this._props.onFileRemove) {
            this._props.onFileRemove(this._props.index || 0);
            this.element.remove();
        }
    };
    return AttachmentFileItem;
}(Control));
export default AttachmentFileItem;
