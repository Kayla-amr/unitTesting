let functions = require('./index')

test('Every 3rd number changes to "Fizz"', () => {
    expect(functions.fizzbuzz(3)).toStrictEqual('Fizz');
});