type Item = { label?: string; value?: string };

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

export function validateDateValue(value: string | undefined) {
  const regex = /(^(\d{1,4})-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$)|(^(\d{1,4})$)|(^(\d{1,4})-(0?[1-9]|1[0-2])$)/g;
  if (value === "" || value === undefined || regex.test(value)) return true;

  return false;
}

export function validateTimeValue(value: string) {
  const regexHour24 = /^(2[0-3]|[01]?[0-9]):([0-9]|[0-5][0-9])$/;
  if (value === "" || regexHour24.test(value)) return true;

  return false;
}

export function isValidDate(date: string) {
  const [year, month, day] = date.split("-");
  const dateObj = new Date(date);
  const newYear = dateObj.getFullYear();
  const newMonth = dateObj.getMonth();
  const newDay = dateObj.getDate();
  if (
    newYear === Number(year) &&
    newMonth === Number(month) - 1 &&
    newDay === Number(day)
  )
    return true;

  return false;
}

export function validateItems(value: Item[]) {
  if (!Array.isArray(value)) {
    throw new Error("'items' property is not array");
  }
}

export function validateValueArray(value: string[]) {
  if (!Array.isArray(value)) {
    throw new Error("'value' property is not array");
  }
}

export function validateValueString(value: string) {
  if (typeof value !== "string") {
    throw new Error("'value' property is not string");
  }
}

export function validateSelectedIndexArray(selectedIndex: number[]) {
  if (!Array.isArray(selectedIndex)) {
    throw new Error("'selectedIndex' property is not array");
  }
}

export function validateSelectedIndexNumber(selectedIndex: number) {
  if (typeof selectedIndex !== "number") {
    throw new Error("'selectedIndex' property is not number");
  }
}

export function validateDateTimeValue(date: string, time: string) {
  const regexDate = /(^(\d{4})-(0[0-9]|1[0-2])-(0[1-9]|([12][0-9]|3[01]))$)|(^(\d{4})$)|(^(\d{4})-(0[0-9]|1[0-2])$)/g;
  const regexTime = /(^[01][0-9]|2[0-3])$|(^([01][0-9]|2[0-3]):([0-5][0-9]))$|(^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9])$/;
  if (!regexDate.test(date) || !regexTime.test(time)) return false;

  return true;
}
