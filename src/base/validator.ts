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

export function validateTimeValue(value: string) {
  const regexHour24 = /^([0-9]|2[0-3]|[01]?[0-9]):([0-5][0-9])$/;
  if (regexHour24.test(value)) return value;
  throw new Error("Format is not valid.");
}
