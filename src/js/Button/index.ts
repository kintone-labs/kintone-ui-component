import Control, {ControlProps} from '../Control';

import '../../css/Button.css'

type ButtonProps = ControlProps & {
  text: string;
  type: 'normal' | 'submit';
  onClick?: (e: Event) => void
}

class Button extends Control {
  protected _props: ButtonProps = {
    ...this._props,
    ...{
      text: 'Button',
      type: 'normal',
      onClick: () => {}
    }
  }
  private btnEl: HTMLButtonElement
  constructor(params: ButtonProps) {
    super();
    if(typeof params.isDisabled !== 'boolean') {
      delete params.isDisabled
    }
    if (params) {
      this._props = {...this._props, ...params};
    }
    this._createLayout()
  }

  rerender(changedAttr?: string[]) {
    // super.rerender();
    if (!changedAttr) return;
    if (changedAttr.indexOf('type') !== -1) {
      this.btnEl.className = this._getClassName();
    }
    if (changedAttr.indexOf('text') !== -1) {
      this.btnEl.innerHTML = this._props.text;
    }

    if (changedAttr.indexOf('isDisabled') !== -1) {
      if (this._props.isDisabled) {
        this.btnEl.setAttribute('disabled', `${this._props.isDisabled}`);
      } else {
        this.btnEl.removeAttribute('disabled');
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
    if (eventName === 'click') {
      this._props.onClick = callback
    }
  }

  private _createLayout() {
    this.btnEl = document.createElement('button');
    this.btnEl.className = this._getClassName();
    this.btnEl.innerHTML = this._props.text;
    if(this._props.onClick) {
      this.btnEl.addEventListener('click', (e) => {
        if (this._props.isDisabled) return;
        this._props.onClick(e)
      })
    }
    this.element = document.createElement('div')
    this.element.appendChild(this.btnEl)
  }
}

export default Button;