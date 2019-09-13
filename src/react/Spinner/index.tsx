import React from 'react';
import '../../css/Spinner.css';

type SpinnerProps = {
  isVisible?: boolean;
}

const Spinner = (props?: SpinnerProps) => {
  if(!props || (props && Object.keys(props).length ===0)){
    return null
  }
  let {isVisible}=props;
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