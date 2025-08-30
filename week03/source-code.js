// โจทย์จากในห้อง
/* Write a function getFreqOfWords(sentence) that returns an object with keys representing unique words 
in lowercase and values representing the frequency of occurrences of each word with ignore case in the 
sentence. If the input string is null or undefined, return undefined. */
function getFreqOfWords(sentence) {
    if (sentence === null || sentence === undefined || typeof sentence !== 'string') 
        return undefined
    const words = sentence.toLowerCase().split(" ")
    let freq = {}
    for (let i = 0; i < words.length; i++) {
        let arrword = words[i];
        if (freq[arrword]) {
             freq[arrword]++  
        }
        else {
            freq[arrword] = 1 
        }
    }
    return freq
}
console.log(getFreqOfWords('Today is present and present is your gift'))
//{ today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 3
console.log(getFreqOfWords('Do you best just do it')) 
// { do: 2, you: 1, best: 1, just: 1, it: 13
console.log (getFreqOfWords(null)) //undefined
console.log(getFreqOfWords(undefined)) //undefined


// write function 
// 1. function declaration
function sum(a,b) {
    return a+b
}
//sum(1,2)
const x = sum
console.log(x(1,2))
//2. function expreesion (arrow syntax) 
const sum2 = () => a+b

//3. function expression (annonymousfunction declaration)
const sum3 = function () {
    return a+b
}

// เขียนfunctionที่รับfunctionมาเป็นparameter
//1.
function Test01(x) {
    return x(20) 
}
function Test02(x) {
    return x + 50
}

console.log(Test01(Test02)); //70

//2.
function sum(a,b){
    return a+b
}
function math (a){
    return a *2
}
console.log(math(sum(2,3))) 


function test(x) {
    return x
}
function test2(x) {
    return x+50
}
console.log(test(test2)(10))

// .filter เป็น for each
const startAWords = []
words.forEach((word) => {
    if (word.startsWith("a")) {
        startAWords.push(word)
    }
})
console.log(startAWords)

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