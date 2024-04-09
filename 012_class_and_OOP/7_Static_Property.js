// Static properties of JavaScript

class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`USER NAME is : ${this.username}`);
    }
    CreatId() {
        return `123456`;
    }
    // using static kyword for defining the function
    // Any object or the child object will be not able to access this function
    static ShowPassword() {
        return `Password: qwerty`;
    }
}

const Umair = new User('Umair Saifi!');
console.log(Umair.CreatId());
console.log(Umair.ShowPassword());
