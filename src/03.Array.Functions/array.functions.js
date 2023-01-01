export const aLength = (array = []) => {
  const keys = Object.keys(array);
  let i = 0;
  while (keys[i]) {
    i++;
  }
  return i;
};
