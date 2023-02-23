let funtion = require('./index')

test('Every 3rd number changes to "Fizz"', () => {
    expect(fizzbuzz(3)).toStrictEqual([1, 2, 'fizz']);
});