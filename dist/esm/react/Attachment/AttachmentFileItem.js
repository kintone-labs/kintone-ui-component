import React from 'react';
var AttachmentFileItem = function (_a) {
    var index = _a.index, fileName = _a.fileName, fileSize = _a.fileSize, onFileRemove = _a.onFileRemove;
    var _removeFile = function () {
        onFileRemove(index);
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
        React.createElement("div", { className: "kuc-attachment_file_name", title: fileName }, fileName),
        React.createElement("div", { className: "kuc-attachment_file_action" },
            React.createElement("button", { type: "button", onClick: _removeFile })),
        React.createElement("div", { className: "kuc-attachment_file_size" }, _formatFileSize(fileSize)),
        React.createElement("div", { className: "kuc-attachment_clearer" })));
};
export default AttachmentFileItem;
