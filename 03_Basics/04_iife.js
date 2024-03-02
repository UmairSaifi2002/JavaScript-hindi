// iife -> Immediately invoked function Expressions
// It is a design pattern which is also known as a Self-Executing Anonymous Function 
// and contains two major parts:

// 1, The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
//    This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// 2, The second part creates the immediately invoked function expression () 
//    through which the JavaScript engine will directly interpret the function.

// Use cases
// Avoid polluting the global namespace
// Because our application could include many functions and global variables from different source files, 
// it's important to limit the number of global variables. 
// If we have some initiation code that we don't need to use again,
// we could use the IIFE pattern. As we will not reuse the code again, 
// using IIFE in this case is better than using a function declaration or a function expression.

(function print(){
    console.log('DB is Connected...')
})();
// here YOU HAVE TO USE SEMICOLON ';' after declaring the iife to stop the execution of the particular function

// we can use iife for arrow function
( ()=>{
    console.log('DB is connected 2....')
} )();

// Passing a parameter in iife function
( (name)=>{
    console.log(`Hello!, ${name}`)
} )('Umair')