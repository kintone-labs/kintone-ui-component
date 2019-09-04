import React, {CSSProperties} from 'react';
import '../../css/Spinner.css';

type SpinnerProps = {
  style?: CSSProperties;
  className?: string;
  isVisible?: boolean;
}

const Spinner = ({isVisible, style, className}: SpinnerProps) => {
  if (isVisible === false) {
    return null;
  }
  return (
    <div style={style} className={`kuc-spinner-outer ${className}`}>
      <div className="kuc-spinner">
        <div className="kuc-loader" />
      </div>
    </div>
  );
};

export default Spinner;