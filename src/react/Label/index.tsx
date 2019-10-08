import React from 'react';
import '../../css/font.css';
import '../../css/Label.css';
type LabelProps = {
  text?: string;
  textColor?: string;
  backgroundColor?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isVisible?: boolean;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const Label = ({text, textColor, backgroundColor, isRequired, isDisabled, isVisible, onClick}: LabelProps) => {
  // isDisabled will never be used in this component.
  // When we update major version of ui-component, we should delete this prop
  const _onClick = (e: React.SyntheticEvent<EventTarget>) => {
    onClick && onClick(e);
    return true;
  };

  if (isVisible === false) {
    return null;
  }

  const _style = {color: '' || textColor, backgroundColor: '' || backgroundColor};

  return (
    <div className="kuc-label" onClick={_onClick} role="presentation">
      <span style={_style}>{text}</span>
      {isRequired && typeof isRequired === 'boolean' && <span className="kuc-require">*</span>}
    </div>
  );
};
export default Label;