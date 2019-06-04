import React from 'react';
import '../../css/FieldGroup.css';
var FieldGroup = function (_a) {
    var children = _a.children, name = _a.name, toggle = _a.toggle, onToggle = _a.onToggle, isVisible = _a.isVisible;
    if (isVisible === false) {
        return null;
    }
    var _handleToggleClick = function () {
        var toggleState = toggle === 'expand' ? 'collapse' : 'expand';
        onToggle && onToggle(toggleState);
    };
    var _getClassName = function () {
        return [
            'kuc-fieldgroup-label',
            'label',
            toggle === 'expand' ? 'expand' : 'collapse'
        ].join(' ').trim();
    };
    var _getArrowClassName = function () {
        return [
            'kuc-arrow',
            toggle === 'expand' ? 'down' : 'right'
        ].join(' ').trim();
    };
    return (React.createElement("div", { className: "kuc-fieldgroup" },
        React.createElement("span", { role: "button", tabIndex: 0, className: _getClassName(), onClick: _handleToggleClick },
            React.createElement("span", { className: _getArrowClassName() }),
            name),
        React.createElement("div", { className: "kuc-fieldgroup-contents" }, children)));
};
export default FieldGroup;
