import Control from './Control';
import FieldGroupReact from '../components-react/FieldGroup';
import React from 'react';
import {findDOMNode, render} from 'react-dom';

// eslint-disable-next-line react/prefer-stateless-function
class FieldGroupContent extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div />
    );
  }
}

export default class FieldGroup extends Control {
  constructor(props) {
    props.children = <FieldGroupContent ref={(e)=>(this.fieldGroupContent = e)} />;
    super(props);
    this._reactComponentClass = FieldGroupReact;
    this.content = props.content;
  }

  setToggle(toggle) {
    this._setState({toggle: toggle});
  }

  getToggle() {
    return this._getState().toggle;
  }

  setName(name) {
    this._setState({name});
  }

  getName() {
    return this._getState().name;
  }

  setContent(content) {
    this.contentDOMNode.innerHTML = '';
    this.contentDOMNode.append(content);
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  _renderReactObject(callback) {
    const container = document.createElement('div');
    this._reactObject = render(
      this._getReactElement(),
      container,
      callback
    );
    return container;
  }

  render() {
    const newEl = this._renderReactObject(()=>{
      // eslint-disable-next-line react/no-find-dom-node
      this.contentDOMNode = findDOMNode(this.fieldGroupContent);
      this.contentDOMNode.append(this.content);
    });
    if (this.el !== undefined) {
      this.el.parentNode.replaceChild(newEl, this.el);
    }
    this.el = newEl;
    return this.el;
  }
}