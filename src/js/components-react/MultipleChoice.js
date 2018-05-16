import React from 'react';
import Item from './Item';
import Message from '../constant/Message';
import AbstractMultiSelection from './AbstractMultiSelection';

export default class MultipleChoice extends AbstractMultiSelection {
    _handleItemClick = (itemValue) => {
        const value = this.state.value ? this.state.value.slice() : [];
        const length = value.length;
        let include = false;

        for (let i = 0; i < length; i++) {
            if (value[i] === itemValue) {
                include = true;
                value.splice(i, 1);
                break;
            }
        }

        if (!include) {
            value.push(itemValue);
        }

        this.props.onChange(value);
        this.setState({value: value});
    }

    render() {
        if (this.props.isVisible === false) {
            return null;
        }
        const items = this.props.items && this.props.items.map((item, i) => {
            const isSelected = this.state.value ? this.state.value.some(value => value === item.value) : false;
            return (
                <Item
                    key={i}
                    selected={isSelected}
                    onClick={() => this._handleItemClick(item.value)}
                    item={item}
                    isDisabled={this.props.isDisabled ? this.props.isDisabled : item.isDisabled}
                />
            );
        });

        if (!this._hasDuplicatedItems()) {
            throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
        }

        if (!this._hasValidValue()) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }

        const className = [
            'kuc-multiple-list kuc-list-outer ',
            this.props.isDisabled ? 'kuc-multiple-list-disable' : ''
        ]

        return (
            <div className={className.join(' ').trim()}>
                {items}
            </div>
        );
    }
}