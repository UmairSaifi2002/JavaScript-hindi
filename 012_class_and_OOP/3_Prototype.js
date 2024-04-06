// let myName = 'Umair Saifi!';
// console.log(myName.truelength);
// here our challenge is make a method 
// in which it count only words contains by the string

let myHeroes = ['Thor', 'SpiderMan', 'IronMan'];

let heroPower = {
    thor : 'Mijolnir and StormBraker',
    SpiderMan : 'WebShooter and Sling',
    IronMan : 'Tech, Suit, ideas',
    getThorPowers : function() {
        console.log(`Thor Pwers is ${this.thor}`);
    },
    getSpiderManPowers : function() {
        console.log(`Thor Pwers is ${this.SpiderMan}`);
    },
    getIronManPowers : function() {
        console.log(`Thor Pwers is ${this.IronMan}`);
    }
};

// here we include a new function in a prototype of Object 
Object.prototype.umair = function() {
    console.log('Umair is Present EveryWhere.');
}

// as above we will doine this with Array
Array.prototype.hiUmair = function () {
    console.log('HiUmair is Present EveryWhere.');
}

// and here we use this prototype to pre defined object 
// which actaully runs/works
heroPower.umair();
myHeroes.umair();
myHeroes.hiUmair();


// Now we get another example to learn 

const user = {
    name : 'Umair',
    email : 'u@google.com'
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : true
}

const TASupport = {
    makeAssignment : 'Js Assignment',
    fullTime : true,
    // Now if we want to access all the prototype properties of TeachingSupport Object
    // then we will use '__proto__'
    __proto__ : TeachingSupport
}

Teacher.__proto__ = user;

// Modern Syntax
// (method) ObjectConstructor.setPrototypeOf(o: any, proto: object | null): any
// Sets the prototype of a specified object o to object proto or null. Returns the object o.
Object.setPrototypeOf(TeachingSupport,Teacher);

// Now we will Solve our Problem which we declare above.
let anotherUserName = "Code aur Funn       "
console.log(`Length of String ${anotherUserName} is: ${anotherUserName.length}`);

String.prototype.trueLength = function () {
    console.log(`${this}`); // -> Code aur Funn
    console.log(`${this.name}`); // -> undefined
    console.log(`True Length of ${this} is : ${this.trim().length}`); // -> 13
}

anotherUserName.trueLength();
