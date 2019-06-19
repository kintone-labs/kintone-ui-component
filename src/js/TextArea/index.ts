import Control, {ControlProps} from '../Control';
import '../../css/TextArea.css';
type TextAreaProps = ControlProps & {
    value: string;
    onClick: (e: any) => void;
    onChange: (e: any) => void;
}

class TextArea extends Control {
  protected _props: TextAreaProps = this._props
  private _onClick: (params?: any) => void = () => {}
  private _onChange: (params?: any) => void = () => {}
  private textAreaWidth= 297;
  private textAreaHeight= 123;

  constructor(params: TextAreaProps) {
    super();
    if (params) {
      this._props = {...this._props, ...params};
    }

    this.element = this.createTextareaEL();
    this.rerender(Object.keys(this._props));
  }

  rerender(changedAttr?: string[]) {
    super.rerender(changedAttr);
    if (!changedAttr) return;
    if (changedAttr.indexOf('value') !== -1) {
        this.element.innerText = this._props.value;
    }
    if (changedAttr.indexOf('isDisabled') !== -1) {
        if (this._props.isDisabled) {
            this.element.setAttribute('disabled', `${this._props.isDisabled}`);
            this.element.style.resize = 'none';
        } else {
            this.element.style.resize = 'both';
            this.element.removeAttribute('disabled');
        }
    }
  }

  setValue(text: string){
    this._props.value = text;
      this.rerender(['value'])
  }

  getValue(){
      return this._props.value;
  }

  private createTextareaEL() {
    const textarea = document.createElement('textarea');
    textarea.className = 'kuc-textarea';
    textarea.onclick = (e) => {this._onClick(e)};
    textarea.onchange = (e) => {this._onChange((<HTMLInputElement>e.target).value)};
    textarea.style.width = this.textAreaWidth + 'px';
    textarea.style.height = this.textAreaHeight + 'px';

    return textarea;
  }

  on(eventName: string, callback: (params?: any) => void) {
      if(eventName === 'click') {
          this._onClick = callback;
      }
      if(eventName === 'change') {
        this._onChange = callback;
    }
  }

}

export default TextArea;