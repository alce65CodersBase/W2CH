import { aMap } from './array.functions.ho';

describe('Given aMap function', () => {
  describe('When we invoque it with a value', () => {
    test('Then it should return a new array applying the callback en each item', () => {
      const aData = [10, 20];
      const callback = (item) => 2 * item;
      // act
      const r = aMap(aData, callback);
      // assert
      expect(aData).toEqual([10, 20]);
      expect(r).toEqual([20, 40]);
    });
  });
});
