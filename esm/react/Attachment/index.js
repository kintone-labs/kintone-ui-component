import { __spreadArrays } from "tslib";
import React from 'react';
import AttachmentFileItem from './AttachmentFileItem';
import '../../css/font.css';
import '../../css/Attachment.css';
var Attachment = function (props) {
    if (props.isVisible === false) {
        return null;
    }
    var dropZoneElement;
    var inputElement;
    var dragEnterCounter = 0;
    var _removeFile = function (index) {
        if (props.onFileRemove && props.files) {
            var files = __spreadArrays(props.files);
            files.splice(index, 1);
            props.onFileRemove(files);
        }
    };
    var _addFiles = function (event) {
        if (props.onFilesAdd && props.files) {
            var addedFiles_1 = event.dataTransfer ? event.dataTransfer.files : event.target.files;
            addedFiles_1 = Object.keys(addedFiles_1).map(function (e) {
                return addedFiles_1[e];
            });
            props.onFilesAdd(__spreadArrays(props.files, addedFiles_1));
        }
    };
    var _isFileDrop = function (event) {
        // handle IE
        if (event.dataTransfer.files.length === 0) {
            return false;
        }
        // handle Chrome, Firefox, Edge, Safari
        if (event.dataTransfer.items) {
            for (var i = 0; i < event.dataTransfer.items.length; i++) {
                if (typeof (event.dataTransfer.items[i].webkitGetAsEntry) === 'function'
                    && event.dataTransfer.items[i].webkitGetAsEntry().isDirectory) {
                    return false;
                }
            }
        }
        return true;
    };
    var _isFileOrDirectoryDrag = function (event) {
        if (event.dataTransfer.items !== undefined) {
            for (var i = 0; i < event.dataTransfer.items.length; i++) {
                if (event.dataTransfer.items[i].kind.toLowerCase() === 'file') {
                    return true;
                }
            }
        }
        if (event.dataTransfer.types !== undefined) {
            for (var i = 0; i < event.dataTransfer.types.length; i++) {
                if (event.dataTransfer.types[i].toLowerCase() === 'files') {
                    return true;
                }
            }
        }
        return false;
    };
    var _onDrop = function (event) {
        event.preventDefault();
        _onDragLeave();
        if (_isFileDrop(event)) {
            _addFiles(event);
        }
    };
    var _onDragOver = function (event) {
        event.stopPropagation();
        if (_isFileOrDirectoryDrag(event)) {
            event.preventDefault();
        }
    };
    var _onDragEnter = function (event) {
        dragEnterCounter++;
        if (dragEnterCounter === 1 && _isFileOrDirectoryDrag(event)) {
            event.preventDefault();
            var fileDroppableElement = dropZoneElement.parentElement;
            var attachmentFileElement = fileDroppableElement && fileDroppableElement.parentElement;
            if (attachmentFileElement) {
                attachmentFileElement.style.height = (attachmentFileElement.offsetHeight - 16 * 2) + 'px';
                attachmentFileElement.className = 'kuc-attachment-file kuc-attachment-drag-drop-active';
                dropZoneElement.style.width = (attachmentFileElement.offsetWidth - 4) + 'px';
                dropZoneElement.style.height = (attachmentFileElement.offsetHeight - 4) + 'px';
            }
            if (fileDroppableElement)
                fileDroppableElement.style.display = '';
        }
    };
    var _onDragLeave = function () {
        dragEnterCounter--;
        if (dragEnterCounter === 0) {
            var fileDroppableElement = dropZoneElement.parentElement;
            var attachmentFileElement = fileDroppableElement && fileDroppableElement.parentElement;
            if (attachmentFileElement) {
                attachmentFileElement.style.height = 'auto';
                attachmentFileElement.className = 'kuc-attachment-file';
            }
            if (fileDroppableElement)
                fileDroppableElement.style.display = 'none';
        }
    };
    return (React.createElement("div", { className: "kuc-attachment-outer" },
        React.createElement("div", { className: "kuc-attachment-file", role: "presentation", onDragOver: _onDragOver, onDragEnter: _onDragEnter, onDragLeave: _onDragLeave },
            React.createElement("div", { className: "kuc-attachment-file-droppable", style: { display: 'none' }, onDrop: _onDrop, role: "presentation" },
                React.createElement("div", { className: "kuc-attachment-file-droppable-text", ref: function (dropElement) {
                        if (dropElement)
                            dropZoneElement = dropElement;
                    } }, props.dropZoneText || 'Drop files here.')),
            React.createElement("div", { className: "kuc-attachment-file-filelist kuc-attachment-file-filelist-list" }, Array.isArray(props.files) && props.files.map(function (file, index) { return (React.createElement(AttachmentFileItem, { key: index, index: index, fileName: file.name, fileSize: file.size, onFileRemove: _removeFile })); })),
            React.createElement("span", { className: "kuc-attachment-file-upload-button", tabIndex: -1 },
                React.createElement("span", { className: "kuc-attachment-file-upload-button-text" },
                    " ",
                    props.browseButtonText || 'Browse'),
                React.createElement("div", { className: "kuc-attachment-file-upload-html5" },
                    React.createElement("input", { type: "file", multiple: true, ref: function (element) {
                            if (element)
                                inputElement = element;
                        }, onClick: function () {
                            inputElement.value = '';
                        }, onChange: _addFiles }))),
            React.createElement("p", { className: "kuc-attachment-file-constraints" }, props.fileLimitText)),
        props.isErrorVisible === true && (React.createElement("div", { className: "kuc-attachment-file-error" },
            React.createElement("span", null, props.errorMessage)))));
};
export default Attachment;
