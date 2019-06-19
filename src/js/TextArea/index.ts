import Control, {ControlProps} from '../Control';
import '../../css/TextArea.css';
type TextAreaProps = {
    value: string;
    isVisible: boolean;
    isDisabled: boolean;
    onClick: (e: any) => void;
    onChange: (e: any) => void;
}

class TextArea extends Control {
    protected _props: TextAreaProps = this._props

    private textarea: HTMLTextAreaElement

    private _onClick: (params?: any) => void
    private _onChange: (params?: any) => void

    private textAreaWidth= 297;
    private textAreaHeight= 123;

  constructor(params: TextAreaProps) {
    
    super();
    if (params) {
      this._props = {...this._props, ...params};
    }

    this.element = this.createContainerEL();
    this.rerender(Object.keys(this._props));
  }

  rerender(changedAttr?: string[]) {
    super.rerender(changedAttr);
    if (!changedAttr) return;
    if (changedAttr.indexOf('value') !== -1) {
        this.textarea.innerText = this._props.value;
    }
    if (changedAttr.indexOf('isDisabled') !== -1) {
        if (this._props.isDisabled) {
            this.textarea.setAttribute('disabled', `${this._props.isDisabled}`);
            this.textarea.style.resize = 'none';
        } else {
            this.textarea.style.resize = 'both';
            this.textarea.removeAttribute('disabled');
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

  disable(){
      this._props.isDisabled = true
      this.rerender(['isDisabled']);
  }

  enable(){
    this._props.isDisabled = false
    this.rerender(['isDisabled']);
   }

  private createContainerEL() {
    let container = document.createElement('div');
    container.className = 'kuc-textarea-outer';
    container.style.width = this.textAreaWidth + 'px';
    container.style.height = this.textAreaHeight + 'px';
    container.appendChild(this.createTextareaEL());

    return container;
  }

  private createTextareaEL() {
    this.textarea = document.createElement('textarea');
    this.textarea.className = 'kuc-textarea';
    this.textarea.onclick = (e) => {this._onClick(e)};
    this.textarea.onchange = (e) => {this._onChange(e.target.value)};
    this.textarea.style.width = '100%'
    this.textarea.style.height = '100%'

    return this.textarea;
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