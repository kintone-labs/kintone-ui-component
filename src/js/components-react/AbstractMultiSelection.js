const _hasDuplicatedItems = () => {
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