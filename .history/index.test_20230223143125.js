const functions = require('./index');

test('Every 3rd number gives you fizz', () => {
    expect(functions.fizzbuzz(3)).toBe('fizz');
    expect(typeof fucntions.fizzbuzz(3)).toBe('string');
});

// test('adds 1 + 2 to equal 3', () => {
//     expect(functions.sum(1, 2)).toBe(3);
//   });