//******************************** "For of" Loop ***************************

// ["","","","","",""]
// [{},{},{},{},{},{}]

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num)
}

const greeting = "Hello, world!"
for (const greet of greeting) {
    // console.log(greet)
}

// *********** MAP ***********
// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.

// Objects vs. Maps
// Object is similar to Map—both let you set keys to values, retrieve those values, delete keys, 
// and detect whether something is stored at a key. 
// For this reason (and because there were no built-in alternatives), Object has been used as Map historically.

// "Maps" - let's learn about maps in javascript.
const map = new Map()
map.set('IN','India')
map.set('PAK','Pakistan')
map.set('AFG','Afganistan')
map.set('UZ','Uzbekistan')
map.set('TURK','Turkey')

// console.log(map)
// it returns
// Map(5) {
//   'IN' => 'India',
//   'PAK' => 'Pakistan',
//   'AFG' => 'Afganistan',
//   'UZ' => 'Uzbekistan',
//   'TURK' => 'Turkey'
// }

map.set('IN',"Inadia")
// console.log(map)

for (const [key,value] of map) {
    console.log(key," :- ",value)
}

// 'For of loop' is not iterate the object