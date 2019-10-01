import Control, {ControlProps} from '../Control';
import {mdiCheckBold} from '@mdi/js';
import '../../css/Item.css';

type ItemData = {
  value: string;
  label?: string;
  isDisabled?: boolean;
}

type ItemProps = ControlProps & {
  value?: string;
  label?: string;
  className?: string;
  isDisabled?: boolean;
  isSelected: boolean;
  onClick?: (item: Item) => void;
}

class Item extends Control<ItemProps> {

  constructor(params: ItemProps) {
    super();
    this._props = {
      ...this._props,
      ...{
        isSelected: false,
        isDisabled: false,
        className: '',
      }
    };
    if (params) {
      this._props = {...this._props, ...params};
    }

    let className = 'kuc-list-item';

    if (this._props.isSelected) {
      className += ' kuc-list-item-selected';
    }

    if (this._props.isDisabled) {
      className += ' kuc-list-item-disable';
    }

    this.element = document.createElement('div');
    this.element.className = className;
    const spanIconCheckElement = document.createElement('span');
    spanIconCheckElement.className = 'kuc-icon-check';
    spanIconCheckElement.appendChild(this._createCheckIconEl());
    const spanListItemLabelElement = document.createElement('span');
    spanListItemLabelElement.className = 'kuc-list-item-label';
    spanListItemLabelElement.append(this._props.label || '');
    this.element.appendChild(spanIconCheckElement);
    this.element.appendChild(spanListItemLabelElement);

    this.on('click', (e) => {
      this._props.isSelected = !this._props.isSelected;
      if (this._props.onClick) {
        this._props.onClick(this);
      }
      this.rerender(['isSelected']);
    });

    this.rerender();
  }

  private _createCheckIconEl() {
    const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl.setAttribute('d', mdiCheckBold);

    const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgEl.appendChild(pathEl);

    return svgEl;
  }

  rerender(changedAttr?: string[]) {
    if (!changedAttr) return;
    let className = 'kuc-list-item';
    if (changedAttr.indexOf('isSelected') !== -1) {
      if (this._props.isSelected) {
        className += ' kuc-list-item-selected';
      }
    }
    if (changedAttr.indexOf('isDisabled') !== -1) {
      if (this._props.isDisabled) {
        className += ' kuc-list-item-disable';
      }
    }
    this.element.className = className;
  }


  getValue() {
    return this._props.value || '';
  }

  select() {
    this._props.isSelected = true;
    this.rerender(['isSelected', 'isDisabled']);
  }

  deselect() {
    this._props.isSelected = false;
    this.rerender(['isSelected', 'isDisabled']);
  }

  disable() {
    this._props.isDisabled = true;
    this.rerender(['isSelected', 'isDisabled']);
  }

  enable() {
    this._props.isDisabled = false;
    this.rerender(['isSelected', 'isDisabled']);
  }

}

export default Item;
export {ItemData};