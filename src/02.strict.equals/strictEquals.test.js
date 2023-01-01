import { strictEquals, strictEqualsBasic } from './strictEquals.js';
import {
  strictEquals9,
  strictEquals10a,
  strictEquals10b,
} from './strictEquals.discarded.js';
import { testCases } from './test.cases.js';

describe('Given strictEquals function', () => {
  testCases.forEach((item) => {
    test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
      const r = strictEquals(item.a, item.b);
      expect(r).toBe(item.result);
    });
  });
});

// Por si se añade otra prueba
// describe('Given strictEqualsMini function', () => {
//     dataCases.forEach((item) => {
//         test(`When arguments are ${item.label}
//             Then result should be ${item.result}`, () => {
//             const r = strictEqualsMini(item.a, item.b);
//             expect(r).toBe(item.result);
//         });
//     });
// });

describe('Given strictEqualsBasic function', () => {
  testCases.forEach((item) => {
    test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
      const r = strictEqualsBasic(item.a, item.b);
      expect(r).toBe(item.result);
    });
  });
});

describe('Given strictEquals9 function', () => {
  testCases.forEach((item) => {
    test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
      const r = strictEquals9(item.a, item.b);
      expect(r).toBe(item.result);
    });
  });
});

describe('Given strictEquals10a function', () => {
  testCases.forEach((item) => {
    test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
      const r = strictEquals10a(item.a, item.b);
      expect(r).toBe(item.result);
    });
  });
});

describe('Given strictEquals10b function', () => {
  testCases.forEach((item) => {
    test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
      const r = strictEquals10b(item.a, item.b);
      expect(r).toBe(item.result);
    });
  });
});
