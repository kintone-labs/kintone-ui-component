/// <reference types="react" />
declare type PickerProps = {
    hexString: string;
    initColor: string;
    pickerDisplay?: boolean;
    onChange: (hexString: string) => void;
    onCancel: () => void;
    onSubmit: (hexString: string) => void;
};
export default function Picker(props: PickerProps): JSX.Element;
export {};
