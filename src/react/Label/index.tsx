import React, {CSSProperties} from 'react';
import '../../css/font.css'
import '../../css/Label.css';
type LabelProps = {
  setStyles?: CSSProperties;
  setClassName?: string;
  text?: string;
  textColor?: string;
  backgroundColor?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isVisible?: boolean;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const Label = ({setStyles, setClassName, text, textColor, backgroundColor, isRequired, isDisabled, isVisible, onClick}: LabelProps) => {
  const _onClick = (e: React.SyntheticEvent<EventTarget>) => {
    if (isDisabled) {
      return null;
    }
    onClick && onClick(e);
    return true;
  };

  if (isVisible === false) {
    return null;
  }

  const _style = {color: '' || textColor, backgroundColor: '' || backgroundColor};

  return (
    <div style={setStyles} className={`kuc-label ${setClassName}`} onClick={_onClick} >
      <span style={_style}>{text}</span>
      {isRequired && <span className="kuc-require">*</span>}
    </div>
  );
};
export default Label;