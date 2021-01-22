declare type item = {
    value: string;
    label?: string;
    isDisabled?: boolean;
};
declare type items = item[];
declare const _default: {
    _handleItemClick: (item: item, onChange?: ((value: string) => void) | undefined) => void;
    _hasDuplicatedItems: (items?: items | undefined) => boolean;
    _hasValidItems: (items?: items | undefined) => boolean;
    _hasValidValue: (items?: items | undefined, value?: string | undefined) => boolean | undefined;
};
export default _default;
