// In this We will learn Object by contructor method
// here Singleton property is imposed on the object because we use the consstructor method to define the object
const tinderUser = new Object()
// console.log(tinderUser) // -> {}
// Now we will give some values to the object
tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.IsLoggedin = false
// console.log(tinderUser) // -> { id: '123abc', name: 'sam', IsLoggedin: false }
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
// console.log(regularUser)// -> This will show full object
// console.log(regularUser.fullname) // -> { userFullname: { firstName: 'Mohammad', Middlename: 'UMAIR', Lastname: 'Saifi' } }
// console.log(regularUser.fullname.userFullname) // -> { firstName: 'Mohammad', Middlename: 'UMAIR', Lastname: 'Saifi' }
// console.log(regularUser.fullname.userFullname.firstName) // -> Mohammad
// console.log(regularUser.fullname.userFullname.Middlename) // -> UMAIR
// console.log(regularUser.fullname.userFullname.Lastname) // -> Saifi

// Now we will Learn about how to join two or more than two objects.
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}
const obj4 = {7:"g",8:"h"}
// now if we want to combine both the objects
// we can use the -> 'Object.assign()' function
// Syntax -> Object.assign(target,source) here source can either one or more than one object
// if we have more than one object then -> Object.assign(target,source1,source2,source3,...)

const finalObject = Object.assign({},obj1,obj2,obj3,obj4)
console.log(finalObject) // -> {1:'a',2:'b',3:'c',4:'d',5:'e',6:'f',7:'g',8:'h'}