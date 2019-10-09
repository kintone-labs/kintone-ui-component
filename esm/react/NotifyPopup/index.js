import React from 'react';
import '../../css/font.css';
import '../../css/NotifyPopup.css';
import IconButton from '../IconButton/index';
var NotifyPopup = function (_a) {
    var text = _a.text, type = _a.type, isDisabled = _a.isDisabled, isVisible = _a.isVisible, onClick = _a.onClick, onClose = _a.onClose;
    var _handleClosePopup = function () {
        if (isDisabled) {
            return false;
        }
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
            case 'infor':
                style.bgClass = 'bg-infor';
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
        if (isDisabled) {
            return false;
        }
        onClick && onClick();
        return true;
    };
    if (isVisible === false) {
        return null;
    }
    return (React.createElement("div", { className: _getClassName() },
        React.createElement("div", { className: "kuc-notify-title", onClick: _onClick, role: "none" }, text),
        React.createElement("div", { className: "kuc-close-button" },
            React.createElement(IconButton, { onClick: _handleClosePopup, isDisabled: isDisabled, type: "close", color: _getStyleByType().color }))));
};
export default NotifyPopup;
