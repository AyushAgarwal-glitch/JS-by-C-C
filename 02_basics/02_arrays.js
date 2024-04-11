const marvel_heroes = ["thor" , "ironman" , "spiderman"]
const dc_heroes = ["superman" , "flash" , "batman"]

//marvel_heroes.push(dc_heroes) //it takes dc_heroes inside marvel_heroes and make it array within an array
//console.log(marvel_heroes)

const all_heroes = marvel_heroes.concat(dc_heroes)  //concat merges the arrays as single elements and returns a new array with all the elements
console.log(all_heroes)

const new_heroes = [...marvel_heroes, ...dc_heroes] //spread-operator -> works same as concat
console.log(new_heroes)

const anotherArray = [1,2,3,[4,5,6],7,[8,9,[0,1]]]
const real_array = anotherArray.flat(Infinity)  //flat-operator -> all the elements in the array will be flattened and new array with single elements of same type will be formed
console.log(real_array)

console.log(Array.isArray("Ayush"))
console.log(Array.from("Ayush"))
console.log(Array.from({name: "ayush"})) //interesting //gives empty array bcoz we didnt tell ki kiska array banana tha we need to tell ki keys ka array banao ya char ka banao

let score1 = 100 
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) //makes an array of the defined elements
