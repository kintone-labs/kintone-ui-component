import { TableProps } from './';
declare type TableCellInitParams = {
    table: TableProps;
    rowData: Record<string, any>;
    rowIndex: number;
    columnIndex: number;
    updateRowData: (rowIndex: number, data: Array<Record<string, any>>, rerender: boolean, trigger: boolean, fieldName: string) => void;
};
declare type TableCellUpdateParams = {
    table: TableProps;
    rowData: Record<string, any>;
    rowIndex: number;
    columnIndex: number;
    element: HTMLElement | null;
};
declare type TableCellProps = {
    init?: (arg?: TableCellInitParams) => HTMLElement | null;
    update?: (arg?: TableCellUpdateParams) => void;
};
export default class TableCell {
    private _init?;
    private _update?;
    constructor({ init, update }?: TableCellProps);
    init(...args: any[]): HTMLElement | null;
    update(...args: any[]): void;
}
export {};
