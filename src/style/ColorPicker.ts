import { invertColor } from '../js/ColorPicker/components/utils';

var inputStyle = {
    'font-size': '14px',
    'text-align': 'center',
    outline: 'none',
    border: '1px solid #e3e7e8',
    width: '100px',
    height: '40px',
    margin: 0,
    padding: 0
}
var inputFocusStyle = {
    border: '1px solid #3498db'
}

const getStyle = (isFocus: boolean, color: string) => {
    const colorInverted = invertColor(color)
    const colorStyle = {
        color: colorInverted,
        'background-color': color
    }
    inputStyle = {...inputStyle, ... colorStyle}
    if(isFocus) {
        inputFocusStyle = {...inputStyle, ... colorStyle}
    }

    return {
        '@global': {
            '.kuc-color-picker-input': inputStyle,
            '.kuc-color-picker-input-focus': inputFocusStyle
        }
    }
}

export {getStyle}
