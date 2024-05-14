// Map, reduce, and filter are all array methods in JavaScript.
// Each one will iterate over an array and perform a transformation or computation.
// Each will return a new array based on the result of the function

const coding = ['js','ruby','java','python','cpp']

const values = coding.forEach( (item) => {
    console.log(item)
} )

console.log(values) // -> undefined

// ****************************************** Filter() ************************************************
// The filter() method takes each element in an array and it applies a conditional statement against it. 
// If this conditional returns true, the element gets pushed to the output array. 
// If the condition returns false, the element does not get pushed to the output array.

const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNum1 = myNum.filter( (num) => num > 4 )
// const newNums = myNum.filter( (num) => { num >4 }) // -> []
// for solving this mistake we use the return 'keyword'

// agr ham scope use krte h to 'return' use krte h
const newNums = myNum.filter( (num) => {
    return num > 4
} )
console.log(newNums)

const newNum2=[]
myNum.forEach( (element) => {
    if (element>4) {
        // console.log(element)
        newNum2.push(element)
    }
})
console.log(newNum2)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


const userBooks = books.filter( (book) => {
    // return book.genre === 'History'
    return book.publish >= 1995 && book.genre === 'History'
} )

console.log(userBooks)


// ******************************************* Map() **********************************************
// The map() method is used for creating a new array from an existing one, 
// applying a function to each one of the elements of the first array.

// In the callback, only the array element is required.
// Usually some action is performed on the value and then a new value is returned.

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
let newNumbers = myNumbers.map( (num) => num+10 )
console.log(newNumbers) // it return the array of updated numbers

newNumbers = myNumbers.map( (num) => {num+10} )
console.log(newNumbers) // it return the array of undefined

// Now we will Learn about the chaining of a functions 

newNumbers = myNumbers.map( (element) => element*10 ).map( (element) => element+2).filter( (item) => item >= 40)
console.log(newNumbers)

// ************************************* Reduce() ****************************************
// Syntax for reduce
// reduce(callbackFn, initialValue)
// The reduce() method reduces an array of values down to just one value. 
// To get the output value, it runs a reducer function on each element of the array.

// The callback argument is a function that will be called once for every item in the array. 
// This function takes four arguments, but often only the first two are used.
// 1, accumulator - the returned value of the previous iteration
// 2. currentValue - the current item in the array
// 3, index - the index of the current item
// 4, array - the original array on which reduce was called

// The initialValue argument is optional. 
// If provided, it will be used as the initial accumulator value in the first call to the callback function.

const myArray = [1,2,3,4,5,6]
const myTotal = myArray.reduce( (acc, currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
},0 )
console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
// 0 is the initial value for the accumulator. It's the value that acc takes in the first iteration of the reducer function.

console.log(priceToPay);