// In JavaScript all things are related to the Object.
// Array, String, is belongs to the object
// it is called prototyple inheritance
function multiplyBy5(num) {
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5)); // -> 25
console.log(multiplyBy5.power); // -> 2
console.log(multiplyBy5.prototype); // -> {} it define that function also contains object behaviour.

function CreateUser(name, score) {
    this.name = name;
    this.score = score;
}

// we also can inject some properties to the function
// we can use functions to inject some etra properties to it
// it always be done by the prototyple inheritance
CreateUser.prototype.increment = function () {
    this.score++;
}

CreateUser.prototype.printMe = function () {
    console.log(`Score is : ${this.score}`);
}

// here we use new keyword
// the story behind it is we inject all the favourite properties to the function prototype
// but if we create a new object which have these injected values
// then we use 'new' keyword to get the properties
// if we donot use 'new' keyword then our code show the error
// i hope you will understand how much important is the 'new' keyword is.
const chai = new CreateUser('chai',25);
const tea = new CreateUser('tea',250);

chai.printMe();

// ---------------------------- Working or the internal functioning of 'new' keyword --------------------------------
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/