import {
  aMap,
  aFilter,
  aFind,
  aFindIndex,
  aReduce,
  aSome,
  aEvery,
} from './array.functions.ho';

describe('Given aMap function', () => {
  describe('When we invoque it with a callback', () => {
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

describe('Given aFilter function', () => {
  describe('When we invoque it with a callback', () => {
    test('Then it should return a new array including items for which the callback was true', () => {
      const aData = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const callback = (item) => item.id % 2 !== 0;
      // act
      const r = aFilter(aData, callback);
      // assert
      expect(aData).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
      expect(r).toEqual([{ id: 1 }, { id: 3 }]);
    });
  });
});

describe('Given aFind function', () => {
  describe('When we invoque it with a callback', () => {
    test('Then it should return the first item for which the callback was true', () => {
      const aData = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const callback = (item) => item.id === 2;
      // act
      const r = aFind(aData, callback);
      // assert
      expect(aData).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
      expect(r).toEqual({ id: 2 });
    });
  });
  test('Then if callback was not true for any item it should return undefined', () => {
    const aData = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const callback = (item) => item.id === 5;
    // act
    const r = aFind(aData, callback);
    // assert
    expect(aData).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    expect(r).toBeUndefined();
  });
});

describe('Given aFindIndex function', () => {
  describe('When we invoque it with a callback', () => {
    test('Then it should return the index of the first item for which the callback was true', () => {
      const aData = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const callback = (item) => item.id === 2;
      // act
      const r = aFindIndex(aData, callback);
      // assert
      expect(aData).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
      expect(r).toBe(1);
    });
    test('Then if callback was not true for any item it should return undefined', () => {
      const aData = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const callback = (item) => item.id === 5;
      // act
      const r = aFindIndex(aData, callback);
      // assert
      expect(aData).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
      expect(r).toBe(-1);
    });
  });
});

describe('Given aReduce function', () => {
  describe('When we invoque it with a callback (a,b) => a+b', () => {
    test('Then it should return de reduction', () => {
      const aData = [1, 2, 3, 4, 5];
      const callback = (prev, item) => prev + item;
      // act
      const r = aReduce(aData, callback);
      // assert
      expect(aData).toEqual([1, 2, 3, 4, 5]);
      expect(r).toBe(1 + 2 + 3 + 4 + 5);
    });
    test('Tthe same with other callback', () => {
      const aData = [1, 2, 3, 4, 5];
      const callback = (prev, item) => prev * item;
      // act
      const r = aReduce(aData, callback);
      // assert
      expect(aData).toEqual([1, 2, 3, 4, 5]);
      expect(r).toBe(1 * 2 * 3 * 4 * 5);
    });
  });
});

describe('Given aSome function', () => {
  describe('When we invoque it with a callback: (item) => item === 2 ', () => {
    test('Then it should return true if callback is true for any item', () => {
      const aData = [1, 2, 3, 4, 5];
      const callback = (item) => item === 2;
      // act
      const r = aSome(aData, callback);
      // assert
      expect(aData).toEqual([1, 2, 3, 4, 5]);
      expect(r).toBe(true);
    });
    test('Then it should return false if callback is not true for neither item', () => {
      const aData = [1, 2, 3, 4, 5];
      const callback = (item) => item === 7;
      // act
      const r = aSome(aData, callback);
      // assert
      expect(aData).toEqual([1, 2, 3, 4, 5]);
      expect(r).toBe(false);
    });
  });
});

describe('Given aEvery function', () => {
  describe('When we invoque it with a callback: (item) => item === 2 ', () => {
    test('Then it should return true if callback is true for every (all) items', () => {
      const aData = [1, 3, 5];
      const callback = (item) => item % 2 === 1;
      // act
      const r = aEvery(aData, callback);
      // assert
      expect(aData).toEqual([1, 3, 5]);
      expect(r).toBe(true);
    });
    test('Then it should return false if callback is not true for any item', () => {
      const aData = [1, 3, 4, 5];
      const callback = (item) => item % 2 === 1;
      // act
      const r = aEvery(aData, callback);
      // assert
      expect(aData).toEqual([1, 3, 4, 5]);
      expect(r).toBe(false);
    });
  });
});
