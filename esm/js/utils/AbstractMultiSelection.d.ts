declare type ItemData = {
    value: string;
    label?: string;
    isDisabled?: boolean;
};
declare const _default: {
    _hasDuplicatedItems: (items?: ItemData[] | undefined) => boolean;
    _hasCheckedItemListDuplicated: (value?: string[] | undefined) => boolean;
    _hasValidValue: (items?: ItemData[] | undefined, value?: string | string[] | undefined) => boolean;
    _hasItemValue: (items: ItemData[]) => boolean;
};
export default _default;
