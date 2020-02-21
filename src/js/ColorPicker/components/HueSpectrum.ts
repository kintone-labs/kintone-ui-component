/* eslint-disable @typescript-eslint/no-empty-function */
import Control, {ControlProps} from '../../Control';

type RGB = {
  r: number;
  g: number;
  b: number;
}

type HueSpectrumProps = ControlProps & {
  width: number;
  height: number;
  onSelect: (rgbObj: RGB) => void;
}

class HueSpectrum extends Control<HueSpectrumProps> {
  private colorCanvas: HTMLCanvasElement
  private isMouseDown: boolean
  private hasInitLayout: boolean

  constructor(params: HueSpectrumProps) {
    super();
    this._props = {
      ...this._props,
      ...{
        width: 0,
        height: 0,
        onSelect: (rgbObj: RGB) => {

        }
      }
    };
    if (params) {
      this._props = {...this._props, ...params};
    }

    this.element = document.createElement('div');
    this.colorCanvas = document.createElement('canvas');

    this.colorCanvas.width = this._props.width;
    this.colorCanvas.height = this._props.height;
    this.colorCanvas.onmousedown = this.handleMouseDown.bind(this);
    this.colorCanvas.onmouseup = this.handleMouseUp.bind(this);
    this.colorCanvas.onmousemove = this.handleMouseMove.bind(this);
    this.colorCanvas.onmouseleave = this.handleMouseLeave.bind(this);

    this.element.appendChild(this.colorCanvas);

    this.initLayout();
  }


  initLayout() {
    if (!this.hasInitLayout && this.colorCanvas) {

      const ctx = this.colorCanvas.getContext('2d');
      if (ctx) {
        ctx.rect(0, 0, this._props.width, this._props.height);
        const grd1 = ctx.createLinearGradient(0, 0, 0, this._props.height);
        grd1.addColorStop(0, 'rgb(255, 0, 0)'); // red
        grd1.addColorStop(0.17, 'rgb(255, 0, 255)'); // magenta
        grd1.addColorStop(0.34, 'rgb(0, 0, 255)'); // blue
        grd1.addColorStop(0.51, 'rgb(0, 255, 255)'); // aqua
        grd1.addColorStop(0.68, 'rgb(0, 255, 0)'); // green
        grd1.addColorStop(0.85, 'rgb(255, 255, 0)'); // yellow
        grd1.addColorStop(1, 'rgb(255, 0, 0)'); // red
        ctx.fillStyle = grd1;
        ctx.fill();
        this.hasInitLayout = true;
      }
    }
  }

  handleMouseLeave() {
    this.isMouseDown = false;
    this.rerender(['isMouseDown']);
  }

  handleMouseMove(e: MouseEvent) {
    if (this.isMouseDown) {
      this.triggerSelect(e.clientY);
    }
  }

  handleMouseDown() {
    this.isMouseDown = true;
    this.rerender(['isMouseDown']);
  }

  handleMouseUp(e: MouseEvent) {
    this.triggerSelect(e.clientY);
    this.isMouseDown = false;
    this.rerender(['isMouseDown']);
  }

  triggerSelect(clientY: number) {
    const x = this._props.width / 2;
    const y = clientY - this.element.getBoundingClientRect().top;
    if (this.colorCanvas && this.colorCanvas) {
      const ctx = this.colorCanvas.getContext('2d');
      if (ctx) {
        const imageData = ctx.getImageData(x, y, 1, 1).data;
        this._props.onSelect({r: imageData[0], g: imageData[1], b: imageData[2]});
      }
    }
  }

}

export {HueSpectrumProps, RGB};
export default HueSpectrum;