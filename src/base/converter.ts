import { padStart } from "./datetime/utils";

export const visiblePropConverter = {
  fromAttribute(value: string | null) {
    return value === null;
  },
  toAttribute(value: boolean) {
    return value ? null : "";
  }
};

export const dateValueConverter = (date: string | undefined) => {
  if (date === undefined || date === "") return "";

  let dateParts: string[] = [];
  if (date.indexOf("-") > 0) dateParts = date.split("-");
  if (dateParts.length < 2) return `${date}-01-01`;
  if (dateParts.length === 2)
    return `${dateParts[0]}-${padStart(dateParts[1])}-01`;
  if (dateParts.length > 2)
    return `${dateParts[0]}-${padStart(dateParts[1])}-${padStart(
      dateParts[2]
    )}`;
  return "";
};
