import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

const Table = (props) => {
  const dataTemplate = props.rowTemplate.map(element => {
    return element.props.value;
  });
  props.value = props.value || [dataTemplate];

  const onCellChange = (rowValue, rowIndex, columnIndex) => {
    const value = [...props.value];
    value[rowIndex] = rowValue;
    if (props.onCellChange) {
      const data = {
        tableValue: value,
        cell: {
          row: rowIndex,
          colunm: columnIndex
        }
      };
      props.onCellChange(data);
    }
  };

  const onCellClick = (rowIndex, columnIndex) => {
    const data = {
      tableValue: props.value,
      cell: {
        row: rowIndex,
        colunm: columnIndex
      }
    };
    if (props.onCellClick) {
      props.onCellClick(data);
    }
  };

  const addRow = (index) => {
    const value = [...props.value];
    value.splice(index + 1, 0, dataTemplate);
    if (props.onRowAdd) {
      const data = {
        tableValue: value,
        row: index + 1
      };
      props.onRowAdd(data);
    }
  };

  const removeRow = (index) => {
    const value = [...props.value];
    value.splice(index, 1);
    if (props.onRowRemove) {
      const data = {
        tableValue: value
      };
      props.onRowRemove(data);
    }
  };

  if (props.isVisible === false) {
    return null;
  }

  const header = props.header.map((data, index) => {
    return (
      <div key={'Table_Header_Column_' + index} className="kuc-table-th">
        <span className="kuc-header-label">{data}</span>
      </div>
    );
  });

  const enableRemove = props.value.length > 1;
  return (
    <div className="kuc-table">
      <div className="kuc-table-thead">
        <div className="kuc-table-tr">
          {header}
        </div>
      </div>
      <div className="kuc-table-tbody">
        {props.value.map((rowValue, index) => (
          <TableRow
            key={index}
            index={index}
            value={rowValue}
            enableRemove={enableRemove}
            template={props.rowTemplate}
            onRowAdd={addRow}
            onRowRemove={removeRow}
            onCellChange={onCellChange}
            onCellClick={onCellClick}
          />
        ))}
      </div>
    </div>
  );
};

Table.propTypes = {
  isVisible: PropTypes.bool,
  header: PropTypes.arrayOf(PropTypes.string),
  rowTemplate: PropTypes.arrayOf(PropTypes.element),
  value: PropTypes.array,
  onCellChange: PropTypes.func,
  onCellClick: PropTypes.func,
  onRowAdd: PropTypes.func,
  onRowRemove: PropTypes.func
};
Table.defaultProps = {
  rowTemplate: []
};

export default Table;