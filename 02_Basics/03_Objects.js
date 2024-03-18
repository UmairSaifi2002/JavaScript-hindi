// Let's Learn about Object's in JavaScript
// Object can defined by two ways
// 1, Literal
// 2, Constructor

// Singleton property tab ati h object m jab vo constructor se bana ho
// Singleton k mtlb k vo apne jesa ek hi object exist krta h

// Let learn about Object literal
// Here all the key's are accessible as a String to the compiler
const JsUser = {
    name : "Umair",
    "FullName":"UmairSaifi",
    age : 20,
    location : "Jaipur",
    email : "Umair@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday","Saturday"]
}
// That's how we can access the key's & Values of the object.
// There is two ways to access the content of the object.

// The first method -> "Object_Name.Key"
console.log(JsUser.name) // -> umair
console.log(JsUser.age) // -> 20
console.log(JsUser.location) // -> jaipur
console.log(JsUser.email) // -> Umair@gmail.com
console.log(JsUser.isLoggedIn) // -> false
console.log(JsUser.LastLoginDays) // -> [ 'Monday', 'Saturday' ]

// The second one is given below
// Object_Name["Key"] Make sure that key is within the invereted commas.
// The Best way to access the values of the objects is this second method.
console.log(JsUser["name"]) // -> umair
console.log(JsUser["age"]) // -> 20
console.log(JsUser["location"]) // -> jaipur
console.log(JsUser["email"]) // -> Umair@gmail.com
console.log(JsUser["isLoggedIn"]) // -> false
console.log(JsUser["LastLoginDays"]) // -> [ 'Monday', 'Saturday' ]

// You cannot access the fullname value of the object with "." function
// The Only one way to access the fullname value by the second method which is JsUser["FullName"]
console.log(JsUser["FullName"]) // -> UmairSaifi

// That's how we declare the Symbol
const mySymbol = Symbol("key1")
// if we want to insert the Symbol in object then we use "[]" for declaring the key
const Object2 = {
    name: "Umair2",
    age:20,
    location:"Delhi",
    [mySymbol]:"MyKey2" // That's how Symbol is Declared in Object
}
console.log(Object2[mySymbol]) // That's how the Symbol is accessed from the Object
// -> MyKey2
console.log(typeof mySymbol) // -> symbol


// That's how we can Overwrite the values of the Key of the Object
Object2.name = "UmairSaifi122"

// if we want to freeze the object's value's
// means if we want to make Object immutable the we use .freeze() method
// that's how we can use .freeze() -> "Object.freeze(Object_name)"
Object.freeze(Object2) // -> Now it is immutable
// and if we want to make any changes to the object which is freeze it is not possible to change
// and we donot get any also

console.log(JsUser) // -> it return Whole Object
console.log(Object2) // -> it return Whole Object

// we can add the function to the object
JsUser.greeting = function(){
    console.log("Hello ",JsUser["name"]) 
}
console.log(JsUser.greeting) // -> [Function (anonymous)]
console.log(JsUser.greeting()) // -> Hello  Umair aur next line m undefined
JsUser.greeting() // -> Hello Umair

JsUser.greetingtwo = function(){
    console.log(`Hello Js User , ${this.name}`) // Here this() is used because we want the value of the same
    // Object in which the function is defined
}
JsUser.greetingtwo() // -> Hello Js User , Umair