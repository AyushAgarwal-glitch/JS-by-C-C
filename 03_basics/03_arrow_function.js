const user = {
    username: "ayush",
    price: 99 ,
    welcomeMsg: function(){
        console.log(`${this.username} , welcome to the website`) //over here this keyword refers to the current context
        console.log(this)  //this gives the current context of all the variables used above it
    }

}
//upar toh thk tha // but if we use this keyword over here then whats its refernce over here
// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

console.log(this) //this gives {} , boz we are inside a node environment so this does not refer to anything
//in the browser the local environment is windows thats why when we run this code in the browser console it shows all the functionalities provided by the windows
//and over here there was no local environment so it shows an empty {} 

function chai () {
    let username = "hitesh"
    // console.log(this)  //now in this "this" we do not get emmptyy {} , we get some of the useable functionalities
    console.log(this.username) // this gives undefined specifying that we cant use this inside functions and only inside objects
}
chai() 

const chaii = () => {  //this is a arrow function
    let username = "hitesh"
    // console.log(this) //this gives empty {} 
    console.log(this.username) //it still gives undefined
}
chaii()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4,56))

const addTwo = (num1, num2) => (num1 + num2) 
//above is another method of arrow functions known as implicit return therefore we dont need to wrtiee the return keyword 
//it accepts it as return only , the value after the arrows is returned 
console.log(addTwo(4,3))

//we can wrap num1+num2 in () also , if we wrap it in {} then we wil have to write the return keyword
const addTw = (num1 , num2) => {username: "ayush"} ///this would give undefined
console.log(addTw(3,2))
const addt = (num1,num2) => ({username:"Ayush"}) //now this would print the object value bcoz it is wrapped in ()
console.log(addt(5,4))