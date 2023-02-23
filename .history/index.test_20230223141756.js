const functions = require('./index');

test('Every 3rd number changes to "fizz"', () => {
    expect(functions.fizzbuzz(3)).string('fizz');
  });

test('adds 1 + 2 to equal 3', () => {
    expect(functions.sum(1, 2)).toBe(3);
  });