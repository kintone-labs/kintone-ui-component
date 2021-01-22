import { __assign, __extends } from "tslib";
import '../polyfill';
import Control from '../Control';
import { elements } from '../utils/util';
import '../../css/Label.css';
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(params) {
        var _this = _super.call(this) || this;
        _this._props = __assign(__assign({}, _this._props), {
            text: '',
            isRequired: false,
            textColor: '',
            backgroundColor: ''
        });
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
            _this._props.text = (params.text && typeof params.text === 'string') ? params.text : '';
        }
        // isDisabled always is setted false
        // When we update major version of ui-component, we should delete this prop
        _this._props.isDisabled = false;
        _this.element = _this._createLabelLayout();
        _this.rerender(['text', 'isRequired', 'textStyle']);
        return _this;
    }
    Label.prototype._createLabelLayout = function () {
        this.textEl = elements(document.createElement('span'));
        this.requiredEl = elements(document.createElement('span')).addClass('kuc-require').html('*');
        var containerDOM = document.createElement('div');
        this.containerEl = elements(containerDOM).addClass('kuc-label').append(this.textEl);
        return containerDOM;
    };
    Label.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this);
        if (!changedAttr)
            return;
        if (changedAttr.indexOf('text') !== -1) {
            this.textEl.html(this._props.text);
        }
        if (changedAttr.indexOf('isRequired') !== -1) {
            if (this._props.isRequired && typeof this._props.isRequired === 'boolean') {
                this.containerEl.append(this.requiredEl);
            }
            else {
                this.requiredEl.remove();
            }
        }
        if (changedAttr.indexOf('textStyle') !== -1) {
            var style = this._props.textColor !== '' ? "color: " + this._props.textColor : '';
            style += this._props.backgroundColor !== '' ? ";background-color: " + this._props.backgroundColor : '';
            this.textEl.attr('style', style);
        }
    };
    Label.prototype.setText = function (text) {
        this._props.text = (typeof text === 'string') ? text : '';
        this.rerender(['text']);
    };
    Label.prototype.setRequired = function (isRequired) {
        typeof isRequired === 'boolean' ? this._props.isRequired = isRequired : this._props.isRequired = false;
        this.rerender(['isRequired']);
    };
    Label.prototype.setTextColor = function (color) {
        this._props.textColor = color;
        this.rerender(['textStyle']);
    };
    Label.prototype.setBackgroundColor = function (color) {
        this._props.backgroundColor = color;
        this.rerender(['textStyle']);
    };
    Label.prototype.disable = function () {
        // nothing to do
    };
    Label.prototype.enable = function () {
        // nothing to do
    };
    return Label;
}(Control));
export default Label;
