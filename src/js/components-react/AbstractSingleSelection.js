const _handleItemClick = (item, onChange) => {
  const value = item.value;
  onChange(value);
};

const _hasDuplicatedItems = () => {
  const unique = {};
  let isUnique = true;
  if (this.props.items) {
    this.props.items.forEach((val) => {
      if (typeof (unique[val.value]) !== 'undefined') {
        isUnique = false;
      }
      unique[val.value] = 0;
    });
  }
  return !isUnique;
};

const _hasValidValue = () => {
  if (this.props.value === undefined) {
    return true;
  }
  return this.props.items && this.props.items.some(item => {
    return item.value === this.props.value;
  });
};
export default {_handleItemClick, _hasDuplicatedItems, _hasValidValue};