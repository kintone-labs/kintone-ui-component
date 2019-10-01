type ItemData = {
  value: string;
  label?: string;
  isDisabled?: boolean;
}

const _hasDuplicatedItems = (items?: ItemData[]) => {
  const unique = {};
  let isUnique = true;
  if (items) {
    items.forEach((val) => {
      if (val.value && typeof (unique[val.value]) !== 'undefined') {
        isUnique = false;
      }
      val.value && (unique[val.value] = 0);
    });
  }

  return !isUnique;
};

const _hasValidValue = (items?: ItemData[], value?: string | string[]) => {
  const validValues: string[] = [];
  if (items) {
    items.forEach((item) => {
      item.value && validValues.push(item.value);
    });
  }

  if (value === undefined) {
    return true;
  }

  if (value instanceof Array) {
    return value.every(val => validValues.indexOf(val) >= 0);
  }
  return false;
};
export default {_hasDuplicatedItems, _hasValidValue};