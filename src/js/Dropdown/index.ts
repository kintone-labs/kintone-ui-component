import Control, { ControlProps } from "../Control";
import Message from "../../constant/Message";
import Item from "./Item";
import AbstractSingleSelection from "../utils/AbstractSingleSelection";
import { mdilChevronDown } from "@mdi/light-js";

import "../../css/Dropdown.css";

type item = {
  value: string;
  label?: string;
  isDisabled?: boolean;
};

type DropdownProps = ControlProps & {
  value: string;
  items: item[];
  onChange?: (params?: any) => void;
};

class Dropdown extends Control {
  protected _props: DropdownProps = {
    ...this._props,
    ...{
      items: []
    }
  };

  private itemComps: Item[] = [];
  private dropdownEl: HTMLElement;
  private nameLabelEl: HTMLElement;
  private listOuterEl: HTMLElement;

  private label?: string;
  private className: string[];
  private isListVisible: boolean = false;

  constructor(params: DropdownProps) {
    super();
    if (typeof params === "object" && params !== null && typeof params.isDisabled !== "boolean") {
      delete params.isDisabled;
    }
    if (params) {
      this._props = { ...this._props, ...params };
    }
    if (AbstractSingleSelection._hasDuplicatedItems(this._props.items)) {
      throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
    }

    if (!AbstractSingleSelection._hasValidValue(this._props.items, this._props.value)) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }

    this._props.items &&
      this._props.items.some((item: item) => {
        if (item.value === this._props.value) {
          this.label = item.label;
          return true;
        }
        return false;
      });

    this.element = this._createDom("div", "kuc-dropdown-container");
    const subcontainerEl = this._renderSubContainer();
    this.element.appendChild(subcontainerEl);
  }

  private _createDom<K extends keyof HTMLElementTagNameMap>(tagName: K, className?: string) {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    return element;
  }

  private _showItems = () => {
    this.isListVisible = true;
    this.listOuterEl.setAttribute("style", "display: block");
  };

  private _hideItems = () => {
    this.isListVisible = false;
    this.listOuterEl.setAttribute("style", "display: none");
  };

  private _handleDropdownClick = () => {
    if (this.isListVisible) {
      this._hideItems();
      return;
    }
    this._showItems();
  };

  private _handleClickOutside = () => {
    this._hideItems();
  };

  private _handleItemClick = (item: item) => {
    this._props.value = item.value;
    this.label = item.label || "";
    this._hideItems();
    this.rerender(["item"]);
    this._props.onChange && this._props.onChange(this._props.value);
  };

  private _createDownIconEl() {
    const pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathEl.setAttribute("d", mdilChevronDown);

    const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgEl.appendChild(pathEl);

    return svgEl;
  }

  private _renderSubContainer = () => {
    this.className = ["kuc-dropdown", this._props.isDisabled ? "kuc-dropdown-disable" : ""];
    const subcontainerEl = this._createDom("div", "kuc-dropdown-sub-container");
    subcontainerEl.setAttribute("tabIndex", "-1");
    subcontainerEl.onblur = this._handleClickOutside;

    const outerEl = this._createDom("div", "kuc-dropdown-outer");
    this.dropdownEl = this._createDom("div", this.className.join(" ").trim());
    if (!this._props.isDisabled) {
      this.dropdownEl.onclick = this._handleDropdownClick;
    }

    const selectedEl = this._createDom("div", "kuc-dropdown-selected");
    const selectedNameEl = this._createDom("span", "kuc-dropdown-selected-name");

    this.nameLabelEl = this._createDom("span", "kuc-dropdown-selected-label");
    this.nameLabelEl.innerText = this.label || "";
    const iconEl = this._createDom("span", "icon-arrow-down");
    iconEl.appendChild(this._createDownIconEl());

    selectedNameEl.appendChild(this.nameLabelEl);
    selectedNameEl.appendChild(iconEl);

    selectedEl.appendChild(selectedNameEl);

    this.dropdownEl.appendChild(selectedEl);

    outerEl.appendChild(this.dropdownEl);

    this.listOuterEl = this._createDom("div", "kuc-list-outer");
    this.listOuterEl.setAttribute("style", "display: none");

    this.itemComps =
      this._props.items &&
      this._props.items.map(item => {
        const newItem = new Item({
          selected: this._props.value === item.value,
          item: item,
          onClick: this._handleItemClick
        });
        return newItem;
      });
    this.itemComps.forEach(item => {
      this.listOuterEl.appendChild(item.render());
    });

    subcontainerEl.appendChild(outerEl);
    subcontainerEl.appendChild(this.listOuterEl);
    return subcontainerEl;
  };

  render() {
    this.rerender();
    return super.render();
  }

  rerender(changedAttr?: string[]) {
    super.rerender();
    if (!changedAttr) return;
    while (this.element.firstChild) this.element.removeChild(this.element.firstChild);

    const subcontainerEl = this._renderSubContainer();
    this.element.appendChild(subcontainerEl);
  }

  setValue(value: string) {
    this._props.items.forEach(item => {
      if (item.value === value) {
        this._props.value = item.value;
        this.label = item.label;
      }
    });
    this.rerender(["value"]);
  }

  getValue() {
    return this._props.value;
  }
  getItems() {
    return this._props.items;
  }

  addItem(item: item) {
    this._props.items.push(item);
    this.rerender(["item"]);
  }

  removeItem(index: number) {
    if (this._props.items.length <= index) {
      return false;
    }
    this._props.items.splice(index, 1);
    return this.rerender(["item"]);
  }

  disableItem(value: string) {
    this._props.items.forEach(item => {
      if (item.value === value) {
        item.isDisabled = true;
      }
    });
    this.rerender(["item"]);
  }

  enableItem(value: string) {
    this._props.items.forEach(item => {
      if (item.value === value) {
        item.isDisabled = false;
      }
    });
    this.rerender(["item"]);
  }
  disable() {
    this._props.isDisabled = true;
    this.rerender(["isDisabled"]);
  }

  enable() {
    this._props.isDisabled = false;
    this.rerender(["isDisabled"]);
  }
  on(eventName: string, callback: (params?: any) => void) {
    if (eventName === "change") {
      this._props.onChange = callback;
      this.rerender(["item"]);
    }
  }
}

export default Dropdown;
