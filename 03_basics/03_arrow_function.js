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