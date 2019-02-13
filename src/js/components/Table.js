/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {render} from 'react-dom';
import TableReact from '../components-react/Table';
import PropTypes from 'prop-types';
import TableCell from './TableCell';

export default class Table {
  constructor({data, defaultRowData, columns, onRowAdd, onRowRemove, onCellChange}) {
    this.data = data;
    this.onRowAdd = onRowAdd;
    this.onRowRemove = onRowRemove;
    this.onCellChange = onCellChange;
    this.columns = columns.map(({header}) => {
      return {
        header
      };
    });
    this.cellsTemplate = columns.map(({cell}) => {
      return cell;
    });
    this.defaultRowData = defaultRowData;
  }

  _handleOnChange = ({type, rowIndex, data}) => {
    if (type === 'ADD_ROW') {
      if (this.onRowAdd) {
        const rowData = this.onRowAdd({rowIndex, rowData: data[rowIndex]});
        if (rowData) {
          data[rowIndex] = rowData;
        }
      } else {
        data[rowIndex] = JSON.parse(JSON.stringify(this.defaultRowData));
      }
    }
    this.data = data;
    this._renderCells();
    this._triggerChange({type, rowIndex, data});
  };

  _triggerChange(...args) {
    const {type} = args[0];
    if (type === 'REMOVE_ROW' && this.onRowRemove) {
      this.onRowRemove(...args);
    }
    if (type === 'CELL_CHANGE' && this.onCellChange) {
      this.onCellChange(...args);
    }
  }

  _renderCells() {
    const table = this;
    const rowsEl = [...this.el.querySelectorAll('.kuc-table-tbody > .kuc-table-tr')];

    for (const [rowIndex, rowEl] of rowsEl.entries()) {
      const rowData = this.data[rowIndex];
      const updateRowData = this.updateRowData.bind(this, rowIndex);
      for (const [index, cellTemplate] of this.cellsTemplate.entries()) {
        const cell = rowEl.childNodes[index];
        let element;
        let cellInstance;
        if (cell.childNodes.length === 0) {
          cellInstance = cellTemplate();
          element = cellInstance.init({
            table,
            rowData,
            rowIndex,
            updateRowData
          });
          cell.appendChild(element);
          cell.__tableCellInstance = cellInstance;
        }
        cellInstance = cell.__tableCellInstance;
        cellInstance.update({table, rowData, rowIndex, element});
      }
    }
  }

  _isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }

  _mergeDeep(target, source) {
    const output = Object.assign({}, target);
    if (this._isObject(target) && this._isObject(source)) {
      Object.keys(source).forEach(key => {
        if (this._isObject(source[key])) {
          if (!(key in target)) Object.assign(output, {[key]: source[key]});
          else output[key] = this._mergeDeep(target[key], source[key]);
        } else {
          Object.assign(output, {[key]: source[key]});
        }
      });
    }
    return output;
  }

  render() {
    const wrapperEl = document.createElement('span');
    render(
      <StatefulTable
        data={this.data}
        columns={this.columns}
        onChange={this._handleOnChange}
      />,
      wrapperEl, () => {
        this.el = wrapperEl.childNodes[0];
        this._renderCells();
      }
    );
    return wrapperEl;
  }

  updateRowData(rowIndex, data, rerender = true) {
    const rowData = this._mergeDeep(this.data[rowIndex], data);
    const type = 'CELL_CHANGE';
    this.data[rowIndex] = rowData;
    if (rerender) {
      this._renderCells();
    }
    this._triggerChange({type, data: this.data, rowIndex});
  }
}
Table.Cell = TableCell;

class StatefulTable extends React.Component {
  propTypes = {
    data: PropTypes.array,
    onChange: PropTypes.func,
    columns: PropTypes.array
  }

  state = {
    data: this.props.data
  }

  handleChange = ({type, data, rowIndex}) => {
    if (type === 'ADD_ROW') {
      data[rowIndex] = {};
    }

    this.setState({data}, () => {
      const {onChange} = this.props;
      if (!onChange) {
        return;
      }
      onChange({data, type, rowIndex});
    });
  };

  render() {
    const data = this.state.data;
    const columns = [...this.props.columns, {actions: true}];
    return (
      <TableReact data={data} columns={columns} onChange={this.handleChange} />
    );
  }
}
