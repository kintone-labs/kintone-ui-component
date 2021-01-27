var _hasDuplicatedItems = function (listItems) {
    var unique = {};
    var isUnique = true;
    if (listItems) {
        listItems.forEach(function (val) {
            if (typeof (unique[val.value]) !== 'undefined') {
                isUnique = false;
            }
            unique[val.value] = 0;
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
var _hasValidValue = function (listItems, value) {
    var validValues = [];
    listItems.forEach(function (data) {
        validValues.push(data.value);
    });
    if (value === undefined) {
        return true;
    }
    if (value instanceof Array) {
        return value.every(function (val) { return validValues.indexOf(val) >= 0; });
    }
    return false;
};
export default { _hasDuplicatedItems: _hasDuplicatedItems, _hasCheckedItemListDuplicated: _hasCheckedItemListDuplicated, _hasValidValue: _hasValidValue };
