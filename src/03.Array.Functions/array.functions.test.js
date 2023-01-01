import { aLength } from './array.functions.js';
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
