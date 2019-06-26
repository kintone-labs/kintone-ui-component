import React from 'react';
import '../../css/font.css'
import '../../css/TextArea.css';

type TextAreaProps = {
  value: string;
  isVisible: boolean;
  isDisabled: boolean;
  onClick: (e: any) => void;
  onChange: (e: any) => void;
}

const TextArea = ({value, isVisible, isDisabled, onChange, onClick}: TextAreaProps) => {

  const _onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  if (isVisible === false) {
    return null;
  }

  return (
    <textarea
      value={value}
      className="kuc-textarea"
      onClick={onClick}
      onChange={_onChange}
      disabled={isDisabled}
      style={{resize: isDisabled? 'none': 'both'}}
    />
  );
};

export default TextArea;