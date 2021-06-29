export const visiblePropConverter = {
  fromAttribute(value: string | null) {
    return value === null;
  },
  toAttribute(value: boolean) {
    return value ? null : "";
  }
};
