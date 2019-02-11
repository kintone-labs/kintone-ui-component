import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

const Table = ({data, onChange, keyField = 'id', columns}) => {
  return (
    <div className="kuc-table">
      <div className="kuc-table-thead">
        <div className="kuc-table-tr">
          <TableHeaderRow columns={columns} />
        </div>
      </div>
      <TableBody {...{columns, data, onChange, keyField}} />
    </div>
  );
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

const TableBody = ({columns, data, onChange, keyField}) => {
  return (
    <div className="kuc-table-tbody">
      {data.map((rowData, rowIndex) => (
        <div className="kuc-table-tr" key={rowData[keyField] || rowIndex}>
          {columns.map((column, columnIndex) => {
            const {cellRenderer, accessor, actions, tdProps} = column;
            if (actions === true) {
              return (
                <TableCellActions
                  {...{key: columnIndex, data, rowIndex, addRow, removeRow}}
                  dispatch={newState => {
                    onChange && onChange(newState);
                  }}
                />
              );
            }
            return (
              <TableCell
                key={columnIndex}
                {...{rowData, rowIndex, columnIndex, accessor, cellRenderer, tdProps}}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
TableBody.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  onChange: PropTypes.func,
  keyField: PropTypes.string
};

const TableCell = ({
  rowData,
  rowIndex,
  columnIndex,
  accessor,
  cellRenderer = () => '',
  tdProps: tdPropsFn
}) => {
  const cellProps = {rowData, rowIndex, columnIndex};
  const content = accessor
    ? getValueByAccessor(accessor, rowData)
    : cellRenderer(cellProps);
  const tdProps = tdPropsFn ? tdPropsFn(cellProps) : {};
  return <div {...tdProps} className="kuc-table-td">{content}</div>;
};

const TableCellActions = ({data, rowIndex, addRow, removeRow, dispatch}) => {
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
              data: addRow({data, rowIndex}),
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
  data: PropTypes.array,
  rowIndex: PropTypes.number,
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

const addRow = ({data, rowIndex}) => {
  const insertAt = rowIndex + 1;
  const newData = [...data.slice(0, insertAt), {}, ...data.slice(insertAt)];
  return newData;
};

const removeRow = ({data, rowIndex}) => {
  return data.filter((item, index) => index !== rowIndex);
};

export default Table;
