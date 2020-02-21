import {format, en, getSeperator} from './Locale';

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
    return format(day, 'E', {locale: locale});
  });

  return labels;
};

const getMonthLabels = (locale: any) => {
  const monthNames = locale.monthNames;
  const labels: any = [];
  monthNames.forEach((month: any) => {
    const label = {
      label: month,
      value: month
    };
    labels.push(label);
  });
  return labels;
};

const getYearLabels = (value: any, locale: any) => {
  let currentYear: any = value.replace('年', '');
  currentYear = parseInt(value, 10);
  const years: any = [];
  let prefix: any = '';
  if (locale !== en) {
    prefix = '年';
  }
  for (let i = (currentYear - 100); i <= (currentYear + 100); i++) {
    const year = {
      label: i + prefix,
      value: i + prefix
    };
    years.push(year);
  }
  return years;
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
  let d = new Date(startDayOfFirstWeek);
  while (d <= endDayOfEndWeek) {
    days.push(new Date(d));
    d.setDate(d.getDate() + 1);
    d = new Date(d);
  }
  return days;
};

const isSameMonth = (day1: Date, day2: Date) => day1.getMonth() === day2.getMonth();
const isToday = (day: Date) => day.toDateString() === (new Date()).toDateString();
const isSameDate = (day1: Date, day2: Date) => day1.toDateString() === day2.toDateString();

const parseStringToDate = (dateString: string, dateFormat?: string) => {
  try {
    const formatLowerCase = dateFormat ? dateFormat.toLowerCase() : 'mm/dd/yyyy';
    const delimiter = getSeperator(formatLowerCase);
    const dateItems = dateString.split(delimiter);
    const formatItems = formatLowerCase.split(delimiter);
    const monthIndex = formatItems.indexOf('mm');
    const dayIndex = formatItems.indexOf('d') !== -1 ? formatItems.indexOf('d') :
      formatItems.indexOf('dd');
    const yearIndex = formatItems.indexOf('yyyy');
    const year = parseInt(dateItems[yearIndex], 10);
    const day = parseInt(dateItems[dayIndex], 10);
    let month = parseInt(dateItems[monthIndex], 10);
    month -= 1;
    const date = new Date(year, month);
    if (day > 0) {
      date.setDate(day);
    }
    if (date.toDateString() === 'Invalid Date' || month < 0 || year < 1) {
      return null;
    }
    return date;
  } catch (error) {
    console.error(error);
    return null;
  }
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
  getYearLabels,
  getMonthLabels,
  getWeekDays,
  getWeekDayLabels,
  getDisplayingDays,
  isSameMonth,
  isToday,
  isSameDate,
  parseStringToDate,
  parseStringToTime
};