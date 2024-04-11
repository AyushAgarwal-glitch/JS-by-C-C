const score = 400 
console.log(score)
const balance = new Number(100) //This becomes an object of the number thats why there is a difference in the output
console.log(balance)
const otherNumber = 123.984392849 //change it to 2 and 4 digit numbers to observe different answers
const hundreds = 10000000 

console.log(balance.toString())
console.log(typeof balance.toString())
console.log(balance.toString().length) // has been converted into strings hence all the string properties can now be used
console.log(balance.toFixed(2)) //gives the decimal value of a number upto the specified decimal place
console.log(otherNumber.toPrecision(4))
console.log(otherNumber.toPrecision(3))
console.log(otherNumber.toPrecision(2))
console.log(otherNumber.toPrecision(1))
console.log(hundreds.toLocaleString()) //will give ans after putting commas according to US notation
console.log(hundreds.toLocaleString('en-IN')) //will give ans after putting commas according to Indian notation
console.log() 

// ******************************Maths**********************************
console.log(Math) 
console.log(Math.abs(-45))
console.log(Math.round(4.5))
console.log(Math.ceil(4.5))
console.log(Math.floor(4.5))
console.log(Math.min(4,3,5,7))
console.log(Math.max(4,3,5,6))

console.log()
console.log(Math.random())   //gives value between 0 to 1 
console.log(Math.random()*10 + 1) //we do +1 to avoid 0

const min = 10 
const max = 20 
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//we define max and min and use the above formula so that we always get the ans within the range of max and min