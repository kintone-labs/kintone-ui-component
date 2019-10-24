import React from 'react';
import '../../css/font.css';
import '../../css/NotifyPopup.css';
import IconButton from '../IconButton/index';
var NotifyPopup = function (_a) {
    var text = _a.text, type = _a.type, isVisible = _a.isVisible, onClick = _a.onClick, onClose = _a.onClose;
    var _handleClosePopup = function () {
        onClose && onClose();
        return true;
    };
    var _getStyleByType = function () {
        var style = {
            bgClass: '',
            color: ''
        };
        switch (type) {
            case 'success':
                style.bgClass = 'bg-success';
                style.color = 'green';
                break;
            case 'info':
                style.bgClass = 'bg-info';
                style.color = 'blue';
                break;
            default:
                style.bgClass = 'bg-danger';
                style.color = 'red';
        }
        return style;
    };
    var _getClassName = function () {
        var className = [
            'kuc-notify',
            _getStyleByType().bgClass
        ];
        return className.join(' ').trim();
    };
    var _onClick = function () {
        onClick && onClick();
        return true;
    };
    if (isVisible === false) {
        return null;
    }
    return (React.createElement("div", { className: _getClassName() },
        React.createElement("div", { className: "kuc-notify-title", onClick: _onClick, role: "none" }, text),
        React.createElement("div", { className: "kuc-close-button" },
            React.createElement(IconButton, { onClick: _handleClosePopup, type: "close", color: _getStyleByType().color }))));
};
export default NotifyPopup;
