import Control, {ControlProps} from '../../Control';
import PickerStyle from './PickerStyle';
import SaturationSpectrum, {SaturationSpectrumProps} from './SaturationSpectrum';
import HueSpectrum, {HueSpectrumProps, RGB} from './HueSpectrum';
import {hexToRgb, rgbToHex, rgbToHsv} from './utils';
import {RGBInput, HSVInput} from './TextInput';
import Button from '../../../js/Button';
type PickerProps = ControlProps & {
  hexString: string;
  onChange: (hexString: string, triggerOnChange: boolean) => void;
  onAccept: (hexString: string) => void;
  onCancel: () => void;
}

class Picker extends Control<PickerProps> {
  private saturationSpectrum: SaturationSpectrum
  private hueSpectrum: HueSpectrum
  private saturationBackground: RGB
  private rgbInput: RGBInput
  private hsvInput: HSVInput
  private okButton: Button
  private cancelButton: Button

  constructor(params: PickerProps) {
    super();
    this._props = {
      ...this._props,
      ...{
        hexString: '',
        isDisabled: false,
        isVisible: false
      }
    };
    if (params) {
      this._props = {...this._props, ...params};
    }

    this.element = document.createElement('div');

    Object.assign(this.element.style, PickerStyle.container);

    this.rerender();

    this._initSaturation();

    this._initHue();

    this._renderSaturation();

    this._renderHue();

    this._renderInput();

    this._renderButton();
  }

  private _initHue() {
    this.hueSpectrum = new HueSpectrum({
      width: 30,
      height: 200,
      onSelect: (newRgb: RGB) => {
        this._props.hexString = rgbToHex(newRgb.r, newRgb.g, newRgb.b);
        this._props.onChange && this._props.onChange(this._props.hexString, true);
      }
    } as HueSpectrumProps);
  }

  private _initSaturation() {
    this.saturationBackground = hexToRgb(this._props.hexString);
    this.saturationSpectrum = new SaturationSpectrum({
      width: 200,
      height: 200,
      rgb: this.saturationBackground,
      onSelect: (rgb, triggerOnChange) => {
        this._props.hexString = rgbToHex(rgb.r, rgb.g, rgb.b);
        this._props.onChange && this._props.onChange(this._props.hexString, triggerOnChange);
      }
    } as SaturationSpectrumProps);
  }

  private _renderHue() {
    const hueContainer = document.createElement('div');
    Object.assign(hueContainer.style, PickerStyle.hueContainer);
    hueContainer.appendChild(this.hueSpectrum.render());
    this.element.appendChild(hueContainer);
  }

  private _renderSaturation() {
    const saturationContainer = document.createElement('div');
    Object.assign(saturationContainer.style, PickerStyle.saturationContainer);
    saturationContainer.appendChild(this.saturationSpectrum.render());
    this.element.appendChild(saturationContainer);
  }

  private _renderInput() {
    const inputGroupContainer = document.createElement('div');
    Object.assign(inputGroupContainer.style, PickerStyle.inputContainer);
    this.element.appendChild(inputGroupContainer);

    const tempRGB = hexToRgb(this._props.hexString);
    this.rgbInput = new RGBInput({
      rgb: tempRGB,
      onChange: (hexString: string) => {
        this._props.onChange(hexString, true);
      },
      isVisible: true
    });
    inputGroupContainer.appendChild(this.rgbInput.render());

    this.hsvInput = new HSVInput({
      hsv: rgbToHsv(tempRGB.r, tempRGB.g, tempRGB.b),
      onChange: (hexString: string) => {
        this._props.onChange(hexString, true);
      },
      isVisible: true
    });
    inputGroupContainer.appendChild(this.hsvInput.render());
  }

  private _renderButton() {
    const buttonContainer = document.createElement('div');
    this.element.appendChild(buttonContainer);

    const okButtonSpan = document.createElement('span');
    buttonContainer.appendChild(okButtonSpan);
    this.okButton = new Button({
      text: 'OK',
      type: 'submit'
    });
    okButtonSpan.appendChild(this.okButton.render());
    okButtonSpan.style.display = 'inline-block';
    this.okButton.on('click', () => {
      this._props.isVisible = false;
      this.rerender(['pickerDisplay']);
      this._props.onAccept && this._props.onAccept(this._props.hexString);
    });

    const cancelButtonSpan = document.createElement('span');
    buttonContainer.appendChild(cancelButtonSpan);
    this.cancelButton = new Button({
      text: 'Cancel',
      type: 'normal'
    });
    cancelButtonSpan.appendChild(this.cancelButton.render());
    cancelButtonSpan.style.display = 'inline-block';
    this.cancelButton.on('click', () => {
      this._props.isVisible = false;
      this.rerender(['pickerDisplay']);
      this._props.onCancel && this._props.onCancel();
    });
  }

  rerender(changedAttr?: string[]) {
    super.rerender();
    if (!changedAttr) return;
    if (changedAttr.indexOf('hexString') !== -1) {
      const tempRGB = hexToRgb(this._props.hexString);
      this.saturationSpectrum.setRGB(tempRGB);
      this.rgbInput.setRGB(tempRGB);
      this.hsvInput.setHSV(rgbToHsv(tempRGB.r, tempRGB.g, tempRGB.b));
    }
  }

  setRGB(hexString: string) {
    const tempRGB = hexToRgb(this._props.hexString);
    this.rgbInput.setRGB(tempRGB);
    this.hsvInput.setHSV(rgbToHsv(tempRGB.r, tempRGB.g, tempRGB.b));
  }

  setHexString(hexString: string) {
    this._props.hexString = hexString;
    this.rerender(['hexString']);
  }

  setPickerDisplay(pickerDisplay: boolean) {
    this._props.isVisible = pickerDisplay;
    this.rerender();
  }
}

export {PickerProps};
export default Picker;