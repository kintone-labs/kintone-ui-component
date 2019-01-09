import React, {cloneElement} from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

const RowItem = (props) => {
  return (
    <div
      className="kuc-table-td"
    >
      {props.newCell}
    </div>
  );
};
RowItem.propTypes = {
  newCell: PropTypes.object
};

const TableRow = (props) => {
  const addRow = () => {
    props.onRowAdd(props.index);
  };

  const removeRow = () => {
    props.onRowRemove(props.index);
  };

  const handleOnCellChange = function(value, cellIndex) {
    const rowValue = props.value.slice();
    rowValue[cellIndex] = value;
    props.onCellChange(rowValue, props.index, cellIndex);
  };

  const handleOnCellClick = (cellIndex) => {
    const rowIndex = props.index;
    props.onCellClick(rowIndex, cellIndex);
  };

  const addIcon = (
    <span style={{marginRight: '5px'}}>
      <IconButton
        type="insert"
        color="blue"
        size="small"
        onClick={addRow}
      />
    </span>
  );

  let removeIcon = null;
  if (props.enableRemove) {
    removeIcon = (
      <span>
        <IconButton
          type="remove"
          color="gray"
          size="small"
          onClick={removeRow}
        />
      </span>
    );
  }

  const listItems = props.template.map((cell, index) => {
    const newCell = cloneElement(cell,
      {
        value: props.value[index],
        onChange: (value) => {
          handleOnCellChange(value, index);
        },
        onClick: () => {
          handleOnCellClick(index);
        },
        name: cell.props.name + '_' + props.index + '_' + index
      }
    );
    return <RowItem key={newCell.props.value} newCell={newCell} />;
  });

  return (
    <div className="kuc-table-tr">
      {listItems}
      <div className="kuc-table-td action-group">
        {addIcon}
        {removeIcon}
      </div>
    </div>
  );
};
TableRow.propTypes = {
  index: PropTypes.number,
  enableRemove: PropTypes.bool,
  template: PropTypes.arrayOf(PropTypes.element),
  value: PropTypes.array,
  onRowAdd: PropTypes.func,
  onRowRemove: PropTypes.func,
  onCellChange: PropTypes.func,
  onCellClick: PropTypes.func
};
export default TableRow;