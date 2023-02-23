const functions = require('./index');

test('3rd number changes to ', () => {
    expect(functions.fizzbuzz(3)).toBe(3);
  });

test('adds 1 + 2 to equal 3', () => {
    expect(functions.sum(1, 2)).toBe(3);
  });