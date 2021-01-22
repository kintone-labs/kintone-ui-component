import { __assign, __extends } from "tslib";
import '../polyfill';
import Control from '../Control';
import '../../css/Alert.css';
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    function Alert(params) {
        var _this = _super.call(this) || this;
        _this._props = __assign(__assign({}, _this._props), {
            text: '',
            type: 'error'
        });
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
            _this._props.text = (params.text && typeof params.text === 'string') ? params.text : '';
        }
        // isDisabled always is setted false
        // When we update major version of ui-component, we should delete this prop
        _this._props.isDisabled = false;
        _this.element = document.createElement('div');
        _this.element.className = _this._getClassName();
        _this.rerender(['text', 'type']);
        return _this;
    }
    Alert.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this);
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('text') !== -1) {
            this.element.innerHTML = this._props.text || '';
        }
        if (changedAttr.indexOf('type') !== -1) {
            this.element.className = this._getClassName();
        }
    };
    Alert.prototype._getClassName = function () {
        var className = [
            'kuc-alert',
            this._props.type === 'success' ? 'bg-success' : 'bg-danger'
        ];
        return className.join(' ');
    };
    Alert.prototype.setText = function (text) {
        this._props.text = (typeof text === 'string') ? text : '';
        this.rerender(['text']);
    };
    Alert.prototype.setType = function (type) {
        this._props.type = type;
        this.rerender(['type']);
    };
    Alert.prototype.disable = function () {
        // nothing to do
    };
    Alert.prototype.enable = function () {
        // nothing to do
    };
    return Alert;
}(Control));
export default Alert;
