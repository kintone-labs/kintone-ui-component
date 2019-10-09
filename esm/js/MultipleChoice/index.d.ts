import '../polyfill';
import Control, { ControlProps } from '../Control';
import { ItemData } from '../MultipleChoice/Item';
import '../../css/MultipleChoice.css';
declare type MultipleChoiceProps = ControlProps & {
    items?: ItemData[];
    value?: string[];
    onChange?: (value: string[] | undefined) => void;
};
declare class MultipleChoice extends Control<MultipleChoiceProps> {
    private itemList;
    constructor(params?: MultipleChoiceProps);
    private _renderItemList;
    private _validator;
    setValue(value: string[]): void;
    getValue(): string[] | undefined;
    addItem(item: ItemData): void;
    removeItem(index: number): void;
    getItem(index: number): ItemData;
    setItems(items: ItemData[]): void;
    getItems(): ItemData[] | undefined;
    disableItem(value: string): void;
    enableItem(value: string): void;
    rerender(changedAttr?: string[]): void;
    private _handleItemChange;
    on(eventName: string, callback: (params?: any) => void): void;
}
export default MultipleChoice;
