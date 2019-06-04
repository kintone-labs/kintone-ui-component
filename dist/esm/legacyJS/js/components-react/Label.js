import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/Label.css';
var Label = function (props) {
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
    var _style = {
        color: '' || props.textColor,
        backgroundColor: '' || props.backgroundColor
    };
    return (React.createElement("div", { className: "kuc-label", onClick: _onClick },
        React.createElement("span", { style: _style }, props.text),
        props.isRequired && React.createElement("span", { className: "kuc-require" }, "*")));
};
Label.propTypes = {
    text: PropTypes.string,
    isRequired: PropTypes.bool,
    isVisible: PropTypes.bool,
    isDisabled: PropTypes.bool,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
};
Label.defaultProps = {
    onClick: function (f) { return f; }
};
export default Label;
