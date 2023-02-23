const functions = require('./index')

test('Every 3rd number changes to "fizz"', () => {
    expect(functions.fizzbuzzfizzbuzz(3)).toStrictEqual('fizz');
});