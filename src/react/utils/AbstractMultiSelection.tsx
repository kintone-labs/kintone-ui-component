type item = {
  value: string;
  label?: string;
  isDisabled?: boolean;
}

type items = item[]

const _hasDuplicatedItems = (listItems: items) => {
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

const _hasValidValue = (listItems: items, value: any) => {
  const validValues: string[] = [];
  listItems.forEach((data) => {
    validValues.push(data.value);
  });

  if (value === undefined) {
    return true;
  }

  if (value instanceof Array) {
    return value.every(val => validValues.indexOf(val) >= 0);
  }
  return false;
};
export default {_hasDuplicatedItems, _hasCheckedItemListDuplicated, _hasValidValue};