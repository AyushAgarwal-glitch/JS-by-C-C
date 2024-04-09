const accountId = 155443  
let accountEmail = "ayushagarwal.2430@gmail.com"
var accountPassword = "12345"
accountCity = "Noida"
let accountState 

// accountId = 2 // changing a const variable is not allowed
accountEmail = "ayush@gmail.com"
accountPassword = "121212" 
accountCity = "Kanpur"

// console.log(accountId) // in this we cant print multiple variables together 
//so we can use console.table instead
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// const is used to define constant variables

/* there are two ways to define a variable "let" and "var" 
we should not use var because of issue in block scope and functional scope
*/