type ItemData = {
  value: string;
  label?: string;
  isDisabled?: boolean;
}

const _hasDuplicatedItems = (listItems?: ItemData[]) => {
  if (!listItems) {
    return false;
  }
  const uniqueMap = new Map();
  for (const val of listItems) {
    const key = JSON.stringify(val);
    if (uniqueMap.has(key)) {
      return true;
    }
    uniqueMap.set(key, true);
  }
  return false;
};

const _hasCheckedItemListDuplicated = (value?: string[]) => {
  let isDuplicated = false;
  if (value) {
    value.forEach((val, index) => {
      if (value.indexOf(val) !== index) {
        isDuplicated = true;
      }
    });
  }
  return isDuplicated;
};

const _hasValidValue = (items?: ItemData[], value?: string | string[]) => {
  const validValues: string[] = [];
  if (items) {
    items.forEach((item) => {
      (item.value || (item.value === '')) && validValues.push(item.value);
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

const _hasItemValue = (items: ItemData[]) => {
  return items.every(item => !!item.value && (typeof item.value === 'string'));
};
export default {_hasDuplicatedItems, _hasCheckedItemListDuplicated, _hasValidValue, _hasItemValue};
