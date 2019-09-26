declare type item = {
    value: string;
    label?: string;
    isDisabled?: boolean;
};
declare const _default: {
    _handleItemClick: (item: item, onChange?: ((value: string) => void) | undefined) => void;
    _hasDuplicatedItems: (items?: item[] | undefined) => boolean;
    _hasValidValue: (items?: item[] | undefined, value?: string | undefined) => boolean | undefined;
};
export default _default;
