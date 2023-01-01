export const aLength = (array = []) => {
  const keys = Object.keys(array);
  let i = 0;
  while (keys[i]) {
    // eslint-disable-next-line no-plusplus
    i++;
  }
  return i;
};
