import Control, { ControlProps } from '../Control';
import '../../css/Spinner.css';
declare class Spinner extends Control {
    protected _props: ControlProps;
    constructor(params: ControlProps);
    private _createSpinnerElement;
}
export default Spinner;
