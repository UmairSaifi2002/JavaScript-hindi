// ************************************************* NUMBER's *******************************************************
// Lets Talk about Numbers in javaScript
// Thats how we can declare a number in javaScript
// This is a traditional method
const score = 400
console.log(score) // -> 400
console.log(typeof score)// -> number

// We can explicitly declare a number in javaScript
const balance = new Number(100)
console.log(balance) // -> [Number: 100]
console.log(typeof balance)// -> object

const StringNum=balance.toString() // Our Number is Converted into a String.
console.log(StringNum) // -> '100'
console.log(StringNum.length) // -> 3
console.log(typeof StringNum) // -> string
console.log(balance.toFixed(2)) // -> 100.00 here we fixed the precision value upto 2

const hundered = 1000000
console.log(hundered.toLocaleString('en-IN')) // -> 10,00,000



// ************************************************* MATH's *******************************************************
// Lets Talk about the Maths function in javaScript

console.log(Math) // Object [Math] {}
console.log(Math.abs(-4)) // -> 4  It only convert negative to positive
console.log(Math.round(23.847)) //-> 24 it roundoff the given value
console.log(Math.ceil(23.847)) //-> 24 because it is greatteer than 23 and it always choose the ceiling value
console.log(Math.floor(23.847)) //-> 23 because it is always choose lesser value
console.log(Math.min(2,6,43,8,9))// -> 2
console.log(Math.max(2,6,43,8,9))// -> 43

console.log(Math.random()) // -> it gives the random number between 0 and 1
// we want a random number between interval a and b where a,b belongs to integer value
// so if min_val = 1 and max_val = 10
// formula for random number between min_val and max_val
// we can use both Math.floor() & Math.ceil() 
//-> console.log(min_val + Math.floor(Math.rsndom()*(max_val - min_val + 1)))
console.log(Math.ceil(1+(Math.random()*(10-1+1)))) // -> it return the value between 1 and 10