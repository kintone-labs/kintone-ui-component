import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

import '../../../css/Table.css';

const Table = ({data, columns, defaultRowData, onRowAdd, onRowRemove, onCellChange, actionButtonsShown, isVisible}) => {
  const _onCellChange = (newValue, tableData, rowIndex, fieldName) => {
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
Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    header: PropTypes.string.isRequired,
    cell: PropTypes.func.isRequired,
  })).isRequired,
  defaultRowData: PropTypes.object.isRequired,
  onRowAdd: PropTypes.func,
  onRowRemove: PropTypes.func,
  onCellChange: PropTypes.func,
  actionButtonsShown: PropTypes.bool,
  isVisible: PropTypes.bool
};
Table.defaultProps = {
  isVisible: true,
  actionButtonsShown: true
};

const TableHeaderRow = ({columns}) => {
  const header = columns.map((data, index) => {
    return data.header ? (
      <div key={'Table_Header_Column_' + index} className="kuc-table-th">
        <span className="kuc-header-label">{data.header}</span>
      </div>
    ) : '';
  });
  return header;
};
TableHeaderRow.propTypes = {
  columns: PropTypes.array,
};

const TableBody = ({columns, data, defaultRowData, onRowAdd, onRowRemove, actionButtonsShown, _onCellChange}) => {
  if (actionButtonsShown) {
    columns.push({actions: true});
  }
  return (
    <div className="kuc-table-tbody">
      {data.map((rowData, rowIndex) => (
        <div className="kuc-table-tr" key={rowIndex}>
          {columns.map((column, columnIndex) => {
            const {cell, accessor, actions, tdProps} = column;
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
                {...{rowData, rowIndex, columnIndex, accessor, cell, _onCellChange, tdProps}}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
TableBody.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  defaultRowData: PropTypes.object.isRequired,
  actionButtonsShown: PropTypes.bool,
  onRowAdd: PropTypes.func,
  onRowRemove: PropTypes.func,
  _onCellChange: PropTypes.func,
};

const TableCell = ({
  rowData,
  rowIndex,
  columnIndex,
  accessor,
  cell = () => '',
  _onCellChange,
  tdProps: tdPropsFn
}) => {
  const cellProps = {rowData, rowIndex, columnIndex};
  if (typeof _onCellChange === 'function') {
    cellProps.onCellChange = _onCellChange;
  }
  const content = accessor
    ? getValueByAccessor(accessor, rowData)
    : cell(cellProps);
  const tdProps = tdPropsFn ? tdPropsFn(cellProps) : {};
  return <div {...tdProps} className="kuc-table-td">{content}</div>;
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
