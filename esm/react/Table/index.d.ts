/// <reference types="react" />
import '../../css/font.css';
import '../../css/Table.css';
declare type DispatchParams = {
    type?: string;
    data?: Array<Record<string, any>>;
    rowIndex?: number;
    fieldName?: string;
};
declare type OnChangeCallbackParams = {
    rowIndex: number;
    data: Array<Record<string, any>>;
    fieldName: string;
};
declare type HandlerFunction = (newValue: any, tableData?: Array<Record<string, any>>, rowIndex?: number, fieldName?: string) => void;
declare type TableColumn = {
    header: string;
    tdProps?: (cellProps: CellRendererProps) => Record<string, any>;
    cell: (cellProps: CellRendererProps) => string | JSX.Element;
};
declare type ActionFlag = {
    actions: boolean;
};
declare type TableProps = {
    data?: Array<Record<string, any>>;
    columns?: Array<TableColumn | ActionFlag>;
    defaultRowData?: Record<string, any>;
    onRowAdd?: (newState: DispatchParams) => void;
    onRowRemove?: (newState: DispatchParams) => void;
    onCellChange?: (eventOptions: OnChangeCallbackParams) => void;
    actionButtonsShown?: boolean;
    isVisible?: boolean;
};
declare type CellRendererProps = {
    rowData?: Record<string, unknown>;
    rowIndex?: number;
    columnIndex?: number;
    onCellChange?: HandlerFunction;
};
declare type RowEventProps = {
    data?: Array<Record<string, unknown>>;
    rowIndex: number;
    defaultRowData?: Record<string, unknown>;
};
declare const Table: ({ data, columns, defaultRowData, onRowAdd, onRowRemove, onCellChange, actionButtonsShown, isVisible }: TableProps) => JSX.Element;
export default Table;
export { Table, TableColumn, CellRendererProps, ActionFlag, RowEventProps };
