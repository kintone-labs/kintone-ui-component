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

      const rowTemplate = props.rowTemplate || [];
      this.dataTemplate = props.rowTemplate.map(element => {
        return element.props.value;
      });
      const value = props.value || [this.dataTemplate];

      this.state = {
        rowTemplate: rowTemplate,
        header: props.header || [],
        value: value
      };
    }

    componentWillReceiveProps({value}) {
      if (value) {
        this.setState({value});
      }
    }

    _getValue() {
      return this.state.value;
    }

    onCellChange(rowValue, rowIndex, columnIndex) {
      this.setState((prevState) => {
        const value = [...prevState.value];
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
        return {'value': value};
      });
    }

    onCellClick(rowIndex, columnIndex) {
      const data = {
        tableValue: this.state.value,
        cell: {
          row: rowIndex,
          colunm: columnIndex
        }
      };
      if (this.props.onCellClick) {
        this.props.onCellClick(data);
      }
    }

    addRow(index) {
      this.setState((prevState) => {
        const value = [...prevState.value];
        value.splice(index + 1, 0, this.dataTemplate);

        if (this.props.onRowAdd) {
          const data = {
            tableValue: value,
            row: index + 1
          };
          this.props.onRowAdd(data);
        }
        return {'value': value};
      });
    }

    removeRow(index) {
      this.setState((prevState) => {
        const value = [...prevState.value];
        value.splice(index, 1);

        if (this.props.onRowRemove) {
          const data = {
            tableValue: value
          };
          this.props.onRowRemove(data);
        }
      });
    }

    render() {
      if (this.props.isVisible === false) {
        return null;
      }

      const header = this.state.header.map((data, index) => {
        return (
          <div key={'Table_Header_Column_' + index} className="kuc-table-th">
            <span className="kuc-header-label">{data}</span>
          </div>
        );
      });

      const enableRemove = this.state.value.length > 1;

      return (
        <div className="kuc-table">
          <div className="kuc-table-thead">
            <div className="kuc-table-tr">
              {header}
            </div>
          </div>
          <div className="kuc-table-tbody">
            {this.state.value.map((rowValue, index) => (
              <TableRow
                key={index}
                index={index}
                value={rowValue}
                enableRemove={enableRemove}
                template={this.state.rowTemplate}
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