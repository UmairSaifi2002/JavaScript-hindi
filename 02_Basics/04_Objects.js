// In this We will learn Object by contructor method
// here Singleton property is imposed on the object because we use the consstructor method to define the object
const tinderUser = new Object()
console.log(tinderUser) // -> {}
// Now we will give some values to the object
tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.IsLoggedin = false
console.log(tinderUser) // -> { id: '123abc', name: 'sam', IsLoggedin: false }