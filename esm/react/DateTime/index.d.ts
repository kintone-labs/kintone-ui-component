/// <reference types="react" />
import '../../css/DateTime.css';
import '../../css/Text.css';
import Calendar from './components/Calendar';
import '../../css/font.css';
declare type DateTimeConstructorParameters = {
    value?: Date;
    onChange?: (newDate: Date) => void;
    locale?: 'ja' | 'en' | 'zh';
    dateFormat?: string;
    type?: 'date' | 'time' | 'datetime';
    timeFormat?: string;
    isDisabled?: boolean;
    isVisible?: boolean;
};
declare const DateTime: ({ value, isDisabled, isVisible, onChange, locale, dateFormat, type, timeFormat }: DateTimeConstructorParameters) => JSX.Element;
export default DateTime;
export { DateTimeConstructorParameters, Calendar };
export { en, zh, ja, format, getSeperator, availableLocales } from './components/Locale';
