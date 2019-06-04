/// <reference types="react" />
declare type TimePickerProps = {
    pickerDisplay?: string;
    timeRef: any;
    onTimeClick: (date: Date | null) => void;
};
declare const TimePicker: ({ pickerDisplay, timeRef, onTimeClick }: TimePickerProps) => JSX.Element;
export default TimePicker;
