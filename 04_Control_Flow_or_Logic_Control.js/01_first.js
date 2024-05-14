// Control flow
// The control flow is the order in which the computer executes statements in a script.

// Code is run in order from the first line in the file to the last line,
// unless the computer runs across the (extremely frequent) structures that change the control flow,
// such as conditionals and loops.

// for control flow the basic method is to use 'if' and 'else' statements.
// there are some operator's by which the control flow is controlled.
// <, >, <=, >=, ==, !=, ===, !==

// HERE is the small example's of a control flow

// example 1
// let temperature = 42
// if ( temperature < 50 ){
//     console.log("Temperature is less than 50.")
// } else {
//     console.log("Temperature is greater than 50");
// }

// example 2
// const score = 200
// if(score >100){
//     // here we use "let" to declare the variable
//     // if we call this variable outside its scope then the compiler throws the error message
//     let power = 'fly'

//     // there is a twist
//     // if we declare the variable using "var"
//     // and call outside its scope then the compiler donot throws the error message
//     // because "var" keyword is accessible outside the scope means it is globally accessible
//     // var power = 'fly'
//     console.log(`User power is ${power}`)
// }
// console.log(`User power is ${power}`) // it will give you error messages because you call power outside its scope.

// example 3
// let balance = 1100
// if (balance<500){
//     console.log("less than 500")
// } else if (balance < 750){
//     console.log("less than 750")
// } else if (balance < 1000){
//     console.log("less than 1000")
// } else {
//     console.log("greater than 1000")
// }

// Let's take a look by using mutiple statements
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allow to buy the course.")
}
if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in")
}