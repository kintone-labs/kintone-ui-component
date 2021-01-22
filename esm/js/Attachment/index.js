import { __assign, __extends, __spreadArrays } from "tslib";
/* eslint-disable @typescript-eslint/no-empty-function */
import '../polyfill';
import Control from '../Control';
import AttachmentFileItem from './AttachmentFileItem';
import '../../css/Attachment.css';
var Attachment = /** @class */ (function (_super) {
    __extends(Attachment, _super);
    function Attachment(params) {
        var _this = _super.call(this) || this;
        _this._onFileRemove = function () { };
        _this._onFileAdd = function () { };
        _this.dragEnterCounter = 0;
        _this._isFileOrDirectoryDrag = function (event) {
            if (event.dataTransfer && event.dataTransfer.items !== undefined) {
                for (var i = 0; i < event.dataTransfer.items.length; i++) {
                    if (event.dataTransfer.items[i].kind.toLowerCase() === 'file') {
                        return true;
                    }
                }
            }
            if (event.dataTransfer && event.dataTransfer.types !== undefined) {
                for (var i = 0; i < event.dataTransfer.types.length; i++) {
                    if (event.dataTransfer.types[i].toLowerCase() === 'files') {
                        return true;
                    }
                }
            }
            return false;
        };
        _this._isFileDrop = function (event) {
            // handle IE
            if (event.dataTransfer && event.dataTransfer.files.length === 0) {
                return false;
            }
            // handle Chrome, Firefox, Edge, Safari
            if (event.dataTransfer && event.dataTransfer.items) {
                for (var i = 0; i < event.dataTransfer.items.length; i++) {
                    if (typeof (event.dataTransfer.items[i].webkitGetAsEntry) === 'function'
                        && event.dataTransfer.items[i].webkitGetAsEntry().isDirectory) {
                        return false;
                    }
                }
            }
            return true;
        };
        _this._props = __assign(__assign({}, _this._props), {
            files: [],
            browseButtonText: 'Browse',
            dropZoneText: 'Drop files here.',
            isErrorVisible: false,
        });
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        _this.element = _this.createContainerEL();
        _this.rerender(Object.keys(_this._props));
        return _this;
    }
    Attachment.prototype.rerender = function (changedAttr) {
        var _this = this;
        _super.prototype.rerender.call(this);
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('browseButtonText') !== -1) {
            this.attachInputTextEl.innerText = this._props.browseButtonText || '';
        }
        if (changedAttr.indexOf('fileLimitText') !== -1) {
            this.constraintsFileEl.innerText = this._props.fileLimitText || '';
        }
        if (changedAttr.indexOf('dropZoneText') !== -1) {
            this.dropZoneElement.innerText = this._props.dropZoneText || '';
        }
        if (changedAttr.indexOf('files') !== -1 && Array.isArray(this._props.files)) {
            this._props.files.forEach(function (file, index) {
                var itemFile = new AttachmentFileItem({
                    index: index,
                    fileName: file.name,
                    fileSize: file.size,
                    onFileRemove: function (i) {
                        _this._removeFile(i);
                    }
                });
                _this.listFileEl.appendChild(itemFile.render());
            });
        }
        if (changedAttr.indexOf('isErrorVisible') !== -1) {
            this.fileErrorEl.style.display = 'none';
            if (this._props.isErrorVisible === true) {
                this.fileErrorEl.style.display = 'block';
            }
        }
        if (changedAttr.indexOf('errorMessage') !== -1) {
            this.fileErrorEl.innerText = this._props.errorMessage || '';
        }
    };
    Attachment.prototype._addFiles = function (event) {
        var _this = this;
        var addedFiles = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        addedFiles = Object.keys(addedFiles).map(function (e) {
            return addedFiles[e];
        });
        addedFiles.forEach(function (file, index) {
            var itemFile = new AttachmentFileItem({
                index: _this._props.files && _this._props.files.length + index,
                fileName: file.name,
                fileSize: file.size,
                onFileRemove: function (i) {
                    _this._removeFile(i);
                }
            });
            _this.listFileEl.appendChild(itemFile.render());
        });
        if (this._props.files) {
            this._props.files = __spreadArrays(this._props.files, addedFiles);
        }
        this._onFileAdd(this._props.files);
    };
    Attachment.prototype.setFiles = function (files) {
        this._props.files = files;
        this.listFileEl.innerHTML = '';
        this.rerender(['files']);
    };
    Attachment.prototype.getFiles = function () {
        return this._props.files;
    };
    Attachment.prototype.setDropZoneText = function (text) {
        this._props.dropZoneText = text;
        this.rerender(['dropZoneText']);
    };
    Attachment.prototype.setBrowseButtonText = function (text) {
        this._props.browseButtonText = text;
        this.rerender(['browseButtonText']);
    };
    Attachment.prototype.setFileLimitText = function (text) {
        this._props.fileLimitText = text;
        this.rerender(['fileLimitText']);
    };
    Attachment.prototype.setErrorMessage = function (text) {
        this._props.errorMessage = text;
        this.rerender(['errorMessage']);
    };
    Attachment.prototype.showError = function () {
        this._props.isErrorVisible = true;
        this.rerender(['isErrorVisible']);
    };
    Attachment.prototype.hideError = function () {
        this._props.isErrorVisible = false;
        this.rerender(['isErrorVisible']);
    };
    Attachment.prototype.on = function (eventName, callback) {
        if (eventName === 'filesAdd') {
            this._onFileAdd = callback;
        }
        if (eventName === 'fileRemove') {
            this._onFileRemove = callback;
        }
    };
    Attachment.prototype._removeFile = function (index) {
        this._props.files && this._props.files.splice(index, 1);
        this._onFileRemove(this._props.files);
    };
    Attachment.prototype.createFileErrorEl = function () {
        var errorEl = document.createElement('span');
        errorEl.innerHTML = this._props.errorMessage || '';
        var fileErrorEl = document.createElement('div');
        fileErrorEl.className = 'kuc-attachment-file-error';
        fileErrorEl.style.display = 'none';
        fileErrorEl.appendChild(errorEl);
        return fileErrorEl;
    };
    Attachment.prototype.createContainerEL = function () {
        var container = document.createElement('div');
        container.className = 'kuc-attachment-outer';
        container.appendChild(this.createAttachDnDContainerEL());
        this.fileErrorEl = this.createFileErrorEl();
        container.appendChild(this.fileErrorEl);
        return container;
    };
    Attachment.prototype._onDrop = function (event) {
        event.preventDefault();
        this._onDragLeave();
        if (this._isFileDrop(event)) {
            this._addFiles(event);
        }
    };
    Attachment.prototype._onDragOver = function (event) {
        event.stopPropagation();
        if (this._isFileOrDirectoryDrag(event)) {
            event.preventDefault();
        }
    };
    Attachment.prototype._onDragEnter = function (event) {
        this.dragEnterCounter++;
        if (this.dragEnterCounter === 1 && this._isFileOrDirectoryDrag(event)) {
            event.preventDefault();
            var fileDroppableElement = this.dropZoneElement.parentElement;
            var attachmentFileElement = fileDroppableElement && fileDroppableElement.parentElement;
            if (attachmentFileElement) {
                attachmentFileElement.style.height = (attachmentFileElement.offsetHeight - 16 * 2) + 'px';
                attachmentFileElement.className = 'kuc-attachment-file kuc-attachment-drag-drop-active';
                this.dropZoneElement.style.width = (attachmentFileElement.offsetWidth - 4) + 'px';
                this.dropZoneElement.style.height = (attachmentFileElement.offsetHeight - 4) + 'px';
            }
            if (fileDroppableElement)
                fileDroppableElement.style.display = '';
        }
    };
    Attachment.prototype._onDragLeave = function () {
        this.dragEnterCounter--;
        if (this.dragEnterCounter === 0) {
            var fileDroppableElement = this.dropZoneElement.parentElement;
            var attachmentFileElement = fileDroppableElement && fileDroppableElement.parentElement;
            if (attachmentFileElement) {
                attachmentFileElement.style.height = 'auto';
                attachmentFileElement.className = 'kuc-attachment-file';
            }
            if (fileDroppableElement)
                fileDroppableElement.style.display = 'none';
        }
    };
    Attachment.prototype.createAttachDnDContainerEL = function () {
        var container = document.createElement('div');
        container.className = 'kuc-attachment-file';
        container.ondragover = this._onDragOver.bind(this);
        container.ondragenter = this._onDragEnter.bind(this);
        container.ondragleave = this._onDragLeave.bind(this);
        container.appendChild(this.createAttachDnDEL());
        this.listFileEl = this.createlistFileEL();
        container.appendChild(this.listFileEl);
        container.appendChild(this.renderAttachInputEl());
        this.constraintsFileEl = this.createFileConstraintsEL();
        container.appendChild(this.constraintsFileEl);
        return container;
    };
    Attachment.prototype.createAttachDnDEL = function () {
        var droppableFileEl = document.createElement('div');
        droppableFileEl.className = 'kuc-attachment-file-droppable';
        droppableFileEl.style.display = 'none';
        droppableFileEl.ondrop = this._onDrop.bind(this);
        this.dropZoneElement = document.createElement('div');
        this.dropZoneElement.className = 'kuc-attachment-file-droppable-text';
        droppableFileEl.appendChild(this.dropZoneElement);
        return droppableFileEl;
    };
    Attachment.prototype.createlistFileEL = function () {
        var listFileEl = document.createElement('div');
        listFileEl.classList.add('kuc-attachment-file-filelist', 'kuc-attachment-file-filelist-list');
        return listFileEl;
    };
    Attachment.prototype.bindAttachInputElEvent = function (attachInputEl) {
        var _this = this;
        attachInputEl.onchange = function (event) {
            _this._addFiles(event);
        };
        attachInputEl.onclick = function () {
            attachInputEl.value = '';
        };
    };
    Attachment.prototype.renderAttachInputEl = function () {
        var attachInputContainerEl = document.createElement('a');
        attachInputContainerEl.className = 'kuc-attachment-file-upload-button';
        attachInputContainerEl.tabIndex = -1;
        this.attachInputTextEl = document.createElement('span');
        this.attachInputTextEl.className = 'kuc-attachment-file-upload-button-text';
        attachInputContainerEl.appendChild(this.attachInputTextEl);
        var attachInputEl = document.createElement('input');
        attachInputEl.setAttribute('type', 'file');
        attachInputEl.setAttribute('multiple', 'true');
        this.bindAttachInputElEvent(attachInputEl);
        var wrapInputEl = document.createElement('div');
        wrapInputEl.className = 'kuc-attachment-file-upload-html5';
        wrapInputEl.appendChild(attachInputEl);
        attachInputContainerEl.appendChild(wrapInputEl);
        return attachInputContainerEl;
    };
    Attachment.prototype.createFileConstraintsEL = function () {
        var constraintsFileEl = document.createElement('div');
        constraintsFileEl.classList.add('kuc-attachment-file-constraints');
        return constraintsFileEl;
    };
    return Attachment;
}(Control));
export default Attachment;
