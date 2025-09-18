const printNumbersArrow = (first, second, first) => {
console.log(first, second, first);
}
printNumbersArrow(1, 2, 3);

// Outputs:
// 1: 1, 2, 3
// 2: 3, 2, 3
// 3: SyntaxError: Duplicate parameter name not allowed in this context // TRUE
// 4: 1, 2, 1

// Explanation:
// In JavaScript, arrow functions do not allow duplicate parameter names. If you try to define an arrow function with duplicate parameter names, it will result in a syntax error. Therefore, when attempting to define the arrow function printNumbersArrow with two parameters named 'first', a SyntaxError is thrown indicating that duplicate parameter names are not allowed in this context.