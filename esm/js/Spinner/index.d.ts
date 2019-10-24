import '../polyfill';
import Control, { ControlProps } from '../Control';
import '../../css/Spinner.css';
declare class Spinner extends Control<ControlProps> {
    constructor(params?: ControlProps);
    private _createSpinnerElement;
    disable(): void;
    enable(): void;
}
export default Spinner;
