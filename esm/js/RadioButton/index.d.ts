import '../polyfill';
import Control, { ControlProps } from '../Control';
import { item } from './Item';
import '../../css/RadioButton.css';
declare type RadioButtonProps = ControlProps & {
    name: string;
    value?: string | null;
    items?: item[];
    onChange?: (params?: any) => void;
};
declare class RadioButton extends Control<RadioButtonProps> {
    private itemComps?;
    constructor(params?: RadioButtonProps);
    _handleItemClick(itemEl: any): void;
    private _validator;
    render(): HTMLElement;
    rerender(changedAttr?: string[]): void;
    setValue(value: string): void;
    getValue(): string | null | undefined;
    setItems(items: item[]): void;
    getItems(): item[] | undefined;
    addItem(obj: item): void;
    removeItem(index: number): void;
    disableItem(value: string): void;
    enableItem(value: string): void;
    on(eventName: string, callback: (params?: any) => void): void;
}
export default RadioButton;
