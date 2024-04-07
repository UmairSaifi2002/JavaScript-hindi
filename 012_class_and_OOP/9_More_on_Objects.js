console.log(Math.PI); // -> 3.141592653589793
// here we change the value of Math.PI 
Math.PI = 5;
console.log(Math.PI); // -> 3.141592653589793
// But we are unable to change this value
// because the mutability of this is not enable
// so we gonna learn how we will change this value

console.log(Object.getOwnPropertyDescriptor(Math,'PI'));
/*
(method) ObjectConstructor.getOwnPropertyDescriptor(o: any, p: PropertyKey): PropertyDescriptor | undefined
Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
*/
/* it's Output
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,       
  configurable: false
}
here writable,enumerable,configurable is false that's why the value of 'PI' is not muttable
if somehow we manage to change these values from false to true then it is possible to change the value of 'PI'
*/

// now we make our example
const chai = {
    name : 'ginger chai',
    price : 50,
    isAvailable : true,
    orderChai : function() {
        ''
    }
}
//This object also have getOwnPropertyeiscriptor propert
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
// We can define these properties
// Object.defineProperties agr use karengy to error dega kyuki ham yaha ek hi proprty ko manipulate kar rhe h.
Object.defineProperty(chai,'price',{
    writable : false,
    enumerable : true,
    configurable : false
}) // -> { value: 50, writable: false, enumerable: false, configurable: false }
console.log(Object.getOwnPropertyDescriptor(chai,'price'));

// agr enumerable true hogi to hi ye object iterable hoga
for (let [key, value] of chai) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}