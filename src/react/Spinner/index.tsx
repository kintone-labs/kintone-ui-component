import React from 'react';

import spinnerStyle from '../../style/Spinner'
import injectStyle from '../utils/injectStyle'

// inject style, call for each style object
injectStyle(spinnerStyle)

type SpinnerProps = {
  isVisible?: boolean;
}

const Spinner = ({isVisible}: SpinnerProps) => {
  if (isVisible === false) {
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

export default Spinner;