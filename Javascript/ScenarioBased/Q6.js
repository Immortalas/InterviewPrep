function foo() {
return
{
message: "Hello World"
};
}
console.log(foo());

// Outputs:
// 1: { message: 'Hello World' }
// 2: undefined // TRUE
// 3: ReferenceError
// 4: TypeError

// Explanation:
// In JavaScript, when a return statement is followed by a newline, a semicolon is automatically inserted after the return statement. This means that the function foo effectively returns undefined, and the object literal that follows is never reached. Therefore, when we call foo(), it returns undefined.