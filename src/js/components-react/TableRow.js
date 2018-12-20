import React, {Component, cloneElement} from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

class TableRow extends Component {
  addRow = () => {
    this.props.onRowAdd(this.props.index);
  }

  removeRow = () => {
    this.props.onRowRemove(this.props.index);
  }

  handleOnCellChange = (value, cellIndex) => {
    const rowValue = this.props.value.slice();
    rowValue[cellIndex] = value;
    this.props.onCellChange(rowValue, this.props.index, cellIndex);
  }

  handleOnCellClick = (cellIndex) => {
    const rowIndex = this.props.index;
    this.props.onCellClick(rowIndex, cellIndex);
  }

  render() {
    const addIcon = (
      <span style={{marginRight: '5px'}}>
        <IconButton
          type="insert"
          color="blue"
          size="small"
          onClick={this.addRow}
        />
      </span>
    );

    let removeIcon = null;
    if (this.props.enableRemove) {
      removeIcon = (
        <span>
          <IconButton
            type="remove"
            color="gray"
            size="small"
            onClick={this.removeRow}
          />
        </span>
      );
    }

    const listItems = this.props.template.map((cell, index) => {
      const newCell = cloneElement(cell,
        {
          value: this.props.value[index],
          onChange: (value) => {
            this.handleOnCellChange(value, index);
          },
          onClick: () => {
            this.handleOnCellClick(index);
          },
          name: cell.props.name + '_' + this.props.index + '_' + index
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
  }
}

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
