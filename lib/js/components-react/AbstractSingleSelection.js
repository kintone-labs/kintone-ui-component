var _this = this;

<<<<<<< HEAD
var _handleItemClick = function _handleItemClick(item, onChange) {
  var value = item.value;
  onChange(value);
};

var _hasDuplicatedItems = function _hasDuplicatedItems() {
  var unique = {};
  var isUnique = true;
  if (_this.props.items) {
    _this.props.items.forEach(function (val) {
      if (typeof unique[val.value] !== 'undefined') {
        isUnique = false;
      }
      unique[val.value] = 0;
    });
  }
  return isUnique;
};

var _hasValidValue = function _hasValidValue() {
  if (_this.props.value === undefined) {
    return true;
  }
  return _this.props.items && _this.props.items.some(function (item) {
    return item.value === _this.props.value;
  });
=======
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Component } from 'react';
import PropTypes from 'prop-types';

var AbstractSingleSelection = function (_Component) {
  _inherits(AbstractSingleSelection, _Component);

  function AbstractSingleSelection(props) {
    _classCallCheck(this, AbstractSingleSelection);

    var _this = _possibleConstructorReturn(this, (AbstractSingleSelection.__proto__ || Object.getPrototypeOf(AbstractSingleSelection)).call(this, props));

    _this._handleItemClick = function (item) {
      var value = item.value;
      // eslint-disable-next-line react/no-unused-state
      _this.setState({ value: value });
      _this.props.onChange(value);
    };

    _this.state = {
      items: _this.props.items
    };
    return _this;
  }

  _createClass(AbstractSingleSelection, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var items = _ref.items;

      this.setState({ items: items });
    }
  }, {
    key: '_getValue',
    value: function _getValue() {
      return this.props.value;
    }
  }, {
    key: '_getItems',
    value: function _getItems() {
      return this.props.items;
    }
  }, {
    key: '_setDisabledItem',
    value: function _setDisabledItem(value, isDisabled) {
      this.setState(function (prevState) {
        var newItems = [].concat(_toConsumableArray(prevState.items));
        newItems.forEach(function (item, i) {
          if (item.value === value) {
            newItems[i].isDisabled = isDisabled;
          }
        });
        return { items: newItems };
      });
    }
  }, {
    key: '_hasDuplicatedItems',
    value: function _hasDuplicatedItems() {
      var unique = {};
      var isUnique = true;
      if (this.props.items) {
        this.props.items.forEach(function (val, i) {
          if (typeof unique[val.value] !== 'undefined') {
            isUnique = false;
          }
          unique[val.value] = 0;
        });
      }

      return isUnique;
    }
  }, {
    key: '_hasValidValue',
    value: function _hasValidValue() {
      var _this2 = this;

      if (this.props.value === undefined) {
        return true;
      }

      return this.props.items && this.props.items.some(function (item) {
        return item.value === _this2.props.value;
      });
    }
  }]);

  return AbstractSingleSelection;
}(Component);

AbstractSingleSelection.propTypes = {
  value: PropTypes.string,
  items: PropTypes.array,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};
AbstractSingleSelection.defaultProps = {
  onChange: function onChange(f) {
    return f;
  }
>>>>>>> origin/v0.2.0
};
export default { _handleItemClick: _handleItemClick, _hasDuplicatedItems: _hasDuplicatedItems, _hasValidValue: _hasValidValue };