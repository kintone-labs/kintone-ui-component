import React from 'react';
import PropTypes from 'prop-types';
const Label = (props) => {
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
      className="kuc-label"
      onClick={_onClick}
    >
      {props.text}
      {props.isRequired && <span className="kuc-require">*</span>}
    </div>
  );
};
Label.propTypes = {
  text: PropTypes.string,
  isRequired: PropTypes.bool,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};
Label.defaultProps = {
  onClick: f => f
};
export default Label;