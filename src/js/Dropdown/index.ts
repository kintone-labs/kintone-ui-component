import '../polyfill';
import Control, {ControlProps} from '../Control';
import Message from '../../constant/Message';
import Item from './Item';
import AbstractSingleSelection from '../utils/AbstractSingleSelection';
import {mdilChevronDown} from '@mdi/light-js';
import '../../css/Dropdown.css';

type item = {
  value: string;
  label?: string;
  isDisabled?: boolean;
};

type DropdownProps = ControlProps & {
  value?: string | null;
  items?: item[];
  onChange?: (params?: any) => void;
  listItemsShown?: (params?: any) => void;
};

class Dropdown extends Control<DropdownProps> {
  private itemComps?: Item[] = [];
  private dropdownEl: HTMLElement;
  private nameLabelEl: HTMLElement;
  private listOuterEl: HTMLElement;

  private label?: string;
  private className: string[];
  private isListVisible: boolean = false;

  constructor(params?: DropdownProps) {
    super();
    this._props = {
      ...this._props,
      ...{
        items: []
      }
    };
    if (
      typeof params === 'object' &&
      params !== null &&
      typeof params.isDisabled !== 'boolean'
    ) {
      delete params.isDisabled;
    }
    if (params) {
      this._props = {...this._props, ...params};
    }
    // for Non-null assertion operator
    const validationErr = this._validator(this._props.items, this._props.value!);
    if (validationErr) {
      throw new Error(validationErr);
    }
    this._props.items &&
      this._props.items.some((data: item) => {
        if (data.value === this._props.value) {
          this.label = data.label;
          return true;
        }
        return false;
      });

    this.element = this._createDom('div', 'kuc-dropdown-container');
    const subcontainerEl = this._renderSubContainer();
    this.element.appendChild(subcontainerEl);
  }

