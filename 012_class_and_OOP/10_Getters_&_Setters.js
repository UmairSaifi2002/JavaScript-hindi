/*
In JavaScript, getters and setters are special functions that allow you to define custom behavior 
when accessing or modifying properties of an object. 
They provide a way to encapsulate the internal state of an object and control how it is accessed and modified. 
Getters are used to retrieve the value of a property, while setters are used to modify the value of a property.

Getters: Getters are used to retrieve the value of a property. 
When you access a property with a getter, 
the getter function is automatically invoked, and 
its return value is used as the property value.

Setters: Setters are used to modify the value of a property. 
When you assign a value to a property with a setter, 
the setter function is automatically invoked with the new value.

Getters and setters allow you to implement data validation, encapsulation, and computed properties in your objects, 
providing more control over how properties are accessed and modified. 
They are commonly used in JavaScript to create more robust and maintainable code.
*/
// New Syntax

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    // Always use different variables in the getter and setters from the constructor to avoid errors
    
    // But at the time of defining getters and setters so the name of the 
    // getter and setter is same as the property of the constructor
    
    // for every property of constructor there is a different getter and setter in a class.
    get password() {
        return this.passwordOne.toUpperCase();
    }
    set password(value) {
        this.passwordOne = value;
    }
}

const umair = new User('umair@.ai','1234abc');

console.log(umair.password); // -> 123ABC

// OLD Syntax
// yefunction based h
function UserOne(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new UserOne("chai@chai.com", "chai")

console.log(chai.email);

// y Object based

const UserTwo = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(UserTwo)
console.log(tea.email); //-> H@HC.com
console.log(tea._email); // -> h@hc.com