import Control, {ControlProps} from '../Control'
import { mdiPlus, mdiMinus, mdiClose, mdiFile, mdiChevronRight, mdiChevronLeft } from '@mdi/js'
import '../../css/IconButton.css'

type IconBtnProps = ControlProps & {
  type?: string;
  size?: string;
  color?: string;
  shape?: string;
}

class IconButton extends Control {
  protected _props: IconBtnProps = {
    ...this._props,
    ...{
      type: 'insert',
      size: 'large',
      color: 'gray',
      shape: 'circle'
    }
  }

  private btnEl: HTMLElement
  private iconEl: SVGSVGElement
  private pathEl: SVGPathElement
  private _onClick = (e: Event) => {}

  constructor(params: IconBtnProps) {
    super();

    if (params) {
      this._props = {...this._props, ...params}
    }

    this.element = this._createLayout()
    this.rerender(['btnStyle', 'iconStyle', 'isDisabled', 'isVisible'])
  }

  private _createLayout() {
    this.btnEl = document.createElement('button')
    this.btnEl.addEventListener('click', (e) => {
      if (this._props.isDisabled) return
      this._onClick(e)
    })

    this.pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path")
    this.iconEl = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    this.iconEl.appendChild(this.pathEl)

    this.btnEl.appendChild(this.iconEl);

    const containerEl = document.createElement('div')
    containerEl.appendChild(this.btnEl)

    return containerEl;
  }

  private _getClassName() {
    const colors = ['gray', 'blue', 'red', 'green', 'transparent'];
    const color = colors.indexOf(this._props.color) === -1 ? 'gray' : this._props.color
    const shape = this._props.shape === 'normal' ? 'normal' : 'circle';
    const className = [
      'kuc-icon-btn',
      this._getClassSize(),
      this._props.type === 'remove' && color === 'gray' ? 'hover-danger' : '',
      color,
      shape
    ];
    return className.join(' ').trim();
  }

  private _getClassSize = () => {
    const className = this._props.size === 'small' ? 'small' : 'large'
    return className;
  }

  private _getIconData() {
    let iconData = mdiPlus;
    switch (this._props.type) {
      case 'insert':
        break
      case 'remove':
        iconData = mdiMinus
        break
      case 'close':
        iconData = mdiClose
        break
      case 'file':
        iconData = mdiFile
        break
      case 'right':
        iconData = mdiChevronRight
        break;
      case 'left':
        iconData = mdiChevronLeft
        break
    }
    return iconData
  }

  rerender(changedAttr?: string[]) {
    if (!changedAttr) return

    if (changedAttr.indexOf('btnStyle') !== -1) {
      this.btnEl.className = this._getClassName();
    }

    if (changedAttr.indexOf('iconStyle') !== -1) {
      this.pathEl.setAttribute('d', this._getIconData())
    }

    if (changedAttr.indexOf('isDisabled') !== -1) {
      if (this._props.isDisabled) {
        this.btnEl.setAttribute('disabled', `${this._props.isDisabled}`)
      } else {
        this.btnEl.removeAttribute('disabled');
      }
    }

    if (changedAttr.indexOf('isVisible') !== -1) {
      if (!this._props.isVisible) {
        this.element.style.display = 'none'
      } else {
        this.element.style.display = ''
      }
    }
  }

  setType(type: string): void {
    this._props.type = type;
    this.rerender(['iconStyle']);
  }

  setSize(size: string): void {
    this._props.size = size;
    this.rerender(['btnStyle']);
  }

  setShape(shape: string): void {
    this._props.shape = shape;
    this.rerender(['btnStyle'])
  }

  setColor(color: string): void {
    this._props.color = color;
    this.rerender(['btnStyle'])
  }

  on(eventName: string, callback: (params?: any) => void) {
    if (eventName === 'click') {
      this._onClick = callback
    }
  }
}

export default IconButton
