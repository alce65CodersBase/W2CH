export const aMap = (array, callback) => {
  const aResult = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    aResult[i] = callback(item);
  }
  return aResult;
};

// Continuar con
// - filter,
// - find,
// - findIndex,
// - reduce,
// - some,
// - every,
// export const aFoo = (array = []) => {
// };
