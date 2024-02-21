const Marvel_heros = ["Ironman","Spiderman","Thor"]
const DC_heroes = ["Superman","Batman","flash"]

//.push() function push the value or the multiple value to the array as a single element
// Marvel_heros.push(DC_heroes) // here the DC_heroes array is pushed into the Marvel_heros array as a single element
// console.log(Marvel_heros) // -> [ 'Ironman', 'Spiderman', 'Thor', [ 'Superman', 'Batman', 'flash' ] ]

// .concat() function adds two array and return the new updated array it donot change or manipulate the existing array
const All_Heros = Marvel_heros.concat(DC_heroes) // -> here two arrays are combined and return the new updated array
console.log(All_Heros)