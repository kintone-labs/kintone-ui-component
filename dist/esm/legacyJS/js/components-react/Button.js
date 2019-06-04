import React from 'react';
import PropTypes from 'prop-types';
var Button = function (props) {
    var _getClassName = function () {
        return [
            'kuc-btn',
            props.type !== 'submit' ? 'normal' : '',
            props.type === 'submit' ? 'submit' : ''
        ].join(' ').trim();
    };
    if (props.isVisible === false) {
        return null;
    }
    return (React.createElement("button", { className: _getClassName(), onClick: props.onClick, disabled: props.isDisabled }, props.text));
};
Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    isVisible: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
};
export default Button;
