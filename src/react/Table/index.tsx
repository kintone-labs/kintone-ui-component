import React from 'react';
import IconButton from '../IconButton';
import '../../css/font.css';
import '../../css/Table.css';

type DispatchParams = {
  type?: string;
  data?: Array<Record<string, any>>;
  rowIndex?: number;
  fieldName?: string;
}

type OnChangeCallbackParams = {
  rowIndex: number;
  data: Array<Record<string, any>>;
  fieldName: string;
}

type HandlerFunction = (
  newValue: any,
  tableData?: Array<Record<string, any>>,
  rowIndex?: number,
  fieldName?: string
) => void

type TableColumn = {
  header: string;
  tdProps?: (cellProps: CellRendererProps) => Record<string, any>;
  cell: (cellProps: CellRendererProps) => string | JSX.Element;
}
type ActionFlag = {
  actions: boolean;
}
type TableProps = {
  data?: Array<Record<string, any>>;
  columns?: Array<TableColumn | ActionFlag>;
  defaultRowData?: Record<string, any>;
  onRowAdd?: (newState: DispatchParams) => void;
  onRowRemove?: (newState: DispatchParams) => void;
  onCellChange?: (eventOptions: OnChangeCallbackParams) => void;
  actionButtonsShown?: boolean;
  isVisible?: boolean;
}
type TableBodyProps = {
  columns?: Array<TableColumn | ActionFlag>;
  data?: Array<Record<string, any>>;
  defaultRowData?: Record<string, any>;
  onRowAdd?: (newState: DispatchParams) => void;
  onRowRemove?: (newState: DispatchParams) => void;
  _onCellChange?: HandlerFunction;
  actionButtonsShown?: boolean;
}
type TableHeaderProps = {
  columns?: Array<TableColumn | ActionFlag>;
}
type TableCellProps = {
  rowData?: Record<string, any>;
  rowIndex?: number;
  columnIndex?: number;
  cell?: (cellProps: CellRendererProps) => string | JSX.Element;
  _onCellChange?: HandlerFunction;
  tdProps?: (cellProps: CellRendererProps) => Record<string, unknown>;
}
type CellRendererProps = {
  rowData?: Record<string, unknown>;
  rowIndex?: number;
  columnIndex?: number;
  onCellChange?: HandlerFunction;
}
type TableCellActionsProps = {
  data: Array<Record<string, unknown>>;
  rowIndex: number;
  defaultRowData?: Record<string, unknown>;
  addRow: (options?: RowEventProps) => Array<Record<string, unknown>>;
  removeRow: (options: RowEventProps) => Array<Record<string, unknown>>;
  dispatch: (newState: DispatchParams) => void;
}
type RowEventProps = {
  data?: Array<Record<string, unknown>>;
  rowIndex: number;
  defaultRowData?: Record<string, unknown>;
}

const Table = ({data, columns, defaultRowData, onRowAdd, onRowRemove, onCellChange, actionButtonsShown = true, isVisible = true}: TableProps) => {
  const _onCellChange = (newValue: any, tableData: Array<Record<string, unknown>>, rowIndex: number, fieldName: string) => {
    if (onCellChange) {
      tableData[rowIndex][fieldName] = newValue;
      onCellChange({rowIndex, data: tableData, fieldName});
    }
  };
  return (
    <div className="kuc-table" style={{display: isVisible ? 'table' : 'none'}}>
      <div className="kuc-table-thead">
        <div className="kuc-table-tr">
          <TableHeaderRow columns={columns} />
        </div>
      </div>
      <TableBody {...{columns, data, defaultRowData, onRowAdd, onRowRemove, _onCellChange, actionButtonsShown}} />
    </div>
  );
};

const TableHeaderRow = ({columns}: TableHeaderProps) => {
  const header = columns && columns.map((data, index) => {
    return (data as TableColumn).header ? (
      <div key={'Table_Header_Column_' + index} className="kuc-table-th">
        <span className="kuc-header-label">{(data as TableColumn).header}</span>
      </div>
    ) : '';
  });
  return <React.Fragment>{header}</React.Fragment>;
};

const TableBody = ({columns, data, defaultRowData, onRowAdd, onRowRemove, actionButtonsShown, _onCellChange}: TableBodyProps) => {
  if (actionButtonsShown) {
    columns && columns.push({actions: true});
  }
  return (
    <div className="kuc-table-tbody">
      {data && data.map((rowData, rowIndex) => (
        <div className="kuc-table-tr" key={rowIndex}>
          {columns && columns.map((column, columnIndex) => {
            const {actions} = (column as ActionFlag);
            const {cell, tdProps} = (column as TableColumn);
            if (actions === true) {
              return (
                <TableCellActions
                  {...{key: columnIndex, data, defaultRowData, rowIndex, addRow, removeRow}}
                  dispatch={newState => {
                    if (onRowAdd && newState.type === 'ADD_ROW') {
                      onRowAdd(newState);
                    }
                    if (onRowRemove && newState.type === 'REMOVE_ROW') {
                      onRowRemove(newState);
                    }
                  }}
                />
              );
            }
            return (
              <TableCell
                key={columnIndex}
                {...{rowData, rowIndex, columnIndex, cell, _onCellChange, tdProps}}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

const TableCell = ({
  rowData,
  rowIndex,
  columnIndex,
  cell,
  _onCellChange,
  tdProps
}: TableCellProps) => {
  const cellProps: CellRendererProps = {rowData, rowIndex, columnIndex};
  if (typeof _onCellChange === 'function') {
    cellProps.onCellChange = _onCellChange;
  }
  const content = cell ? cell(cellProps) : '';
  const tdPropsObj = tdProps ? tdProps(cellProps) : {};
  return <div {...tdPropsObj} className="kuc-table-td">{content}</div>;
};

const TableCellActions = ({data, rowIndex, defaultRowData, addRow, removeRow, dispatch}: TableCellActionsProps) => {
  return (
    <div className="kuc-table-td action-group">
      <span style={{marginRight: '5px', display: 'inline-block'}}>
        <IconButton
          type="insert"
          color="blue"
          size="small"
          onClick={() =>{
            dispatch({
              type: 'ADD_ROW',
              data: addRow ? addRow({data, rowIndex, defaultRowData}) : [],
              rowIndex: rowIndex + 1
            });
          }
          }
        />
      </span>
      {data && data.length > 1 &&
        <span style={{display: 'inline-block'}}>
          <IconButton
            type="remove"
            color="gray"
            size="small"
            onClick={() =>
              dispatch({
                type: 'REMOVE_ROW',
                data: removeRow({data, rowIndex}),
                rowIndex: rowIndex
              })
            }
          />
        </span>
      }
    </div>
  );
};

const addRow = ({data, rowIndex, defaultRowData}: RowEventProps) => {
  if (!data || !defaultRowData) {
    return [];
  }
  const insertAt = rowIndex + 1;
  const newData = [...data.slice(0, insertAt), {...defaultRowData}, ...data.slice(insertAt)];
  return newData;
};

const removeRow = ({data, rowIndex}: RowEventProps) => {
  return data ? data.filter((item, index) => index !== rowIndex) : [];
};

export default Table;
export {Table, TableColumn, CellRendererProps, ActionFlag, RowEventProps};
