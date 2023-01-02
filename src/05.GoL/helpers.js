/* eslint-disable arrow-body-style */
export const findNeighborPositions = (i = 0, j = 0, array = []) => {
  // posiciones al rededor de (i,j)
  // array[i-1][j-1],array[i-1][j],array[i-1][j+1],
  // array[i][j-1],array[i][j],array[i][j+1],
  // array[i+1][j-1],array[i+1][j],array[i+1][j+1]
  if (!array.length) return [];
  const max = array.length - 1;
  const possiblePositions = [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ];

  return possiblePositions.filter(
    (item) => item[0] >= 0 && item[1] >= 0 && item[0] <= max && item[1] <= max
  );
};
