import '../polyfill';
import Control, {ControlProps} from '../Control';
import {elements} from '../utils/util';
import IconButton from '../IconButton';
import '../../css/NotifyPopup.css';

type PopupProps = ControlProps & {
  text?: string;
  type?: 'error' | 'success' | 'info';
}

class NotifyPopup extends Control<PopupProps> {

  private textEl: any
  private closeButton: IconButton
  private _onClick: (e: Event) => void
  private _onClose: (e: Event) => void

  constructor(params?: PopupProps) {
    super();
    this._props = {
      ...this._props,
      ...{
        text: '',
        type: 'error'
      }
    };
    if (params) {
      this._props = {...this._props, ...params};
      this._props.text = (params.text && typeof params.text === 'string') ? params.text : '';
    }

    // isDisabled always is setted false
    // When we update major version of ui-component, we should delete this prop
    this._props.isDisabled = false;

    this.element = this._createPopupLayout();

    this.closeButton.on('click', (e: Event) => {
      if (this._props.isDisabled) return;
      this._onClose && this._onClose(e);
      this.hide();
    });
    this.rerender(['text', 'type']);
  }

  private _getStyleByType() {
    const style: {bgClass: string;color: 'gray' | 'blue' | 'red' | 'green' | 'transparent'} = {bgClass: '', color: 'red'};

    switch (this._props.type) {
      case 'success':
        style.bgClass = 'bg-success';
        style.color = 'green';
        break;
      case 'info':
        style.bgClass = 'bg-info';
        style.color = 'blue';
        break;
      default:
        style.bgClass = 'bg-danger';
        style.color = 'red';
    }
    return style;
  }

  private _createPopupLayout() {
    const containerDOM = document.createElement('div');

    this.textEl = elements(document.createElement('div')).addClass('kuc-notify-title').appendTo(containerDOM);
    this.textEl.on('click', (e: Event) => {
      if (this._props.isDisabled) return;
      this._onClick && this._onClick(e);
    });

    this.closeButton = new IconButton({type: 'close'});

    elements(document.createElement('div')).addClass('kuc-close-button').appendTo(containerDOM).append(this.closeButton.render());

    return containerDOM;
  }

  on(eventName: string, callback: (params?: any) => void) {
    if (eventName === 'click') {
      this._onClick = callback;
      return;
    }
    if (eventName === 'close') {
      this._onClose = callback;

    }
  }

  private _getClassName() {
    const className = [
      'kuc-notify',
      this._getStyleByType().bgClass
    ];
    return className.join(' ').trim();
  }

  rerender(changedAttr?: string[]) {
    super.rerender();
    if (!changedAttr) return;

    if (changedAttr.indexOf('text') !== -1) {
      this.textEl.html(this._props.text);
    }

    if (changedAttr.indexOf('type') !== -1) {
      this.element.className = this._getClassName();
      this.closeButton.setColor(this._getStyleByType().color);
    }
  }

  setText(text: string): void {
    this._props.text = (typeof text === 'string') ? text : '';
    this.rerender(['text']);
  }

  setType(type: 'error' | 'success' | 'info'): void {
    this._props.type = type;
    this.rerender(['type']);
  }

  disable(): void {
    // nothing to do
  }

  enable(): void {
    // nothing to do
  }
}

export default NotifyPopup;
