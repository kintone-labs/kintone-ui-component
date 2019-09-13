type ItemData = {
  value: string
  label?: string
  isDisabled?: boolean
}

const _hasDuplicatedItems = (items: Array<ItemData>) => {
    const unique = {};
    let isUnique = true;
    if (items) {
      items.forEach((val) => {
        if (typeof (unique[val.value]) !== 'undefined') {
          isUnique = false;
        }
        unique[val.value] = 0;
      });
    }
  
    return !isUnique;
  };
  
  const _hasValidValue = (items: Array<ItemData>, value: string | Array<string>) => {
    const validValues: string[] = [];
    items.forEach((item) => {
      validValues.push(item.value);
    });
  
    if (value === undefined) {
      return true;
    }
  
    if (value instanceof Array) {
      return value.every(val => validValues.indexOf(val) >= 0);
    }
    return false;
  };
  export default {_hasDuplicatedItems, _hasValidValue};