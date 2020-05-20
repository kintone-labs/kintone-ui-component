import React from 'react';
import { mdiPlus, mdiMinus, mdiClose, mdiFile, mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import '../../css/IconButton.css';
var IconButton = function (_a) {
    var type = _a.type, size = _a.size, _b = _a.color, color = _b === void 0 ? 'gray' : _b, isDisabled = _a.isDisabled, isVisible = _a.isVisible, shape = _a.shape, onClick = _a.onClick;
    var _getClassName = function () {
        var colors = ['gray', 'blue', 'red', 'green', 'transparent'];
        var colorResult = colors.indexOf(color) === -1 ? 'gray' : color;
        var shapeResult = shape === 'square' ? 'square' : 'circle';
        var className = [
            'kuc-icon-btn',
            _getClassSize(),
            type === 'remove' && colorResult === 'gray' ? 'hover-danger' : '',
            colorResult,
            shapeResult
        ];
        return className.join(' ').trim();
    };
    var _getIconData = function () {
        var iconData = mdiPlus;
        switch (type) {
            case 'insert':
                break;
            case 'remove':
                iconData = mdiMinus;
                break;
            case 'close':
                iconData = mdiClose;
                break;
            case 'file':
                iconData = mdiFile;
                break;
            case 'right':
                iconData = mdiChevronRight;
                break;
            case 'left':
                iconData = mdiChevronLeft;
                break;
        }
        return iconData;
    };
    var _getClassSize = function () {
        var className = size === 'small' ? 'small' : 'normal';
        return className;
    };
    var _checkIsDisabled = function () {
        if (typeof isDisabled !== 'boolean') {
            return false;
        }
        return isDisabled;
    };
    if (isVisible === false) {
        return null;
    }
    return (React.createElement("button", { className: _getClassName(), onClick: onClick, disabled: _checkIsDisabled() },
        React.createElement("svg", null,
            React.createElement("path", { d: _getIconData() }))));
};
export default IconButton;
