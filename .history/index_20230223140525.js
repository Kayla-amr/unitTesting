
/* Fizzbuzz
  - This is a classic coding exercise. Write a function that accepts a number and that returns an array with the length of the given number. The array values should  as follows: 
  - For multiples of 3 print "fizz"
  - For multiples of 5 print "buzz"
  - For multiples of 3 and 5 print "fizzbuzz"*/

  let fizzbuzz = (num) =>{ //function named fizzbuzz with the paramater of num
    let arr = []; //variable created to store in array 
    let i = 1; //variable to let the array start with 1
    while (i <= num) { //while loop iterated from 1 to the number you're wanting it to end at
      if (i % 15 === 0 ){ //if loop is at a 15 mark
        arr.push("fizzbuzz"); //prints 
      } else if (i % 3 === 0) { //loop makes it to the 3 mark
        arr.push("fizz"); //prints
      } else if (i % 5 === 0) { //loop makes it to the 5 mark
        arr.push("buzz"); //prints
      } else {
        arr.push(i); //prints the number instead of alternatate modification
      }
      i++; //goes through the array
    }
    return arr; //returns the array with adjustments
  }
  
  
  fizzbuzz(15)





/* Calculator
  - Write 4 functions for the basic calculator operations. (+. -, *, /)
  - Write 2 more functions for 2 other calculator operations. (X!, X<sup>2</sup>, e<sup>x</sup>, ect.)*/
let sum = (a, b) => a + b //function named sum with parameters a & b that get added using a+b

let sub = (a, b) => a - b //function named sub with parameters a & b that get subtracted using a-b

let multi = (a, b) => a * b //function named multi with parameters a & b that get multiplied using a*b

let divi = (a, b) => a / b //function named divi with parameters a & b that get divided using a/b

let square = (a) => a * a //function named square with parameter a in which is used to get the square by multiplying the parameter with itself

let expo = (a) => Math.exp(a) //function named expo with parameter a, the Math.exp() helps get the exponential number 

sum(8,3)
sub(8,3)
multi(8,3)
divi(8,2)
square(8)
expo(2)

 /* String functions
  - A function that reverses a string. (eg. "Hello" becomes "olleH")
  - A function that uppercases a string.
  - A function that removes all vowels.*/

  let reverse = (str) =>{ //function named reverse with parameter str 
    return str.split('').reverse().join('') //Before returning string it first splits the word into an arry then reversing the array and lastly joining it back making it one word
  }

  let uppercase = (str) =>{ //function named uppercase with parameter str 
    return str.toUpperCase() //returns an uppercase version of the work inserted
  }

  let remVowel = (str) =>{ //function named remVowel with parameter str 
    return str.replace(/[aeiou]/gi, "") //before returning the str it goes through to remove vowels by replaceing them with an empty str
  }

  reverse('cannon')
  uppercase('cannon')
  remVowel('kayla')


 /*Object validator
  - Write a function that accepts 2 parameters. One is an object, the second 
  is a string. The function should validate that the string is a key of the object.*/

let objVal = (obj, str) =>{ //function names objVal with parameters obj and str
    return obj.hasOwnProperty(str) //returns the obj and checks to see if a str (key) is in the obj
}

objVal(dog = {name: 'husky'}, 'pizza')

/* Numbers
  - A function that takes an array of numbers, and adds up all the numbers in the 
  array and outputs the total. ( [1,2,3] would output: 6) */

  let sumArr = (arr) =>{ // function names sumArr with parameter arr
    return arr.reduce((sum, num) => sum + num, 0) //this returns the array but first reduces it by creating another set of parameter which are sum(which adds the number)
  }                                               // and num (which is the numbers inside the arrary ) and adds it with 0 

  sumArr([2,3,4,5,6])


module.exports = {
  fizzbuzz, 
  sum, 
  sub, 
  multi, 
  divi, square, expo, reverse, uppercase, remVowel, objVal, sumArr};


 