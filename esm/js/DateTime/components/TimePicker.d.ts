import Control, { ControlProps } from '../../Control';
declare type TimePickerProps = ControlProps & {
    timeIntervals?: number;
    timeFormat?: string;
    onTimeClick?: (date: Date) => void;
};
declare class TimePicker extends Control {
    protected _props: TimePickerProps;
    constructor(params?: TimePickerProps);
    private _renderTimePickerContainer;
    private _renderTimePickerSelections;
    render(): HTMLElement;
    rerender(changedAttr: string[], options?: object): void;
    getElement(): HTMLElement;
}
export default TimePicker;
