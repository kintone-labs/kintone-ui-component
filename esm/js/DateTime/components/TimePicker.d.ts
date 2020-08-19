import Control, { ControlProps } from '../../Control';
declare type TimePickerProps = ControlProps & {
    timeIntervals?: number;
    timeFormat?: string;
    onTimeClick?: (date: Date) => void;
};
declare class TimePicker extends Control<TimePickerProps> {
    constructor(params?: TimePickerProps);
    private _renderTimePickerContainer;
    private _renderTimePickerSelections;
    render(): HTMLElement;
    rerender(changedAttr: string[], options?: Record<string, any>): void;
    getElement(): HTMLElement;
}
export default TimePicker;
