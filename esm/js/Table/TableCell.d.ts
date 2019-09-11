declare type TableCellProps = {
    init?: Function;
    update?: Function;
};
export default class TableCell {
    private _init?;
    private _update?;
    constructor({ init, update }?: TableCellProps);
    init(...args: any[]): any;
    update(...args: any[]): void;
}
export {};
