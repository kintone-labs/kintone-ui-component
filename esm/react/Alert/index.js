import React from 'react';
import '../../css/font.css';
import '../../css/Alert.css';
var Alert = function (_a) {
    var text = _a.text, type = _a.type, isVisible = _a.isVisible, onClick = _a.onClick;
    var _getClassName = function () {
        var className = [
            'kuc-alert',
            type === 'success' ? 'bg-success' : 'bg-danger'
        ];
        return className.join(' ');
    };
    var _onClick = function (e) {
        onClick && onClick(e);
        return true;
    };
    if (isVisible === false) {
        return null;
    }
    return (React.createElement("div", { role: "none", className: _getClassName(), onClick: _onClick }, text));
};
export default Alert;
