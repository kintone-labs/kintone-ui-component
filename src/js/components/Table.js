/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {render} from 'react-dom';
import TableReact from '../components-react/Table';
import PropTypes from 'prop-types';
import TableCell from './TableCell';

export default class Table {
  constructor({data, defaultRowData, columns, actionButtonsShown, onRowAdd, onRowRemove, onCellChange}) {
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
    this.actionButtonsShown = actionButtonsShown !== undefined ? actionButtonsShown : true;
  }

  _handleOnChange = ({type, rowIndex, data}) => {
    if (type === 'ADD_ROW') {
      if (this.onRowAdd) {
        const rowData = this.onRowAdd({rowIndex, data});
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
    delete args[0].type;
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
      for (const [columnIndex, cellTemplate] of this.cellsTemplate.entries()) {
        const cell = rowEl.childNodes[columnIndex];
        let element;
        let cellInstance;
        if (cell.childNodes.length === 0) {
          cellInstance = cellTemplate();
          element = cellInstance.init({
            table,
            rowData,
            rowIndex,
            columnIndex,
            updateRowData
          });
          cell.appendChild(element);
          cell.__tableCellInstance = cellInstance;
        }
        cellInstance = cell.__tableCellInstance;
        cellInstance.update({table, rowData, rowIndex, columnIndex, element});
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
        onRowRemove={this._handleOnChange}
        onRowAdd={this._handleOnChange}
        actionButtonsShown={this.actionButtonsShown}
        ref={el => (this._reactObject = el)}
      />,
      wrapperEl, () => {
        this.el = wrapperEl.childNodes[0];
        this._renderCells();
      }
    );
    return wrapperEl;
  }

  updateRowData(rowIndex, data, rerender = true, trigger = true) {
    const rowData = this._mergeDeep(this.data[rowIndex], data);
    const type = 'CELL_CHANGE';
    this.data[rowIndex] = rowData;
    if (rerender) {
      this._renderCells();
    }
    if (trigger) {
      this._triggerChange({type, data: this.data, rowIndex});
    }
  }

  showActionButtons() {
    const actionButtonsShown = true;
    if (this._reactObject) {
      this._reactObject.setState({actionButtonsShown});
    }
  }

  hideActionButtons() {
    const actionButtonsShown = false;
    if (this._reactObject) {
      this._reactObject.setState({actionButtonsShown});
    }
  }

  getValue() {
    return this.data;
  }

  setValue(data) {
    this.data = data;
    if (this._reactObject) {
      this._reactObject.setState({data}, () => {
        // rerender cells
        this._renderCells();
      });
    }
  }

  show() {
    this._reactObject.setState({isVisible: true});
  }

  hide() {
    this._reactObject.setState({isVisible: false});
  }
}
Table.Cell = TableCell;

class StatefulTable extends React.Component {
  propTypes = {
    data: PropTypes.array,
    onRowRemove: PropTypes.func,
    onRowAdd: PropTypes.func,
    columns: PropTypes.array,
    actionButtonsShown: PropTypes.bool,
    isVisible: PropTypes.bool
  }

  state = {
    data: this.props.data,
    actionButtonsShown: this.props.actionButtonsShown,
    isVisible: true
  }

  handleChange = ({type, data, rowIndex}) => {
    let handler = this.props.onRowRemove;
    if (type === 'ADD_ROW') {
      data[rowIndex] = {};
      handler = this.props.onRowAdd;
    }

    this.setState({data}, () => {
      if (!handler) {
        return;
      }
      handler({data, type, rowIndex});
    });
  };

  render() {
    const {data, actionButtonsShown, isVisible} = this.state;
    const columns = [...this.props.columns];
    return (
      <TableReact
        data={data}
        columns={columns}
        onRowAdd={this.handleChange}
        onRowRemove={this.handleChange}
        actionButtonsShown={actionButtonsShown}
        isVisible={isVisible}
      />
    );
  }
}
