const { constrainedMemory } = require("process");

/*
You are given an array of objects representing students exam scores. 
Each object has the
following properties:
    • name: The student's name (a string).
    • score: The student's score on the exam (a number).
• Your task is to create a new array that contains only the names of students 
who passed the exam.
• A passing score is defined as a score of 70 or higher. Additionally, you should 
convert the names to uppercase in the new array.
• Write a function getPassingNames that takes an array of student objects and 
returns ar arrav of uppercase names of students whe passed the exam.
*/
const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
];
function getPassingNames (studentScores){
    return studentScores 
        .filter(student => student.score >= 70)
        .map(stu => stu.name.toUpperCase())
}

const passingNames = getPassingNames (studentScores); 
console.log(passingNames);
// Output should be: ["ALICE", "ВОВ"', "EVE" ]


// array
console.log(Array.isArray([])) //true
console.log(Array.isArray(["a", 12, false])) //true
console.log(Array.isArray(new Array(2))) //true

console.log(Array.isArray("[]")) //false
console.log(Array.isArray(123)) //false
console.log(Array.isArray(false)) //false
console.log(Array.isArray("1")) //false
console.log(Array.isArray({})) //false

const num1 = [1, 2, 3]
const num2 = [3, 5, 7]
console.log([...num1, ...num2]) //spread
console.log(num1.concat(num2)) //concat

console.log(num1.toString()) //convert array to string data type
console.log(num1.toString())
console.log(num1.join(".")) //array to string with separator
console.log(num1.join(","))
console.log(num1.join(":"))
console.log(num1.join(" "))

const array14 = [1, 30, 4, 21, 10000]
array14.sort((a,b)=> a - b)
console.log (`array14: ${array14}`)

const students = [
    {id: 66500102, name: "Suda", gpa: 2.5 },
    {id: 66500555, name: "ada", gpa: 2.8 },
    {id: 66500589, name: "pornchai", gpa: 3.25 },
    {id: 66500104, name: "Pornsak", gpa: 3.8 }
]
console.log (students.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())))

const array11 = ["a", "b", "c"]
const array12 = ["d", "e", "f"]
const array13 = array11.concat(array12)
console.log (array13)