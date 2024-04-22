//if
/*if(condition){

}*/
if("3" !== "3"){
    console.log("YES")
}
else{
    console.log("NO")
}
//var scope is always global which is a problem so we should not use it
const score = 200 
if(score > 100){
    const power = "fly" 
    console.log(`user power -> ${power}`)
}

const balance = 1000
if(balance > 500) console.log("test") //single line of code can work without {}

if(balance < 500){
    console.log("less than 500")
}
else if(balance < 750){
    console.log("less than 750")
}
else{
    console.log("less than 1200")
}

const userLoggedIn = true 
const debitCard = true 
if(userLoggedIn && debitCard){
    console.log("Allowed to buy course")
}