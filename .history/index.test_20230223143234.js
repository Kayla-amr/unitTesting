const functions = require('./index');

test('test fizzbuzz text', () => {
    expect(tests.fizzbuzz(3)).toBe("fizz");
    expect(typeof tests.fizzbuzz(1)).toBe('string');
    expect(typeof tests.fizzbuzz(3)).toBe('string');
    expect(typeof tests.fizzbuzz(5)).toBe('string');
    expect(typeof tests.fizzbuzz(15)).toBe('string');
})

// test('adds 1 + 2 to equal 3', () => {
//     expect(functions.sum(1, 2)).toBe(3);
//   });