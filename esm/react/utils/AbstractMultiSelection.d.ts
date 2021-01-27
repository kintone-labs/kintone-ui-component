declare type item = {
    value: string;
    label?: string;
    isDisabled?: boolean;
};
declare type items = item[];
declare const _default: {
    _hasDuplicatedItems: (listItems: items) => boolean;
    _hasCheckedItemListDuplicated: (value?: string[] | undefined) => boolean;
    _hasValidValue: (listItems: items, value: any) => boolean;
};
export default _default;
