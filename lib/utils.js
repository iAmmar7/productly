// / Lodash like utilities

export const isUndefined = (val) => {
  if (!val || typeof val === 'undefined') return true;
  return false;
};

export const isNull = (val) => {
  if (val === null) return true;
  return false;
};

export const isNil = (val) => {
  if (isUndefined(val) || isNull(val)) return true;
  return false;
};

export const isString = (str) => {
  if (typeof str === 'string') return true;
  return false;
};

export const isObject = (val) => {
  if (isNil(val)) return false;
  if (typeof val === 'object' && !Array.isArray(val)) return true;
  return false;
};

export const isArray = (val) => {
  if (Array.isArray(val)) return true;
  return false;
};

export const isEmpty = (val) => {
  if ((isArray(val) || isString(val)) && val.length > 0) return false;
  return true;
};

export const slice = (arr = [], start = 0, end = arr.length) => {
  if (isEmpty(arr)) return arr;
  const newArr = [...arr];
  return newArr.slice(start, end);
};

export const capitalize = (str) => {
  if (typeof str !== 'string') return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
