import '../polyfill';
import Control, {ControlProps} from '../Control';
import Message from '../../constant/Message';
import '../../css/Text.css';

type TextProps = ControlProps & {
  value?: string;
  placeholder?: string;
}

class Text extends Control<TextProps> {
  private _onChange: (params?: any) => void

  constructor(params?: TextProps) {
    super();
    this._props.value = '';
    this._props.placeholder = '';
    if (typeof params === 'object' && params !== null && typeof params.isDisabled !== 'boolean') {
      delete params.isDisabled;
    }
    if (params) {
      this._props = {...this._props, ...params};
    }

    this.element = document.createElement('input');
    this.element.className = 'kuc-input-text';
    this.element.setAttribute('type', 'text');
    // If this._props.value is 0, we handle it as string.
    (this.element as HTMLInputElement).value = (this._props.value === null || this._props.value === undefined) ? '' : this._props.value;
    (this.element as HTMLInputElement).placeholder =
      (this._props.placeholder === null || this._props.placeholder === undefined)
        ? ''
        : this._props.placeholder;
    this.element.onchange = (e) => {
      this._props.value = (e.target as HTMLInputElement).value;
      this._onChange && this._onChange(e);
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
    if (changedAttr.indexOf('value') !== -1) {
      // If this._props.value is 0, we handle it as string.
      (this.element as HTMLInputElement).value = (this._props.value === null || this._props.value === undefined) ? '' : this._props.value;
    }
    if (changedAttr.indexOf('placeholder') !== -1) {
      // If this._props.placeholder is 0, we handle it as string.
      (this.element as HTMLInputElement).placeholder =
        (this._props.placeholder === null || this._props.placeholder === undefined)
          ? ''
          : this._props.placeholder;
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

  setPlaceholder(placeholder: string) {
    if (!placeholder) throw new Error(Message.common.INVALID_ARGUMENT);
    this._props.placeholder = placeholder;
    this.rerender(['placeholder']);
  }

  getPlaceholder() {
    return this._props.placeholder;
  }
}

export default Text;
