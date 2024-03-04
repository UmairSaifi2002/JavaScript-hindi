const myObject = {
    js : 'JavaScript',
    cpp : 'C plus plus',
    rb : 'ruby',
    swift : 'Swift by apple'
}

// we can iterate an object using 'for in' loop
for(const key in myObject){
    // console.log(key) // it will display all the key's of the object.
}

for(const key in myObject){
    // console.log(`${key} -> ${myObject[key]}`)
}

// using for in loop for array
const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    // console.log(key) // it displays the index of the array
    console.log(`The value at ${key}th index is -> ${ programming[key]}`)
}

const map = new Map()
map.set('IN','India')
map.set('PAK','Pakistan')
map.set('AFG','Afganistan')
map.set('UZ','Uzbekistan')
map.set('TURK','Turkey')

for (const key in map) {
    console.log(key) // this shows nothing bbecause map is not iterable
}