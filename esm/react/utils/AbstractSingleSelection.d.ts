declare type item = {
    value: string;
    label: string;
    isDisabled?: boolean;
};
declare const _default: {
    _handleItemClick: (item: item, onChange: (value: string) => void) => void;
    _hasDuplicatedItems: (items: item[]) => boolean;
    _hasValidValue: (items: item[], value: string) => boolean;
};
export default _default;
