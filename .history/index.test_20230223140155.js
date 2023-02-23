const fizzbuzz = require('./index')

test('Every 3rd number changes to "fizz"', () => {
    expect(fizzbuzz(3)).toStrictEqual('fizz');
});