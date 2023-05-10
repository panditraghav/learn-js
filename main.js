console.log(name)// Variables created by using var are hoisted!
var name = "Person 1";

function doSomething() {
    if (true) {
        var num = 20;
    }
    console.log(num)
}

doSomething()

/* Using let keyword */
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1
