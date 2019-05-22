import React from 'react'
import '../../css/IconButton.css'

type IconButtonProps = {
    type?: string
    size?: string
    color?: string
    isDisabled?: boolean
    isVisible?: boolean
    shape?: string
    onClick?: (e: React.SyntheticEvent<EventTarget>) => void
}

const IconButton = ({type, size, color = '', isDisabled, isVisible, shape, onClick}: IconButtonProps) => {
    const _getClassName = () => {
        const colors = ['gray', 'blue', 'red', 'green', 'transparent'];
        const colorResult = colors.indexOf(color) === -1 ? 'gray' : color;
        const shapeResult = shape === 'normal' ? 'normal' : '';
        const className = [
            'kuc-icon-btn',
            _getClassSize(),
            type === 'remove' && colorResult === 'gray' ? 'hover-danger' : '',
            colorResult,
            shapeResult
        ];
        return className.join(' ').trim();
    };
    const _getClassType = () => {
        let classType = 'fa fa-plus';
        switch (type) {
            case 'insert':
                break;
            case 'remove':
                classType = 'fa fa-minus';
                break;
            case 'close':
                classType = 'fa fa-times';
                break;
            case 'file':
                classType = 'fa fa-file';
                break;
            case 'right':
                classType = 'fa fa-chevron-right';
                break;
            case 'left':
                classType = 'fa fa-chevron-left';
                break;
        }
        return classType;
    };
    const _getClassSize = () => {
        const className = size === 'small' ? 'small' : 'large';
        return className;
    };
    if (isVisible === false) {
        return null;
    }
    return (
        <button
            className={_getClassName()}
            onClick={onClick}
            disabled={isDisabled}
        >
            <i className={_getClassType()} />
        </button>
    );
}

export default IconButton