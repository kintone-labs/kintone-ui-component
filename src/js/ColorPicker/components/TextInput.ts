import Control, { ControlProps } from "../../Control";
import TextInputStyle from './TextInputStyle'
import {rgbToHex, hsvToRgb} from './utils'
import { RGB } from "./HueSpectrum";

type TextInputProps = ControlProps & {
    label: string
    value: string
    onChange: (value: string) => void
}

class TextInput extends Control {
    protected _props: TextInputProps 

    private inputElement: HTMLInputElement

    constructor(params: TextInputProps) {
        super()

        if (params) {
            this._props = {...this._props, ...params}
        }

        this.element = document.createElement('div')

        let labelContainer = document.createElement('span')
        Object.assign(labelContainer.style, TextInputStyle.label)
        labelContainer.append(this._props.label)

        this.element.appendChild(labelContainer)

        let inputContainer = document.createElement('span')
        this.inputElement = document.createElement('input')
        Object.assign(this.inputElement.style, TextInputStyle.input)
        this.inputElement.value = this._props.value
        this.inputElement.onchange = (e: Event) => {
            this._props.onChange((<HTMLInputElement>e.target).value)
        }
        inputContainer.appendChild(this.inputElement)

        this.element.appendChild(inputContainer)
    }

    rerender(changedAttr?: Array<string>) {
        super.rerender()
        if (!changedAttr) return
        if (changedAttr.indexOf('value') !== -1) {
            this.inputElement.value = this._props.value
        }
    }

    setValue(value: string) {
        this._props.value = value
        this.rerender(['value'])
    }
}

type RGBInputProps = ControlProps & {
    rgb: {
        r: number
        g: number
        b: number
    }
    onChange: (hexString: string) => void
}

class RGBInput extends Control {
    protected _props: RGBInputProps

    private rInput: TextInput
    private gInput: TextInput
    private bInput: TextInput

    constructor(params: RGBInputProps) {
        super()

        if (params) {
            this._props = {...this._props, ...params}
        }

        this.element = document.createElement('div')
        
        this.rInput = new TextInput({
            label: "R",
            value: this._props.rgb.r.toString(),
            onChange: (value: string) => {
                try {
                    this._props.rgb.r = parseInt(value || "0",10)
                    this._props.onChange(rgbToHex(this._props.rgb.r, this._props.rgb.g, this._props.rgb.b))
                } catch (error) {
                    console.error(error)
                }
            },
            isVisible: true
        } as TextInputProps)
        this.element.appendChild(this.rInput.render())

        this.gInput = new TextInput({
            label: "G",
            value: this._props.rgb.g.toString(),
            onChange: (value: string) => {
                try {
                    this._props.rgb.g = parseInt(value || "0",10)
                    this._props.onChange(rgbToHex(this._props.rgb.r, this._props.rgb.g, this._props.rgb.b))
                } catch (error) {
                    console.error(error)
                }
            },
            isVisible: true
        } as TextInputProps)
        this.element.appendChild(this.gInput.render())

        this.bInput = new TextInput({
            label: "B",
            value: this._props.rgb.b.toString(),
            onChange: (value: string) => {
                try {
                    this._props.rgb.b = parseInt(value || "0",10)
                    this._props.onChange(rgbToHex(this._props.rgb.r, this._props.rgb.g, this._props.rgb.b))
                } catch (error) {
                    console.error(error)
                }
            },
            isVisible: true
        } as TextInputProps)
        this.element.appendChild(this.bInput.render())
    }

    rerender(changedAttr?: Array<string>) {
        super.rerender()
        if (!changedAttr) return
        if (changedAttr.indexOf('rgb') !== -1) {
            this.rInput.setValue(this._props.rgb.r.toString())
            this.gInput.setValue(this._props.rgb.g.toString())
            this.bInput.setValue(this._props.rgb.b.toString())
        }
    }

    setRGB(rgb: RGB) {
        this._props.rgb = rgb
        this.rerender(['rgb'])
    }
}

type HSVInputProps = ControlProps & {
    hsv: {
        h: number
        s: number
        v: number
    }
    onChange: (hexString: string) => void
}

class HSVInput extends Control {
    private hInput: TextInput
    private sInput: TextInput
    private vInput: TextInput

    protected _props: HSVInputProps

    constructor(params: HSVInputProps) {
        super()

        if (params) {
            this._props = {...this._props, ...params}
        }

        this.element = document.createElement('div')
        
        this.hInput = new TextInput({
            label: "H",
            value: this._props.hsv.h.toString(),
            onChange: (value: string) => {
                try {
                    this._props.hsv.h = parseInt(value || "0",10)
                    let rgb = hsvToRgb(this._props.hsv.h, this._props.hsv.s, this._props.hsv.v)
                    this._props.onChange(rgbToHex(rgb.r, rgb.g, rgb.b))
                } catch (error) {
                    console.error(error)
                }
            },
            isVisible: true
        } as TextInputProps)
        this.element.appendChild(this.hInput.render())

        this.sInput = new TextInput({
            label: "S",
            value: this._props.hsv.s.toString(),
            onChange: (value: string) => {
                try {
                    this._props.hsv.s = parseInt(value || "0",10)
                    let rgb = hsvToRgb(this._props.hsv.h, this._props.hsv.s, this._props.hsv.v)
                    this._props.onChange(rgbToHex(rgb.r, rgb.g, rgb.b))
                } catch (error) {
                    console.error(error)
                }
            },
            isVisible: true
        } as TextInputProps)
        this.element.appendChild(this.sInput.render())

        this.vInput = new TextInput({
            label: "V",
            value: this._props.hsv.v.toString(),
            onChange: (value: string) => {
                try {
                    this._props.hsv.v = parseInt(value || "0",10)
                    let rgb = hsvToRgb(this._props.hsv.h, this._props.hsv.s, this._props.hsv.v)
                    this._props.onChange(rgbToHex(rgb.r, rgb.g, rgb.b))
                } catch (error) {
                    console.error(error)
                }
            },
            isVisible: true
        } as TextInputProps)
        this.element.appendChild(this.vInput.render())
    }

    rerender(changedAttr?: Array<string>) {
        super.rerender()
        if (!changedAttr) return
        if (changedAttr.indexOf('hsv') !== -1) {
            this.hInput.setValue(this._props.hsv.h.toString())
            this.sInput.setValue(this._props.hsv.s.toString())
            this.vInput.setValue(this._props.hsv.v.toString())
        }
    }

    setHSV(hsv: {
        h: number
        s: number
        v: number
    }) {
        this._props.hsv = hsv
        this.rerender(['hsv'])
    }
}

export {RGBInput, HSVInput}