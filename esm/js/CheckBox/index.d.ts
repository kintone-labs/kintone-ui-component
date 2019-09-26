import Control, { ControlProps } from '../Control';
import { ItemData } from '../CheckBox/Item';
import '../../css/CheckBox.css';
declare type CheckboxProps = ControlProps & {
    items?: Array<ItemData>;
    value?: Array<string>;
    onChange?: (value?: Array<string>) => void;
};
declare class CheckBox extends Control {
    protected _props: CheckboxProps;
    private itemList;
    constructor(params?: CheckboxProps);
    private _renderItemList;
    private _validator;
    setValue(value: Array<string>): void;
    getValue(): Array<string> | undefined;
    addItem(item: ItemData): void;
    removeItem(index: number): void;
    getItem(index: number): ItemData | undefined;
    setItems(items: Array<ItemData>): void;
    getItems(): Array<ItemData> | undefined;
    disableItem(value: string): void;
    enableItem(value: string): void;
    rerender(changedAttr?: Array<string>): void;
    private _handleItemChange;
    on(eventName: string, callback: (params?: any) => void): void;
}
export default CheckBox;
