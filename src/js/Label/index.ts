import Control, {ControlProps} from '../Control';
import {elements} from '../utils/util';

import style from '../../style/Label'

type LabelProps = ControlProps & {
  text?: string;
  isRequired?: boolean;
  textColor?: string;
  backgroundColor?: string;
}

class Label extends Control {
  protected _props: LabelProps = {
    ...this._props,
    ...{
      text: '',
      isRequired: false,
      textColor: '',
      backgroundColor: ''
    }
  }

  private textEl: any
  private requiredEl: any
  private containerEl: any

  constructor(params: LabelProps) {

    super([style])

    if (params) {
      this._props = {...this._props, ...params};
    }

    this.element = this._createLabelLayout();
    this.rerender(['text', 'isRequired', 'textStyle']);
  }

  private _createLabelLayout() {
    this.textEl = elements(document.createElement('span'));

    this.requiredEl = elements(document.createElement('span')).addClass('kuc-require').html('*');

    const containerDOM = document.createElement('div');
    this.containerEl = elements(containerDOM).addClass('kuc-label').append(this.textEl);
    return containerDOM;
  }

  rerender(changedAttr?: string[]) {
    super.rerender();

    if (!changedAttr) return;

    if (changedAttr.indexOf('text') !== -1) {
      this.textEl.html(this._props.text);
    }

    if (changedAttr.indexOf('isRequired') !== -1) {
      if (this._props.isRequired) {
        this.containerEl.append(this.requiredEl);
      } else {
        this.requiredEl.remove();
      }
    }

    if (changedAttr.indexOf('textStyle') !== -1) {
      let style = this._props.textColor !== '' ? `color: ${this._props.textColor}` : '';
      style += this._props.backgroundColor !== '' ? `;background-color: ${this._props.backgroundColor}` : '';
      this.textEl.attr('style', style);
    }
  }

  setText(text: string): void {
    this._props.text = text;
    this.rerender(['text']);
  }

  setRequired(isRequired: boolean): void {
    this._props.isRequired = isRequired;
    this.rerender(['isRequired']);
  }

  setTextColor(color: string): void {
    this._props.textColor = color;
    this.rerender(['textStyle']);
  }

  setBackgroundColor(color: string): void {
    this._props.backgroundColor = color;
    this.rerender(['textStyle']);
  }
}

export default Label;
