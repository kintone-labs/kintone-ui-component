var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TableCell = function () {
  function TableCell() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        init = _ref.init,
        update = _ref.update;

    _classCallCheck(this, TableCell);

    this._init = init;
    this._update = update;
  }

  _createClass(TableCell, [{
    key: "init",
    value: function init() {
      if (this._init) {
        return this._init.apply(this, arguments);
      }
      return false;
    }
  }, {
    key: "update",
    value: function update() {
      if (this._update) {
        this._update.apply(this, arguments);
      }
    }
  }]);

  return TableCell;
}();

export default TableCell;