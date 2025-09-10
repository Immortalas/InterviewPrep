// ===================================================
// 1. Function Scope
// ===================================================
function func() {
  var a = 1;
  let b = 2;
  const c = 3;

  console.log("Inside function:", a, b, c); 
}
func();

// these will throw ReferenceError
// console.log(a);
// console.log(b);
// console.log(c);


// ===================================================
// 2. Block Scope
// ===================================================
if (true) {
  var x = 10;
  let y = 20;
  const z = 30;
}

console.log("Block scope with var:", x); //  10
// console.log(y); // ReferenceError
// console.log(z); // ReferenceError


// ===================================================
// 3. Initialization
// ===================================================
var v1; // Ok
let v2; // Ok
console.log("Initialized var:", v1); // undefined
console.log("Initialized let:", v2); // undefined

// const v3; //  SyntaxError: Missing initializer in const declaration


// ===================================================
// 4. Redeclaration
// ===================================================
var r1 = 1;
var r1 = 2; 
console.log("Redeclared var:", r1); 

let r2 = 3;
// let r2 = 4; // SyntaxError: Identifier 'r2' has already been declared


// ===================================================
// 5. Reassignment
// ===================================================
var reVar = 1;
reVar = 2; 
console.log("Reassign var:", reVar); 

let reLet = 3;
reLet = 4; 
console.log("Reassign let:", reLet); 

const reConst = 5;
// reConst = 6; // TypeError: Assignment to constant variable.


// ===================================================
// 6. Hoisting
// ===================================================
console.log("Hoisting var:", hoistVar); //undefined
var hoistVar = "I am hoisted (var)";

// below will throw ReferenceError (Temporal Dead Zone)
// console.log("Hoisting let:", hoistLet);
// let hoistLet = "I am not hoisted (let)";

// console.log("Hoisting const:", hoistConst);
// const hoistConst = "I am not hoisted (const)";