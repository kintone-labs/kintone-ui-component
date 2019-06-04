import React from 'react';
import PropTypes from 'prop-types';
import AttachmentFileItem from './AttachmentFileItem';
import '../../../css/Attachment.css';
var Attachment = function (props) {
    if (props.isVisible === false) {
        return null;
    }
    var dropZoneElement;
    var inputElement;
    var dragEnterCounter = 0;
    var _removeFile = function (index) {
        if (props.onFileRemove) {
            var files = props.files.slice();
            files.splice(index, 1);
            props.onFileRemove(files);
        }
    };
    var _addFiles = function (event) {
        if (props.onFilesAdd) {
            var addedFiles = event.dataTransfer ? event.dataTransfer.files : event.target.files;
            props.onFilesAdd(props.files.concat(addedFiles));
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
            var attachmentFileElement = fileDroppableElement.parentElement;
            attachmentFileElement.style.height = (attachmentFileElement.offsetHeight - 16 * 2) + 'px';
            attachmentFileElement.className = 'kuc-attachment-file kuc-attachment-drag-drop-active';
            dropZoneElement.style.width = (attachmentFileElement.offsetWidth - 4) + 'px';
            dropZoneElement.style.height = (attachmentFileElement.offsetHeight - 4) + 'px';
            fileDroppableElement.style.display = '';
        }
    };
    var _onDragLeave = function () {
        dragEnterCounter--;
        if (dragEnterCounter === 0) {
            var fileDroppableElement = dropZoneElement.parentElement;
            var attachmentFileElement = fileDroppableElement.parentElement;
            attachmentFileElement.style.height = 'auto';
            attachmentFileElement.className = 'kuc-attachment-file';
            fileDroppableElement.style.display = 'none';
        }
    };
    return (React.createElement("div", { className: "kuc-attachment-outer" },
        React.createElement("div", { className: "kuc-attachment-value" },
            React.createElement("div", { className: "kuc-attachment-file", onDragOver: _onDragOver, onDragEnter: _onDragEnter, onDragLeave: _onDragLeave },
                React.createElement("div", { className: "kuc-attachment-file-droppable", style: { display: 'none' }, onDrop: _onDrop },
                    React.createElement("div", { className: "kuc-attachment-file-droppable-text", ref: function (dropElement) {
                            dropZoneElement = dropElement;
                        } }, props.dropZoneText)),
                React.createElement("div", { className: "kuc-attachment-file-filelist" }),
                React.createElement("div", { className: "kuc-attachment-file-filelist kuc-attachment-file-filelist-list" }, Array.isArray(props.files) && props.files.map(function (file, index) { return (React.createElement(AttachmentFileItem, { key: index, index: index, fileName: file.name, fileSize: file.size, onFileRemove: _removeFile })); })),
                React.createElement("a", { className: "kuc-attachment-file-upload-button", tabIndex: "-1" },
                    React.createElement("span", { className: "kuc-attachment-file-upload-button-text" }, props.browseButtonText),
                    React.createElement("div", { className: "kuc-attachment-file-upload-html5" },
                        React.createElement("input", { type: "file", multiple: true, ref: function (element) {
                                inputElement = element;
                            }, onClick: function () {
                                inputElement.value = null;
                            }, onChange: _addFiles }))),
                React.createElement("p", { className: "kuc-attachment-file-constraints" }, props.fileLimitText)),
            props.isErrorVisible === true && (React.createElement("div", { className: "kuc-attachment-file-error" },
                React.createElement("span", null, props.errorMessage))))));
};
Attachment.propTypes = {
    dropZoneText: PropTypes.string,
    browseButtonText: PropTypes.string,
    fileLimitText: PropTypes.string,
    errorMessage: PropTypes.string,
    isErrorVisible: PropTypes.bool,
    isVisible: PropTypes.bool,
    files: PropTypes.array,
    onFilesAdd: PropTypes.func,
    onFileRemove: PropTypes.func,
};
Attachment.defaultProps = {
    files: [],
    dropZoneText: 'Drop files here.',
    browseButtonText: 'Browse',
};
export default Attachment;
