const functions = require('./index');

test('a multiple of 3 gives you fizz', () => {
    expect(fizzbuzz(3)).toStrictEqual([1, 2, 'fizz']);
});

test('adds 1 + 2 to equal 3', () => {
    expect(functions.sum(1, 2)).toBe(3);
  });