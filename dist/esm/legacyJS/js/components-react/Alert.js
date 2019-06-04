import React from 'react';
import PropTypes from 'prop-types';
var Alert = function (props) {
    var _getClassName = function () {
        var className = [
            'kuc-alert',
            props.type === 'success' ? 'bg-success' : 'bg-danger'
        ];
        return className.join(' ');
    };
    var _onClick = function () {
        if (props.isDisabled) {
            return null;
        }
        props.onClick();
        return true;
    };
    if (props.isVisible === false) {
        return null;
    }
    return (React.createElement("div", { className: _getClassName(), onClick: _onClick }, props.text));
};
Alert.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    isVisible: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
};
Alert.defaultProps = {
    onClick: function (f) { return f; }
};
export default Alert;
