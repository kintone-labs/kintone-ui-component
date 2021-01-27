/// <reference types="react" />
import '../../css/font.css';
import '../../css/Item.css';
declare type item = {
    value: string;
    label?: string;
    isDisabled?: boolean;
};
declare type ItemProps = {
    item: item;
    isVisible?: boolean;
    isDisabled?: boolean;
    selected: boolean;
    onClick?: (data: item) => void;
    onChange?: (data: item) => void;
    name?: string;
    type?: string;
    className?: string;
};
declare const Item: (props: ItemProps) => JSX.Element | null;
export default Item;
