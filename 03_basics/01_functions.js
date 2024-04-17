function sayMyName(){
    console.log("A")
    console.log("Y")
    console.log("U")
    console.log("S")
    console.log("H")
}

// sayMyName  -> this is reference to the function
sayMyName() //-> this is calling the function

function addTwoNumbers(num1, num2){
    //console.log(num1 + num2);
    /*let result = num1+num2 ;
    return result*/
    return num1+num2
}
addTwoNumbers(3 , 4) 
addTwoNumbers(3 , "a")
addTwoNumbers("3" , 4)
addTwoNumbers(5 , null)

const result = addTwoNumbers(3,5) ;
console.log("Result: ", result) ; // so this prints the value as undefined bcoz the function is simply printing inside it and not returning any value thats why it shows undefined

function loginMSG(username = "sam"){  //here sam is the default value which will work when no value is passed by the user
    if(username === undefined){       //when a default value is given then the code will never go in the if block 
        console.log("Please enter a username") //when some value is passed by the user then the default value is simply overwritten by the passed value
        return ;
    }
    return `${username} just logged in`
}
console.log(loginMSG("ayush"))
console.log(loginMSG(""))
console.log(loginMSG()) //undefined aata hai


//function calculateCartPrice(...num1){ //over here "..." this is the rest operator , it takes the values and convert it to an array
function calculateCartPrice(val1 , val2 , ...num1){ //over here the first 2 values are taken by val1 and val2 and rest values are stored in num1 as an array
    return num1
}
console.log(calculateCartPrice(200,300,500,900,1600))

const user = {
    username: "xyz" ,
    price: "199"
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user) 
handleObject({ //direct object bhi paas kr skte hain
    username: "abc",
    price: 400
})

//we can pass arrays as well in the function
const myNewArray = [200 , 400 , 100 , 600]
function returnSecondValue(getArray){
    return getArray[1] 
}
console.log(returnSecondValue(myNewArray))