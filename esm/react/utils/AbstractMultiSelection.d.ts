declare type item = {
    value: string;
    label: string;
    isDisabled?: boolean;
};
declare const _default: {
    _hasDuplicatedItems: (items: item[]) => boolean;
    _hasValidValue: (items: item[], value: any) => boolean;
};
export default _default;
