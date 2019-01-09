var _this = this;

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
  return !isUnique;
};

var _hasValidValue = function _hasValidValue() {
  if (_this.props.value === undefined) {
    return true;
  }
  return _this.props.items && _this.props.items.some(function (item) {
    return item.value === _this.props.value;
  });
};
export default { _handleItemClick: _handleItemClick, _hasDuplicatedItems: _hasDuplicatedItems, _hasValidValue: _hasValidValue };