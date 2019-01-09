import React from 'react';
import PropTypes from 'prop-types';

const Alert = (props) => {
  const _getClassName = () => {
    const className = [
      'kuc-alert',
      props.type === 'success' ? 'bg-success' : 'bg-danger'
    ];

    return className.join(' ');
  };

  const _onClick = () => {
    if (props.isDisabled) {
      return null;
    }

    props.onClick();
    return true;
  };

  if (props.isVisible === false) {
    return null;
  }

  return (
    <div
      className={_getClassName()}
      onClick={_onClick}
    >
      {props.text}
    </div>
  );
};
Alert.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};
Alert.defaultProps = {
  onClick: f => f
};
export default Alert;