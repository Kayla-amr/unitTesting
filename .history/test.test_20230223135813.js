const functions = require('./index').default

test('Every 3rd number changes to "Fizz"', () => {
    expect(functions.fizzbuzz(3)).toStrictEqual('Fizz');
});