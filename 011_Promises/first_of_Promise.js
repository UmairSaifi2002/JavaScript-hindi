// Here we will learan to create a Promise
// it needs a 'new' keywords
// and then 'promise' and parenthesis '()'within it. It uses callback function
// whicch have a parameeters -> 'resolve and reject'
// this is a creation stage of promise.
const PromiseOne = new Promise(function (resolve, reject) {
    // it can do an async task.
    // DB calls, cryptography
    setTimeout(function () {
        console.log('Async task 1 is completed successfully');
        // we are calling resolve
        resolve() // -> it is successfully conected with '.then()'
    },1000)
});

// Now we will learn how to consume a promise.
// '.then(callback function)' -> it have a direct connection with the resolve
// but wait first we have to link this '.then()' with 'resolve'
// so for this we have to write 'resolve()' in creation stage of promise
PromiseOne.then(function(){
    console.log('Async task 1 is consumed / resolved');
});

// -------------------------------------------------------------------------------------------------------------------

// Now we will learn about how to create and use the promise without containing it in variable.

new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Asyc Task 2 is completed successfully');
        resolve();
    }, 2000);
}).then(function(){
    console.log('Async Task 2 is consumed / resolve');
});

// Now we will use the promise to fetch the data 
// and then pass it to the .then() to consume the data


// -------------------------------------------------------------------------------------------------------------------

// We Created a promise 
const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({name:'Umair Saifi',email:'UmairSaifi122@gmail.com'})
    }, 3000);
});
// now we consume the promise in which we create and got the data from the promise
PromiseThree.then(function(user){
    console.log(user);
})

// --------------------------------------------------------------------------------------------------------------------

// here we will create a new Promise to learn the concept of '.catch()' and 'reject'
// 'reject' is directly connected to the '.catch()'

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
       // let error = false;
       let error = true;
       if(!error) {
        resolve({username: 'Umair',password: 'qwerty'})
       }else{
        reject('ERROR: Somthing went wrong!')
       }
    },4000);
});

// to consume this promise if it resolve we uses '.then()'
PromiseFour.then((user) => {
    console.log(user);
    // if we want to return a value
    return user.username;
    // the main question is where is this returned value have gone
    // the answer is to the next '.then()' method
}).then((username) => {
    console.log(username);
}).catch((err)=>{
    // to consume this promise if it reject we uses '.catch()'
    // Now we learn about the '.catch()' method
    console.log(err);
}).finally(() => {'The Promise is either resolve or reject.'})


// --------------------------------------------------------------------------------------------------------------------

// Here we will Learn about how we will handle the Promise using 'async await'
// "async and await make promises easier to write"
// async makes a function return a Promise.
// await makes a function wait for a Promise.

const PromiseFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        // let err = false;
        let err = true;
        if(!err) {
         resolve({username: 'JavaScript',password: 'JSqwer'})
        }else{
         reject('ERROR: JS went wrong!')
        }
     },5000);
});

// async function consumPromiseFive(){
//     const response = await PromiseFive;
//     console.log(response);
// }

// consumPromiseFive();

// this function donot through error when promise is resolve
// but if the promise is rejected then it through an error
// to handle this issue we use 'try & catch'

async function consumPromiseFive(){
    try {
        // this will run when the promise is resolved
        const response = await PromiseFive;
        console.log(response);
    } catch (error) {
        // this is when the promise is rejected
        console.log(error);
    }
}

consumPromiseFive();

// --------------------------------------------------------------------------------------------------------------

// Some Advanced Functions that we will going to Learn.
// So, We will Continue our Learnings.

// Some asic way to perform the task
// we are using fetch() and get response in order to access the data
async function getAllUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // here response receives the response in string format
    // for this we will parse the response in json format
    // here we the response takes time to convert into the json format so
    // you have to put await before the parsing of te response
    const data = await response.json();
    console.log(data);
}

getAllUsers();

// now we are trying it with the try & catch statement

async function getAllUsers1() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // here response is received in the string format.
        // for this we will parse the response in json format
        // here our response takes the time to convert it into the json format so
        // you have to put await before the parsing of the response
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error: ",error);
    }
}

// getAllUsers1();

// Now if we want to use .then() & .catch() statements
// this code want's to get some attention
// you have to go through it
fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
}).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
})