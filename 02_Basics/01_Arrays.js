// Here we will Learn about the array
// So let's Begin

let myArray = [0,1,2,3,4,5]
//indexing
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
// JavaScript array-copy operation creates shallow copies rather than deep copies

// shallow copies means A copy of an object is a copy whose properties share the same references as those of the source
// object from which the copy is made.
// agr koi bhi change hoga hamara shallow copies m to vo changes original/ source m bhi hoga.

//deep copies means A copy of an object is a copy whose properties do not share the same references
// original/source m kuch bhi change nhi hoga agr copies m kuch change hoga to

const myArray2 = new Array(1,2,3,4,5)
console.log(myArray2)
console.log(myArray2[0])
console.log(myArray2[1])
console.log(myArray2[2])

// *************************************** Array Methods ***************************************

myArray.push(6) // .push(value) pushes the value at the last of the array
console.log(myArray.push(6)) // -> it return 8 <- the length of the updated array
console.log(myArray) // -> [0,1,2,3,4,5,6,6]

myArray.pop() // .pop() removes the value at the last of the array
console.log(myArray.pop()) // -> it returns 6 <- the last element of the array
console.log(myArray) // -> [0,1,2,3,4,5]

myArray.unshift(6) // .unshift(value) it adds the value at the begining of the array
console.log(myArray.unshift(6)) // -> it return 8 <- the length of the updated array
console.log(myArray) // -> [6,6,0,1,2,3,4,5]

myArray.shift() // .shift() removes the value from the beginning of the array
console.log(myArray.shift()) // -> it return 6 <- the length of the updated array
console.log(myArray) // -> [0,1,2,3,4,5]

// .includes(value) it return true or false depending on whether the value is an array or not
console.log(myArray.includes(4)) // -> it return true just because the value 4 is exist in the array
console.log(myArray.includes(9)) // -> it return false just because the value 9 is not exist in the array

// .indexOf(value) it return the index of the value which matches the value present in the array
// and retrun -1 if the value is not present in the array
console.log(myArray.indexOf(4)) // -> 4
console.log(myArray.indexOf(9)) // -> -1


// .join() function convert the array into a string
const newArray = myArray.join()
console.log(myArray) // -> [0,1,2,3,4,5]
console.log(newArray) // -> 0,1,2,3,4,5
console.log(typeof newArray) // -> String


// Now we will Learn About the  'slice(start,end)'  &  'splice(start,end)'  functions in Array
console.log("Original_Array -> ",myArray) // -> [0,1,2,3,4,5]

const myNewArray1 = myArray.slice(1,3)
console.log("Using slice(1,3) -> ",myNewArray1) // -> [1,2]
console.log("After Using slice(1,3) -> ",myArray) // -> [0,1,2,3,4,5]

const myNewArray2 = myArray.splice(1,3)
console.log("Using splice(1,3) -> ",myNewArray2) // -> [1,2,3]
console.log("After Using splice(1,3) -> ",myArray) // -> [0,4,5]

// ************************************** MOST IMPORTANT **************************************
// ************************************** SLICE() VS SPLICE() **************************************
// There is a Difference between slice() and spilce() function undergoes
// splice() changes the original array whereas slice() doesn't but both of them returns array object.
// slice() -> This method is used to get a new array by selecting a sub-array of a given array.
// splice() -> This method is used to add/remove an item from the given array.