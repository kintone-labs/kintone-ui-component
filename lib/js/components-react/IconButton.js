import React from 'react';
import PropTypes from 'prop-types';

var IconButton = function IconButton(props) {
  var _getClassName = function _getClassName() {
    var colors = ['gray', 'blue', 'red', 'green'];
    var color = colors.indexOf(props.color) === -1 ? 'gray' : props.color;
    var className = ['kuc-icon-btn', _getClassSize(), props.type === 'remove' && color === 'gray' ? 'hover-danger' : '', color];
    return className.join(' ').trim();
  };
  var _getClassType = function _getClassType() {
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
      default:
        break;
    }
    return classType;
  };
  var _getClassSize = function _getClassSize() {
    var className = props.size === 'small' ? 'small' : 'large';
    return className;
  };
  if (props.isVisible === false) {
    return null;
  }
  return React.createElement(
    'button',
    {
      className: _getClassName(),
      onClick: props.onClick,
      disabled: props.isDisabled
    },
    React.createElement('i', { className: _getClassType() })
  );
};
IconButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
};
export default IconButton;