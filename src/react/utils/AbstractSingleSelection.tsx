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
  if (!listItems) {
    return false;
  }
  const values: string[] = [];
  let isDuplicated = false;
  for (let i = 0; i < listItems.length; i++) {
    if (values.indexOf(listItems[i].value) >= 0) {
      isDuplicated = true;
      break;
    }
    values.push(listItems[i].value);
  }
  return isDuplicated;
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