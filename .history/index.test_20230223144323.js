const functions = require('./index');

//fizzbuzz function
test('fizzbuzz function output changes on every 3, 5, 15 number', () => {
	expect(functions.fizzbuzz(3)).toStrictEqual([ 1, 2, 'fizz' ]);
	expect(functions.fizzbuzz(5)).toStrictEqual([ 1, 2, 'fizz', 4, 'buzz' ]);
	expect(functions.fizzbuzz(15)).toStrictEqual([
		1,
		2,
		'fizz',
		4,
		'buzz',
		'fizz',
		7,
		8,
		'fizz',
		'buzz',
		11,
		'fizz',
		13,
		14,
		'fizzbuzz'
	]);
});

//calculator functions
test('Sum adds 1 + 2', () => {
	expect(functions.sum(1, 2)).toStrictEqual(3);
});

test('Sub subtracts 5 - 3', () => {
	expect(functions.sub(5, 3)).toStrictEqual(2);
});

test('Multi  multiplies 3 * 2', () => {
	expect(functions.multi(3, 2)).toStrictEqual(6);
});

test('Divi divides 8 / 4', () => {
    expect(functions.divi(8, 4)).toStrictEqual(2);
  });

  test('Square multiplies 4 by iteself', () => {
    expect(functions.square(6)).toStrictEqual(16);
  });