var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Control from './Control';
import TableReact from '../components-react/Table';
import Message from '../constant/Message';
var validEventNames = ['cellChange', 'cellClick', 'rowAdd', 'rowRemove'];

var Table = function (_Control) {
  _inherits(Table, _Control);

  function Table(props_opt) {
    _classCallCheck(this, Table);

    var props = {};
    if (props_opt.rowTemplate) {
      var rowTemplate = props_opt.rowTemplate.map(function (element) {
        return element._getReactElement();
      });
      props = Object.assign({}, props_opt, { rowTemplate: rowTemplate });
    }

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this._reactComponentClass = TableReact;
    return _this;
  }

  _createClass(Table, [{
    key: 'setValue',
    value: function setValue(value) {
      this._setState({ value: value });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      if (!this._reactObject) {
        return this._getState().value;
      }

      return this.inner._getValue();
    }
  }, {
    key: 'on',
    value: function on(eventName, callback) {
      if (!validEventNames.some(function (event) {
        return event === eventName;
      })) {
        throw new Error(Message.control.INVALID_EVENT + ' ' + validEventNames.join(','));
      }

      if (validEventNames.some(function (event) {
        return event === eventName;
      })) {
        this.onRowAdd = callback;
      }

      var formatEventName = 'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);
      this._reactObject.setState(_defineProperty({}, formatEventName, callback));
    }
  }]);

  return Table;
}(Control);

export default Table;