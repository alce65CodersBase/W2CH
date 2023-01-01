/* eslint-disable import/extensions */
import { strictEquals, strictEqualsBasic } from './strictEquals.js';

import {
  strictEquals9,
  strictEquals10a,
  strictEquals10b,
} from './strictEquals.discarded.js';

const data = [
  // NaN === NaN return false, although Object.is(NaN,NaN) return true
  { a: NaN, b: NaN, label: 'NaN v. NaN', result: false },
  { a: NaN, b: 1, label: 'NaN v. 1', result: false },
  // 0 === -0 return true, although Object.is(0,-0) return false
  { a: 0, b: -0, label: '0 v. -0', result: true },
  { a: -0, b: 0, label: '-0 v. 0', result: true },
  { a: -0, b: 1, label: '-0 v. 1', result: false },
  { a: 1, b: -0, label: '1 v. -0', result: false },
  // Standard cases with 0
  { a: 0, b: 0, label: '0 v. 0', result: true },
  { a: 0, b: 1, label: '0 v. 1', result: false },
  // Standard cases
  { a: 1, b: '1', label: '1 v. "1"', result: false },
  { a: 1, b: 1, label: '1 v. 1', result: true },
  { a: true, b: false, label: 'true v. false', result: false },
  { a: false, b: false, label: 'false v. false', result: true },
  { a: 'water', b: 'oil', label: 'water v. oil', result: false },
  { a: '', b: '', label: '"" v ""', result: true },
  {
    a: undefined,
    b: undefined,
    label: 'undefined v. undefined',
    result: true,
  },
  { a: null, b: null, label: 'null v. null', result: true },
  { a: {}, b: {}, label: '{} v. {}', result: false },
];
describe('Given strictEquals function', () => {
  data.forEach((item) => {
    test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
      const r = strictEquals(item.a, item.b);
      expect(r).toBe(item.result);
    });
  });
});

// Por si se añade otra prueba
// describe('Given strictEqualsMini function', () => {
//     data.forEach((item) => {
//         test(`When arguments are ${item.label}
//             Then result should be ${item.result}`, () => {
//             const r = strictEqualsMini(item.a, item.b);
//             expect(r).toBe(item.result);
//         });
//     });
// });

describe('Given strictEqualsBasic function', () => {
  data.forEach((item) => {
    test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
      const r = strictEqualsBasic(item.a, item.b);
      expect(r).toBe(item.result);
    });
  });
});

describe('Given strictEquals9 function', () => {
  data.forEach((item) => {
    test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
      const r = strictEquals9(item.a, item.b);
      expect(r).toBe(item.result);
    });
  });
});

describe('Given strictEquals10a function', () => {
  data.forEach((item) => {
    test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
      const r = strictEquals10a(item.a, item.b);
      expect(r).toBe(item.result);
    });
  });
});

describe('Given strictEquals10b function', () => {
  data.forEach((item) => {
    test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
      const r = strictEquals10b(item.a, item.b);
      expect(r).toBe(item.result);
    });
  });
});
