declare type ItemData = {
    value: string;
    label: string;
    isDisabled?: boolean;
};
declare const _default: {
    _hasDuplicatedItems: (items: ItemData[]) => boolean;
    _hasValidValue: (items: ItemData[], value: string | string[]) => boolean;
};
export default _default;
