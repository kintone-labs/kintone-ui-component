import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/Spinner.css';

const Spinner = (props) => {
  if (props.isVisible === false) {
    return null;
  }

  return (
    <div className="kuc-spinner-outer">
      <div className="kuc-spinner">
        <div className="kuc-loader" />
      </div>
    </div>
  );
};
Spinner.propTypes = {
  isVisible: PropTypes.bool
};
Spinner.defaultProps = {
  isVisible: false
};
export default Spinner;