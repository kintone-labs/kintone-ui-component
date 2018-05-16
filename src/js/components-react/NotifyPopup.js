import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

export default class NotifyPopup extends React.Component {
    static propTypes = {
        type: PropTypes.string,
        text: PropTypes.string,
        isVisible: PropTypes.bool,
        isDisabled: PropTypes.bool,
        onClick: PropTypes.func,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        onClick: f => f
    };

    state = {
        isVisible: this.props.isVisible,
    };

    componentWillReceiveProps({isVisible}) {
        this.setState({isVisible});
    }

    _handleClosePopup = () => {
        if (this.props.isDisabled) {
            return false;
        }
        
        this.setState({isVisible: false});
    }

    _getClassName() {

        const className = [
            'kuc-notify',
            this.state.isVisible === false ? '' : 'show',
            this._getStyleByType().bgClass,

        ];
        return className.join(' ').trim();
    }

    _onClick= () => {
        if (this.props.isDisabled) {
            return false;
        }

        this.props.onClick();
        return true;
    }

    _getStyleByType= () => {
        let style = {
            bgClass: '',
            color: ''
        }
        switch (this.props.type) {
            case 'success':
                style.bgClass = 'bg-success';
                style.color = 'green';
                break;
            case 'infor':
                style.bgClass = 'bg-infor';
                style.color = 'blue';
                break;

            default:
                style.bgClass = 'bg-danger';
                style.color = 'red';
        }
        return style;
    }

    render() {
        return (
            <div>
                <div className={this._getClassName()}>
                    <div
                        className="kuc-notify-title"
                        onClick={this._onClick}
                    >
                        {this.props.text}
                    </div>
                    <div className="kuc-close-button">
                        <IconButton
                            onClick={this._handleClosePopup}
                            type="close"
                            color={this._getStyleByType().color}
                        />
                    </div>
                </div>
            </div>
        );
    }
}