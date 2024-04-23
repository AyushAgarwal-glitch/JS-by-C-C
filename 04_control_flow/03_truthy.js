const userEmail = "a@ayush.com"
if(userEmail){ //userEmail has a value assigned to it , hence it is called a truthy value
    //if userEmail had been empty then it would be falsy value
    console.log("Got the user Email")
}
else{
    console.log("Dont have user Email")
}

//falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

//truthy values
// "0" -> 0 is in string hence truthy value
// "false" -> false is a string hence truthy value
// " " -> a single space or multiple spaces are also truthy values
// [] , {} , function(){} -> empty array , object & function all are truthy values

const emptyArray = []
if(emptyArray.length === 0){
    console.log("Array is empty")
}

const emptyObj = {} 
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

console.log(false == 0)
console.log(false == '') //all are true
console.log(0 == '')


//Nullish Coalescing Operator (??) //concerned with null and undefined
//helps in handling the situation when null values occur during processing
//basically it is a fallback for how to handle errors in different situations
let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 40
console.log(val1)

//ternary operator
// condition ? true : false
const iceTeaPrice = 100 
iceTeaPrice >= 80 ? console.log("Greater than 80") : console.log("Less than 80")
