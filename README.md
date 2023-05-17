# Objects

In computer science, an object is a value in memory which is possibly referenced by an identifier. In JavaScript, objects are the only mutable values. Functions are, in fact, also objects with the additional capability of being callable.

In JavaScript, objects can be seen as a collection of properties. It is used to store various keyed collections and more complex entities. With the object literal syntax, a limited set of properties are initialized; then properties can be added and removed.

Property values can be values of any type, including other objects, which enables building complex data structures.

Object can be created using `Object()` constructor or object literal `{}`.

```javascript
const person ={
    name: 'person 1',
}
person.age = 22
console.log(person) // { name: 'person 1', age: 22 }
console.log(Object.keys(person)) // [ name, age ]
```

Nearly all objects in JavaScript are instances of `Object`, a typical object inherits properties (including methods) from `Object.prototype`, although these properties may be shadowed (a.k.a. overridden).

Changes to the `Object.prototype` object are seen by all objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain.

```javascript
Object.prototype.greet = function() {
    console.log("Hello World")
}

const newObj = {}

const newArr = [] // Array is also a object

// Function is also a object
function newFunction() {}

newObj.greet() // Hello World
newArr.greet() // Hello World
newFunction.greet() // Hello World
```

## Deleting property from object

```javascript
const myObj = {
   name: 'Tanaka'
}
console.log(myObj.name) // Tanaka
delete myObj.name
console.log(myObj.name) // undefined
```

## Object type coercion

JavaScript is a **weakly typed language**. This means that you can often use a value of one type where another type is expected, and the language will convert it to the right type for you.

### Primitive coercion of objects

This happens when a primitive value is expected but not given, for example `+` operator.

```javascript
const obj = {
    name: 'My object'
}
console.log(obj + []) // [Object Object]
```

The `+` operator needs primitive values to operate on so first `obj` and `[]` is converted to primitive values.
To convert to primitive values JavaScript calls some methods in following order:-

#### 1. `[@@toPrimitive]()`
If present must return a primitive, returning an object result in `TypeError.`

#### 2. `toValue()`
If `[@@toPrimitive]()` method is not present `toValue()` is called instead.

#### 3. `toString()`
If `[@@toPrimitive]()` and `toValue()` method is not present `toString()` is called instead.

> If one of `toValue()` and `toString()` returns a object others value is used

Neither `{}` nor `[]` have a `[@@toPrimitive]()` method. Both `{}` and `[]` inherit `valueOf()` from `Object.prototype.valueOf`, which returns the object itself. Since the return value is an object, it is ignored. Therefore, `toString()` is called instead. `{}.toString()` returns "[object Object]", while `[].toString()` returns "", so the result is their concatenation: "[object Object]".

We can add a `[@@toPrimitive]()` method to our object to change it's behaviour.

```javascript
Object.defineProperty(obj, Symbol.toPrimitive, {
    value: function() {
        return 'myObject'
    },
    writable: true,
    enumerable: true,
    configurable: true
})

console.log(obj + []) // myObject
```

## Source:-

[MDN JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

[MDN Standard Builtin Objects > Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

[MDN Delete Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
