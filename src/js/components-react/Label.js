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

  const _style = {
    color: '' || props.textColor,
    backgroundColor: '' || props.backgroundColor
  };

  return (
    <div
      className="kuc-label"
      onClick={_onClick}
    >
      <span style={_style}>{props.text}</span>
      {props.isRequired && <span className="kuc-require">*</span>}
    </div>
  );
};
Label.propTypes = {
  text: PropTypes.string,
  isRequired: PropTypes.bool,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};
Label.defaultProps = {
  onClick: f => f
};
export default Label;