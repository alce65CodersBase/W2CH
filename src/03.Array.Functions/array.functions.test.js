import { aLength } from './array.functions.js';
describe('Given aLength function', () => {
  describe('When we invoque it with an empty array', () => {
    // beforeEach(() => {})
    test('Then it return should be 0', () => {
      // arrange
      const aData = [];
      // act
      const r = aLength(aData);
      // assert
      expect(r).toBe(0);
    });
  });

  describe('When we invoque it with a n items array', () => {
    test('Then it return should be n', () => {
      // arrange
      const aData = [1, 2, 3];
      // act
      const r = aLength(aData);
      // assert
      expect(r).toBe(3);
    });
  });
});
