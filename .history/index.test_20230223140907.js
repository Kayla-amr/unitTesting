const functions = require('./index')

test('Every 3rd number changes to "fizz"', () => {
    expect(functions.fizzbuzz([1,23)).toBe("fizz");
    expect(functions.fizzbuzz(3)).toBe('string');
});