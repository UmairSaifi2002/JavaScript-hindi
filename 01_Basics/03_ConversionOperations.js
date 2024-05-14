// ****************************** Conversion ********************************

let score = false
console.log(typeof(score)) // -> boolean
console.log(typeof score) // -> boolean

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // -> number
console.log(valueInNumber) // -> 0

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanLoggedIn); // -> boolean
console.log(booleanLoggedIn) // -> true

// 1 => true
// 0 => false
// "" => false
// "umair" => true

let someNumber = 123

let StringNumber = String(someNumber)
console.log(StringNumber) // -> 123
console.log(typeof StringNumber) // -> string


// ****************************** Operations ********************************

let value = 3
let negValue = -value 
console.log(negValue) // -> -3

let str1 = "Hello"
let str2 = " Umair."

let str3 = str1 + str2
console.log(str3) // -> Hello Umair.

console.log("1"+2) // -> 12
console.log(typeof ("1"+2)); // -> string
console.log("2"+1) // -> 21
console.log(typeof ("2"+1)); // -> string
console.log("1"+2+2) // -> 122
console.log(typeof ("1"+2+2)); // -> string
console.log(1+2+"2") // -> 32
console.log(typeof (1+2+"2")); // -> string

console.log(+true) // it is possible -> 1
console.log(+"")// -> 0