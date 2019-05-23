class Control {
    isDisabled: boolean
    isVisible: boolean
    element: HTMLElement

    rerender(changedAttr?: Array<string>) {
        if (this.element) {
            if (!this.isVisible) {
                this.element.style.display = 'none'
            }
            else {
                this.element.style.display = ''
            }

            if (this.isDisabled) {
                this.element.setAttribute('disabled', `${this.isDisabled}`)
            }
        }
    }

    render() {
        return this.element
    }

    on(eventName: string, callback: (e?: Event) => void) {
        this.element.addEventListener(eventName,(e: Event)=>{
            if (this.isDisabled) return
            callback(e)
        })
    }

    show() { 
        this.isVisible = true
        this.rerender(['isVisible'])
    }

    hide() {
        this.isVisible = false
        this.rerender(['isVisible'])
    }

    disable() {
        this.isDisabled = true
        this.rerender(['isDisabled'])
    }

    enable() {
        this.isDisabled = false
        this.rerender(['isDisabled'])
    }
}

export default Control