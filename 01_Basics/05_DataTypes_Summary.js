// There are two type of DataTypes
// 1, Primitive  
// 2, Non-Primitive

// Let's Learn about Primitive Data Types
// These types of DataTypes are call by value type of DataTypes
// Types of Primitive data types :- String,Number,Boolean,Null,Undefined,Symbol,BigInt

// Let's Learn about Non-Primitive Data Types
// These types of DataTypes are Call by Reference type of DataTypes
// Types of Non-Primitive Data Types :- Array,Object,Function

// Note JavaScrit is Dynamic Language

const score = 100
const scoreValue = 100.34
const isLoggedIn = false
const outsideTemp = null 
let userEmail // the value of user email is undefined
const id = Symbol('123')
const anotherId = Symbol('123')
const BigNumber = 342342332434n // This is BigInt
console.log(id==anotherId) // -> false

// Non-Premitive DataType
// Array, Object, Functions

// That's how We can Define an Array
const heros = ["Shaktiman","Naagraj","Doga"]

// That's how We can Define an Object
let object = {
    name: "UmairSaifi",
    age:21,
    phoneNumber: "8076****39"
}

// That's how We can Define a function
const myFunction = function(){
    console.log("Hello world!")
}

// Now we can Determine the DataType by using the name of the DataType
console.log(typeof score) // -> number
console.log(typeof scoreValue) // -> number
console.log(typeof isLoggedIn) // -> boolean
console.log(typeof outsideTemp) // -> object
console.log(typeof userEmail) // -> undefined 
console.log(typeof id) // -> symbol
console.log(typeof anotherId) // -> symbol
console.log(typeof BigNumber) // -> bigint
console.log(typeof heros) // -> object
console.log(typeof object) // -> object
console.log(typeof myFunction) // -> function


// ************************************************   MEMORY  ***********************************************************
// There are two types of memory
// 1, Stack Memory. (Premitive type) -> call by value means it gives copy when we want to fetch it
// 2, Heap Memory. (Non-Premitive type) -> call by reference means it gives the reference when we want to fetch it and if we makes change in file then it will reflect to the original 

let myYoutubeName = "Code == Solution"
console.log(myYoutubeName); // -> "Code == Solution"
let anotherName = myYoutubeName
console.log(anotherName); // -> "Code == Solution"
anotherName = "Code is Solution"
console.log(myYoutubeName); // -> "Code == Solution"
console.log(anotherName); // -> "Code is Solution"

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "UserTwo@google.com"
console.log(userOne.email) // -> UserTwo@google.com
console.log(userTwo.email) // -> UserTwo@google.com

/*
In JavaScript, when you assign an object to a variable, you're not creating a new copy of that object. Instead, you're creating a reference to the same object in memory. This means that both userOne and userTwo are pointing to the same object.
*/
