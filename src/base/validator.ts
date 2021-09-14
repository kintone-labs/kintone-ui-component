export function validateProps<Type>(props: Type) {
  if (!props || typeof props !== "object") return {};

  const validProps = { ...props };

  for (const _propName in validProps) {
    if (!Object.prototype.hasOwnProperty.call(validProps, _propName)) {
      continue;
    }

    if (validProps[_propName] === undefined) {
      delete validProps[_propName];
    }
  }

  return validProps;
}
