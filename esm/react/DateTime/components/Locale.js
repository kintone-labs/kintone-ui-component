import en from './localizationData/en';
import zh from './localizationData/zh';
import ja from './localizationData/ja';
var seperators = ['/', '-', ' ', ':'];
var getSeperator = function (dateFormatString) {
    var seperator = '';
    seperators.forEach(function (char) {
        if (dateFormatString.indexOf(char) !== -1) {
            seperator = char;
        }
    });
    return seperator;
};
var getDateData = function (dateObj, dateCode, locale) {
    switch (dateCode) {
        case 'E':
            return locale.weekDayShort[dateObj.day];
        case 'EE':
            return locale.weekDayMedium[dateObj.day];
        case 'EEEE':
            return locale.weekDay[dateObj.day];
        case 'd':
            return "" + dateObj.date;
        case 'dd':
            if (dateObj.date < 10)
                return "0" + dateObj.date;
            return "" + dateObj.date;
        case 'MM':
            if (dateObj.month + 1 < 10)
                return "0" + (dateObj.month + 1);
            return "" + (dateObj.month + 1);
        case 'MMM':
            return locale.monthNamesShort[dateObj.month];
        case 'MMMM':
            return locale.monthNames[dateObj.month];
        case 'YYYY':
            return "" + dateObj.year;
        case 'HH':
            if (dateObj.hour < 10)
                return "0" + dateObj.hour;
            return "" + dateObj.hour;
        case 'H':
            return "" + dateObj.hour;
        case 'mm':
            if (dateObj.minute < 10)
                return "0" + dateObj.minute;
            return "" + dateObj.minute;
        case 'm':
            return "" + dateObj.minute;
        case 'calendartitle':
            if (locale.name === 'ja' || locale.name === 'zh')
                return dateObj.year + "\u5E74" + (dateObj.month + 1) + "\u6708";
            return locale.monthNames[dateObj.month] + " " + dateObj.year;
        default:
            break;
    }
};
var format = function (dirtyDate, dateFormat, option) {
    if (option === void 0) { option = {}; }
    try {
        var dateObj_1 = {
            millisecond: dirtyDate.getMilliseconds(),
            second: dirtyDate.getSeconds(),
            minute: dirtyDate.getMinutes(),
            hour: dirtyDate.getHours(),
            date: dirtyDate.getDate(),
            day: dirtyDate.getDay(),
            month: dirtyDate.getMonth(),
            year: dirtyDate.getFullYear()
        };
        if (dateFormat === 'calendartitle') {
            return getDateData(dateObj_1, 'calendartitle', option.locale);
        }
        var seperator = getSeperator(dateFormat);
        var formattedDate = dateFormat.split(seperator);
        formattedDate = formattedDate.map(function (item) {
            return getDateData(dateObj_1, item, option.locale);
        });
        return formattedDate.join(seperator);
    }
    catch (error) {
        return dateFormat;
    }
};
var availableLocales = 'ja, en, zh';
var Locale = {
    en: en,
    zh: zh,
    ja: ja,
    format: format,
    availableLocales: availableLocales
};
export default Locale;
export { en, zh, ja, format, getSeperator, availableLocales };
