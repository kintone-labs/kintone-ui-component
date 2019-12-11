declare type ControlProps = {
    isDisabled?: boolean;
    isVisible?: boolean;
};
declare class Control<T extends ControlProps> {
    protected _props: T;
    protected element: HTMLElement;
    constructor();
    rerender(changedAttr?: string[]): void;
    getIsDisabled(): boolean | undefined;
    render(): HTMLElement;
    on(eventName: string, callback: (params?: any) => void): void;
    show(): void;
    hide(): void;
    disable(): void;
    enable(): void;
}
export { ControlProps };
export default Control;
