import '../polyfill';
import Control, { ControlProps } from '../Control';
import { ItemData } from '../CheckBox/Item';
import '../../css/CheckBox.css';
declare type CheckboxProps = ControlProps & {
    items?: ItemData[];
    value?: string[];
    onChange?: (value?: string[]) => void;
};
declare class CheckBox extends Control<CheckboxProps> {
    private itemList;
    constructor(params?: CheckboxProps);
    private _renderItemList;
    private _validator;
    setValue(value: string[]): void;
    getValue(): string[] | undefined;
    addItem(item: ItemData): void;
    removeItem(index: number): void;
    getItem(index: number): ItemData | undefined;
    setItems(items: ItemData[]): void;
    getItems(): ItemData[] | undefined;
    disableItem(value: string): void;
    enableItem(value: string): void;
    rerender(changedAttr?: string[]): void;
    private _handleItemChange;
    on(eventName: string, callback: (params?: any) => void): void;
}
export default CheckBox;
