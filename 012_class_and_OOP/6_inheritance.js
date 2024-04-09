class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`USER NAME is : ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        // super(username, email, password);
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new Course was added by ${this.username}`);
    }
}

const StudentOne = new User('StudentOne');
StudentOne.logMe();

const TeacherOne = new Teacher('TeacherOne', 'Teach@One.com', '123');
TeacherOne.addCourse();

console.log(`StudentOne is instanceof User -> ${StudentOne instanceof User}`);
console.log(`Teacher is instanceof User -> ${Teacher instanceof User}`);
console.log(`Teacher is instanceof Teacher -> ${Teacher instanceof Teacher}`);
console.log(`TeacherOne is instanceof User -> ${TeacherOne instanceof User}`);
console.log(`TeacherOne is instanceof Teacher -> ${TeacherOne instanceof Teacher}`);