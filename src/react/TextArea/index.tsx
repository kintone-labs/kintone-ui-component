import React, {useState, useEffect} from 'react';
import '../../css/font.css';
import '../../css/TextArea.css';

type TextAreaProps = {
  value?: string;
  placeholder?: string;
  isVisible?: boolean;
  isDisabled?: boolean;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
  onChange?: (value: string | null) => void;
}

const TextArea = ({value, placeholder, isVisible, isDisabled, onChange, onClick}: TextAreaProps) => {
  const mixTextAreaWidth = 297;
  const mixtTextAreaHeight = 123;
  const [sizeConfig, setSizeConfig] = useState({translateX: 0, translateY: 0, textAreaWidth: mixTextAreaWidth, textAreaHeight: mixtTextAreaHeight});
  const [isResizing, setIsResizing] = useState(false);

  useEffect(
    ()=>{
      let currentX: any;
      let currentY: any;
      document.onmousemove = (event) => {
        if (isResizing && currentX && currentY) {
          let dx = event.clientX - currentX;
          if (sizeConfig.textAreaWidth + dx < mixTextAreaWidth) {
            dx = 0;
          }

          let dy = event.clientY - currentY;
          if (sizeConfig.textAreaHeight + dy < mixtTextAreaHeight) {
            dy = 0;
          }

          const config = {
            translateX: sizeConfig.translateX + dx,
            translateY: sizeConfig.translateY + dy,
            textAreaWidth: sizeConfig.textAreaWidth + dx,
            textAreaHeight: sizeConfig.textAreaHeight + dy
          };
          setSizeConfig(config);
        }
        currentX = event.clientX;
        currentY = event.clientY;
      };
      document.onmouseup = () => {
        if (isResizing) {
          setIsResizing(false);
          currentX = null;
          currentX = null;
        }
      };
    }
  );

  const _onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(event.target.value);
  };

  if (isVisible === false) {
    return null;
  }

  return (
    <div
      className="kuc-textarea-outer"
    >
      <textarea
        value={value}
        placeholder={placeholder}
        className="kuc-textarea"
        onClick={onClick}
        onChange={_onChange}
        disabled={isDisabled}
        style={{width: sizeConfig.textAreaWidth + 'px', height: sizeConfig.textAreaHeight + 'px'}}
      />
      <div
        className="kuc-textarea-resize"
        style={{transform: `translate(${sizeConfig.translateX}px, ${sizeConfig.translateY}px)`}}
        role="button"
        tabIndex={0}
        onMouseDown={()=>{
          setIsResizing(true);
        }}
      />
    </div>
  );
};

export default TextArea;
