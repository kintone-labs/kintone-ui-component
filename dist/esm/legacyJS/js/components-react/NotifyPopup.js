import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
var NotifyPopup = function (props) {
    var _handleClosePopup = function () {
        if (props.isDisabled) {
            return false;
        }
        props.onClose();
        return true;
    };
    var _getClassName = function () {
        var className = [
            'kuc-notify',
            props.isVisible === false ? '' : 'show',
            _getStyleByType().bgClass,
        ];
        return className.join(' ').trim();
    };
    var _onClick = function () {
        if (props.isDisabled) {
            return false;
        }
        props.onClick();
        return true;
    };
    var _getStyleByType = function () {
        var style = {
            bgClass: '',
            color: ''
        };
        switch (props.type) {
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
    if (props.isVisible === false) {
        return null;
    }
    return (React.createElement("div", null,
        React.createElement("div", { className: _getClassName() },
            React.createElement("div", { className: "kuc-notify-title", onClick: _onClick }, props.text),
            React.createElement("div", { className: "kuc-close-button" },
                React.createElement(IconButton, { onClick: _handleClosePopup, type: "close", color: _getStyleByType().color })))));
};
NotifyPopup.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    isVisible: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
};
NotifyPopup.defaultProps = {
    onClick: function (f) { return f; },
    onClose: function (f) { return f; },
};
export default NotifyPopup;
