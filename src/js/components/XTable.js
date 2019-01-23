/* eslint-disable react/jsx-filename-extension */
import Control from './Control';
import XTableReact from '../components-react/XTable';
import Message from '../constant/Message';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import React from 'react';
import XTableCellPortalWrapper from './XTableCellPortalWrapper';
const validEventNames = ['cellChange', 'cellClick', 'rowAdd', 'rowRemove'];

export default class XTable extends Control {
  constructor(opt_props) {
    const {columns, defaultValues} = opt_props;
    const props = {};
    super(props);
    const {_handleOnChange} = this;
    const columnsReact = columns.map((column) => {
      if (typeof column.cell === 'function') {
        const cellRenderer = ({rowData, rowIndex, columnIndex}) => {
          return (
            <XTableCellPortalWrapper
              render={column.cell}
              data={rowData}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              onChange={(value) => _handleOnChange(value)}
            />
          );
        };
        cellRenderer.propTypes = {
          rowData: PropTypes.array,
          rowIndex: PropTypes.number,
          columnIndex: PropTypes.number,
        };
        column.cellRenderer = cellRenderer;
      }
      return column;
    });
    this.props.data = [defaultValues];
    this.defaultValues = defaultValues;
    this.props.columns = columnsReact;
    this._reactComponentClass = XTableReact;
  }

  setValue(value) {
    this._setState({value});
  }

  getValue() {
    if (!this._reactObject) {
      return this._getState().value;
    }
    return this.inner._getValue();
  }

  on(eventName, callback) {
    if (!validEventNames.some(event => event === eventName)) {
      throw new Error(Message.control.INVALID_EVENT + ' ' + validEventNames.join(','));
    }
    if (validEventNames.some(event => event === eventName)) {
      this.onRowAdd = callback;
    }
    const formatEventName = 'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);
    this._reactObject.setState({[formatEventName]: callback});
  }

  _renderReactObject() {
    const container = document.createElement('div');
    container.classList.add('kuc-wrapper');
    this._reactObject = render(
      this._getReactElement(),
      container
    );
    return container;
  }

  _handleOnChange = (value) => {
    // if (typeof this.onChange === 'function') {
    //   this._triggerOnChange(value);
    // }
    this._setStateAfterEventHandler(value);
  }

  _setStateAfterEventHandler(value) {
    let {data} = this._getState();
    const {type} = value;
    if (type === 'ADD_ROW') {
      const template = this.defaultValues;
      data = value.data;
      data[value.rowIndex] = template;
    }
    if (type === 'CELL_CHANGED') {
      data[value.rowIndex] = value.data;
    }
    if (type === 'REMOVE_ROW') {
      data = value.data;
    }
    this._reactObject.setState({data});
  }
}
