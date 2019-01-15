const _handleItemClick = (item, onChange) => {
  const value = item.value;
  onChange(value);
};

const _hasDuplicatedItems = (items) => {
  const unique = {};
  let isUnique = true;
  if (items) {
    items.forEach((val) => {
      if (typeof (unique[val.value]) !== 'undefined') {
        isUnique = false;
      }
      unique[val.value] = 0;
    });
  }
  return !isUnique;
};

const _hasValidValue = (items, value) => {
  if (value === undefined) {
    return true;
  }
  return items && items.some(item => {
    return item.value === value;
  });
};
export default {_handleItemClick, _hasDuplicatedItems, _hasValidValue};