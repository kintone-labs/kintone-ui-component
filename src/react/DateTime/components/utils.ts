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

const getMonthLabels = (locale: any) => {
  let monthNames = locale.monthNames
  let labels: any = []
  monthNames.forEach((month: any) => {
    let label = {}
    label['label'] = month
    label['value'] = month
    labels.push(label)
  })
  return labels
}

const getYearLabels = (value: any, locale: any) => {
  let currentYear: any = value.replace('年', '')
  currentYear = parseInt(value)
  let years: any = []
  if (locale === 'en') {
    for (let i = (currentYear - 100); i <= (currentYear + 100); i++) {
      let year = {}
      year['label'] = i + ''
      year['value'] = i + ''
      years.push(year)
    }
  } else {
    for (let i = (currentYear - 100); i <= (currentYear + 100); i++) {
      let year = {}
      year['label'] = i + '年'
      year['value'] = i + '年'
      years.push(year)
    }
  }
  return years
}

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

const parseStringToDate = (dateString: string) => {
  if (isNaN(dateString.split('/')[1] as any) || isNaN(dateString.split('/')[0] as any) || isNaN(dateString.split('/')[2] as any)) {
    return null;
  }
  const dateData = {
    date: parseInt(dateString.split('/')[1], 10),
    month: parseInt(dateString.split('/')[0], 10) - 1,
    year: parseInt(dateString.split('/')[2], 10)
  };
  return new Date(dateData.year, dateData.month, dateData.date);
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