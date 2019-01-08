import React from 'react';
import PropTypes from 'prop-types';
var Label = function Label(props) {
  var _onClick = function _onClick() {
    if (props.isDisabled) {
      return null;
    }
    props.onClick();
    return true;
  };

  if (props.isVisible === false) {
    return null;
  }

  return React.createElement(
    'div',
    {
      className: 'kuc-label',
      onClick: _onClick,
      onChange: props.onChange
    },
    props.text,
    props.isRequired && React.createElement(
      'span',
      { className: 'kuc-require' },
      '*'
    )
  );
};
Label.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  isRequired: PropTypes.bool,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};
Label.defaultProps = {
  onClick: function onClick(f) {
    return f;
  }
};
export default Label;