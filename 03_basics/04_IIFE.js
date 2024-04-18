// IIFE -> Immediately Invoked Function Expression
//it is a function which can be executed immediately it is needed bcoz there are problems due to the pollution of the global scope
// and hence iife is needed to avoid a certain function from getting polluted
/*function chai() {
    console.log("DB connected")
}
chai() //() this over here is calling of the function for execution */

//this is a iife function
(function chai(){ //this is named iife
    console.log("DB connected")
})() ; //use semicolon after iife function so that next functions can be called as well without any error
// (function parameters)() // this is how we call a iife function

//iife arrow function
( () => {  // arrow iife / un-named iife
    console.log("DB two connected")
} )() ;

//passing parameters in iife
( (name) => {
    console.log(`DB two connected ${name}`)
} )("ayush")