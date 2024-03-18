// That's how we can Declare String
const string = "Umair Saifi"
const repoCount = 2
// The new way to Declare String.
const GameName = new String('Umair_Saifi')

// The OutDated Way to display different values using '+'
// console.log(String + repoCount + " Value");

// Now We always use String Interpolation instead of '+'
console.log(`Hello My Name is ${string} and my repo count is ${repoCount}`);
// -> Hello My Name is Umair Saifi and my repo count is 2

console.log(GameName[0]) // We can use indexing in String // -> U
console.log(GameName.__proto__)// We can access functiion using prototype // -> {}

console.log(GameName.length) // -> 11
console.log(GameName.toUpperCase()) // -> UMAIR_SAIFI
console.log(GameName.charAt(2)) // -> a
console.log(GameName.indexOf('a')) // -> 2

const newString = GameName.substring(0,6)
console.log(newString) // -> Umair_

const newString1 = GameName.slice(-9,3)
console.log(newString1) // -> a

const newString2 = "   NewGame is Contra               "
console.log(newString2) // ->    NewGame is Contra               
console.log(newString2.trim()) // trim function removes the spaces // -> NewGame is Contra
// trim() removes the starting and te last spces from the string

const url = "http://localhost/Chair%20Aur%20Code.com"
console.log(url.replace('%20',' ')) // -> https://localhost/chair Aur%20Code.com
// .replace() will replace only first occuring 
console.log(url.includes('Chai')) // -> true

const newString3 = "This is the String which converted into an array"
console.log(newString3.split(' ')) // -> ['This', 'is', 'the', 'String', 'which', 'converted', 'into', 'an', 'array']

