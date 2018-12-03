import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Text extends Component {
    static propTypes = {
      value: PropTypes.string,
      isVisible: PropTypes.bool,
      isDisabled: PropTypes.bool,
      onClick: PropTypes.func,
      onChange: PropTypes.func,
    }

    static defaultProps = {
      onChange: f => f
    };

    constructor(props) {
      super(props);
      this.state = {value: props.value || ''};
    }

    componentWillReceiveProps({value}) {
      const new_value = value || '';
      this.setState({value: new_value});
    }

    _getValue() {
      return this.props.value;
    }

    _onChange = (event) => {
      const value = event.target.value;
      this.props.onChange(value);
      this.setState({value: value});
    }

    render() {
      if (this.props.isVisible === false) {
        return null;
      }

      return (
        <div className="kuc-input-outer">
          <input
            type="text"
            value={this.state.value}
            className="kuc-input-text"
            onClick={this.props.onClick}
            onChange={this._onChange}
            disabled={this.props.isDisabled}
          />
        </div>
      );
    }

}
