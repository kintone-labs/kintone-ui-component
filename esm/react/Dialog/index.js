import React from 'react';
import IconButton from '../IconButton';
import '../../css/font.css';
import '../../css/Dialog.css';
import Message from '../constant/Message';
var Dialog = function (_a) {
    var _b = _a.header, header = _b === void 0 ? '' : _b, _c = _a.content, content = _c === void 0 ? '' : _c, _d = _a.footer, footer = _d === void 0 ? '' : _d, _e = _a.isVisible, isVisible = _e === void 0 ? true : _e, _f = _a.showCloseButton, showCloseButton = _f === void 0 ? true : _f, onClose = _a.onClose;
    var hidden = '';
    if (isVisible === false) {
        hidden = 'hidden';
    }
    if (typeof header !== 'string' && !React.isValidElement(header)) {
        throw new Error(Message.common.INVALID_ARGUMENT);
    }
    if (typeof footer !== 'string' && !React.isValidElement(footer)) {
        throw new Error(Message.common.INVALID_ARGUMENT);
    }
    if (typeof content !== 'string' && !React.isValidElement(content)) {
        throw new Error(Message.common.INVALID_ARGUMENT);
    }
    if (typeof showCloseButton !== 'boolean') {
        throw new Error(Message.common.INVALID_ARGUMENT);
    }
    if (typeof isVisible !== 'boolean') {
        throw new Error(Message.common.INVALID_ARGUMENT);
    }
    return (React.createElement("div", { className: "kuc-dialog-container " + hidden },
        React.createElement("div", { className: "kuc-dialog-wrapper" },
            React.createElement("div", { className: "kuc-dialog-header" },
                (header) ? header : React.createElement("span", null),
                (showCloseButton) ?
                    (React.createElement("span", { className: "kuc-dialog-close-button" },
                        React.createElement(IconButton, { type: "close", onClick: onClose }))) :
                    (React.createElement("span", null))),
            React.createElement("div", { className: "kuc-dialog-body" }, content),
            React.createElement("div", { className: "kuc-dialog-footer" }, footer))));
};
export default Dialog;
