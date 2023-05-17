'use strict'

Object.prototype.greet = function() {
    console.log("Hello World")
}

const newObj = {}

const newArr = [] // Array is also a object

// Function is also a object
function newFunction() {

}

const arrow = () => {

}

newObj.greet()
newArr.greet()
newFunction.greet()
arrow.greet()

const myObj = {
    name: 'Tanaka'
}
console.log(myObj.name) // Tanaka
delete myObj.name
console.log(myObj.name) // undefined
