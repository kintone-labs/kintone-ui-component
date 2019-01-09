import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const _getClassName = () => {
    return [
      'kuc-btn',
      props.type !== 'submit' ? 'normal' : '',
      props.type === 'submit' ? 'submit' : ''
    ].join(' ').trim();
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
      {props.text}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};
export default Button;