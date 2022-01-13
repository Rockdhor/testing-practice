const calculator = require('../code/calculator.js');

test('Test 1', () => {
    expect(calculator.add(4,8)).toBe(12);
});

test('Test 2', () => {
    expect(calculator.subtract(4,8)).toBe(-4);
});

test('Test 3', () => {
    expect(calculator.multiply(4,8)).toBe(32);
});

test('Test 4', () => {
    expect(calculator.divide(4,8)).toBe(.5);
});