const functions = require('./index');

test('fizzbuzz output on every 3, 5, 15 number', () => {
    expect(functions.fizzbuzz(3)).toStrictEqual([1, 2, "fizz"]);
    expect(functions.fizzbuzz(5)).toStrictEqual([1, 2, "fizz"]);
    expect(functions.fizzbuzz(3)).toStrictEqual([1, 2, "fizz"]);
})

// test('adds 1 + 2 to equal 3', () => {
//     expect(functions.sum(1, 2)).toBe(3);
//   });