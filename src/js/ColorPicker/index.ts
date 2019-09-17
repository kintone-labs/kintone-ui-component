import Control, {ControlProps} from "../Control";
import ColorPickerStyle from "./ColorPickerStyle";
import {invertColor, isHexString} from './components/utils'
import Picker, {PickerProps} from './components/Picker'
import Message from '../../constant/Message'

type ColorPickerProps = ControlProps & {
  color?: string;
  onChange?: (color: string) => void;
}

class ColorPicker extends Control {
  protected _props: ColorPickerProps = {
    ...this._props,
    ...{
      color: '#ff0000',
      onAccept: (color: string) => {},
      onCancel: (color: string) => {}
    }
  }

  private oldColor: string
  private inputElement: HTMLInputElement
  private Picker: Picker
  private focus: boolean

  constructor(params?: ColorPickerProps) {
    super();
    if(!params){
      return;
    }
    if(typeof params.isDisabled !== 'boolean') {
      delete params.isDisabled
    }
    if (params) {
      this._props = {...this._props, ...params};
    }
    let { color = "#ff0000" }= this._props;
    if (!isHexString(color)) {
      throw new Error(Message.colorPicker.INVALID_COLOR)
    }

    if (typeof this._props.isDisabled !== 'boolean') {
      throw new Error(Message.common.INVALID_ARGUMENT)
    }
    
    this.oldColor = color;
    this.focus = false;
    this.element = document.createElement('div');
    this._renderInput();
    this._renderPicker();

    this.rerender()
  }

  private _renderInput() {
    let { color = "#ff0000" }= this._props;
    const inputContainer = document.createElement('div');
    this.element.appendChild(inputContainer);
    this.inputElement = document.createElement('input');
    this.inputElement.value = color;
    if(this._props.isDisabled) {
      this.inputElement.disabled = this._props.isDisabled
    }
    this.inputElement.onblur = (e: Event) => {
      this.focus = false;
      if (isHexString((e.target as HTMLInputElement).value)) {
        color = (e.target as HTMLInputElement).value;
        this.rerender(['color', 'redraw']);
      }
    };
    this.inputElement.onfocus = () => {
      this.focus = true;
      this.Picker.setPickerDisplay(true);
    };

    document.addEventListener('mousedown',(e: MouseEvent) => {
      if (!this.element.contains(e.target as HTMLElement)) {
        this.Picker.setPickerDisplay(false);
      }
    })
    inputContainer.appendChild(this.inputElement);

    const inputStyle = this.getInputStyle();

    Object.assign(this.inputElement.style, inputStyle);
  }

  private _renderPicker() {
    this.Picker = new Picker({
      hexString: this._props.color || "#ff0000",
      onAccept: (hexString: string) => {
        this._props.color = hexString;
        this.oldColor = hexString;
        this.rerender(['color']);
        this._props.onChange && this._props.onChange(hexString);
      },
      onCancel: () => {
        this._props.color = this.oldColor;
        this.rerender(['color', 'redraw']);
      },
      onChange: (hexString: string, triggerOnChange: boolean) => {
        this._props.color = hexString;
        if (triggerOnChange) {
          this.rerender(['color', 'redraw']);
        } else {
          this.rerender(['color']);
        }
      }
    } as PickerProps);
    this.element.appendChild(this.Picker.render());
  }

  rerender(changedAttr?: string[]) {
    super.rerender();
    if (!changedAttr) return;
    if (changedAttr.indexOf('color') !== -1) {
      this.inputElement.value = this._props.color || "#ff0000";
      const inputStyle = this.getInputStyle();
      this.Picker.setRGB(this._props.color || "#ff0000");
      Object.assign(this.inputElement.style, inputStyle);
    }

    if (changedAttr.indexOf('isDisabled') !== -1 && this._props.isDisabled) {
      this.inputElement.disabled = this._props.isDisabled
      if (this._props.isDisabled) {
        this.Picker.setPickerDisplay(false);
      }
    }

    if (changedAttr.indexOf('redraw') !== -1) {
      this.Picker.setHexString(this._props.color || "#ff0000");
    }
  }

  setColor(hexString: string) {
    if (isHexString(hexString)) {
      this._props.color = hexString
      this.rerender(['color', 'redraw'])
    }
    else {
      throw new Error(Message.colorPicker.INVALID_COLOR)
    }
  }

  getColor(): string {
    return this._props.color || "#ff0000";
  }

  getInputStyle() {
    let style = {
      backgroundColor: this._props.color || "#ff0000",
      color: invertColor(this._props.color || "#ff0000")
    };

    style = {...style, ...ColorPickerStyle.input};

    if (this.focus) {
      style = {...style, ...ColorPickerStyle.inputFocus};
    }
    return style;
  }

  on(eventName: string, callback: (hexString: string) => void) {
    if (eventName === 'change') {
      this._props.onChange = callback
    }
  }
}

export default ColorPicker;