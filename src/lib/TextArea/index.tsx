import React, {useState, useEffect} from 'react';

type TextAreaProps = {
    value: string,
    isVisible: boolean,
    isDisabled: boolean,
    onClick: (e: any)=>void,
    onChange: (e: any)=>void
}

const TextArea = ({value, isVisible, isDisabled, onChange, onClick}: TextAreaProps) => {

    let currentX: any;
    let currentY: any;
    let mixTextAreaWidth = 297;
    let mixtTextAreaHeight = 123;

    let [translateX, setTranslateX] = useState(0)
    let [translateY, setTranslateY] = useState(0)
    let [textAreaWidth, setTextAreaWidth] = useState(mixTextAreaWidth)
    let [textAreaHeight, setTextAreaHeight] = useState(mixtTextAreaHeight)
    let [isResizing, setIsResizing] = useState(false)

    useEffect(
        ()=>{
            document.onmousemove = (event) => {
                if (isResizing && currentX && currentY) {
                    let dx = event.clientX - currentX;
                    if (textAreaWidth + dx < mixTextAreaWidth) {
                        dx = 0;
                    }
    
                    let dy = event.clientY - currentY;
                    if (textAreaHeight + dy < mixtTextAreaHeight) {
                        dy = 0;
                    }
    
                    setTranslateX(translateX + dx)
                    setTranslateY(translateY + dy)
                    setTextAreaWidth(textAreaWidth + dx)
                    setTextAreaHeight(textAreaHeight + dy)
                }
                currentX = event.clientX;
                currentY = event.clientY;
            };
            document.onmouseup = () => {
                if (isResizing) {
                    setIsResizing(false)
                    currentX = null;
                    currentX = null;
                }
            };
        }
    )

    const _onChange = (event: any) => {
        const value = event.target.value;
        onChange(value);
    };

    if (isVisible === false) {
        return null;
    }

    return (
        <div
            className="kuc-textarea-outer"
            style={{width: textAreaWidth + 'px', height: textAreaHeight + 'px'}}
        >
            <textarea
                value={value}
                className="kuc-textarea"
                onClick={onClick}
                onChange={_onChange}
                disabled={isDisabled}
                style={{width: textAreaWidth + 'px', height: textAreaHeight + 'px'}}
            />
            <div
                className="kuc-textarea-resize"
                style={{transform: `translate(${translateX}px, ${translateY}px)`}}
                onMouseDown={()=>{
                    setIsResizing(true)
                }}
            />
        </div>
    );
}

export default TextArea