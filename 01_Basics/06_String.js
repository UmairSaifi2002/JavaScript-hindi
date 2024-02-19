// That's how we can Declare String
const string = "Umair Saifi"
const repoCount = 2
// The new way to Declare String
const GameName = new String('Umair_Saifi')

// The OutDated Way to display different values using '+'
// console.log(String + repoCount + " Value");

// Now We always use String Interpolation instead of '+'
console.log(`Hello My Name is ${string} and my repo count is ${repoCount}`);

console.log(GameName[0]) // We can use indexing in String
console.log(GameName.__proto__)// We can access functiion using prototype

console.log(GameName.length)
console.log(GameName.toUpperCase())
console.log(GameName.charAt(2))
console.log(GameName.indexOf('a'))

const newString = GameName.substring(0,6)
console.log(newString)

const newString1 = GameName.slice(-9,3)
console.log(newString1)

const newString2 = "   NewGame is Contra               "
console.log(newString2)
console.log(newString2.trim()) // trim function removes the spaces
// trim() removes the starting and te last spces from the string

const url = "http://localhost/Chair%20Aur%20Code.com"
console.log(url.replace('%20',' '))
console.log(url.includes('Chai'))

const newString3 = "This is the String which converted into an array"
console.log(newString3.split(' '))

