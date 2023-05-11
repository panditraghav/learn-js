# JavaScript Data types

JavaScript is a dynamically typed language, variables in JavaScript are not associated with any particular datatype, which means any variable can be assigned and re-assigned to any type of values.
```javascript
let num = 10;
num = "Some string";
num = false;
```
JavaScript is also weakly typed language, which means it allows implicit type conversion.

```javascript
// Implicit type conversion
let num = 33 + "2";// Converts 33 into string "33"
console.log("Type of num before parsing:-", typeof num) // String
num = parseInt(num)// Converting to a integer manually
console.log("Type of num after parsing:-", typeof num) // String
```

## Primitive values / data types

All types except `Object` define **immutable** values, which can't be changed only can be re-assigned to a new value, are referred as primitive types. These values are represented at the lowest level of the language.

> To test a primitive type use `typeof` operator. `typeof null` gives 'object', so to check for null use `== null`.
```javascript
//Type of null and undefined
console.log('Typeof null:-', typeof null) // Object
console.log('Typeof null:-', typeof undefined) // undefined
```

### Why we can access methods / properties of primitive types
```javascript
if (typeof num === 'number') {
    console.log(num.toFixed(8));// Methods in premitive types??
}
const newNum = new Number(num)
console.log('Type of newNum', typeof newNum) // Object
```
All primitive types, except `null` and `undefined`, have their corresponding object wrapper types, which provide useful methods for working with the primitive values.

When a property is accessed on a primitive value, JavaScript automatically wraps the value into the corresponding wrapper object and accesses the property on the object instead.

The following are primitive types in JavaScript:-

1. Null
2. Undefined
3. Boolean
4. Number
5. BigInt
6. String
7. Symbol

Everything except these are `Object` in JavaScript, like Array, Function.

### `null` VS `undefined`

Conceptually, `undefined` indicates the absence of a value, while `null` indicates the absence of an object.
Language usually defaults to undefined if something is void of value.

```javascript
// Return type of function is undefined if not returning anything
function myFunc(){
        return;
}
console.log(typeof myFunc()) // undefined

let name;
console.log(typeof name) // undefined

const myObj = {name: 'my name'};
console.log(typeof myObj.age) // undefined
```

`null` is used much less often in the core language. The most important place is the end of the prototype chain — subsequently, methods that interact with prototypes, such as `Object.getPrototypeOf()`, `Object.create()`, etc., accept or return null instead of undefined.

## Objects

In computer science, an object is a value in memory which is possibly referenced by an identifier. In JavaScript, objects are the only mutable values. Functions are, in fact, also objects with the additional capability of being callable.

In JavaScript, objects can be seen as a collection of properties. With the object literal syntax, a limited set of properties are initialized; then properties can be added and removed.

```javascript
const person ={
        name: 'person 1',
}
person.age = 22
console.log(person) // { name: 'person 1', age: 22 }
console.log(Object.keys(person)) // [ name, age ]
```

## Source:-

[MDN JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
