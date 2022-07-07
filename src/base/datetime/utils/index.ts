import { svg } from "lit";
import { en, zh, ja } from "../resource/locale";
import {
  MAX_MINUTES,
  MAX_HOURS12,
  MAX_HOURS24,
  TIME_SUFFIX,
} from "../resource/constant";

export type WeekDate = {
  attr: string;
  text: string;
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
  timeStep: number,
  min: string,
  max: string
) => {
  const timeOptions = [];
  const newTimeStep = Math.round(timeStep);
  const maxMinutes = convertTimeValueToMinutes(max);
  const minMinutes = convertTimeValueToMinutes(min);

  if (newTimeStep > 0) {
    const limitLoop = Math.floor((maxMinutes - minMinutes) / newTimeStep) + 1;
    for (let i = 0; i < limitLoop; i++) {
      const timeOption = generateTimeOption(
        minMinutes + i * newTimeStep,
        isHour12
      );
      timeOptions.push(timeOption);
    }
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
    value: hours + ":" + minutes + (isHour12 ? " " + ampm : ""),
  };
  return timeOption;
};

export const convertTimeValueToMinutes = (value: string) => {
  const times = value.split(":");
  let hours = parseInt(times[0], 10);
  let minutes = parseInt(times[1], 10);
  if (isNaN(hours) || isNaN(minutes)) {
    return 0;
  }

  if (hours < 0) {
    hours = 0;
  } else if (hours >= MAX_HOURS24) {
    hours = MAX_HOURS24 - 1;
  }

  if (minutes < 0) {
    minutes = 0;
  } else if (minutes >= MAX_MINUTES) {
    minutes = MAX_MINUTES - 1;
  }

  return hours * MAX_MINUTES + minutes;
};

export const timeCompare = (startTime: string, endTime: string) => {
  const startTimeMinutes = convertTimeValueToMinutes(startTime);
  const endTimeMinutes = convertTimeValueToMinutes(endTime);
  if (startTimeMinutes > endTimeMinutes) return 1;
  if (startTimeMinutes === endTimeMinutes) return 0;
  return -1;
};

export const formatTimeValueToInputValue = (value: string, hour12: boolean) => {
  const times = value.split(":");
  const hours = parseInt(times[0], 10);
  const minutes = parseInt(times[1], 10);
  const newHours = hours % MAX_HOURS24;
  if (isNaN(newHours) || isNaN(minutes)) {
    return {
      hours: "",
      minutes: "",
      suffix: "",
    };
  }
  if (hour12) {
    return convertTime24To12(hours, minutes);
  }
  return {
    hours: padStart(newHours),
    minutes: padStart(minutes),
    suffix: "",
  };
};

export const formatTimeValueToInputValueForMobile = (
  value: string,
  hour12: boolean
) => {
  const timeResult = { hours: "", minutes: "", suffix: "" };
  const times = value.split(":");
  const hours = parseInt(times[0], 10);
  const minutes = parseInt(times[1], 10);
  const newHours = hours % MAX_HOURS24;
  if (!isNaN(newHours)) {
    timeResult.hours = padStart(
      hour12 ? convertHour24To12(newHours) : newHours
    );
    timeResult.suffix = hour12 ? convertSuffix24To12(newHours) : "";
  }
  if (!isNaN(minutes)) {
    timeResult.minutes = padStart(minutes);
  }
  return timeResult;
};

