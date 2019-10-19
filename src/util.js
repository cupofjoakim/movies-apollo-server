export const convertObjectKeysToLowerCase = obj => Object.fromEntries(
  Object.entries(obj).map(([k, v]) => {
    let value = v;
    if (Array.isArray(value)) {
      value = value.map(currentValue =>
        typeof currentValue === 'object' ? convertObjectKeysToLowerCase(currentValue) : currentValue
      );
    } else if (typeof value === 'object') {
      value = convertObjectKeysToLowerCase(value);
    }
    return [k.toLowerCase(), value];
  })
);