// Here we will learn about the functions
function sayMyName(){
    console.log("Hello!, Umair...")
}
// Now we will call this function
// here if we write the name of functin the it will a reference of the function
// and after that we will 'apply () -> this means execute'
sayMyName()

function addTwoNumbers(Num1,Num2){
    // console.log(Num1+Num2)
    return (Num1 + Num2)
}
// console.log(addTwoNumbers(3,4))
const result = addTwoNumbers(3,4)
// console.log("Result : ",result)
// if we donot use return in a function then the result undefined

function LoginUserMessage(username = "Harry"){ // if nothing is passed to the string then we can set the default values to the parameters
    if(username===undefined){ // if(!username)
        console.log("Please enter a username")
        return
    }
    return `${username} just Logged in.`
}
const msg = LoginUserMessage("Umair") // -> Umair just logged in.
// const msg = LoginUserMessage()
// if the nothing is passed to the fuunction -> undefined just logged in.
console.log(msg)

// if we donot know how many parameter's is gonna be passed then 
// we can use the rest operator 
// Syntax -> function function_name(...parameter)
function calculateCartPrice(...num1){
    return num1 // -> this return an array ->[num,num,num,...]
}
console.log(calculateCartPrice(200,400,500,300)) // -> [200,400,500,300]
