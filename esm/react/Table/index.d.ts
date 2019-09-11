/// <reference types="react" />
import '../../css/font.css';
import '../../css/Table.css';
declare type DispatchParams = {
    type: string;
    data?: object[];
    rowIndex: number;
    fieldName?: string;
};
declare type OnChangeCallbackParams = {
    rowIndex: number;
    data: object[];
    fieldName: string;
};
declare type HandlerFunction = (newValue: any, tableData: object[], rowIndex: number, fieldName?: string) => void;
declare type TableColumn = {
    header?: string;
    tdProps?: (cellProps: CellRendererProps) => object;
    cell: (cellProps: CellRendererProps) => string | JSX.Element;
};
declare type ActionFlag = {
    actions: boolean;
};
declare type TableProps = {
    data: object[];
    columns: (TableColumn | ActionFlag)[];
    defaultRowData: object[];
    onRowAdd?: (newState: DispatchParams) => void;
    onRowRemove?: (newState: DispatchParams) => void;
    onCellChange?: (eventOptions: OnChangeCallbackParams) => void;
    actionButtonsShown?: boolean;
    isVisible?: boolean;
};
declare type CellRendererProps = {
    rowData: object;
    rowIndex: number;
    columnIndex: number;
    onCellChange?: HandlerFunction;
};
declare type RowEventProps = {
    data: object[];
    rowIndex: number;
    defaultRowData?: object;
};
declare const Table: ({ data, columns, defaultRowData, onRowAdd, onRowRemove, onCellChange, actionButtonsShown, isVisible }: TableProps) => JSX.Element;
export default Table;
export { Table, TableColumn, CellRendererProps, ActionFlag, RowEventProps };
