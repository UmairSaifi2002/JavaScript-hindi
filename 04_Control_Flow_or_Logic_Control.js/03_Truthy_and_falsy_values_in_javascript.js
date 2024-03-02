// const userEmail = "Uma@ir.ai"
const userEmail = ""
if (userEmail) {
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}

// falsy values are given below 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN  -> All these values treated as False values

// Apart of these values are treated as True values
// Some truthy values are surprised you
// '0', 'false', " ", [], {}, function(){}


// Nullish coalescing Operator (??): null undefined
let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1)

// Terniary Operator
const price1 = 100
price1 >= 80 ? console.log("Price is greater than 80") : console.log("Price is less than 80")