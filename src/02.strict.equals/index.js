import { strictEquals, strictEqualsBasic } from './strictEquals.js';
import { testCases } from './test.cases.js';

const renderCompare = (callback = () => {}) => {
  console.log('-------------------------------------------------------');
  console.log(callback.name.toUpperCase());
  console.log('-------------------------------------------------------');
  testCases.forEach((item) => {
    const r = callback(item.a, item.b);
    console.log(`When arguments are ${item.label}`);
    console.log(`Then result should be ${item.result}`);
    console.log(`But the result is ${r}`);
    console.log('-------------------------------------------------------');
  });
};

renderCompare(strictEquals);
renderCompare(strictEqualsBasic);
