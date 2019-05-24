import Control, {ControlProps} from "../../Control";

type SaturationSpectrumProps = ControlProps & {
    width: number
    height: number
    rgb: {
        r:number
        g:number
        b:number
    }
    onSelect: (rgb: {
        r:number
        g:number
        b:number
    }, triggerOnChange: boolean) => void
}

class SaturationSpectrum extends Control {
    private width: number
    private height: number
    private colorCanvas: HTMLCanvasElement
    private containerEl: ClientRect | DOMRect
    private isMouseDown: boolean
    private rgb: {
        r:number
        g:number
        b:number
    }
    private onSelect: (rgb: {
        r:number
        g:number
        b:number
    }, triggerOnChange: boolean) => void

    constructor({
        width = 200,
        height = 200,
        rgb = {r: 0, g:0, b:0},
        onSelect = (rgb = {r: 0, g:0, b:0}, triggerOnChange = false) => {},
        isDisabled = false,
        isVisible = true
    }: SaturationSpectrumProps) {
        super()

        this.width = width
        this.height = height
        this.onSelect = onSelect
        this.rgb = rgb
        this.isMouseDown = false
        this.isDisabled = isDisabled
        this.isVisible = isVisible
        this.element = document.createElement('div')
        this.colorCanvas = document.createElement('canvas')

        this.colorCanvas.width = this.width
        this.colorCanvas.height = this.height
        this.colorCanvas.onmousedown = this.handleMouseDown.bind(this)
        this.colorCanvas.onmouseup = this.handleMouseUp.bind(this)
        this.colorCanvas.onmousemove = this.handleMouseMove.bind(this)
        this.colorCanvas.onmouseleave = this.handleMouseLeave.bind(this)

        this.element.appendChild(this.colorCanvas)

        this.fillSatSpectrumCanvas();
    }

    rerender(changedAttr?: Array<string>) {
        super.rerender()
        if (!changedAttr) return;
        if (changedAttr.indexOf('rgb') !== -1) {
            this.fillSatSpectrumCanvas();
        }
    }

    setRGB(rgb:{
        r:number
        g:number
        b:number
    }) {
        this.rgb = rgb
        this.rerender(['rgb'])
    }

    initContainerEl() {
        if (this.element) {
            this.containerEl = this.element.getBoundingClientRect()
        }
    }

    fillSatSpectrumCanvas() {
        if (this.colorCanvas) {
            let ctx = this.colorCanvas.getContext("2d");
            if (ctx) {
                ctx.fillStyle = `rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`;
                ctx.fillRect(0, 0, this.width, this.height);
                let grdWhite = ctx.createLinearGradient(0, 0, this.width, 0);
                grdWhite.addColorStop(0, "rgb(255,255,255)");
                grdWhite.addColorStop(1, "transparent");
                ctx.fillStyle = grdWhite;
                ctx.fillRect(0, 0, this.width, this.height);
                let grdBlack = ctx.createLinearGradient(0, 0, 0, this.height);
                grdBlack.addColorStop(0, "transparent");
                grdBlack.addColorStop(1, "rgb(0,0,0)");
                ctx.fillStyle = grdBlack;
                ctx.fillRect(0, 0, this.width, this.height);
            }
        }
    }

    handleMouseLeave() {
        this.isMouseDown = false;
        this.rerender(['isMouseDown'])
    }

    handleMouseMove(e: MouseEvent) {
        if (this.isMouseDown) {
            this.triggerSelect(e.clientX, e.clientY, false);
        }
    }

    triggerSelect(clientX: number, clientY: number, triggerOnChange: boolean) {
        if (!this.containerEl) {
            this.initContainerEl();
        }
        let x = clientX - this.containerEl.left;
        let y = clientY - this.containerEl.top;
        if (this.colorCanvas) {
            const ctx = this.colorCanvas.getContext("2d");
            if (ctx) {
                const imageData = ctx.getImageData(x, y, 1, 1).data;
                this.onSelect({ r: imageData[0], g: imageData[1], b: imageData[2] }, triggerOnChange);
            }
        } 
    }

    handleMouseDown() {
        this.isMouseDown = true
        this.rerender(['isMouseDown'])
    }

    handleMouseUp(e: MouseEvent) {
        this.triggerSelect(e.clientX, e.clientY, true);
        this.isMouseDown = false
        this.rerender(['isMouseDown'])
    }
}

export {SaturationSpectrumProps}
export default SaturationSpectrum