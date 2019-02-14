import React from 'react';
import PropTypes from 'prop-types';

export default class FieldGroup extends React.PureComponent {

    static propTypes = {
        name: PropTypes.string,
        toggle: PropTypes.string,
        items: PropTypes.array
    }

    state = {
        toggle: this.props.toggle,
        items: this.props.items
    }

    _handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        })
    }

     _getClassName = () => {
        return [
            'kuc-fieldgroup-label',
            this.state.toggle === 'expand' ? 'expand' : 'collapse'
        ].join(' ').trim();
    };

    _getFieldItems = () => this.props.items && this.props.items.map((item, i) => {
        return (
            <p dangerouslySetInnerHTML={{ __html: item.value }}></p>
        );
    });

    render() {
        return (
            <div className="kuc-fieldgroup">
                <span className={this._getClassName()} onClick={this._handleToggleClick}>
                    {this.props.name}
                </span>
                <div className="kuc-fieldgroup-contents">
                    {this._getFieldItems()}
                </div>
            </div>
        );
    }
}