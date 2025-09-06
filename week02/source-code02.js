// โจทย์ในห้อง
/*
• Write a JavaScript function calculate TotalPages(items, itemsPerPage) that takes two parameters:
• items (number): The total number of items.
• itemsPerPage (number): The maximum number of items allowed per page.
• The function should return the total number of pages needed to accommodate all the items. 
If no item or itemsPerPage is 0 or a negative value, the function should throw an error since a page 
must be able to contain at least one item.
*/
function calculateTotalPages(items, itemsPerPage) {
    if (items <= 0 || itemsPerPage <= 0) throw new Error ("item or itemsPerPage must be greater than 0")
    return Math.ceil(items / itemsPerPage)
}
// Output:
console.log (calculateTotalPages(10, 3)) // 4
console.log (calculateTotalPages (25, 5)) //5
console.log (calculateTotalPages(10, 10)) //1
console.log (calculateTotalPages(0, 5)) //0
console.log (calculateTotalPages(10, 0)) //throw Error('Items per page must be greater than zero.')

// object
// 1.create obj with literals
    const Student = {
        Fname: "Amolnut" ,
        Lname: "Suksumek" ,
        age: 19 ,
        No: "055"
    }
    const {Fname, Lname} = Student
    console.log(Student);
    console.log(Student.Fname)
    console.log(Student['No']);
    console.log(Fname, Lname)

// 2. สร้าง ซ้อน obj
    const Person01 = {
    name: "Beam",
    student_id: {
        id: '055'
    }
}
console.log(Person01)

// constructor function
// 3.create constructor function
function User(Name, Age) {
    this.Name = Name;
    this.Age = Age;
}
 User.prototype.getInfo = function() {
    return this.Name + " age= " + this.Age
 }
 const people01 = new User("Beam", 19)
 const people02 = new User("CP", 20)
console.log(people01.getInfo())


//ES6 class
// 4.create class
class Persons {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}
let newPerson = new Persons("Amolnut")
console.log(newPerson);

// 5.create object.create()
let Car = { engine: true, oil: 100, cooling: 100 };
let car01 = Object.create(Car);
let car02 = Object.create(Car);
car01.engine = false;
car01.oil = 0
car01.cooling = 0

car02.engine = null;
car02.oil = "emtry"
car02.cooling = "emtry"
console.log(Car);
console.log(car01)
console.log(car02)

// 6.create loop in obj 
const studnet = {
    name: "Beam",
    age: 19
}
for (const values of Object.keys(studnet)) {
    console.log(studnet[values])
}


// equal
// 7. create function for check id and casesensitive
const studnet1 = {id:1,name:"Beam"}
const studnet2 = {id:1,name:"Beam"}
const student3 = studnet1;
function Std(std1, std2) {
    if (
        std1.id === std2.id &&
        std1.name.toLowerCase() === std2.name.toLowerCase()
    )
        return true
    else return false
}
const isEqaulStd = Std(studnet1, studnet2)
console.log(isEqaulStd)
console.log(studnet1 === studnet2);
console.log(studnet1 === student3);

// shallow equality
  let book1 = {
            isbn: 123456789 ,
            title: "JavaScript"
        }
        let book2 = {
            isbn: 123456789 ,
            title: "JavaScript"
        }

        function shallowEquality(object1 , object2){
            const key1 = object.key(object1)
            const key2 = object.key(object2)

            if(key1.length !== key2.length){
                return false
            }
            for(let key of key1){
                if(object1[key] !== object2[key]) {
                    return false
                }
            }
            return true
        }

        console.log("Shallow equality: " + shallowEquality(book1 , book2)) //True
