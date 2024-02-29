let var1 = 1
const var2 = 2
var var3 = 3

if(true){
    let var1 = 10
    const var2 = 20
    var var3 = 30
    console.log("Inner var1 -> ", var1)
    console.log("Inner var2 -> ", var2)
    console.log("Inner var3 -> ", var3)
}

console.log("After -> ",var1)
console.log("After -> ",var2)
console.log("After -> ",var3)