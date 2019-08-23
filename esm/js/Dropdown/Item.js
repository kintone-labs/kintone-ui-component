import * as tslib_1 from "tslib";
import Control from "../Control";
import { mdiCheckBold } from "@mdi/js";
import "../../css/Item.css";
var Item = /** @class */ (function (_super) {
    tslib_1.__extends(Item, _super);
    function Item(params) {
        var _this = _super.call(this) || this;
        _this._props = tslib_1.__assign({}, _this._props, {
            type: "default"
        });
        _this.isSelected = false;
        if (typeof params === "object" && params !== null && typeof params.isDisabled !== "boolean") {
            delete params.isDisabled;
        }
        if (params) {
            _this._props = tslib_1.__assign({}, _this._props, params);
        }
        var className = [
            "kuc-list-item",
            _this._props.selected ? "kuc-list-item-selected" : "",
            _this._props.isDisabled ? "kuc-list-item-disable" : ""
        ];
        _this.element = document.createElement("div");
        _this.element.className = className.join(" ").trim();
        var iconEl = document.createElement("span");
        iconEl.className = "kuc-icon-check";
        iconEl.appendChild(_this._createCheckIconEl());
        var labelEl = document.createElement("span");
        labelEl.className = "kuc-list-item-label";
        if (_this._props.item.label) {
            labelEl.innerText = _this._props.item.label;
        }
        _this.element.appendChild(iconEl);
        _this.element.appendChild(labelEl);
        _this.on("click", function (e) {
            if (_this._props.onClick) {
                _this._props.onClick(_this._props.item);
            }
        });
        return _this;
    }
    Item.prototype._createCheckIconEl = function () {
        var pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathEl.setAttribute("d", mdiCheckBold);
        var svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgEl.appendChild(pathEl);
        return svgEl;
    };
    Item.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this);
        if (this._props.isDisabled) {
            this.inputEl.setAttribute("disabled", "" + this._props.isDisabled);
        }
        else {
            this.inputEl.removeAttribute("disabled");
        }
        if (!changedAttr)
            return;
    };
    return Item;
}(Control));
export default Item;
