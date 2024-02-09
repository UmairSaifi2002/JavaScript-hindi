// 0002 Use Reduce function to Calculate the factorial from an array which contains first n natural numbers
let arr = [1,2,3,4,5,6]
// so we have first 6 natural number than we can calculate the factorial of 6 using this array
// yes using reduce function

// const fact = (a,b) =>{
//   return a*b;
// }
// console.log(arr.reduce((a,b)=>{
//   return a*b
// }))

// Both are same.

console.log(arr.reduce((a,b) =>{
  return a*b;
}))
