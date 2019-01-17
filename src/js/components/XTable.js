/* eslint-disable react/jsx-filename-extension */
import Control from './Control';
import XTableReact from '../components-react/XTable';
import Message from '../constant/Message';
import {render} from 'react-dom';
import withState from './withState';
import PropTypes from 'prop-types';
import React from 'react';
const validEventNames = ['cellChange', 'cellClick', 'rowAdd', 'rowRemove'];

class XTableCustomCell extends React.Component {
  static propTypes = {
    html: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.domEl = null;
    this.setDomElRef = element => {
      this.domEl = element;
    };
  }

  componentDidMount() {
    if (this.domEl) this.domEl.append(this.props.html);
  }

  render() {
    return <div ref={this.setDomElRef} />;
  }
}

export default class XTable extends Control {
  constructor(opt_props) {
    const {columns, data} = opt_props;
    const {tableItems} = data;
    const props = {};
    const columnsReact = columns.map((column) => {
      if (typeof column.cell === 'function') {
        const cellRenderer = ({rowData, rowIndex, columnIndex}) => {
          const div = column.cell({rowData, rowIndex, columnIndex});
          return <XTableCustomCell html={div} key={columnIndex} />;
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
    props.data = tableItems;
    props.columns = columnsReact;
    super(props);
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

  _getReactElement() {
    const Component = withState(this._reactComponentClass);
    const additionalProps = {
      onChange: this._handleOnChange,
    };
    // eslint-disable-next-line react/jsx-filename-extension
    const reactElement = <Component {...this.props} {...additionalProps} />;
    return reactElement;
  }
}
