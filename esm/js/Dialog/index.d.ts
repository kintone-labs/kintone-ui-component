import '../polyfill';
import Control, { ControlProps } from '../Control';
import '../../css/Dialog.css';
declare type DialogProps = ControlProps & {
    header?: string | HTMLElement;
    content?: string | HTMLElement;
    footer?: string | HTMLElement;
    showCloseButton?: boolean;
};
declare class Dialog extends Control<DialogProps> {
    private _headerDivEl;
    private _footerDivEl;
    private _bodyContentDivEl;
    private _closeButton;
    private _containerEl;
    constructor(params?: DialogProps);
    private _createDialogLayout;
    rerender(changedAttr?: string[]): void;
    private _validator;
    setHeader(headerContent: string | HTMLElement): void;
    getHeader(): string | HTMLElement | undefined;
    setFooter(footerContent: string | HTMLElement): void;
    getFooter(): string | HTMLElement | undefined;
    setContent(bodyContent: string | HTMLElement): void;
    getContent(): string | HTMLElement | undefined;
}
export default Dialog;
