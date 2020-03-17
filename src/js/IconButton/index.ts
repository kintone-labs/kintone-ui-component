import '../polyfill';
import Control, {ControlProps} from '../Control';
import {mdiPlus, mdiMinus, mdiClose, mdiFile, mdiChevronRight, mdiChevronLeft} from '@mdi/js';
import '../../css/IconButton.css';
type IconBtnProps = ControlProps & {
  type?: 'insert' | 'remove' | 'close' | 'file' | 'right' | 'left';
  size?: 'normal' | 'small';
  color?: 'gray' | 'blue' | 'red' | 'green' | 'transparent';
  shape?: 'circle' | 'square';
}

class IconButton extends Control<IconBtnProps> {
  private iconEl: SVGSVGElement
  private pathEl: SVGPathElement
  private _onClick: (e: Event) => void

  constructor(params?: IconBtnProps) {
    super();
    this._props = {
      ...this._props,
      ...{
        type: 'insert',
        size: 'normal',
        color: 'gray',
        shape: 'circle'
      }
    };
    if (params) {
      this._props = {...this._props, ...params};
    }

    this.element = this._createLayout();
    this.rerender(['btnStyle', 'iconStyle', 'isDisabled', 'isVisible']);
  }

  private _createLayout() {
    const btnEl = document.createElement('button');
    btnEl.addEventListener('click', (e) => {
      if (this._props.isDisabled) return;
      this._onClick && this._onClick(e);
    });

    this.pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.iconEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.iconEl.appendChild(this.pathEl);

    btnEl.appendChild(this.iconEl);

    return btnEl;
  }

  private _getClassName() {
    const colors = ['gray', 'blue', 'red', 'green', 'transparent'];
    let color = 'gray';
    if (this._props.color && colors.indexOf(this._props.color) !== -1) {
      color = this._props.color;
    }
    const shape = this._props.shape === 'square' ? 'square' : 'circle';
    const className = [
      'kuc-icon-btn',
      this._getClassSize(),
      this._props.type === 'remove' && color === 'gray' ? 'hover-danger' : '',
      color,
      shape
    ];
    return className.join(' ').trim();
  }

  private _getClassSize() {
    const className = this._props.size === 'small' ? 'small' : 'normal';
    return className;
  }

  private _getIconData() {
    let iconData = mdiPlus;
    switch (this._props.type) {
      case 'insert':
        break;
      case 'remove':
        iconData = mdiMinus;
        break;
      case 'close':
        iconData = mdiClose;
        break;
      case 'file':
        iconData = mdiFile;
        break;
      case 'right':
        iconData = mdiChevronRight;
        break;
      case 'left':
        iconData = mdiChevronLeft;
        break;
    }
    return iconData;
  }

  rerender(changedAttr?: string[]) {
    if (!changedAttr) return;

    if (changedAttr.indexOf('btnStyle') !== -1) {
      this.element.className = this._getClassName();
    }

    if (changedAttr.indexOf('iconStyle') !== -1) {
      this.pathEl.setAttribute('d', this._getIconData());
    }

    if (changedAttr.indexOf('isDisabled') !== -1) {
      if (this._props.isDisabled === true) {
        this.element.setAttribute('disabled', `${this._props.isDisabled}`);
      } else {
        this.element.removeAttribute('disabled');
      }
    }

    if (changedAttr.indexOf('isVisible') !== -1) {
      if (!this._props.isVisible) {
        this.element.style.display = 'none';
      } else {
        this.element.style.display = '';
      }
    }
  }

  setType(type: 'insert' | 'remove' | 'close' | 'file' | 'right' | 'left'): void {
    this._props.type = type;
    this.rerender(['iconStyle']);
  }

  setSize(size: 'normal' | 'small'): void {
    this._props.size = size;
    this.rerender(['btnStyle']);
  }

  setShape(shape: 'circle' | 'square'): void {
    this._props.shape = shape;
    this.rerender(['btnStyle']);
  }

  setColor(color: 'gray' | 'blue' | 'red' | 'green' | 'transparent'): void {
    this._props.color = color;
    this.rerender(['btnStyle']);
  }

  on(eventName: string, callback: (params?: any) => void) {
    if (eventName === 'click') {
      this._onClick = callback;
    }
  }
}

export default IconButton;
