function foo() {
let x = y = 0;
x++;
y++;
return x;
}
console.log(foo(), typeof x, typeof y);

// Outputs:
// 1: 1, undefined and undefined
// 2: ReferenceError: X is not defined
// 3: 1, undefined and number // TRUE
// 4: 1, number and number

// Explanation:
// In the function foo, the line let x = y = 0; is interpreted as:
// 1. y = 0; // This assigns 0 to y and creates a global variable y (if not in strict mode).
// 2. let x = y; // This declares a block-scoped variable x and initializes it with the value of y (which is 0).
// Therefore, x is a local variable to the function foo, while y becomes a global variable. After incrementing both, x becomes 1 and y becomes 1. When we log the types, x is not defined outside the function (hence typeof x is 'undefined'), while y is defined globally and its type is 'number'.