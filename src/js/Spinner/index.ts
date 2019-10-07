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
    // isDisabled always is setted false
    // When we update major version of ui-component, we should delete this prop
    this._props.isDisabled = false;

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

  disable(): void {
    // nothing to do   
  }

  enable(): void {
    // nothing to do
  }
}

export default Spinner;