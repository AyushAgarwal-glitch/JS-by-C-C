//singleton // single type of object
//when we define objects as literals then singleton is not formed
//Object.create() <- this is the constructor method and in this singleton is formed

//object literals
//in arrays we cant define the keys over there we can only access the array elements using 0,1,2,3...
//in objects we can define the keys as well over which we want to access the object elements

const mySym = Symbol("key1")
//use this symbol as a key in the object

const jsUser = {
    name: "Ayush",
    "FullName": "Ayush Agarwal" , //now we cant access this value with a dot(.) ,now there is no method to access this value except the second method of passing the key as a string
    //mySym: "myKey1", //so when we define a symbol like this its typeof value is string which is not correct bcoz it should have been a symbol
    //for passing mySym as a symbol we only have one method that is
    [mySym]: "myKey",
    age: 22,
    email: "ayuhsA2@google.com",
    islLoggedIn: false ,
    lastLogin: ["Monday" , "Saturday"]
}
//over here "name" , "age" , "email" ... are the keys of the object through which we can access the object elements
//these keys are stored as strings in the memory hence in the second method we use "" when writing the key name 

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["FullName"])
console.log(jsUser[mySym]) //we dont put quotes around the symbol name 

jsUser.email = "Ayush@gmail.com" //changing the values in an object
// Object.freeze(jsUser) //after freezing the object we cant make any changes in the object 
jsUser.email = "Agarwal.gmail.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello jsUser")
}
//console.log(jsUser.greeting) //this gives undefined
//console.log(jsUser.greeting()) //error -> not a function <- comes so how do we make it a function
//both the above console.log were giving different answers bcoz the object was freezed , we unfreeze it and run again 

console.log(jsUser.greeting)  //[Function (anonymous)] <- it gives this 
console.log(jsUser.greeting()) //this performs the operations in the function

jsUser.greetingTwo= function(){
    console.log(`Hello jsUser, ${this.name}`)
    console.log(`Hello jsUser, ${this.FullName}`)
    console.log(`Hello Symbol, ${this[mySym]}`) //this is the method of accessing the symbol
}
console.log(jsUser.greetingTwo())