import { FORMAT_IS_NOT_VALID } from "../base/datetime/resource/constant";
import { padStart } from "./datetime/utils";

export function validateProps<Type>(props: Type) {
  if (!props || typeof props !== "object") return {};

  const validProps = { ...props };

  for (const _propName in validProps) {
    if (
      Object.prototype.hasOwnProperty.call(validProps, _propName) &&
      validProps[_propName] === undefined
    ) {
      delete validProps[_propName];
    }
  }

  return validProps;
}

export const formatDateValueProp = (date: string | undefined) => {
  if (date === undefined) return "";

  let dateParts: string[] = [];
  let dateFormat: string = "";
  if (date.indexOf("-") > 0) dateParts = date.split("-");
  if (dateParts.length < 2) dateFormat = `${date}-01-01`;
  if (dateParts.length === 2)
    dateFormat = `${dateParts[0]}-${padStart(dateParts[1])}-01`;
  if (dateParts.length > 2)
    dateFormat = `${dateParts[0]}-${padStart(dateParts[1])}-${padStart(
      dateParts[2]
    )}`;

  const regex = /^(\d{1,4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g;
  if (regex.test(dateFormat)) return dateFormat;
  throw new Error(FORMAT_IS_NOT_VALID);
};
