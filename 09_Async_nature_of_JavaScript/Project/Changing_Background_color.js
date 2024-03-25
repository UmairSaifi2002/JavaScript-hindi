// First we have to select the buttons
const start = document.getElementById('start');
const stop = document.getElementById('stop');
let intervalId;

// Function for random color 
// this function generate random color
// color are in the format of RGB: rgb(178,131,46)
function randomThreeDigitNumber(){
    let value = Math.ceil(Math.random() * 255 );
    return value;
}
function randomColor(){
    let val1 = randomThreeDigitNumber();
    let val2 = randomThreeDigitNumber();
    let val3 = randomThreeDigitNumber();
    // Here we return the values in the form of Objet.
    return {val1,val2,val3};
}

// function for setInterval
const startInterval = () => {
    // Here we apply a check if theinternall === null then only change the background color.
    if(!intervalId){
        intervalId = setInterval(() => {
            // Here Object value is Stored in the variable.
            let value = randomColor();
            // to Access the different values we have to use object method.
            document.body.style.backgroundColor = `rgb(${value.val1}, ${value.val2}, ${value.val3})`;
            console.log("Started");
        }, 2000);
    }
}

// function for stopInterval
const stopInterval = () => {
    clearInterval(intervalId);
    // After close the interval we reseted the value of intervalId.
    intervalId = undefined;
}

// Now addEventListener to the button
start.addEventListener('click',startInterval,false);
stop.addEventListener('click',stopInterval,false);