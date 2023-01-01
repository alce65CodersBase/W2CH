export const aMap = (array, callback) => {
  const aResult = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    aResult[i] = callback(item);
  }
  return aResult;
};

export const aFilter = (array, callback) => {
  let aResult = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (callback(item)) {
      aResult = [...aResult, item];
    }
  }
  return aResult;
};

// Continuar con
export const aFind = (array, callback) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (callback(item)) {
      return item;
    }
  }
  return undefined;
};

export const aFindIndex = (array, callback) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (callback(item)) {
      return i;
    }
  }
  return -1;
};

export const aReduce = (array, callback) => {
  let initial = array[0];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < array.length; i++) {
    const item = array[i];
    initial = callback(initial, item);
  }
  return initial;
};

// Alguno cumple la condición
export const aSome = (array, callback) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element)) return true;
  }
  return false;
};

// Todos cumplen la condición
export const aEvery = (array, callback) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!callback(element)) return false;
  }
  return true;
};
