/// <reference types="react" />
import '../../css/font.css';
declare type ColorPickerProps = {
    color?: string;
    onChange?: (hexString: string) => void;
    isDisabled?: boolean;
    isVisible?: boolean;
};
declare function ColorPicker(props: ColorPickerProps): JSX.Element;
export default ColorPicker;
