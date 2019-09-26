import { ReactElement } from 'react';
import '../../css/font.css';
import '../../css/Dialog.css';
declare type DialogProps = {
    header?: string | ReactElement;
    content?: string | ReactElement;
    footer?: string | ReactElement;
    isVisible?: boolean;
    showCloseButton?: boolean;
    onClose?: () => void;
};
declare const Dialog: ({ header, content, footer, isVisible, showCloseButton, onClose }: DialogProps) => JSX.Element;
export default Dialog;
