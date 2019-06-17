type item = {
  value: string;
  label?: string;
  isDisabled?: boolean;
}

type items = item[]

const _hasDuplicatedItems = (items: items) => {
  const unique = {};
  let isUnique = true;
  if (items) {
    items.forEach((val: item) => {
      if (typeof (unique[val.value]) !== 'undefined') {
        isUnique = false;
      }
      unique[val.value] = 0;
    });
  }
  return !isUnique;
};

const _hasValidValue = (items: items, value: string) => {
  if (value === undefined) {
    return true;
  }
  return items && items.some(item => {
    return item.value === value;
  });
};
export default {_hasDuplicatedItems, _hasValidValue};