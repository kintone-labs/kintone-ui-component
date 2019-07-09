/// <reference types="react" />
import '../../css/Spinner.css';
declare type SpinnerProps = {
    isVisible?: boolean;
};
declare const Spinner: ({ isVisible }: SpinnerProps) => JSX.Element | null;
export default Spinner;
