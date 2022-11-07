const multiplesum = require('./multiplesum');

test('test case 1 testing multiplesum method', () => {
  expect(multiplesum(12,4,30)).toBe(112);
});

test('test case 2 testing multiplesum method', () => {
    expect(multiplesum(12,4,30)).toBe(113);
  });