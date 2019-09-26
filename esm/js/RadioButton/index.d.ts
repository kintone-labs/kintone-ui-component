import Control, { ControlProps } from '../Control';
import { item } from './Item';
import '../../css/RadioButton.css';
declare type RadioButtonProps = ControlProps & {
    name: string;
    value?: string;
    items?: item[];
    onChange?: (params?: any) => void;
};
declare class RadioButton extends Control {
    protected _props: RadioButtonProps;
    private itemComps?;
    constructor(params?: RadioButtonProps);
    private _handleItemClick;
    private _validator;
    render(): HTMLElement;
    rerender(changedAttr?: string[]): void;
    setValue(value: string): void;
    getValue(): string | undefined;
    setItems(items: Array<item>): void;
    getItems(): item[] | undefined;
    addItem(item: item): void;
    removeItem(index: number): false | void;
    disableItem(value: string): void;
    enableItem(value: string): void;
    on(eventName: string, callback: (params?: any) => void): void;
}
export default RadioButton;
