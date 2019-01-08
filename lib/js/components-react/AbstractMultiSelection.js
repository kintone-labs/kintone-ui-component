var _this = this;

var _hasDuplicatedItems = function _hasDuplicatedItems() {
  var unique = {};
  var isUnique = true;
  if (_this.props.items) {
    _this.props.items.forEach(function (val, i) {
      if (typeof unique[val.value] !== 'undefined') {
        isUnique = false;
      }
      unique[val.value] = 0;
    });
  }

  return isUnique;
};

var _hasValidValue = function _hasValidValue() {
  var validValues = [];
  _this.props.items.forEach(function (item) {
    validValues.push(item.value);
  });

  if (_this.props.value === undefined) {
    return true;
  }

  if (_this.props.value instanceof Array) {
    return _this.props.value.every(function (val) {
      return validValues.indexOf(val) >= 0;
    });
  }
  return false;
};
export default { _hasDuplicatedItems: _hasDuplicatedItems, _hasValidValue: _hasValidValue };