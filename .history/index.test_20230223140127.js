const fizzbuzz = require('./index')

test('Every 3rd number changes to "Fizz"', () => {
    expect(fizzbuzz(3)).toStrictEqual('fizz');
});