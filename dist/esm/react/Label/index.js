import React from 'react';
import '../../css/Label.css';
var Label = function (_a) {
    var text = _a.text, textColor = _a.textColor, backgroundColor = _a.backgroundColor, isRequired = _a.isRequired, isDisabled = _a.isDisabled, isVisible = _a.isVisible, onClick = _a.onClick;
    var _onClick = function (e) {
        if (isDisabled) {
            return null;
        }
        onClick && onClick(e);
        return true;
    };
    if (isVisible === false) {
        return null;
    }
    var _style = { color: '' || textColor, backgroundColor: '' || backgroundColor };
    return (React.createElement("div", { className: "kuc-label", onClick: _onClick },
        React.createElement("span", { style: _style }, text),
        isRequired && React.createElement("span", { className: "kuc-require" }, "*")));
};
export default Label;
