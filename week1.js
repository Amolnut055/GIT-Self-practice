//เอาโจทย์จากในคาบมาทำอีกครั้ง

//1. create array with many data type
let arr = [true,1,"int151",2,false,"Self Practice"]
// 2. print array size
console.log(arr.length)
// 3. fist item
console.log(arr[0])
// 4. last item
console.log(arr.length-1)
// 5. add 2 more item at the end of array with obj and array data types respectively
arr.push({abc:1,int:6})
console.log (arr)
// 6. print every item in the array
for (i=0;i<arr.length;i++){
    console.log(arr[i])
}
// 7. shrink array with any operation  
arr.pop()
console.log(arr)
// 8. apply spread on string variable
let str="INT151" 
const strCh=[...str] //เปลี่ยนstr เป้น arr
console.log(strCh)
// 9. create array with new constructor
const arr1=new Array()
console.log(arr1)
const arr2=new Array(5)
console.log(arr2)
const arr3=new Array(1, "AB", true)
console.log(arr3)
// create array with item 10
const arr4=Array.of(10) 
console.log(arr4)
const arr5=Array.from(arr4) // copy arr4
console.log(arr5)
const str2=Array.from(str) // เอาตัวแปรจากบรรทัดที่23
console.log(str2)

const [,,a,,...b]=[5,10,15,20,25]
console.log(a) 
console.log(typeof(a)) //number
console.log(b) 
console.log(typeof(b)) // object (array)
