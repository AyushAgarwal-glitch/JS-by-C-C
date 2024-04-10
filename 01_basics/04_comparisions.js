// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

/*console.log("2" > 1)
console.log("02" < 1) */
//so over here it it automatically converting string to integer and comparing 
//but for best case we should check that the datatypes of the comparing elements is same

/*console.log(null < 0)
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0) */
//the reason it is giving true in the 4th case is bcoz equality '==' and comparisions '>,<,>=,<=' work differently
//comparisions convert null to a number treating it as zero
//thats why null >= 0 converts null to 0 and checks it to return true and thats why it wasnt giving true in the 3rd case

// strict check === // so it checks the datatype also along with the value
console.log(2 == "2")   //converts the datatypes to check and gives answer on the basis of value only 
console.log(2 === "2")  //doesnt convert the datatype and hence full check of datatype and value is done
