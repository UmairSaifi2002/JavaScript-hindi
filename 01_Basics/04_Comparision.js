console.log(2>1) // -> true
console.log(2>=1) // -> true
console.log(2<1) // -> false
console.log(2<=1) // -> false
console.log(2==1) // -> false
console.log(2!=1) // -> true

console.log("2">1) // -> true
console.log("2"<1) // -> false

// THESE TYPE OF COMNVERSION BRING'S A TROUBLE WITH IT.
// SO BETTER IS TO AVOID THESE TYPE OF CONVERSIONS
console.log(null<0) // -> false
console.log(null>0) // -> false
console.log(null>=0) // -> true
console.log(null<=0) // -> true

console.log(undefined<0) // -> false
console.log(undefined>0) // -> false
console.log(undefined>=0) // -> false
console.log(undefined<=0) // -> false

// === it is a strict check.
console.log("2"===2) // -> false