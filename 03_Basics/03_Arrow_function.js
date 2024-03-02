// JavaScript 'this' keyword always holds the reference to a single object, 
// which defines the current line of code’s execution context which means 
// 'this' keyword refers to the object that is currently executing the code.

// The value that 'this' store is the current execution context of the JavaScript program.

// Thus, when used inside a function 'this' value will change depending on how 
// that function is defined, how it is invoked, and the default execution context. 
// 'this' keyword will refer to different objects depending on how it is used. 

// NOTE: This is a keyword. You cannot change the value of this.


const user = {
    username : "Umair",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to the Website!`);
        console.log(this) // -> it will print the whole current context which is the current object 
    }
}
user.welcomeMessage() // -> Umair , Welcome to the Website!
user.username = "Harry"
user.welcomeMessage() // -> Harry , Welcome to the Website!

console.log(this) // -> it will print the whole current context which is {}

// function coffee(){
//     let username = "Capachino"
//     // console.log(this) // -> it will give you the all the information
//     console.log(this.username) // -> undefined because 'this' is only use in object
// }

// const coffee = function(){
//     let username = "Umair"
//     // console.log(this) // -> it will give you the all the information
//     console.log(this.username) // -> undefined because 'this' is only use in object
// }

// This is an Arrow function
const coffee = ()=>{
    let username = "Umair"
    // console.log(this) // -> {}
    console.log(this.username)
}

coffee()


// The method given below is with the {} which is used for explicit return
// here 'return' keyword is used to return the value
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// The method given below is without the {} which is used for implicit return
// Where there is no use of return keyword
const addTwo = (num1,num2) => (num1 + num2)
console.log(addTwo(1,2)) // -> 3

// if we want to return the object in an arrow function using implicit return take a look below
const showObject = () => ({username : "Umair"})
console.log(showObject()) // -> { username: 'Umair' }

