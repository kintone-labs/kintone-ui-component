import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/FieldGroup.css';
var FieldGroupReact = function (props) {
    if (props.isVisible === false) {
        return null;
    }
    var _handleToggleClick = function () {
        var toggleState = props.toggle === 'expand' ? 'collapse' : 'expand';
        if (props.onToggle) {
            props.onToggle(toggleState);
        }
    };
    var _getClassName = function () {
        return [
            'kuc-fieldgroup-label',
            'label',
            props.toggle === 'expand' ? 'expand' : 'collapse'
        ].join(' ').trim();
    };
    var _getArrowClassName = function () {
        return [
            'kuc-arrow',
            props.toggle === 'expand' ? 'down' : 'right'
        ].join(' ').trim();
    };
    return (React.createElement("div", { className: "kuc-fieldgroup" },
        React.createElement("span", { role: "button", tabIndex: "0", className: _getClassName(), onClick: _handleToggleClick },
            React.createElement("span", { className: _getArrowClassName() }),
            props.name),
        React.createElement("div", { className: "kuc-fieldgroup-contents" }, props.children)));
};
FieldGroupReact.propTypes = {
    name: PropTypes.string,
    toggle: PropTypes.string,
    items: PropTypes.array,
    onToggle: PropTypes.func,
    isVisible: PropTypes.bool,
    content: PropTypes.any,
    children: PropTypes.any
};
export default FieldGroupReact;
