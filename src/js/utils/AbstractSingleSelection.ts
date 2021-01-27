type item = {
  value: string;
  label?: string;
  isDisabled?: boolean;
}

type items = item[]

const _hasDuplicatedItems = (listItems?: items) => {
  const unique = {};
  let isUnique = true;
  if (listItems) {
    listItems.forEach((val: item) => {
      if (typeof (unique[val.value]) !== 'undefined') {
        isUnique = false;
      }
      unique[val.value] = 0;
    });
  }
  return !isUnique;
};

const _hasValidItems = (listItems?: items) => {
  if (!listItems) {
    return true;
  }
  return Array.isArray(listItems) && listItems.every((data: item) => {
    return data.value !== undefined;
  });
};

const _hasValidValue = (listItems?: items, value?: string) => {
  if (!value) {
    return true;
  }
  return listItems && listItems.some(data => {
    return data.value === value;
  });
};
export default {_hasDuplicatedItems, _hasValidItems, _hasValidValue};