/// <reference types="react" />
import '../../css/font.css';
import '../../css/NotifyPopup.css';
declare type NotifyPopupProps = {
    text?: string;
    type?: string;
    isDisabled?: boolean;
    isVisible?: boolean;
    onClick?: () => void;
    onClose?: () => void;
};
declare const NotifyPopup: ({ text, type, isDisabled, isVisible, onClick, onClose }: NotifyPopupProps) => JSX.Element | null;
export default NotifyPopup;
