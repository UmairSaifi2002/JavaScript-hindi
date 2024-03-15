// First we have to select form
const form = document.querySelector('form');
// if we select the input field before the eventlister then whenever the eventlistner is called or button is clicked
// then page will be reload and with this the valus withih the input field is null

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    // the only way to get values from input fields
    // is when button is clicked exactly that time
    // we have to select the input field and hold the values in a variable for furthur use
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
})