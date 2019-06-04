import React from 'react';
import PropTypes from 'prop-types';
var IconButton = function (props) {
    var _getClassName = function () {
        var colors = ['gray', 'blue', 'red', 'green', 'transparent'];
        var color = colors.indexOf(props.color) === -1 ? 'gray' : props.color;
        var shape = props.shape === 'normal' ? 'normal' : '';
        var className = [
            'kuc-icon-btn',
            _getClassSize(),
            props.type === 'remove' && color === 'gray' ? 'hover-danger' : '',
            color,
            shape
        ];
        return className.join(' ').trim();
    };
    var _getClassType = function () {
        var classType = 'fa fa-plus';
        switch (props.type) {
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
        var className = props.size === 'small' ? 'small' : 'large';
        return className;
    };
    if (props.isVisible === false) {
        return null;
    }
    return (React.createElement("button", { className: _getClassName(), onClick: props.onClick, disabled: props.isDisabled },
        React.createElement("i", { className: _getClassType() })));
};
IconButton.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    shape: PropTypes.string,
    isVisible: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
};
export default IconButton;
