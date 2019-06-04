import React from 'react';
import '../../css/base.css';
import '../../css/IconButton.css';
var IconButton = function (_a) {
    var type = _a.type, size = _a.size, _b = _a.color, color = _b === void 0 ? '' : _b, isDisabled = _a.isDisabled, isVisible = _a.isVisible, shape = _a.shape, onClick = _a.onClick;
    var _getClassName = function () {
        var colors = ['gray', 'blue', 'red', 'green', 'transparent'];
        var colorResult = colors.indexOf(color) === -1 ? 'gray' : color;
        var shapeResult = shape === 'normal' ? 'normal' : 'circle';
        var className = [
            'kuc-icon-btn',
            _getClassSize(),
            type === 'remove' && colorResult === 'gray' ? 'hover-danger' : '',
            colorResult,
            shapeResult
        ];
        return className.join(' ').trim();
    };
    var _getClassType = function () {
        var classType = 'fa fa-plus';
        switch (type) {
            case 'insert':
                break;
            case 'remove':
                classType = 'fa fa-minus';
                break;
            case 'close':
                classType = 'fa fa-times';
                break;
            case 'file':
                classType = 'fa fa-file';
                break;
            case 'right':
                classType = 'fa fa-chevron-right';
                break;
            case 'left':
                classType = 'fa fa-chevron-left';
                break;
        }
        return classType;
    };
    var _getClassSize = function () {
        var className = size === 'small' ? 'small' : 'large';
        return className;
    };
    if (isVisible === false) {
        return null;
    }
    return (React.createElement("button", { className: _getClassName(), onClick: onClick, disabled: isDisabled },
        React.createElement("i", { className: _getClassType() })));
};
export default IconButton;
