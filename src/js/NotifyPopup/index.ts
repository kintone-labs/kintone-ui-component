import Control from '../Control';
import { elements } from '../utils/util'

import IconButton from '../../legacyJS/js/components/IconButton';

import '../../css/NotifyPopup.css'

class NotifyPopup extends Control {
    private text: string
    private type: string

    private textEl: any
    private closeButton: IconButton

    constructor({ text = '', type = 'error', isDisabled = false, isVisible = true } = { text: '', type: 'error', isDisabled: false, isVisible: true }) {
        super()
        this.text = text
        this.type = type
        this.isDisabled = isDisabled
        this.isVisible = isVisible

        this.element = this._createPopupLayout()
        this.closeButton.on('click', () => { this.hide() })
        this.rerender(['text', 'type'])
    }

    private _getStyleByType() {
        const style = { bgClass: '', color: '' }

        switch (this.type) {
            case 'success':
                style.bgClass = 'bg-success'
                style.color = 'green'
                break
            case 'infor':
                style.bgClass = 'bg-infor'
                style.color = 'blue'
                break
            default:
                style.bgClass = 'bg-danger'
                style.color = 'red'
        }
        return style;
    };

    private _createPopupLayout() {
        const containerDOM = document.createElement('div')

        this.textEl = elements(document.createElement('div')).addClass('kuc-notify-title').appendTo(containerDOM)

        this.closeButton = new IconButton({ type: 'close' })

        elements(document.createElement('div')).addClass('kuc-close-button').appendTo(containerDOM).append(this.closeButton.render())

        return containerDOM
    }

    private _getClassName() {
        const className = [
            'kuc-notify',
            this._getStyleByType().bgClass
        ];
        return className.join(' ').trim();
    };

    rerender(changedAttr?: Array<string>) {
        super.rerender()
        if (!changedAttr) return;

        if (changedAttr.indexOf('text') !== -1) {
            this.textEl.html(this.text)
        }

        if (changedAttr.indexOf('type') !== -1) {
            this.element.className = this._getClassName()
            this.closeButton.setColor(this._getStyleByType().color)
        }
    }

    setText(text: string): void {
        this.text = text
        this.rerender(['text'])
    }

    setType(type: string): void {
        this.type = type
        this.rerender(['type'])
    }

    disable(): void {
        super.disable()
        this.closeButton.disable()
    }

    enable(): void {
        super.enable()
        this.closeButton.enable()
    }
}

export default NotifyPopup