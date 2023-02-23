const functions = require('./index');

test('adds 1 + 2 to equal 3', () => {
    expect(functions.fizzbuzz(1, 2)).toBe(3);
  });

test('adds 1 + 2 to equal 3', () => {
    expect(functions.sum(1, 2)).toBe(3);
  });