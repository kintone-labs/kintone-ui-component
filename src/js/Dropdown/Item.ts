import Control, {ControlProps} from '../Control';
import {mdiCheckBold} from '@mdi/js';
import '../../css/Item.css';

type item = {
  value: string;
  label?: string;
  isDisabled?: boolean;
};

type ItemProps = ControlProps & {
  item: item;
  selected: boolean;
  name?: string;
  type?: string;
  className?: string;
  onClick?: (data: item) => void;
};

class Item extends Control<ItemProps> {
  private inputEl: HTMLInputElement;
  public isSelected: boolean = false;
  public item: item;

  constructor(params: ItemProps) {
    super();
    this._props = {
      ...this._props,
      ...{
        type: 'default'
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

    const className = [
      'kuc-list-item',
      this._props.selected ? 'kuc-list-item-selected' : '',
      this._props.isDisabled === true ? 'kuc-list-item-disable' : ''
    ];
    this.element = document.createElement('div');
    this.element.className = className.join(' ').trim();
    const iconEl = document.createElement('span');
    iconEl.className = 'kuc-icon-check';
    iconEl.appendChild(this._createCheckIconEl());
    const labelEl = document.createElement('span');
    labelEl.className = 'kuc-list-item-label';
    if (this._props.item.label) {
      labelEl.innerText = this._props.item.label;
    }
    this.element.appendChild(iconEl);
    this.element.appendChild(labelEl);
    this.on('click', (e) => {
      if (this._props.onClick) {
        this._props.onClick(this._props.item);
      }
    });
  }

  private _createCheckIconEl() {
    const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl.setAttribute('d', mdiCheckBold);

    const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgEl.appendChild(pathEl);

    return svgEl;
  }

  rerender(changedAttr?: string[]) {
    super.rerender();
    if (this._props.isDisabled === true) {
      this.inputEl.setAttribute('disabled', `${this._props.isDisabled}`);
    } else {
      this.inputEl.removeAttribute('disabled');
    }
  }
}

export default Item;
