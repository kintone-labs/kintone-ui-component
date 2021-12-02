type Item = { value?: string; label?: string };

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

export function validateSelectedIndexes(selectedIndex: number[]) {
  if (!Array.isArray(selectedIndex)) {
    throw new Error("'selectedIndex' property is not array");
  }
}

export function validateSelectedIndex(selectedIndex: number) {
  if (typeof selectedIndex !== "number") {
    throw new Error("'selectedIndex' property is not number");
  }
}
