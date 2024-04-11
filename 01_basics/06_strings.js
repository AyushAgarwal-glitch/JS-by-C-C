const name = "Ayush"
const repocnt = 7
// console.log(name + repocnt + "val") //concatenation using old technique
console.log(`Hello my name is ${name} and my repo count is ${repocnt}`);
//while using backticks we can easily do string interpelation

const gameName = new String('ayush-fc')
//it converts the string in the form of an array (mind it , it is not an array it just repressents it like a string array)
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t')) //if the character is not present it will give -1

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8 , 6)
console.log(anotherString)

const newString1 = "       ayush         "
console.log(newString1)
console.log(newString1.trim())//works on white space characters

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20' , '-'))

const gameName34 = new String('ayush-fc-club')
console.log(gameName34.split('-')) //split is used to convert the string into an array of words on the basis of a condition 
