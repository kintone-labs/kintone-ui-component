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
var _hasValidItems = function (listItems) {
    if (!listItems) {
        return true;
    }
    return Array.isArray(listItems) && listItems.every(function (data) {
        return data.value !== undefined;
    });
};
var _hasValidValue = function (listItems, value) {
    if (!value) {
        return true;
    }
    return listItems && listItems.some(function (data) {
        return data.value === value;
    });
};
export default { _hasDuplicatedItems: _hasDuplicatedItems, _hasValidItems: _hasValidItems, _hasValidValue: _hasValidValue };
