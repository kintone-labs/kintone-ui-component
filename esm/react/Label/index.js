import React from 'react';
import '../../css/font.css';
import '../../css/Label.css';
var Label = function (_a) {
    var text = _a.text, textColor = _a.textColor, backgroundColor = _a.backgroundColor, isRequired = _a.isRequired, isVisible = _a.isVisible, onClick = _a.onClick;
    var _onClick = function (e) {
        onClick && onClick(e);
        return true;
    };
    if (isVisible === false) {
        return null;
    }
    var _style = { color: '' || textColor, backgroundColor: '' || backgroundColor };
    return (React.createElement("div", { className: "kuc-label", onClick: _onClick, role: "presentation" },
        React.createElement("span", { style: _style }, text),
        isRequired && typeof isRequired === 'boolean' && React.createElement("span", { className: "kuc-require" }, "*")));
};
export default Label;
