import { format } from './Locale';
const getWeekDays = (date: Date) => {
  const startDate = new Date(date);
  startDate.setDate(startDate.getDate() - startDate.getDay());
  const result = [startDate];
  for (let index = 1; index < 7; index++) {
    const tempDate = new Date(result[index - 1]);
    tempDate.setDate(tempDate.getDate() + 1);
    result.push(tempDate);
  }
  return result;
};

const getWeekDayLabels = (locale: any) => {
  const date = new Date();
  const eachDayOfWeek = getWeekDays(date);
  const labels = eachDayOfWeek.map(day => {
    return format(day, 'E', { locale: locale });
  });

  return labels;
};

const getDisplayingDays = (date: Date) => {
  const startDayOfMonth = new Date(date);
  startDayOfMonth.setDate(1);
  const endDayOfMonth = new Date(date);
  endDayOfMonth.setMonth(endDayOfMonth.getMonth() + 1, 0);

  const startDayOfFirstWeek = new Date(startDayOfMonth);
  startDayOfFirstWeek.setDate(startDayOfFirstWeek.getDate() - startDayOfFirstWeek.getDay());
  const endDayOfEndWeek = new Date(endDayOfMonth);
  endDayOfEndWeek.setDate(endDayOfEndWeek.getDate() + (6 - endDayOfEndWeek.getDay()));

  const days = [];
  for (let d = new Date(startDayOfFirstWeek); d <= endDayOfEndWeek; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d));
  }

  return days;
};

const isSameMonth = (day1: Date, day2: Date) => day1.getMonth() === day2.getMonth();
const isToday = (day: Date) => day.toDateString() === (new Date()).toDateString();
const isSameDate = (day1: Date, day2: Date) => day1.toDateString() === day2.toDateString();

const parseStringToDate = (dateString: string, dateFormat?: string, delimiter: string = '/') => {
  if (isNaN(dateString.split(delimiter)[1] as any) || isNaN(dateString.split(delimiter)[0] as any) || isNaN(dateString.split(delimiter)[2] as any)) {
    return null;
  }
  var formatLowerCase = dateFormat ? dateFormat.toLowerCase() : 'mm/dd/yyyy';
  var formatItems = formatLowerCase.split(delimiter);
  var dateItems = dateString.split(delimiter);
  var monthIndex = formatItems.indexOf("mm");
  var dayIndex = formatItems.indexOf("dd");
  var yearIndex = formatItems.indexOf("yyyy");
  var day = parseInt(dateItems[dayIndex]);
  var month = parseInt(dateItems[monthIndex]);
  month -= 1;
  var year = parseInt(dateItems[yearIndex]);
  var formatedDate = new Date(year, month, day);
  return formatedDate;
};

const parseStringToTime = (timeString: string) => {
  const timeData = {
    hour: parseInt(timeString.split(':')[0], 10),
    minute: parseInt(timeString.split(':')[1], 10)
  };
  if (timeData.hour < 0 || timeData.hour > 24 || timeData.minute < 0 || timeData.minute > 60) {
    return null;
  }
  const result = new Date();
  result.setHours(timeData.hour);
  result.setMinutes(timeData.minute);
  return result;
};

export {
  getWeekDays,
  getWeekDayLabels,
  getDisplayingDays,
  isSameMonth,
  isToday,
  isSameDate,
  parseStringToDate,
  parseStringToTime
};