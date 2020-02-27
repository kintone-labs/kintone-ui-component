import '../polyfill';
import Control, {ControlProps} from '../Control';
import Message from '../../constant/Message';
import Item, {item} from './Item';
import AbstractSingleSelection from '../utils/AbstractSingleSelection';
import '../../css/RadioButton.css';

type RadioButtonProps = ControlProps & {
  name: string;
  value?: string | null;
  items?: item[];
  onChange?: (params?: any) => void;
};

class RadioButton extends Control<RadioButtonProps> {
  private itemComps?: Item[] = [];

  constructor(params?: RadioButtonProps) {
    super();
    this._props = {
      ...this._props,
      ...{
        items: []
      }
    };
    if (params && !params.name) {
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
      this._props = {...this._props, ...params};
    }
    const validationErr = this._validator(this._props.items, this._props.value!);
    if (validationErr) {
      throw new Error(validationErr);
    }
    this.element = document.createElement('div');
    this.element.className = 'kuc-input-radio';
    this.itemComps =
      this._props.items &&
      this._props.items.map(obj => {
        const newItem = new Item({
          selected: this._props.value === obj.value,
          item: obj,
          isDisabled: this._props.isDisabled || obj.isDisabled,
          type: 'radio',
          name: this._props.name,
          className: 'kuc-input-radio-item'
        });
        newItem.on('change', this._handleItemClick.bind(this));
        return newItem;
      });
    this.itemComps && this.itemComps.forEach(obj => {
      this.element.appendChild(obj.render());
    });
  }

  _handleItemClick(itemEl: any) {
    const inputEl = itemEl.target;
    this.itemComps && this.itemComps.some(obj => {
      if (obj.id === inputEl.id) {
        this._props.value = obj.value;
        return true;
      }
      return false;
    });
    this._props.onChange && this._props.onChange(this._props.value);
  }

  private _validator(items?: item[], value?: string): string | undefined {
    let err;
    if (items && AbstractSingleSelection._hasDuplicatedItems(items)) {
      err = Message.common.SELECTTION_DUPLICATE_VALUE;
    }
    if (items && value && !AbstractSingleSelection._hasValidValue(items, value)
       || !AbstractSingleSelection._hasValidItems(items)
    ) {
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
    this.itemComps =
      this._props.items &&
      this._props.items.map(obj => {
        const newItem = new Item({
          selected: this._props.value === obj.value,
          item: obj,
          isDisabled: this._props.isDisabled || obj.isDisabled,
          type: 'radio',
          name: this._props.name,
          className: 'kuc-input-radio-item'
        });
        newItem.on('change', this._handleItemClick.bind(this));
        return newItem;
      });
    this.itemComps && this.itemComps.forEach(itemComp => {
      this.element.appendChild(itemComp.render());
    });
  }

  setValue(value: string) {
    if (value === null || value === undefined) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
    const validationErr = this._validator(this._props.items, value);
    if (validationErr) {
      throw new Error(validationErr);
    }
    this._props.value = value;
    this.rerender(['value']);
  }

  getValue() {
    return this._props.value;
  }

  setItems(items: item[]) {
    if (!items || !Array.isArray(items)) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
    // It isn't need to check hasValidValue
    const validaErr = this._validator(items);
    if (validaErr) {
      throw new Error(validaErr);
    }
    this._props.items = items;
    this.rerender(['item']);
  }

  getItems() {
    return this._props.items;
  }

  addItem(obj: item) {
    if (!obj) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
    if (!this._props.items) {
      this._props.items = [];
    }
    const itemsToCheck: item[] = Object.assign([], this._props.items);
    itemsToCheck.push(obj);
    const validationErr = this._validator(itemsToCheck);
    if (validationErr) {
      throw new Error(validationErr);
    }
    this._props.items = itemsToCheck;
    this.rerender(['item']);
  }

  removeItem(index: number) {
    if ((this._props.items && this._props.items.length <= index)
        || typeof index !== 'number' || index === null) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
    if (this._props.items
      && typeof index === 'number'
      && this._props.items[index].value === this._props.value) {
      this._props.value = null;
    }
    this._props.items && this._props.items.splice(index, 1);
    return this.rerender(['item']);
  }

  disableItem(value: string) {
    if (!value) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
    this._props.items && this._props.items.forEach(obj => {
      if (obj.value === value) {
        obj.isDisabled = true;
      }
    });
    this.rerender(['item']);
  }

  enableItem(value: string) {
    if (!value) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
    this._props.items && this._props.items.forEach(obj => {
      if (obj.value === value) {
        obj.isDisabled = false;
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
