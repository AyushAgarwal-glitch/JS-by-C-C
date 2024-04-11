let myDate = new Date() 

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

let newDate = new Date(2023 , 0 , 23)
console.log(newDate.toDateString())
let newDate1 = new Date(2023 , 0 , 23 , 5 , 3)
console.log(newDate1.toLocaleString())
let newDate2 = new Date("2023-01-21")
console.log(newDate2.toLocaleString())
let newDate3 = new Date("01-21-2023")
console.log(newDate3.toLocaleString())

let myTimeStamp = Date.now() ;
console.log(myTimeStamp)         //gives in milliseconds
console.log(newDate.getTime())   //gives in milliseconds
console.log(Math.floor(Date.now()/1000))

console.log(myDate.getMonth())
console.log(myDate.getDay())
console.log(myDate.getHours())

newDate.toLocaleString('default', {
    weekday: "long"
})