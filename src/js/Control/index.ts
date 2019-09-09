type ControlProps = {
  isDisabled?: boolean;
  isVisible?: boolean;
  style?:object;
  className?:string;
}

class Control {
  protected _props: ControlProps = {
    isDisabled: false,
    isVisible: true
  }
  protected element: HTMLElement


  rerender(changedAttr?: string[]) {
    if (this.element) {
      if (!this._props.isVisible) {
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
  setClassName(className:string){
    if(className){
      this.element.classList.add(className)
    }
  }
  setStyles(style:object){
    if(style && Object.keys(style).length>0){
      for (const key in style) {
        if (style.hasOwnProperty(key)) {
          this.element.style[key]= style[key];
        }
      }
    }
  }
}

export {ControlProps};
export default Control;