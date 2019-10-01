import Control, {ControlProps} from '../Control';

import '../../css/Text.css';

type TextProps = ControlProps & {
  value?: string;
}

class Text extends Control<TextProps> {
  private _onChange: (params?: any) => void = () => {}

  constructor(params?: TextProps) {
    super();
    console.log(this._props);

    this._props.value = '';
    if (typeof params === 'object' && params !== null && typeof params.isDisabled !== 'boolean') {
      delete params.isDisabled;
    }
    if (params) {
      this._props = {...this._props, ...params};
    }

    this.element = document.createElement('input');
    this.element.className = 'kuc-input-text';
    this.element.setAttribute('type', 'text');
    if (this._props.value) {
      (this.element as HTMLInputElement).value = this._props.value;
    }
    this.element.onchange = (e) => {
      this._props.value = (e.target as HTMLInputElement).value;
      this._onChange(e);
    };
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
    if (eventName === 'change') {
      this._onChange = callback;
      return;
    }
    this.element.addEventListener(eventName, (e: Event)=>{
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
