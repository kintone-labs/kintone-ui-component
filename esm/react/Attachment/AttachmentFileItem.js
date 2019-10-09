import React from 'react';
var AttachmentFileItem = function (_a) {
    var index = _a.index, fileName = _a.fileName, fileSize = _a.fileSize, onFileRemove = _a.onFileRemove;
    var _removeFile = function () {
        onFileRemove(index);
    };
    var ONE_GB = 1073741824;
    var ONE_MB = 1048576;
    var ONE_KB = 1024;
    var _formatFileSize = function (size) {
        if (size >= ONE_GB) {
            return Math.round(size / ONE_GB) + ' GB';
        }
        else if (size >= ONE_MB) {
            return Math.round(size / ONE_MB) + ' MB';
        }
        else if (size >= ONE_KB) {
            return Math.round(size / ONE_KB) + ' KB';
        }
        return Math.round(size) + ' bytes';
    };
    return (React.createElement("div", { className: "kuc-attachment_delete kuc-attachment-file-item" },
        React.createElement("div", { className: "kuc-attachment_file_name", title: fileName }, fileName),
        React.createElement("div", { className: "kuc-attachment_file_action" },
            React.createElement("button", { type: "button", onClick: _removeFile })),
        React.createElement("div", { className: "kuc-attachment_file_size" }, typeof fileSize === 'number' ? _formatFileSize(fileSize) : 'NaN bytes'),
        React.createElement("div", { className: "kuc-attachment_clearer" })));
};
export default AttachmentFileItem;
