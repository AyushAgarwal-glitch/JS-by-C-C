"use strict"; //treat all JS code as newer version of JS 

//alert(3+3) //cant use this in pure nodeJS //can be used on browser

//see to it that code readibility is not compromised
//console.log(3+3); console.log("Ayush") // instead of this write like this->
console.log(3+3)
console.log("Ayush")

//original documentation of JS at tc39.es

let name = "Ayush"      //string => "" // can use single quotes also but prefer double quotes
let age = 22            //number => range is 2 to the power 53 // bigint for eeven larger numbers
let isLoggedIn = false  //boolena => true/false 
                        //null => standalone value // khaali hai
                        //undefined => khaali nhi hai // it means value is not yet assigned
                        //symbol => unique

console.log(typeof "Ayush")     //string
console.log(typeof age)         //number
console.log(typeof null)        //object
console.log(typeof undefined)   //undefined



