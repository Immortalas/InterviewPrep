var y = 1;
if (function f(){}) {
y += typeof f;
}
console.log(y);

// Outputs:
// 1: 1undefined // TRUE
// 2: 1function
// 3: ReferenceError
// 4: TypeError

// Explanation:
// In JavaScript, function declarations are not hoisted inside blocks (like if statements). The function f is defined within the if condition, but it is not accessible outside of that block. Therefore, when we try to access typeof f, it returns 'undefined' because f is not defined in that scope. As a result, y becomes '1undefined' when we concatenate the number 1 with the string 'undefined'.