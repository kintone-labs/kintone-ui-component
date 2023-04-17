type item = {
  value: string;
  label?: string;
  isDisabled?: boolean;
}

type items = item[]

const _hasDuplicatedItems = (listItems?: items) => {
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