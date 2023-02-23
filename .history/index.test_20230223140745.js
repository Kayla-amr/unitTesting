const functions = require('./index')

test('Every 3rd number changes to "fizz"', () => {
    expect(functions.fizzbuzz(3)).toBe("fizz");
    expect(typeof tests.fizzbuzz(3)).toBe('string');
});