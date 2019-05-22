import React from 'react'
import '../vendor/Label.css'

const Label = ({text, textColor, backgroundColor, isRequired, isDisabled, isVisible, onClick}: LabelProps) => {
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

    const _style = {
        color: '' || textColor,
        backgroundColor: '' || backgroundColor
    };
    return(
        <div
            className="kuc-label"
            onClick={_onClick}
        >
            <span style={_style}>{text}</span>
            {isRequired && <span className="kuc-require">*</span>}
        </div>
    )
}

export default Label