export const convertHour24To12 = (hours: number) => {
  let newHours = hours % MAX_HOURS12;
  newHours = newHours === 0 ? MAX_HOURS12 : newHours;
  return newHours;
};
export const convertSuffix24To12 = (hours: number) => {
  return hours >= MAX_HOURS12 ? TIME_SUFFIX.PM : TIME_SUFFIX.AM;
};
export const convertTime24To12 = (hours: number, minutes: number) => {
  const suffix = convertSuffix24To12(hours);
  const newHours = convertHour24To12(hours);
  return {
    hours: padStart(newHours),
    minutes: padStart(minutes),
    suffix: suffix,
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

  const text = `${tmpDate.getFullYear()}-${
    tmpDate.getMonth() + 1
  }-${tmpDate.getDate()}`;
  const attr = `${year}-${month}-${day}`;
  return { text, attr };
};

export const formatValueToInputValue = (language: string, date?: string) => {
  if (date && !isStringValueEmpty(date)) {
    const dates = date.split("-");
    if (dates.length !== 3) {
      return date;
    }
    const year = dates[0];
    const month = dates[1];
    const day = dates[2];
    return language === "en"
      ? `${month}/${day}/${year}`
      : `${year}-${month}-${day}`;
  }
  return date;
};

export const formatInputValueToValue = (language: string, date: string) => {
  if (isStringValueEmpty(date)) {
    return date;
  }
  const isEnLanguage = language === "en";
  const splitStr = isEnLanguage ? "/" : "-";
  const dates = date.split(splitStr);
  const year = isEnLanguage ? dates[2] : dates[0];
  const month = isEnLanguage ? dates[0] : dates[1];
  const day = isEnLanguage ? dates[1] : dates[2];
  return `${year}-${month}-${day}`;
};

export const isStringValueEmpty = (value: any) => {
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

export const isValidDateFormat = (language: string, dateString?: string) => {
  if (dateString && !isStringValueEmpty(dateString)) {
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
  }
  return false;
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
    end: endDayOfEndWeek,
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

export const generateMinuteOptions = (timeStep: number = 1) => {
  const minuteOptions = [];
  for (let i = 0; i <= 59; i += timeStep) {
    minuteOptions.push({ value: padStart(i), label: padStart(i) });
  }
  return minuteOptions;
};

export const generateHourOptions = (hour12 = false) => {
  if (hour12) {
    const hourOptions = generateHour12Options("AM").concat(
      generateHour12Options("PM")
    );
    return hourOptions;
  }
  return generateHour24Options();
};

export const generateHour12Options = (ampm: string) => {
  const hour12Options = [];
  hour12Options.push({ value: `${ampm} 12`, label: `${ampm} 12` });
  for (let i = 1; i <= 11; i++) {
    hour12Options.push({
      value: `${ampm} ${padStart(i)}`,
      label: `${ampm} ${padStart(i)}`,
    });
  }
  return hour12Options;
};

export const generateHour24Options = () => {
  const hour12Options = [];
  hour12Options.push({ value: "00", label: `00` });
  for (let i = 1; i <= 23; i++) {
    hour12Options.push({ value: padStart(i), label: `${padStart(i)}` });
  }
  return hour12Options;
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

export function setListBoxPosition(_this: HTMLElement, position: string) {
  const ulEl = _this.querySelector(
    ".kuc-base-datetime-listbox__listbox"
  ) as HTMLUListElement;
  const distance = calculateDistanceInput(_this);
  if (!_this.parentElement || !ulEl || !distance) return;

  const { inputToBottom, inputToTop } = distance;
  const listBoxMonthHeight = 360;
  const listBoxYearHeight = 300;
  const listBoxHeight =
    _this.tagName === "KUC-BASE-DATETIME-HEADER-MONTH"
      ? listBoxMonthHeight
      : listBoxYearHeight;
  const paddingListBox = 18;
  const parentHeight = _this.parentElement.getBoundingClientRect().height;

  ulEl.style.maxHeight = listBoxHeight + "px";
  _this.parentElement.style.position = "relative";
  if (inputToBottom >= listBoxHeight) {
    ulEl.style.height = listBoxHeight + "px";
    if (position === "bottom") {
      ulEl.style.top = parentHeight + "px";
      return;
    }
    ulEl.style.bottom = parentHeight + "px";
    return;
  }

  if (position === "bottom") {
    ulEl.style.top = parentHeight + "px";
    ulEl.style.height = inputToBottom - paddingListBox + "px";
    return;
  }
  ulEl.style.height = inputToTop - paddingListBox + "px";
  ulEl.style.top = "auto";
  ulEl.style.bottom = _this.parentElement.getBoundingClientRect().height + "px";
}

export const calculateDistanceInput = (_this: HTMLElement) => {
  if (!_this.parentElement)
    return {
      inputToBottom: 0,
      inputToTop: 0,
      inputToRight: 0,
      inputToLeft: 0,
    };
  const inputDateWidth = 100;
  const inputToBottom =
    window.innerHeight - _this.parentElement.getBoundingClientRect().bottom;
  const inputToTop = _this.parentElement.getBoundingClientRect().top;
  const inputToRight =
    window.innerWidth - _this.parentElement.getBoundingClientRect().left;
  const inputToLeft =
    _this.parentElement.getBoundingClientRect().left + inputDateWidth;

  return {
    inputToBottom,
    inputToTop,
    inputToRight,
    inputToLeft,
  };
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
