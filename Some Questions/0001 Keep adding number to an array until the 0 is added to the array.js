//Keep adding number to an array until the 0 is added to the array.
let arr = []
//let a = prompt("Enter the number")
let bool = true;
while (bool){
  let a = prompt("Enter the number")
  arr.push(a)
  if(a==0){
    bool = false
    break
  }
}
