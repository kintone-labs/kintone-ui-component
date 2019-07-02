/// <reference types="react" />
import '../../css/DateTime.css';
import '../../css/Text.css';
import Calendar from './components/Calendar';
import '../../css/font.css';
declare type DateTimeConstructorParameters = {
    value?: Date;
    onChange?: Function;
    locale?: string;
    dateFormat?: string;
    type?: string;
    timeFormat?: string;
    isDisabled?: boolean;
    isVisible?: boolean;
};
declare const DateTime: ({ value, isDisabled, isVisible, onChange, locale, dateFormat, type, timeFormat }: DateTimeConstructorParameters) => JSX.Element;
export default DateTime;
export { DateTimeConstructorParameters, Calendar };
export * from './components/Locale';
