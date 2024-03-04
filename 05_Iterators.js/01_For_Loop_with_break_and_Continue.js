// For Loop
// Let's Start with basics of for loops

for (let i = 0; i < 10; i++) {
    if(i==5){
        console.log("The number 5")
    }
    console.log(i+1)
}

for (let i = 2; i < 3; i++) {
    // console.log(`Outer loop value: ${i}`)
    for (let j = 1; j < 11; j++) {
        // console.log(`Outer loop value: ${i} and Inner loop value: ${j}`)
        console.log(`${i} * ${j} = ${i*j}`);
    }
}


let myArray = ["Ironman","Superman","Batman","Flash","Thor"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index]
    console.log(element)
}

// Let's learn about 'break'
for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("Detected 5");
        break
    }
    console.log(`value of i is ${i}`)
}


// Let's learn about  'continue'
for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("Detected 5");
        continue
    }
    console.log(`value of i is ${i}`)
}