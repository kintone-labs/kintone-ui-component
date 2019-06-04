import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/Text.css';
var Text = function (props) {
    var _onChange = function (event) {
        var value = event.target.value;
        props.onChange(value);
    };
    if (props.isVisible === false) {
        return null;
    }
    return (React.createElement("div", { className: "kuc-input-outer" },
        React.createElement("input", { type: "text", value: props.value, className: "kuc-input-text", onClick: props.onClick, onChange: _onChange, disabled: props.isDisabled })));
};
Text.propTypes = {
    value: PropTypes.string,
    isVisible: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
};
Text.defaultProps = {
    onChange: function (f) { return f; }
};
export default Text;
