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
var _hasCheckedItemListDuplicated = function (value) {
    var isDuplicated = false;
    if (value) {
        value.forEach(function (val, index) {
            if (value.indexOf(val) !== index) {
                isDuplicated = true;
            }
        });
    }
    return isDuplicated;
};
var _hasValidValue = function (items, value) {
    var validValues = [];
    if (items) {
        items.forEach(function (item) {
            (item.value || (item.value === '')) && validValues.push(item.value);
        });
    }
    if (value === undefined) {
        return true;
    }
    if (value instanceof Array) {
        return value.every(function (val) { return validValues.indexOf(val) >= 0; });
    }
    return false;
};
export default { _hasDuplicatedItems: _hasDuplicatedItems, _hasCheckedItemListDuplicated: _hasCheckedItemListDuplicated, _hasValidValue: _hasValidValue };
