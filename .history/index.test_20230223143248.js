const functions = require('./index');

test('test fizzbuzz text', () => {
    expect(functions.fizzbuzz(3)).toBe("fizz");
    expect(typeof functions.fizzbuzz(3)).toBe('string');
})

// test('adds 1 + 2 to equal 3', () => {
//     expect(functions.sum(1, 2)).toBe(3);
//   });