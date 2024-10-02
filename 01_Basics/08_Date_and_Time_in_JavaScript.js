// Date is an Object in JavaScript.
// Date
let myDate = new Date()
console.log(myDate) //-> 2024-02-19T19:33:31.316Z it may vary depending on the time when you run the code
console.log(myDate.toString()) // -> Tue Feb 20 2024 01:05:58 GMT+0530 (Indian Standard Time)
console.log(myDate.toDateString()) // -> Tue Feb 20 2024
console.log(myDate.toISOString()) //-> 2024-02-19T19:40:16.292Z
console.log(myDate.toJSON())// -> 2024-02-19T19:40:16.292Z
console.log(myDate.toLocaleDateString()) // -> 2/20/2024
console.log(myDate.toLocaleString()) // -> 2/20/2024, 1:10:16 AM
console. log(typeof myDate) // -> object

let myCreatedDate = new Date(2024,2,20)// Jab ham esse bas value likhty h to hamara month jan 0 se start hota h
console.log(myCreatedDate) // -> 2024-03-19T18:30:00.000Z
console.log(myCreatedDate.toDateString()) // -> Wed Mar 20 2024 
myCreatedDate = new Date(2024,2,20,5,30)
console.log(myCreatedDate.toLocaleString()) // -> 20/3/2024, 5:30:00 am
myCreatedDate = new Date("2024-02-20") // Yaha pr ham ek format m date de rhe h to isiliye yaha pr month hamara 1 se start hoga
console.log(myCreatedDate.toLocaleString()) // -> 20/2/2024, 5:30:00 am
myCreatedDate = new Date("02-20-2024")
console.log(myCreatedDate.toLocaleString())//-> 20/2/2024, 12:00:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp)// -> Time is printed in millisecond from specific time
// Now we will convert the time from milliseconds to seconds
console.log(Math.floor(Date.now()/1000))
// ***************************** It is Always Preferable to use date in milliseconds and show in seconds *************************

let newDate = new Date()
console.log(newDate)
console.log(newDate.getTimezoneOffset())
console.log(newDate.getMonth())
console.log(newDate.getHours())
console.log(newDate.getFullYear())
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday: "long"
})