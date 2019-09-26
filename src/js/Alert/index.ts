import Control, {ControlProps} from '../Control';
import '../../css/Alert.css';

type AlertProps = ControlProps & {
  text?: string;
  type?: string;
}

class Alert extends Control {
  protected _props: AlertProps = {
    ...this._props,
    ...{
      text: '',
      type: 'error'
    }
  }

  constructor(params?: AlertProps) {
    super();
    if (params) {
      this._props = {...this._props, ...params};
    }

    this.element = document.createElement('div');
    this.element.className = this._getClassName();
    this.rerender(['text', 'type']);
  }

  rerender(changedAttr?: string[]) {
    super.rerender();

    if (!changedAttr) return;
    if (changedAttr.indexOf('text') !== -1) {
      this.element.innerHTML = this._props.text || "";
    }

    if (changedAttr.indexOf('type') !== -1) {
      this.element.className = this._getClassName();
    }
  }

  private _getClassName(): string {
    const className = [
      'kuc-alert',
      this._props.type === 'success' ? 'bg-success' : 'bg-danger'
    ];

    return className.join(' ');
  }

  setText(text: string): void {
    typeof text === "string" ? this._props.text = text : this._props.text = "";
    this.rerender(['text']);
  }


  setType(type: string): void {
    this._props.type = type;
    this.rerender(['type']);
  }
}

export default Alert;