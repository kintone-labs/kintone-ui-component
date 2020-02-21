import React from 'react';
import '../../css/font.css';
import '../../css/Text.css';
var Text = function (_a) {
    var value = _a.value, _b = _a.isDisabled, isDisabled = _b === void 0 ? false : _b, _c = _a.isVisible, isVisible = _c === void 0 ? true : _c, _d = _a.placeholder, placeholder = _d === void 0 ? '' : _d, onChange = _a.onChange, onClick = _a.onClick;
    var _onChange = function (event) {
        onChange && onChange(event.target.value);
    };
    if (isVisible === false) {
        return null;
    }
    return (React.createElement("input", { type: "text", value: value, placeholder: placeholder, className: "kuc-input-text", onClick: onClick, onChange: _onChange, disabled: isDisabled }));
};
export default Text;
