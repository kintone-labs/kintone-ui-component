var _hasDuplicatedItems = function (items) {
    var unique = {};
    var isUnique = true;
    if (items) {
        items.forEach(function (val) {
            if (typeof (unique[val.value]) !== 'undefined') {
                isUnique = false;
            }
            unique[val.value] = 0;
        });
    }
    return !isUnique;
};
var _hasValidValue = function (items, value) {
    if (value === undefined) {
        return true;
    }
    return items && items.some(function (item) {
        return item.value === value;
    });
};
export default { _hasDuplicatedItems: _hasDuplicatedItems, _hasValidValue: _hasValidValue };
