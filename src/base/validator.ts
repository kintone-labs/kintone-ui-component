import { convertTimeValueToMinutes } from "./datetime/utils";

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
  const regex =
    /(^(\d{1,4})-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$)|(^(\d{1,4})$)|(^(\d{1,4})-(0?[1-9]|1[0-2])$)/g;
  if (value === "" || value === undefined || regex.test(value)) return true;

  return false;
}

export function validateTimeValue(value: string) {
  const regexHour24 = /^(2[0-3]|[01]?[0-9]):([0-9]|[0-5][0-9])$/;
  if (value === "" || regexHour24.test(value)) return true;

  return false;
}

export function validateTimeStep(timeStep: number, max: string, min: string) {
  const _tempTimeStep = Math.round(timeStep);
  const maxMinutes = convertTimeValueToMinutes(max);
  const minMinutes = convertTimeValueToMinutes(min);

  return (
    !isNaN(_tempTimeStep) &&
    _tempTimeStep > 0 &&
    _tempTimeStep <= maxMinutes - minMinutes
  );
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

export function validateValueString(value: string) {
  if (typeof value !== "string") {
    return false;
  }
  return true;
}

export function validateDateTimeValue(date: string, time: string) {
  const regexDate =
    /(^(\d{4})-(0[0-9]|1[0-2])-(0[1-9]|([12][0-9]|3[01]))$)|(^(\d{4})$)|(^(\d{4})-(0[0-9]|1[0-2])$)/g;
  const regexTime =
    /(^([01][0-9]|2[0-3])$)|(^([01][0-9]|2[0-3]):([0-5][0-9]))$|(^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9])$/;
  if (!regexDate.test(date) || !regexTime.test(time)) return false;

  return true;
}

export function validateDuplicatedValues(values: Array<string | undefined>) {
  if (values.length < 2) return true;
  return !values.some((x) => values.indexOf(x) !== values.lastIndexOf(x));
}

export function validateRowsPerPage(numRows: number) {
  if (numRows < 0.5 || !validateNumberType(numRows)) {
    return false;
  }
  return true;
}

export const validateFieldRequiredInColumnTable = (columns: object[]) => {
  for (let i = 0; i < columns.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(columns[i], "field"))
      return false;
  }

  return true;
};

export const validateFieldUniqueInColumnTable = (columns: object[]) => {
  const valueArr = columns.map((item: any) => item.field);
  const isDuplicate = valueArr.some(function (item, idx) {
    return valueArr.indexOf(item) !== idx;
  });

  return isDuplicate;
};

export function validatePositiveInteger(data: string) {
  const reg = /^[1-9]\d*$/;
  return reg.test(data);
}

export function validateNumberType(value: number) {
  return typeof value === "number" && !Number.isNaN(value);
}

export function validateArrayType<T>(value: T[]) {
  return Array.isArray(value);
}
