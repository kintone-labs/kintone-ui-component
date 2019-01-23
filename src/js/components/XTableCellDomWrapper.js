/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

export default class XTableCellDomWrapper extends React.Component {
  static propTypes = {
    dom: PropTypes.object
  }

  componentDidMount() {
    this.el.append(this.props.dom);
  }

  componentDidUpdate() {
    this.el.removeChild(this.el.childNodes[0]);
    this.el.append(this.props.dom);
  }

  componentWillUnmount() {
    this.el.remove(this.props.dom);
  }

  render() {
    return <div ref={el => (this.el = el)} />;
  }
}