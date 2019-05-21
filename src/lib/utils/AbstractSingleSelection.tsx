type item = {
	value: string,
	label: string,
	isDisabled: boolean
}

type items = Array<item>

const _handleItemClick = (item: item, onChange: (value: string) => void) => {
	const value = item.value;
    onChange(value);
};
  
const _hasDuplicatedItems = (items: items) => {
    const unique = {};
    let isUnique = true;
    if (items) {
		items.forEach((val: item) => {
			if (typeof (unique[val.value]) !== 'undefined') {
				isUnique = false;
			}
			unique[val.value] = 0;
		});
    }
    return !isUnique;
};
  
const _hasValidValue = (items: items, value: string) => {
    if (value === undefined) {
      	return true;
    }
    return items && items.some(item => {
      	return item.value === value;
    });
};
export default {_handleItemClick, _hasDuplicatedItems, _hasValidValue};