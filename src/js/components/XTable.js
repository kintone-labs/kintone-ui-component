/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import XTableReact from '../components-react/XTable';
import PropTypes from 'prop-types';

export default class XTable {
  constructor({data, columns, onRowAdd, onRowRemove, onCellChange}) {
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
  }

  _handleOnChange = ({type, rowIndex, data}) => {
    if (type === 'ADD_ROW' && this.onRowAdd) {
      const rowData = this.onRowAdd({rowIndex, rowData: data[rowIndex]});
      if (rowData) {
        data[rowIndex] = rowData;
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

  render() {
    const wrapperEl = document.createElement('span');
    const reactEl = render(
      <StatefulXTable
        data={this.data}
        columns={this.columns}
        onChange={this._handleOnChange}
      />,
      wrapperEl
    );

    // eslint-disable-next-line react/no-find-dom-node
    this.el = ReactDOM.findDOMNode(reactEl);
    this._renderCells();

    return wrapperEl;
  }

  updateRowData(rowIndex, data) {
    const rowData = this._mergeDeep(this.data[rowIndex], data);
    const type = 'CELL_CHANGE';
    this.data[rowIndex] = rowData;
    this._renderCells();
    this._triggerChange({type, data: this.data, rowIndex});
  }

  _renderCells() {
    const table = this;
    const rowsEl = [...this.el.querySelectorAll('.kuc-table-tbody > .kuc-table-tr')];

    rowsEl.forEach((rowEl, rowIndex) => {
      const rowData = this.data[rowIndex];
      const updateRowData = this.updateRowData.bind(this, rowIndex);

      this.cellsTemplate.forEach((cellTemplate, index) => {
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
          cell.__xTableCellInstance = cellInstance;
        }
        cellInstance = cell.__xTableCellInstance;
        cellInstance.update({table, rowData, rowIndex, element});
      });
    });
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
}

class StatefulXTable extends React.Component {
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
      <XTableReact data={data} columns={columns} onChange={this.handleChange} />
    );
  }
}

class XTableCell {
  constructor({init, update, props} = {}) {
    this._init = init;
    this._update = update;
    this.props = props;
  }

  init(...args) {
    if (this._init) {
      return this._init(...args);
    }
    return false;
  }

  update(...args) {
    if (this._update) {
      this._update(...args);
    }
  }
}
XTable.Cell = XTableCell;
