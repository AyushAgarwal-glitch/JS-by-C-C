const myNums = [1,2,3,4]

/*const myTotal = myNums.reduce(function (acc , currVal){
    console.log(`acc: ${acc} and currVal: ${currVal}`)
    return acc + currVal
}, 0) // over here 0 is the initial value passed to the accumulator // it can be  changed according to our need */


const myTotal = myNums.reduce( (acc , currVal) => acc + currVal , 0)
console.log(myTotal)

const shopCart = [
    {
        itemName: 'JS',
        price: 2999
    },
    {
        itemName: 'Ruby',
        price: 299
    },
    {
        itemName: 'Python',
        price: 249
    },
    {
        itemName: 'Java',
        price: 4999
    },
    {
        itemName: 'C++',
        price: 2999
    }
]
const totalPrice = shopCart.reduce( (acc , currVal) => acc + currVal.price , 0)
console.log(totalPrice)