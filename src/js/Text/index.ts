import Control, { ControlProps } from '../Control';

import '../../css/Text.css'

type TextProps = ControlProps & {
  value?: string;
  onChange: (e: any) => void
}

class Text extends Control {
  private _onChange: (params?: any) => void = () => { }
  protected _props: TextProps = {
    ...this._props,
    ...{
      value: ''
    }
  }

  constructor(params: TextProps) {
    super();
    if (typeof params === 'object' && params !== null && typeof params.isDisabled !== 'boolean') {
      delete params.isDisabled
    }
    if (params) {
      this._props = { ...this._props, ...params };
    }
    this.element = document.createElement('input');
    this.element.className = 'kuc-input-text';
    this.element.setAttribute('type', 'text');

    this.element.onchange = (e) => {
      this._props.value = (<HTMLInputElement>e.target).value
      this._onChange((<HTMLInputElement>e.target).value)
    }

    if (this._props.value) {
      (this.element as HTMLInputElement).value = this._props.value;
    }
  }

  render() {
    this.rerender();
    return super.render();
  }

  rerender(changedAttr?: string[]) {
    super.rerender();
    if (this._props.isDisabled) {
      this.element.setAttribute('disabled', `${this._props.isDisabled}`);
    } else {
      this.element.removeAttribute('disabled');
    }
    if (!changedAttr) return;
    if (changedAttr.indexOf('value') !== -1 && this._props.value) {
      (this.element as HTMLInputElement).value = this._props.value;
    }
  }

  on(eventName: string, callback: (params?: any) => void) {
    this.element.addEventListener(eventName, (e: Event) => {
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
