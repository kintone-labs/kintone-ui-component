import React from 'react';
import PropTypes from 'prop-types';

const IconButton = (props) => {
  const _getClassName = () => {
    const colors = ['gray', 'blue', 'red', 'green'];
    const color = colors.indexOf(props.color) === -1 ? 'gray' : props.color;
    const className = [
      'kuc-icon-btn',
      _getClassSize(),
      props.type === 'remove' && color === 'gray' ? 'hover-danger' : '',
      color
    ];
    return className.join(' ').trim();
  };
  const _getClassType = () => {
    let classType = 'fa fa-plus';
    switch (props.type) {
      case 'insert':
        break;
      case 'remove':
        classType = 'fa fa-minus';
        break;
      case 'close':
        classType = 'fa fa-times';
        break;
    }
    return classType;
  };
  const _getClassSize = () => {
    const className = props.size === 'small' ? 'small' : 'large';
    return className;
  };
  if (props.isVisible === false) {
    return null;
  }
  return (
    <button
      className={_getClassName()}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      <i className={_getClassType()} />
    </button>
  );
};
IconButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};
export default IconButton;