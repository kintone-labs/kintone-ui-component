declare type item = {
    value: string;
    label?: string;
    isDisabled?: boolean;
};
declare type items = item[];
declare const _default: {
    _handleItemClick: (data: item, onChange?: ((value: string) => void) | undefined) => void;
    _hasDuplicatedItems: (listItems?: items | undefined) => boolean;
    _hasValidItems: (listItems?: items | undefined) => boolean;
    _hasValidValue: (listItems?: items | undefined, value?: string | undefined) => boolean | undefined;
};
export default _default;
