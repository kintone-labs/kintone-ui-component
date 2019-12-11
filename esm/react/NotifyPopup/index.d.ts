import React from 'react';
import '../../css/font.css';
import '../../css/NotifyPopup.css';
declare type NotifyPopupProps = {
    text?: string;
    type?: 'error' | 'success' | 'info';
    isVisible?: boolean;
    onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
    onClose?: (e: React.SyntheticEvent<EventTarget>) => void;
};
declare const NotifyPopup: ({ text, type, isVisible, onClick, onClose }: NotifyPopupProps) => JSX.Element | null;
export default NotifyPopup;
