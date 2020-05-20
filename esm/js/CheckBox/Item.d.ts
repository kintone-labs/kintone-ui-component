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
    isDisabled?: boolean;
    isSelected: boolean;
    onChange?: (item: Item) => void;
};
declare class Item extends Control<ItemProps> {
    private inputCheckboxElement;
    constructor(params?: ItemProps);
    rerender(changedAttr?: string[]): void;
    getValue(): string;
    select(): void;
    deselect(): void;
    disable(): void;
    enable(): void;
    generateGUID(): string;
}
export default Item;
export { ItemData };
