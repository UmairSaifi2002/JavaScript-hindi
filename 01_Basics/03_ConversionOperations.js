// ****************************** Conversion ********************************

let score = false
console.log(typeof(score))
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)

// 1 => true
// 0 => false
// "" => false
// "umair" => true

let someNumber = 123

let StringNumber = String(someNumber)
console.log(StringNumber)
console.log(typeof StringNumber)


// ****************************** Operations ********************************

let value = 3
let negValue = -value 
console.log(negValue)

let str1 = "Hello"
let str2 = " Umair."

let str3 = str1 + str2
console.log(str3)

console.log("1"+2)
console.log("2"+1)
console.log("1"+2+2)
console.log(1+2+"2")

console.log(+true) // it is possible
console.log(+"")