const functions = require('./index');

//fizzbuzz function
test('fizzbuzz function output changes on every 3, 5, 15 number', () => {
	expect(functions.fizzbuzz(3)).toEqual([ 1, 2, 'fizz' ]);
	expect(functions.fizzbuzz(5)).toEqual([ 1, 2, 'fizz', 4, 'buzz' ]);
	expect(functions.fizzbuzz(15)).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'	]);
});


//calculator functions
test('Sum adds 1 + 2', () => {
	expect(functions.sum(1, 2)).toEqual(3);
});

test('Sub subtracts 5 - 3', () => {
	expect(functions.sub(5, 3)).toEqual(2);
});

test('Multi  multiplies 3 * 2', () => {
	expect(functions.multi(3, 2)).toEqual(6);
});

test('Divi divides 8 / 4', () => {
	expect(functions.divi(8, 4)).toEqual(2);
});

test('Square multiplies 4 by iteself', () => {
	expect(functions.square(4)).toEqual(16);
});

test('Expo gives exponential value for 8', () => {
	expect(functions.expo(8)).toEqual(2980.9579870417283);
});



//String functions
test('Reversing Kayla to alyaK', () => {
	expect(functions.reverse("Kayla")).toEqual('alyaK');
});

test('Capitalizing Kayla to KAYLA', () => {
	expect(functions.uppercase("Kayla")).toEqual('KAYLA');
});

test('Removing vowels from Kayla making it kyl', () => {
	expect(functions.remVowel("Kayla")).toEqual('Kyl');
});

//Object Validation Function
test('Validating Key inside object', () => {
	expect(functions.objVal({name:"Kayla", age: 24, sex:"f"}, 'name')).toEqual(true);
});


//Number Function

test('Adding Array', () => {
	expect(functions.sumArr([2, 3, 4])).toEqual(9);
});