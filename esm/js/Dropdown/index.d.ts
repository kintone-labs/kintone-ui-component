import '../polyfill';
import Control, { ControlProps } from '../Control';
import '../../css/Dropdown.css';
declare type item = {
    value: string;
    label?: string;
    isDisabled?: boolean;
};
declare type DropdownProps = ControlProps & {
    value?: string | null;
    items?: item[];
    onChange?: (params?: any) => void;
    listItemsShown?: (params?: any) => void;
};
declare class Dropdown extends Control<DropdownProps> {
    private itemComps?;
    private dropdownEl;
    private nameLabelEl;
    private listOuterEl;
    private label?;
    private className;
    private isListVisible;
    constructor(params?: DropdownProps);
    private _createDom;
    private _showItems;
    private _caclListOuterPosition;
    private _hideItems;
    private _handleDropdownClick;
    private _handleClickOutside;
    private _handleItemClick;
    private _createDownIconEl;
    private _renderSubContainer;
    private _validator;
    render(): HTMLElement;
    rerender(changedAttr?: string[]): void;
    setValue(value: string): void;
    getValue(): string | null | undefined;
    getItems(): item[] | undefined;
    addItem(data: item): void;
    setItems(items: item[]): void;
    removeItem(index: number): false | void;
    disableItem(value: string): void;
    enableItem(value: string): void;
    disable(): void;
    enable(): void;
    on(eventName: string, callback: (params?: any) => void): void;
}
export default Dropdown;
