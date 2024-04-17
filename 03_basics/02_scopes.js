/*let a = 10 
const b = 20 
var c = 30 
               //it was alright till here but the problem came when {} were introduced
console.log(a)
console.log(b)
console.log(c)*/

let a = 300 
if(true){   
    let a = 10    //this will give error bcoz scope of a is within the if block
    const b = 20  //this will also give error bcoz scope of b is within the if block
    var c = 30    //this will print 30 and thats the problem //var is accessible outside of its scope also which is not a good thing
    console.log("Inner:",a)
}

console.log(a)
// console.log(b)
// console.log(c)

function one() {
    const username = "ayush"
    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) //not accessible bcoz website is not accessible outside its scope
    two()
}
one()

if(true){
    const username = "Ayush"
    if(username === "Ayush"){
        const website = "YT"
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


//********************interesting concept */
//here we can call the function addOne(5) above its declaration that wont be a problem
//addone(5)//this can be done 
function addone(num){
    return num + 1 
}
console.log(addone(5))

//we are storing the function value in a const so we cant call the function aboove its declaration
//addTwo(5) //this is wrong
const addTwo = function(num) {
    return num + 2 
}
console.log(addTwo(5))
