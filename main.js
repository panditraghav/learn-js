'use strict'
const person = {}

let personName = "Ram"
Object.defineProperty(person, 'name', {
    name: 'Ram',
    get: () => personName,
    set: (value) => personName = value,
    enumerable: true,
    configurable: true,
})

console.log(Object.keys(person)) // if enumerable: false => [] else => ['name']

person.name = "Shyam"

console.log(person) // {}
console.log(person.name) // Shyam
