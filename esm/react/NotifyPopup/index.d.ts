/// <reference types="react" />
import '../../css/font.css';
import '../../css/NotifyPopup.css';
declare type NotifyPopupProps = {
    text?: string;
    type?: string;
    isVisible?: boolean;
    onClick?: () => void;
    onClose?: () => void;
};
declare const NotifyPopup: ({ text, type, isVisible, onClick, onClose }: NotifyPopupProps) => JSX.Element | null;
export default NotifyPopup;
