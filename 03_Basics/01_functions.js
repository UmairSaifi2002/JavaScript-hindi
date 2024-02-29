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


// most important note
// if we donot know how many parameter's is gonna be passed then 
// we can use the rest operator 
// Syntax -> function function_name(...parameter)
function calculateCartPrice(...num1){
    return num1 // -> this return an array of parameters passed to the function
}
console.log(calculateCartPrice(200,400,500,300)) // -> [200,400,500,300]

const user = {
    username:"Umair",
    price:199
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject["username"]} and price is ${anyObject["price"]}`)
}
// handleObject(user) // -> user name is umair and price is 199
handleObject({username:'Harry',price:999}) // -> user name is Harry and price is 999
const mrNewArray = [1,2,3,4,5,6,7]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(mrNewArray))