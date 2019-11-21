import '../polyfill'
import Control, {ControlProps} from '../Control';
import '../../css/Button.css';

type ButtonProps = ControlProps & {
  text?: string;
  type?: 'normal' | 'submit';
  onClick?: (e: Event) => void;              
}
                  
class Button extends Control<ButtonProps> {
  constructor(params?: ButtonProps) {
    super();
    this._props = {
      ...this._props,
      ...{
        text: 'Button',
        type: 'normal',
        onClick: () => {}
      }
    };
    if (params && typeof params.isDisabled !== 'boolean') {
      delete params.isDisabled;
    }
    if (params) {
      this._props = {...this._props, ...params};
    }
    this._createLayout();
    this.rerender(['isDisabled', 'isVisible']);
  }

  rerender(changedAttr?: string[]) {
    // super.rerender();
    if (!changedAttr) return;
    if (changedAttr.indexOf('type') !== -1) {
      this.element.className = this._getClassName();
    }
    if (changedAttr.indexOf('text') !== -1) {
      this.element.innerHTML = this._props.text || '';
    }

    if (changedAttr.indexOf('isDisabled') !== -1) {
      if (this._props.isDisabled) {
        this.element.setAttribute('disabled', `${this._props.isDisabled}`);
      } else {
        this.element.removeAttribute('disabled');
      }
    }

    if (changedAttr.indexOf('isVisible') !== -1) {
      if (!this._props.isVisible) {
        this.element.style.display = 'none';
      } else {
        this.element.style.display = '';
      }
    }
  }

  setText(text: string) {
    this._props.text = text;
    this.rerender(['text']);
  }

  setType(type: 'normal' | 'submit') {
    this._props.type = type;
    this.rerender(['type']);
  }

  private _getClassName() {
    return [
      'kuc-btn',
      this._props.type === 'submit' ? 'submit' : 'normal'
    ].join(' ').trim();
  }

  on(eventName: string, callback: (params?: any) => void) {
    this.element.addEventListener(eventName, (e) => {
      if (this._props.isDisabled) return;
      callback(e);
    });
  }

  private _createLayout() {
    this.element = document.createElement('button');
    this.element.className = this._getClassName();
    this.element.innerHTML = this._props.text || '';
    if (this._props.onClick) {
      this.on('click', this._props.onClick);
    }
  }
}

export default Button;