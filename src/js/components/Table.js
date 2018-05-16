import Control from './Control';
import ReactDOM from 'react-dom';
import TableReact from '../components-react/Table';

const validEventNames = ['cellChange', 'cellClick', 'rowAdd', 'rowRemove'];

export default class Table extends Control {
    constructor(props) {
        if (props.rowTemplate) {
            const rowTemplate = props.rowTemplate.map(element => {
                return element._getReactElement();
            });

            props = {...props, rowTemplate: rowTemplate};
        }
        super(props);
        this._reactComponentClass = TableReact;
    }

    setValue(value) {
        this._setState({value});
    }

    getValue() {
        if(!this._reactObject){
            return this._getState().value;
        }

        return this.inner._getValue();
    }

    on(eventName, callback) {
        if (!validEventNames.some(event => event === eventName)) {
            throw new Error(Message.control.INVALID_EVENT + ' ' + validEventNames.join(','));
        }

        if (validEventNames.some(event => event === eventName)) {
            this.onRowAdd = callback;
        }

        const formatEventName = 'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);
        this._reactObject.setState({ [formatEventName]: callback });
    }
}
