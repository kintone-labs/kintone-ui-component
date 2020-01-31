type ControlProps = {
  isDisabled?: boolean;
  isVisible?: boolean;
}

class Control<T extends ControlProps> {
  protected _props: T
  protected element: HTMLElement

  constructor() {
    this._props = {...this._props,
      ...{
        isDisabled: false,
        isVisible: true
      }
    };
  }

  rerender(changedAttr?: string[]) {
    if (this.element) {
      if (!this._props.isVisible && typeof this._props.isVisible === 'boolean') {
        this.element.style.display = 'none';
      } else {
        this.element.style.display = '';
      }

      if (this._props.isDisabled) {
        this.element.setAttribute('disabled', `${this._props.isDisabled}`);
      } else {
        this.element.removeAttribute('disabled');
      }
    }
  }

  getIsDisabled() {
    return this._props.isDisabled;
  }

  render() {
    return this.element;
  }

  on(eventName: string, callback: (params?: any) => void) {
    this.element.addEventListener(eventName, (e: Event)=>{
      if (this._props.isDisabled) return;
      callback(e);
    });
  }

  show() {
    this._props.isVisible = true;
    this.rerender(['isVisible']);
  }

  hide() {
    this._props.isVisible = false;
    this.rerender(['isVisible']);
  }

  disable() {
    this._props.isDisabled = true;
    this.rerender(['isDisabled']);
  }

  enable() {
    this._props.isDisabled = false;
    this.rerender(['isDisabled']);
  }
}

export {ControlProps};
export default Control;