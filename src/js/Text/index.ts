import Control, {ControlProps} from '../Control';

import '../../css/Text.css'

type TextProps = ControlProps & {
  value?: string;
}

class Text extends Control {
  protected _props: TextProps = {
    ...this._props,
    ...{
      value: ''
    }
  }
  private inputEl: HTMLInputElement;

  constructor(params: TextProps) {
    super();
    if(typeof params === 'object' && params !== null && typeof params.isDisabled !== 'boolean') {
      delete params.isDisabled
    }
    if (params) {
      this._props = {...this._props, ...params};
    }
    this.element = document.createElement('div');
    this.element.className = 'kuc-input-outer';
    this.inputEl = document.createElement('input');
    this.inputEl.className = 'kuc-input-text';
    this.inputEl.setAttribute('type', 'text');
    this.inputEl.value = this._props.value;
    this.element.appendChild(this.inputEl);
  }

  rerender(changedAttr?: string[]) {
    super.rerender();
    if (this._props.isDisabled) {
      this.inputEl.setAttribute('disabled', `${this._props.isDisabled}`);
    } else {
      this.inputEl.removeAttribute('disabled');
    }
    if (!changedAttr) return;
    if (changedAttr.indexOf('value') !== -1) {
      this.inputEl.value = this._props.value;
    }
  }
  
  on(eventName: string, callback: (params?: any) => void) {
    this.inputEl.addEventListener(eventName, (e: Event)=>{
      if (this._props.isDisabled) return;
      callback(e);
    });
  }

  setValue(value: string) {
    this._props.value = value;
    this.rerender(['value']);
  }

  getValue() {
    return this._props.value;
  }
}

export default Text;
