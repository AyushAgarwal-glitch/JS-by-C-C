//switch case syntax
/*switch(key){
    case value:
        //statements
        break ;
    case value2:
        //statements
        break;
    default: 
        //statements
        break ;
}*/

const month = 3 ;
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    default:
        console.log("Default")
        break;
}
//if we do not put break statement then all the values after the matching value are executed except the default statement
