const DEFAULT_VALUE = 'DEFAULT_VALUE';

export const storeDefaultVal = defaultVal =>
  localStorage.setItem(DEFAULT_VALUE, JSON.stringify(defaultVal));

export const getDefaultVal = () => {
  const defaultVal = JSON.parse(localStorage.getItem(DEFAULT_VALUE));
  return defaultVal == null ? [] : defaultVal;
};
