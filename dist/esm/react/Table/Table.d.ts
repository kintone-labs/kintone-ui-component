/// <reference types="react" />
import '../../css/Table.css';
declare type TableColumn = {
    header?: string;
    tdProps?: Function;
    cell: (cellProps: CellRendererProps) => string | JSX.Element;
};
declare type ActionFlag = {
    actions: boolean;
};
declare type TableProps = {
    data: object[];
    columns: (TableColumn | ActionFlag)[];
    defaultRowData: object[];
    onRowAdd?: Function;
    onRowRemove?: Function;
    onCellChange?: Function;
    actionButtonsShown?: boolean;
    isVisible?: boolean;
};
declare type CellRendererProps = {
    rowData: object;
    rowIndex: number;
    columnIndex: number;
    onCellChange?: (newValue: any, tableData: object[], rowIndex: number, fieldName: string) => void;
};
declare const Table: ({ data, columns, defaultRowData, onRowAdd, onRowRemove, onCellChange, actionButtonsShown, isVisible }: TableProps) => JSX.Element;
export default Table;
