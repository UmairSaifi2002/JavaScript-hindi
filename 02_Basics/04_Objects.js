// In this We will learn Object by contructor method
// here Singleton property is imposed on the object because we use the consstructor method to define the object
const tinderUser = new Object()
console.log(tinderUser) // -> {}
// Now we will give some values to the object
tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.IsLoggedin = false
console.log(tinderUser) // -> { id: '123abc', name: 'sam', IsLoggedin: false }
const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstName:"Mohammad",
            Middlename:"UMAIR",
            Lastname:"Saifi"
        }
    }
}
console.log(regularUser)// -> This will show full object
console.log(regularUser.fullname) // -> { userFullname: { firstName: 'Mohammad', Middlename: 'UMAIR', Lastname: 'Saifi' } }
console.log(regularUser.fullname.userFullname) // -> { firstName: 'Mohammad', Middlename: 'UMAIR', Lastname: 'Saifi' }
console.log(regularUser.fullname.userFullname.firstName) // -> Mohammad
console.log(regularUser.fullname.userFullname.Middlename) // -> UMAIR
console.log(regularUser.fullname.userFullname.Lastname) // -> Saifi

// Now we will Learn about how to join two or more than two objects.
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}
const obj4 = {7:"g",8:"h"}


// now if we want to combine both the objects
// we can use the -> 'Object.assign()' function
// Syntax -> Object.assign(target,source) here source can either one or more than one object
// if we have more than one object then -> Object.assign(target,source1,source2,source3,...)

const finalObject0 = Object.assign({},obj1,obj2,obj3,obj4)
console.log(finalObject0) // -> {1:'a',2:'b',3:'c',4:'d',5:'e',6:'f',7:'g',8:'h'}

// The another usefull solution to combine tw or more than objects
// to use the spread operator in object 
// {...Objectname,...Objectname, and so on}
const finalObject = {...obj1,...obj2,...obj3,...obj4}
console.log(finalObject) // -> {1:'a',2:'b',3:'c',4:'d',5:'e',6:'f',7:'g',8:'h'}


// if we have a array of object
const users = [
    {1:"a",email:"a@example.com",packageName:"firstUser"},
    {1:"b",email:"b@example.com",packageName:"SecondUser"},
    {1:"c",email:"c@example.com",packageName:"thirdUser"},
    {1:"d",email:"d@example.com",packageName:"fourthUser"}
]
// now we can acees the first object of the array
console.log(users[1]) // -> { '1': 'b', email: 'b@example.com', packageName: 'SecondUser' }
// and if we want to access the particular value of the first object or any other object then
console.log(users[1].email) // -> b@example.com

// if we want to access all the keys or the value of the object then
// for keys -> Object.keys(object_name)
// for values -> Object.values(object_name)
// the most important thing is it return array as an output
console.log(Object.keys(tinderUser)) // -> [ 'id', 'name', 'IsLoggedin' ]
console.log(Object.values(tinderUser)) // -> [ '123abc', 'sam', false ]

// now if we want keys along with its value then we use '.entries()' function
// Let's see how can we use it
// Syntax -> Object.entries(object_name)
// it will return an nested array
console.log(Object.entries(tinderUser)) // -> [ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'IsLoggedin', false ] ]

// if we want to chek that object have any properties
// note :- Property == key
// them we use '.hasOwnProperty()' function to check
// Syntax -> Object_name.hasOwnProperty('Property_name')
console.log(tinderUser.hasOwnProperty('name')) // -> true

// ******************************************* DeStructuring in Objects *************************************

const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor:"UmairSaifi"
}
// in normal ways if we want to access the courseInstructor then we use
console.log(course.courseInstructor) // -> 'UmairSaifi'

// if we want to access this in a smart way then we use 
const {courseInstructor:Instructor} = course
console.log(Instructor) // -> 'UmairSaifi'