  private _createDom<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
    className?: string,
  ) {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    return element;
  }

  private _showItems(e: any) {
    this.isListVisible = true;
    this.listOuterEl.setAttribute('style', 'display: block');
    this.listOuterEl.setAttribute('style', `margin-top: ${this._caclListOuterPosition()}px`);

    this._props.listItemsShown && this._props.listItemsShown(e);
  }

  private _caclListOuterPosition() {
    let position = -6;
    const currentPosition = this.listOuterEl.offsetTop + this.listOuterEl.offsetHeight;
    if (currentPosition >= window.innerHeight) {
      position -= (this.listOuterEl.offsetHeight + this.element.offsetHeight);
    }
    return position;
  }

  private _hideItems() {
    this.isListVisible = false;
    this.listOuterEl.setAttribute('style', 'display: none');
  }

  private _handleDropdownClick(e: any) {
    if (this.isListVisible) {
      this._hideItems();
      return;
    }
    this._showItems(e);
  }

  private _handleClickOutside() {
    this._hideItems();
  }

  private _handleItemClick(data: item) {
    this._props.value = data.value;
    this.label = data.label || '';
    this._hideItems();
    this.rerender(['item']);
    this._props.onChange && this._props.onChange(this._props.value);
  }

  private _createDownIconEl() {
    const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl.setAttribute('d', mdilChevronDown);

    const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgEl.appendChild(pathEl);

    return svgEl;
  }

  private _renderSubContainer() {
    this.className = [
      'kuc-dropdown',
      this._props.isDisabled ? 'kuc-dropdown-disable' : ''
    ];
    const subcontainerEl = this._createDom('div', 'kuc-dropdown-sub-container');
    subcontainerEl.setAttribute('tabIndex', '-1');
    subcontainerEl.onblur = this._handleClickOutside.bind(this);

    const outerEl = this._createDom('div', 'kuc-dropdown-outer');
    this.dropdownEl = this._createDom('div', this.className.join(' ').trim());
    if (!this._props.isDisabled) {
      this.dropdownEl.onclick = this._handleDropdownClick.bind(this);
    }

    const selectedEl = this._createDom('div', 'kuc-dropdown-selected');
    const selectedNameEl = this._createDom(
      'span',
      'kuc-dropdown-selected-name'
    );

    this.nameLabelEl = this._createDom('span', 'kuc-dropdown-selected-label');
    this.nameLabelEl.innerText = this.label || '';
    const iconEl = this._createDom('span', 'icon-arrow-down');
    iconEl.appendChild(this._createDownIconEl());

    selectedNameEl.appendChild(this.nameLabelEl);
    selectedNameEl.appendChild(iconEl);

    selectedEl.appendChild(selectedNameEl);

    this.dropdownEl.appendChild(selectedEl);

    outerEl.appendChild(this.dropdownEl);

    this.listOuterEl = this._createDom('div', 'kuc-list-outer');
    this.listOuterEl.setAttribute('style', 'display: none');

    this.itemComps =
      this._props.items &&
      this._props.items.map(data => {
        const newItem = new Item({
          selected: this._props.value === data.value,
          item: data,
          isDisabled: this._props.isDisabled || data.isDisabled,
          onClick: this._handleItemClick.bind(this)
        });
        return newItem;
      });
    if (this.itemComps) {
      this.itemComps.forEach(data => {
        this.listOuterEl.appendChild(data.render());
      });
    }
    subcontainerEl.appendChild(outerEl);
    subcontainerEl.appendChild(this.listOuterEl);
    return subcontainerEl;
  }

  private _validator(items?: item[], value?: string): string | undefined {
    let err;
    if (items && AbstractSingleSelection._hasDuplicatedItems(items)) {
      err = Message.common.SELECTTION_DUPLICATE_VALUE;
    }
    if (!AbstractSingleSelection._hasValidValue(items, value) || !AbstractSingleSelection._hasValidItems(items)) {
      err = Message.common.INVALID_ARGUMENT;
    }
    return err;
  }

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
    if (value === null || value === undefined) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
    const validationErr = this._validator(this._props.items, value);
    if (validationErr) {
      throw new Error(validationErr);
    }
    this._props.items && this._props.items.forEach(data => {
      if (data.value === value) {
        this._props.value = data.value;
        this.label = data.label;
      }
    });
    this.rerender(['value']);
  }

  getValue() {
    return this._props.value;
  }
  getItems() {
    return this._props.items;
  }

  addItem(data: item) {
    if (!data) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
    if (!this._props.items) {
      this._props.items = [];
    }
    const itemsToCheck: item[] = Object.assign([], this._props.items);
    itemsToCheck.push(data);
    const validationErr = this._validator(itemsToCheck);
    if (validationErr) {
      throw new Error(validationErr);
    }
    this._props.items = itemsToCheck;
    this.rerender(['item']);
  }

  setItems(items: item[]) {
    if (!items || !Array.isArray(items)) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
    // It isn't need to check hasValidValue
    const validationErr = this._validator(items);
    if (validationErr) {
      throw new Error(validationErr);
    }
    this._props.items = items;
    this.rerender(['item']);
  }

  removeItem(index: number) {
    if (this._props.items && this._props.items.length <= index) {
      return false;
    }
    if (typeof index !== 'number') {
      return false;
    }
    if (this._props.items
      && typeof index === 'number'
      && this._props.items[index].value === this._props.value) {
      this._props.value = null;
      this.label = '';
    }
    this._props.items && this._props.items.splice(index, 1);
    return this.rerender(['item']);
  }

  disableItem(value: string) {
    if (!value) {
      throw Message.common.INVALID_ARGUMENT;
    }
    this._props.items && this._props.items.forEach(data => {
      if (data.value === value) {
        data.isDisabled = true;
      }
    });
    this.rerender(['item']);
  }

  enableItem(value: string) {
    if (!value) {
      throw Message.common.INVALID_ARGUMENT;
    }
    this._props.items && this._props.items.forEach(data => {
      if (data.value === value) {
        data.isDisabled = false;
      }
    });
    this.rerender(['item']);
  }
  disable() {
    this._props.isDisabled = true;
    this.rerender(['isDisabled']);
  }

  enable() {
    this._props.isDisabled = false;
    this.rerender(['isDisabled']);
  }
  on(eventName: string, callback: (params?: any) => void) {
    if (eventName === 'change') {
      this._props.onChange = callback;
      this.rerender(['item']);
    }
    if (eventName === 'listItemsShown') {
      this._props.listItemsShown = callback;
    }
  }
}

export default Dropdown;
