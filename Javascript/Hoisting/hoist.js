// =======================
// 1. var Hoisting
// =======================
console.log("1. var Hoisting:");
console.log(a); // undefined → declaration is hoisted, value not assigned yet
var a = 10;
console.log(a); // 10

console.log("\n");

// =======================
// 2. let and const Hoisting (TDZ)
// =======================
console.log("2. let and const Hoisting:");
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log("\n");

// =======================
// 3. Function Declarations (Fully Hoisted)
// =======================
console.log("3. Function Declaration Hoisting:");
greet(); // Works fine → function definition is hoisted
function greet() {
  console.log("Hello from function!");
}

console.log("\n");

// =======================
// 4. Function Expressions (Not Hoisted Fully)
// =======================

sayHi(); // TypeError: sayHi is not a function
var sayHi = function () {
  console.log("Hi there!");
};
console.log("\n");

// =======================
// 5. Arrow Functions (Same as function expressions)
// =======================
console.log("5. Arrow Function Hoisting:");
hello(); // ReferenceError: Cannot access 'hello' before initialization

const hello = () => {
  console.log("Hello Arrow!");
};

console.log("\n");

// =======================
// 6. Class Hoisting (TDZ like let/const)
// =======================
console.log("6. Class Hoisting:");
const obj = new Person(); // ReferenceError: Cannot access 'Person' before initialization

class Person {
  constructor() {
    this.name = "Alice";
  }
}
console.log("\n");

// =======================
// 7. Variable Shadowing with Hoisting
// =======================
console.log("7. Variable Shadowing with Hoisting:");
var x = 5;
function test() {
  console.log(x); // undefined → local var hoisted above
  var x = 10;
  console.log(x); // 10
}
test();

console.log("\n");

// =======================
// 8. Hoisting inside Functions
// =======================
console.log("8. Hoisting inside Functions:");
function demo() {
  console.log(y); // undefined (declaration hoisted)
  var y = 100;
  console.log(y); // 100
}
demo();

