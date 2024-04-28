const coding = ['js','ruby','java','python','cpp']
const values = coding.forEach( (item) => {
    console.log(item) 
    return item  
})
console.log(values) // this still gives undefined showing that forEach doesnt return any value

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => num > 4 ) //over here the scope is closed , if we open the scope then we have to use return keyword
const newNums = myNums.filter( (num) => {
    return num > 4 
} )
console.log(newNums) // so instead of forEach we can use filter bcoz it returns values

// const mapNums = myNums.map( (num) => num + 10 )
//chaining       using 1st map to mul by  10 then using 2md map to add 1
const mapNums = myNums
                .map((num) => num * 10 )
                .map((num) => num + 1)
                .filter((num) => num > 40)
// the second map gets the values passed by the previous num 
//we can do as much chaining as we want 

console.log(mapNums)