import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { padStart } from "./datetime/utils";

export const visiblePropConverter = {
  fromAttribute(value: string | null) {
    return value === null;
  },
  toAttribute(value: boolean) {
    return value ? null : "";
  },
};

export const languagePropConverter = {
  fromAttribute: (value: string | null) => {
    const langs = ["en", "ja", "zh", "zh-TW", "es"];
    return !value || langs.indexOf(value) === -1;
  },
  toAttribute: (value: string) => {
    const langs = ["en", "ja", "zh", "zh-TW", "es"];
    if (langs.indexOf(value) !== -1) return value;
    if (langs.indexOf(document.documentElement.lang) !== -1) {
      return document.documentElement.lang;
    }
    return "en";
  },
};

export const unsafeHTMLConverter = (element: string | HTMLElement) => {
  return element instanceof HTMLElement ? element : unsafeHTML(element);
};

export const dateValueConverter = (date: string | undefined) => {
  if (date === undefined || date === "") return "";

  let dateParts: string[] = [];
  if (date.indexOf("-") > 0) dateParts = date.split("-");
  if (dateParts.length < 2) return `${date}-01-01`;

  if (dateParts.length === 2)
    return `${padStart(dateParts[0], 4)}-${padStart(dateParts[1])}-01`;
  if (dateParts.length > 2)
    return `${padStart(dateParts[0], 4)}-${padStart(dateParts[1])}-${padStart(
      dateParts[2],
    )}`;
  return "";
};

export const timeValueConverter = (time: string) => {
  const maxLength = 5;
  if (time.length === maxLength || time === "") return time;
  const indexColon = time.indexOf(":");
  const hours = time.substr(0, indexColon);
  const minutes = time.substr(indexColon + 1, maxLength);

  return `${padStart(hours)}:${padStart(minutes)}`;
};
