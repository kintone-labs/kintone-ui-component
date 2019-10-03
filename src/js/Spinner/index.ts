import Control, {ControlProps} from '../Control';
import {elements} from '../utils/util';

import '../../css/Spinner.css';

class Spinner extends Control {
  protected _props: ControlProps = {
    isDisabled: true,
    isVisible: false
  }

  constructor(params?: ControlProps) {
    super();
    if (params) {
      this._props = {...this._props, ...params};
    }
    this.element = this._createSpinnerElement();
    this.rerender();
  }

  private _createSpinnerElement() {
    const loader = elements(document.createElement('div')).addClass('kuc-loader');

    const spinner = elements(document.createElement('div')).addClass('kuc-spinner').append(loader);

    const outerDOM = document.createElement('div');
    elements(outerDOM).addClass('kuc-spinner-outer').append(spinner);

    return outerDOM;
  }

  rerender(changedAttr?: string[]) {
    if (this.element) {
      if (!this._props.isVisible) {
        this.element.style.display = 'none';
      } else {
        this.element.style.display = '';
      }
    }
  }

  disable(): void {
    // nothing to do   
  }

  enable(): void {
    // nothing to do
  }
}

export default Spinner;