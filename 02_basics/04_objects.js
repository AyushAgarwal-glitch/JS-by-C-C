//how to make objects singleton

//both of them below give the same output that is empty object
//but 1st one is singleton object and 2nd one is not a singleton object
//const tinderUser = new Object()  //empty object
const tinderUser = {} 
tinderUser.id = "123abc"
tinderUser.name = "Sammy"

console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Ayush",
            lastName: "Agarwal"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

//const obj3 = {obj1 , obj2} // this is simply object within an object
//const obj3 = Object.assign({},obj1,obj2) //{} answer remains same after using this but it is a good practice thats why we use it
const obj3 = {...obj1 , ...obj2}//another method use the spread operator(...)
console.log(obj3)

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 12,
        email: "a2@gmail.com"
    },
    {
        id: 13,
        email: "a3@gmail.com"
    },
    {
        id: 14,
        email: "a4@gmail.com"
    },
]

console.log(users[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty("id"));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    courseName: "JS" ,
    price: "free",
    courseTeacher: "Hitesh"
}

// course.courseTeacher
const {courseTeacher: cT} = course
// console.log(courseTeacher) ;
console.log(cT) ;

/*const navbar = ({company}) => {
                                    //destructuring of object is being done
}                                   //react mei useful hoga
navbar(company = "ayush")*/

/*{
    "name": "ayush",         //in JSON object the keys are also inside double quotes
    "coursename": "js",      //This is a JSON object, when data is retrieved it is stored in JSON object
    "price": "free"
}*/

/*[
    {},  //this is JSON objects in array format
    {},
    {}
]*/