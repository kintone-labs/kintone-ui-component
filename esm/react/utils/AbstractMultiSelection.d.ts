declare type item = {
    value: string;
    label?: string;
    isDisabled?: boolean;
};
declare type items = item[];
declare const _default: {
    _hasDuplicatedItems: (items: items) => boolean;
    _hasCheckedItemListDuplicated: (value?: string[] | undefined) => boolean;
    _hasValidValue: (items: items, value: any) => boolean;
};
export default _default;
