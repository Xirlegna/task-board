export const omit = <T>(obj: T, ...props: Array<keyof T>) => {
  const result = { ...obj };

  props.forEach((prop) => {
    delete result[prop];
  });

  return result;
};
