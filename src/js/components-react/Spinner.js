import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Spinner extends Component {
    static propTypes = {
      isVisible: PropTypes.bool
    }

    static defaultProps = {
      isVisible: false
    };

    _onClick() {}

    render() {
      if (this.props.isVisible === false) {
        return null;
      }

      return (
        <div className="kuc-spinner-outer">
          <div className="kuc-spinner">
            <div className="kuc-loader" />
          </div>
        </div>
      );
    }
}