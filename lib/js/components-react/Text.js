import React from 'react';
import PropTypes from 'prop-types';

var Text = function Text(props) {
  var _onChange = function _onChange(event) {
    var value = event.target.value;
    props.onChange(value);
  };

  if (props.isVisible === false) {
    return null;
  }

  return React.createElement(
    'div',
    { className: 'kuc-input-outer' },
    React.createElement('input', {
      type: 'text',
      value: props.value,
      className: 'kuc-input-text',
      onClick: props.onClick,
      onChange: _onChange,
      disabled: props.isDisabled
    })
  );
};
Text.propTypes = {
  value: PropTypes.string,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};
Text.defaultProps = {
  onChange: function onChange(f) {
    return f;
  }
};
export default Text;