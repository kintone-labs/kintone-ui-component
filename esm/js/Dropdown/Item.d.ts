import Control, { ControlProps } from "../Control";
import "../../css/Item.css";
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
    onClick?: (item: item) => void;
};
declare class Item extends Control {
    protected _props: ItemProps;
    private inputEl;
    isSelected: boolean;
    item: item;
    constructor(params: ItemProps);
    private _createCheckIconEl;
    rerender(changedAttr?: string[]): void;
}
export default Item;
