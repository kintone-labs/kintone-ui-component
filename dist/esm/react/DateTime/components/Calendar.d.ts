/// <reference types="react" />
import Locale from './localizationData/locale-dto';
declare type CalendarProps = {
    date: Date;
    locale?: Locale;
    pickerDisplay?: string;
    hasSelection?: boolean;
    onDateClick?: (date: Date | null, previousDate: Date | null) => void;
    calRef: any;
};
declare const Calendar: ({ date, locale, pickerDisplay, hasSelection, onDateClick, calRef }: CalendarProps) => JSX.Element;
export default Calendar;
