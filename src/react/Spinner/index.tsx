import React, {CSSProperties} from 'react';
import '../../css/Spinner.css';

type SpinnerProps = {
  setStyles?: CSSProperties;
  setClassName?: string;
  isVisible?: boolean;
}

const Spinner = ({isVisible, setStyles, setClassName}: SpinnerProps) => {
  if (isVisible === false) {
    return null;
  }
  return (
    <div style={setStyles} className={`kuc-spinner-outer ${setClassName}`}>
      <div className="kuc-spinner">
        <div className="kuc-loader" />
      </div>
    </div>
  );
};

export default Spinner;