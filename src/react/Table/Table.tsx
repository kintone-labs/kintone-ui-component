import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import '../../css/Table.css';

type TableColumn = {
  header?: string,
  tdProps?: Function,
  cell: Function
}
type ActionFlag = {
  actions: boolean
}
type TableProps = {
  data: object[], 
  columns: (TableColumn | ActionFlag)[],
  defaultRowData: object[], 
  onRowAdd?: Function, 
  onRowRemove?: Function,
  onCellChange?: Function,
  actionButtonsShown?: boolean, 
  isVisible?: boolean
}
type TableBodyProps = {
  columns: (TableColumn | ActionFlag)[],
  data: object[], 
  defaultRowData: object[], 
  onRowAdd?: Function, 
  onRowRemove?: Function,
  _onCellChange?: Function,
  actionButtonsShown?: boolean
}
type TableHeaderProps = {
  columns: (TableColumn | ActionFlag)[],
}
type CellRendererProps = {
  rowData: object;
  rowIndex: number;
  columnIndex: number;
  'onCellChange': () => void;
}

const Table = ({data, columns, defaultRowData, onRowAdd, onRowRemove, onCellChange, actionButtonsShown = true, isVisible = true}: TableProps) => {
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
  const header = columns.map((data, index) => {
    return (data as TableColumn).header ? (
      <div key={'Table_Header_Column_' + index} className="kuc-table-th">
        <span className="kuc-header-label">{(data as TableColumn).header}</span>
      </div>
    ) : '';
  });
  return <React.Fragment>{header}</React.Fragment>;
};
TableHeaderRow.propTypes = {
  columns: PropTypes.array,
};

const TableBody = ({columns, data, defaultRowData, onRowAdd, onRowRemove, actionButtonsShown, _onCellChange}: TableBodyProps) => {
  if (actionButtonsShown) {
    columns.push({actions: true});
  }
  return (
    <div className="kuc-table-tbody">
      {data.map((rowData, rowIndex) => (
        <div className="kuc-table-tr" key={rowIndex}>
          {columns.map((column, columnIndex) => {
            const {actions} = (column as ActionFlag)
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
}) => {
  const cellProps: CellRendererProps = {rowData, rowIndex, columnIndex, 'onCellChange': () => {}};
  if (typeof _onCellChange === 'function') {
    cellProps.onCellChange = _onCellChange;
  }
  const content = cell(cellProps);
  const tdPropsObj = tdProps ? tdProps(cellProps) : {};
  return <div {...tdPropsObj} className="kuc-table-td">{content}</div>;
};

const TableCellActions = ({data, rowIndex, defaultRowData, addRow, removeRow, dispatch}) => {
  return (
    <div className="kuc-table-td action-group">
      <span style={{marginRight: '5px'}}>
        <IconButton
          type="insert"
          color="blue"
          size="small"
          onClick={() =>
            dispatch({
              type: 'ADD_ROW',
              data: addRow({data, rowIndex, defaultRowData}),
              rowIndex: rowIndex + 1
            })
          }
        />
      </span>
      {data.length > 1 &&
        <span>
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
TableCellActions.propTypes = {
  data: PropTypes.array.isRequired,
  rowIndex: PropTypes.number,
  defaultRowData: PropTypes.object.isRequired,
  addRow: PropTypes.func,
  removeRow: PropTypes.func,
  dispatch: PropTypes.func
};

const getValueByAccessor = (accessor, data) => {
  switch (typeof accessor) {
    case 'string':
      return data[accessor];
    case 'function':
      return accessor(data);
    default:
      return '';
  }
};

const addRow = ({data, rowIndex, defaultRowData}) => {
  const insertAt = rowIndex + 1;
  const newData = [...data.slice(0, insertAt), {...defaultRowData}, ...data.slice(insertAt)];
  return newData;
};

const removeRow = ({data, rowIndex}) => {
  return data.filter((item, index) => index !== rowIndex);
};

export default Table;
