import '../polyfill';
import Control, {ControlProps} from '../Control';
import {elements} from '../utils/util';
import '../../css/Label.css';

type LabelProps = ControlProps & {
  text?: string;
  isRequired?: boolean;
  textColor?: string;
  backgroundColor?: string;
}

class Label extends Control<LabelProps> {
  private textEl: any
  private requiredEl: any
  private containerEl: any

  constructor(params?: LabelProps) {
    super();
    this._props = {
      ...this._props,
      ...{
        text: '',
        isRequired: false,
        textColor: '',
        backgroundColor: ''
      }
    };
    if (params) {
      this._props = {...this._props, ...params};
      this._props.text = (params.text && typeof params.text === 'string') ? params.text : '';
    }

    // isDisabled always is setted false
    // When we update major version of ui-component, we should delete this prop
    this._props.isDisabled = false;

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
      if (this._props.isRequired && typeof this._props.isRequired === 'boolean') {
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
    this._props.text = (typeof text === 'string') ? text : '';
    this.rerender(['text']);
  }

  setRequired(isRequired: boolean): void {
    typeof isRequired === 'boolean' ? this._props.isRequired = isRequired : this._props.isRequired = false;
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

  disable(): void {
    // nothing to do
  }

  enable(): void {
    // nothing to do
  }
}

export default Label;
