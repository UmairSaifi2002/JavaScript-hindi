const coding = ['js','ruby','java','python','cpp']

const values = coding.forEach( (item) => {
    // console.log(item)
} )

// console.log(values) // -> undefined

// ****************************************** Filter() ************************************************

const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNum1 = myNum.filter( (num) => num > 4 )
// const newNums = myNum.filter( (num) => { num >4 }) // -> []
// for solving this mistake we use the return 'keyword'

// agr ham scope use krte h to 'return' use krte h
const newNums = myNum.filter( (num) => {
    return num > 4
} )
// console.log(newNums)

const newNum2=[]
myNum.forEach( (element) => {
    if (element>4) {
        // console.log(element)
        newNum2.push(element)
    }
})
// console.log(newNum2)


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

// console.log(userBooks)


// ******************************************* Map() **********************************************
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
let newNumbers = myNumbers.map( (num) => num+10 )
// console.log(newNumbers) // it return the array of updated numbers

// const newNumbers = myNumbers.map( (num) => {num+10} )
// console.log(newNumbers) // it return the array of undefined

// Now we will Learn about the chaining of a functions 

newNumbers = myNumbers.map( (element) => element*10 ).map( (element) => element+2).filter( (item) => item >= 40)
// console.log(newNumbers)

// ************************************* Reduce() ****************************************
// Syntax for reduce
// reduce(callbackFn, initialValue)

const myArray = [1,2,3,4,5,6]
const myTotal = myArray.reduce( (acc, currval) => {
    // console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
},0 )
//console.log(myTotal)

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

console.log(priceToPay);