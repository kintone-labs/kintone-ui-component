declare const getWeekDays: (date: Date) => Date[];
declare const getWeekDayLabels: (locale: any) => string[];
declare const getDisplayingDays: (date: Date) => Date[];
declare const isSameMonth: (day1: Date, day2: Date) => boolean;
declare const isToday: (day: Date) => boolean;
declare const isSameDate: (day1: Date, day2: Date) => boolean;
declare const parseStringToDate: (dateString: string) => Date | null;
declare const parseStringToTime: (timeString: string) => Date | null;
export { getWeekDays, getWeekDayLabels, getDisplayingDays, isSameMonth, isToday, isSameDate, parseStringToDate, parseStringToTime };
