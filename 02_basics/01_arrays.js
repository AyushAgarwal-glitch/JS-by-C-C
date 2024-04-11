const myArr = [0,1,2,3,4,5] // different types of elements can also be put
console.log(myArr[0]) // accessing array elements
const myHeroes = ["shaktiman" , "naagi"]
const myArr2 = new Array()

//Array methods
myArr.push(6)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(9)
console.log(myArr)

myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.includes(9))
console.log(myArr.includes(3))

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//slice , splice
console.log("A" , myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B" , myArr)

const myn2 = myArr.splice(1,3)
console.log("After splice -> " + "C" , myArr)
console.log(myn2)
//so the difference between slice and aplice is that in slice it does not include the range while in splice it includes the range 
//and removes those elements from the original array and it modifies the original array (with only the remaining elements in it)
