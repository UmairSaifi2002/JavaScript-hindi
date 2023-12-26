/*
Prefer not to use the 'var'
because the issue in block scope and the functional scope
*/
const account_Id = 144553
let account_Email = "abc@gmail.com" // this is a variable
var accountPassword = "12345678" // this is a variable
accountCity = "Jaipur" // this is a bad method to define the variable
let accountState

// account_Id = 12 //it is not Allowed.
console.log(account_Id);

account_Email = "abc@abc.com"
console.log(account_Email); // it is Allowed to edit

accountPassword = "87654321"
console.log(accountPassword); // it is Allowed

accountCity = "Bangaluru"
console.log(accountCity);

// this is a best method to display the variables inna table form.
console.table([account_Id,account_Email,accountPassword,accountCity,accountState]);