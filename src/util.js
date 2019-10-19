export const convertObjectKeysToLowerCase = obj => Object.fromEntries(
  Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
);