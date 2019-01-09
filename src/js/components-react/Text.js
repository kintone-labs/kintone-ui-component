import React from 'react';
import PropTypes from 'prop-types';

const Text = (props) => {
  const _onChange = (event) => {
    const value = event.target.value;
    props.onChange(value);
  };

  return (
    <div className="kuc-input-outer">
      <input
        type="text"
        value={props.value}
        className="kuc-input-text"
        onClick={props.onClick}
        onChange={_onChange}
        disabled={props.isDisabled}
      />
    </div>
  );
};
Text.propTypes = {
  value: PropTypes.string,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};
Text.defaultProps = {
  onChange: f => f
};
export default Text;
