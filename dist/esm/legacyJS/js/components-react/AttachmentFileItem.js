import React from 'react';
import PropTypes from 'prop-types';
var AttachmentFileItem = function (props) {
    var _removeFile = function () {
        props.onFileRemove(props.index);
    };
    var _formatFileSize = function (size) {
        if (size >= 1073741824) {
            return Math.round(size / 1073741824) + ' GB';
        }
        else if (size >= 1048576) {
            return Math.round(size / 1048576) + ' MB';
        }
        else if (size >= 1024) {
            return Math.round(size / 1024) + ' KB';
        }
        return Math.round(size) + ' bytes';
    };
    return (React.createElement("div", { className: "kuc-attachment_delete kuc-attachment-file-item" },
        React.createElement("div", { className: "kuc-attachment_file_name", title: props.fileName }, props.fileName),
        React.createElement("div", { className: "kuc-attachment_file_action" },
            React.createElement("button", { type: "button", onClick: _removeFile })),
        React.createElement("div", { className: "kuc-attachment_file_size" }, _formatFileSize(props.fileSize)),
        React.createElement("div", { className: "kuc-attachment_clearer" })));
};
AttachmentFileItem.propTypes = {
    index: PropTypes.string,
    fileName: PropTypes.string,
    fileSize: PropTypes.string,
    onFileRemove: PropTypes.func,
};
export default AttachmentFileItem;
