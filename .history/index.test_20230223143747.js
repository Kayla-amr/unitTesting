const functions = require('./index');

test('fizzbuzz output on every 3, 5, 15 number', () => {
	expect(functions.fizzbuzz(3)).toStrictEqual([ 1, 2, 'fizz' ]);
	expect(functions.fizzbuzz(5)).toStrictEqual([ 1, 2, 'fizz', 4, 'buzz' ]);
	expect(functions.fizzbuzz(15)).toStrictEqual([1, 2,
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

// test('adds 1 + 2 to equal 3', () => {
//     expect(functions.sum(1, 2)).toBe(3);
//   });
