import { svg } from "lit";
import { en, zh, ja } from "../resource/locale";

export type WeekDate = {
  text: string;
  attr: string;
};

export const maxMinutes = 60;
export const maxHour24 = 24;
export const maxHour12 = 12;

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

export const padStart = (
  filterString: string | number,
  maxLength: number = 2
) => {
  const s = `0000000000${filterString}`;
  return s.substr(s.length - maxLength);
};

export const generateTimeOptions = (
  isHour12: boolean,
  timeStep: number = 30
) => {
  const timeOptions = [];
  let hours, minutes, ampm;
  const limitLoop = (maxMinutes / timeStep) * maxHour24;
  for (let i = 0; i <= timeStep * limitLoop - 1; i += timeStep) {
    hours = Math.floor(i / maxMinutes);
    minutes = i % maxMinutes;
    ampm =
      hours % maxHour24 < maxHour12
        ? en.TIME_SELECT_SUFFIX.am
        : en.TIME_SELECT_SUFFIX.pm;
    hours = isHour12 ? hours % maxHour12 : hours % maxHour24;
    if (hours === 0 && isHour12) hours = maxHour12;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    const timeItem = {
      label: hours + ":" + minutes + (isHour12 ? " " + ampm : ""),
      value: `${hours} ":" ${minutes}`
    };
    timeOptions.push(timeItem);
  }
  return timeOptions;
};

export const formatTimeValue = (hours: string, minutes: string) => {
  const time = new Date();
  time.setHours(parseInt(hours, 10));
  time.setMinutes(parseInt(minutes, 10));
  return time;
};

export const convertTimeValueToHour12 = (time: Date, hour12: boolean) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  let newHours = padStart(hours % maxHour24);
  let suffix: string = "";
  let newTime: string = newHours + ":" + padStart(minutes);
  if (hour12) {
    newHours = padStart(hours % maxHour12);
    suffix =
      hours >= maxHour12 ? en.TIME_SELECT_SUFFIX.pm : en.TIME_SELECT_SUFFIX.am;
    newTime = newHours + ":" + padStart(minutes) + " " + suffix;
  }
  return newTime;
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
