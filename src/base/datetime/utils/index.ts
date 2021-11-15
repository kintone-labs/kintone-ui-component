import { svg } from "lit";
import { en, zh, ja } from "../resource/locale";
import {
  MAX_MINUTES,
  MAX_HOURS12,
  MAX_HOURS24,
  TIME_SUFFIX
} from "../resource/constant";

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

export const generateTimeOptions = (
  isHour12: boolean,
  timeStep: number = 30
) => {
  const timeOptions = [];
  const limitLoop = (MAX_MINUTES / timeStep) * MAX_HOURS24;
  for (let i = 0; i <= timeStep * limitLoop - 1; i += timeStep) {
    const timeOption = generateTimeOption(i, isHour12);
    timeOptions.push(timeOption);
  }
  return timeOptions;
};

const generateTimeOption = (i: number, isHour12: boolean) => {
  let hours, minutes;
  hours = Math.floor(i / MAX_MINUTES);
  minutes = i % MAX_MINUTES;
  const ampm =
    hours % MAX_HOURS24 < MAX_HOURS12 ? TIME_SUFFIX.AM : TIME_SUFFIX.PM;
  hours = isHour12 ? hours % MAX_HOURS12 : hours % MAX_HOURS24;
  if (hours === 0 && isHour12) hours = MAX_HOURS12;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  const timeOption = {
    label: hours + ":" + minutes + (isHour12 ? " " + ampm : ""),
    value: hours + ":" + minutes + (isHour12 ? " " + ampm : "")
  };
  return timeOption;
};

export const formatTimeValueToInputValue = (value: string, hour12: boolean) => {
  const times = value.split(":");
  const hours = parseInt(times[0], 10);
  const minutes = times[1];
  const newHours = hours % MAX_HOURS24;
  if (hour12) {
    return convertTime24To12(hours, minutes);
  }
  return {
    hours: padStart(newHours),
    minutes: padStart(minutes),
    suffix: ""
  };
};

export const convertTime24To12 = (hours: number, minutes: string) => {
  const suffix = hours >= MAX_HOURS12 ? TIME_SUFFIX.PM : TIME_SUFFIX.AM;
  let newHours = hours % MAX_HOURS12;
  newHours = newHours === 0 ? MAX_HOURS12 : newHours;
  return {
    hours: padStart(newHours),
    minutes: padStart(minutes),
    suffix: suffix
  };
};

export const formatInputValueToTimeValue = (inputValue: string) => {
  const [time, ampm] = inputValue.split(" ");
  const [hours, minutes] = time.split(":");
  if (!ampm) return inputValue;
  const newHour = convertTime12To24(hours, ampm);
  return `${newHour}:${minutes}`;
};

export const convertTime12To24 = (hours: string, suffix: string) => {
  const currentHour = parseInt(hours, 10);
  if (suffix === TIME_SUFFIX.PM) {
    const newHours = currentHour === MAX_HOURS12 ? 12 : currentHour + 12;
    return padStart(newHours);
  }
  const newHours = currentHour === MAX_HOURS12 ? 0 : currentHour;
  return padStart(newHours);
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
