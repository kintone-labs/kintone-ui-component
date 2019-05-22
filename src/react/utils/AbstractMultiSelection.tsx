type item = {
  value: string,
  label: string,
  isDisabled: boolean
}

type items = Array<item>

const _hasDuplicatedItems = (items: items) => {
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
  
  const _hasValidValue = (items: items, value: any) => {
    const validValues:Array<string> = [];
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