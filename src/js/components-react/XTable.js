import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

const XTable = ({data, onChange, keyField = 'id', columns}) => {
  return (
    <div className="kuc-table">
      <div className="kuc-table-thead">
        <div className="kuc-table-tr">
          <XTableHeaderRow columns={columns} />
        </div>
      </div>
      <XTableBody {...{columns, data, onChange, keyField}} />
    </div>
  );
};

const XTableHeaderRow = ({columns}) => {
  const header = columns.map((data, index) => {
    return data.header ? (
      <div key={'Table_Header_Column_' + index} className="kuc-table-th">
        <span className="kuc-header-label">{data.header}</span>
      </div>
    ) : '';
  });
  return header;
};
XTableHeaderRow.propTypes = {
  columns: PropTypes.array,
};

const XTableBody = ({columns, data, onChange, keyField}) => {
  return (
    <div className="kuc-table-tbody">
      {data.map((rowData, rowIndex) => (
        <div className="kuc-table-tr" key={rowData[keyField] || rowIndex}>
          {columns.map((column, columnIndex) => {
            const {cell, accessor, actions, tdProps} = column;
            if (actions === true) {
              return (
                <XTableCellActions
                  {...{key: columnIndex, data, rowIndex, addRow, removeRow}}
                  dispatch={newState => {
                    onChange && onChange(newState);
                  }}
                />
              );
            }
            return (
              <XTableCell
                key={columnIndex}
                {...{rowData, rowIndex, accessor, cell, tdProps}}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
XTableBody.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  onChange: PropTypes.func,
  keyField: PropTypes.string
};

const XTableCell = ({
  rowData,
  rowIndex,
  accessor,
  cell = () => '',
  tdProps: tdPropsFn
}) => {
  const cellProps = {rowData, rowIndex};
  const content = accessor
    ? getValueByAccessor(accessor, rowData)
    : cell(cellProps);
  const tdProps = tdPropsFn ? tdPropsFn(cellProps) : {};
  return <div {...tdProps} className="kuc-table-td">{content}</div>;
};

const XTableCellActions = ({data, rowIndex, addRow, removeRow, dispatch}) => {
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
XTableCellActions.propTypes = {
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

export default XTable;
