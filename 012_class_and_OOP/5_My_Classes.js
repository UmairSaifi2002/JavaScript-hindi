// Class in JavaScript

// class User {
//     constructor(userName, email, password){
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//     }

//     encryptedPassword() {
//         return `${this.password}abc`;
//     }

//     ChangeUserName(){
//         return `${this.userName.toUpperCase()}`;
//     }
// }

// const chai = new User('chai', 'chai@gmail.com','chaiIsTea');

// console.log(chai.encryptedPassword());
// console.log(chai.ChangeUserName());
// console.log(chai.encryptedPassword());

// behind the scene work 

function User(userName, email, password) {
    this.userName = userName;
    this.password = password;
    this.email = email;
}

User.prototype.changeUserName = function () {
    return `${this.userName.toUpperCase()}`;
}

User.prototype.encryptedPassword = function () {
    return `${this.password}abc`;
}


const tea = new User('tea','tea@ggg.com','12345')
console.log(tea.encryptedPassword());
console.log(tea.changeUserName());