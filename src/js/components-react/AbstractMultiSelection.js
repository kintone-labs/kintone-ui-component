import {Component} from 'react';
import PropTypes from 'prop-types';

export default class AbstractMultiSelection extends Component {
    static propTypes = {
      items: PropTypes.array,
      value: PropTypes.array,
      isVisible: PropTypes.bool,
      isDisabled: PropTypes.bool,
      onClick: PropTypes.func,
      onChange: PropTypes.func,
    }

    static defaultProps = {
      onChange: f => f,
      onClick: f => f
    };

    constructor(props) {
      super(props);
      this.state = {
        value: props.value,
        items: props.items
      };
    }

    componentWillReceiveProps(nextProps) {
      this.setState(prevState => {
        const newValue = nextProps.value || prevState.value;
        const newItems = nextProps.items || prevState.items;
        return {
          value: newValue,
          items: newItems
        };
      });
    }

    _getValue() {
      return this.state.value;
    }

    _setValue(value) {
      if (!this.props.items) {
        return;
      }

      this.setState({value: value});
    }

    _setDisabledItem(value, isDisabled) {
      if (!this.props.items) {
        return;
      }
      this.setState(prevState => {
        const newItems = [...prevState.items];

        newItems.forEach((item, i) => {
          if (item.value === value) {
            newItems[i].isDisabled = isDisabled;
          }
        });
        return {items: newItems};
      });
    }

    _getItems() {
      return this.props.items;
    }

    _getItem(index) {
      return this.props.items[index];
    }

    _hasDuplicatedItems() {
      const unique = {};
      let isUnique = true;
      if (this.props.items) {
        this.props.items.forEach((val, i) => {
          if (typeof (unique[val.value]) !== 'undefined') {
            isUnique = false;
          }
          unique[val.value] = 0;
        });
      }

      return isUnique;
    }
    _hasValidValue() {
      const validValues = [];
      this.props.items.forEach((item) => {
        validValues.push(item.value);
      });

      if (this.props.value === undefined) {
        return true;
      }
      unique[val.value] = 0;
    });
  }
  return isUnique;
};

const _hasValidValue = () => {
  const validValues = [];
  this.props.items.forEach((item) => {
    validValues.push(item.value);
  });

  if (this.props.value === undefined) {
    return true;
  }

  if (this.props.value instanceof Array) {
    return this.props.value.every(val => validValues.indexOf(val) >= 0);
  }
  return false;
};
export default {_hasDuplicatedItems, _hasValidValue};