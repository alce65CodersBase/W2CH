/* eslint-disable arrow-body-style */
export const findNeighborPositions = (i = 0, j = 0, array = []) => {
  // posiciones al rededor de (i,j)
  // array[i-1][j-1],array[i-1][j],array[i-1][j+1],
  // array[i][j-1],array[i][j],array[i][j+1],
  // array[i+1][j-1],array[i+1][j],array[i+1][j+1]
  if (!array.length) return [];
  return [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ];
};
