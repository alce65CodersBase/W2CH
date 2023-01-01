import {
  aLength,
  aPush,
  aPop,
  aShift,
  aUnshift,
  aJoin,
  aIndexOf,
  aIncludes,
} from './array.functions';

describe('Given aLength function', () => {
  const testCases = [
    {
      case: 'an empty array',
      value: [],
      length: 0,
    },
    {
      case: 'an array of 3 numbers',
      value: [1, 3, 3],
      length: 3,
    },
    {
      case: 'an array of 3 numbers starting with 0',
      value: [0, 3, 3],
      length: 3,
    },
    {
      case: 'an array of 3 items starting with null',
      value: [null, 3, 3],
      length: 3,
    },
    {
      case: 'an array of 3 items starting with undefined',
      value: [undefined, 3, 3],
      length: 3,
    },
    {
      case: 'an array of 3 objects',
      value: [{}, {}, {}],
      length: 3,
    },
  ];

  describe.each(testCases)(
    'When we invoque it with $case',
    ({ value, length }) => {
      test('Then it return should be 0', () => {
        // arrange
        const aData = value;
        // act
        const r = aLength(aData);
        // assert
        expect(r).toBe(length);
      });
    }
  );
});

describe('Given aPush function', () => {
  describe('When we invoque it with a value', () => {
    test('Then last original array item should be the value', () => {
      // arrange
      const aData = [10, 20];
      const added = 23;
      // act
      const r = aPush(aData, added);
      // assert
      expect(r).toBe(aData.length);
      expect(aData).toEqual([10, 20, added]);
    });
    test('Then it should be the same if array is empty', () => {
      // arrange
      const aData = [];
      const added = 23;
      // act
      const r = aPush(aData, added);
      // assert
      expect(r).toBe(aData.length);
      expect(aData).toEqual([added]);
    });
  });
});

describe('Given aPop function', () => {
  describe('When we invoque it', () => {
    test('Then last original array item should be removed and returned', () => {
      // arrange
      const aData = [10, 20];
      // act
      const r = aPop(aData);
      // assert
      expect(r).toBe(20);
      expect(aData).toEqual([10]);
      expect(aData.length).toBe(1);
    });
    test('Then it should be the same if array is empty', () => {
      const aData = [];
      // act
      const r = aPop(aData);
      // assert
      expect(r).toBeUndefined();
      expect(aData).toEqual([]);
      expect(aData.length).toBe(0);
    });
  });
});

// elimina la primera
describe('Given aShift function', () => {
  describe('When we invoque it', () => {
    test('Then first original array item should be removed and returned', () => {
      // arrange
      const aData = [10, 20];
      // act
      const r = aShift(aData);
      // assert
      expect(r).toBe(10);
      expect(aData).toEqual([20]);
      expect(aData.length).toBe(1);
    });
    test('Then it should be the same if array is empty', () => {
      const aData = [];
      // act
      const r = aShift(aData);
      // assert
      expect(r).toBeUndefined();
      expect(aData).toEqual([]);
      expect(aData.length).toBe(0);
    });
  });
});

// añade al principio
describe('Given aUnshift function', () => {
  describe('When we invoque it with a value', () => {
    test('Then value should be added as the first array item and array length returned', () => {
      // arrange
      const aData = [10, 20];
      const value = 30;
      // act
      const r = aUnshift(aData, value);
      // assert
      expect(r).toBe(3);
      expect(aData).toEqual([30, 10, 20]);
    });
    test('Then it should be the same if array is empty', () => {
      const aData = [];
      // act
      const value = 30;
      // act
      const r = aUnshift(aData, value);
      // assert
      expect(r).toBe(1);
      expect(aData).toEqual([30]);
    });
  });
});

describe('Given aJoin function', () => {
  describe('When we invoque it with a separator value', () => {
    test('Then a string with the items join by te separator should returned', () => {
      const aData = [10, 20];
      const separator = '; ';
      // act
      const r = aJoin(aData, separator);
      // assert
      expect(r).toBe('10; 20');
    });
    test('Then it should be the same if array is empty', () => {
      const aData = [];
      const separator = '; ';
      // act
      const r = aJoin(aData, separator);
      // assert
      expect(r).toBe('');
    });
  });

  describe('When we invoque it without a separator value', () => {
    test('Then a string with the items join by "," should returned', () => {
      const aData = [10, 20];
      // act
      const r = aJoin(aData);
      // assert
      expect(r).toBe('10,20');
    });
  });
});

describe('Given aIndexOf function', () => {
  describe('When we invoque it with a valid value', () => {
    test('Then it should return de index of the value', () => {
      const aData = [10, 20, 30];
      const element = 20;
      // act
      const r = aIndexOf(aData, element);
      // assert
      expect(r).toBe(1);
    });
  });
  describe('When we invoque it with a invalid value', () => {
    test('Then it should return -1', () => {
      const aData = [10, 20, 30];
      const element = 60;
      // act
      const r = aIndexOf(aData, element);
      // assert
      expect(r).toBe(-1);
    });
    test('Then it should be the same if array is empty', () => {
      const aData = [];
      const element = 60;
      // act
      const r = aIndexOf(aData, element);
      // assert
      expect(r).toBe(-1);
    });
  });
});

describe('Given aIncludes function', () => {
  describe('When we invoque it with a valid value', () => {
    test('Then it should return true', () => {
      const aData = [10, 20, 30];
      const element = 20;
      // act
      const r = aIncludes(aData, element);
      // assert
      expect(r).toBe(true);
    });
  });
  describe('When we invoque it with a invalid value', () => {
    test('Then it should return -1', () => {
      const aData = [10, 20, 30];
      const element = 60;
      // act
      const r = aIncludes(aData, element);
      // assert
      expect(r).toBe(false);
    });
    test('Then it should be the same if array is empty', () => {
      const aData = [];
      const element = 60;
      // act
      const r = aIncludes(aData, element);
      // assert
      expect(r).toBe(false);
    });
  });
});
