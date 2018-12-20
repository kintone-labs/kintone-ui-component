import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

class Table extends Component {
    static propTypes = {
      rowTemplate: PropTypes.array
    };

    static defaultProps = {
      rowTemplate: []
    };

    constructor(props) {
      super(props);
      this.dataTemplate = props.rowTemplate.map(element => {
        return element.props.value;
      });
      const value = props.value || [this.dataTemplate];
      this.props.value = value;
    }

    _getValue() {
      return this.props.value;
    }

    onCellChange = (rowValue, rowIndex, columnIndex) => {
      const value = [...this.props.value];
      value[rowIndex] = rowValue;
      if (this.props.onCellChange) {
        const data = {
          tableValue: value,
          cell: {
            row: rowIndex,
            colunm: columnIndex
          }
        };
        this.props.onCellChange(data);
      }
    }

    onCellClick = (rowIndex, columnIndex) => {
      const data = {
        tableValue: this.props.value,
        cell: {
          row: rowIndex,
          colunm: columnIndex
        }
      };
      if (this.props.onCellClick) {
        this.props.onCellClick(data);
      }
    }

    addRow = (index) => {
      const value = [...this.props.value];
      value.splice(index + 1, 0, this.dataTemplate);
      if (this.props.onRowAdd) {
        const data = {
          tableValue: value,
          row: index + 1
        };
        this.props.onRowAdd(data);
      }
    }

    removeRow = (index) => {
      const value = [...this.props.value];
      value.splice(index, 1);
      if (this.props.onRowRemove) {
        const data = {
          tableValue: value
        };
        this.props.onRowRemove(data);
      }
    }

    render() {
      if (this.props.isVisible === false) {
        return null;
      }

      const header = this.props.header.map((data, index) => {
        return (
          <div key={'Table_Header_Column_' + index} className="kuc-table-th">
            <span className="kuc-header-label">{data}</span>
          </div>
        );
      });

      const enableRemove = this.props.value.length > 1;
      return (
        <div className="kuc-table">
          <div className="kuc-table-thead">
            <div className="kuc-table-tr">
              {header}
            </div>
          </div>
          <div className="kuc-table-tbody">
            {this.props.value.map((rowValue, index) => (
              <TableRow
                key={index}
                index={index}
                value={rowValue}
                enableRemove={enableRemove}
                template={this.props.rowTemplate}
                onRowAdd={this.addRow}
                onRowRemove={this.removeRow}
                onCellChange={this.onCellChange}
                onCellClick={this.onCellClick}
              />
            ))}
          </div>
        </div>
      );
    }
}

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

export default Table;