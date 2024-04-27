//These loops are basically array specific
const arr = [1,2,3,4,5]
// for of loop
for (const num of arr){
    console.log(num) 
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps 
const map = new Map() 
map.set('IN' , "India")
map.set('USA' , 'United States of America')
map.set('FR' , 'France')
map.set('IN' , 'India')
// console.log(map)
for (const key of map) {
    console.log(key) //it will come in the array format 
}
//if we want to print the values in the map without forming the array we can do the following
for(const [key , value] of map){
    console.log(key , ':-' , value) // form here we get key and its value separately
}

const myObject = {
    game1: "NFS",
    game2: "Asphalt"
}
/*for (const [key,value] of myObject) {
    console.log(key , ";-" , value) // this gives the error that myObject is not iterable
}*/
//forof loop doesnt work on objects so we can use forin loop for iterating over objects

//for in loops -> so we can say that forin loop returns the keys of the data type
for (const key in myObject) {
    //console.log(key) //we get the keys from here
    //console.log(myObject[key]) // we get the valuse assigned to the specific keys
    console.log(`${key} is for ${myObject[key]}`)
}

const arr2 = [10,20,30,40,50]
for (const key in arr2) {
    console.log(key) // it returns the indexes in the array
    console.log(arr2[key]) // this returns the values
}

for (const key in map) {
    console.log(key) // this doesnt print anything bcoz maps are not iterable hence it doent print any key value
}

/************************************************************************************************************/
const coding = ['js','ruby','cpp','java','python']

coding.forEach(function (item) {
    //we can do anything we want in the array by iterating over item
    console.log(item)
})
coding.forEach( (item) => { 
    console.log(item)
} )

function printMe(item){
    console.log(item)
}
coding.forEach(printMe) //passing a function as a parameter

coding.forEach( (item , index , arr) => {
    console.log(item , index , arr)
} )

const code = [
    {
        langName: 'javascript',
        langFile: 'js'
    },
    {
        langName: 'java',
        langFile: 'java'
    },
    {
        langName: 'C++',
        langFile: 'cpp'
    }
]
code.forEach( (item) => {
    console.log(item.langName)
    console.log(item.langFile)
} )