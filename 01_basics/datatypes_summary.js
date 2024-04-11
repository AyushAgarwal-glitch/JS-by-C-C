// datatypes is divided into 2 categories (primitive and non-primitive)
//#primitive (String , number , boolean , null , undefined , symbol(used to make a value unique) , bigint)
//#non-primitive (arrays , objects , functions)
const score = 100 
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id)
console.log(anotherId)
console.log(id === anotherId)

const bigNumber = 1234567890n //(n laga denge last mei toh apne aap bigint mei convert ho jaega)

const heros = ["ShaktiMan" , "Naagraj" , "Doga"] //array declaration
let myObj = {      //objectDeclaration
    name: "hitesh",
    age: 32,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber)

// ***********************************************************
//Stack memory(Primitive datatypes)(we get a copy of the data stored in stack memory)
//Heap memory(Non-Primitive datatypes)(we get a refernec to the heap where the data is stored)

//stack memmory
let myYTName = "YT@yt.com"
let anotherName = myYTName 
console.log(anotherName)
anotherName = "Chai Aur Code" 
console.log(anotherName)
console.log(myYTName)
//in stack memory we get a copy of the data and hence when we retreat something from the stack memory we get a copy of that data
//hence any changes made on a certain variable remain confined to only that variable and are not reflected everywhere

//heap memory
let userOne = {
    email: "user@google.com",
    upi: "34343@ytr"
}
let userTwo = userOne
userTwo.email = "Newemail@google.com"
console.log(userTwo.email)
console.log(userOne.email) //userOne.email value is also changed bcoz in heap memory reference is passed hence it gives refeernce
                           //to the original space where data was stored and changes its data also
//userOne and userTwo both get the refernce of the same heap hence changes made on any one of them will be reflecteed on both
//of them 