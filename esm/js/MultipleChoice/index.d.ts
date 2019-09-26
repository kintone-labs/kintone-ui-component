import Control, { ControlProps } from '../Control';
import { ItemData } from '../MultipleChoice/Item';
import '../../css/MultipleChoice.css';
declare type MultipleChoiceProps = ControlProps & {
    items?: Array<ItemData>;
    value?: Array<string>;
    onChange?: (value: Array<string> | undefined) => void;
};
declare class MultipleChoice extends Control {
    protected _props: MultipleChoiceProps;
    private itemList;
    constructor(params?: MultipleChoiceProps);
    private _renderItemList;
    private _validator;
    setValue(value: Array<string>): void;
    getValue(): Array<string> | undefined;
    addItem(item: ItemData): void;
    removeItem(index: number): void;
    getItem(index: number): ItemData;
    setItems(items: Array<ItemData>): void;
    getItems(): Array<ItemData> | undefined;
    disableItem(value: string): void;
    enableItem(value: string): void;
    rerender(changedAttr?: Array<string>): void;
    private _handleItemChange;
    on(eventName: string, callback: (params?: any) => void): void;
}
export default MultipleChoice;
