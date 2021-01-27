type item = {
  value: string;
  label?: string;
  isDisabled?: boolean;
}

type items = item[]

const _handleItemClick = (data: item, onChange?: (value: string) => void) => {

  const value = data.value || '';
  onChange && onChange(value);
};

const _hasDuplicatedItems = (listItems?: items) => {
  const unique = {};
  let isUnique = true;
  if (listItems) {
    listItems.forEach((val: item) => {
      if (val.value && typeof (unique[val.value]) !== 'undefined') {
        isUnique = false;
      }
      val.value && (unique[val.value] = 0);
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
  if (value === undefined) {
    return true;
  }
  return listItems && listItems.some(data => {
    return data.value === value;
  });
};
export default {_handleItemClick, _hasDuplicatedItems, _hasValidItems, _hasValidValue};