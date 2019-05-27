import Control, { ControlProps } from "../Control"

import '../../css/base.css'
import '../../css/IconButton.css'

type IconBtnProps = ControlProps & {
    type: string
    size: string
    color: string
    shape: string
}

class IconButton extends Control {
    protected _props: IconBtnProps = {
        ...this._props, ...{
            type: 'insert',
            size: 'large',
            color: 'gray',
            shape: 'circle'
        }
    }

    private btnEl: HTMLElement
    private iconEl: HTMLElement

    constructor(params: IconBtnProps) {
        super()

        if (params) {
            this._props = { ...this._props, ...params }
        }

        this.element = this._createLayout()
        this.rerender(['btnStyle', 'iconStyle'])
    }

    private _createLayout() {
        this.btnEl = document.createElement('button')
        this.iconEl = document.createElement('i')

        this.btnEl.appendChild(this.iconEl)

        return this.btnEl
    }

    private _getClassName() {
        const colors = ['gray', 'blue', 'red', 'green', 'transparent']
        const color = colors.indexOf(this._props.color) === -1 ? 'gray' : this._props.color
        const shape = this._props.shape === 'normal' ? 'normal' : 'circle'
        const className = [
            'kuc-icon-btn',
            this._getClassSize(),
            this._props.type === 'remove' && color === 'gray' ? 'hover-danger' : '',
            color,
            shape
        ]
        return className.join(' ').trim()
    }

    private _getClassSize = () => {
        const className = this._props.size === 'small' ? 'small' : 'large'
        return className
    }

    private _getClassType() {
        let classType = 'fa fa-plus'
        switch (this._props.type) {
            case 'insert':
                break
            case 'remove':
                classType = 'fa fa-minus'
                break
            case 'close':
                classType = 'fa fa-times'
                break
            case 'file':
                classType = 'fa fa-file'
                break
            case 'right':
                classType = 'fa fa-chevron-right'
                break
            case 'left':
                classType = 'fa fa-chevron-left'
                break
        }
        return classType
    }

    rerender(changedAttr?: Array<string>) {
        super.rerender()

        if (!changedAttr) return;

        if (changedAttr.indexOf('btnStyle') !== -1) {
            this.btnEl.className = this._getClassName()
        }

        if (changedAttr.indexOf('iconStyle') !== -1) {
            this.iconEl.className = this._getClassType()
        }
    }

    setType(type: string): void {
        this._props.type = type
        this.rerender(['iconStyle'])
    }

    setSize(size: string): void {
        this._props.size = size
        this.rerender(['btnStyle'])
    }

    setShape(shape: string): void {
        this._props.shape = shape
        this.rerender(['btnStyle'])
    }

    setColor(color: string): void {
        this._props.color = color
        this.rerender(['btnStyle'])
    }

}

export default IconButton