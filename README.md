# Objects Static Methods

## `Object.assign()`

```javascript
const src = { a: '10', b: 2 }
const target = { c: 30, d: 20, a: 5 }

// Non enumerable properties are not assigned
Object.defineProperty(target, 'hello', {
    value: 'World',
    enumerable: false,
    writable: true,
})
console.log('Src:-', src)
console.log('Target:-', target)
console.log('Is hello enumerable:- ', target.propertyIsEnumerable('hello'))

console.log("Object.keys(target)")
console.log(Object.keys(target)) // [ c, d, a ]

// Assigns property of target to src and returns src
const newSrc = Object.assign(src, target) 
console.log('Src:- ', src) // {a: 5 , b: 2, c: 30, d: 20}

// Changing property of src doesn't change property of target ( they are different property and not a reference)
```

## `Object.create()`

`Object.create()` gives more control over the property of object.

### Syntax
```javascript
Object.create(proto)
Object.create(proto, propertiesObject)

```
`propertiesObject` is same as second argument of `Object.defineProperty()`.

### Creating a normal object
```javascript
const person = Object.create(Object.prototype, {
    name: {
        value: 'Ram',
        enumerable: true,
        configurable: false,
        writable: false,
    },
    age: {
        value: 16,
        enumerable: true,
        configurable: false,
        writable: true,
    }
})

// person.name = 'Shyam'  (Throws TypeError: Cannot assign readonly property)
person.age++

console.log(person) // { name: 'Ram', age: 17}
```

You can use `Object.create()` to mimic the behavior of the new operator.

```javascript
function Constructor() {}
o = new Constructor();
// Is equivalent to:
o = Object.create(Constructor.prototype);
```

## `Object.defineProperty()`

```javascript
Object.defineProperty(obj, prop, descriptor)
```

### Types of descriptors

There can be two types of descriptors **data descriptor** and **accessor descriptor**

#### 1. Data Descriptor
```javascript
'use strict'
const person = {}

Object.defineProperty(person, 'name', {
    value: 'Ram',
    /*
    *  configurable (default => false)
    *  when set false 
    *       1. type of peoperty is cannot be canged between data nd accessor property.
    *       2. property cannot be deleted
    *       2. other attributes of it's descriptor cannot be changed
    */
    configurable: false,
    enumerable: false, // can it be show in for..of or for..in loop and Object.keys()
    writable: true, // can value be changed
})

Object.defineProperty(person, 'name', {
    value: 'Shyam', // Value can be changed because it's writable
    // configurable: true, => This will throw TypeError: Cannot redifine property
})

console.log(Object.keys(person)) // if enumerable: false => [] else => ['name']

console.log(person) // { name: 'Shyam' }
```
#### 2. Data accessor

```javascript
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
```

## Source:-

[MDN Standard Builtin Objects > Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
