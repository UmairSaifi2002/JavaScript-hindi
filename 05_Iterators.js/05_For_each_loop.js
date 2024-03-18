// For each loop

const coding = ["js","ruby","java","python","cpp"]

// in for each loop we uses the callback function
// as like formal function in which defining a name of a function is mandatory
// unlike this callback function donot have any name 
coding.forEach( function (element){
    console.log(element)
})

// there is a twist we can use Arrow function in "for each loop"

coding.forEach((element)=>{
    console.log(element)
})

// we also pass the name of the function to the for each loop

// Note :- if we are defining a function with in a for each loop then we need not to define the name of the function
// but if we pass the already definfed function to the for each loop then pass the name of the function to the for each loop

function printMe(element){
    console.log(element)
}
coding.forEach(printMe)

// for each loop have a access of three things
// 1,Value of the array
// 2,Index of the array
// 3,Whole array

coding.forEach((element, index, arr)=> {
    console.log(`element -> ${element} , index -> ${index} , array -> ${arr}`)
})

// Now we will learn about how to work with -> [{},{},{}]
const myCoding = [{programmingLanguage: 'JavaScript',programmingFileName: 'js'},
            {programmingLanguage: 'Java',programmingFileName: 'java'},
            {programmingLanguage: 'Python',programmingFileName: 'py'}]

myCoding.forEach( (element) => {
    console.log(element.programmingLanguage)
} )