/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import XTableCellDomWrapper from './XTableCellDomWrapper';
import Text from '../components-react/Text';

class RenderQueue {
  reactElements = [];

  add(type, props) {
    //switch type to add here
    const el = document.createElement('span');
    const {onChange, ...propsOpt} = props;
    const reactEl = () => ReactDOM.createPortal(<Text {...propsOpt} onChange={(value) => onChange(value)} />, el);
    this.reactElements.push(reactEl);
    return el;
  }

  render() {
    return this.reactElements.map((Component, index) => (
      <Component key={index} />
    ));
  }
}

export default class XTableCellPortalWrapper extends React.PureComponent {
  static propTypes = {
    render: PropTypes.func,
    data: PropTypes.array,
    rowIndex: PropTypes.number,
    columnIndex: PropTypes.number,
    onChange: PropTypes.func,
  }

  onChange(value, rowIndex, columnIndex) {
    const data = [...this.props.data];
    data[columnIndex] = value;
    const tableValue = {
      type: 'CELL_CHANGED',
      data: data,
      rowIndex: rowIndex
    };
    this.props.onChange(tableValue);
  }

  render() {
    const renderQueue = new RenderQueue();
    const {render, rowIndex, columnIndex, ...props} = this.props;
    const dom = render({
      ...props,
      renderItem: (...args) => {
        args[1].onChange = (value) => this.onChange(value, rowIndex, columnIndex);
        return renderQueue.add(...args);
      }
    });
    return (
      <React.Fragment>
        <XTableCellDomWrapper dom={dom} />
        {renderQueue.render()}
      </React.Fragment>
    );
  }
}