var _handleItemClick = function (item, onChange) {
    var value = item.value || '';
    onChange && onChange(value);
};
var _hasDuplicatedItems = function (items) {
    var unique = {};
    var isUnique = true;
    if (items) {
        items.forEach(function (val) {
            if (val.value && typeof (unique[val.value]) !== 'undefined') {
                isUnique = false;
            }
            val.value && (unique[val.value] = 0);
        });
    }
    return !isUnique;
};
var _hasValidItems = function (items) {
    if (!items) {
        return true;
    }
    return Array.isArray(items) && items.every(function (item) {
        return item.value !== undefined;
    });
};
var _hasValidValue = function (items, value) {
    if (value === undefined) {
        return true;
    }
    return items && items.some(function (item) {
        return item.value === value;
    });
};
export default { _handleItemClick: _handleItemClick, _hasDuplicatedItems: _hasDuplicatedItems, _hasValidItems: _hasValidItems, _hasValidValue: _hasValidValue };
