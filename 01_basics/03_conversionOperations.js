let score = 33 
console.log(typeof score)
console.log(typeof(score))

let score2 = "33"
console.log(typeof score2)
console.log(typeof(score2))

let valueInNumber = Number(score2)
console.log(typeof valueInNumber)

let score3 = "33abc"
let valueInNumber2 = Number(score3)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)
//so becuase of this stay alert while converting in number and while checking or using it

let score4 = null
let valueInNumber3 = Number(score4)
console.log(valueInNumber3)

let score5 = undefined
let valueInNumber4 = Number(score5)
console.log(valueInNumber4)


let score6 = true
let valueInNumber5 = Number(score6)
console.log(valueInNumber5)

/*
"33" => 33
"33abc" => NaN
true/false => 1/0
null => 0
undefined => NaN
*/

/*
for changing to different datatypes we can use
String(anything u want to change to string)
Number(anything u want to change to number)
Boolean(anything u want to convert in true or false
        //if u pass a string , an empty string will give false other strings will give true
        //if u pass a number , 0 will give false all the other numbers will give true)
*/
/*let st = 5443
let boolSt = Boolean(st)
console.log(boolSt)*/
console.log("TypeOf NaN -> ")
console.log(typeof NaN)
//typeof NaN is number 


// ***************************Operations****************************
let val = 33 
let negVal = -val 
console.log(negVal)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3) // 2 to the power 3
console.log(2/3)
console.log(2%3)

let str = "Hello"
let str2 = " Ayush"
console.log(str + str2)

console.log("1" + 2)      //12
console.log(1 + "2")      //12
console.log("1" + 2 + 2)  //122
console.log(3 + 5 + "4")  //84

console.log(+true)       //1
console.log(+"")         //0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 //all have the value 4 but bad readibility

//++prefix and postfix++ see from mdn docs 