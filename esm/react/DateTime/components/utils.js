import { format, en, getSeperator } from './Locale';
var getWeekDays = function (date) {
    var startDate = new Date(date);
    startDate.setDate(startDate.getDate() - startDate.getDay());
    var result = [startDate];
    for (var index = 1; index < 7; index++) {
        var tempDate = new Date(result[index - 1]);
        tempDate.setDate(tempDate.getDate() + 1);
        result.push(tempDate);
    }
    return result;
};
var getWeekDayLabels = function (locale) {
    var date = new Date();
    var eachDayOfWeek = getWeekDays(date);
    var labels = eachDayOfWeek.map(function (day) {
        return format(day, 'E', { locale: locale });
    });
    return labels;
};
var getMonthLabels = function (locale) {
    var monthNames = locale.monthNames;
    var labels = [];
    monthNames.forEach(function (month) {
        var label = {
            label: month,
            value: month
        };
        labels.push(label);
    });
    return labels;
};
var getYearLabels = function (value, locale) {
    var currentYear = value.replace('年', '');
    currentYear = parseInt(value, 10);
    var years = [];
    var prefix = '';
    if (locale !== en) {
        prefix = '年';
    }
    for (var i = (currentYear - 100); i <= (currentYear + 100); i++) {
        var year = {
            label: i + prefix,
            value: i + prefix
        };
        years.push(year);
    }
    return years;
};
var getDisplayingDays = function (date) {
    var startDayOfMonth = new Date(date);
    startDayOfMonth.setDate(1);
    var endDayOfMonth = new Date(date);
    endDayOfMonth.setMonth(endDayOfMonth.getMonth() + 1, 0);
    var startDayOfFirstWeek = new Date(startDayOfMonth);
    startDayOfFirstWeek.setDate(startDayOfFirstWeek.getDate() - startDayOfFirstWeek.getDay());
    var endDayOfEndWeek = new Date(endDayOfMonth);
    endDayOfEndWeek.setDate(endDayOfEndWeek.getDate() + (6 - endDayOfEndWeek.getDay()));
    var days = [];
    var d = new Date(startDayOfFirstWeek);
    while (d <= endDayOfEndWeek) {
        days.push(new Date(d));
        d.setDate(d.getDate() + 1);
        d = new Date(d);
    }
    return days;
};
var isSameMonth = function (day1, day2) { return day1.getMonth() === day2.getMonth(); };
var isToday = function (day) { return day.toDateString() === (new Date()).toDateString(); };
var isSameDate = function (day1, day2) { return day1.toDateString() === day2.toDateString(); };
var parseStringToDate = function (dateString, dateFormat) {
    try {
        var formatLowerCase = dateFormat ? dateFormat.toLowerCase() : 'mm/dd/yyyy';
        var delimiter = getSeperator(formatLowerCase);
        var dateItems = dateString.split(delimiter);
        var formatItems = formatLowerCase.split(delimiter);
        var monthIndex = formatItems.indexOf('mm');
        var dayIndex = formatItems.indexOf('d') !== -1 ? formatItems.indexOf('d') :
            formatItems.indexOf('dd');
        var yearIndex = formatItems.indexOf('yyyy');
        var year = parseInt(dateItems[yearIndex], 10);
        var day = parseInt(dateItems[dayIndex], 10);
        var month = parseInt(dateItems[monthIndex], 10);
        month -= 1;
        var date = new Date(year, month);
        if (day > 0) {
            date.setDate(day);
        }
        if (date.toDateString() === 'Invalid Date' || month < 0 || year < 1) {
            return null;
        }
        return date;
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
var parseStringToTime = function (timeString) {
    var timeData = {
        hour: parseInt(timeString.split(':')[0], 10),
        minute: parseInt(timeString.split(':')[1], 10)
    };
    if (timeData.hour < 0 || timeData.hour > 24 || timeData.minute < 0 || timeData.minute > 60) {
        return null;
    }
    var result = new Date();
    result.setHours(timeData.hour);
    result.setMinutes(timeData.minute);
    return result;
};
export { getYearLabels, getMonthLabels, getWeekDays, getWeekDayLabels, getDisplayingDays, isSameMonth, isToday, isSameDate, parseStringToDate, parseStringToTime };
