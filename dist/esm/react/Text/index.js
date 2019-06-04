import React from 'react';
import '../../css/Text.css';
var Text = function (_a) {
    var value = _a.value, _b = _a.isDisabled, isDisabled = _b === void 0 ? false : _b, _c = _a.isVisible, isVisible = _c === void 0 ? true : _c, onChange = _a.onChange, onClick = _a.onClick;
    var _onChange = function (event) {
        onChange && onChange(event.target.value);
    };
    if (isVisible === false) {
        return null;
    }
    return (React.createElement("div", { className: "kuc-input-outer" },
        React.createElement("input", { type: "text", value: value, className: "kuc-input-text", onClick: onClick, onChange: _onChange, disabled: isDisabled })));
};
export default Text;
