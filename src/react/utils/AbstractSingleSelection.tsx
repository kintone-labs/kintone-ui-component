type item = {
  value: string;
  label?: string;
  isDisabled?: boolean;
}

type items = item[]

const _handleItemClick = (item: item, onChange?: (value: string) => void) => {

  const value = item.value || "";
  onChange && onChange(value);
};

const _hasDuplicatedItems = (items?: items) => {
  const unique = {};
  let isUnique = true;
  if (items) {
    items.forEach((val: item) => {
      if (val.value && typeof (unique[val.value]) !== 'undefined') {
        isUnique = false;
      }
      val.value ? unique[val.value] = 0 : {}
    });
  }
  return !isUnique;
};

const _hasValidValue = (items?: items, value?: string) => {
  if (value === undefined) {
    return true;
  }
  return items && items.some(item => {
    return item.value === value;
  });
};
export default {_handleItemClick, _hasDuplicatedItems, _hasValidValue};