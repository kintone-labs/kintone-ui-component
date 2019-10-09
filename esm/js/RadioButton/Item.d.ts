import Control, { ControlProps } from '../Control';
import '../../css/Item.css';
declare type item = {
    value: string;
    label?: string;
    isDisabled?: boolean;
};
declare type ItemProps = ControlProps & {
    item: item;
    selected: boolean;
    name?: string;
    type?: string;
    className?: string;
};
declare class Item extends Control<ItemProps> {
    private inputEl;
    id: string;
    value: string;
    constructor(params: ItemProps);
    rerender(changedAttr?: string[]): void;
    on(eventName: string, callback: (params?: any) => void): void;
}
export default Item;
export { item };
