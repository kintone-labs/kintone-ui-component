import React from 'react';
import ReactDOM from 'react-dom';
import withState from './withState';
import Message from '../constant/Message';

const validEventNames = ['click', 'change'];

export default class Control {
    constructor(props) {
        this.props = props;
        this.events = {};
    }

    _setState(state) {
        this.props = {...this.props, ...state};
        if (this._reactObject) {
          this._reactObject.setState(state);
        }
    }

    _getState(){
        return this.inner.props;
    }

    get inner() {
        return this._reactObject.inner;
    }

    render() {
        this.el = this._renderReactObject();
        return this.el;
    }

    refresh() {
        const newEl = this._renderReactObject();
        this.el.parentNode.replaceChild(newEl, this.el);
        this.el = newEl;
    }
    _handleOnChange = (value) => {
        if (typeof this.onChange === 'function') {
            this._triggerOnChange(value);
        }

        this._setStateAfterOnChange(value);
    }

    _setStateAfterOnChange(value) {
        this._reactObject.setState({ value });
    }

    _triggerOnChange(value) {
        this.onChange(value);
    }

    _renderReactObject(parent) {
        const container = document.createElement('div');
        this._reactObject = ReactDOM.render(
            this._getReactElement(),
            container
        );

        this._reactObject.setState({ onChange: this._handleOnChange });

        return container;
    }

    _getReactElement = () => {
        const Component = withState(this._reactComponentClass);
        const reactElement = <Component {...this.props} />;
        return reactElement;
    }

    on(eventName, callback) {
        if (!validEventNames.some(event => event === eventName)) {
            throw new Error(Message.control.INVALID_EVENT + ' ' + validEventNames.join(','));
        }

        if (eventName === 'change') {
            this.onChange = callback;
            return;
        }

        this._reactObject.setState({ ['on' + eventName.charAt(0).toUpperCase() + eventName.slice(1)]: callback });
    }

    show() {
        this._setState({isVisible: true});
    }

    hide() {
        this._setState({isVisible: false});
    }

    disable() {
        this._setState({isDisabled: true});
    }

    enable() {
        this._setState({isDisabled: false});
    }
}
