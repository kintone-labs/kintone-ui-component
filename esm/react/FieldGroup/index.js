import React from 'react';
import '../../css/font.css';
import '../../css/FieldGroup.css';
var FieldGroup = function (_a) {
    var content = _a.content, name = _a.name, toggle = _a.toggle, onToggle = _a.onToggle, isVisible = _a.isVisible, children = _a.children;
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
        React.createElement("div", { className: "kuc-fieldgroup-container" },
            React.createElement("span", { role: "button", tabIndex: 0, className: _getClassName(), onClick: _handleToggleClick, onKeyUp: _handleToggleClick },
                React.createElement("span", { className: _getArrowClassName() }),
                React.createElement("span", null, name)),
            React.createElement("div", { className: "kuc-fieldgroup-contents" }, children ? children : content))));
};
export default FieldGroup;
