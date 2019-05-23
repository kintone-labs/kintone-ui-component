import Control from '../Control';
import { elements } from '../utils/util'

import '../../css/Label.css'

class Label extends Control {
    private text: string
    private isRequired: boolean
    private textColor: string
    private backgroundColor: string

    private textEl: any
    private requiredEl: any
    private containerEl: any

    constructor({ text = '', isRequired = false, textColor = '', backgroundColor = '', isDisabled = false, isVisible = true }
        = { text: '', isRequired: false, textColor: '', backgroundColor: '', isDisabled: false, isVisible: true }) {

        super()
        this.text = text
        this.isRequired = isRequired
        this.textColor = textColor
        this.backgroundColor = backgroundColor
        this.isDisabled = isDisabled
        this.isVisible = isVisible

        this.element = this._createLabelLayout()
        this.rerender(['text', 'isRequired', 'textStyle'])
    }

    private _createLabelLayout() {
        this.textEl = elements(document.createElement('span'))

        this.requiredEl = elements(document.createElement('span')).addClass('kuc-require').html('*')

        const containerDOM = document.createElement('div')
        this.containerEl = elements(containerDOM).addClass('kuc-label').append(this.textEl)
        return containerDOM
    }

    rerender(changedAttr?: Array<string>) {
        super.rerender()

        if (!changedAttr) return;

        if (changedAttr.indexOf('text') !== -1) {
            this.textEl.html(this.text)
        }

        if (changedAttr.indexOf('isRequired') !== -1) {
            if (this.isRequired) {
                this.containerEl.append(this.requiredEl)
            } else {
                this.requiredEl.remove()
            }
        }

        if (changedAttr.indexOf('textStyle') !== -1) {
            let style = this.textColor !== '' ? `color: ${this.textColor}` : ''
            style += this.backgroundColor !== '' ? `;background-color: ${this.backgroundColor}` : ''
            this.textEl.attr('style', style)
        }
    }

    setText(text: string): void {
        this.text = text
        this.rerender(['text'])
    }

    setRequired(isRequired: boolean): void {
        this.isRequired = isRequired
        this.rerender(['isRequired'])
    }

    setTextColor(color: string): void {
        this.textColor = color
        this.rerender(['textStyle'])
    }

    setBackgroundColor(color: string): void {
        this.backgroundColor = color
        this.rerender(['textStyle'])
    }
}

export default Label
