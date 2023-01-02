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

export function countAliveNeighbors(i = 0, j = 0, array = []) {
  if (!array.length) return 0;
  const validPositions = findNeighborPositions(i, j, array);
  return validPositions
    .map((item) => array[item[0]][item[1]])
    .reduce((a, b) => a + b);
}

export function willBeAlive(i = 0, j = 0, array = []) {
  if (!array.length) return 0;
  const countValidCells = countAliveNeighbors(i, j, array);
  if (array[i][j] === 1) {
    // starting alive
    return countValidCells > 2 && countValidCells <= 3 ? 1 : 0;
  }
  // starting dead
  return countValidCells >= 3 ? 1 : 0;
}

export function liveCycle(array) {
  // localArray = array.map(item => [...item])
  const localArray = array.map((item, i) =>
    item.map((_item, j) => willBeAlive(i, j, array))
  );
  return localArray;
}
