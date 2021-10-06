export const getDisplayingDates = (year: number, month: number) => {
  const dateRanges = getDateRanges(year, month);
  let date = new Date(dateRanges.start);
  let weekDates = [];
  let count = 0;
  const displayingDates = [];
  while (date <= dateRanges.end) {
    weekDates.push(getDateObj(date));
    if (weekDates.length === 7) {
      displayingDates.push(weekDates);
      weekDates = [];
    }

    date.setDate(date.getDate() + 1);
    date = new Date(date);
    count++;
  }

  return displayingDates;
};

const getDateObj = (date: Date) => {
  const tmpDate = new Date(date);
  const year = tmpDate.getFullYear();
  const month = String(tmpDate.getMonth() + 1).padStart(2, "0");
  const day = String(tmpDate.getDate()).padStart(2, "0");

  const text = `${tmpDate.getFullYear()}-${tmpDate.getMonth() +
    1}-${tmpDate.getDate()}`;
  const attr = `${year}-${month}-${day}`;
  return { text, attr };
};

const getDateRanges = (year: number, month: number) => {
  const startDayOfMonth = new Date(year, month);
  startDayOfMonth.setDate(1);

  const startDayOfFirstWeek = new Date(startDayOfMonth);
  startDayOfFirstWeek.setDate(
    startDayOfFirstWeek.getDate() - startDayOfFirstWeek.getDay()
  );

  const endDayOfMonth = new Date(year, month);
  endDayOfMonth.setMonth(endDayOfMonth.getMonth() + 1, 0);

  const endDayOfEndWeek = new Date(endDayOfMonth);
  endDayOfEndWeek.setDate(
    endDayOfEndWeek.getDate() + (6 - endDayOfEndWeek.getDay())
  );

  const rangeLength =
    (endDayOfEndWeek.getTime() - startDayOfFirstWeek.getTime()) /
    (1000 * 60 * 60 * 24);

  if (rangeLength < 42) {
    endDayOfEndWeek.setDate(endDayOfEndWeek.getDate() + (42 - rangeLength));
  }

  return {
    start: startDayOfFirstWeek,
    end: endDayOfEndWeek
  };
};
