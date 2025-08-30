const words = ["apple", "Mango", "orange", "Banana"]
words.reverse() 
console.log(words)
// how to write callback function syntax
// 1. annonymous arrow function
const startAWords = words.filter((word) => word.startsWith("a"))
console.log(startAWords)

// 2. annoymouse function declaration
const startAwords1 = words.filter(function (word) {
  return word.startsWith("a")
})
console.log(startAwords1)

// 3. named arrow function
const checkStartA = (word) => word.startsWith("a")
const startAwords2 = words.filter(checkStartA)
console.log(startAwords2)

// 4. named function declaration
function checkStartA2(word) {
  return word.startsWith("a")
}
const startAwords3 = words.filter(checkStartA2)
console.log(startAwords3)

// .map
const employees = [
    {
        id: "e1001",
        firstname: "Somchai",
        lastname: "Jaidee",
    },
    {
        id: "e1002",
        firstname: "Pornchai",
        lastname: "Deejai",
    },
    {
        id: "e1005",
        firstname: "Suda",
        lastname: "Rakdee",
    },
]

const FullName = employees
    .map((employee) => employee.firstname.toUpperCase() + " " + employee.lastname.toUpperCase())
    .filter((employee) => employee.toLowerCase().includes("jai")) // เอาแค่เฉพาะคนที่มีคำว่า jai ในชื่อ โดย .includesจะเอาไว้ค้นหาคำนั้น
console.log(FullName)


// useReducer
const carts = [
  { productId: 1002, price: 10, amount: 5 },
  { productId: 2005, price: 100, amount: 2 },
  { productId: 5001, price: 5, amount: 4 },
]
//net price = total price * VAT 7%
const TotalPrice = carts.reduce((total, item) => total += item.amount * item.price,0)*1.07
console.log(TotalPrice.toFixed(2))

const nums = [2, 4, 6]
// nums[nums.length] = 8
console.log(nums.push(8)) //append in the end of array, return new length
console.log(nums)
nums.unshift(10) //add in the beginning of array
console.log(nums)
nums.pop() //remove in the end of array
console.log(nums)
nums.shift() //remove in the beginning of array
console.log(nums)


const fruit = ["apple","orange","banana"]
fruit.splice(2, 0, "cherry", "berry")
console.log(fruit)
// delete cherry
// ["apple","orange","cherry","berry","banana"]
fruit.splice(2,1)
console.log(fruit)
//  ["apple","orange","berry","banana"]
// replace "berry" with "mango"
fruit.splice(2,1,"mango")
console.log(fruit)
// [ 'apple', 'orange', 'mango', 'banana' ]

console.log(fruit.slice(1)) // ["orange", "banana", "mango", "cherry"]
console.log(fruit.slice(0, 3)) //["apple", "orange", "banana"]
console.log(fruit.slice(2, 5)) // ["banana", "mango", "cherry"]
console.log(fruit.slice(2)) // ["banana", "mango", "cherry"]
console.log(fruit.slice(-3)) // ["banana", "mango", "cherry"]
