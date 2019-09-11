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
    var validValues = [];
    items.forEach(function (item) {
        validValues.push(item.value);
    });
    if (value === undefined) {
        return true;
    }
    if (value instanceof Array) {
        return value.every(function (val) { return validValues.indexOf(val) >= 0; });
    }
    return false;
};
export default { _hasDuplicatedItems: _hasDuplicatedItems, _hasValidValue: _hasValidValue };
