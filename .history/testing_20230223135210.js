let function = require('./index')

test('Every 3rd number changes to "Fizz"', () => {
    expect(function.fizzbuzz(3)).toStrictEqual('Fizz');
});