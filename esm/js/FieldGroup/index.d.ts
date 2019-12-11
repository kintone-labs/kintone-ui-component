import '../polyfill';
import Control, { ControlProps } from '../Control';
import '../../css/FieldGroup.css';
declare type FieldGroupProps = ControlProps & {
    content?: any;
    name?: string;
    toggle?: 'collapse' | 'expand';
    onToggle?: (toggle: string) => void;
    isVisible?: boolean;
};
declare class FieldGroup extends Control<FieldGroupProps> {
    private fgTab;
    private fgTabArrow;
    private fgTabLabel;
    private fgContents;
    constructor(params?: FieldGroupProps);
    private _getClassName;
    private _getArrowClassName;
    private _handleToggleClick;
    render(): HTMLElement;
    setContent(content: any): void;
    getContent(): any;
    setName(name: string): void;
    getName(): string | undefined;
    setToggle(toggle: 'collapse' | 'expand'): void;
    getToggle(): "collapse" | "expand" | undefined;
}
export default FieldGroup;
