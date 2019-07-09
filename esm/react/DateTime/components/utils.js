import { format } from './Locale';
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
    for (var d = new Date(startDayOfFirstWeek); d <= endDayOfEndWeek; d.setDate(d.getDate() + 1)) {
        days.push(new Date(d));
    }
    return days;
};
var isSameMonth = function (day1, day2) { return day1.getMonth() === day2.getMonth(); };
var isToday = function (day) { return day.toDateString() === (new Date()).toDateString(); };
var isSameDate = function (day1, day2) { return day1.toDateString() === day2.toDateString(); };
var parseStringToDate = function (dateString) {
    if (isNaN(dateString.split('/')[1]) || isNaN(dateString.split('/')[0]) || isNaN(dateString.split('/')[2])) {
        return null;
    }
    var dateData = {
        date: parseInt(dateString.split('/')[1], 10),
        month: parseInt(dateString.split('/')[0], 10) - 1,
        year: parseInt(dateString.split('/')[2], 10)
    };
    return new Date(dateData.year, dateData.month, dateData.date);
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
export { getWeekDays, getWeekDayLabels, getDisplayingDays, isSameMonth, isToday, isSameDate, parseStringToDate, parseStringToTime };
