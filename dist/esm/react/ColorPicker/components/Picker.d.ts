/// <reference types="react" />
declare type PickerProps = {
    hexString: string;
    pickerDisplay?: boolean;
    onChange: (hexString: string) => void;
    onCancel: () => void;
    onSubmit: (hexString: string) => void;
};
export default function Picker(props: PickerProps): JSX.Element;
export {};
