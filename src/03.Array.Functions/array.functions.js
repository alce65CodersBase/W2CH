export const aLength = (array = []) => {
  const keys = Object.keys(array);
  let i = 0;
  while (keys[i]) {
    // eslint-disable-next-line no-plusplus
    i++;
  }
  return i;
};

export const aPush = (array, value) => {
  const l = aLength(array);
  // eslint-disable-next-line no-param-reassign
  array[l] = value;
  return aLength(array);
};

// Continuar con
// export const aFoo = (array = []) => {
// };
