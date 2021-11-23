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
  const regex = /^(\d{1,4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g;
  if (value === "" || value === undefined || regex.test(value)) return true;
  return false;
}
