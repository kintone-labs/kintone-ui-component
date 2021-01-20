/* eslint-disable @typescript-eslint/no-empty-function */
import Control, {ControlProps} from '../../Control';

type SaturationSpectrumProps = ControlProps & {
  width: number;
  height: number;
  rgb: {
    r: number;
    g: number;
    b: number;
  };
  onSelect: (rgb: {
    r: number;
    g: number;
    b: number;
  }, triggerOnChange: boolean) => void;
}

class SaturationSpectrum extends Control<SaturationSpectrumProps> {
  private colorCanvas: HTMLCanvasElement
  private isMouseDown: boolean

  constructor(params: SaturationSpectrumProps) {
    super();
    this._props = {
      ...this._props,
      ...{
        width: 200,
        height: 200,
        rgb: {r: 0, g: 0, b: 0},
        onSelect: (rgb = {r: 0, g: 0, b: 0}, triggerOnChange = false) => {}
      }
    };
    if (params) {
      this._props = {...this._props, ...params};
    }

    this.isMouseDown = false;
    this.element = document.createElement('div');
    this.colorCanvas = document.createElement('canvas');

    this.colorCanvas.width = this._props.width;
    this.colorCanvas.height = this._props.height;
    this.colorCanvas.onmousedown = this.handleMouseDown.bind(this);
    this.colorCanvas.onmouseup = this.handleMouseUp.bind(this);
    this.colorCanvas.onmousemove = this.handleMouseMove.bind(this);
    this.colorCanvas.onmouseleave = this.handleMouseLeave.bind(this);

    this.element.appendChild(this.colorCanvas);

    this.fillSatSpectrumCanvas();
  }

  rerender(changedAttr?: string[]) {
    super.rerender();
    if (!changedAttr) return;
    if (changedAttr.indexOf('rgb') !== -1) {
      this.fillSatSpectrumCanvas();
    }
  }

  setRGB(rgb: {
    r: number;
    g: number;
    b: number;
  }) {
    this._props.rgb = rgb;
    this.rerender(['rgb']);
  }

  fillSatSpectrumCanvas() {
    if (this.colorCanvas) {
      const ctx = this.colorCanvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = `rgb(${this._props.rgb.r},${this._props.rgb.g},${this._props.rgb.b})`;
        ctx.fillRect(0, 0, this._props.width, this._props.height);
        const grdWhite = ctx.createLinearGradient(0, 0, this._props.width, 0);
        grdWhite.addColorStop(0, 'rgb(255,255,255)');
        grdWhite.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grdWhite;
        ctx.fillRect(0, 0, this._props.width, this._props.height);
        const grdBlack = ctx.createLinearGradient(0, 0, 0, this._props.height);
        grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
        grdBlack.addColorStop(1, 'rgb(0,0,0)');
        ctx.fillStyle = grdBlack;
        ctx.fillRect(0, 0, this._props.width, this._props.height);
      }
    }
  }

  handleMouseLeave() {
    this.isMouseDown = false;
    this.rerender(['isMouseDown']);
  }

  triggerSelect(clientX: number, clientY: number, triggerOnChange: boolean) {
    const x = clientX - this.element.getBoundingClientRect().left;
    const y = clientY - this.element.getBoundingClientRect().top;
    if (this.colorCanvas) {
      const ctx = this.colorCanvas.getContext('2d');
      if (ctx) {
        const imageData = ctx.getImageData(x, y, 1, 1).data;
        this._props.onSelect({r: imageData[0], g: imageData[1], b: imageData[2]}, triggerOnChange);
      }
    }
  }

  handleMouseMove(e: MouseEvent) {
    if (this.isMouseDown) {
      this.triggerSelect(e.clientX, e.clientY, false);
    }
  }


  handleMouseDown() {
    this.isMouseDown = true;
    this.rerender(['isMouseDown']);
  }

  handleMouseUp(e: MouseEvent) {
    this.triggerSelect(e.clientX, e.clientY, false);
    this.isMouseDown = false;
    this.rerender(['isMouseDown']);
  }
}

export {SaturationSpectrumProps};
export default SaturationSpectrum;