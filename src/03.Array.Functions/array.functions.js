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
  const length = aLength(array);
  // eslint-disable-next-line no-param-reassign
  array[length] = value;
  return aLength(array);
};

export const aPop = (array = []) => {
  const lastPosition = aLength(array) - 1;
  if (lastPosition < 0) return undefined;
  const lastValue = array[lastPosition];
  // eslint-disable-next-line no-param-reassign
  array.length = lastPosition;
  return lastValue;
};

// elimina la primera
export const aShift = (array = []) => {
  if (!aLength(array)) return undefined;
  const firstValue = array[0];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < aLength(array); i++) {
    // eslint-disable-next-line no-param-reassign
    array[i - 1] = array[i];
  }
  // eslint-disable-next-line no-param-reassign
  array.length = aLength(array) - 1;
  return firstValue;
};

// añade al principio
export const aUnshift = (array, value) => {
  // eslint-disable-next-line no-plusplus
  for (let i = aLength(array); i > 0; i--) {
    // eslint-disable-next-line no-param-reassign
    array[i] = array[i - 1];
  }
  // eslint-disable-next-line no-param-reassign
  array[0] = value;
  return aLength(array);
};

// Continuar con
// export const aFoo = (array = []) => {
// };
