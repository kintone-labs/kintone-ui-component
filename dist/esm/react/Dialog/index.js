import React from 'react';
import IconButton from '../IconButton';
import '../../css/Dialog.css';
var Dialog = function (_a) {
    var header = _a.header, content = _a.content, footer = _a.footer, _b = _a.isVisible, isVisible = _b === void 0 ? true : _b, _c = _a.showCloseButton, showCloseButton = _c === void 0 ? true : _c, onClose = _a.onClose;
    var hidden;
    if (isVisible === false) {
        hidden = 'hidden';
    }
    return (React.createElement("div", { className: "kuc-dialog-container " + hidden },
        React.createElement("div", { className: "kuc-dialog-wrapper" },
            React.createElement("div", { className: "kuc-dialog-header" },
                header,
                (showCloseButton) ?
                    (React.createElement("span", { className: "kuc-dialog-close-button" },
                        React.createElement(IconButton, { type: "close", onClick: onClose }))) :
                    (React.createElement("span", null))),
            React.createElement("div", { className: "kuc-dialog-body" }, content),
            React.createElement("div", { className: "kuc-dialog-footer" }, footer))));
};
export default Dialog;
