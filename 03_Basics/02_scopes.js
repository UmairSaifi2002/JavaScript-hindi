// Global Scope
// In JavaScript, global scope is the widest scope available.
// Variables declared in global scope are accessible from anywhere in your code, 
// whether it's inside functions, conditional statements, loops, or other blocks of code

// Local Scope
// Local scope in JavaScript is like a private room within a building – 
// it's an enclosed space where variables are only accessible from within that specific room


let var1 = 1
const var2 = 2
var var3 = 3

if(true){
    let var1 = 10
    const var2 = 20
    var var3 = 30
    console.log("Inner var1 -> ", var1)
    console.log("Inner var2 -> ", var2)
    console.log("Inner var3 -> ", var3)
}

console.log("After -> ",var1)
console.log("After -> ",var2)
console.log("After -> ",var3)

function one(){
    const username = "Hitesh"
    function two(){
        const website = "www.sidhiraah.com"
        console.log(username);
    }
    console.log(website) 
    two()
}
one()


if(true){
    const username = 'Umair'
    if (username === 'Umair') {
        const website = ' youtube'
        console.log(username + website);
    }
    // console.log(website) // this will give error because you call it outside the scope in which you declare the variable.
}
// console.log(username) // this will give error because you call it outside the scope in which you declare the variable.

// ************************************ Hoisting ************************************************

// hoisting
// Hoisting in JavaScript refers to the process
//  where the interpreter appears to move the declaration of functions, variables, classes, or 
// imports to the top of their scope, prior to execution of the code.
// This allows you to use variables or functions before they are declared in your code, without throwing errors. 
// However, only the declarations are hoisted, not the assignments.

console.log(addOne(4))
// here function is called before the function is declared
// this is called 'hoisting'
// now you donot get any error messages
function addOne(num){
    return num+1
}

// But now if we store the function in the variable.
// and call the function before the function is declared
// now you get the error

console.log(addTwo(5))

function addTwo(num){
    return num+2
}