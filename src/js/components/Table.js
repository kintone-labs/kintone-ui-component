import Control from './Control';
import TableReact from '../components-react/Table';
import Message from '../constant/Message';
import {render} from 'react-dom';
import withState from './withState';
import React from 'react';
const validEventNames = ['cellChange', 'cellClick', 'rowAdd', 'rowRemove'];
export default class Table extends Control {
  constructor(props_opt) {
    let props = {};
    if (props_opt.rowTemplate) {
      const rowTemplate = props_opt.rowTemplate.map(element => {
        element.props.onChange = element._handleOnChange;
        const elem = element._getReactElement();
        return elem;
      });
      const dataTemplate = props_opt.rowTemplate.map(element => {
        return element.props.value;
      });
      const value = props_opt.value || [dataTemplate];
      props_opt.value = value;
      props = {...props_opt, rowTemplate: rowTemplate};
    }
    super(props);
    this._reactComponentClass = TableReact;
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
      onCellChange: this._handleOnCellChange,
      onCellClick: this._handleOnCellClick,
      onRowAdd: this._handleOnRowAdd,
      onRowRemove: this._handleOnRowRemove,
    };
    // eslint-disable-next-line react/jsx-filename-extension
    const reactElement = <Component {...this.props} {...additionalProps} />;
    return reactElement;
  }
}
