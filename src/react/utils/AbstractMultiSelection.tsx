type item = {
  value: string;
  label?: string;
  isDisabled?: boolean;
}

type items = item[]

const _hasDuplicatedItems = (listItems: items) => {
  const unique = {};
  let isUnique = true;
  if (listItems) {
    listItems.forEach((val) => {
      if (typeof (unique[val.value]) !== 'undefined') {
        isUnique = false;
      }
      unique[val.value] = 0;
    });
  }

  return !isUnique;
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