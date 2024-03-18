// Let's Learn about the important functions of Arrays
const Marvel_heros = ["Ironman","Spiderman","Thor"]
const DC_heroes = ["Superman","Batman","flash"]

//.push() function push the value or the multiple value to the array as a single element
// Marvel_heros.push(DC_heroes) // here the DC_heroes array is pushed into the Marvel_heros array as a single element
// console.log(Marvel_heros) // -> [ 'Ironman', 'Spiderman', 'Thor', [ 'Superman', 'Batman', 'flash' ] ]

// .concat() function adds two array and return the new updated array it donot change or manipulate the existing array
const All_Heros = Marvel_heros.concat(DC_heroes) // -> here two arrays are combined and return the new updated array
// console.log(All_Heros) // -> [ 'Ironman', 'Spiderman', 'Thor', 'Superman', 'Batman', 'flash' ]

// spred operator for this just put three dots before the name of the array
// ...ArrayName
const All_New_Heros = [...Marvel_heros,...DC_heroes]
// console.log(All_New_Heros) // -> [ 'Ironman', 'Spiderman', 'Thor', 'Superman', 'Batman', 'flash' ]

// if we have an array within the array and this array also within the array
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] // like this worst case
// to flatened this multidimensional array we use .flat(depth_value) function
// .flat(depth_value) function Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_real_array = another_array.flat(Infinity) // use infinity when depth is not known
// console.log(another_real_array)

console.log(Array.isArray("Umair"))// .isArray() checks that the given input is array or not
// -> false
console.log(Array.from("Umair")) // .from() it convert the input into the array
// -> [ 'U', 'm', 'a', 'i', 'r' ]
console.log(Array.from({name:"Umair"})) // -> interesting
// -> []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // -> [100, 200, 300]