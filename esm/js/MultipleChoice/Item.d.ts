import Control, { ControlProps } from '../Control';
import '../../css/Item.css';
declare type ItemData = {
    value: string;
    label?: string;
    isDisabled?: boolean;
};
declare type ItemProps = ControlProps & {
    value?: string;
    label?: string;
    className?: string;
    isDisabled?: boolean;
    isSelected: boolean;
    onClick?: (item: Item) => void;
};
declare class Item extends Control<ItemProps> {
    constructor(params: ItemProps);
    private _createCheckIconEl;
    rerender(changedAttr?: string[]): void;
    getValue(): string;
    select(): void;
    deselect(): void;
    disable(): void;
    enable(): void;
}
export default Item;
export { ItemData };
