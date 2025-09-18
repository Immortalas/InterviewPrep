function printNumbers(first, second, first) {
console.log(first, second, first);
}
printNumbers(1, 2, 3);

// Outputs:
// 1: 1, 2, 3
// 2: 3, 2, 3 // TRUE
// 3: SyntaxError: Duplicate parameter name not allowed in this context
// 4: 1, 2, 1

// Explanation:
// In JavaScript, function parameters are identified by their names. If a parameter name is repeated, the last occurrence of that parameter name takes precedence. In this case, the first parameter 'first' is defined twice. When the function is called with arguments (1, 2, 3), the second 'first' parameter (which is the third argument) overwrites the first one. Therefore, when console.log is executed, it prints the value of the last 'first' parameter (3), followed by the value of 'second' (2), and again the value of 'first' (3).