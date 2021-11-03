import { svg } from "lit";
import { en, zh, ja } from "../resource/locale";

export type WeekDate = {
  text: string;
  attr: string;
};

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
  const month = padStart(tmpDate.getMonth() + 1);
  const day = padStart(tmpDate.getDate());

  const text = `${tmpDate.getFullYear()}-${tmpDate.getMonth() +
    1}-${tmpDate.getDate()}`;
  const attr = `${year}-${month}-${day}`;
  return { text, attr };
};

export const formatDateByLocale = (date: string, language: string = "ja") => {
  if (isStringValueEmpty(date)) {
    return date;
  }
  let dates = date.split("-");
  let year, month, day;
  if (dates.length !== 3) {
    dates = date.split("/");
    year = dates[2];
    month = dates[0];
    day = dates[1];
  } else {
    year = dates[0];
    month = dates[1];
    day = dates[2];
  }
  return language === "en"
    ? `${month}/${day}/${year}`
    : `${year}-${month}-${day}`;
};

const isStringValueEmpty = (value: any) => {
  return (
    value === null ||
    value === undefined ||
    value.length === 0 ||
    !/[^(^\s*)|(\s*$)]/.test(value)
  );
};

export const getTodayStringByLocale = (language: string = "ja") => {
  const today = new Date();
  const year = today.getFullYear();
  const month = padStart(today.getMonth() + 1);
  const day = padStart(today.getDate());
  return language === "ja" || language === "zh"
    ? year + "-" + month + "-" + day
    : month + "/" + day + "/" + year;
};

export const isValidDateFormat = (dateString: string, language: string) => {
  if (isStringValueEmpty(dateString)) return false;
  const isEnLanguage = language === "en";
  const splitStr = isEnLanguage ? "/" : "-";
  const dateObj = new Date(dateString);
  const notExistedDate =
    dateObj.getDate() !==
    parseInt(dateString.split(splitStr)[isEnLanguage ? 1 : 2], 10);
  if (notExistedDate) return false;

  const enRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/;
  if (language === "en") {
    return dateString.match(enRegex) !== null;
  }
  const jaRegex = /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g;
  return dateString.match(jaRegex) !== null;
};

export const padStart = (
  filterString: string | number,
  maxLength: number = 2
) => {
  const s = `0000000000${filterString}`;
  return s.substr(s.length - maxLength);
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
  endDayOfEndWeek.setDate(endDayOfEndWeek.getDate() + (42 - rangeLength));

  return {
    start: startDayOfFirstWeek,
    end: endDayOfEndWeek
  };
};

export const getLocale = (language: string) => {
  switch (language) {
    case "en":
      return en;
    case "zh":
      return zh;
    case "ja":
      return ja;
    default:
      return en;
  }
};

export const getToggleIconSvgTemplate = () => {
  return svg`
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5V1.2764L6 7.5L12 1.2764V0.5L6 6.5L0 0.5Z" fill="#888888"/>
    </svg>
    `;
};

export const getLeftArrowIconSvgTemplate = () => {
  return svg`
    <svg
      class="kuc-base-datetime-calendar-header__group__button-icon"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.06077 7L8.53044 1.53033L7.46978 0.469666L0.939453 7L7.46978 13.5303L8.53044 12.4697L3.06077 7Z"
        fill="#888888"
      />
    </svg>`;
};

export const getRightArrowIconSvgTemplate = () => {
  return svg`
    <svg
      class="kuc-base-datetime-calendar-header__group__button-icon"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.93923 7L0.469557 1.53033L1.53022 0.469666L8.06055 7L1.53022 13.5303L0.469557 12.4697L5.93923 7Z"
        fill="#888888"
      />
    </svg>`;
};
