# JavaScript Variables

Variables are used to store some data in the memory and access/manipulate it during the runtime of the program.

## Variable declaration

To declare a variable we can use `let`, `var`, or `const` keyword.

### 1. Using `var` keyword
The `var` statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.

```javascript
console.log(name)// Variables created by using var are hoisted!
var name = "Person 1";

function doSomething() {
    if (true) {
        var num = 20;// num is function-scoped so can be accessed outside of the if block.
    }
    console.log(num) 
}

doSomething()
```

### 2. Using `let` keyword
The `let` declaration declares a block-scoped local variable, optionally initializing it to a value.
> variables declared by `let` are not hoisted.

```javascript
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1
```

#### `var` Vs `let`

```javascript
function varTest() {
  var x = 1;
  {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

### 3. Using `const` keyword

The `const` declaration creates block-scoped constants, much like variables declared using the `let` keyword. The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed.

```javascript
const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const `number'
  // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42
```
Global constants do not become properties of the `globalThis` object, unlike `var` variables.
