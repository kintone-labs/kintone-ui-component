import Control, {ControlProps} from '../Control'
import '../../css/TextArea.css'
type TextAreaProps = ControlProps & {
    value: string
    onClick: (e: any) => void
    onChange: (e: any) => void
}

class TextArea extends Control {
  protected _props: TextAreaProps = this._props
  private _onClick: (params?: any) => void = () => {}
  private _onChange: (params?: any) => void = () => {}
  private textAreaEl: HTMLTextAreaElement
  private resizeEl: HTMLDivElement
  private textAreaWidth= 297
  private textAreaHeight= 123

  private mixTextAreaWidth = 297
  private mixtTextAreaHeight = 123

  private currentX = null
  private currentY = null
  private translateX = 0
  private translateY = 0
  

  constructor(params: TextAreaProps) {
    super()
    if (params) {
      this._props = {...this._props, ...params}
    }

    this.element = this.createContainerEL()
    this.rerender(Object.keys(this._props))
  }

  rerender(changedAttr?: string[]) {
    super.rerender(changedAttr)
    if (!changedAttr) return
    if (changedAttr.indexOf('value') !== -1) {
        this.textAreaEl.innerText = this._props.value
    }
    if (changedAttr.indexOf('isDisabled') !== -1) {
        if (this._props.isDisabled) {
            this.textAreaEl.setAttribute('disabled', `${this._props.isDisabled}`)
        } else {
            this.textAreaEl.removeAttribute('disabled')
        }
    }
  }

  setValue(text: string){
    this._props.value = text
      this.rerender(['value'])
  }

  getValue(){
      return this._props.value;
  }

  _onMouseDown() {
      if (this._props.isDisabled) return;
    const _this = this;
    const eventMouseMove = document.onmousemove;
    const eventMouseUp = document.onmouseup;
    document.onmousemove = (event) => {
      if (_this.currentX && _this.currentY) {
        let dx = event.clientX - _this.currentX;
        if (_this.textAreaWidth + dx < _this.mixTextAreaWidth) {
          dx = 0;
        }

        let dy = event.clientY - _this.currentY;
        if (_this.textAreaHeight + dy < _this.mixtTextAreaHeight) {
          dy = 0;
        }

        this.translateX= this.translateX + dx,
        this.translateY= this.translateY + dy,
        this.textAreaWidth= this.textAreaWidth + dx,
        this.textAreaHeight= this.textAreaHeight + dy

        this.textAreaEl.style.width = this.textAreaWidth + 'px'
        this.textAreaEl.style.height = this.textAreaHeight + 'px'
        this.resizeEl.style.transform = `translate(${this.translateX}px, ${this.translateY}px)`
      }
      _this.currentX = event.clientX;
      _this.currentY = event.clientY;
    };
    document.onmouseup = () => {
      document.onmousemove = eventMouseMove;
      document.onmouseup = eventMouseUp;
      _this.currentX = null;
      _this.currentY = null;
    };
  }

  private createContainerEL() {
    const container = document.createElement('div')
    container.className = 'kuc-textarea-outer'

    this.textAreaEl = this.createTextareaEL()
    container.appendChild(this.textAreaEl)

    this.resizeEl = this.createResizeEL()
    container.appendChild(this.resizeEl)

    return container
  }

  private createTextareaEL() {
    const textarea = document.createElement('textarea')
    textarea.className = 'kuc-textarea'
    textarea.onclick = (e) => {this._onClick(e)}
    textarea.onchange = (e) => {
        this._props.value = (<HTMLInputElement>e.target).value
        this._onChange((<HTMLInputElement>e.target).value)
    }
    textarea.style.width = this.textAreaWidth + 'px'
    textarea.style.height = this.textAreaHeight + 'px'

    return textarea
  }

  private createResizeEL() {
    const textarea = document.createElement('div')
    textarea.className = 'kuc-textarea-resize'
    textarea.onmousedown = e => {this._onMouseDown()}
    textarea.style.transform = `translate(${this.translateX}px, ${this.translateY}px)`

    return textarea
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

export default TextArea