import '../../css/Spinner.css'
import Control from '../Control';

class Spinner extends Control {
    constructor({
        isDisabled = true,
        isVisible = false
    } = {
        isDisabled: true,
        isVisible: false
    }) {
        super()
        this.isDisabled = isDisabled
        this.isVisible = isVisible
        this.element = this._createSpinnerElement()
        this.rerender()
    }

    private _createSpinnerElement() {
        const loader = document.createElement('div')
        loader.className = "kuc-loader"

        const spinner = document.createElement('div')
        spinner.className = "kuc-spinner"
        spinner.appendChild(loader)

        const outer = document.createElement('div')
        outer.className = "kuc-spinner-outer"
        outer.appendChild(spinner)

        return outer;
    }
}

export default Spinner