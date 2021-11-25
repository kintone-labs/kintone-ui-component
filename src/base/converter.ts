import { padStart } from "./datetime/utils";

export const visiblePropConverter = {
  fromAttribute(value: string | null) {
    return value === null;
  },
  toAttribute(value: boolean) {
    return value ? null : "";
  }
};

export const timeValueConverter = (time: string) => {
  const maxLength = 5;
  if (time.length === maxLength || time === "") return time;
  const indexColon = time.indexOf(":");
  const hours = time.substr(0, indexColon);
  const minutes = time.substr(indexColon + 1, maxLength);

  return `${padStart(hours)}:${padStart(minutes)}`;
};
