// This is an object literal
// it means to create literally an object
const user = {
    username : 'Umair Saifi',
    loginCount : 8,
    signIn : true,
    // when wew use 'this' keyword to access the value of the object
    // so 'this' fetches the current object value to display
    getUserDetails : function () {
        console.log('Got user details from server');
        console.log(`Username : ${this.username}`);
        // when we only print 'this' so it will print whole current context.
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
// hereif we print 'this' then 
// as a current context it return back the empty object -> {}
console.log(this);

//----------------------------------------------- Constructor Function ------------------------------------------------
// when we use the constructor function it means to create a new instance
// it means to create a new instance of object, promise, date, etc.
// we use 'new' keyword to create a new instance

// now we will learn why this 'new' keyword is use
function User(username, loginCount, isLoggedIn) {
    // here we use 'this' keyword to assigned the parsed value into the current user object
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // now we return this current user object
    return this;
}

// here we are not using 'new' keyword
// const userOne = User('umair', 12, true);
// const userTwo = User('UMAIR', 8, false);
// const userThree = User('Umair Saifi', 120, true);

// SOMETHING IMPORTANT
// console.log(userOne);
// console.log(userTwo);
// console.log(userThree);
// when this above three line code execute then the values
// of userOne and userTwo and userThree are same becuse the value are overWritten
// because there is nothing 'new' is parse so it overwrites the values and both of these objects have
// same values.

// TO PREVENT THIS
// We use 'new' keyword
const userOne = new User('umair', 12, true);
const userTwo = new User('UMAIR', 8, false);
const userThree = new User('Umair Saifi', 120, true);

// now we have seperate values
console.log(userOne);
console.log(userTwo);
console.log(userThree);

// Summery of above
// step 1 :- new object is creat.
// step 2 :- constructor function is called using 'new' keyword.
// step 3 :- all argument is injected into 'this'
// step 4 :- new object have all of these argument

//---------------------------------------------- instance of --------------------------------------------------------
// some concept of instance
// The instanceof operator tests to see if the prototype property of a constructor appears 
// anywhere in the prototype chain of an object. The return value is a boolean value.
// defining constructors
function C() {}
function D() {}

const o = new C();

// true, because: Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false, because D.prototype is nowhere in o's prototype chain
o instanceof D;

o instanceof Object; // true, because:
C.prototype instanceof Object; // true

// Re-assign `constructor.prototype`: you should
// rarely do this in practice.
C.prototype = {};
const o2 = new C();

o2 instanceof C; // true

// false, because C.prototype is nowhere in
// o's prototype chain anymore
o instanceof C;

D.prototype = new C(); // add C to [[Prototype]] linkage of D
const o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true since C.prototype is now in o3's prototype chain
