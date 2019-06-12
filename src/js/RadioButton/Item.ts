import Control, { ControlProps } from '../Control';

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
};

class Item extends Control {
  protected _props: ItemProps = {
    ...this._props,
    ...{
      type: 'default'
    }
  };
  private inputEl: HTMLInputElement;
  public id: string;
  public value: string;

  constructor(params: ItemProps) {
    super();
    if (
      typeof params === 'object' &&
      params !== null &&
      typeof params.isDisabled !== 'boolean'
    ) {
      delete params.isDisabled;
    }
    if (params) {
      this._props = { ...this._props, ...params };
    }

    const generateGUID = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };

    this.id =
      new Date().getTime() +
      '-' +
      generateGUID() +
      '-' +
      generateGUID() +
      generateGUID();
    this.value = params.item.value;
    this.element = document.createElement('span');
    this.element.className = this._props.className;
    this.inputEl = document.createElement('input');
    this.inputEl.id = this.id;
    this.inputEl.name = this._props.name;
    this.inputEl.type = this._props.type;
    this.inputEl.checked = this._props.selected;
    this.inputEl.disabled = this._props.isDisabled;
    const labelEl = document.createElement('label');
    labelEl.htmlFor = this.id;
    labelEl.innerText = this._props.item.label || '';
    this.element.appendChild(this.inputEl);
    this.element.appendChild(labelEl);
  }

  rerender(changedAttr?: string[]) {
    super.rerender();
    if (this._props.isDisabled) {
      this.inputEl.setAttribute('disabled', `${this._props.isDisabled}`);
    } else {
      this.inputEl.removeAttribute('disabled');
    }
    if (!changedAttr) return;
  }

  on(eventName: string, callback: (params?: any) => void) {
    this.inputEl.addEventListener(eventName, (e: Event)=>{
      if (this._props.isDisabled) return;
      callback(e);
    });
  }
}

export default Item;
export {item};
