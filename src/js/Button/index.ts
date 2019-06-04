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
  constructor(params: ButtonProps) {
    super();
    if(typeof params.isDisabled !== 'boolean') {
      delete params.isDisabled
    }
    if (params) {
      this._props = {...this._props, ...params};
    }
  }

  rerender(changedAttr?: string[]) {
    super.rerender();
    if (!changedAttr) return;
    if (changedAttr.indexOf('type') !== -1) {
      this.element.className = this._getClassName();
    }
    if (changedAttr.indexOf('text') !== -1) {
      this.element.innerHTML = this._props.text;
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

  render() {
    this._createLayout()
    this.rerender()
    return super.render()
  }

  private _getClassName() {
    return [
      'kuc-btn',
      this._props.type === 'submit' ? 'submit' : 'normal'
    ].join(' ').trim();
  }

  private _createLayout() {
    this.element = document.createElement('button');
    this.element.className = this._getClassName();
    this.element.innerHTML = this._props.text;
    if(this._props.onClick) {
      this.element.addEventListener('click', this._props.onClick)
    }
  }
}

export default Button;