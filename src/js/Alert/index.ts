import '../../css/Alert.css'
import Control, {ControlProps} from '../Control';

type AlertProps = ControlProps & {
    text: string
    type: string
}

class Alert extends Control {
    _props: AlertProps = {
        text: '',
        type: 'error'
    }

    constructor(params:AlertProps) {
        super()
        if(params) {
            this._props = {...this._props, ...params}
        }
        this.element = document.createElement('div')
        this.element.className = this._getClassName()
        this.rerender()
    }

    rerender(changedAttr?: Array<string>){
        super.rerender()
        this.element.innerHTML = this._props.text
    }

    private _getClassName(): string {
        const className = [
            'kuc-alert',
            this._props.type === 'success' ? 'bg-success' : 'bg-danger'
        ];
    
        return className.join(' ');
    }

    setText(text: string):void {
        this._props.text = text
        this.rerender(['text'])
    }

    setType(type: string):void {
        this._props.type = type
        this.rerender(['type'])
    }
}

export default Alert