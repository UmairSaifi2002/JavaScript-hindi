// Here we will learan to create a Promise
// it needs a 'new' keywords
// and then 'promise' and parenthesis '()'within it it uses callback function
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
    }, 1000);
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
    }, 1000);
});
// now we consume the promise whic we create and got the data from the promise
PromiseThree.then(function(user){
    console.log(user);
})