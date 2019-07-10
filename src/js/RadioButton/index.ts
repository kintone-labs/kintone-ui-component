import Control, {ControlProps} from '../Control';
import Message from '../../constant/Message';
import Item, {item} from './Item';
import AbstractSingleSelection from '../utils/AbstractSingleSelection';

import '../../css/RadioButton.css'

type RadioButtonProps = ControlProps & {
  name: string;
  value: string;
  items: item[];
  onChange?: (params?: any) => void;
};

class RadioButton extends Control {
  protected _props: RadioButtonProps = {
    ...this._props,
    ...{
      items: []
    }
  };

  private itemComps: Item[] = [];

  constructor(params: RadioButtonProps) {
    super();
    if (!params.name) {
      throw new Error(Message.radioBtn.MISSING_NAME);
    }
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
    if (AbstractSingleSelection._hasDuplicatedItems(this._props.items)) {
      throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
    }

    if (
      !AbstractSingleSelection._hasValidValue(
        this._props.items,
        this._props.value
      )
    ) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
    this.element = document.createElement('div');
    this.element.className = 'kuc-input-radio';
    this.itemComps =
      this._props.items &&
      this._props.items.map(item => {
        const newItem = new Item({
          selected: this._props.value === item.value,
          item: item,
          isDisabled: this._props.isDisabled || item.isDisabled,
          type: 'radio',
          name: this._props.name,
          className: 'kuc-input-radio-item'
        });
        newItem.on('change', this._handleItemClick);
        return newItem;
      });
    this.itemComps.forEach(item => {
      this.element.appendChild(item.render());
    });
  }

  private _handleItemClick = (itemEl: any) => {
    const inputEl = itemEl.target;
    this.itemComps.some(item => {
      if (item.id === inputEl.id) {
        this._props.value = item.value;
        return true
      }
      return false
    });
    this._props.onChange && this._props.onChange(this._props.value);
  };

  render() {
    this.rerender();
    return super.render();
  }

  rerender(changedAttr?: string[]) {
    super.rerender();
    if (!changedAttr) return;
    while (this.element.firstChild)
      this.element.removeChild(this.element.firstChild);
    this.itemComps =
      this._props.items &&
      this._props.items.map(item => {
        const newItem = new Item({
          selected: this._props.value === item.value,
          item: item,
          isDisabled: this._props.isDisabled || item.isDisabled,
          type: 'radio',
          name: this._props.name,
          className: 'kuc-input-radio-item'
        });
        newItem.on('change', this._handleItemClick);
        return newItem;
      });
    this.itemComps.forEach(item => {
      this.element.appendChild(item.render());
    });
  }

  setValue(value: string) {
    this._props.items.forEach(item => {
      if (item.value === value) {
        this._props.value = item.value;
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

  addItem(item: item) {
    this._props.items.push(item);
    this.rerender(['item']);
  }

  removeItem(index: number) {
    if (this._props.items.length <= index) {
      return false;
    }
    this._props.items.splice(index, 1);
    return this.rerender(['item']);
  }

  disableItem(value: string) {
    this._props.items.forEach(item => {
      if (item.value === value) {
        item.isDisabled = true;
      }
    });
    this.rerender(['item']);
  }

  enableItem(value: string) {
    this._props.items.forEach(item => {
      if (item.value === value) {
        item.isDisabled = false;
      }
    });
    this.rerender(['item']);
  }

  on(eventName: string, callback: (params?: any) => void) {
    if (eventName === 'change') {
      this._props.onChange = callback;
      this.rerender(['item']);
    }
  }
}

export default RadioButton;
