import { findNeighborPositions } from './helpers';

describe('Given findNeighborPositions function', () => {
  describe('When the array is 3 x 3', () => {
    let array;
    beforeAll(() => {
      array = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ];
    });
    describe('but there are not parameters for the function', () => {
      test('It should return and empty array', () => {
        expect(findNeighborPositions()).toEqual([]);
      });
    });
    describe('And the coordinates are 1,1', () => {
      test('returned valid neighbors should be an array of 8 items', () => {
        // arrange
        const coordinates = [1, 1];
        // act
        const result = findNeighborPositions(...coordinates, array);
        // assert
        expect(result.length).toBe(8);
      });
    });
  });
});
