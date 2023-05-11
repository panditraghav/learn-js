// Implicit type conversion
let num = 33.334 + "2";// Converts 33 into string "33"
console.log("Type of num before parsing:-", typeof num, num) // String 33.3342
num = Number(num)// Converting to a integer manually
console.log("Type of num after parsing:-", typeof num, num) // number

if (typeof num === 'number') {
    console.log(num.toFixed(8));// Methods in premitive types??
}

const newNum = new Number(num)
console.log('Type of newNum', typeof newNum) // Object

//Type of null and undefined
console.log('Typeof null:-', typeof null)
console.log('Typeof null:-', typeof undefined)

function myFunc() {
    return;
}
console.log("Type of myFunc()", typeof myFunc()) // undefined

let name;
console.log("Typeof name:- ", typeof name, name) // undefined

const person = {
    name: 'person 1',
}
person.age = 22
console.log(person) // { name: 'person 1', age: 22 }
console.log(Object.keys(person)) // [ name, age ]
