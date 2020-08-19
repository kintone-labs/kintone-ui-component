var TableCell = /** @class */ (function () {
    function TableCell(_a) {
        var _b = _a === void 0 ? {} : _a, init = _b.init, update = _b.update;
        this._init = init;
        this._update = update;
    }
    TableCell.prototype.init = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._init) {
            return this._init.apply(this, args);
        }
        return null;
    };
    TableCell.prototype.update = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._update) {
            this._update.apply(this, args);
        }
    };
    return TableCell;
}());
export default TableCell;
