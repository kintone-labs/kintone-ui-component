declare type ControlProps = {
    isDisabled?: boolean;
    isVisible?: boolean;
};
declare class Control {
    protected _props: ControlProps;
    protected element: HTMLElement;
    rerender(changedAttr?: string[]): void;
    render(): HTMLElement;
    on(eventName: string, callback: (params?: any) => void): void;
    show(): void;
    hide(): void;
    disable(): void;
    enable(): void;
}
export { ControlProps };
export default Control;
