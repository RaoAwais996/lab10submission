

const Calculator = require('./Calculator.test')

test('test case 1 testing add method', () => {
  expect(Calculator.add(4, 4)).toBe(8);
});


test('test case 2 testing subtract method', () => {
  expect(Calculator.subtract(3, 2)).toBe(1);
});


test('test case 3 testing multiply method', () => {
    expect(Calculator.multiply(4, 4)).toBe(16);
  });


test('test case 4 testing divide method', () => {
    expect(Calculator.divide(6, 2)).toBe(3);
  });

