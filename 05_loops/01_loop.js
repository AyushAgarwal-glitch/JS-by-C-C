// for loop
/*for (let i = 0; i < array.length; i++) {
    const element = array[i];

}*/
for (let i = 0; i < 10 ; i++) {
    const element = i ;
    if(element == 5){
        console.log("5 is the best number")
    }
    console.log(element)
}

for (let i = 0; i <=10 ; i++) {
    // console.log(`Outer loop value: ${i}`)
    for (let j = 0; j < 10 ; j++) {
        // console.log(`Outer loop: ${i} and inner loop: ${j}`)
    }
}

let myArray = ["flash" , "batman" , "superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
}

// break and continue

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("Detected 5")
        //break ;
        continue
    }
    console.log(`Value of i is ${i}`)
}