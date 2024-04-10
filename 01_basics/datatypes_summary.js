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