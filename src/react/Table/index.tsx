import React from 'react';
import IconButton from '../IconButton';
import '../../css/font.css'
import '../../css/Table.css';

type DispatchParams = {
  type?: string,
  data?: object[],
  rowIndex?: number,
  fieldName?: string
}

type OnChangeCallbackParams = {
  rowIndex: number, 
  data: object[], 
  fieldName: string
}

type HandlerFunction = (
  newValue: any, 
  tableData?: object[], 
  rowIndex?: number, 
  fieldName?: string
) => void

type TableColumn = {
  header?: string,
  tdProps?: (cellProps: CellRendererProps) => object,
  cell?: (cellProps: CellRendererProps) => string | JSX.Element
}
type ActionFlag = {
  actions: boolean
}
type TableProps = {
  data?: object[], 
  columns?: (TableColumn | ActionFlag)[],
  defaultRowData?: object[], 
  onRowAdd?: (newState: DispatchParams) => void, 
  onRowRemove?: (newState: DispatchParams) => void,
  onCellChange?: (eventOptions: OnChangeCallbackParams) => void,
  actionButtonsShown?: boolean, 
  isVisible?: boolean
}
type TableBodyProps = {
  columns?: (TableColumn | ActionFlag)[],
  data?: object[], 
  defaultRowData?: object[], 
  onRowAdd?: (newState: DispatchParams) => void, 
  onRowRemove?: (newState: DispatchParams) => void,
  _onCellChange?: HandlerFunction,
  actionButtonsShown?: boolean
}
type TableHeaderProps = {
  columns?: (TableColumn | ActionFlag)[],
}
type TableCellProps = {
  rowData?: object,
  rowIndex?: number,
  columnIndex?: number,
  cell?: (cellProps: CellRendererProps) => string | JSX.Element,
  _onCellChange?: HandlerFunction,
  tdProps?: (cellProps: CellRendererProps) => object
}
type CellRendererProps = {
  rowData?: object;
  rowIndex?: number;
  columnIndex?: number;
  onCellChange?: HandlerFunction
}
type TableCellActionsProps = {
  data: object[],
  rowIndex: number,
  defaultRowData: object,
  addRow: (options?: RowEventProps) => object[],
  removeRow: (options: RowEventProps) => object[],
  dispatch: (newState: DispatchParams) => void
}
type RowEventProps = {
  data: object[], 
  rowIndex: number, 
  defaultRowData?: object
}

const Table = (propsTable?: TableProps) => {
  if(!propsTable){
    return null;
  }
  let {data=[], columns, defaultRowData, onRowAdd, onRowRemove, onCellChange, actionButtonsShown = true, isVisible = true}=propsTable;
  const _onCellChange = (newValue: any, tableData: object[], rowIndex: number, fieldName: string) => {
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

const TableHeaderRow = ({columns}:TableHeaderProps) => {
  if(!columns){
    return null;
  }
  const header = columns.map((data, index) => {
    return (data as TableColumn).header ? (
      <div key={'Table_Header_Column_' + index} className="kuc-table-th">
        <span className="kuc-header-label">{(data as TableColumn).header}</span>
      </div>
    ) : '';
  });
  return <React.Fragment>{header}</React.Fragment>;
};

const TableBody = (propsTableBody?: TableBodyProps) => {
  if(!propsTableBody || (propsTableBody && Object.keys(propsTableBody).length === 0)){
    return null;
  }
  let {columns, data=[], defaultRowData=[], onRowAdd, onRowRemove, actionButtonsShown, _onCellChange}=propsTableBody;
  if(!columns || !data ){
    return null;
  }

  if (actionButtonsShown) {
    columns.push({actions: true});
  }
  return (
    <div className="kuc-table-tbody">
      {data.map((rowData, rowIndex) => (
        <div className="kuc-table-tr" key={rowIndex}>
          {columns && columns.map((column, columnIndex) => {
            const {actions} = (column as ActionFlag)
            const {cell, tdProps} = (column as TableColumn);
            if (actions === true) {
              return (
                <TableCellActions
                {...{key: columnIndex, data, defaultRowData, rowIndex, addRow, removeRow}}
                dispatch={newState => {
                  if (onRowAdd && newState['type'] === 'ADD_ROW') {
                    onRowAdd(newState);
                  }
                  if (onRowRemove && newState['type'] === 'REMOVE_ROW') {
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

const TableCell = (propsCell: TableCellProps) => {
  if(!propsCell ||(propsCell && Object.keys(propsCell).length === 0) ){
    return null;
  }
  let {
    rowData,
    rowIndex,
    columnIndex,
    cell,
    _onCellChange,
    tdProps
  }= propsCell;
  const cellProps: CellRendererProps = {rowData, rowIndex, columnIndex};
  if (typeof _onCellChange === 'function') {
    cellProps.onCellChange = _onCellChange;
  }
  const content =cell ? cell(cellProps):"" ;
  const tdPropsObj = tdProps ? tdProps(cellProps) : {};
  return <div {...tdPropsObj} className="kuc-table-td">{content}</div>;
};

const TableCellActions = (propsTableCellAction: TableCellActionsProps) => {
  if(!propsTableCellAction || (propsTableCellAction && Object.keys(propsTableCellAction).length === 0)){
    return null;
  }
  let {data, rowIndex, defaultRowData, addRow, removeRow, dispatch}=propsTableCellAction;
  return (
    <div className="kuc-table-td action-group">
      <span style={{marginRight: '5px', display:'inline-block'}}>
        <IconButton
          type="insert"
          color="blue"
          size="small"
          onClick={() =>{
            dispatch({
              type: 'ADD_ROW',
              data:addRow ? addRow({data, rowIndex, defaultRowData}):[],
              rowIndex: rowIndex + 1
            })
          }
          }
        />
      </span>
      {data && data.length > 1 &&
        <span style={{display:'inline-block'}}>
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

const addRow = ({data, rowIndex, defaultRowData}:RowEventProps) => {
  if(!data || !rowIndex || !defaultRowData){
    return [];
  }
  const insertAt = rowIndex + 1;
  const newData = [...data.slice(0, insertAt), {...defaultRowData}, ...data.slice(insertAt)];
  return newData;
};

const removeRow = ({data, rowIndex}:RowEventProps) => {
  return data ? data.filter((item, index) => index !== rowIndex):[];
};

export default Table;
export {Table, TableColumn, CellRendererProps, ActionFlag, RowEventProps}
