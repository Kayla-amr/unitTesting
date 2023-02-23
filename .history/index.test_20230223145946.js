const functions = require('./index');

//fizzbuzz function
test('fizzbuzz function output changes on every 3, 5, 15 number', () => {
	expect(functions.fizzbuzz(3)).toStrictEqual([ 1, 2, 'fizz' ]);
	expect(functions.fizzbuzz(5)).toStrictEqual([ 1, 2, 'fizz', 4, 'buzz' ]);
	expect(functions.fizzbuzz(15)).toStrictEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'	]);
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
	expect(functions.square(4)).toStrictEqual(16);
});

test('Expo gives exponential value for 8', () => {
	expect(functions.expo(8)).toStrictEqual(2980.9579870417283);
});



//String functions
test('Reversing Kayla to alyaK', () => {
	expect(functions.reverse("Kayla")).toStrictEqual('alyaK');
});

test('Capitalizing Kayla to KAYLA', () => {
	expect(functions.uppercase("Kayla")).toStrictEqual('KAYLA');
});

test('Removing vowels from Kayla making it kyl', () => {
	expect(functions.remVowel("Kayla")).toStrictEqual('Kyl');
});

//Object Validation
test('Validating Key inside object', () => {
	expect(functions.objVal({name:"Kayla", Age: 23, Sex:"f"})).toStrictEqual('Kyl');
});